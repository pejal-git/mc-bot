// src/createBot.js
const mineflayer = require('mineflayer')
const fs = require('fs')
const path = require('path')
//const pluginConfig = require('./config/plugins.json').plugins
//const eventConfig = require('./config/plugins.json').events

const pluginConfigPath = path.join(__dirname, './config/plugins.json')

// Load or create config
let configData = { plugins: {}, events: {} }
if (fs.existsSync(pluginConfigPath)) {
  configData = JSON.parse(fs.readFileSync(pluginConfigPath))
}

// Helper to auto add missing entries with defaults
function ensureConfigEntry(type, name, defaults = {}) {
  if (!configData[type][name]) {
    configData[type][name] = { enabled: true, ...defaults }
    console.log(`📝 Added default config for ${type} "${name}"`)
  }
}

function createBot(config) {
  const bot = mineflayer.createBot(config)
  console.log(`🤖 Bot created: ${config.username}`)

  // ----------- Load Plugins Dynamically -----------
  const pluginsDir = path.join(__dirname, 'plugins')
  fs.readdirSync(pluginsDir).forEach(file => {
    if (!file.endsWith('.js')) return
    const pluginName = path.basename(file, '.js')
    //const pluginSettings = pluginConfig[pluginName]

    // Auto-add to config if missing
    ensureConfigEntry('plugins', pluginName)
  
    const pluginSettings = configData.plugins[pluginName]
    if (!pluginSettings.enabled) {
      console.log(`⚪ Plugin ${pluginName} is disabled.`)
      return
    }

    try {
      const plugin = require(path.join(pluginsDir, file))
      if (typeof plugin === 'function') {
        bot.loadPlugin(() => plugin(bot, pluginSettings))
        console.log(`✅ Loaded plugin: ${pluginName}`)
      }
    } catch (err) {
      console.error(`❌ Failed to load plugin ${pluginName}:`, err.message)
    }
  })

  // ----------- Load Events Dynamically -----------
  const eventsDir = path.join(__dirname, 'events')
  fs.readdirSync(eventsDir).forEach(file => {
    if (!file.endsWith('.js')) return
    const eventName = path.basename(file, '.js')
    //const eventSettings = eventConfig[eventName]
    
    // Auto-add to config if missing
    ensureConfigEntry('events', eventName)

    const eventSettings = configData.events[eventName]
    if (!eventSettings.enabled) {
      console.log(`⚪ Event ${eventName} is disabled.`)
      return
    }

    try {
      const eventHandler = require(path.join(eventsDir, file))
      if (typeof eventHandler === 'function') {
        eventHandler(bot, eventSettings)
        console.log(`✅ Registered event: ${eventName}`)
      }
    } catch (err) {
      console.error(`❌ Failed to register event ${eventName}:`, err.message)
    }
  })

  // Save updated config back to plugins.json
  fs.writeFileSync(pluginConfigPath, JSON.stringify(configData, null, 2))

  return bot
}

module.exports = createBot

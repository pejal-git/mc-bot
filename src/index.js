// src/index.js
const createBot = require('./createBot')
const { envCheckAndGetConfig } = require('./config/env')
const logger = require('./utils/logger')

const config = envCheckAndGetConfig()
const bot = createBot(config)

// Example: start anti-AFK plugin after spawn on login
bot.once('login', () => {
  logger.log('🔑 Bot logged in')

  bot.on('spawn', () => {
    if (bot.antiAfk?.start) bot.antiAfk.start()
    if (bot.tpaGuard?.start) bot.tpaGuard.start()
  })
})
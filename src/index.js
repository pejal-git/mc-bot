// src/index.js
const createBot = require('./createBot')
const { envCheckAndGetConfig } = require('./config/env')

const config = envCheckAndGetConfig()
const bot = createBot(config)

// Example: start anti-AFK plugin after login
bot.once('login', () => {
  console.log('🔑 Bot logged in')
  if (bot.antiAfk?.start) bot.antiAfk.start()
  if (bot.tpaGuard?.start) bot.tpaGuard.start()
})
// src/index.js
const createBot = require('./createBot')
const { envCheckAndGetConfig } = require('./config/env')

const config = envCheckAndGetConfig()
const bot = createBot(config)

// Example: start anti-AFK plugin after login
bot.once('login', () => {
  if (bot.antiAfk?.start) bot.antiAfk.start()
})

// src/bot.js
const mineflayer = require('mineflayer')

// Example plugin
function antiAfk(bot) {
  function start() {
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 60000)
  }
  // Namespace plugin API
  bot.antiAfk = {}
  bot.antiAfk.start = start
}

// Another plugin example
function myPlugin(bot) {
  function sayYay() {
    bot.chat('Yay!')
  }
  bot.myPlugin = { sayYay }
}

function launcBot(config) {
  const bot = mineflayer.createBot(config)

  // Load your plugins
  //bot.loadPlugin(antiAfk)
  bot.loadPlugin(myPlugin)

  // Example: call plugin function after login
  bot.once('login', () => {
    console.log(`✅ Bot ${bot.username} logged in!`)
    bot.myPlugin.sayYay()     // Yay!
    //bot.antiAfk.start()     // start anti-Afk
  })

  // Optional: handle bot errors
  bot.on('error', (err) => console.error('Bot error:', err))
  bot.on('end', () => console.log('Bot disconnected.'))

  return bot
}

module.exports = launcBot

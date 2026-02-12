// src/events/spawn.js
module.exports = (bot, options = {}) => {
  bot.on('spawn', () => {
    console.log(`🌟 Bot has spawned in the world!`)
    if (options.welcomeMessage) bot.chat(options.welcomeMessage)
  })
}

// src/plugins/antiAfk.js
module.exports = (bot, options = {}) => {
  const jumpInterval = options.jumpInterval || 60000
  const jumpDuration = options.jumpDuration || 500

  bot.antiAfk = {
    start: () => {
      console.log('🛡 Anti-AFK started')
      setInterval(() => {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), jumpDuration)
      }, jumpInterval)
    }
  }
}

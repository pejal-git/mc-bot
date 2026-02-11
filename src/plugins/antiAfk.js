module.exports = (bot) => {
  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 60000)
  })
}

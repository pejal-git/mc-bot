module.exports = (bot) => {
  bot.on('error', (err) => {
    console.error('❌ Bot error:', err.message)
  })
}

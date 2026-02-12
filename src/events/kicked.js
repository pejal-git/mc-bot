module.exports = (bot) => {
  bot.on('kicked',(reason,loggedIn) => {
    if (!loggedIn) {
      console.error(`🚨 Bot Kicked before login: ${reason}`)
    } else {
      console.error(`🚨 Bot Kicked after login: ${reason}`)
    }
    
  })
}
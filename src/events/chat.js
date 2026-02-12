// src/events/chat.js
module.exports = (bot, options = {}) => {
  const greetMessage = options.greetMessage || "Hello, {username}!"

  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (message.toLowerCase() === 'hi') {
      const msg = greetMessage.replace("{username}", username)
      bot.chat(msg)
    }
  })
}

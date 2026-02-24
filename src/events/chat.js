// src/events/chat.js
module.exports = (bot, options = {}) => {
  if (!options.enabled) return

  const caseSensitive = options.caseSensitive === true
  const triggers = Array.isArray(options.triggers)
    ? options.triggers
    : []

  /* src/config/plugins.json support array of triggers, for example:
  "chat": {
      "enabled": true,
      "caseSensitive": true,
      "triggers": [
        {
          "msg": "Hi",
          "reply": "Hello, {username}! 👋"
        },
        {
          "msg": "wb",
          "reply": "Thank you, {username} <3"
        },
        {
          "msg": "bot",
          "reply": "Yes {username}? I am alive."
        }
      ]
    }
  */

  bot.on('chat', (username, message) => {
    if (username === bot.username) return

    for (const triggerObj of triggers) {
      let incoming = message
      let trigger = triggerObj.msg

      if (!caseSensitive) {
        incoming = incoming.toLowerCase()
        trigger = trigger.toLowerCase()
      }

      if (incoming === trigger) {
        const reply = triggerObj.reply.replace("{username}", username)
        bot.chat(reply)
        break
      }
    }
  })
}
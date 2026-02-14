// src/events/spawn.js
module.exports = (bot, options = {}) => {
  let respawned = false

  bot.on('respawn', () => {
    respawned = true
  })

  bot.on('spawn', () => {
    if (respawned) {
        console.log(`🌟 Bot has respawned at ${bot.entity.position.floored()}`)
        if (options.welcomeMessage) bot.chat(options.welcomeMessage)
        respawned = false
    } else {
    console.log(`🌟 Bot has spawned in the world!`)
    //logger.time(`🌟 Bot has spawned in the world!`)
    if (options.welcomeMessage) bot.chat(options.welcomeMessage)
    }
  })
}

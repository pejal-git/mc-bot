const mineflayer = require('mineflayer')
const config = require('./config/env')

function createBot() {
  const bot = mineflayer.createBot(config)

  //require('./events/spawn')(bot)
  //require('./events/chat')(bot)
  require('./events/error')(bot)

  require('./plugins/antiAfk')(bot)
  //require('./plugins/autoEat')(bot)

  return bot
}

module.exports = createBot

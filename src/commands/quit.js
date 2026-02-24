// src/commands/quit.js
const logger = require('../utils/logger')

module.exports = {
  name: 'quit',
  description: 'Shutdown bot',

  async execute(bot) {
    logger.log('🚀[Terminal-CMD:Quit] Shutting down bot...');
    bot.quit();
    process.exit(0);
  }
};
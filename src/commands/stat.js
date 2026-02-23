// src/commands/stat.js
const logger = require('../utils/logger')

module.exports = {
  name: 'stat',
  description: 'Show bot health and food',

  async execute(bot) {
    logger.msg(`🚀[Terminal-CMD:Status] Health: ${bot.health} | Food: ${bot.food}`);
  }
};
// src/commands/pos.js
const logger = require('../utils/logger')

module.exports = {
  name: 'pos',
  description: 'Show bot position',

  async execute(bot) {
    const pos = bot.entity.position;
    logger.msg(
      `🚀[Terminal-CMD:Pos] Position -> X:${pos.x.toFixed(2)} Y:${pos.y.toFixed(2)} Z:${pos.z.toFixed(2)}`
    );
  }
};
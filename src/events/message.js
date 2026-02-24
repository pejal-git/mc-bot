// src/events/message.js
const stringify = (msg) => {
  if (!msg) return '';
  if (typeof msg === 'string') return msg;
  if (msg.toString) return msg.toString();
  return JSON.stringify(msg);
};
const logger = require('../utils/logger');

module.exports = (bot, options = {}) => {
    bot.on('message', (jsonMsg, position) => {
        logger.msg(`[${position}] ${stringify(jsonMsg)}`);
    });
    bot.on('title', (title, type) => {
        logger.msg(`[${type}] ${stringify(title)}`);
    });
    bot.on('actionBar', (jsonMsg) => {
        logger.msg(`[actionbar] ${stringify(jsonMsg)}`);
    });
}

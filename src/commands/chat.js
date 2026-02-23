// src/commands/chat.js
const logger = require('../utils/logger')

module.exports = {
  name: 'chat',
  description: 'Send chat message to server',

  async execute(bot, args) {
    if (!args.length) return logger.msg('🚀[Terminal-CMD:Chat] Usage: chat <message>');
    const message = args.join(' ');
    logger.msg(`🚀[Terminal-CMD:Chat] ${message}`);
    bot.chat(message);
  },
};
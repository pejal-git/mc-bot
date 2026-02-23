// src/plugins/terminalCommand.js
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger')


module.exports = (bot, options = {}) => {
  let rl = null;
  const commands = new Map();

  // Load all commands from src/commands
  const commandsPath = path.join(__dirname, '../commands');
  const commandFiles = fs.existsSync(commandsPath)
    ? fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'))
    : [];

  for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    if (!command.name || typeof command.execute !== 'function') {
      logger.warn(`[Terminal-CMD] Skipping invalid command file: ${file}`);
      continue;
    }
    commands.set(command.name, command);
    logger.log(`✅ Loaded command: ${command.name}`);
  }

  function start() {
    if (rl) return; // already running

    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    logger.log('🚀[Terminal-CMD] started');

    rl.on('line', async (input) => {
      const trimmed = input.trim();
      if (!trimmed) return;

      const args = trimmed.split(/\s+/);
      const commandName = args.shift().toLowerCase();

      const command = commands.get(commandName);
      if (!command) {
        logger.warn(`[Terminal-CMD] Unknown command: ${commandName}`);
        return;
      }

      try {
        await command.execute(bot, args);
      } catch (err) {
        logger.error(`[Terminal-CMD] Error executing ${commandName}:`, err);
      }
    });
  }

  function stop() {
    if (!rl) return;
    rl.close();
    rl = null;
    logger.log('🚀[Terminal-CMD] stopped');
  }

  bot.terminalCommand = {
    start,
    stop
  };

  // Auto-start on plugin load
  //start();
};
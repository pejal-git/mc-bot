// src/tpaGuard.js
module.exports = (bot, options = {}) => {
  const autoDeny = options.autoDeny || true
  const denyMsg = options.denyMsg || "Sorry! I'm not available to accept tpa right now."

  bot.tpaGuard = {
    start: () => {
      console.log('🚀 TPA-Guard started')
      bot.on('message', (jsonMsg) => {
        const message = jsonMsg.toString();
        const teleportPatterns = [
        /has requested that you teleport to them/i,
        /has requested to teleport to you/i
        ];
        const isTeleportRequest = teleportPatterns.some(p => p.test(message));
        if (!isTeleportRequest) return;
        let requester = null;
        if (message.includes('┃')) {
          requester = message.split('┃')[1]?.trim().split(' ')[0];
        } else {
          requester = message.split(' has requested')[0]?.trim();
        }
        if (!requester) {
          console.warn('🚀 TPA-Guard: requester could not be parsed!');
          return;
        }
        if (autoDeny) {
          bot.chat('/tpdeny');
          console.log(`🚀 TPA-Guard rejected tpa from ${requester}`);
        } else {
          console.log(`🚀 TPA-Guard detected tpa from ${requester}`);
        }
        bot.whisper(requester,denyMsg);
      })
    }
  }
}
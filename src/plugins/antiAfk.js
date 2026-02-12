// src/plugins/antiAfk.js
module.exports = (bot, options = {}) => {
  let paused = false
  let stopped = false
  let timeout = options.timeout || null
  const minDelay = options.minDelay || 22000
  const maxDelay = options.maxDelay || 47000
  const minDegree = options.minDegree || -25
  const maxDegree = options.maxDegree || 25

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getNextIdleDelay() {
    // 22s – 47s (non-periodic, anti-cheat friendly)
    return randomBetween(minDelay, maxDelay);
  }

  function getYawDelta() {
    // Small human-like head turn (degrees → radians)
    const degrees = randomBetween(minDegree, maxDegree);
    return degrees * (Math.PI / 180);
  }

  async function performIdleLook() {
    if (paused || stopped) return;
    if (!bot.entity) return;

    const newYaw = bot.entity.yaw + getYawDelta();
    await bot.look(newYaw, bot.entity.pitch, true);
    console.log('🛡 Anti-AFK: subtle yaw adjustment');

    // schedule next look
    scheduleNext(performIdleLook);
  }

  function scheduleNext(action) {
    if (stopped) return;

    const delay = getNextIdleDelay();
    timeout = setTimeout(() => {
      if (paused || stopped) return;
      action();
    }, delay);
  }

  function stop() {
    stopped = true;
    paused = true;

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    logger.log('🛡 Anti-AFK stopped.');
  }

  bot.antiAfk = {
    start: () => {
      console.log('🛡 Anti-AFK started')
      scheduleNext(performIdleLook)
    },
    pause: () => {
      paused = true
      console.log('🛡 Anti-AFK paused')
    },
    resume: () => {
      if (stopped) return
      paused = false
      console.log('🛡 Anti-AFK resumed')
    }
  }
}

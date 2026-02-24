// src/utils/logger.js
function pad(n, z = 2) {
  return n.toString().padStart(z, '0')
}

function getTimestamp(format = 'full', date = new Date()) {
  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())
  const seconds = pad(date.getSeconds())

  switch (format) {
    case 'time':
      return `${hours}:${minutes}:${seconds}`

    case 'short':
      return `${day}-${month} ${hours}:${minutes}`

    case 'full':
    default:
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
}

function print(message, format, prefix = '', method = 'log') {
  const timestamp = getTimestamp(format)
  console[method](`[${timestamp}] ${prefix}${message}`)
}

module.exports = {
  // Log message (no date or time)
  log: (message) => {
    console.log(message)
  },
  // Normal message (only time)
  msg: (message) => {
    print(message, 'time')
  },
  // Error (full date + time)
  error: (message) => {
    print(message, 'full', '❌ ERROR: ', 'error')
  },
  // Warning (short date + time)
  warn: (message) => {
    print(message, 'short', '⚠️ WARN: ', 'warn')
  },
  // Force full timestamp
  fullTime: (message) => {
    print(message, 'full')
  },
  // Force short timestamp
  shortTime: (message) => {
    print(message, 'short')
  }
}



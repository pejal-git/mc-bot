require('dotenv').config()

const required =  ['MC_HOST', 'MC_PORT', 'MC_USERNAME', 'MC_AUTH', 'MC_VERSION']

for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`)
    process.exit(1)
  }
}

module.exports = {
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT) || 25565,
  username: process.env.MC_USERNAME,
  password: process.env.MC_PASSWORD,
  auth: process.env.MC_AUTH || 'microsoft',
  version: process.env.MC_VERSION || false
}

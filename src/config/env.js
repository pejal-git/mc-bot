const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

// Function to validate .env
function envCheckAndGetConfig() {
  const envPath = path.join(__dirname, '../../.env')
  const envExample = path.join(__dirname, '../../.env-example')

  // Check if .env file exists
  if (!fs.existsSync(envPath)) {
    console.error(`❌ .env file is missing!`)
    console.error(`Create it in ${envPath}`)
    console.error(`For reference, see ${envExample}`)
    process.exit(1)
  }

  // Load .env
  dotenv.config({ path: envPath })

  // Validate required variables
  const required =  ['MC_HOST', 'MC_PORT', 'MC_USERNAME', 'MC_AUTH', 'MC_VERSION']
  for (const key of required) {
    if (!process.env[key]) {
      console.error(`❌ Missing environment variable: ${key}`)
      process.exit(1)
    }
  }

  console.log('✅ Environment variables validated.')

  return {
    host: process.env.MC_HOST,
    port: parseInt(process.env.MC_PORT),
    username: process.env.MC_USERNAME,
    password: process.env.MC_PASSWORD,
    auth: process.env.MC_AUTH,
    version: process.env.MC_VERSION
  }
}

module.exports = {
  envCheckAndGetConfig
}

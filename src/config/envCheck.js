const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

function envCheck() {
  const envPath = path.join(__dirname, '../../.env')

  // Check if .env file exists
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env file is missing.')
    console.error('Create .env before starting the bot.')
    console.error('See .env.example for reference.')
    process.exit(1)
  }

  // Load .env
  dotenv.config({ path: envPath })

  // Validate required variables
  const required = [
    'MC_HOST',
    'MC_USERNAME'
  ]

  for (const key of required) {
    if (!process.env[key]) {
      console.error(`❌ Missing environment variable: ${key}`)
      process.exit(1)
    }
  }

  console.log('✅ Environment variables validated.')
}

module.exports = envCheck

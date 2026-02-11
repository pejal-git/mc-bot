// src/index.js
const launchBot = require('./bot')
const config = require('./config/env').envCheckAndGetConfig()
launchBot(config)

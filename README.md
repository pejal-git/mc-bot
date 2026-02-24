# MC-Bot

![GitHub License](https://img.shields.io/github/license/pejal-git/mc-bot)
![GitHub repo size](https://img.shields.io/github/repo-size/pejal-git/mc-bot)

An [Experimental] Modular Minecraft bot built with mineflayer.  
This is a slow-paced ongoing project without official release or support.  

## Official Mineflayer 🔗 [prismarinejs.github.io/mineflayer/](https://prismarinejs.github.io/mineflayer/)

[![Github](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/PrismarineJS/mineflayer)
[![NPM version](https://img.shields.io/npm/v/mineflayer.svg?color=success&label=npm%20package&logo=npm)](https://www.npmjs.com/package/mineflayer)
[![Build Status](https://img.shields.io/github/actions/workflow/status/PrismarineJS/mineflayer/ci.yml.svg?label=CI&logo=github&logoColor=lightgrey)](https://github.com/PrismarineJS/mineflayer/actions?query=workflow%3A%22CI%22)
[![Try it on gitpod](https://img.shields.io/static/v1.svg?label=try&message=on%20gitpod&color=brightgreen&logo=gitpod)](https://gitpod.io/#https://github.com/PrismarineJS/mineflayer)
[![Open In Colab](https://img.shields.io/static/v1.svg?label=open&message=on%20colab&color=blue&logo=google-colab)](https://colab.research.google.com/github/PrismarineJS/mineflayer/blob/master/docs/mineflayer.ipynb)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/PrismarineJS)](https://github.com/sponsors/PrismarineJS)
![Stars](https://img.shields.io/github/stars/PrismarineJS/mineflayer)

[![Official Discord](https://img.shields.io/static/v1.svg?label=OFFICIAL&message=DISCORD&color=blue&logo=discord&style=for-the-badge)](https://discord.gg/GsEFRM8)



## Installation  

### Requirements  

1. node version 24.13.0 or later  
2. dotenv version 17.2.0 or later  
3. mineflayer version 4.34.0 or later  

### Step 1: Clone repository  

Open terminal and run git clone using https `git clone https://github.com/pejal-git/mc-bot.git` or using SSH `git clone git@github.com:pejal-git/mc-bot.git`.  
Open mc-bot directory with `cd mc-bot`.  

### Step 2: Install dependencies

First install Node.js >= 24.13.0 from [nodejs.org](https://nodejs.org/en/download/), check node version with `node -v`.  
Then install mineflayer `npm install mineflayer`, check mineflayer version with `npm list mineflayer`.  
Finally install dotenv `npm install dotenv`, check dotenv version with `npm list dotenv`.  

To update mineflayer (or any Node.js) package and its dependencies, do `npm update`.

### Step 3: Create config .env

Run `nano .env`, then paste example config below and edit it.  

``` env
MC_HOST=localhost       # Minecraft server address
MC_PORT=25565           # Minecraft server port (default: 25565)
MC_USERNAME=MC_Bot      # Your Minecraft bot username
MC_PASSWORD=P4$5W0RD    # Your Minecraft account password. Leave blank if Auth using Microsoft.
MC_AUTH=offline         # Authentication type (microsoft | mojang | offline)
MC_VERSION=1.20         # Minecraft version
```

By default, 'MC_HOST', 'MC_PORT', 'MC_USERNAME', 'MC_AUTH' and 'MC_VERSION' are set as required variables.  

Edit 'MC_USERNAME=MC_Bot' to login into servers with username 'MC_Bot'.  
Use 'MC_AUTH=offline' if you want to login into offline servers (Cracked or LAN).  
To login with specific account, you can set 'MC_USERNAME' and 'MC_PASSWORD' (still offline servers).  

You may leave 'MC_PASSWORD=' blank or remove the line completely to login into microsoft account.  
Use 'MC_AUTH=microsoft' then provide correct 'MC_USERNAME' to login with microsoft account.  
Then during first run, a microsoft login link will be prompted.  
**REMINDER: Never upload your .env file to avoid credentials leak.**

### Step 4: Running MC-Bot  

Development: run with `npm run dev`.  
Production: run with `npm start`.  

## File Structure

``` text
mc-bot/
│
├── .env                  # Bot configs
├── .env-example          # Example .env 
├── LICENSE               # mc-bot license
├── package.json          # Config, Dependancy, metadata
│
├── docs/
│   ├── README.md         # mc-bot README
│   └── ...
│
├── src/
│   ├── index.js          # Entry point
│   ├── createBot.js      # Bot creation logic
│   │
│   ├── commands/         # terminalCommand modules
│   │   ├── chat.js
│   │   ├── pos.js
│   │   └── ...
│   │
│   ├── config/
│   │   ├── env.js        # Env loader & validator
│   │   └── plugins.js    # Plugins & Events config
│   │
│   ├── events/           # All bot events here
│   │   ├── chat.js
│   │   ├── spawn.js
│   │   └── ...
│   │
│   ├── plugins/          # All plugins here
│   │   ├── antiAfk.js
│   │   ├── autoEat.js
│   │   └── ...
│   └── utils/            # Utilities
│       ├── logger.js
│       └── ...
│
└── node_modules/         # Node modules
```

## FAQ

Q: Error Msg: RangeError [ERR_OUT_OF_RANGE]: Read error for undefined : The value of "offset" is out of range. It must be >= 0 and <= 584542.  
A: Fix by changing 'MC_VERSION' in .env to relevant to relevant minecraft version (newer or older).
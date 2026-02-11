# Planned file structure
mc-bot/
│
├── src/
│   ├── index.js          # Entry point
│   ├── bot.js            # Bot creation logic
│   │
│   ├── config/
│   │   └── env.js        # Loads + validates environment variables
│   │
│   ├── plugins/
│   │   ├── antiAfk.js
│   │   ├── autoEat.js
│   │   ├── tpaGuard.js
│   │   └── ...
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   └── helpers.js
│   │
│   └── events/
│       ├── spawn.js
│       ├── chat.js
│       ├── error.js
│       └── ...
│
├── .env
├── .env.example
├── package.json
├── package-lock.json
└── README.md

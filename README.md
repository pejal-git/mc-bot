# mc-bot

## Planned file structure

```text
mc-bot/
│
├── src/
│   ├── index.js          # Entry point
│   ├── createBot.js      # Bot creation logic
│   │
│   ├── config/
│   │   └── env.js        #  Validates and load environment variables
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
├── .env-example
├── package.json
├── package-lock.json
└── README.md
```

## Refined file structure

``` text
mc-bot/
│
├── src/
│   ├── index.js          # Entry point
│   ├── createBot.js      # Bot creation logic
│   │
│   ├── config/
│   │   └── env.js        # Env loader & validator
│   │
│   ├── plugins/          # All plugins here
│   │   ├── antiAfk.js
│   │   ├── autoEat.js
│   │   └── ...
│   │
│   └── events/           # All bot events here
│       ├── chat.js
│       ├── spawn.js
│       └── error.js
```

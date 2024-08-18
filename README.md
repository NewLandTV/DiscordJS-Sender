# Sender

You can send a message to a designated channel.

## How to run

### Clone this repository

```sh
git clone https://github.com/NewLandTV/DiscordJS-Sender.git
cd DiscordJS-Sender
```

### Install node packages

```sh
npm install
```

### Setup config.json

You should write your bot's token and your guild id, channel id, bot's client id...

```json
{
    "clientId": "your bot's applicationId",
    "guildId": "your guild id",
    "token": "your bot's token",
    "channelId": "any channel id (a channel to send messages)"
}
```

### Deploy slash commands

```sh
deploy
```

### Run bot

Run the run.bat file or follow below.

```sh
node .  # node index.js
```

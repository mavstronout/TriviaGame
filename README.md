# TriviaGame

This game was written entirely in javascript to demonstrate the use of setTimeout() function in a trivia game. In this case we have integrated this bot to run with the Discord.jS API and such requires the use of the latest version of node and npm in order to compile.

This bot is not currently running permanently, which would require the use of another package called `pm2`

As usual, this requires the additional steps from the cli:
1. `git -clone to download the repository`
2. `npm install`
3. `node app.js`
4. Comman bot in any discord server's channel by using the prefix `$`
        i.e. `$help`

A more detailed guide if you aren't familiar with setting up on Discord (required because I cannot post the key to access and command my bot)

1. Create App and Bot Account
2. Go to the Discordapp.com Application Page
3. Create a New Application, and give it a name
4. Click Create a bot account, then Yes, do it
5. Visit https://discordapp.com/oauth2/authorize?client_id=APP_ID&scope=bot , replacing APP_ID with the Client/Application ID from the app page, to add the bot to your server (or ask a server admin to do it for you).
6. Copy your bot's Secret Token and keep it for later

Pre-requisite software
1. Install the following software in Windows:
   * nodejs from the downloads page (Version 6.X and higher required)
If you need sound support, you'll need 2 more things:
   * ffmpeg which is available on this page
The new windows build tools:
   * Open an ADMIN command prompt, or PowerShell
2. Run the following command: `npm i -g --production windows-build-tools`
This installs Python 2.7 and the C++ Build Tools standalone.
Once you have this all installed, create a folder for your project and install discord.js: `npm i discord.js`
   
   And that's it!
import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import mongoose from 'mongoose';
import 'dotenv/config';
import testSchema from './test-schema'

const client = new DiscordJS.Client({
    intents: [
        // What does the bot intend to do?
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

client.on('ready', async () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['822858653249044561'],
        mongoUri: process.env.MONGO_URI,
    })

    setTimeout(async () => {
        await new testSchema({
            message: 'hello world!!',
        }).save()
    }, 1000)
})

client.login(process.env.TOKEN)
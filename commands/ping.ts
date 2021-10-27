import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with pong',

    slash: "both", // Makes this command a slash command
    testOnly: true,

    callback: ({ }) => {
        return 'Pong'
    }
} as ICommand
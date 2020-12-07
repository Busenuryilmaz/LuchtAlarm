require("dotenv").config();

const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
    console.log("let's a go!")
})

client.on("message", msg => {
    if (msg.content === "wat") {
        msg.reply("patat")
    }    
    if (msg.content === "watt") {
        msg.reply("patatt")
    }
    if (msg.content === "what") {
        msg.reply("phatat")
    }
    if (msg.content === "w a t") {
        msg.reply("p a t a t")
    }
    if (msg.content === "WAT") {
        msg.reply("PATAT")
    }
    if (msg.content === "WAT?") {
        msg.reply("PATAT?")
    }
    if (msg.content === "wat?") {
        msg.reply("patat?")
    }
    if (msg.content === "WATT") {
        msg.reply("PATATT")
    }
})


client.login(process.env.BOT_TOKEN)
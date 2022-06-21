import DiscordJS, { Intents } from 'discord.js'


import dotenv from 'dotenv'
dotenv.config()


const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
	]
})

client.on('ready', () => {
	console.log('The bot is ready')
})



client.on('messageCreate', (message) => {
	if(message.content === 'hi'){
		message.reply('hello')
	}


	if(message.content === 'time 25'){
		message.reply('timer started')
		setTimeout(function(){
			message.reply('25 mins done!')
			audio.play()
		}, 1500000)
	}

	if(message.content === 'time 50'){
		message.reply('timer started')
		setTimeout(function(){
			message.reply('50 mins done!')
		}, 3000000)
	}

	if(message.content === 'time 10'){
		message.reply('timer started')
		setTimeout(function(){
			message.reply('10 mins done!')
		}, 600000)
	}

	if(message.content === 'time 5'){
		message.reply('timer started')
		setTimeout(function(){
			message.reply('5 mins done!')
		}, 300000)
	}

	else if(message.content === 'stop'){
		message.reply('timer stopped')
	}
})


client.login(process.env.TOKEN)
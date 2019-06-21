const { prefix } = require('../config.json');

// module.exports = {
// 	name: 'help',
// 	description: 'List all of my commands or info about a specific command.',
// 	aliases: ['commands'],
// 	usage: '[command name]',
// 	cooldown: 5,
exports.run = (client, message, args) => {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	};




// module.exports = {
// 	name: 'help',
// 	description: 'provides info for commands',
// 	aliases: ['commands'],
// 	usage: '[command name]',
// 	cooldown: ,
// // command functions
// // function helpCommand(args, message) {
// 	execute(args, message) {
// 	if (args.length > 0) {
// 		message.channel.send("It looks like you might need help with " + args + " \n ")
// 		message.channel.send("These are the things that I know: \n \n explore \n info `title` `@author` \n submission `title` `@author` `link` \n afk `reason` \n back \n here `@username`")

// 	} else {
// 		message.channel.send("I'm not sure what you need help with. Try `$help [topic]`")
// 	}
// }	
// }


exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['commands'],
	permLevel: 0,
	cooldown: 5
};

exports.help = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	usage: '[command name]'
};
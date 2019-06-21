const config = require('../config.json');
module.exports = async message => {
	// console.log(message.content);
	let client = message.client;
	if (message.author.bot) return;
	if (message.author.id === client.user.id) return;
	if (!message.content.startsWith(config.prefix)) return;
	let command = message.content.split(' ')[0].slice(config.prefix.length);
	let params = client.elevation(message);
	message.author.permLevel = perms;
	let cmd;
	if (client.commands.has(command)) {
	cmd = client.commands.get(command);
	} else if (client.aliases.has(command)) {
	cmd = client.commands.get(client.aliases.get(command));
	}
	if (cmd) {
		if (perms < cmd.conf.permLevel) return;
		cmd.run(client, message, params, perms);
	}
};
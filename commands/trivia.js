// module.exports = {
// 	name: 'trivia',
// 	description: 'collects some reaction trivia to the channel',
// 	guildOnly: true,
// 	execute(args, message) {

exports.run = (client, message, args) => {        

		//await messages
		const quiz = require('../trivia.json');
		const item = quiz[Math.floor(Math.random() * quiz.length)];
		const filter = response => {
			return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};

		message.channel.send(item.question).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
				.then(collected => {
					message.channel.send(`${collected.first().author} got the correct answer!`);
				})
				.catch(collected => {
					message.channel.send('Looks like nobody got the answer this time.');
				});
		});

	};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['buzz', 'bz'],
    permLevel: 0
};

exports.help = {
    name: 'trivia',
    description: 'sets reminder with a timer and reason',
    usage: 'trivia'
};
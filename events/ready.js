const config = require('../config.json');
module.exports = async client => {
	let singular = client.guilds.size === 1;
	console.log('Ready to go!');
  client.user.setGame(`${config.prefix}help | ${client.guilds.size} server${singular ? '' : 's'}`);
};
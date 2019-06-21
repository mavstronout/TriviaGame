
// module.exports = {
//     name: 'buzzer',
//     description: 'sets reminder with a timer and reason',
//     aliases: ['buzz', 'bz'],
//     args: true,

// function remindCommand(splitCommand, message) {
    // execute(args, message) {
exports.run = (client, message, args) => {        
        if(isNaN(args)) return message.channel.send("Time invalid, correct usage is: `<time>` Time is the timeout in seconds");
        
        message.channel.send(`Countdown started!`);
        setTimeout(async () => {
            await message.channel.send(`Time's up!  <@${message.author.id}>`);
        }, (parseInt(args) * 1000))
    
    };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['buzz', 'bz'],
    permLevel: 0
};

exports.help = {
    name: 'buzzer',
    description: 'sets reminder with a timer and reason',
    usage: 'buzzer'
};
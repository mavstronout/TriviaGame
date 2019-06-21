const Discord = require('discord.js')
const client = new Discord.Client()

// module.exports = {
// 	name: 'gameset',
// 	description: 'Start the game already!! Set `rounds` to set game length and `turns` ',
// 	cooldown: 3,
// 	aliases: 'gs',
// 	guildOnly: true,
	exports.run = (client, message, args) => {
		let playRole = message.guild.roles.find(ro => ro.name === "Player");

		

			message.channel.send(`Wohoho- could it be? Surely it must, has been and will be again! Call all your trekkers and tell your friends! \n It's time for another round of Whose Party is it Anyway?!`)

			// method 1, throws error on collector type error
			// const playMessage = await message.channel.send(`First up, who will be our players?`)
			// .then(function (playMessage) { playMessage.react(`👻`)}).catch(function(err) {
	  //               console.log(`reacting error`);
	  //           })
	  		//method 2
			  async function playMessage(message) { 
  				const filter = (reaction) => reaction.emoji.name === '👻';

				try {
			  		const playMessage = await message.channel.send(`First up, who will be our players? (up to 8)`)
					await playMessage.react(`👻`)
					const collector = await playMessage.createReactionCollector(filter, {max: 8, time: 10000 });


					collector.on('collect', r => {
						message.member.addRole(playRole).catch(console.error); 
						console.log(`collected ${r.emoji.name}`);})
					collector.on('end', collected => { 
						message.channel.send(`Looks like we will have ${collected.size} players`);
						
					});

		            } catch(err) {
		            	console.error("an error occured: " + err);
		            }
		        }
	        playMessage(message);


        async function setRounds() {
        	const quiz = require('../json/rounds.json');
			const item = quiz[Math.floor(Math.random() * quiz.length)];

			try{
			const filter = response => {
				return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
			};


			await message.channel.send(item.question).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
				.then(collected => {
					
					message.channel.send(`${collected.first().author} thanks for your suggestion!`);
					// let rounds = filter.response.content.toLowerCase();
		   //          console.log(rounds);

					message.channel.send('10 Rounds would be perfect!');


				})
				.catch(collected => {
					let rounds = "10";

					message.channel.send('10 Rounds would be perfect!');
				});
			});
			} catch (error) {
				console.error(error);
				await message.channel.send('there was an error setting the rounds!');
				
			}
            
        }

		

		setTimeout(async () => {
            await message.channel.send(`How many rounds will it be? (increments of 5 up to 25)`);
            setRounds();
            
        }, (11000))
    
		// deprecated. can't declare variable from caught item. I may consider declaring the rounds in a separate command.
		            // if (rounds === "5") {
		            	// try {
		            		//statement to set the rounds in DB
		            		// message.channel.send('Rounds set to 5')
		            	// } catch (error) {
		            	// 	console.log(error)
		            	// }
		            // } else if (rounds === "10") {
		            	// try {
		            		//statement to set rounds in db
		            		// message.channel.send('Rounds set to 10')
		            	// } catch (error) {
		            	// 	console.log(error)
		            	// }
		            // } else if (rounds === "15") {
		            	// try {
		            		//statement to set rounds in db
		            		// message.channel.send('Rounds set to 15')
		            	// } catch (error) {
		            	// 	console.log(error)
		            	// }
		            // } else if (rounds === "20") {
		            	// try {
		            		//statement to set rounds in db
		            		// message.channel.send('Rounds set to 20')
		            	// } catch (error) {
		            	// 	console.log(error)
		            	// }
		        	// } else {
		            	// try {
		            		//statement to set rounds in db
		            		// message.channel.send('Rounds set to 25')
		            	// } catch (error) {
		            	// 	console.log(error)
		            	// }
		            // }


		// Ask for number of rounds; instead of having arguments, instead we will use setTimeout()
		
		async function postEmbed() {
			let playID = "559813470967562263";
			let playMembers = message.guild.roles.get(playID).members;
			console.log(`Got ${playMembers.size} members with that role`)

			// let membersWithPlayer = await message.guild.roles.get(playID).members
		
			try {
				const turns = new Discord.RichEmbed()
					.setTitle("Turn order")
					// .setAuthor(client.user.username, client.user.avatarURL)
					.setDescription("Turn order determined randomly!")
					.setColor(0x00AE86);

				for(const datum of playMembers) {
					let position = Math.floor(Math.random() * 8) + 1;
					turns.addField(`User ${datum} : ${position}`); // client.users.get(datum.user),
				}
				await message.channel.send({turns});

				} catch (error) {
					console.error(error);
					await message.channel.send('there was an error sending the turn order embed!');
				}
		}


		setTimeout(async () => {

            await message.channel.send(`Let's see who goes when, who orders the turns. So on, and so forth. \n Largest number goes first. In the event of a tie, nearest birthday goes first`);
			postEmbed();
            
        }, (20000))

		// Set turn order (roll)

			
			// take an array of the Players role, then spits out an array for the order. this should be accessible from the boards table as an array*
			// the new method may be better. lower tech and avoid storing this data in the database :+1:, rely on humans to keep it together.


		// Start the game already! (tell them what's the next command)


		

	};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['gs'],
	permLevel: 0
};

exports.help = {
	name: 'gameset',
	description: 'Start the game already!! Set `rounds` to set game length and `turns` ',
	usage: 'gameset'
};
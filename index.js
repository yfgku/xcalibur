const Discord = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const { MembershipScreeningFieldType } = require("discord-api-types/v10");
const Client = new Discord.Client({
    intents: [
Discord.Intents.FLAGS.GUILDS,
Discord.Intents.FLAGS.GUILD_MESSAGES
]
});

const prefix = "X!";

Client.on("ready", () => {
    Client.application.commands.create(data)

console.log("bot opérationnel");
});

Client.login("OTk0MTU2NzA4MTM1OTY4ODA5.GhAy4x.YkPQA_k9hW_W9cHlYkmwXlZ8RcoWDZqPstW3G4");
Client.on("messageCreate", message => {
    if (message.author.bot) return

    if(message.content === prefix + "ping"){
        message.reply("pong !");
    }

    else if(message.content === prefix + "help"){
        const XCembed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Listes des commandes")
        .setAuthor("! Momo", "https://cdn.discordapp.com/attachments/994281320232517642/994510856337498242/static_2.png")
        .setDescription("Vous y trouverez la liste des commandes du bot")
        .setThumbnail("https://cdn.discordapp.com/attachments/994281320232517642/994513297162375248/standard_11.gif")
        .addField("X!help", "Affiche la liste des commandes du bot" )
        .addField("X!ping", "Vous renvoi pong !")
        .addField("X!PP", "Affiche la photo de profil du serveur")
        .addField("X!InfServ", "Affiche les informations du Serveur")
        .setFooter("Copyright by XCalibur Staff.", "https://cdn.discordapp.com/attachments/986389396645380137/994524742826598410/telechargement_5.jpg");
    

        message.channel.send({ embeds: [XCembed]});
    }
    if(message.content === prefix + "PP"){
        message.reply("https://cdn.discordapp.com/attachments/986389802029027329/994160768163516436/static_3.png");
    }
   else if(message.content === prefix + "InfServ"){
    const Serv = new Discord.MessageEmbed()
    .setColor("DARK_GOLD")
    .setAuthor("! Momo", "https://cdn.discordapp.com/attachments/994281320232517642/994510856337498242/static_2.png")
    .setTitle("Information serveur")
    .addField("Propriétaire du serveur :", "! Momo")
    .addField("Créateur du Serveur :", "! Momo, Agitsou et Azzoks")
    .addField("Date de Création :", "14 juin 2022 23:44")
    .addField("Langue du serveur :", "Français")
    .addField("Type de Serveur :", "Serveur Communautaire Animés et Jeux Vidéos")
    .setThumbnail("https://cdn.discordapp.com/attachments/994281320232517642/994513297162375248/standard_11.gif")
    .setFooter("Copyright by XCalibur Staff.", "https://cdn.discordapp.com/attachments/986389396645380137/994524742826598410/telechargement_5.jpg");

    message.channel.send({ embeds: [Serv]});
   }

});

var data = new SlashCommandBuilder()
.setName("clear")
.setDescription("Commande pour supprimer des messages")
.addIntegerOption(option =>
    option.setName("number")
    .setDescription("Nombre de message que vous voulez supprimer")
    .setRequired(true)
    );

    Client.on("interactionCreate", interaction => {
        if(interaction.isCommand()){
            if(interaction.commandName === "clear"){
                var number = interaction.options.getInteger("number");

                if(number>=1 && number <= 100){
                    interaction.channel.bulkDelete(number);
                    interaction.reply({content: number + "ont étés supprimés", ephemeral: true});
                }
                else {
                    interaction.reply({content: "Le nombre de messages supprimés doit être compris entre 1 et 100", ephemeral: true});
                }
            }
        }
    })

    
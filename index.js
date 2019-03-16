const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = "c/";

bot.login(process.env.TOKEN)


bot.on('ready', () => {
	console.log("Les cours commencent")
	bot.user.setStatus("Online")
	bot.user.setGame("c/help | School Of Coding")
})

bot.on('guildMemberAdd', member => {
  bot.channels.get("554026692310466618").send(`[+] __Bienvenue__ ` + member.user.username);
});

bot.on('guildMemberRemove', member => {
  bot.channels.get("554026766050787338").send(`[-] __Aurevoir__ ` + member.user.username);
});

// COMMANDES (DEBUT)

bot.on('message', message => {
	if(message.content === prefix + "help"){
		var help_embed = new Discord.RichEmbed()
		.setColor("#f92727")
		.setTitle("Page d'aide")
		.addField("Commandes", "c/pr - Affiche les prérequis de la programmation\nc/hist - Affiche l'histoire de la programmation\nc/java - Apprend le Java\nc/bot - Apprend à coder un bot")
		message.channel.send(help_embed);
	}
})

// Histoire du programmage
bot.on("message", message => {
	if(message.content === prefix + "hist"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Voici ce qu'il y a à savoir à propos du programmage")
		message.author.send("Le programmage plus communément appelé le 'Coding' fût inventé en 1842 par une jeune comtesse du nom d'Ada Lovelace")
		message.author.send("Cette dernière traduisait la mémoire d'un mathématicien italien du nom de Luigi Menabrea sur la machine analytique proposée par Charles Babage")
		message.author.send("À cette traduction, la jeune comtesse avait ajouté ses propres notes dont l'une décrivait de façon détaillée une séquence progressive d'opérations pour résoudre certains problèmes mathématiques.")
		message.author.send("\n\nDe 1957 à 1959 on note le développement des langages Fortran, Lisp et COBOL. À partir de 1970 on assiste à la naissance du Pascal créé par Niklaus Wirth.")
		message.author.send("\nEn 1972 le C (premier au classement de TIOBE) fait son apparition. Créé par le regretté Denis Ritchie, ce langage a servi à coder le système UnixEn 1972 le C (premier au classement de TIOBE) fait son apparition. Créé par le regretté Denis Ritchie, ce langage a servi à coder le système Unix.")
		message.author.send("\nL'année 1995 voit la naissance de trois langages populaires, Java créé par James Gosling, PHP créé par Rasmus Lerdof et JavaScript par Brendan Eich.")
	}
})
// Fin (Histoire du programmage)
// Prérequis
bot.on('message', message => {
	if(message.content === prefix + "pr"){
		message.author.send("Voici les prérequis :\n\n\nUn logiciel te permettant d'écrire le code (Je te conseille Sublime Text qui est 100% mais il en existe d'autre égallement que tu peux trouver sur internet)")
	}
})
// Prérequis (Fin)
// Java (Début)
bot.on('message', message => {
	if(message.content === prefix + "java"){
		var java_embed = new Discord.RichEmbed()
		.setTitle("Commandes Java :")
		.addField("c/l1.java", "Première leçon de Java")
		message.channel.send(java_embed);
	}
})
bot.on('message', message => {

	if(message.content === prefix + 'l1.java'){
		message.author.send("Introduction au Java")
		message.author.send("Commencont par écrire un programme simple qui va dire 'Hello World'")
		message.author.send("Tout d'abord il te faut ouvrir ton logiciel qui te permettra d'écrire ton programme")
		message.author.send("Une fois ceci fait, crée un nouveau fichier et nomme le 'Main.java' cela permettra a ton logiciel de savoir que tu écris en Java")
		message.author.send("Commencont le code:\n\n```java\nclass MyClass {\n 		public static void main(String[ ] args) {\n 			System.out.println('Hello World !');\n 		}\n}```")
		message.author.send("Impréssionant non ?\nEt ce n'est que le début !")

	}

	if(message.content === prefix + "l2.java"){
		message.author.send("prochaine leçon bientot !")
	}

})
// Java (Fin)
// Bot (Début)
bot.on('message', message => {
	
	if(message.content === prefix + "bot"){
		var bot_embed = new Discord.RichEmbed()
		.setTitle("Créer un bot")
		.addField("Commandes", "c/l1.bot - Premier cour pour apprendre à créer un bot\nc/l2.bot - Deuxième cours pour apprendre à créer un bot\nc/l3.bot - Troisième cours pour apprendre à créer un bot\nc/l4.bot - Quatrième cours pour apprendre à créer un bot `INDISPONIBLE`")
		message.channel.send(bot_embed);
	}

	if(message.content === prefix + "l1.bot"){
		message.author.send("```Premier cour pour apprendre à créer un bot")
		message.author.send("\n\nBonjour, vous voici dans le premier cours pour apprendre à coder un bot\n dans ce cours je vais vous apprendre à coder un bot")
		message.author.send("Des bots tu en voit dans quasiment chaque serveur discord, si pas dans chaque.")
		message.author.send("\n\nPour commencer (Si c'est pas fait) installe `NodeJS` (Lien de téléchargement)[https://nodejs.org/fr/]")
		message.author.send("Ensuite, tu peux (Si c'est pas fait) installer `Sublime Text` (Lien de téléchargement)[https://www.sublimetext.com/3]")
		message.author.send("Une fois NodeJS installé, clique sur ton menu windows ou sur 'Cortana' et cherche `NodeJS Command Prompt`")
		message.author.send("Voilà, désormais tu es prêt pour la partie N°2 du cours !\nc/l2.bot")

	}

	if(message.content === prefix + "l2.bot"){
		message.author.send("Deuxième cours pour apprendre à créer un bot")
		message.author.send("Bonjour, vous voici dans le deuxième cours pour apprendre à coder un bot\ndans ce cours je vais vous apprendre à créer votre bot")
		message.author.send("Pour commencer rends toi sur https://discordapp.com/developers/applications/")
		message.author.send("Ensuite clique sur (Si c'est en anglais) `New Application` ou (Si c'est en français `Nouvelle application`")
		message.author.send("Une fois que tu à cliqué, tu peux nommer ton bot, regarder son ID,.. Nous ici on vas juste se charger de nommer son bot")
		message.author.send("Pour ma part je vais le nommer `tuto bot`")
		message.author.send("Une fois nommé, tu vas cliquer sur `Bot` qui se trouve à gauche de ton écran")
		message.author.send("Tu vas ensuite cliquer sur (Si c'est en englais) `Add Bot` ou (Si c'est en français) `Ajouter un bot`, ensuite sur `Yes, Do It` ou `Oui, le faire`")
		message.author.send("Voilà, dans ce tuto tu as appris à créer ton bot, dans la leçon N°3 nous allons apprendre à ajouter notre bot sur vôtre serveur")
		message.author.send("Voilà, désormais tu es prêt pour la partie N°3 du cours !\nc/l3.bot")

	}

	if(message.content === prefix + "l3.bot"){
		message.author.send("Troisième cours pour apprendre à créer un bot")
		message.author.send("Bonjour, vous voici dans le troisième cours pour apprendre à coder un bot\ndans ce cours je vais vous apprendre à ajouter votre bot sur vôtre serveur")
		message.author.send("Commencont par nous rendre sur https://discordapp.com/developers/applications/")
		message.author.send("Cliquez ensuite sur le bot que vous avez créer dans le tuto précédent")
		message.author.send("Ensuite vous verrez `Client ID` vous copiez la ligne correspondant à l'ID de votre bot")
		message.author.send("Rendez vous ensuite sur https://discordapi.com/permissions.html")
		message.author.send("Si vous souhaitez que vôtre bot aie toutes les permissions y compris les droits d'administrateur cliquez sur toute les cases ou sur `administrator` uniquement")
		message.author.send("Une fois cela fait, en bas de la page (Là où il est indiqué `Client ID:`) vous devrez coller l'ID de votre bot")
		message.author.send("Quand vous aurez collé l'ID de vôtre bot un lien apparaitra en bas de la page, cliquez dessus.")
		message.author.send("Ajouter donc votre bot au serveur de votre choix et cliquez sur `Autoriser`")
		message.author.send("Voilà, ce tuto est terminé, dans la leçon N°4 nous allons apprendre à allumer le bot")
		message.author.send("Voilà, désormais tu es prêt à accèder à la partie N°4 du cours\nc/l3.bot")

	}

	if(message.content === prefix + "l4.bot"){
		message.author.send("Quatrième cours pour apprendre à créer un bot")
		message.author.send("Bonjour, vous voici dans le quatrième cours pour apprendre à coder un bot\n dans ce cours je vais vous apprendre à allumer votre bot sur vôtre serveur")
		message.author.send("Commencont par finaliser la création du bot")
		message.author.send("Crée un dossier sur ton bureau ou dans tes documents et nomme le avec le nom de ton bot, pour plus de facilité n'ajoute pas de majuscules")
		message.author.send("Ensuite ouvre ton menu Windows ou clique directement sur Cortana et cherche Node Command Propmt")
		message.author.send("Une fois ouvert, tape `cd destination_de_ton_dossier npm init`")
		message.author.send("Vous pouvez passer tout le texte qui va suivre en appuyant sur le bouton Entrer de votre clavier")
		message.author.send("Ensuite, tapez `npm install discord.js`")
		message.author.send("Une fois fini vous pouvez fermer la fenêtre")
		message.author.send("Ensuite ouvrez SublimeText et créez un fichier, sauvegardez le dans le dossier du bot avec `Ctrl+shift+s` et nommez le index.js")
		message.author.send("Vous pouvez donc commencer votre code")
		message.author.send("Dans le code, inscrivez\n```const Discord = require('discord.js');\nconst bot = new Discord.Client();\n```")

	}

	if(message.content === prefix + "l5.bot"{
		message.channel.send("`Cours INDISPONIBLE`")
	})

})
// Bot (Fin)
// COMMANDES (FIN)

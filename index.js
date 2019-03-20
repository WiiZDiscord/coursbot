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
		message.author.send("Voici les prérequis :\n\n\n__**Pourn Ecrire Ton Code**__\nJe te conseille **Sublime Text** qui est 100% gratuit mais il en existe d'autre égallement que tu peux trouver sur internet comme **Visual Studio Code**\n\n__**Au Niveau Du Language**__\nTu n'as besoin d'aucune compétance de base puisque nous allons apprendre ensemble à coder")
	}
	if(message.content === prefix + "merci"){
		var thx_embed = new Discord.RichEmbed()
		.setTitle("Merci A:")
		.setColor("RANDOM")
		.addField("Paul Et Victor", "Pour le cours sur les bots discord\nLien vers leur chaine:\nhttps://www.youtube.com/channel/UCqTzzB0UIGVoul9UdFUbGXQ")
		.addField("Graven", "Pour le cours sur Java et Python`PROCHAINEMENT`\nLien vers sa chaine:\nhttps://www.youtube.com/channel/UCIHVyohXw6j2T-83-uLngEg")
		message.channel.send(thx_embed);
	}
})
// Prérequis (Fin)
// Java (Début)
bot.on('message', message => {
	if(message.content === prefix + "java"){
		var java_embed = new Discord.RichEmbed()
		.setTitle("Commandes Java :")
		.addField("c/l1.java", "Première leçon de Java")
		.addField("c/l2.java", "Deuxième leçon de Java")
		.addField("Conseil", "Vous pouvez continuer la commande 'c/l`..`.java jusqu'au nombre 18 :wink:")
		message.channel.send(java_embed);
	}
})
bot.on('message', message => {

	if(message.content === prefix + 'l1.java'){
		message.author.send("Apprendre le java#1 - les bases et prérequis\nhttps://www.youtube.com/watch?v=XgVADKKb4jI&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=2&t=0s")
	}

	if(message.content === prefix + "l2.java"){
		message.author.send("Apprendre le java#2 - LES variables\nhttps://www.youtube.com/watch?v=SvPGiy5UXRI&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=3&t=0s")
	}

	if(message.content === prefix + "l3.java"){
		message.author.send("Apprendre le java#3 - LES CONDITIONS\nhttps://www.youtube.com/watch?v=BMpLLJtt2ys&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=4&t=0s")
	}

	if(message.content === prefix + "l4.java"){
		message.author.send("APPRENDRE LE JAVA#4 - LES TABLEAUX\nhttps://www.youtube.com/watch?v=rvjAPI89QnE&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=5&t=0s")
	}

	if(message.content === prefix + "l5.java"){
		message.author.send("APPRENDRE LE JAVA#5 - LES BOUCLES (FOR, FOREACH, WHILE..)\nhttps://www.youtube.com/watch?v=oHOXE9h3t_A&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=6&t=0s")
	}

	if(message.content === prefix + "l6.java"){
		message.author.send("APPRENDRE LE JAVA#6 - LES FONCTIONS\nhttps://www.youtube.com/watch?v=rJx9Q-aYuAA&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=7&t=0s")
	}

	if(message.content === prefix + "l7.java"){
		message.author.send("APPRENDRE LE JAVA#7 - LES OBJETS\nhttps://www.youtube.com/watch?v=IvHUljLP3NY&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=8&t=0s")
	}

	if(message.content === prefix + "l8.java"){
		message.author.send("APPRENDRE LE JAVA#8 - L'HERITAGE 1/2\nhttps://www.youtube.com/watch?v=gdHOsaGBbPA&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=9&t=0s")
	}

	if(message.content === prefix + "l9.java"){
		message.author.send("APPRENDRE LE JAVA#9 - LES INTERACES - L'HERITAGE 2/2\nhttps://www.youtube.com/watch?v=ymRGWkyrFnI&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=10&t=0s")
	}

	if(message.content === prefix + "l10.java"){
		message.author.send("APPRENDRE LE JAVA#10 - LES ENUMERATIONS\nhttps://www.youtube.com/watch?v=pbAkJiz-DNU&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=11&t=0s")
	}

	if(message.content === prefix + "l11.java"){
		message.author.send("APPRENDRE LE JAVA#11 - LES ARRAYLISTS\nhttps://www.youtube.com/watch?v=w56ZbRlnyDg&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=12&t=0s")
	}

	if(message.content === prefix + "l12.java"){
		message.author.send("APPRENDRE LE JAVA#12 - LES HASHMAPS\nhttps://www.youtube.com/watch?v=FGU-imprdKs&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=13&t=0s")
	}

	if(message.content === prefix + "l13.java"){
		message.author.send("APPRENDRE LE JAVA#13 - LES EXCEPTIONS\nhttps://www.youtube.com/watch?v=1gOb77oouUQ&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=14&t=0s")
	}

	if(message.content === prefix + "l15.java"){
		message.author.send("APPRENDRE LE JAVA#15 - LES FICHIERS\nhttps://www.youtube.com/watch?v=7hZVRDxpbCE&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=16&t=0s")
	}

	if(message.content === prefix + "l14.java"){
		message.author.send("APPRENDRE LE JAVA#14 - LES CHRONOMETRES\nhttps://www.youtube.com/watch?v=He1Pvyewr_M&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=15&t=0s")
	}

	if(message.content === prefix + "l16.java"){
		message.author.send("APPRENDRE LE JAVA#16 - LES CALLBACKS\nhttps://www.youtube.com/watch?v=_IwGb_hYMuY&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=18&t=0s")
	}

	if(message.content === prefix + "l17.java"){
		message.author.send("APPRENDRE LE JAVA#17 - LA SURCHARGE\nhttps://www.youtube.com/watch?v=qWb_DsW0q2g&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=19&t=0s")
	}

	if(message.content === prefix + "l18.java"){
		message.author.send("APPRENDRE LE JAVA#18 - LA GENERECITE\nhttps://www.youtube.com/watch?v=qWb_DsW0q2g&t=0s&index=19&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM")
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

	if(message.content === prefix + "l5.bot"){
		message.channel.send("`Cours INDISPONIBLE`")
	}

})
// Bot (Fin)
// COMMANDES (FIN)

bot.on('message', message => {
	if(message.content === prefix + "help"){
		var help_embed = new Discord.RichEmbed()
		.setTitle("Page D'aide")
		.setColor("#f92727")
		.addField("Commandes du bot", "1e commande\n2eme commande\n3e commande...")
		.setFooter(`${client.user.username} | ${message.guild.name} | ${message.author.username}`)
		message.channel.send(help_embed);
	}
})

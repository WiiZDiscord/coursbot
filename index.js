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
  const channel = member.guild.channels.find(ch => ch.name === '𝐵𝒾𝑒𝓃𝓋𝑒𝓃𝓊𝑒');
  if(!channel) return;
  channel.send(`**[+]** Bienvenue **${member}** sur le serveur !`)
})

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === '𝐵𝓎𝑒-𝐵𝓎𝑒');
  if(!channel) return;
  channel.send(`**[-]** **${member}** nous a quittés !`)
})

// COMMANDES (DEBUT)

bot.on('message', message => {
	if(message.content === prefix + "help"){
		var help_embed = new Discord.RichEmbed()
		.setColor("#f92727")
		.setTitle("Page d'aide")
		.addField("Commandes", "c/pr - Affiche les prérequis de la programmation\nc/hist - Affiche l'histoire de la programmation\nc/java - Apprend le Java\nc/bot - Apprend à coder un bot\nc/python - Apprend à coder en pyton\nc/html - Apprend à coder en Html - Css - PhP `Bientôt Disponible !`c/merci - Affiche les remerciement pour les cours")
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
		message.channel.send("Vérifie tes messages privé")
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
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Apprendre le java#1 - les bases et prérequis\nhttps://www.youtube.com/watch?v=XgVADKKb4jI&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=2&t=0s")
	}

	if(message.content === prefix + "l2.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Apprendre le java#2 - LES variables\nhttps://www.youtube.com/watch?v=SvPGiy5UXRI&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=3&t=0s")
	}

	if(message.content === prefix + "l3.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Apprendre le java#3 - LES CONDITIONS\nhttps://www.youtube.com/watch?v=BMpLLJtt2ys&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=4&t=0s")
	}

	if(message.content === prefix + "l4.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#4 - LES TABLEAUX\nhttps://www.youtube.com/watch?v=rvjAPI89QnE&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=5&t=0s")
	}

	if(message.content === prefix + "l5.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#5 - LES BOUCLES (FOR, FOREACH, WHILE..)\nhttps://www.youtube.com/watch?v=oHOXE9h3t_A&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=6&t=0s")
	}

	if(message.content === prefix + "l6.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#6 - LES FONCTIONS\nhttps://www.youtube.com/watch?v=rJx9Q-aYuAA&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=7&t=0s")
	}

	if(message.content === prefix + "l7.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#7 - LES OBJETS\nhttps://www.youtube.com/watch?v=IvHUljLP3NY&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=8&t=0s")
	}

	if(message.content === prefix + "l8.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#8 - L'HERITAGE 1/2\nhttps://www.youtube.com/watch?v=gdHOsaGBbPA&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=9&t=0s")
	}

	if(message.content === prefix + "l9.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#9 - LES INTERACES - L'HERITAGE 2/2\nhttps://www.youtube.com/watch?v=ymRGWkyrFnI&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=10&t=0s")
	}

	if(message.content === prefix + "l10.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#10 - LES ENUMERATIONS\nhttps://www.youtube.com/watch?v=pbAkJiz-DNU&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=11&t=0s")
	}

	if(message.content === prefix + "l11.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#11 - LES ARRAYLISTS\nhttps://www.youtube.com/watch?v=w56ZbRlnyDg&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=12&t=0s")
	}

	if(message.content === prefix + "l12.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#12 - LES HASHMAPS\nhttps://www.youtube.com/watch?v=FGU-imprdKs&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=13&t=0s")
	}

	if(message.content === prefix + "l13.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#13 - LES EXCEPTIONS\nhttps://www.youtube.com/watch?v=1gOb77oouUQ&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=14&t=0s")
	}

	if(message.content === prefix + "l15.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#15 - LES FICHIERS\nhttps://www.youtube.com/watch?v=7hZVRDxpbCE&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=16&t=0s")
	}

	if(message.content === prefix + "l14.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#14 - LES CHRONOMETRES\nhttps://www.youtube.com/watch?v=He1Pvyewr_M&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=15&t=0s")
	}

	if(message.content === prefix + "l16.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#16 - LES CALLBACKS\nhttps://www.youtube.com/watch?v=_IwGb_hYMuY&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=18&t=0s")
	}

	if(message.content === prefix + "l17.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#17 - LA SURCHARGE\nhttps://www.youtube.com/watch?v=qWb_DsW0q2g&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM&index=19&t=0s")
	}

	if(message.content === prefix + "l18.java"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE JAVA#18 - LA GENERECITE\nhttps://www.youtube.com/watch?v=qWb_DsW0q2g&t=0s&index=19&list=PLMS9Cy4Enq5LKYxJmD1ZIu3C7f3vA00hM")
	}

})
// Java (Fin)



// Bot (Début)
bot.on('message', message => {
	
	if(message.content === prefix + "bot"){
		var bot_embed = new Discord.RichEmbed()
		.setTitle("Créer un bot")
		.addField("Commandes", "c/l1.bot - Premier cour pour apprendre à créer un bot\nc/l2.bot - Deuxième cours pour apprendre à créer un bot\nc/l3.bot - Troisième cours pour apprendre à créer un bot\nc/l4.bot - Quatrième cours pour apprendre à créer un bot\nc/l5.bot - Cinquième cours pour apprendre à créer un bot")
		message.channel.send(bot_embed);
	}

	if(message.content === prefix + "l1.bot"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Créer un bot discord - Creation + Mise en ligne #1\nhttps://www.youtube.com/watch?v=FMijzVzh4MQ")
	}

	if(message.content === prefix + "l2.bot"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Créer un bot discord - Structure\nhttps://www.youtube.com/watch?v=NTsPVuoXHdQ")
	}

	if(message.content === prefix + "l3.bot"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Créer un bot discord - Ping + Statistiques#3\nhttps://www.youtube.com/watch?v=docip3RjZD8")
	}

	if(message.content === prefix + "l4.bot"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Créer un bot discord - Kick + Ban#4\nhttps://www.youtube.com/watch?v=oswuq_zrPnQ")
	}

	if(message.content === prefix + "l5.bot"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("Créer un bot discord - Clear#5\nhttps://www.youtube.com/watch?v=UMZPpW_HvOE")
	}

})
// Bot (Fin)



// Python (Début)
bot.on('message', message =>{
	if(message.content === prefix + "python"){
		var python_embed = new Discord.RichEmbed()
		.setTitle("Coder en python")
		.addField("Commandes", "c/l1.py - Premier cour de python\nc/l2.py - Deuxième cours de python\nc/l3.py - Troisième cours de python\nc/l4.py - Quatrième cours de python\nc/l5.py - Cinquième cours de python\nc/l6.py - Sixième cours de python\nc/l7.py - Septième cours de python\nc/l8.py - Huitième cours de python\nc/l9.py - Neuvième cours de python")
		message.channel.send(python_embed);
	}

	if(message.content === prefix + "l1.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #1 ? LES BASES & PREREQUIS\nhttps://www.youtube.com/watch?v=psaDHhZ0cPs&index=2&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&t=0s")
	}

	if(message.content === prefix + "l2.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #2 ? LES VARIABLES\nhttps://www.youtube.com/watch?v=nvyX8JfoOWY&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&index=3&t=0s")
	}

	if(message.content === prefix + "l3.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #3 ? LES CONDITIONS\nhttps://www.youtube.com/watch?v=_AgUOsvMt8s&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&index=4&t=0s")
	}

	if(message.content === prefix + "l4.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #4 ? LES LISTES\nhttps://www.youtube.com/watch?v=kyxF5eH3Kic&index=5&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&t=0s")
	}

	if(message.content === prefix + "l5.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #5 ? LES BOUCLES\nhttps://www.youtube.com/watch?v=BrknhzrHm8w&index=6&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&t=0s")
	}

	if(message.content === prefix + "l6.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #6 ? LES FONCTIONS\nhttps://www.youtube.com/watch?v=sgJt64iTOYM&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&index=7&t=0s")
	}

	if(message.content === prefix + "l7.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #7 ? LES OBJETS\nhttps://www.youtube.com/watch?v=dfUM_9xibf8&index=8&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&t=0s")
	}

	if(message.content === prefix + "l8.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #8 ? L'HERITAGE\nhttps://www.youtube.com/watch?v=fW4818AS88I&index=9&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&t=0s")
	}

	if(message.content === prefix + "l9.py"){
		message.channel.send("Vérifie tes messages privé")
		message.author.send("APPRENDRE LE PYTHON #9 ? INTERFACE GRAPHIQUE (avec Tkinter)\nhttps://www.youtube.com/watch?v=N4M4W7JPOL4&index=10&list=PLMS9Cy4Enq5JmIZtKE5OHJCI3jZfpASbR&t=0s ")
	}
})
// Python (Fin)



// HTML - CSS - PHP (Début)
bot.on('message', message => {
	if(message.content === prefix + "html"){
		message.channel.send("Bientôt Disponible !")
	}
})
// HTML - CSS - PHP (Fin)
// COMMANDES (FIN)

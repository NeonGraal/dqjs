

// == Dq -  Languages ==



dq.scripts = {
	toCode : function() {
		r = [];
		$H(this).each(function(s) {
			if (s.key != 'toCode')
				r.push(("$DQ.script('#{key}', " + '"#{value}");').interpolate(s));
		});
		return r.join('<br>');
	},

	'b' : "Bedouin script (human, flowing, cursive).",

	'd' : "Drakonic.",

	'e' : "Elvish script.",

	'i' : "Island (used near the land-locked ocean).",

	'k' : "Kingdom (used near the Azurian Empire).",

	'n' : "Nagan (elaborate, but versatile).",

	'o' : "Ogham (human, rune-like).",

	'r' : "Dwarvish runes.",

	'w' : "Westron (usual Western human alphabet; also adopted by many newly literate societies).",

	'_' : "Pictographic or Ideographic script. Unique to each language.",

};



dq.languageFamilys = {
	toCode : function() {
		r = [];
		ft = "$DQ.languageFamily('#{key}').";
		lt = "  language('#{name}', #{maxRank}";
		$H(this).each(function(s) {
			if (s.key != 'toCode') {
				r.push(ft.interpolate(s));
				$H(s.value).each(function(l) {
					if (l.key != 'name')
						r.push(lt.interpolate(l.value) + 
							(l.value.Scripts && l.value.Scripts.length ? 
								", '" + l.value.Scripts.join('') + "'" : '')+ ").");
				});
			}
		});
		return r.join('<br>');
	},

	'Common' : { // languageFamily

		'name' : "Common",

	'Common' : { // language

		'name' : "Common",

		'maxRank' : "9",

		Scripts : [ "i", "k", "w", ],

	},



	},



	'Western-Human' : { // languageFamily

		'name' : "Western-Human",

	'Alman' : { // language

		'name' : "Alman",

		'maxRank' : "9",

		Scripts : [ "o", "w", ],

	},



	'Brett' : { // language

		'name' : "Brett",

		'maxRank' : "9",

		Scripts : [ "o", "e", ],

	},



	'Destinian' : { // language

		'name' : "Destinian",

		'maxRank' : "8",

		Scripts : [ "w", ],

	},



	'Ebolan' : { // language

		'name' : "Ebolan",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Folksprach' : { // language

		'name' : "Folksprach",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Lalange' : { // language

		'name' : "Lalange",

		'maxRank' : "10",

		Scripts : [ "w", ],

	},



	'Raniterran' : { // language

		'name' : "Raniterran",

		'maxRank' : "9",

		Scripts : [ "e", ],

	},



	'Reichspiel' : { // language

		'name' : "Reichspiel",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	},



	'Central-Human' : { // languageFamily

		'name' : "Central-Human",

	'Arabiq' : { // language

		'name' : "Arabiq",

		'maxRank' : "9",

		Scripts : [ "b", ],

	},



	'Draknbrger' : { // language

		'name' : "Draknbrger",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Ellenic' : { // language

		'name' : "Ellenic",

		'maxRank' : "10",

		Scripts : [ "i", ],

	},



	'Kravonian' : { // language

		'name' : "Kravonian",

		'maxRank' : "9",

		Scripts : [ "_", ],

	},



	'Panjari' : { // language

		'name' : "Panjari",

		'maxRank' : "9",

		Scripts : [ "_", ],

	},



	'Pasifikan' : { // language

		'name' : "Pasifikan",

		'maxRank' : "8",

	},



	'Sanddweller' : { // language

		'name' : "Sanddweller",

		'maxRank' : "9",

		Scripts : [ "e", ],

	},



	'Sea-of-Grass' : { // language

		'name' : "Sea-of-Grass",

		'maxRank' : "9",

	},



	'Themiskryan' : { // language

		'name' : "Themiskryan",

		'maxRank' : "9",

		Scripts : [ "i", "_", ],

	},



	},



	'Eastern-Human' : { // languageFamily

		'name' : "Eastern-Human",

	'Five-Sisters-Courtly' : { // language

		'name' : "Five-Sisters-Courtly",

		'maxRank' : "10",

		Scripts : [ "_", ],

	},



	'Five-Sisters-Trader' : { // language

		'name' : "Five-Sisters-Trader",

		'maxRank' : "9",

		Scripts : [ "_", ],

	},



	'Lunar-Empire' : { // language

		'name' : "Lunar-Empire",

		'maxRank' : "9",

		Scripts : [ "_", ],

	},



	},



	'Merfolk' : { // languageFamily

		'name' : "Merfolk",

	'Merfolk' : { // language

		'name' : "Merfolk",

		'maxRank' : "6",

		Scripts : [ "_", ],

	},



	},



	'Eldar' : { // languageFamily

		'name' : "Eldar",

	'Drow' : { // language

		'name' : "Drow",

		'maxRank' : "9",

		Scripts : [ "e", ],

	},



	'Eldaran' : { // language

		'name' : "Eldaran",

		'maxRank' : "10",

		Scripts : [ "d", ],

	},



	'Elvish' : { // language

		'name' : "Elvish",

		'maxRank' : "10",

		Scripts : [ "e", ],

	},



	'Erehleine' : { // language

		'name' : "Erehleine",

		'maxRank' : "10",

		Scripts : [ "_", ],

	},



	'Frog-elf' : { // language

		'name' : "Frog-elf",

		'maxRank' : "8",

		Scripts : [ "_", ],

	},



	'Purple-Drow' : { // language

		'name' : "Purple-Drow",

		'maxRank' : "9",

		Scripts : [ "e", ],

	},



	'Purple-Old-Drow' : { // language

		'name' : "Purple-Old-Drow",

		'maxRank' : "9",

		Scripts : [ "e", ],

	},



	'Quenchan' : { // language

		'name' : "Quenchan",

		'maxRank' : "10",

		Scripts : [ "_", ],

	},



	'Terranovan-Drow' : { // language

		'name' : "Terranovan-Drow",

		'maxRank' : "9",

		Scripts : [ "_", ],

	},



	},



	'Faerie' : { // languageFamily

		'name' : "Faerie",

	'Brownie' : { // language

		'name' : "Brownie",

		'maxRank' : "7",

	},



	'Centaur' : { // language

		'name' : "Centaur",

		'maxRank' : "9",

		Scripts : [ "i", ],

	},



	'Dryad' : { // language

		'name' : "Dryad",

		'maxRank' : "6",

	},



	'Fossegrim' : { // language

		'name' : "Fossegrim",

		'maxRank' : "6",

	},



	'Leprechaun' : { // language

		'name' : "Leprechaun",

		'maxRank' : "6",

	},



	'Nixie' : { // language

		'name' : "Nixie",

		'maxRank' : "6",

	},



	'Nymph' : { // language

		'name' : "Nymph",

		'maxRank' : "7",

	},



	'Pixie' : { // language

		'name' : "Pixie",

		'maxRank' : "7",

	},



	'Satyr' : { // language

		'name' : "Satyr",

		'maxRank' : "7",

	},



	'Sylphine' : { // language

		'name' : "Sylphine",

		'maxRank' : "6",

	},



	},



	'False-Fey' : { // languageFamily

		'name' : "False-Fey",

	'Doppelganger' : { // language

		'name' : "Doppelganger",

		'maxRank' : "8",

	},



	'Gargoyle' : { // language

		'name' : "Gargoyle",

		'maxRank' : "6",

	},



	'Harpy' : { // language

		'name' : "Harpy",

		'maxRank' : "7",

	},



	'Medusa' : { // language

		'name' : "Medusa",

		'maxRank' : "6",

	},



	},



	'Earth-Dweller' : { // languageFamily

		'name' : "Earth-Dweller",

	'Gnomish' : { // language

		'name' : "Gnomish",

		'maxRank' : "9",

		Scripts : [ "r", ],

	},



	'Goblin' : { // language

		'name' : "Goblin",

		'maxRank' : "8",

		Scripts : [ "w", ],

	},



	'Halfling' : { // language

		'name' : "Halfling",

		'maxRank' : "9",

		Scripts : [ "r", ],

	},



	'Hobgoblin' : { // language

		'name' : "Hobgoblin",

		'maxRank' : "8",

		Scripts : [ "w", ],

	},



	'Khuzdul' : { // language

		'name' : "Khuzdul",

		'maxRank' : "9",

		Scripts : [ "r", ],

	},



	'Kobold' : { // language

		'name' : "Kobold",

		'maxRank' : "8",

	},



	'Dwarvish' : { // language

		'name' : "Dwarvish",

		'maxRank' : "9",

		Scripts : [ "r", ],

	},



	'Ogre' : { // language

		'name' : "Ogre",

		'maxRank' : "6",

		Scripts : [ "w", ],

	},



	'Orcish' : { // language

		'name' : "Orcish",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Sasquatch' : { // language

		'name' : "Sasquatch",

		'maxRank' : "3",

	},



	'Troll' : { // language

		'name' : "Troll",

		'maxRank' : "4",

	},



	'Yeti' : { // language

		'name' : "Yeti",

		'maxRank' : "3",

	},



	},



	'Giant' : { // languageFamily

		'name' : "Giant",

	'Cloud-Giant' : { // language

		'name' : "Cloud-Giant",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Fire-Giant' : { // language

		'name' : "Fire-Giant",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Frost-Giant' : { // language

		'name' : "Frost-Giant",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Hill-Giant' : { // language

		'name' : "Hill-Giant",

		'maxRank' : "8",

		Scripts : [ "w", ],

	},



	'Stone-Giant' : { // language

		'name' : "Stone-Giant",

		'maxRank' : "8",

		Scripts : [ "w", ],

	},



	'Storm-Giant' : { // language

		'name' : "Storm-Giant",

		'maxRank' : "9",

		Scripts : [ "w", ],

	},



	'Titan' : { // language

		'name' : "Titan",

		'maxRank' : "10",

		Scripts : [ "i", ],

	},



	},



	'Dragon' : { // languageFamily

		'name' : "Dragon",

	'Culhuan' : { // language

		'name' : "Culhuan",

		'maxRank' : "10",

		Scripts : [ "_", ],

	},



	'Draconic' : { // language

		'name' : "Draconic",

		'maxRank' : "10",

		Scripts : [ "d", ],

	},



	'Nagan' : { // language

		'name' : "Nagan",

		'maxRank' : "10",

		Scripts : [ "n", ],

	},



	'Old-Draconic' : { // language

		'name' : "Old-Draconic",

		'maxRank' : "10",

		Scripts : [ "d", ],

	},



	'Saurime' : { // language

		'name' : "Saurime",

		'maxRank' : "7",

		Scripts : [ "d", ],

	},



	'Wyvern' : { // language

		'name' : "Wyvern",

		'maxRank' : "4",

	},



	},



	'Signing' : { // languageFamily

		'name' : "Signing",

	'Silent-Tongue' : { // language

		'name' : "Silent-Tongue",

		'maxRank' : "6",

	},



	'Bandito' : { // language

		'name' : "Bandito",

		'maxRank' : "5",

	},



	},



};



dq.languageGroups ={
	toCode : function() {
		r = [];
		$H(this).each(function(s) {
			if (s.key != 'toCode')
				r.push("$DQ.languageGroup('"+s.key+"', ['" + s.value.join("', '") + "']);");
		});
		return r.join('<br>');
	},

	'Archaic' : [

		"Eldaran",

		"Purple-Old-Drow",

		"Quenchan",

	],

	'Draconic' : [

		"Draconic",

		"Nagan",

		"Old-Draconic",

		"Wyvern",

	],

	'Dravidic' : [

		"Drow",

		"Raniterran",

		"Sanddweller",

	],

	'Dwarvic' : [

		"Dwarvish",

		"Gnomish",

		"Halfling",

		"Khuzdul",

	],

	'Dwarvidic' : [

		"Alman",

		"Brett",

		"Ebolan",

		"Folksprach",

		"Reichspiel",

	],

	'Ellenic' : [

		"Centaur",

		"Ellenic",

	],

	'Elvic' : [

		"Drow",

		"Eldaran",

		"Elvish",

		"Erehleine",

		"Purple-Drow",

		"Terranovan-Drow",

	],

	'Elvidic' : [

		"Elvish",

		"Lalange",

	],

	'Gnomic' : [

		"Fossegrim",

		"Gnomish",

	],

	'Herpetic' : [

		"Culhuan",

		"Saurime",

	],

	'Littoral' : [

		"Destinian",

		"Ebolan",

	],

	'Low Gigantic' : [

		"Hill-Giant",

		"Ogre",

		"Stone-Giant",

	],

	'Nomadic' : [

		"Draknbrger",

		"Kravonian",

		"Sea-of-Grass",

	],

	'Orcal' : [

		"Goblin",

		"Hobgoblin",

		"Kobold",

		"Ogre",

		"Orcish",

	],

	'Panic' : [

		"Centaur",

		"Dryad",

		"Nymph",

		"Satyr",

		"Sylphine",

	],

	'Perfidic' : [

		"Fossegrim",

		"Nixie",

		"Pixie",

	],

	'Protonic' : [

		"Eldaran",

		"Old-Draconic",

		"Draconic",

	],

	'Purpuric' : [

		"Purple-Drow",

		"Purple-Old-Drow",

	],

	'Rustic' : [

		"Brownie",

		"Leprechaun",

	],

	'Titanic' : [

		"Cloud-Giant",

		"Storm-Giant",

		"Titan",

	],

};






// == Dq -  MajorSkills ==



dq.skillGroups.majorSkills = { // skillGroup

		'name' : "Major skills",

		'xsi:noNamespaceSchemaLocation' : "../Dq.xsd",

	Abilities : {

		"Knowledge skill" : {

		'name' : "Knowledge skill",

			"_" : "Applicable to specific skill",

		},

		"Supervision" : {

		'name' : "Supervision",

			"_" : "Supervise up to"

				+ rk({})

				+ "subordinates or work-gangs. Work pro-rata proportion of time.",

		},

	},

	Chances : {

		"Default and Maximum" : {

		'name' : "Default and Maximum",

		'base' : "90",

		},

	},

	'Alchemist' : { // skill

		'name' : "Alchemist",

		'version' : "1.0",

	Abilities : {

		"Analyse liquid" : {

		'name' : "Analyse liquid",

			"_" : "If not common takes"

				+ rk({

		'base' : "110",

		'dec' : "10",})

				+ "minutes with correct equipment.",

		},

		"Standard chemicals" : {

		'name' : "Standard chemicals",

		'rank' : "3",

		},

		"Medicines and antidotes" : {

		'name' : "Medicines and antidotes",

		'chooseRank' : "5, 7, 9",

		},

		"Poisons" : {

		'name' : "Poisons",

		'chooseRank' : "5, 7, 9",

		},

		"Potions" : {

		'name' : "Potions",

		'chooseRank' : "5, 7, 9",

		},

	},

	Chances : {

		"Analyse liquid" : {

		'name' : "Analyse liquid",

		'base' : "PC",

		'inc' : "8",

		},

	},

		EP : [ /* 0 */ 800, /* 1 */ 350, /* 2 */ 1200, /* 3 */ 2650, /* 4 */ 4350, /* 5 */ 6500, /* 6 */ 8650, /* 7 */ 11100, /* 8 */ 12750, /* 9 */ 14500, /* 10 */ 17000, ],

	},



	'Armourer' : { // skill

		'name' : "Armourer",

		'version' : "1.1",

	Abilities : {

		"Armour Groups" : {

		'name' : "Armour Groups",

		'rank0' : "Cloth",

		'chooseRank' : "2, 4, 6, 8, 10, +",

/* listOf @type

*/

// listOf END



			"_" : "Must choose a group they have the requirements for.",

		},

		"Weight Factor" : {

		'name' : "Weight Factor",

			"_" : rk({

		'dec' : "0.5",

		'per' : "3",})

				+ "applied. Not lighter than 1 and not Cloth, Leather or Mithril groups.",

		},

		"Protection" : {

		'name' : "Protection",

			"_" : rk({

		'per' : "4",})

				+ "applied. Not Cloth or Leather groups except total of +1 for Hard Leather.",

		},

		"Agility Modifier" : {

		'name' : "Agility Modifier",

			"_" : rk({

		'dec' : "1",

		'per' : "6",})

				+ "applied. Not below 0.",

		},

		"Stealth Modifier" : {

		'name' : "Stealth Modifier",

			"_" : rk({

		'max' : "5",}),

		},

		"Repair or Modify" : {

		'name' : "Repair or Modify",

			"_" : "Must have at least the same Rank as the Armour was made at and the appropriate group.",

		},

		"Merchant equivalent" : {

		'name' : "Merchant equivalent",

			"_" : "Full Rank for groups known and Half Rank for all other groups.",

		},

	},

/* costMod @modType, @mod

		'_' : "per MD below 16",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "per MD above 20",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "if Weaponsmith Rank higher",

*/

// costMod END



		EP : [ /* 0 */ 600, /* 1 */ 300, /* 2 */ 800, /* 3 */ 1600, /* 4 */ 3000, /* 5 */ 5500, /* 6 */ 6200, /* 7 */ 7300, /* 8 */ 8800, /* 9 */ 10800, /* 10 */ 14000, /* + */ 10000, ],

	},



	'Assassin' : { // skill

		'name' : "Assassin",

		'version' : "1.0",

	Abilities : {

		"Improved Grevious" : {

		'name' : "Improved Grevious",

			"_" : "With surprise,"

				+ rk({

		'inc' : "2",})

				+ ". From rear,"

				+ rk({})

				+ ". From front,"

				+ rk({

		'full' : "3",})

				+ ". Only in Melee or Close.",

		},

		"Torture" : {

		'name' : "Torture",

			"_" : "Takes (Victim's WP div Rank) hours per attempt. (Victim's EN div 5 ) attempts before death.",

		},

		"Improved Memory" : {

		'name' : "Improved Memory",

			"_" : "Recall details of place or routine that has been surveyed.",

		},

		"Improved Damage" : {

		'name' : "Improved Damage",

			"_" : rk({})

				+ "Damage for Melee strikes from a rear.",

		},

		"Automatic Knockout" : {

		'name' : "Automatic Knockout",

			"_" : "When using a sap from surprise or rear and against an unhelmeted opponent, a succesful strike will knockout if attempted.",

		},

		"Improved Knockout" : {

		'name' : "Improved Knockout",

			"_" : rk({

		'inc' : "2",})

				+ "to the knockout chance for a Sap.",

		},

		"Improved Stealth" : {

		'name' : "Improved Stealth",

			"_" : rk({

		'inc' : "2",}),

		},

	},

	Chances : {

		"Torture" : {

		'name' : "Torture",

		'inc' : "10",

			"_" : "- 4 x Vicitim's WP",

		},

		"Improved Memory" : {

		'name' : "Improved Memory",

		'base' : "PC x 5",

		'inc' : "2",

		},

	},

/* requirement

		'_' : "Sap or Garotte at Rank 1 to progress past Rank 2",

*/

// requirement END



		EP : [ /* 0 */ 600, /* 1 */ 250, /* 2 */ 750, /* 3 */ 1700, /* 4 */ 2900, /* 5 */ 4200, /* 6 */ 5750, /* 7 */ 7550, /* 8 */ 9500, /* 9 */ 11700, /* 10 */ 14100, ],

	},



	'Astrologer' : { // skill

		'name' : "Astrologer",

		'version' : "1.0",

	Abilities : {

		"Number of Beings" : {

		'name' : "Number of Beings",

			"_" : "Can only affect"

				+ rk({

		'base' : "5",

		'inc' : "10",})

				+ "beings directly.",

		},

		"General Prediction" : {

		'name' : "General Prediction",

			"_" : "About a particular venture or being, use a divinatory technique (10 FT). May attempt to change (10 FT) and if successfult do a second divination.",

		},

		"Specific Question" : {

		'name' : "Specific Question",

			"_" : "Rank questions per Month (17 FT).",

		},

		"Determine Aspect" : {

		'name' : "Determine Aspect",

			"_" : "After"

				+ rk({

		'base' : "60",

		'dec' : "1",})

				+ "minutes observation, knows a beings aspect (5 FT).",

		},

	},

	Chances : {

		"Specific Question" : {

		'name' : "Specific Question",

		'base' : "PC x 4",

		'inc' : "6",

		},

	},

/* requirement

		'_' : "Literate in one Language to Rank 8 to progress past Rank 0.",

*/

// requirement END



		EP : [ /* 0 */ 400, /* 1 */ 150, /* 2 */ 500, /* 3 */ 1150, /* 4 */ 2050, /* 5 */ 3100, /* 6 */ 4400, /* 7 */ 5900, /* 8 */ 7500, /* 9 */ 9400, /* 10 */ 11500, ],

	},



	'Beast Master' : { // skill

		'name' : "Beast Master",

		'version' : "1.0",

		'footnote' : "skill-B",

	Abilities : {

		"Animal Type" : {

		'name' : "Animal Type",

		'chooseRank' : "0, 5, 10",

			"_" : "Choose a type of animal/monster to be trained. Additional types may be chosen after Rank 10 for 2,500 Ep per type.",

		},

		"Train Animal" : {

		'name' : "Train Animal",

			"_" : "Takes (12 - Rank) months modifed by 'Train time'. Until Rank 5 only for self.",

		},

		"Domesticate Animal" : {

		'name' : "Domesticate Animal",

			"_" : "Takes (12 - Rank) weeks modifed by 'Train time'.",

		},

		"Number of Animals" : {

		'name' : "Number of Animals",

			"_" : "Rank animals of the same type may be Trained and/or Domesticated at once.",

		},

	},

	Chances : {

		"Trained Loyalty Check" : {

		'name' : "Trained Loyalty Check",

		'base' : "2 x Trainer WP",

		'inc' : "4",

		},

		"Domesticated Loyalty Check" : {

		'name' : "Domesticated Loyalty Check",

		'base' : "Master WP",

		},

	},

/* costMod @modType, @mod

		'_' : "Easily domesticated",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "Naturally wild",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "Intelligent or rebellious",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "Raised by beast master from adolescence",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "Domesticated by another beast master",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "Caught in wilderness",

*/

// costMod END



/* requirement

		'_' : "At least 15 WP",

*/

// requirement END



		EP : [ /* 0 */ 600, /* 1 */ 250, /* 2 */ 750, /* 3 */ 1650, /* 4 */ 2800, /* 5 */ 4300, /* 6 */ 5600, /* 7 */ 7350, /* 8 */ 9300, /* 9 */ 11400, /* 10 */ 13750, ],

	},



	'Courtier' : { // skill

		'name' : "Courtier",

		'version' : "2.0",

		'footnote' : "skill-C",

	Abilities : {

		"Abilities" : {

		'name' : "Abilities",

/* abilities

*/

	Abilities : {

		"Bureaucracy" : {

		'name' : "Bureaucracy",

		},

		"Carousing" : {

		'name' : "Carousing",

		},

		"Dress sense" : {

		'name' : "Dress sense",

		},

		"Entertaining" : {

		'name' : "Entertaining",

		},

		"Etiquette" : {

		'name' : "Etiquette",

			"_" : "Etiquette must be learnt separately for different cultures.",

		},

		"Formal dance" : {

		'name' : "Formal dance",

		},

		"Gaming" : {

		'name' : "Gaming",

		},

		"Hunting & Hawking" : {

		'name' : "Hunting & Hawking",

		},

		"Intimidation" : {

		'name' : "Intimidation",

		},

		"Oratory" : {

		'name' : "Oratory",

		},

		"Play an instrument" : {

		'name' : "Play an instrument",

			"_" : "this ability may be taken several times with different instruments. Can usually play similar instruments at (Rank / 2).",

		},

		"Poetry" : {

		'name' : "Poetry",

		},

		"Seduction" : {

		'name' : "Seduction",

		},

		"Simulate emotions" : {

		'name' : "Simulate emotions",

		},

	},

// abilities END



			"_" : "Choose"

				+ rk({

		'base' : "2",})

				+ "abilities. Abilities may be chosen again to increase effective Rank with that ability.",

		},

	},

	Chances : {

		"General Chance" : {

		'name' : "General Chance",

		'base' : "3 x Stat",

		'inc' : "5",

		},

	},

/* costMod @modType, @mod

		'_' : "AG below 12",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "PB below 15",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "AG above 22",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "PB above 20",

*/

// costMod END



		EP : [ /* 0 */ 250, /* 1 */ 100, /* 2 */ 200, /* 3 */ 500, /* 4 */ 950, /* 5 */ 1450, /* 6 */ 2050, /* 7 */ 2800, /* 8 */ 3600, /* 9 */ 6300, /* 10 */ 8000, ],

	},



	'Healer' : { // skill

		'name' : "Healer",

		'version' : "1.12",

	Abilities : {

		"Empathy" : {

		'name' : "Empathy",

		'chooseRank' : "0",

			"_" : "Melee Strike Chance"

				+ rk({

		'dec' : "1",

		'per' : "5",})

				+ ", Close Strike Chance"

				+ rk({

		'dec' : "1",

		'per' : "2",})

				+ ". 5 seconds.",

		},

		"Non-tactile empathy" : {

		'name' : "Non-tactile empathy",

		'chooseRank' : "0",

			"_" : "Melee Strike Chance"

				+ rk({

		'dec' : "1",

		'per' : "2",})

				+ ", Close Strike Chance"

				+ rk({

		'dec' : "1",})

				+ "."

				+ rk({

		'inc' : "2",})

				+ "feet. 5 seconds (1 FT).",

		},

		"Cure Infection, Disease, Headaches, Fever" : {

		'name' : "Cure Infection, Disease, Headaches, Fever",

		'rank' : "1",

			"_" : rk({

		'base' : "30",

		'dec' : "2",})

				+ "minutes (1 FT).",

		},

		"Soothe Pain" : {

		'name' : "Soothe Pain",

		'rank' : "2",

			"_" : rk({

		'base' : "60",

		'dec' : "5",})

				+ "seconds (2 FT). Lasts"

				+ rk({

		'sq' : "2",})

				+ "hours.",

		},

		"Prolong Life" : {

		'name' : "Prolong Life",

		'rank' : "2",

			"_" : rk({

		'base' : "60",

		'dec' : "5",})

				+ "seconds (2 FT). Add D x"

				+ rk({

		'base' : "Patient EN",})

				+ "days to life. Max of three times natural life. Reduces Resurrection base chance.",

		},

		"Heal Endurance" : {

		'name' : "Heal Endurance",

		'rank' : "3",

			"_" : rk({

		'base' : "11",

		'dec' : "1",})

				+ "minutes (3 FT). Cure"

				+ rk({

		'base' : "D - 5",})

				+ "EN damage.",

		},

		"Transfer Fatigue" : {

		'name' : "Transfer Fatigue",

		'rank' : "3",

			"_" : rk({

		'base' : "11",

		'dec' : "1",})

				+ "minutes (3 FT). Additional FT expended is transferred to the Patient.",

		},

		"Neutralise Poison" : {

		'name' : "Neutralise Poison",

		'rank' : "4",

			"_" : "5 seconds (4 FT).",

		},

		"Graft Skin" : {

		'name' : "Graft Skin",

		'rank' : "4",

			"_" : rk({

		'base' : "30",

		'dec' : "2",})

				+ "minutes (4 FT).",

		},

		"Repair Muscle" : {

		'name' : "Repair Muscle",

		'rank' : "5",

			"_" : rk({

		'base' : "50",

		'dec' : "3",})

				+ "hours (5 FT). Half must exist.",

		},

		"Preserve Dead" : {

		'name' : "Preserve Dead",

		'rank' : "5",

			"_" : rk({

		'base' : "60",

		'dec' : "5",})

				+ "minutes (5 FT). Suspend resurrection time-limit for"

				+ rk({})

				+ "days.",

		},

		"Repair Bones" : {

		'name' : "Repair Bones",

		'rank' : "6",

			"_" : rk({

		'base' : "50",

		'dec' : "3",})

				+ "hours (6 FT). Half must exist.",

		},

		"Repair Tissues and Organs" : {

		'name' : "Repair Tissues and Organs",

		'rank' : "7",

			"_" : rk({

		'base' : "50",

		'dec' : "3",})

				+ "hours(7 FT). Half must exist.",

		},

		"Resurrect the Dead" : {

		'name' : "Resurrect the Dead",

		'rank' : "8",

			"_" : rk({

		'base' : "60",

		'dec' : "5",})

				+ "minutes (8 FT). Torso sized piece required. May not have been dead for more than"

				+ rk({

		'inc' : "10",})

				+ "hours.",

		},

		"Regenerate Limbs and Joints" : {

		'name' : "Regenerate Limbs and Joints",

		'rank' : "9",

			"_" : "1 week per Body part (9 FT).",

		},

		"Regenerate Trunk, Head and Vital Organs" : {

		'name' : "Regenerate Trunk, Head and Vital Organs",

		'rank' : "10",

			"_" : "1 week per Body part or Organ (10 FT).",

		},

	},

	Chances : {

		"Non-tactile empathy" : {

		'name' : "Non-tactile empathy",

		'base' : "PC",

		'inc' : "10",

		},

		"Cure Infection, Disease, Headaches, Fever" : {

		'name' : "Cure Infection, Disease, Headaches, Fever",

		'base' : "Patient EN",

		'inc' : "15",

		},

		"Graft Skin" : {

		'name' : "Graft Skin",

		'base' : "Patient EN",

		'inc' : "15",

		},

		"Neutralise Poison" : {

		'name' : "Neutralise Poison",

		'base' : "90",

			"_" : "if Natural or Alchemist Rank equal or less than Healer Rank else"

				+ rk({

		'base' : "50",

		'inc' : "5",})

				+ "- 5 x Alchemist Rank",

		},

		"Resurrect the Dead" : {

		'name' : "Resurrect the Dead",

		'base' : "Patient EN",

		'inc' : "8",

		'min' : "Rank",

/* modifiers

*/

/* modifier @mod

		'_' : "if Healer or Patient Life aspected",

*/

// modifier END



/* modifier @mod

		'_' : "if Healer or Patient Death aspected",

*/

// modifier END



/* modifier @mod

		'_' : "per year (or fraction) life prolonged",

*/

// modifier END



/* modifier @mod

		'_' : "per day of regeneration required",

*/

// modifier END



/* modifier @mod

		'_' : "if total Damage greater than twice EN",

*/

// modifier END



/* modifier @mod

		'_' : "per unsuccessful Resurrection attempt",

*/

// modifier END



// modifiers END



		},

	},

		EP : [ /* 0 */ 1000, /* 1 */ 400, /* 2 */ 1600, /* 3 */ 3500, /* 4 */ 5800, /* 5 */ 8400, /* 6 */ 11400, /* 7 */ 14700, /* 8 */ 18500, /* 9 */ 22500, /* 10 */ 26750, ],

	},



	'Herbalist' : { // skill

		'name' : "Herbalist",

		'version' : "1.0",

		'INCOMPLETE' : "Y",

	Abilities : {

		"Locate and Identify Herbs and Spices" : {

		'name' : "Locate and Identify Herbs and Spices",

		'rank' : "0",

		},

	},

	Chances : {

		"Locate Fresh Herbs for Ability" : {

		'name' : "Locate Fresh Herbs for Ability",

		'base' : "PC x 2",

		'inc' : "15",

			"_" : "- 10 / Ability Rank.",

		},

	},

		EP : [ /* 0 */ 800, /* 1 */ 350, /* 2 */ 1200, /* 3 */ 2650, /* 4 */ 4350, /* 5 */ 6500, /* 6 */ 8650, /* 7 */ 11100, /* 8 */ 12750, /* 9 */ 14500, /* 10 */ 17000, ],

	},



	'Mechanician' : { // skill

		'name' : "Mechanician",

		'INCOMPLETE' : "Y",

		EP : [ /* 0 */ 600, /* 1 */ 250, /* 2 */ 650, /* 3 */ 1500, /* 4 */ 2600, /* 5 */ 3900, /* 6 */ 5300, /* 7 */ 7000, /* 8 */ 8850, /* 9 */ 10900, /* 10 */ 13000, ],

	},



	'Merchant' : { // skill

		'name' : "Merchant",

		'footnote' : "skill-D",

		'INCOMPLETE' : "Y",

		EP : [ /* 0 */ 300, /* 1 */ 125, /* 2 */ 300, /* 3 */ 850, /* 4 */ 1400, /* 5 */ 2200, /* 6 */ 3400, /* 7 */ 4200, /* 8 */ 5300, /* 9 */ 6800, /* 10 */ 9500, ],

	},



	'Military Scientist' : { // skill

		'name' : "Military Scientist",

		'INCOMPLETE' : "Y",

		EP : [ /* 0 */ 300, /* 1 */ 125, /* 2 */ 350, /* 3 */ 950, /* 4 */ 1500, /* 5 */ 2350, /* 6 */ 3100, /* 7 */ 4150, /* 8 */ 5400, /* 9 */ 6750, /* 10 */ 10000, ],

	},



	'Navigator' : { // skill

		'name' : "Navigator",

		'INCOMPLETE' : "Y",

		EP : [ /* 0 */ 400, /* 1 */ 150, /* 2 */ 400, /* 3 */ 900, /* 4 */ 1550, /* 5 */ 2400, /* 6 */ 3350, /* 7 */ 4450, /* 8 */ 5750, /* 9 */ 7100, /* 10 */ 10500, ],

	},



	'Philosopher' : { // skill

		'name' : "Philosopher",

		'INCOMPLETE' : "Y",

		EP : [ /* 0 */ 1400, /* 1 */ 700, /* 2 */ 1400, /* 3 */ 2100, /* 4 */ 2800, /* 5 */ 3500, /* 6 */ 4200, /* 7 */ 4900, /* 8 */ 5600, /* 9 */ 6300, /* 10 */ 7000, ],

	},



	'Ranger' : { // skill

		'name' : "Ranger",

		'INCOMPLETE' : "Y",

		EP : [ /* 0 */ 600, /* 1 */ 250, /* 2 */ 800, /* 3 */ 1650, /* 4 */ 2750, /* 5 */ 4100, /* 6 */ 5650, /* 7 */ 7350, /* 8 */ 9300, /* 9 */ 11400, /* 10 */ 13250, ],

	},



	'Spy' : { // skill

		'name' : "Spy",

		'footnote' : "skill-E",

		'INCOMPLETE' : "Y",

		EP : [ /* 0 */ 500, /* 1 */ 200, /* 2 */ 600, /* 3 */ 1400, /* 4 */ 2400, /* 5 */ 3600, /* 6 */ 5000, /* 7 */ 6600, /* 8 */ 8400, /* 9 */ 10400, /* 10 */ 12600, ],

	},



	'Thief' : { // skill

		'name' : "Thief",

		'footnote' : "skill-E",

	Abilities : {

		"Detect Secret or Hidden Apertures" : {

		'name' : "Detect Secret or Hidden Apertures",

			"_" : "Within"

				+ rk({

		'base' : "5",})

				+ "feet",

		},

		"Detect Traps" : {

		'name' : "Detect Traps",

			"_" : "10 seconds",

		},

		"Remove Trap" : {

		'name' : "Remove Trap",

			"_" : rk({

		'base' : "12",

		'dec' : "1",})

				+ "minutes",

		},

		"Pick Lock" : {

		'name' : "Pick Lock",

			"_" : rk({

		'base' : "120",

		'dec' : "10",})

				+ "seconds",

		},

		"Open Safe" : {

		'name' : "Open Safe",

			"_" : rk({

		'base' : "15",

		'dec' : "1",})

				+ "minutes",

		},

		"Pick Pockets" : {

		'name' : "Pick Pockets",

		},

		"Photographic Memory" : {

		'name' : "Photographic Memory",

			"_" : "Observe for"

				+ rk({

		'base' : "240",

		'dec' : "20",})

				+ "seconds. Last up to"

				+ rk({

		'base' : "1",})

				+ "days",

		},

		"Improved Stealth" : {

		'name' : "Improved Stealth",

			"_" : rk({}),

		},

		"Climbing" : {

		'name' : "Climbing",

		},

	},

	Chances : {

		"Detect Secret or Hidden Apertures" : {

		'name' : "Detect Secret or Hidden Apertures",

		'base' : "PC x 2",

		'inc' : "5",

		},

		"Detect Traps" : {

		'name' : "Detect Traps",

		'base' : "PC",

		'inc' : "11",

		},

		"Remove Trap" : {

		'name' : "Remove Trap",

		'base' : "MD x 2",

		'inc' : "11",

			"_" : "- 5 / Trap Rank",

		},

		"Pick Lock" : {

		'name' : "Pick Lock",

		'base' : "MD x 2",

		'inc' : "6",

			"_" : "- 6 / Lock Rank",

		},

		"Open Safe" : {

		'name' : "Open Safe",

		'base' : "MD x 2",

		'inc' : "5",

			"_" : "- 7 / Safe Rank",

		},

		"Pick Pockets" : {

		'name' : "Pick Pockets",

		'base' : "MD x 3",

		'inc' : "6",

/* modifiers

*/

/* modifier @mod

		'_' : "Victim unconscious",

*/

// modifier END



/* modifier @mod

		'_' : "Victim sleeping or Stunned",

*/

// modifier END



/* modifier @mod

		'_' : "Victim cannot see well",

*/

// modifier END



/* modifier @mod

		'_' : "Victim inebriated",

*/

// modifier END



/* modifier @mod

		'_' : "Victim wears metal",

*/

// modifier END



/* modifier @mod

		'_' : "Uncrowded area and suspicion",

*/

// modifier END



/* modifier @mod

		'_' : "Object sealed in",

*/

// modifier END



/* modifier @mod

		'_' : "Object affixed or in constant use",

*/

// modifier END



/* modifier @mod

		'_' : "Object makes noise",

*/

// modifier END



/* modifier @mod

		'_' : "per Rank Victim is Assassin, Spy or Thief (use highest)",

*/

// modifier END



// modifiers END



		},

		"Photographic Memory" : {

		'name' : "Photographic Memory",

		'base' : "PC",

		'inc' : "10",

		},

		"Climbing" : {

		'name' : "Climbing",

		'base' : "MD x 4",

		'inc' : "10",

			"_" : "- (Structure Height in feet / 10)",

		},

	},

/* costMod @modType, @mod

		'_' : "if Spy rank higher",

*/

// costMod END



/* requirement

		'_' : "Literate in one Language to Rank 3 to progress past Rank 3.",

*/

// requirement END



		EP : [ /* 0 */ 750, /* 1 */ 300, /* 2 */ 1050, /* 3 */ 2350, /* 4 */ 4000, /* 5 */ 5750, /* 6 */ 7900, /* 7 */ 10250, /* 8 */ 12900, /* 9 */ 14850, /* 10 */ 16000, ],

	},



	'Troubadour' : { // skill

		'name' : "Troubadour",

		'footnote' : "skill-F",

	Abilities : {

		"Abilities" : {

		'name' : "Abilities",

/* abilities

*/

	Abilities : {

		"Bureaucracy" : {

		'name' : "Bureaucracy",

		},

		"Acrobatics" : {

		'name' : "Acrobatics",

		},

		"Acting" : {

		'name' : "Acting",

		},

		"Bardic voice" : {

		'name' : "Bardic voice",

			"_" : "Enthral up to"

				+ rk({

		'base' : "4",

		'inc' : "6",})

				+ "beings, with"

				+ rk({

		'base' : "15",

		'dec' : "1",})

				+ "minutes being required to work their skill. May repeat to double targets until fail or (Rank / 2) repeats (4 FT) Note: A troubadour may not specialise in Bardic Voice.",

		},

		"Comedy" : {

		'name' : "Comedy",

		},

		"Dance" : {

		'name' : "Dance",

		},

		"Fire eating" : {

		'name' : "Fire eating",

		},

		"Juggling" : {

		'name' : "Juggling",

			"_" : "up to"

				+ rk({

		'base' : "1",})

				+ "items, of equal weight and size. If different size and/or weight, each difference counts as another item juggled.",

		},

		"Make up" : {

		'name' : "Make up",

		},

		"Mime" : {

		'name' : "Mime",

		},

		"Mimicry" : {

		'name' : "Mimicry",

		},

		"Patter" : {

		'name' : "Patter",

		},

		"Play an instrument" : {

		'name' : "Play an instrument",

			"_" : "This ability may be taken several times with different instruments. A singer is one who has play instrument (voice). A troubadour can usually play similar instruments to the ones they have chosen at (Rank / 2).",

		},

		"Poetry" : {

		'name' : "Poetry",

		},

		"Prestidigitation" : {

		'name' : "Prestidigitation",

			"_" : "This ability also gives a bonus to the casting of all Minor Magics of"

				+ rk({

		'base' : "2",

		'inc' : "2",})

				+ ".",

		},

		"Production" : {

		'name' : "Production",

		},

		"Puppetry" : {

		'name' : "Puppetry",

		},

		"Stilt walking" : {

		'name' : "Stilt walking",

			"_" : "Stilts of up to"

				+ rk({

		'base' : "50",

		'inc' : "20",})

				+ "% of the troubadour's height.",

		},

		"Storytelling" : {

		'name' : "Storytelling",

		},

		"Sword swallowing" : {

		'name' : "Sword swallowing",

		},

		"Tightrope walking" : {

		'name' : "Tightrope walking",

		},

		"Ventriloquism" : {

		'name' : "Ventriloquism",

			"_" : "up to (Rank / 2) feet away.",

		},

	},

// abilities END



			"_" : "Choose"

				+ rk({

		'base' : "3",})

				+ "abilities. Abilities may be chosen again to increase effective Rank with that ability.",

		},

	},

	Chances : {

		"General Chance" : {

		'name' : "General Chance",

		'base' : "3 x Stat",

		'inc' : "5",

		},

		"Bardic Voice" : {

		'name' : "Bardic Voice",

		'base' : "50",

		'inc' : "5",

		},

	},

		EP : [ /* 0 */ 250, /* 1 */ 100, /* 2 */ 200, /* 3 */ 500, /* 4 */ 1050, /* 5 */ 1450, /* 6 */ 2100, /* 7 */ 2800, /* 8 */ 3900, /* 9 */ 4600, /* 10 */ 7000, ],

	},



	'Warrior' : { // skill

		'name' : "Warrior",

	Abilities : {

		"Defence" : {

		'name' : "Defence",

			"_" : "Increased by lesser of"

				+ rk({

		'base' : "2",

		'inc' : "4",})

				+ "of best weapon in Category or"

				+ rk({

		'base' : "2",

		'inc' : "2",}),

		},

		"Initiative" : {

		'name' : "Initiative",

			"_" : rk({}),

		},

		"Familiar weapons" : {

		'name' : "Familiar weapons",

			"_" : "Can wield other weapons in Category at effective Rank of half of lesser of best weapon Rank or Warrior Rank",

		},

		"Strike Chance" : {

		'name' : "Strike Chance",

			"_" : "Increased by"

				+ rk({

		'base' : "1",}),

		},

		"Damage" : {

		'name' : "Damage",

			"_" : rk({

		'full' : "5",}),

		},

		"Parry" : {

		'name' : "Parry",

			"_" : rk({

		'full' : "4",}),

		},

		"Weapon Training" : {

		'name' : "Weapon Training",

			"_" : "Main train weapons without trainer. +10% ep cost if have higher weapon rank in same Caetgory, +25% ep cost otherwise",

		},

		"Merchant equivalent" : {

		'name' : "Merchant equivalent",

			"_" : "Full Rank for weapons known and Half Rank for other weapons in known Categories",

		},

	},

/* requirement

		'_' : "In opponents Melee zone",

*/

// requirement END



/* requirement

		'_' : "Must have a training partner of at least equal rank",

*/

// requirement END



/* requirement

		'_' : "Must have at least Rank 4 with a Close rated Weapon",

*/

// requirement END



/* requirement

		'_' : "Must have ranks summarised in Warrior Ranks Table

      ",

*/

Tables : {

	"Warrior Ranking Requirements" : {

		'title' : "Warrior Ranking Requirements",

		'cols' : "7",

/* row

*/

/* head

		'_' : "Warrior Rank",

*/

// head END



/* head

		'_' : "No. Categories",

*/

// head END



/* head

		'_' : "Minimum Rank",

*/

// head END



/* head

		'_' : "Rank 4+",

*/

// head END



/* head

		'_' : "Rank 5+",

*/

// head END



/* head

		'_' : "Rank 6+",

*/

// head END



/* head

		'_' : "Rank 7+",

*/

// head END



// row END



/* row

*/

/* cell

		'_' : "0",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "0",

*/

// cell END



/* cell

		'_' : "1",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "1",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "1",

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "1",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "2",

*/

// cell END



/* cell

		'_' : "7",

*/

// cell END



/* cell

		'_' : "1",

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "1",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "3",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "2",

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "2",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "7",

*/

// cell END



/* cell

		'_' : "2",

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "2",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "5",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "3",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "1",

*/

// cell END



/* cell

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "6",

*/

// cell END



/* cell

		'_' : "7",

*/

// cell END



/* cell

		'_' : "3",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "2",

*/

// cell END



/* cell

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "7",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "1",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "8",

*/

// cell END



/* cell

		'_' : "7",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "2",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "9",

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "5",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "3",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "10",

*/

// cell END



/* cell

		'_' : "7",

*/

// cell END



/* cell

		'_' : "5",

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

*/

// cell END



/* cell

		'_' : "4",

*/

// cell END



// row END



	},

},

// requirement END



		EP : [ /* 0 */ 600, /* 1 */ 250, /* 2 */ 750, /* 3 */ 1700, /* 4 */ 2900, /* 5 */ 4200, /* 6 */ 5750, /* 7 */ 7550, /* 8 */ 9500, /* 9 */ 11700, /* 10 */ 14100, ],

	},



	'Weaponsmith' : { // skill

		'name' : "Weaponsmith",

	Abilities : {

		"Weapon Groups" : {

		'name' : "Weapon Groups",

		'chooseRank' : "0, 2, 4, 6, 8, 10, +",

/* listOf @type

*/

// listOf END



		},

		"Base Chance" : {

		'name' : "Base Chance",

			"_" : rk({})

				+ "applied",

		},

		"Damage" : {

		'name' : "Damage",

			"_" : rk({

		'per' : "5",})

				+ "applied",

		},

		"Merchant equivalent" : {

		'name' : "Merchant equivalent",

			"_" : "Full Rank for groups known and Half Rank for all other groups.",

		},

	},

/* costMod @modType, @mod

		'_' : "per MD below 16",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "per MD above 20",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "if Armourer rank higher",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "per Effective Rank",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "per Damage Bonus",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "based off Weapon price",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "per Effective Rank",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "per Damage Bonus",

*/

// costMod END



		EP : [ /* 0 */ 600, /* 1 */ 300, /* 2 */ 800, /* 3 */ 1600, /* 4 */ 3000, /* 5 */ 5500, /* 6 */ 6200, /* 7 */ 7300, /* 8 */ 8800, /* 9 */ 10800, /* 10 */ 14000, /* + */ 10000, ],

	},




};




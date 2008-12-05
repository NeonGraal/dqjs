

// == Dq -  Races ==



dq.races = {
	toCode : function() {
		r = [];
		rt = "$DQ.race('#{name}', #{epModifier}, #{size}, '#{heightTable}').living('#{startAge}', '#{lifeSpan}', #{fertility}).";
		gmt = "  addGenderMod('#{gender}', #{height}, #{weight}).";
		smt = "  addStatMod('#{key}', #{value}).";
		$H(this).each(function(p) {
			if (p.key != 'toCode') {
				r.push(rt.interpolate(p.value));
				p.value.RacialTraits.each(function(t){r.push('  addTrait("' + t + '").');});
				r.push(gmt.interpolate(p.value.Male));
				r.push(gmt.interpolate(p.value.Female));
				$H(p.value.StatMods).each(function(s){r.push(smt.interpolate(s));});
				r.push('');
			}
		});
		return r.join('\n');
	},

	'Dwarf' : { // race

		'name' : "Dwarf",

		'epModifier' : "1.1",

		'fertility' : "3%",

		'size' : "4",

		'startAge' : "20",

		'lifeSpan' : "125 - 150",

		'heightTable' : "Short",

		RacialTraits : [

			"Dwarves close vision is exceptionally sharp, but many have poor distance vision. They can see in the dark as a human does at dusk. Their effective range of vision in the dark is 50 feet under the open sky, 100 feet inside man-made structures, and 150 feet inside caves and tunnels.",

			"Dwarves can assess the value of and deal in gems and metals as if they are a Merchant of Rank 5. If a dwarf character progresses in the Merchant skill, their ability to assess the value of gems and metals is five greater then their current Rank, to a maximum of ten.",

			"If a dwarf character is a Ranger specialising in mountains or caverns, they pay half the EP cost necessary to advance ranks.",

			"A dwarf's capacity for alcohol is twice that of a human's.",

		],

		'Male' : {

		'gender' : "Male",

		'height' : "+0",

		'weight' : "100%",

		},



		'Female' : {

		'gender' : "Female",

		'height' : "-2",

		'weight' : "90%",

		},



		StatMods : {

			"PS" : +2,

			"AG" : -2,

			"EN" : +2,

			"MA" : -2,

			"WP" : +2,

			"PC" : +1,

			"PB" : -2,

			"TMR" : -1,

		},

	},



	'Elf' : { // race

		'name' : "Elf",

		'epModifier' : "1.2",

		'fertility' : "1%",

		'size' : "5",

		'startAge' : "30 - 300",

		'lifeSpan' : "10000",

		'heightTable' : "Normal",

		RacialTraits : [

			"Elves have superior vision especially over long distances or in poor lighting. An elf can see in the dark as a human does on a cloudy day. Their effective range of vision in the dark is 150 feet under the open sky, and 75 feet elsewhere.",

			"If an elf character is a ranger specialising in woods, they pay one-half the EP to advance ranks.",

			"An elf receives a racial Talent which functions in all respects as the Witchcraft Witchsight Talent.",

			"An elf makes little or no noise while walking and adds 10% to their chance to perform any activity requiring stealth.",

			"If an elf character takes the healer skill, the elf pays three-quarters the EP to advance ranks, though they cannot resurrect the dead.",

			"An elf is impervious to the special abilities of the lesser undead.",

			"If an elf character takes the courtier skill, the elf pays one-half the EP to advance ranks.",

		],

		'Male' : {

		'gender' : "Male",

		'height' : "+5",

		'weight' : "80%",

		},



		'Female' : {

		'gender' : "Female",

		'height' : "+2",

		'weight' : "65%",

		},



		StatMods : {

			"PS" : -1,

			"AG" : +1,

			"EN" : -1,

			"MA" : +1,

			"WP" : +1,

			"PC" : +1,

			"PB" : +2,

			"TMR" : +1,

		},

	},



	'Halfling' : { // race

		'name' : "Halfling",

		'epModifier' : "1.1",

		'fertility' : "4%",

		'size' : "3",

		'startAge' : "21",

		'lifeSpan' : "80 - 90",

		'heightTable' : "Short",

		RacialTraits : [

			"A halfling has infravision, which allows them to see faint red shapes where living beings are located in the dark. Their range of vision is 100 feet.",

			"A halfling adds 20% to their chance to perform any activity requiring stealth.",

			"If a halfling takes the thief skill, they pay half the EP cost to advance ranks.",

			"A halfling may drop jewellery down active volcanos without anyone thinking the worse of them.",

		],

		'Male' : {

		'gender' : "Male",

		'height' : "-12",

		'weight' : "65%",

		},



		'Female' : {

		'gender' : "Female",

		'height' : "-13",

		'weight' : "60%",

		},



		StatMods : {

			"PS" : -3,

			"MD" : +3,

			"AG" : +1,

			"EN" : -2,

			"MA" : -1,

			"WP" : +1,

			"PB" : -1,

		},

	},



	'Hill Giant' : { // race

		'name' : "Hill Giant",

		'epModifier' : "1.5",

		'fertility' : "2%",

		'size' : "9",

		'startAge' : "26",

		'lifeSpan' : "500",

		'heightTable' : "Giant",

		'chance' : "6%",

		RacialTraits : [

			"A giant has infravision, which allows them to see faint red shapes where living beings are located in the dark. Their range of vision is 250 feet.",

			"A giant's magic resistance is increased by 10%.",

			"Whenever a giant attempts minor magic, the GM should increase the difficulty factor by one, making it easier.",

			"Giants may use the giant weapons listed in the Weapons Table.",

		],

		'Male' : {

		'gender' : "Male",

		'height' : "+0",

		'weight' : "100%",

		},



		'Female' : {

		'gender' : "Female",

		'height' : "-4",

		'weight' : "90%",

		},



		StatMods : {

			"PS" : +7,

			"MD" : -1,

			"AG" : -2,

			"EN" : +8,

			"MA" : -1,

			"WP" : -1,

			"FT" : +1,

			"PB" : -1,

			"TMR" : +3,

			"NA" : +1,

		},

	},



	'Human' : { // race

		'name' : "Human",

		'epModifier' : "1.0",

		'fertility' : "6%",

		'size' : "6",

		'startAge' : "16",

		'lifeSpan' : "40 - 90",

		'heightTable' : "Normal",

		RacialTraits : [

			"Humans can ingratiate themselves with strangers more readily than other races. A human character has +10 to any reaction roll in an encounter with sentient creatures.",

		],

		'Male' : {

		'gender' : "Male",

		'height' : "+0",

		'weight' : "100%",

		},



		'Female' : {

		'gender' : "Female",

		'height' : "-4",

		'weight' : "80%",

		},



	},



	'Orc' : { // race

		'name' : "Orc",

		'epModifier' : "1.1",

		'fertility' : "10%",

		'size' : "6",

		'startAge' : "12",

		'lifeSpan' : "40 - 45",

		'heightTable' : "Normal",

		RacialTraits : [

			"An orc's eyes are highly light-sensitive. They must decrease their chance of hitting a target with Ranged Combat by 10% in daylight.",

			"An orc has infravision, which allows them to see faint red shapes where living beings are located in the dark. Their range of vision is 150 feet.",

			"Orcs are either back-stabbing scum or brutal bully-boys. An orc may take one of either Assassin Skill or Warrior Skill and pay three-quarters the EP to advance in Ranks.",

			"An orc's seed is highly fertile. The orc and hybrid orc population increase mitigates against the high orc fatality rate.",

		],

		'Male' : {

		'gender' : "Male",

		'height' : "-4",

		'weight' : "110%",

		},



		'Female' : {

		'gender' : "Female",

		'height' : "-6",

		'weight' : "100%",

		},



		StatMods : {

			"PS" : +2,

			"EN" : +1,

			"MA" : -2,

			"WP" : -2,

			"FT" : +2,

			"PB" : -4,

			"NA" : +1,

		},

	},



	'Shape Changer' : { // race

		'name' : "Shape Changer",

		'epModifier' : "1.4",

		'fertility' : "5%",

		'size' : "6",

		'startAge' : "16",

		'lifeSpan' : "55 - 65",

		'heightTable' : "Normal",

		'chance' : "4%",

		RacialTraits : [

			"A shape changer can change from human to animal form (or vice-versa) in 10 seconds during daytime and 5 seconds during the night-time.",

			"A shape changer possesses a dual nature. While in animal form, human inhibitions will be muted; and while in human form, animal instincts will be dulled.",

			"A shape changer cannot be harmed while in animal form, unless struck by a silvered weapon, magic or by a being with a Physical Strength greater than 25. Five Damage Points are automatically absorbed in the latter case.",

			"A shape changer will regenerate 1 Endurance Point every 60 seconds while in animal form.",

			"The player must devise a set of characteristics for their animal form. Take the difference between the average for each characteristic in animal and human form, and modify the human characteristics appropriately.",

			"A shape changer is automatically lunar aspected.",

			"A shape changer can remain in animal form for a quarter of the night times the quarters of the moon showing (i.e. at full moon they may remain in animal form all night). During the day a shape changer can remain in animal form for one hour times the quarter of the moon. A shape changer can make one set of transformations times the quarter of the of the moon per day (i.e. dawn to next dawn).",

			"If a shape changer is in animal form during the day, there is a 1% cumulative chance for each 5 minutes they remain in animal form that they will never be able to change back into human form. Similarly, if the shape changer exceeds the time limits given above, there is a 1% cumulative chance (per 5 minutes) of their not being able to return to human form.",

			"A shape changer will be inconvenienced by those wards which can be used against were-creatures.",

			"A shape changer's magic resistance is increased by 5%.",

			"If a shape changer takes the courtier skill they pay three-quarters the Experience Points necessary to advance ranks.",

		],

		'Male' : {

		'gender' : "Male",

		'height' : "+0",

		'weight' : "100%",

		},



		'Female' : {

		'gender' : "Female",

		'height' : "-4",

		'weight' : "80%",

		},



		StatMods : {

			"PB" : +1,

		},

	},





};






// == Dq -  Weapons ==



dq.weaponGroups = {
	toCode : function() {
		r = [];
		e = [];
		$H(this).each(function(g) {
			wt = "new $DQ.Weapon('";
			at = "', '#{name}', '#{hands}', #{weight}, " +
				"#{requiredPS}, #{requiredMD}, #{baseChance}, #{damage}, " +
				"#{range}, '#{class}', '#{usage}', #{maximumRank}, #{cost}).";
			et = "new $DQ.Skill('Weapon Skills', '#{name}', [#{EP}]);";
			if (g.key != 'toCode') {
				$H(g.value).each(function(p){
					switch (p.key) {
						case 'name':
						case 'RequiredGroups':
							break;
						default:
							r.push(wt + g.key + at.interpolate(p.value));
							e.push(et.interpolate(p.value));
					}
				});
			}
		});
		return e.join('<br>');
	},

	'Swords' : { // weaponGroup

		'name' : "Swords",

	'Dagger' : { // weapon

		'name' : "Dagger",

		'hands' : "1",

		'weight' : "10oz",

		'requiredPS' : "7",

		'requiredMD' : "10",

		'baseChance' : "40",

		'damage' : "+0",

		'range' : "8",

		'class' : "A",

		'usage' : "RMC",

		'maximumRank' : "9",

		'cost' : "10",

		'footnote' : "weap-A",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 50, /* 3 */ 100, /* 4 */ 200, /* 5 */ 400, /* 6 */ 700, /* 7 */ 1500, /* 8 */ 3000, /* 9 */ 4000, ],

	},



	'Main-gauche' : { // weapon

		'name' : "Main-gauche",

		'hands' : "1",

		'weight' : "1",

		'requiredPS' : "8",

		'requiredMD' : "15",

		'baseChance' : "45",

		'damage' : "+1",

		'range' : "P",

		'class' : "A",

		'usage' : "MC",

		'maximumRank' : "10",

		'cost' : "20",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 1100, /* 6 */ 1500, /* 7 */ 3000, /* 8 */ 3000, /* 9 */ 3000, /* 10 */ 4000, ],

	},



	'Shortsword' : { // weapon

		'name' : "Shortsword",

		'hands' : "1",

		'weight' : "2",

		'requiredPS' : "10",

		'requiredMD' : "12",

		'baseChance' : "45",

		'damage' : "+3",

		'range' : "P",

		'class' : "A",

		'usage' : "M",

		'maximumRank' : "6",

		'cost' : "40",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1500, /* 6 */ 3000, ],

	},



	'Falchion' : { // weapon

		'name' : "Falchion",

		'hands' : "1",

		'weight' : "4",

		'requiredPS' : "12",

		'requiredMD' : "11",

		'baseChance' : "50",

		'damage' : "+2",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "8",

		'cost' : "35",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 50, /* 3 */ 100, /* 4 */ 200, /* 5 */ 400, /* 6 */ 700, /* 7 */ 1500, /* 8 */ 3000, ],

	},



	'Scimitar' : { // weapon

		'name' : "Scimitar",

		'hands' : "1",

		'weight' : "4",

		'requiredPS' : "11",

		'requiredMD' : "15",

		'baseChance' : "50",

		'damage' : "+3",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "8",

		'cost' : "60",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1500, /* 6 */ 3000, /* 7 */ 3000, /* 8 */ 3000, ],

	},



	'Tulwar' : { // weapon

		'name' : "Tulwar",

		'hands' : "1",

		'weight' : "4",

		'requiredPS' : "13",

		'requiredMD' : "15",

		'baseChance' : "50",

		'damage' : "+4",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "8",

		'cost' : "65",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1500, /* 6 */ 3000, /* 7 */ 3000, /* 8 */ 3000, ],

	},



	'Rapier' : { // weapon

		'name' : "Rapier",

		'hands' : "1",

		'weight' : "2",

		'requiredPS' : "11",

		'requiredMD' : "18",

		'baseChance' : "45",

		'damage' : "+3",

		'range' : "P",

		'class' : "A",

		'usage' : "M",

		'maximumRank' : "10",

		'cost' : "35",

		EP : [ /* 0 */ 200, /* 1 */ 200, /* 2 */ 200, /* 3 */ 200, /* 4 */ 200, /* 5 */ 500, /* 6 */ 500, /* 7 */ 2000, /* 8 */ 4000, /* 9 */ 4000, /* 10 */ 3000, ],

	},



	'Sabre' : { // weapon

		'name' : "Sabre",

		'hands' : "1",

		'weight' : "3",

		'requiredPS' : "14",

		'requiredMD' : "15",

		'baseChance' : "60",

		'damage' : "+3",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "7",

		'cost' : "40",

		EP : [ /* 0 */ 150, /* 1 */ 150, /* 2 */ 200, /* 3 */ 500, /* 4 */ 1000, /* 5 */ 2000, /* 6 */ 2000, /* 7 */ 2000, ],

	},



	'Broadsword' : { // weapon

		'name' : "Broadsword",

		'hands' : "1",

		'weight' : "3",

		'requiredPS' : "15",

		'requiredMD' : "15",

		'baseChance' : "55",

		'damage' : "+4",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "6",

		'cost' : "50",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 700, /* 6 */ 1500, ],

	},



	'Estoc' : { // weapon

		'name' : "Estoc",

		'hands' : "1",

		'weight' : "2",

		'requiredPS' : "15",

		'requiredMD' : "17",

		'baseChance' : "45",

		'damage' : "+5",

		'range' : "P",

		'class' : "A",

		'usage' : "M",

		'maximumRank' : "9",

		'cost' : "65",

		EP : [ /* 0 */ 75, /* 1 */ 75, /* 2 */ 150, /* 3 */ 200, /* 4 */ 500, /* 5 */ 1000, /* 6 */ 2000, /* 7 */ 4000, /* 8 */ 4000, /* 9 */ 3000, ],

	},



	'Hand & a half' : { // weapon

		'name' : "Hand & a half",

		'hands' : "1-2",

		'weight' : "6",

		'requiredPS' : "17",

		'requiredMD' : "16",

		'baseChance' : "60",

		'damage' : "+5",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "7",

		'cost' : "85",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 500, /* 5 */ 900, /* 6 */ 1700, /* 7 */ 2000, ],

	},



	'Claymore' : { // weapon

		'name' : "Claymore",

		'hands' : "1-2",

		'weight' : "5",

		'requiredPS' : "16",

		'requiredMD' : "13",

		'baseChance' : "50",

		'damage' : "+4",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "7",

		'cost' : "80",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 700, /* 6 */ 1500, /* 7 */ 1800, ],

	},



	'Two-handed sword' : { // weapon

		'name' : "Two-handed sword",

		'hands' : "2",

		'weight' : "9",

		'requiredPS' : "22",

		'requiredMD' : "14",

		'baseChance' : "55",

		'damage' : "+7",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "100",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 700, ],

	},



	'Katana' : { // weapon

		'name' : "Katana",

		'hands' : "1-2",

		'weight' : "3",

		'requiredPS' : "14",

		'requiredMD' : "17",

		'baseChance' : "60",

		'damage' : "+3",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "7",

		'cost' : "0",

	},



	},



	'Hafted weapons' : { // weaponGroup

		'name' : "Hafted weapons",

	'Hand axe' : { // weapon

		'name' : "Hand axe",

		'hands' : "1",

		'weight' : "2",

		'requiredPS' : "8",

		'requiredMD' : "11",

		'baseChance' : "40",

		'damage' : "+1",

		'range' : "8",

		'class' : "B",

		'usage' : "RMC",

		'maximumRank' : "4",

		'cost' : "15",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 500, /* 4 */ 1500, ],

	},



	'Battle axe' : { // weapon

		'name' : "Battle axe",

		'hands' : "1-2",

		'weight' : "5",

		'requiredPS' : "14",

		'requiredMD' : "14",

		'baseChance' : "60",

		'damage' : "+4",

		'range' : "6",

		'class' : "B",

		'usage' : "RM",

		'maximumRank' : "7",

		'cost' : "20",

		EP : [ /* 0 */ 75, /* 1 */ 75, /* 2 */ 150, /* 3 */ 200, /* 4 */ 500, /* 5 */ 1000, /* 6 */ 2000, /* 7 */ 4000, ],

	},



	'Great axe' : { // weapon

		'name' : "Great axe",

		'hands' : "2",

		'weight' : "6",

		'requiredPS' : "19",

		'requiredMD' : "17",

		'baseChance' : "65",

		'damage' : "+6",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "7",

		'cost' : "30",

		EP : [ /* 0 */ 75, /* 1 */ 75, /* 2 */ 150, /* 3 */ 200, /* 4 */ 500, /* 5 */ 1000, /* 6 */ 2000, /* 7 */ 4000, ],

	},



	'Giant axe' : { // weapon

		'name' : "Giant axe",

		'hands' : "1",

		'weight' : "25",

		'requiredPS' : "29",

		'requiredMD' : "12",

		'baseChance' : "65",

		'damage' : "+10",

		'range' : "6",

		'class' : "B",

		'usage' : "RM",

		'maximumRank' : "7",

		'cost' : "50",

		'footnote' : "weap-B",

		EP : [ /* 0 */ 150, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 500, /* 5 */ 1000, /* 6 */ 3000, /* 7 */ 5000, ],

	},



	'Crude club' : { // weapon

		'name' : "Crude club",

		'hands' : "1",

		'weight' : "4",

		'requiredPS' : "16",

		'requiredMD' : "10",

		'baseChance' : "45",

		'damage' : "+2",

		'range' : "6",

		'class' : "C",

		'usage' : "RM",

		'maximumRank' : "2",

		'cost' : "3",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 50, ],

	},



	'War club' : { // weapon

		'name' : "War club",

		'hands' : "1",

		'weight' : "3",

		'requiredPS' : "14",

		'requiredMD' : "10",

		'baseChance' : "50",

		'damage' : "+2",

		'range' : "7",

		'class' : "C",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "5",

		EP : [ /* 0 */ 25, /* 1 */ 75, /* 2 */ 150, /* 3 */ 300, /* 4 */ 500, /* 5 */ 700, ],

	},



	'Giant club' : { // weapon

		'name' : "Giant club",

		'hands' : "1",

		'weight' : "10",

		'requiredPS' : "25",

		'requiredMD' : "9",

		'baseChance' : "50",

		'damage' : "+8",

		'range' : "9",

		'class' : "C",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "10",

		'footnote' : "weap-B",

		EP : [ /* 0 */ 25, /* 1 */ 75, /* 2 */ 150, /* 3 */ 300, /* 4 */ 500, /* 5 */ 700, ],

	},



	'Torch' : { // weapon

		'name' : "Torch",

		'hands' : "1",

		'weight' : "3",

		'requiredPS' : "8",

		'requiredMD' : "12",

		'baseChance' : "40",

		'damage' : "+1",

		'range' : "P",

		'class' : "C",

		'usage' : "M",

		'maximumRank' : "-",

		'cost' : "1",

		'footnote' : "weap-C",

	},



	'Mace' : { // weapon

		'name' : "Mace",

		'hands' : "1",

		'weight' : "5",

		'requiredPS' : "16",

		'requiredMD' : "9",

		'baseChance' : "50",

		'damage' : "+4",

		'range' : "5",

		'class' : "C",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "15",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 700, ],

	},



	'Giant mace' : { // weapon

		'name' : "Giant mace",

		'hands' : "1",

		'weight' : "25",

		'requiredPS' : "27",

		'requiredMD' : "10",

		'baseChance' : "50",

		'damage' : "+7",

		'range' : "8",

		'class' : "C",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "40",

		'footnote' : "weap-B",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 700, ],

	},



	'War hammer' : { // weapon

		'name' : "War hammer",

		'hands' : "1",

		'weight' : "4",

		'requiredPS' : "15",

		'requiredMD' : "13",

		'baseChance' : "45",

		'damage' : "+3",

		'range' : "6",

		'class' : "C",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "15",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 700, ],

	},



	'War pick' : { // weapon

		'name' : "War pick",

		'hands' : "1-2",

		'weight' : "5",

		'requiredPS' : "17",

		'requiredMD' : "13",

		'baseChance' : "45",

		'damage' : "+4",

		'range' : "P",

		'class' : "C",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "20",

		EP : [ /* 0 */ 75, /* 1 */ 75, /* 2 */ 150, /* 3 */ 200, /* 4 */ 500, /* 5 */ 1000, ],

	},



	'Flail' : { // weapon

		'name' : "Flail",

		'hands' : "1",

		'weight' : "4",

		'requiredPS' : "14",

		'requiredMD' : "15",

		'baseChance' : "50",

		'damage' : "+2",

		'range' : "P",

		'class' : "C",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "15",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 50, /* 3 */ 100, /* 4 */ 200, /* 5 */ 400, ],

	},



	'Morningstar' : { // weapon

		'name' : "Morningstar",

		'hands' : "1-2",

		'weight' : "5",

		'requiredPS' : "18",

		'requiredMD' : "15",

		'baseChance' : "60",

		'damage' : "+4",

		'range' : "P",

		'class' : "C",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "20",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1800, ],

	},



	'Mattock' : { // weapon

		'name' : "Mattock",

		'hands' : "2",

		'weight' : "6",

		'requiredPS' : "19",

		'requiredMD' : "14",

		'baseChance' : "55",

		'damage' : "+6",

		'range' : "P",

		'class' : "C",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "18",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 700, ],

	},



	'Quarterstaff' : { // weapon

		'name' : "Quarterstaff",

		'hands' : "2",

		'weight' : "3",

		'requiredPS' : "12",

		'requiredMD' : "16",

		'baseChance' : "55",

		'damage' : "+2",

		'range' : "P",

		'class' : "C",

		'usage' : "M",

		'maximumRank' : "9",

		'cost' : "3",

		EP : [ /* 0 */ 75, /* 1 */ 75, /* 2 */ 150, /* 3 */ 200, /* 4 */ 500, /* 5 */ 1000, /* 6 */ 2000, /* 7 */ 4000, /* 8 */ 4000, /* 9 */ 3000, ],

	},



	'Sap' : { // weapon

		'name' : "Sap",

		'hands' : "1",

		'weight' : "1",

		'requiredPS' : "9",

		'requiredMD' : "11",

		'baseChance' : "40",

		'damage' : "+1",

		'range' : "P",

		'class' : "C",

		'usage' : "MC",

		'maximumRank' : "3",

		'cost' : "2",

		'footnote' : "weap-D",

		EP : [ /* 0 */ 25, /* 1 */ 75, /* 2 */ 150, /* 3 */ 250, ],

	},



	},



	'Thrown weapons' : { // weaponGroup

		'name' : "Thrown weapons",

		'footnote' : "weap-E",

	'Throwing dart' : { // weapon

		'name' : "Throwing dart",

		'hands' : "1",

		'weight' : "3oz",

		'requiredPS' : "9",

		'requiredMD' : "15",

		'baseChance' : "40",

		'damage' : "+0",

		'range' : "12",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "10",

		'cost' : "1",

		'footnote' : "weap-F",

		EP : [ /* 0 */ 200, /* 1 */ 100, /* 2 */ 200, /* 3 */ 500, /* 4 */ 1000, /* 5 */ 2000, /* 6 */ 2000, /* 7 */ 2000, /* 8 */ 2000, /* 9 */ 2000, /* 10 */ 2000, ],

	},



	'Boomerang' : { // weapon

		'name' : "Boomerang",

		'hands' : "1",

		'weight' : "1",

		'requiredPS' : "11",

		'requiredMD' : "15",

		'baseChance' : "40",

		'damage' : "+0",

		'range' : "20",

		'class' : "C",

		'usage' : "R",

		'maximumRank' : "7",

		'cost' : "2",

		'footnote' : "weap-G",

		EP : [ /* 0 */ 100, /* 1 */ 300, /* 2 */ 500, /* 3 */ 1000, /* 4 */ 1200, /* 5 */ 1500, /* 6 */ 1500, /* 7 */ 1500, ],

	},



	'Grenado' : { // weapon

		'name' : "Grenado",

		'hands' : "1",

		'weight' : "2",

		'requiredPS' : "9",

		'requiredMD' : "15",

		'baseChance' : "40",

		'damage' : "",

		'range' : "15",

		'class' : "-",

		'usage' : "R",

		'maximumRank' : "4",

		'cost' : "0",

		'footnote' : "weap-H",

		EP : [ /* 0 */ 25, /* 1 */ 50, /* 2 */ 75, /* 3 */ 100, /* 4 */ 150, ],

	},



	},



	'Pole weapons' : { // weaponGroup

		'name' : "Pole weapons",

	'Javelin' : { // weapon

		'name' : "Javelin",

		'hands' : "1",

		'weight' : "3",

		'requiredPS' : "12",

		'requiredMD' : "15",

		'baseChance' : "45",

		'damage' : "+2",

		'range' : "12",

		'class' : "A",

		'usage' : "RM",

		'maximumRank' : "10",

		'cost' : "4",

		'footnote' : "weap-I",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 400, /* 5 */ 800, /* 6 */ 1400, /* 7 */ 2000, /* 8 */ 2000, /* 9 */ 2000, /* 10 */ 3000, ],

	},



	'Spear' : { // weapon

		'name' : "Spear",

		'hands' : "1-2",

		'weight' : "5",

		'requiredPS' : "15",

		'requiredMD' : "14",

		'baseChance' : "50",

		'damage' : "+3",

		'range' : "6",

		'class' : "A",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "10",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1800, ],

	},



	'Giant spear' : { // weapon

		'name' : "Giant spear",

		'hands' : "1-2",

		'weight' : "15",

		'requiredPS' : "22",

		'requiredMD' : "16",

		'baseChance' : "55",

		'damage' : "+7",

		'range' : "12",

		'class' : "A",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "20",

		'footnote' : "weap-B",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1800, ],

	},



	'Pike' : { // weapon

		'name' : "Pike",

		'hands' : "2",

		'weight' : "8",

		'requiredPS' : "18",

		'requiredMD' : "16",

		'baseChance' : "45",

		'damage' : "+5",

		'range' : "P",

		'class' : "A",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "15",

		'footnote' : "weap-J",

		EP : [ /* 0 */ 200, /* 1 */ 200, /* 2 */ 400, /* 3 */ 700, /* 4 */ 1500, /* 5 */ 3000, ],

	},



	'Lance' : { // weapon

		'name' : "Lance",

		'hands' : "1",

		'weight' : "7",

		'requiredPS' : "16",

		'requiredMD' : "18",

		'baseChance' : "45",

		'damage' : "+6",

		'range' : "P",

		'class' : "A",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "4",

		'footnote' : "weap-K",

		EP : [ /* 0 */ 250, /* 1 */ 400, /* 2 */ 700, /* 3 */ 1000, /* 4 */ 1700, /* 5 */ 3500, ],

	},



	'Halberd' : { // weapon

		'name' : "Halberd",

		'hands' : "2",

		'weight' : "6",

		'requiredPS' : "16",

		'requiredMD' : "16",

		'baseChance' : "55",

		'damage' : "+3",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "15",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1500, ],

	},



	'Poleaxe' : { // weapon

		'name' : "Poleaxe",

		'hands' : "2",

		'weight' : "6",

		'requiredPS' : "18",

		'requiredMD' : "15",

		'baseChance' : "55",

		'damage' : "+4",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "5",

		'cost' : "20",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1500, ],

	},



	'Trident' : { // weapon

		'name' : "Trident",

		'hands' : "1-2",

		'weight' : "5",

		'requiredPS' : "14",

		'requiredMD' : "16",

		'baseChance' : "45",

		'damage' : "+2",

		'range' : "5",

		'class' : "A",

		'usage' : "RM",

		'maximumRank' : "5",

		'cost' : "8",

		EP : [ /* 0 */ 200, /* 1 */ 200, /* 2 */ 400, /* 3 */ 800, /* 4 */ 1400, /* 5 */ 3000, ],

	},



	'Glaive' : { // weapon

		'name' : "Glaive",

		'hands' : "2",

		'weight' : "7",

		'requiredPS' : "16",

		'requiredMD' : "18",

		'baseChance' : "55",

		'damage' : "+5",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "9",

		'cost' : "15",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 200, /* 5 */ 200, /* 6 */ 500, /* 7 */ 800, /* 8 */ 1500, /* 9 */ 3000, ],

	},



	'Giant glaive' : { // weapon

		'name' : "Giant glaive",

		'hands' : "2",

		'weight' : "14",

		'requiredPS' : "22",

		'requiredMD' : "18",

		'baseChance' : "65",

		'damage' : "+9",

		'range' : "P",

		'class' : "B",

		'usage' : "M",

		'maximumRank' : "9",

		'cost' : "30",

		'footnote' : "weap-B",

		EP : [ /* 0 */ 50, /* 1 */ 50, /* 2 */ 100, /* 3 */ 200, /* 4 */ 200, /* 5 */ 200, /* 6 */ 500, /* 7 */ 800, /* 8 */ 1500, /* 9 */ 3000, ],

	},



	},



	'Missile weapons' : { // weaponGroup

		'name' : "Missile weapons",

		'footnote' : "weap-L",

	'Sling' : { // weapon

		'name' : "Sling",

		'hands' : "2",

		'weight' : "1",

		'requiredPS' : "7",

		'requiredMD' : "15",

		'baseChance' : "40",

		'damage' : "+1",

		'range' : "60",

		'class' : "C",

		'usage' : "R",

		'maximumRank' : "8",

		'cost' : "1",

		EP : [ /* 0 */ 200, /* 1 */ 200, /* 2 */ 400, /* 3 */ 700, /* 4 */ 1500, /* 5 */ 3000, /* 6 */ 3000, /* 7 */ 3000, /* 8 */ 3000, ],

	},



	'Self bow' : { // weapon

		'name' : "Self bow",

		'hands' : "2",

		'weight' : "2",

		'requiredPS' : "10",

		'requiredMD' : "15",

		'baseChance' : "45",

		'damage' : "+0",

		'range' : "30",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "8",

		'cost' : "20",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1500, /* 6 */ 3000, /* 7 */ 3000, /* 8 */ 3000, ],

	},



	'Short bow' : { // weapon

		'name' : "Short bow",

		'hands' : "2",

		'weight' : "4",

		'requiredPS' : "14",

		'requiredMD' : "15",

		'baseChance' : "45",

		'damage' : "+2",

		'range' : "60",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "8",

		'cost' : "20",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 700, /* 5 */ 1500, /* 6 */ 3000, /* 7 */ 3000, /* 8 */ 3000, ],

	},



	'Long bow' : { // weapon

		'name' : "Long bow",

		'hands' : "2",

		'weight' : "6",

		'requiredPS' : "16",

		'requiredMD' : "15",

		'baseChance' : "55",

		'damage' : "+4",

		'range' : "180",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "8",

		'cost' : "25",

		'footnote' : "weap-M",

		EP : [ /* 0 */ 300, /* 1 */ 200, /* 2 */ 500, /* 3 */ 1000, /* 4 */ 2000, /* 5 */ 2000, /* 6 */ 2000, /* 7 */ 2000, /* 8 */ 3000, ],

	},



	'Composite bow' : { // weapon

		'name' : "Composite bow",

		'hands' : "2",

		'weight' : "8",

		'requiredPS' : "17",

		'requiredMD' : "15",

		'baseChance' : "55",

		'damage' : "+4",

		'range' : "225",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "8",

		'cost' : "80",

		EP : [ /* 0 */ 300, /* 1 */ 200, /* 2 */ 500, /* 3 */ 1000, /* 4 */ 2000, /* 5 */ 2000, /* 6 */ 2000, /* 7 */ 2000, /* 8 */ 3000, ],

	},



	'Giant bow' : { // weapon

		'name' : "Giant bow",

		'hands' : "2",

		'weight' : "14",

		'requiredPS' : "25",

		'requiredMD' : "17",

		'baseChance' : "55",

		'damage' : "+7",

		'range' : "45",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "8",

		'cost' : "80",

		'footnote' : "weap-B",

		EP : [ /* 0 */ 200, /* 1 */ 200, /* 2 */ 400, /* 3 */ 700, /* 4 */ 1500, /* 5 */ 3000, /* 6 */ 3000, /* 7 */ 3000, /* 8 */ 3000, ],

	},



	'Crossbow' : { // weapon

		'name' : "Crossbow",

		'hands' : "2",

		'weight' : "7",

		'requiredPS' : "14",

		'requiredMD' : "14",

		'baseChance' : "60",

		'damage' : "+3",

		'range' : "80",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "5",

		'cost' : "15",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 800, /* 5 */ 1000, ],

	},



	'Heavy crossbow' : { // weapon

		'name' : "Heavy crossbow",

		'hands' : "2",

		'weight' : "10",

		'requiredPS' : "20",

		'requiredMD' : "14",

		'baseChance' : "60",

		'damage' : "+5",

		'range' : "90",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "5",

		'cost' : "20",

		EP : [ /* 0 */ 100, /* 1 */ 100, /* 2 */ 200, /* 3 */ 400, /* 4 */ 800, /* 5 */ 1000, ],

	},



	'Spear thrower' : { // weapon

		'name' : "Spear thrower",

		'hands' : "2",

		'weight' : "4",

		'requiredPS' : "11",

		'requiredMD' : "14",

		'baseChance' : "50",

		'damage' : "+2",

		'range' : "15",

		'class' : "A",

		'usage' : "R",

		'maximumRank' : "10",

		'cost' : "5",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 50, /* 3 */ 100, /* 4 */ 200, /* 5 */ 400, /* 6 */ 700, /* 7 */ 1500, /* 8 */ 3000, /* 9 */ 4000, /* 10 */ 5000, ],

	},



	'Blowgun' : { // weapon

		'name' : "Blowgun",

		'hands' : "2",

		'weight' : "1",

		'requiredPS' : "7",

		'requiredMD' : "16",

		'baseChance' : "30",

		'damage' : "",

		'range' : "7",

		'class' : "-",

		'usage' : "R",

		'maximumRank' : "10",

		'cost' : "3",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 50, /* 3 */ 100, /* 4 */ 200, /* 5 */ 400, /* 6 */ 700, /* 7 */ 1500, /* 8 */ 3000, /* 9 */ 4000, /* 10 */ 5000, ],

	},



	},



	'Entangling weapons' : { // weaponGroup

		'name' : "Entangling weapons",

	'Net' : { // weapon

		'name' : "Net",

		'hands' : "1",

		'weight' : "2",

		'requiredPS' : "11",

		'requiredMD' : "16",

		'baseChance' : "30",

		'damage' : "-5",

		'range' : "5",

		'class' : "-",

		'usage' : "RM",

		'maximumRank' : "4",

		'cost' : "4",

		'footnote' : "weap-N",

		EP : [ /* 0 */ 150, /* 1 */ 150, /* 2 */ 300, /* 3 */ 600, /* 4 */ 1300, ],

	},



	'Bola' : { // weapon

		'name' : "Bola",

		'hands' : "1",

		'weight' : "2",

		'requiredPS' : "11",

		'requiredMD' : "15",

		'baseChance' : "35",

		'damage' : "-3",

		'range' : "10",

		'class' : "-",

		'usage' : "R",

		'maximumRank' : "6",

		'cost' : "5",

		'footnote' : "weap-N",

		EP : [ /* 0 */ 200, /* 1 */ 200, /* 2 */ 400, /* 3 */ 700, /* 4 */ 1500, /* 5 */ 2000, /* 6 */ 5000, ],

	},



	'Whip' : { // weapon

		'name' : "Whip",

		'hands' : "1",

		'weight' : "3",

		'requiredPS' : "10",

		'requiredMD' : "16",

		'baseChance' : "40",

		'damage' : "-3",

		'range' : "P",

		'class' : "-",

		'usage' : "M",

		'maximumRank' : "10",

		'cost' : "6",

		'footnote' : "weap-O",

		EP : [ /* 0 */ 150, /* 1 */ 150, /* 2 */ 500, /* 3 */ 900, /* 4 */ 1400, /* 5 */ 2000, /* 6 */ 3500, /* 7 */ 4000, /* 8 */ 5000, /* 9 */ 5000, /* 10 */ 6000, ],

	},



	'Lasso' : { // weapon

		'name' : "Lasso",

		'hands' : "2",

		'weight' : "4",

		'requiredPS' : "12",

		'requiredMD' : "18",

		'baseChance' : "30",

		'damage' : "-4",

		'range' : "6",

		'class' : "-",

		'usage' : "RM",

		'maximumRank' : "6",

		'cost' : "5",

	},



	},



	'Special weapons' : { // weaponGroup

		'name' : "Special weapons",

	'Rock' : { // weapon

		'name' : "Rock",

		'hands' : "1",

		'weight' : "0",

		'requiredPS' : "5",

		'requiredMD' : "10",

		'baseChance' : "30",

		'damage' : "-1",

		'range' : "8",

		'class' : "C",

		'usage' : "RMC",

		'maximumRank' : "6",

		'cost' : "0",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 100, /* 3 */ 150, /* 4 */ 200, /* 5 */ 300, /* 6 */ 500, ],

	},



	'Cestus' : { // weapon

		'name' : "Cestus",

		'hands' : "1",

		'weight' : "3",

		'requiredPS' : "12",

		'requiredMD' : "14",

		'baseChance' : "35",

		'damage' : "-1",

		'range' : "P",

		'class' : "C",

		'usage' : "MC",

		'maximumRank' : "9",

		'cost' : "15",

		'footnote' : "weap-P",

		EP : [ /* 0 */ 30, /* 1 */ 40, /* 2 */ 50, /* 3 */ 100, /* 4 */ 200, /* 5 */ 400, /* 6 */ 700, /* 7 */ 1500, /* 8 */ 3000, /* 9 */ 6000, ],

	},



	'Garotte' : { // weapon

		'name' : "Garotte",

		'hands' : "2",

		'weight' : "1",

		'requiredPS' : "12",

		'requiredMD' : "15",

		'baseChance' : "30",

		'damage' : "+3",

		'range' : "P",

		'class' : "-",

		'usage' : "C",

		'maximumRank' : "3",

		'cost' : "3",

		'footnote' : "weap-Q",

		EP : [ /* 0 */ 100, /* 1 */ 200, /* 2 */ 300, /* 3 */ 600, ],

	},



	'Shield' : { // weapon

		'name' : "Shield",

		'hands' : "1",

		'weight' : "0",

		'requiredPS' : "10",

		'requiredMD' : "12",

		'baseChance' : "40",

		'damage' : "-2",

		'range' : "P",

		'class' : "C",

		'usage' : "M",

		'maximumRank' : "4",

		'cost' : "0",

		EP : [ /* 0 */ 25, /* 1 */ 25, /* 2 */ 50, /* 3 */ 100, /* 4 */ 200, ],

	},



	},



	'Unarmed' : { // weaponGroup

		'name' : "Unarmed",

	'Unarmed' : { // weapon

		'name' : "Unarmed",

		'hands' : "1",

		'weight' : "0",

		'requiredPS' : "0",

		'requiredMD' : "0",

		'baseChance' : "AG*2",

		'damage' : "-4",

		'range' : "P",

		'class' : "C",

		'usage' : "MC",

		'maximumRank' : "10",

		'cost' : "0",

		'footnote' : "weap-R",

/* basechance

		'_' : "2 x AG + [PS - 15]",

*/

// basechance END



		EP : [ /* 0 */ 150, /* 1 */ 300, /* 2 */ 450, /* 3 */ 600, /* 4 */ 800, /* 5 */ 900, /* 6 */ 1500, /* 7 */ 3000, /* 8 */ 4000, /* 9 */ 5000, /* 10 */ 4000, ],

	},



	},



	'Accessory' : { // weaponGroup

		'name' : "Accessory",

		'footnote' : "weap-S",

	'Shot' : { // weaponAccessory

		'name' : "Shot",

		'number' : "20",

		'weight' : "4",

		'cost' : "1",

		'_' : "Use in sling",

	},



	'Dart' : { // weaponAccessory

		'name' : "Dart",

		'number' : "20",

		'weight' : "2",

		'cost' : "5",

		'_' : "Use in blowgun",

	},



	'Arrows' : { // weaponAccessory

		'name' : "Arrows",

		'number' : "20",

		'weight' : "2",

		'cost' : "10",

		'_' : "Use in draw bows",

	},



	'Quarrels' : { // weaponAccessory

		'name' : "Quarrels",

		'number' : "20",

		'weight' : "7",

		'cost' : "15",

		'_' : "Use in crossbows",

	},



	'Cranequin' : { // weaponAccessory

		'name' : "Cranequin",

		'number' : "1",

		'weight' : "3",

		'cost' : "10",

		'_' : "Use to cock crossbows; requires a PS of 11 and two free hands",

	},



	},



	'Siege weapons' : { // weaponGroup

		'name' : "Siege weapons",

	},



	'Oriental weapons' : { // weaponGroup

		'name' : "Oriental weapons",

	'Sai' : { // weapon

		'name' : "Sai",

	},



	'Wakizashi' : { // weapon

		'name' : "Wakizashi",

	},



	'O-Dachi' : { // weapon

		'name' : "O-Dachi",

	},



	'Ninjato' : { // weapon

		'name' : "Ninjato",

	},



	'Manriki kusari' : { // weapon

		'name' : "Manriki kusari",

	},



	'Nunchaku' : { // weapon

		'name' : "Nunchaku",

	},



	},



};



dq.weaponCategorys = {
	toCode : function() {
		r = [];
		$H(this).each(function(c) {
			if (c.key != 'toCode') {
				r.push("$DQ.weaponCategory('"+c.key+"', ['" +
					c.value.join("', '") + "']);");
			}
		});
		return r.join('<br>');
	},


	'Shortswords' : [

		"Dagger",

		"Main-gauche",

		"Shortsword",

		"Sai",

	],

	'Single Edged' : [

		"Tulwar",

		"Falchion",

		"Scimitar",

		"Sabre",

	],

	'Double Edged' : [

		"Hand & a half",

		"Two-handed sword",

		"Claymore",

		"Broadsword",

	],

	'A Class Swords' : [

		"Rapier",

		"Estoc",

	],

	'Oriental Swords' : [

		"Katana",

		"Wakizashi",

		"O-Dachi",

		"Ninjato",

	],

	'Axes' : [

		"Hand axe",

		"Battle axe",

		"Great axe",

	],

	'Blunt' : [

		"War club",

		"Mace",

		"War hammer",

		"War pick",

		"Mattock",

	],

	'Entangling / Chain' : [

		"Flail",

		"Morningstar",

		"Bola",

		"Net",

		"Manriki kusari",

		"Nunchaku",

	],

	'A Class Pole' : [

		"Javelin",

		"Spear",

		"Pike",

		"Lance",

		"Trident",

	],

	'B Class Pole' : [

		"Halberd",

		"Poleaxe",

		"Glaive",

		"Quarterstaff",

	],

	'Unarmed' : [

		"Unarmed",

		"Cestus",

	],

	'Shield' : [

		"Tower",

		"Kite",

		"Large round",

		"Small round",

		"Buckler",

	],

};



/* footnotes

*/

/* footnote @id, @mark

		'_' : "When attacking a foe whose modified AG is between 12 and 9 (inclusive) the weapon may be used to attack twice in one pulse without penalty; if the modified AG is 8 or less, the weapon may attack three times in a pulse.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "Only giants can use giant weapons.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "A torch is not actually a weapon, but may be used as such in emergencies. Also, brandishing a burning torch in the face of an animal may cause it to flee. Any animal whose WP is 10 or less may be scared off if it fails a roll of 4 times WP. A successful roll indicates the animal is not impressed. No Rank may ever be achieved with a torch.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "The sap may only be used to knock out targets wearing only leather, cloth or no armour. Used by an assassin, any hit knocks out the target; for anyone else, any hit stuns and 4 or more points of effective damage knocks out the target. This will not work on targets larger than human size.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "The following weapons also function as thrown weapons: dagger, hand axe, battle axe, giant axe, crude club, war club, giant club, mace, war hammer, javelin, spear, giant spear, net, bola and rock.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "Up to three darts may be thrown at one, two, or three targets in one pulse with no penalty.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "A boomerang returns to the thrower if it does not hit anything during its flight.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "A grenado is filled with any substance (manufactured by an alchemist) designed to burst into flames on impact. These substances include greek fire, methane, and anything else the GM will allow. It bursts on landing (it need not be thrown at a particular figure), and its effects are determinded by the substance contained within. If a ``miss'' is rolled for the strike check, the GM should randomly determine whether the grenado landed short, long, left, or right of the target (or any combination thereof).",

*/

// footnote END



/* footnote @id, @mark

		'_' : "A javelin functions as a thrown weapon unless it is launched by a spear thrower, in which case the spear thrower's characteristics are used and it functions as a missile weapon.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "A pike may be used to melee attack any figure within two hexes; its melee zone extends into what would normally be the first hexes of the figure's ranged zone.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "A lance may be used only by a mounted figure.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "All missile weapons must be loaded before firing; this action is in addition to preparing the weapon itself. A pass action must be taken in order to load the sling, any draw bow, the spear thrower, and the blowgun. Two consecutive pass actions must be taken to load a crossbow (three if using a cranequin).",

*/

// footnote END



/* footnote @id, @mark

		'_' : "Longbows may not be used while mounted, nor by small figures, including Dwarves & Halflings.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "The net, bola or whip may be used as a garrotte in Close Combat.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "The whip may be used to entangle and do damage in the same pulse to the same target in melee combat. In close combat, it functions as a garotte. Once the target is entangled, the attacker may choose to leave them entangled (thus letting go of the whip), or disentangle the target themself, and retain possession of the weapon.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "Cesti are worn on the hands and need not be prepared in order to be used.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "The garotte is used to strangle the target and may only be used against human-sized or smaller victims. When used by a trained assassin, once a successful hit has been scored, it will continue to do damage every pulse from then on util the victim is head or the assassin has taken effective damage from either the victim or an outside source. if the victim's PS is greater than the assassin's the GM may permit them to attempt to break the hold, similar to the attempt to restrain. If the attempt is successful, the hold is broken and the assassin will have to make another successful strike check to continue the strangulation. Some types of plate armour may, at the GM's discretion, prevent the successful use of this weapon due to protection around the neck area. A non-assassin has to roll a strike check every pulse to see if any damage can be done.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "Unarmed has a base strike chance of 2 times AG + PS over 15. The damage modifier is [D - 4] (+ 1 / 3 points of PS over 15).",

*/

// footnote END



/* footnote @id, @mark

		'_' : "All shot, darts, arrows, and quarrels come in appropriate pouches or quivers of 20, the weight and cost of the pouch or quiver is not included in the information given for the accessory.",

*/

// footnote END



// footnotes END



// Including Grevious

// Including Fumble

// weapons END







// == Dq -  Armours ==



dq.armourGroups = {
	toCode : function() {
		r = [];
		$H(this).each(function(g) {
			gt = "$DQ.armourGroup('#{name}', #{RequiredGroups}).";
			at = "  .addArmour('#{name}', #{weight}, #{protection}, #{lostAG}, #{stealthMod}, #{cost});";
			if (g.key != 'toCode') {
				r.push(gt.interpolate(g.value));
				$H(g.value).each(function(p){
					switch (p.key) {
						case 'name':
						case 'RequiredGroups':
							break;
						default:
							r.push(at.interpolate(p.value));
					}
				});
			}
		});
		return r.join('<br>');
	},


	'Cloth' : { // armourGroup

		'name' : "Cloth",

	'Cloth' : { // armour

		'name' : "Cloth",

		'weight' : "1",

		'protection' : "1",

		'lostAG' : "0",

		'stealthMod' : "+5",

		'cost' : "30",

	},



	},



	'Leather' : { // armourGroup

		'name' : "Leather",

		RequiredGroups : [ "Cloth", ],

	'Heavy Furs' : { // armour

		'name' : "Heavy Furs",

		'weight' : "2",

		'protection' : "2",

		'lostAG' : "0",

		'stealthMod' : "+5",

		'cost' : "40",

	},



	'Soft Leather' : { // armour

		'name' : "Soft Leather",

		'weight' : "3",

		'protection' : "3",

		'lostAG' : "0",

		'stealthMod' : "0",

		'cost' : "50",

	},



	'Leather' : { // armour

		'name' : "Leather",

		'weight' : "3",

		'protection' : "4",

		'lostAG' : "-1",

		'stealthMod' : "0",

		'cost' : "50",

	},



	},



	'Scale' : { // armourGroup

		'name' : "Scale",

		RequiredGroups : [ "Cloth", ],

	'Scale' : { // armour

		'name' : "Scale",

		'weight' : "4",

		'protection' : "5",

		'lostAG' : "-3",

		'stealthMod' : "-5",

		'cost' : "600",

	},



	'Full Scale' : { // armour

		'name' : "Full Scale",

		'weight' : "6",

		'protection' : "5",

		'lostAG' : "-2",

		'stealthMod' : "-10",

		'cost' : "750",

	},



	},



	'Chain' : { // armourGroup

		'name' : "Chain",

		RequiredGroups : [ "Cloth", ],

	'Chainmail' : { // armour

		'name' : "Chainmail",

		'weight' : "7",

		'protection' : "6",

		'lostAG' : "-2",

		'stealthMod' : "-10",

		'cost' : "1200",

	},



	},



	'Partia' : { // armourGroup

		'name' : "Partia",

		RequiredGroups : [ "Chain", ],

	'Partial Plate' : { // armour

		'name' : "Partial Plate",

		'weight' : "6",

		'protection' : "6",

		'lostAG' : "-2",

		'stealthMod' : "-15",

		'cost' : "1500",

	},



	},



	'Plate 1' : { // armourGroup

		'name' : "Plate 1",

		RequiredGroups : [ "Chain", ],

	'Full Plate' : { // armour

		'name' : "Full Plate",

		'weight' : "8",

		'protection' : "7",

		'lostAG' : "-3",

		'stealthMod' : "-20",

		'cost' : "2000",

	},



	'Heavy Plate' : { // armour

		'name' : "Heavy Plate",

		'weight' : "8",

		'protection' : "9",

		'lostAG' : "-3",

		'stealthMod' : "-25",

		'cost' : "3500",

	},



	},



	'Plate 2' : { // armourGroup

		'name' : "Plate 2",

		RequiredGroups : [ "Plate 1", ],

	'Improved Plate' : { // armour

		'name' : "Improved Plate",

		'weight' : "7",

		'protection' : "8",

		'lostAG' : "-3",

		'stealthMod' : "-20",

		'cost' : "2850",

	},



	'Jousting' : { // armour

		'name' : "Jousting",

		'weight' : "9",

		'protection' : "10",

		'lostAG' : "-4",

		'stealthMod' : "-30",

		'cost' : "5000",

	},



	'Heavy Jousting' : { // armour

		'name' : "Heavy Jousting",

		'weight' : "15",

		'protection' : "15",

		'lostAG' : "-8",

		'stealthMod' : "-50",

		'cost' : "12000",

	},



	},



	'Dragon Skin' : { // armourGroup

		'name' : "Dragon Skin",

		RequiredGroups : [ "Scale", "Leather", ],

	'Dragon Skin' : { // armour

		'name' : "Dragon Skin",

		'weight' : "4",

		'protection' : "-3",

		'lostAG' : "-1",

		'stealthMod' : "0",

		'cost' : "999999",

	},



	},



	'Mithril' : { // armourGroup

		'name' : "Mithril",

		RequiredGroups : [ "Chain", ],

	'Mithril' : { // armour

		'name' : "Mithril",

		'weight' : "2",

		'protection' : "10",

		'lostAG' : "-2",

		'stealthMod' : "-10",

		'cost' : "999999",

	},



	},



};



dq.shields = {

	'Buckler' : { // shield

		'name' : "Buckler",

		'weight' : "3",

		'defensePerRank' : "2%",

		'lostMD' : "0",

		'cost' : "5",

	},



	'Small round' : { // shield

		'name' : "Small round",

		'weight' : "5",

		'defensePerRank' : "3%",

		'lostMD' : "2",

		'cost' : "8",

	},



	'Large round' : { // shield

		'name' : "Large round",

		'weight' : "10",

		'defensePerRank' : "4%",

		'lostMD' : "3",

		'cost' : "10",

	},



	'Kite' : { // shield

		'name' : "Kite",

		'weight' : "15",

		'defensePerRank' : "5%",

		'lostMD' : "4",

		'cost' : "15",

	},



	'Tower' : { // shield

		'name' : "Tower",

		'weight' : "25",

		'defensePerRank' : "6%",

		'lostMD' : "6",

		'cost' : "20",

	},



	'Main-gauche' : { // shield

		'name' : "Main-gauche",

		'weight' : "1",

		'defensePerRank' : "2%",

		'lostMD' : "0",

		'cost' : "20",

	},



	toCode : function() {
		r = ["$DQ.armourGroup('Shield')."];
		st = "  addShield('#{name}', #{weight}, #{defensePerRank}, #{lostMD}, #{cost}).";
		$H(this).each(function(s) {
			if (s.key != 'toCode')
				r.push(st.interpolate(s.value));
		});
		return r.join('<br>');
	},

};




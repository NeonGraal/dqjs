

// == Dq -  CharGen ==



var dq = {



/* chars @xsi:noNamespaceSchemaLocation


'statisticGroups' : {
	toCode : function() {
		r = [];
		$H(this).each(function(g) {
			if (g.key != 'toCode') {
				t = "$DQ.stat('#{abbr}','"+g.key+"','#{name}',#{epFirst},#{epRest});";
				$H(g.value).each(function(p){
					if (p.key != 'name')
						r.push(t.interpolate(p.value));
				});
			}
		});
		return r.join('<br>');
	},

	'Primary' : { // statisticGroup

		'name' : "Primary",PS : {

		'name' : "Physical Strength",

		'abbr' : "PS",

		'epFirst' : "5000",

		'epRest' : "5000",

	},

  MD : {

		'name' : "Manual Dexterity",

		'abbr' : "MD",

		'epFirst' : "5000",

		'epRest' : "5000",

	},

  AG : {

		'name' : "Agility",

		'abbr' : "AG",

		'epFirst' : "5000",

		'epRest' : "5000",

	},

  MA : {

		'name' : "Magic Aptitude",

		'abbr' : "MA",

		'epFirst' : "5000",

		'epRest' : "5000",

	},

  WP : {

		'name' : "Willpower",

		'abbr' : "WP",

		'epFirst' : "5000",

		'epRest' : "5000",

	},

  EN : {

		'name' : "Endurance",

		'abbr' : "EN",

		'epFirst' : "5000",

		'epRest' : "2500",

	},



	},



	'Secondary' : { // statisticGroup

		'name' : "Secondary",FT : {

		'name' : "Fatigue",

		'abbr' : "FT",

		'epFirst' : "2500",

		'epRest' : "2500",

	},

  PB : {

		'name' : "Physical Beauty",

		'abbr' : "PB",

	},

  PC : {

		'name' : "Perception",

		'abbr' : "PC",

		'epFirst' : "1000",

		'epRest' : "750",

	},

  TMR : {

		'name' : "Tactical Movement Rate",

		'abbr' : "TMR",

	},

  NA : {

		'name' : "Natural Armour",

		'abbr' : "NA",

	},



	},



},



'genders' : {

	'Male' : { // gender

		'name' : "Male",

		'size' : "+0",

	},



	'Female' : { // gender

		'name' : "Female",

		'size' : "-0.5",

		StatMods : {

			"PS" : -2,

			"MD" : +1,

			"EN" : +1,

		},

	},



},



'hands' : {

	'Right' : { // hand

		'name' : "Right",

		'roll' : "D5 < D10",

		'_' : "Right handed",

	},



	'Left' : { // hand

		'name' : "Left",

		'roll' : "D5 > D10",

		'_' : "Left handed",

	},



	'Ambi' : { // hand

		'name' : "Ambi",

		'roll' : "D5 = D10",

		'_' : "Ambidexterous",

	},



},



// Including Races

Tables : {
	toCode : function() {
		r = [];
		tt = "$DQ.table('#{title}', ['#{Head[0]}', '#{Head[1]}']).";
		rt = '  addRange(';
		$H(this).each(function(t) {
			if (t.key != 'toCode') {
				r.push(tt.interpolate(t.value));
				$A(t.value.Rows).each(function(h){
					s = h[0].split(' - ');
					r.push(rt + s[0] + ', ' +
						(s.length>1 ? s[1] : s[0]) + ', "' + h[1] + '").');
				});
				r.push('');
			}
		});
		return r.join('<br>');
	},

	"Character Points" : {

		'title' : "Character Points",

		Head : [ "Roll", "Points" ],

	Rows : [

		[ "2 - 2", "81" ],

		[ "3 - 3", "82" ],

		[ "4 - 4", "83" ],

		[ "5 - 5", "84" ],

		[ "6 - 6", "85" ],

		[ "7 - 7", "86" ],

		[ "8 - 8", "87" ],

		[ "9 - 9", "88" ],

		[ "10 - 10", "89" ],

		[ "11 - 11", "90" ],

		[ "12 - 12", "91" ],

		[ "13 - 13", "92" ],

		[ "14 - 14", "93" ],

		[ "15 - 15", "94" ],

		[ "16 - 16", "95" ],

		[ "17 - 17", "96" ],

		[ "18 - 18", "97" ],

		[ "19 - 19", "98" ],

		[ "20 - 20", "99" ],

	],

	},

	"Fatigue" : {

		'title' : "Fatigue",

		Head : [ "Initial EN", "Initial FT" ],

	Rows : [

		[ "3 - 4", "16" ],

		[ "5 - 7", "17" ],

		[ "8 - 10", "18" ],

		[ "11 - 13", "19" ],

		[ "14 - 16", "20" ],

		[ "17 - 19", "21" ],

		[ "20 - 22", "22" ],

		[ "23 - 25", "23" ],

		[ "26 - 27", "24" ],

	],

	},

	"TMR" : {

		'title' : "TMR",

		Head : [ "Current AG", "Base TMR" ],

	Rows : [

		[ "< - 1", "0" ],

		[ "1 - 2", "1" ],

		[ "3 - 4", "2" ],

		[ "5 - 8", "3" ],

		[ "9 - 12", "4" ],

		[ "13 - 17", "5" ],

		[ "18 - 21", "6" ],

		[ "22 - 25", "7" ],

		[ "26 - 27", "8" ],

		[ "28 - 29", "9" ],

		[ "30 - 31", "10" ],

	],

	},

	"Aspect" : {

		'title' : "Aspect",

		Head : [ "Roll", "Aspect" ],

	Rows : [

		[ "1 - 5", "Winter Air" ],

		[ "6 - 10", "Winter Water" ],

		[ "11 - 15", "Winter Earth" ],

		[ "16 - 20", "Winter Fire" ],

		[ "21 - 25", "Spring Air" ],

		[ "26 - 30", "Spring Water" ],

		[ "31 - 35", "Spring Earth" ],

		[ "36 - 40", "Spring Fire" ],

		[ "41 - 45", "Summer Air" ],

		[ "46 - 50", "Summer Water" ],

		[ "51 - 55", "Summer Water" ],

		[ "56 - 60", "Summer Fire" ],

		[ "61 - 65", "Autumn Air" ],

		[ "66 - 70", "Autumn Water" ],

		[ "71 - 75", "Autumn Earth" ],

		[ "76 - 80", "Autumn Fire" ],

		[ "81 - 85", "Solar" ],

		[ "86 - 90", "Lunar" ],

		[ "91 - 95", "Life" ],

		[ "96 - 00", "Death" ],

	],

	},

	"Heritage" : {

		'title' : "Heritage",

		Head : [ "Roll", "Heritage" ],

	Rows : [

		[ "01 - 14", "Trash / Criminal" ],

		[ "15 - 20", "Bonded" ],

		[ "21 - 29", "Skilled retainer" ],

		[ "30 - 40", "Goodman" ],

		[ "45 - 54", "Master" ],

		[ "55 - 70", "Military" ],

		[ "71 - 84", "Gentry" ],

		[ "85 - 94", "Lesser Nobility" ],

		[ "95 - 98", "Merchant-prince" ],

		[ "99 - 00", "Greater Nobility" ],

	],

	},

	"Birth Order" : {

		'title' : "Birth Order",

		Head : [ "Roll", "Standing" ],

	Rows : [

		[ "1 - 1", "1st or 2nd" ],

		[ "2 - 3", "3rd" ],

		[ "4 - 4", "4th" ],

		[ "5 - 5", "5th" ],

		[ "6 - 6", "6th" ],

		[ "7 - 8", "7th" ],

		[ "9 - 9", "8th or later" ],

		[ "0 - 0", "Bastard" ],

	],

	},

},

Heights : {
	toCode : function() {
		r = [];
		ht = '  addHeight("#{height}", #{minWeight}, #{maxWeight}, #{avgWeight}).';
		$H(this).each(function(t) {
			if (t.key != 'toCode') {
				r.push("$DQ.heightTable('"+t.key+"').");
				$H(t.value).each(function(h){
					if (h.key != 'type')
						r.push(ht.interpolate(h.value));
				});
			}
		});
		return r.join('<br>');
	},

	Normal : {

		'type' : "Normal",

	"5'3" : {

		'height' : "5'3",

		'maxWeight' : "170",

		'minWeight' : "100",

		'avgWeight' : "130",

	},



	"5'6" : {

		'height' : "5'6",

		'maxWeight' : "185",

		'minWeight' : "110",

		'avgWeight' : "140",

	},



	"5'9" : {

		'height' : "5'9",

		'maxWeight' : "200",

		'minWeight' : "120",

		'avgWeight' : "150",

	},



	"6'0" : {

		'height' : "6'0",

		'maxWeight' : "220",

		'minWeight' : "130",

		'avgWeight' : "165",

	},



	"6'3" : {

		'height' : "6'3",

		'maxWeight' : "240",

		'minWeight' : "145",

		'avgWeight' : "180",

	},



	},Short : {

		'type' : "Short",

	"3'9" : {

		'height' : "3'9",

		'maxWeight' : "110",

		'minWeight' : "65",

		'avgWeight' : "85",

	},



	"4'0" : {

		'height' : "4'0",

		'maxWeight' : "125",

		'minWeight' : "75",

		'avgWeight' : "95",

	},



	"4'3" : {

		'height' : "4'3",

		'maxWeight' : "140",

		'minWeight' : "85",

		'avgWeight' : "105",

	},



	"4'6" : {

		'height' : "4'6",

		'maxWeight' : "155",

		'minWeight' : "95",

		'avgWeight' : "115",

	},



	"4'9" : {

		'height' : "4'9",

		'maxWeight' : "170",

		'minWeight' : "105",

		'avgWeight' : "125",

	},



	},Giant : {

		'type' : "Giant",

	"8'4" : {

		'height' : "8'4",

		'maxWeight' : "490",

		'minWeight' : "295",

		'avgWeight' : "370",

	},



	"8'8" : {

		'height' : "8'8",

		'maxWeight' : "555",

		'minWeight' : "335",

		'avgWeight' : "420",

	},



	"9'0" : {

		'height' : "9'0",

		'maxWeight' : "625",

		'minWeight' : "375",

		'avgWeight' : "470",

	},



	"9'4" : {

		'height' : "9'4",

		'maxWeight' : "700",

		'minWeight' : "420",

		'avgWeight' : "525",

	},



	"9'8" : {

		'height' : "9'8",

		'maxWeight' : "780",

		'minWeight' : "465",

		'avgWeight' : "580",

	},



	},

},

// chars END

*/


};




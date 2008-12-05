

// == Dq -  Skills ==



dq.skillGroups = {
	toCode : function() {
		var r = [];
		var gt = "new $DQ.Skills('#{name}'). // v#{version}";
		var et = "  EP = [#{EP}];";
		var cf = function(tmp, val) {
			r.push(tmp.interpolate(val));
			$H(val.Abilities).each(function(a) {
				r.push('  addAbility('+Object.toJSON(a.value)+').');
			});
			$H(val.Chances).each(function(c) {
				r.push('  addChance('+Object.toJSON(c.value)+').');
			});
			r.push(et.interpolate(val));
		}
		$H(this).each(function(g) {
			if (g.key != 'toCode') {
				st = "new $DQ.Skill('"+g.key+"', '#{name}'). // v#{version}";
				if (g.value.EP || g.value.Abilities || g.value.Chances)
					cf(gt, g.value);

				$H(g.value).each(function(p) {
					switch (p.key) {
						case 'name':
						case 'version':
						case 'footnote':
						case 'EP':
						case 'Abilities':
						case 'Chances':
							break;
						default:
							cf(st, p.value);
					}
				});
			}
		});
		return r.join('<br>');
	},

	'Adventuring skills' : { // skillGroup

		'name' : "Adventuring skills",

		'version' : "1.0",

		'footnote' : "skill-A",

		EP : [ /* 0 */ 0, /* 1 */ 125, /* 2 */ 250, /* 3 */ 375, /* 4 */ 500, /* 5 */ 625, /* 6 */ 750, /* 7 */ 875, /* 8 */ 1000, /* 9 */ 1125, /* 10 */ 1250, ],

	'Climbing' : { // skill

		'name' : "Climbing",

	Abilities : {

		"Climbing Claws" : {

		'name' : "Climbing Claws",

			"_" : "+15 BC if appropriate",

		},

		"Rope" : {

		'name' : "Rope",

			"_" : "Single roll rather than every 10'.",

		},

	},

	Chances : {

		"" : {

			"_" : rk({

		'base' : "MD x 4",

		'inc' : "8",})

				+ "- height / 10",

		},

	},

	},



	'Horsemanship' : { // skill

		'name' : "Horsemanship",

	Abilities : {

		"rk3" : {

		'rank' : "3",

			"_" : "May use two-handed weapons",

		},

		"rk5" : {

		'rank' : "5",

			"_" : "May fire a missile weapon while moving or cast a spell",

		},

		"rk7" : {

		'rank' : "7",

			"_" : "May use two one-handed weapons at once",

		},

	},

	Chances : {

		"" : {

			"_" : rk({

		'base' : "(AG + WP) / 2",

		'inc' : "8",}),

		},

	},

	},



	'Flying' : { // skill

		'name' : "Flying",

	Abilities : {

		"r3k" : {

		'rank' : "3",

			"_" : "May use two-handed weapons",

		},

		"rk5" : {

		'rank' : "5",

			"_" : "May fire a missle weapon while moving or cast a spell",

		},

		"rk7" : {

		'rank' : "7",

			"_" : "May use two one-handed weapons at once",

		},

	},

	Chances : {

		"" : {

			"_" : rk({

		'base' : "AG x 3",

		'inc' : "10",}),

		},

	},

	},



	'Stealth' : { // skill

		'name' : "Stealth",

	Chances : {

		"" : {

			"_" : rk({

		'base' : "AG x 3",

		'inc' : "5",})

				+ "(plus 2 per Assasin, Spy and Thief Ranks)",

		},

	},

		EP : [ /* 0 */ 0, /* 1 */ 500, /* 2 */ 1000, /* 3 */ 1500, /* 4 */ 2000, /* 5 */ 2500, /* 6 */ 3000, /* 7 */ 3500, /* 8 */ 4000, /* 9 */ 4500, /* 10 */ 5000, ],

	},



	'Swimming' : { // skill

		'name' : "Swimming",

	Abilities : {

		"Breath holding" : {

		'name' : "Breath holding",

			"_" : rk({

		'base' : "curr EN / 3",

		'per' : "2",})

				+ "pulses. Doubled if Pass Action is used to prepare.",

		},

		"Swimming TMR" : {

		'name' : "Swimming TMR",

			"_" : "(Land TMR + Rank) / 3.",

		},

	},

	Chances : {

		"" : {

			"_" : rk({

		'base' : "PS + AG + EN",

		'inc' : "8",}),

		},

	},

	},



	},



	'Artisan skills' : { // skillGroup

		'name' : "Artisan skills",

		'version' : "2.0",

	Abilities : {

		"Applicable base chance" : {

		'name' : "Applicable base chance",

			"_" : rk({})

				+ "applied.",

		},

		"Applicable characteristic" : {

		'name' : "Applicable characteristic",

			"_" : rk({

		'full' : "5",})

				+ "applied.",

		},

		"Difficulty modifier" : {

		'name' : "Difficulty modifier",

			"_" : rk({

		'dec' : "0.5",

		'full' : "5",})

				+ "applied.",

		},

		"Yield" : {

		'name' : "Yield",

			"_" : rk({

		'inc' : "5",})

				+ "%applied.",

		},

		"Merchant equivalent" : {

		'name' : "Merchant equivalent",

			"_" : "Half Rank when dealing in appropriate equipment and materials.",

		},

		"Knowledge skill" : {

		'name' : "Knowledge skill",

			"_" : "Applicable to specific skill",

		},

		"Supervision" : {

		'name' : "Supervision",

			"_" : "Supervise up to"

				+ rk({})

				+ "subordinates or work-gangs.",

		},

	},

		EP : [ /* 0 */ 250, /* 1 */ 100, /* 2 */ 150, /* 3 */ 350, /* 4 */ 700, /* 5 */ 950, /* 6 */ 1500, /* 7 */ 1850, /* 8 */ 2500, /* 9 */ 3200, /* 10 */ 4000, ],

	'Apiarist' : { // skill

		'name' : "Apiarist",

		'_' : "bee breeder, keeper, honey collector.",

	},



	'Artist, Painter' : { // skill

		'name' : "Artist, Painter",

		'_' : "formal, perspective painting.",

	},



	'Artist, Sculptor' : { // skill

		'name' : "Artist, Sculptor",

		'_' : "sculpture design and construction.",

	},



	'Barber / coiffeur' : { // skill

		'name' : "Barber / coiffeur",

		'_' : "simple hairstyling through to massive structures of hair, wire and glue, made to resemble ships in full sail, castles, etc.",

	},



	'Basketmaker' : { // skill

		'name' : "Basketmaker",

		'_' : "basket weaving, making wicker.",

	},



	'Blacksmith' : { // skill

		'name' : "Blacksmith",

		'_' : "iron smelting and fashioning, simple founding.",

	},



	'Brewer' : { // skill

		'name' : "Brewer",

		'_' : "brewing beer, ale, stout, mead, creating new recipes.",

	},



	'Brickmaker/bricklayer' : { // skill

		'name' : "Brickmaker/bricklayer",

		'_' : "mixing the ingredients for bricks, using brick moulds, checking integrity, making brick constructions, designing paving stones.",

	},



	'Butcher' : { // skill

		'name' : "Butcher",

		'_' : "killing, butchering and preparation of animals.",

	},



	'Carpenter / cabinetmaker' : { // skill

		'name' : "Carpenter / cabinetmaker",

		'_' : "joints and wood-joining, woodworking, making basic wooden constructions, wooden furniture.",

	},



	'Calligrapher / illuminator' : { // skill

		'name' : "Calligrapher / illuminator",

		'_' : "fancy script, book illustration, drafting official documents.",

	},



	'Cartographer / chartmaker' : { // skill

		'name' : "Cartographer / chartmaker",

		'_' : "map and sea chart making and copying.",

	},



	'Cartwright / wheelwright' : { // skill

		'name' : "Cartwright / wheelwright",

		'_' : "basic wagon and cart design, wagon, cart and wheel construction.",

	},



	'Carver / bone / etching / wood' : { // skill

		'name' : "Carver / bone / etching / wood",

		'_' : "carving, engraving, woodcuts, plates for printing.",

	},



	'Caster / pewterer / tinsmith' : { // skill

		'name' : "Caster / pewterer / tinsmith",

		'_' : "complex and intricate casting by sand, mould or lost wax methods. Making and casting pewter and smelting and fashioning of soft base metals.",

	},



	'Chandler / lamp maker' : { // skill

		'name' : "Chandler / lamp maker",

		'_' : "design and construction of lamps and lanterns.",

	},



	'Charcoaler' : { // skill

		'name' : "Charcoaler",

		'_' : "making charcoal from partially burnt wood and bones.",

	},



	'Cheesemaker' : { // skill

		'name' : "Cheesemaker",

		'_' : "turning milk into curds and whey, pressing curd to form cheese, creating new recipes.",

	},



	'Clothmaker / fuller / weaver' : { // skill

		'name' : "Clothmaker / fuller / weaver",

		'_' : "material collection, cleaning, spinning, weaving, hammering in dirt to soften, cloth design and creation.",

	},



	'Cobbler / cordwainer' : { // skill

		'name' : "Cobbler / cordwainer",

		'_' : "shoe and boot design and construction.",

	},



	'Cook / baker' : { // skill

		'name' : "Cook / baker",

		'_' : "food preparation and cooking, baking, pastry making, creating new recipes.",

	},



	'Cooper' : { // skill

		'name' : "Cooper",

		'_' : "design and construction of barrels and casks.",

	},



	'Dyer / inkmaker' : { // skill

		'name' : "Dyer / inkmaker",

		'_' : "extraction of natural dyes, mixing of mineral compounds to make inks and dyes.",

	},



	'Farmer/gardener' : { // skill

		'name' : "Farmer/gardener",

		'_' : "ploughing, planting, tending, harvesting, food crops or ornamental plants.",

	},



	'Fisher' : { // skill

		'name' : "Fisher",

		'_' : "fishing, basic net repair, fish identification.",

	},



	'Glass-blower' : { // skill

		'name' : "Glass-blower",

		'_' : "glass mixing, blowing, window construction, staining.",

	},



	'Gold / silversmith' : { // skill

		'name' : "Gold / silversmith",

		'_' : "smelting and fashioning of gold, silver, platinum and other precious metals.",

	},



	'Hatter / milliner' : { // skill

		'name' : "Hatter / milliner",

		'_' : "design and construction of men's and women's hats.",

	},



	'Hunter / trapper' : { // skill

		'name' : "Hunter / trapper",

		'_' : "use of gin, or other animal traps, skinning, animal collection.",

	},



	'Husbander' : { // skill

		'name' : "Husbander",

		'_' : "breeding, raising, tending of animals.",

	},



	'Lapidary' : { // skill

		'name' : "Lapidary",

		'_' : "gem and semi-precious stone cutting, polishing, finishing.",

	},



	'Leatherworker' : { // skill

		'name' : "Leatherworker",

		'_' : "making of leather into garments and articles such as saddles.",

	},



	'Locksmith' : { // skill

		'name' : "Locksmith",

		'_' : "design and construction of simple locks.",

	},



	'Lumberjack' : { // skill

		'name' : "Lumberjack",

		'_' : "tree felling, hewing, sawing for planks, replanting.",

	},



	'Mason' : { // skill

		'name' : "Mason",

		'_' : "stone quarrying, cutting, finishing and fitting.",

	},



	'Miller' : { // skill

		'name' : "Miller",

		'_' : "milling grains into flour, millwheel use.",

	},



	'Miner' : { // skill

		'name' : "Miner",

		'_' : "quarrying, prospecting, tunnelling, not mine design.",

	},



	'Musical instrument maker' : { // skill

		'name' : "Musical instrument maker",

		'_' : "design and construction.",

	},



	'Papermaker' : { // skill

		'name' : "Papermaker",

		'_' : "plant collection, pulping, screening, drying, grading, creating new recipes.",

	},



	'Perfumer' : { // skill

		'name' : "Perfumer",

		'_' : "extraction of scents, perfume recipe creation, perfume mixing.",

	},



	'Plasterer' : { // skill

		'name' : "Plasterer",

		'_' : "mixing and application of plaster.",

	},



	'Potter' : { // skill

		'name' : "Potter",

		'_' : "clay collection and mixing, pottery design and construction, firing, glazing.",

	},



	'Printer / bookbinder' : { // skill

		'name' : "Printer / bookbinder",

		'_' : "setting printing type and plates, press operation, binding books.",

	},



	'Roofer / thatcher' : { // skill

		'name' : "Roofer / thatcher",

		'_' : "material collection, bundling, binding, attaching roofs of thatch, sod, or tile.",

	},



	'Rope / netmaker' : { // skill

		'name' : "Rope / netmaker",

		'_' : "plant collection, unravelling, winding and braiding, net design and construction.",

	},



	'Rug / carpetmaker' : { // skill

		'name' : "Rug / carpetmaker",

		'_' : "pattern design, material collection, weaving, and finishing.",

	},



	'Sail/tentmaker' : { // skill

		'name' : "Sail/tentmaker",

		'_' : "sail construction, sewing tents, tarring and waterproofing.",

	},



	'Sailor' : { // skill

		'name' : "Sailor",

		'_' : "operating small boats and crewing ships. Basic sail repair and knots.",

	},



	'Salter' : { // skill

		'name' : "Salter",

		'_' : "salt collection from inland sources or by evaporating seawater.",

	},



	'Shipwright' : { // skill

		'name' : "Shipwright",

		'_' : "boat and ship construction from standard designs, not creating new designs.",

	},



	'Tailor/seamstress' : { // skill

		'name' : "Tailor/seamstress",

		'_' : "cutting, fitting, designing and constructing, men's or women's clothing.",

	},



	'Tanner/hideworker/furrier' : { // skill

		'name' : "Tanner/hideworker/furrier",

		'_' : "cleaning, scraping, preserving, grading, leather or pelts, making of preserved pelts into garments, or garment trims..",

	},



	'Tattooist' : { // skill

		'name' : "Tattooist",

		'_' : "tattoo design, pigment mixing and implementation.",

	},



	'Taxidermist' : { // skill

		'name' : "Taxidermist",

		'_' : "pithing, preserving, stuffing and mounting of animals and trophies.",

	},



	'Tinker' : { // skill

		'name' : "Tinker",

		'_' : "basic metal implement repair, knife grinding.",

	},



	'Toymaker' : { // skill

		'name' : "Toymaker",

		'_' : "design and construction of puppets, dolls and simple mechanical toys.",

	},



	'Undertaker / embalmer' : { // skill

		'name' : "Undertaker / embalmer",

		'_' : "funeral preparation and celebration, body preservation and reconstruction, mixing embalming fluids.",

	},



	'Vintner' : { // skill

		'name' : "Vintner",

		'_' : "manufacture of wine, sherry, port, brandy and other fermented or distilled beverages, creating new recipes.",

	},



	'Wig maker' : { // skill

		'name' : "Wig maker",

		'_' : "hair collection, cleaning, sorting, wig design, manufacture and fitting.",

	},



	},



	'Knowledge skills' : { // skillGroup

		'name' : "Knowledge skills",

	Chances : {

		"Common" : {

		'name' : "Common",

			"_" : "WP + 70",

		},

		"Uncommon" : {

		'name' : "Uncommon",

			"_" : "WP + 40",

		},

		"Rare or Obscure" : {

		'name' : "Rare or Obscure",

			"_" : "WP + 10",

		},

	},

		EP : [ /* 0 */ 500, ],

	},



	'Language skills' : { // skillGroup

		'name' : "Language skills",

		'version' : "2.0",

	Abilities : {

		"Knowledge skill" : {

		'name' : "Knowledge skill",

			"_" : "Applicable to specific language",

		},

		"Literacy" : {

		'name' : "Literacy",

			"_" : "If not orthographic (*) script, 1000 ep and 4 wks for first language and then 500 ep and 2 wks for other languages.",

		},

	},

/* costMod @modType, @mod

		'_' : "Same family or same group at higher Rank.",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "Same family and group at higher Rank.",

*/

// costMod END



/* costMod @modType, @mod

		'_' : "For common if any language at higher Rank.",

*/

// costMod END



		EP : [ /* 0 */ 200, /* 1 */ 75, /* 2 */ 125, /* 3 */ 300, /* 4 */ 550, /* 5 */ 850, /* 6 */ 1350, /* 7 */ 1700, /* 8 */ 2250, /* 9 */ 2900, /* 10 */ 3500, ],

	},



// Including MajorSkills



/* footnotes

*/

/* footnote @id, @mark

		'_' : "Adventuring skills includes Horsemanship, Climbing, Flying, Swimming and Knowledge. Orienteering is now the Artisan skill of cartographer. See the above table for Stealth. Knowledge is an adventurering skill which takes 4 weeks and 500ep to learn Rank 0. It cannot be Ranked beyond Rank 0.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "A beastmaster may acquire the ability to train additional types of creatures after they reach Rank 10 through the expenditure of additional EP. See Beastmaster for details.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "Depending on the characters's personal characteristics, the courtier may pay 10% more, or maybe even 10% less, EP to rise in Rank. See Courtier for details. Once a courtier has reached Rank 10, they may expend 1000 extra EP per ability in order to gain additional abilities within the profession.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "After attaining Rank 10 the merchant may expend additional EP in expanding the list of areas of expertise. See Merchant for details.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "If a character is more proficient thief than spy, then the cost to rise in Ranks in spying is halved, until the two Ranks are equal. The reverse is also true. See Spy or Thief for details.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "After attaining Rank 10 it is possible for the troubadour to add more abilities to their repertoire through the expenditure of 500 extra EP per ability. See Troubadour for details.",

*/

// footnote END



/* footnote @id, @mark

		'_' : "Learning to use climbing claws has a one off cost of 1000 EP. Similarly, the use of ropes has a one off cost of 500 EP.",

*/

// footnote END



// footnotes END



// skills END



};




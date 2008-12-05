

// == Dq -  Fumble ==



dq.Tables["Weapon Fumble"] = {

		'title' : "Weapon Fumble",

		Head : [ "Roll", "Result" ],

	Rows : [

		[ "01 - 09", "Shattered weapon." ],

		[ "10 - 10", "Shattered weapon; some slivers fly at you, potentially causing you a grievous injury - roll on the Grievous Injury Table (section 51), but ignore any result over 13." ],

		[ "11 - 12", "Shattered weapon, flying splinters; you and your opponent(s) lose 1 EN each." ],

		[ "13 - 13", "Playing the Roman fool? You just did yourself an Endurance blow; fortunately you rolled a minimum damage (but don't forget the extra damage from poison, magic, etc)." ],

		[ "14 - 16", "Your wild swing possibly connects with someone other than your intended target(s) or yourself - immediately make a strike check at your new victim, the nearest being in range other than you or your intended target(s). Hope you weren't mounted." ],

		[ "17 - 18", "Lose 1 EN. Feels as if you pulled something." ],

		[ "19 - 10", "Lose 2 EN. You really pulled something." ],

		[ "20 - 20", "Oops! You've flung your weapon in a high parabolic arc. Normally a flung or dropped weapon falls without hurting anyone - however, in this one case, it falls on a random target, possibly even you, and maybe hurts them: Strike Chance = [Weapon's B.C.] + [magical / weaponsmith bonuses] - [random target's defence]." ],

		[ "21 - 26", "Butterfingers! Make 3 x MD to avoid your weapon flying 2-3 hexes in a random direction." ],

		[ "27 - 28", "Klutz! Make 3 x MD to avoid dropping your weapon in your hex." ],

		[ "29 - 29", "Whoops! You've caught your weapon in your own armour or gear. You may choose to automatically free it next pulse; in which case, you may not attack or cast magic until after the end of next pulse. Or else you may wish to prepare another weapon in your next action." ],

		[ "30 - 30", "Overly enthusiastic lunge. GM moves you to an unoccupied forward hex (make 3 x AG to choose your new facing) - but if no empty hex is available, you just tried to close on an opponent, who gets a free chance to keep you out of close. If you did close, you don't have to drop any non-close weapon, but it may not be used to attack effectively." ],

		[ "31 - 32", "Poor balance; make 3 x AG or No Offense until after the end of the next pulse." ],

		[ "33 - 33", "Stumble; make 3 x AG or fall prone." ],

		[ "34 - 35", "as per 31-32, but make 2 x AG." ],

		[ "36 - 36", "as per 33, but make 2 x AG." ],

		[ "37 - 38", "as per 31-32, but make 1 x AG." ],

		[ "39 - 39", "as per 33, but make 1 x AG." ],

		[ "40 - 40", "Broken weapon." ],

		[ "41 - 49", "Damaged weapon." ],

		[ "50 - 50", "Momentary dizziness; make 3 x EN or you may not attack or cast magic until after the end of next pulse." ],

		[ "51 - 52", "Your vigorous swing causes a slight twinge. Make 3 x EN or lose 2 FT." ],

		[ "53 - 53", "Make 3 x EN or pull a groin muscle, lose 2 FT and have half Base TMR until healed." ],

		[ "54 - 55", "as per 51-52, but make 2 x EN." ],

		[ "56 - 56", "as per 53, but make 2 x EN." ],

		[ "57 - 58", "as per 51-52, but make 1 x EN." ],

		[ "59 - 59", "as per 53, but make 1 x EN." ],

		[ "60 - 60", "No effect unless you used a A- or B-class melee weapon against an opponent with a non-magical shield. In which case, you have spectacularly wedged you weapon into their shield. Make 1 x PS to immediately wrench your weapon out, or it will be torn from your grasp in the fracas. Don't worry if you fail - perhaps their shield is now useless?" ],

		[ "61 - 62", "Your melee weapon is stuck, caught, or entangled in your opponent's armour or gear (and you didn't even hurt them). Make 3 x PS to immediately disengage your weapon, or it will be yanked from your grasp in the fracas." ],

		[ "63 - 63", "You palpably hit a tree, rock, wall-hanging, furniture, or some other adjacent scenery. Make 3 x PS to immediately disengage/extract your weapon. You may try again, as a future action; but perhaps you should prepare a new weapon instead." ],

		[ "64 - 65", "as per 61-62, but make 2 x PS." ],

		[ "66 - 66", "as per 63, but make 2 x PS." ],

		[ "67 - 68", "as per 61-62, but make 1 x PS." ],

		[ "69 - 69", "as per 63, but make 1 x PS." ],

		[ "70 - 70", "* Shattered weapon, if it is not at least Rank 1 weaponsmithed." ],

		[ "71 - 73", "* Your weapon breaks unless you roll under its weaponsmith rank on D. Indeed it shattered if you failed the roll by 5 or more." ],

		[ "74 - 77", "Twinge of pain. Take (D - rank in weapon) FT damage." ],

		[ "78 - 79", "as per 74-77, but also you may not attack or cast magic for remainder of the pulse." ],

		[ "80 - 80", "Your weapon flies from your grasp. You may choose to drop whatever is in your other hand; in which case, make 3 x MD to catch the weapon in that other hand." ],

		[ "81 - 82", "Butterfingers! Make 3 x MD to avoid your weapon flying 2-3 hexes in a random direction." ],

		[ "83 - 83", "Klutz! Make 3 x MD to avoid dropping your weapon in your hex." ],

		[ "84 - 85", "as per 81-82, but make 2 x MD." ],

		[ "86 - 86", "as per 83, but make 2 x MD." ],

		[ "87 - 88", "as per 81-82, but make 1 x MD." ],

		[ "89 - 89", "as per 83, but make 1 x MD." ],

		[ "90 - 90", "Broken weapon." ],

		[ "91 - 99", "Damaged weapon." ],

		[ "00 - 00", "Your bizarre but highly spectacular fumble is mistaken for an obscure martial technique. All engaged melee opponents hastily elect to perform not to attack or cast magic on their very next action. If you have another action before they actually perform their next action, you may choose to run away (retreat up to full TMR) as your action without the need for a Withdrawal manoeuvre - you are no longer engaged with those particular opponents." ],

	],

/* itemize @title

*/

/* item

		'_' : "A broken weapon is useless until repaired; a shattered weapon is useless until reforged. Any combat spell on a broken or shattered weapon has been dissipated.",

*/

// item END



/* item

		'_' : "A damaged weapon is bent, dented, nicked, or similarly flawed. You may still use the damaged weapon but it does 1-2 points less damage and has 0-20 penalty to its strike chance (GM decides these figures), until repaired.",

*/

// item END



/* item

		'_' : "A damaged magical weapon must be repaired by a Weaponsmith of at least Rank 6. A damaged weaponsmithed weapon loses all its weaponsmith bonuses to Strike chance and/or Damage, until repaired.",

*/

// item END



/* item

		'_' : "Any self-inflicted damage ignores your armour (including magic); it usually represents bruising, minor strains, etc. Naturally, take EN damage if you have no FT available. If a specific injury is stated (e.g. pulled groin muscle, or broken bones), then healing requires a lot of time or the appropriate minimum rank of Healer.",

*/

// item END



// itemize END



/* itemize @title

*/

/* item

		'_' : "ignores asterisked results (*)",

*/

// item END



/* item

		'_' : "does not break",

*/

// item END



/* item

		'_' : "may shatter or be damaged, but less often",

*/

// item END



/* item

		'_' : "does not include any non-magical weapon merely under the effects of magic.",

*/

// item END



// itemize END



/* itemize @title

*/

/* item

		'_' : "Shattered = broken bone(s); lose 2 EN; useless in combat until healed.",

*/

// item END



/* item

		'_' : "Broken = Seriously bruised; lose 2 FT; may be used in combat, but (until healed) each successful blow does 2 damage points less to opponent and 2 FT to yourself.",

*/

// item END



/* item

		'_' : "Damaged = Ouch! Lose 2 FT; no further effect.",

*/

// item END



// itemize END



/* description

*/

/* item @title

		'_' : "If the fumble indicates a broken or damaged weapon, but your modified Strike Chance was over 100, you have also struck your opponent; roll [Fatigue] damage as normal.",

*/

// item END



// description END



	};

dq.Tables["Bow Fumble"] = {

		'title' : "Bow Fumble",

		Head : [ "Roll", "Result" ],

	Rows : [

		[ "01 - 12", "Bowstring snaps and lashes you; lose 2 EN." ],

		[ "13 - 13", "Bowstring snaps and lashes you in the eye; lose 2 EN; you are blinded in one eye for 3 weeks or until cured by a Rank 7 Healer. A figure who is blind in one eye suffers the following subtractions: 1 from MD, 2 from PB, 4 from Perception; and reduces their base chance with any missile or thrown weapon by 30." ],

		[ "14 - 29", "Bowstring snaps; no further penalty." ],

		[ "30 - 30", "Traditional Hunting accident. Clumsy release causes arrow / quarrel to fly towards a random friendly back in approximately the same direction as you were aiming: Strike Chance = Weapon BC + weapon bonuses + 30 - target's defence." ],

		[ "31 - 33", "Clumsy release; bolt/arrow flies wide missing friends and foes." ],

		[ "34 - 36", "Brief twinge of pain in your arm or back; Lose 1 EN." ],

		[ "37 - 39", "as per 34-36, but lose 2 EN." ],

		[ "40 - 59", "dropped bolt or quarrel." ],

		[ "60 - 99", "Bowstring snaps; no further damage." ],

		[ "00 - 00", "Bowstring snaps and lashes you; lose 2 EN." ],

	],


};




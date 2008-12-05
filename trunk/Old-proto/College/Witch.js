
// == Dq -  College Witch ==
     
dq = {
WI : {
		'title' : "Witchcraft",
		'version' : "1.1",
		'abbr' : "WI",
		'requiredMA' : "18",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* modifiers @group
*/ 
/* modifier @mod
		'_' : "From sunrise to sunset",
*/ 
// modifier END

/* modifier @mod
		'_' : "From sunset to sunrise",
*/ 
// modifier END

/* modifier @mod
		'_' : "In large town or city pop. greater than 2000",
*/ 
// modifier END

/* modifier @mod
		'_' : "In small town or village pop. 500 to 2000",
*/ 
// modifier END

/* modifier @mod
		'_' : "In hamlet or rural pop. less than 500",
*/ 
// modifier END

/* modifier @mod
		'_' : "Mana poor day",
*/ 
// modifier END

/* modifier @mod
		'_' : "Mana rich Faerie day",
*/ 
// modifier END

/* modifier @mod
		'_' : "In a high mana area",
*/ 
// modifier END

/* modifier @mod
		'_' : "In a low mana area",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Farsensing",
		'abbr' : "1",
		'multiple' : "150",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Active concentration",
*/ 
// duration END

/* target
		'_' : "Familiar",
*/ 
// target END

/* effects
		'_' : "The Adept can, by remaining stationary and actively concentrating for the duration of the talent's workings, see, hear, taste, smell and feel the same things as their familiar, provided that their familiar is within ",
		'_' : " feet of their position. This talent allows no special communication with the familiar, merely the ability to utilise their senses. The Adept must have already acquired a familiar through the use of Finding Familiar Ritual (Q-1) for this talent to be effective. It takes about ",
		'_' : " seconds for the Adept to tune in to the familiar's senses. If the familiar is killed while the Adept is using this talent the magical backlash is harsher, due to the tighter link, and the amount of magical damage incurred is increased by 5 points, see Q-1.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Special Alchemy",
		'abbr' : "2",
/* effects
*/ 
/* para
		'_' : "The Adept gains certain knowledge of Alchemy. The specific benefits accruing to the Adept are:",
*/ 
// para END

/* description
*/ 
/* item @title
		'_' : "The ability to distill venoms from such plants as belladonna. The Adept functions as a Rank 1 Alchemist for this purpose. See the Alchemist Skill.",
*/ 
// item END

/* item @title
		'_' : "The ability to distill a dose of a potion of Toad Sweat that will remove blemishes, warts, corns, pimples, etc., at the rate of ",
		'_' : " disfigurement (wart, corn, etc.) per dose. The Experience Multiple for this potion is 100 and its cost is 50 Silver Pennies. The Base Chance of effectively preparing it is ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// item END

/* item @title
		'_' : "The ability to make the following amulets:",
*/ 
// item END

/* item @title
		'_' : "Wards bad dreams and assists the wearer in achieving a restful sleep. Increases the wearer's Fatigue recovery during sleep periods by 10% (round down). Cost: 3000 SP.",
*/ 
// item END

/* item @title
		'_' : "The wearer subtracts 10 from all rolls on the Fright Table. Cost: 2400 SP.",
*/ 
// item END

/* item @title
		'_' : "Increases the wearer's ability to detect traps and ambushes by 5. Cost: 4000 SP.",
*/ 
// item END

/* item @title
		'_' : "Decreases the Base Chance of infection by 15. Cost: 2200 SP,",
*/ 
// item END

/* item @title
		'_' : "Prevents miscarriage and decreases Base Chance of infection by 20. Cost: 3000 SP.",
*/ 
// item END

/* item @title
		'_' : "Decreases damage done by poison by 2 points of damage per pulse or day. Cost: 9600 SP.",
*/ 
// item END

/* item @title
		'_' : "No undead will willingly approach closer than 10 feet to the wearer in most cases. Cost: 4800 SP.",
*/ 
// item END

/* item @title
		'_' : "Increases all of the wearer's Strike Chances by 2. Cost: 8000 SP.",
*/ 
// item END

/* item @title
		'_' : "Makes the wearer proof against the Evil Eye. Cost: 400 SP.",
*/ 
// item END

/* item @title
		'_' : "Increases the wearer's Magical Resistance by 10 to any magical act performed by a Demon or Daemonic being. Cost: 800 SP.",
*/ 
// item END

/* item @title
		'_' : "No Demon or Daemonic being will willingly approach closer than 10 feet to the wearer in most cases. Cost: 4000 SP.",
*/ 
// item END

/* item @title
		'_' : "No undead will willingly approach closer than 30 feet to the wearer in most cases. Cost: 4000 SP.",
*/ 
// item END

/* item @title
		'_' : "No Demon or Daemonic being will willingly approach closer than 50 feet to the wearer in most cases. Cost: 4800 SP.",
*/ 
// item END

/* item @title
		'_' : "Made from tiger's or alligator's teeth. It increases the wearer's Magical Resistance by 3 and adds 2 to the wearer's defense. Cost: 2400 SP.",
*/ 
// item END

// description END

/* para
		'_' : "Note that the ``cost'' is the cost of material necessary to manufacture the amulet. Each amulet requires 3 days to manufacture once the necessary materials have been gathered or purchased. Amulets are usually sold at (cost + 25%). The time taken to prepare an Amulet is full-time work, and no training may be undertaken at the same time. Those Amulets that prevent the ``willing approach'' of certain creatures, create a ``circle of protection'' around the wearer. The creatures protected against will not willingly cross the circle's boundary, but if forced across it, for instance by the approach of the wearer, are no longer inconvenienced by the protection.",
*/ 
// para END

/* description
*/ 
/* item @title
		'_' : "The ability to distill from a variety of substances a Love Philtre which will cause the imbiber to fall in love with the first entity upon whom he or she sets eyes after drinking it (regardless of species or sex). The Base Chance to prepare the Philtre is ",
		'_' : " and the Experience Multiple is 200. The cost of the materials will average 600 silver pieces. The effects of the substance will last for ",
		'_' : " week, unless dispelled by the casting of the General Knowledge Counterspell of the College of Witchcraft by the creator of the Love Philtre, or by the successful use of the Curse Removal Ritual. In the latter case, the curse is treated as Minor.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

// item END

/* item @title
		'_' : "The ability to distill from a variety of substances a Potion of Fertility or Infertility that increases or decreases the chances of conception by ",
		'_' : ". It has a ",
		'_' : " chance of working and may be passively resisted by the imbiber. The effects of the Potion of Fertility last ",
		'_' : " days whilst that of the Potion of Infertility last ",
		'_' : " weeks, unless dispelled by the casting of the General Knowledge Counterspell of the College of Witchcraft by the creator of the Potion or a Ritual of Remove Curse is employed. If the latter option is taken, the curse is considered a Minor Curse. The Experience Multiple for this potion is 200 and its cost is 100 Silver Pennies. The Base Chance of conception for races may be found under the Conception in Character Generation. A roll for conception should not be made more than once in 48 hours.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// item END

// description END

// effects END

	},
  
	'T-3' : {
		'type' : "T",
		'title' : "Witchsight",
		'abbr' : "3",
		'multiple' : "200",
/* effects
		'_' : "The Adept may see objects or entities which are invisible and they appear to have a slight blue sheen around them. If the invisibility effect (excluding Walking Unseen) is of a higher Rank than the Witchsight, the object or entity may not be clearly identified or directly magically targeted. The Adept may also see in the dark as a Human does on a cloudy day, with an effective range of vision of 150 feet under the open sky, and 75 feet elsewhere.",
*/ 
// effects END

	},
  
	'G-1' : {
		'title' : "Damnum Minatum",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Special",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The Adept curses any one target within range with a particular unpleasantness as listed below. Some of the effects are identical to backfire results; such effects are cross referenced to the Backfire table. If the effects of the curse are doubled or tripled, the Adept may inflict 2 or 3 different results. The curse is permanent until a General Knowledge Counterspell of the College of Witchcraft is cast over the afflicted entity, a Ritual of Remove Curse is employed, the duration expires, or the effect is cured by a healer of the appropriate Rank. Curses that have a duration, or may be cured by a Healer are indicated in their descriptions. If a Ritual of Remove Curse is employed, the Damnum Minatum is considered a Minor Curse. A separate Counterspell or Ritual of Remove Curse must be used on each separate curse. Identical Damnum Minatum effects are not cumulative. Note that the Adept may always choose to inflict a curse of lesser Rank than their actual Rank. The Curses that the Adept may inflict are dependent on the Rank of the spell:
      ",
*/ 
Tables : {
	"Damnum Minatum Effect" : {
		'title' : "Damnum Minatum Effect",
		Head : [ "", "Curse" ],
	Rows : [
		[ "0 - 3", "Boils ; Warts ." ],
		[ "4 - 6", "Clumsiness (-l AG); Maladroitness (-l MD)." ],
		[ "7 - 9", "Weakness (-2 PS); Poor health (-3 EN)." ],
		[ "10 - 11", "Cowardice (-3 WP & +5 Fright/Awe rolls); Lose Smell & Taste (B:73)." ],
		[ "12 - 13", "Deafness (B:67); Lose Tactile Sense (B:75); Virulent Skin Disease (B:79-80)." ],
		[ "14 - 15", "Insomnia (B:77); Wasting Disease (B:81); Periodic Hallucinations (B:88)." ],
		[ "16 - 17", "Periodic Muscle Spasms (B:82-83); Asthma (B:93); Migranes (B:86-87)." ],
		[ "18 - 19", "Creeping Senility (B:94-95); Struck Mute (B:71); Arthritis (B:89-90); Enfeeblement (B:91-92)." ],
		[ "20 - 20", "
          Blindness (B:63); Amnesia [Roll D]:
            Partial - Magic (B:96) Partial - Skills (B:97) Partial - Recent (B:98) Total (B:99).  " ],
	],
	},
},
// effects END

	},
  
	'G-2' : {
		'title' : "Darkness",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Volume",
*/ 
// target END

/* effects
		'_' : "The Adept creates a volume in which non-magical light is partially suppressed. The volume will be ",
		'_' : " cubic feet, and may be in any one contiguous area the Adept desires, provided that no dimension is smaller than one foot. The entire volume must be visible and within range at time of casting, and may not be moved. For visibility purposes, the Spell will increase Darkness levels within the volume to ",
		'_' : ". Rank 20 Darkness may not be seen through. It will not aid in providing bonuses for casting purposes, though it will neutralise penalties due to natural light, to a maximum of ",
		'_' : ". The volume counts as direct shadow for Star & Shadow Mages. If the lighting conditions are lower than that provided by the spell, no effect will be apparent. Note that because light is only being suppressed, it may still pass through, and no shadows are generated outside the volume. If it is possible to see through a Darkness, everything beyond it is normally visible. This spell can engender silhouettes of lit objects against the darkness, though not create shadows. Any of this volume may be overridden by a higher ranked Spell of Light, or neutralised (back to original conditions) by an equal rank.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Decay",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "The Adept may cause an amount of food, produce or beverage to quickly age, moulder, spoil and rot. Upon casting the spell the targeted matter will decay, causing parasitic fungi to spring forth, and an odour of decay to prevail. The spell may ruin up to ",
		'_' : " cubic foot of food and/or drink. If a double or triple effect is achieved the amount of food that is spoiled may be doubled or trebled. Once affected by the spell the food and drink will thereafter be inedible.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Fear",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "350",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept instills in the target an uncontrollable fear. Unless the target successfully resists they must roll on the Fright Table. If a double effect is achieved, the Adept may choose to modify the Fright Table roll up or down by an amount equal to the rank of the spell. If a triple effect is achieved the Adept may modify the Fright Table roll by twice the rank of the spell. See the Fright Table for the exact results of the Fear.",
*/ 
// effects END

	},
  
	'G-5' : {
		'title' : "Harming Entity",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "second",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      Unless successfully resisted, the Adept causes the target intense pain for the duration of the spell. The target must check to see if their concentration is broken and must subtract ",
		'_' : " from their Strike Chances whilst suffering the pain. The difficulty multiplier for the Concentration Check is dependent on the Rank of the spell:
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

Tables : {
	"Harming Entity Effects" : {
		'title' : "Harming Entity Effects",
/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

	},
},
/* para
		'_' : "No actual damage is inflicted as a result of this spell. Note that Mind Mages will be somewhat unaffected by this spell, and may halve the reduction to their Strike Chances.",
*/ 
// para END

// effects END

	},
  
	'G-6' : {
		'title' : "Hypnotism",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment",
/* range
		'_' : "15 feet",
*/ 
// range END

/* duration @conc, @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may lull an entity that is within range into a trance-like state in which they will be subject to suggestion. The spell may not be cast over a totally hostile entity. Once the subject has been hypnotised, the Adept may make suggestions (provided that they can communicate verbally with the subject) that will be readily accepted unless they directly conflict with the subject's best interests. The subject will remain suggestible so long as the Adept maintains concentration and the subject remains in range. The subject will continue to implement implanted suggestions for ",
		'_' : "hours after the suggestions have been made, even when no longer hypnotised. The subject will never have any idea where the suggestion that it is implementing came from.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-7' : {
		'title' : "Igniting Flammables",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "150",
		'resist' : "Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "The Adept may call forth fire and cause flammable material (cloth, paper wood, and similar items, but not flesh) to burst into flames. The material will thereafter burn normally and the flames may be extinguished by normal means.",
*/ 
// effects END

	},
  
	'G-8' : {
		'title' : "Mind Cloak",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "250",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Self",
*/ 
// range END

/* duration @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept creates a cloak around their own mind so that their thoughts cannot be detected or read. This spell does not prevent the Adept's presence or emotions from being detected, but their mind will simply not appear to be there when an attempt is made to ``read'' it.",
*/ 
// effects END

	},
  
	'G-9' : {
		'title' : "Protection Against Were-Creatures",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Ward, Magical Trap",
/* range
		'_' : "15 feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The spell creates an invisible Circle of Protection with a radius of ",
		'_' : "feet which will not willingly be crossed by any Were-creature or Shapechanger in beast form unless they successfully resist the circle's effects upon first encountering it. Even if the Circle's effects are resisted, the Were-creature or Shapechanger will be discomforted while within the Circle, and will have their Strike Chances reduced by 10. If the circle is seen with the use of Witchsight, it will appear as a glowing red circle, similar to a ring of fire.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-10' : {
		'title' : "Storm Calling",
		'type' : "G",
		'abbr' : "10",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Magical Trap",
/* range
		'_' : "Works at any range",
*/ 
// range END

/* duration @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Special",
*/ 
// target END

/* effects
		'_' : "The Adept may summon any storm front which may exist anywhere in sight. Upon reaching the spot occupied by the Adept at the time of casting, the storm front will slow and finally cease moving and begin a downpour (snow, rain, hail, sleet, or whatever else that the GM feels the clouds may contain). Generally a storm front can be seen for 20 to 30 miles. If no front can be seen the spell may still be cast, but the Base Chance is reduced by 20. The storm front will take [D x ",
		'_' : "] minutes to arrive. Once the duration has expired, the weather will gradually return to normal over a similar amount of time.",
*/ 
/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'G-11' : {
		'title' : "Summoning Enchanted Creatures",
		'type' : "G",
		'abbr' : "11",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Magical Trap",
/* range @base, @inc
		'_' : "miles",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may summon ",
		'_' : " enchanted fantastical creatures. Only creatures that are native to the area may be summoned. It will take them ",
		'_' : " seconds, to arrive and they will be uncontrolled when they do arrive. If more than 1 creature is summoned, all must be of the same type.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @base, @dec, @min
*/ 
// rk END

// effects END

	},
  
	'G-12' : {
		'title' : "Walking Unseen",
		'type' : "G",
		'abbr' : "12",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Potion, Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "foot",
*/ 
// range END

/* duration @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The target of this spell may move unnoticed, not invisible. This means that it will not transmit light. As a consequence the target will cast a shadow, which may or may not be noticed, depending on the lighting conditions, etc, and will have a reflection in a mirror or other reflective surface. However, the target may not be noticed even if another entity is looking directly at them. An entity will get a Perception check to notice the target if the target becomes invasive on the entity's senses (e.g. standing next to the entity and putting their hands over the entity's eyes). Note that a Crystal of Vision or similar means of viewing is considered direct viewing and is affected by this spell. If the target, or the target's possessions, are touched by another entity, or an entity's possessions, then the spell is broken. Although not truly invisible, the target may be detected by using magical means to detect invisible entities (e.g. Witchsight).",
*/ 
// effects END

	},
  
	'G-13' : {
		'title' : "Wind Whistle",
		'type' : "G",
		'abbr' : "13",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Potion",
/* range
		'_' : "Self",
*/ 
// range END

/* duration
		'_' : "D hours",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "
      The Adept is able to create a wind over an open space of up to ",
		'_' : "feet in diameter, centred upon themself. Outside of this area the wind will fade back to the prevailing wind over half again the distance. The wind will build up over [D - 2] minutes and the Adept must choose before that time which direction the wind will blow. The speed of the wind is determined by a D100 roll as follows:
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

Tables : {
	"Wind Whistle Effects" : {
		'title' : "Wind Whistle Effects",
		Head : [ "Dice", "Velocity" ],
	Rows : [
		[ "01 - 10", "35 mph" ],
		[ "11 - 25", "15 mph" ],
		[ "26 - 50", "10 mph" ],
		[ "51 - 75", "25 mph" ],
		[ "76 - 90", "35 mph" ],
		[ "91 - 100", "45 mph" ],
	],
	},
},
/* para
		'_' : "The Adept may add or subtract a number equal to the Rank of the spell from the dice roll used to determine velocity. This need not be done until after the dice have been rolled and the result ascertained. If a double or triple effect is achieved the Adept may add or subtract double or treble the Rank of the spell. If the resulting wind is over 30 mph missile fire will be affected, reducing Base Chances by the (wind speed / 2) but extending ranges by a similar number of hexes if firing with the wind, or reducing them respectively if firing into the wind.",
*/ 
// para END

// effects END

	},
  
	'S-1' : {
		'title' : "Blessing Crops",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "125",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration @base, @inc
		'_' : "year",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The spell increases the richness of the soil of ",
		'_' : " acre. For the duration of the spell everything grown in that soil will be proof against locusts, droughts, flooding, frost, and other natural disasters. This spell will also dissipate the effects of a Spell of Blighting Crops which has previously been cast on the target area of this spell.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Blessing/Curse on Unborn Child",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment, Magical Trap, Potion",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration
		'_' : "Until birth of target's child",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may mar or bless any unborn child whose mother is in sight while she is pregnant. The Adept may increase or decrease any one characteristic of the child by ",
		'_' : ". This spell may only be cast on the same unborn child more than once if it is cast by different Adepts, and is used on different characteristics. The spell may raise characteristics above normal racial maximums. If cast so as to curse, it is a Major Curse and may only be removed before the child is born. Note that if this spell is made into a potion, the target of the spell is the imbiber. The imbiber may only passively resist the effects of the potion's magic.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Blessing Livestock",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration @base, @inc
		'_' : "month",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Livestock",
*/ 
// target END

/* effects
		'_' : "The spell may be cast on up to ",
		'_' : " livestock that are within sight. These animals will then be resistant to natural disorders, such as rabies, dysentery, worms, and hoof and mouth disease for the duration of the spell. This spell will also dissipate the effects of a Spell of Pestilence which has previously been cast on the targets of the spell.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-4' : {
		'title' : "Blighting Crops",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "125",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration @base, @inc
		'_' : "year",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The spell causes ",
		'_' : "acre of land within sight to become sour and lose fertility. There is a ",
		'_' : " chance of future crops failing while this spell is in effect. Those years that the crops do not fail, they will be stunted and approximately half a normal yield will be obtained. This spell is a minor curse. This spell will also dissipate the effects of a Spell of Blessing Crops which has previously been cast on the target area of this spell.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Cat Vision",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Ward, Potion",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept causes the target to develop vision similar to that of a cat. Everything will appear monochromatic (i.e. shades of grey) and it is difficult to accurately estimate distance. The higher the Rank, the less of a problem this will be. Some amount of light must be present for this vision to operate. The range of the vision is ",
		'_' : "feet.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-6' : {
		'title' : "Controlling Animals",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "100",
		'resist' : "Passive",
		'storage' : "Investment",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @conc, @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Animal",
*/ 
// target END

/* effects
		'_' : "The Adept controls the actions of one normal and unenchanted animal, bird or aquatic, that does not successfully resist. The creature will serve the Adept as long as they maintain their concentration. If the Adept chooses to release the animal or has their concentration broken, the creature may attack them or flee. The chance to cast this spell is reduced by 5 if the Adept cannot Communicate with the creature. If the Adept cannot make eye contact, the Base Chance is also reduced by 5.",
*/ 
// effects END

	},
  
	'S-7' : {
		'title' : "Converse With Animals",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "50",
		'resist' : "None",
		'storage' : "Investment, Potion",
/* range
		'_' : "Self",
*/ 
// range END

/* duration @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept may communicate with any natural and unenchanted, animal, bird, or aquatic. Whether this communication is verbal or symbolic, and to what extent the communication may be carried is left up to the GM's discretion. The Adept must specify at the time of casting what particular type of animal, bird or aquatic is to be conversed with. The spell must be re-cast to speak to another type of animal, bird, or aquatic.",
*/ 
// effects END

	},
  
	'S-8' : {
		'title' : "Creating Plague",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap, Potion",
/* range
		'_' : "15 feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "day",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The spell infects any one target with any of the following diseases:
      ",
*/ 
Tables : {
	"Creating Plague Effects" : {
		'title' : "Creating Plague Effects",
		Head : [ "", "Disease" ],
	Rows : [
		[ "0 - 5", "Measles" ],
		[ "6 - 10", "Consumption" ],
		[ "11 - 15", "Typhoid" ],
		[ "16 - 18", "Bubonic Plague" ],
		[ "19 - 20", "Pneumonic Plague" ],
	],
	},
},
/* para
		'_' : "The target will not die of the disease, but will become habitually ill and all who come in contact with them (except the Adept who cast the spell) may contract a potentially fatal dose of the disease. In effect, the target becomes a carrier. This spell is a major curse. Note that if this spell is made into a potion, the target of the spell is the imbiber. The imbiber may only passively resist the effects of the potion's magic.",
*/ 
// para END

// effects END

	},
  
	'S-9' : {
		'title' : "Creating Restorative",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Water",
*/ 
// target END

/* effects
		'_' : "
      The spell creates out of drinkable water a potion which, when imbibed, subtracts 2 from Endurance and repairs 4 lost Fatigue. The amount subtracted from Endurance is increased by 1 and the amount of Fatigue repaired is increased by ",
		'_' : ". The fatigue so restored may have been lost through damage or tiredness, including spell casting. The potion will only restore lost Fatigue. This spell can be prepared in two ways:
      ",
		'_' : "
      The effects of drinking the potion may be resisted. The Endurance damage caused by this potion may be healed by normal means.
    ",
*/ 
/* rk @inc
*/ 
// rk END

/* enumerate
*/ 
/* item
		'_' : "The Adept can turn water into a restorative potion that will last ",
		'_' : "minutes.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

/* item
		'_' : "The Adept may spend an hour and burn oils costing 500sp to make a potion with the same effects that will last indefinitely.",
*/ 
// item END

// enumerate END

// effects END

	},
  
	'S-10' : {
		'title' : "Damnum Magnatum",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "600",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Special",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The Damnum Magnatum is a Major Curse and may take one of three forms, as chosen by the Adept. The Damnum Magnatum may normally only be removed by the use of a Remove Curse Ritual, by a Counterspell cast by the Adept that laid the curse, or by the death of the target. This spell may not be dissipated.
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "
          The Adept may choose to torment or kill their target. If the effects of the Affliction are intended to be deadly, the target may not die as a result of the curse before (24 - Rank) hours have passed. The Adept's player states what the Affliction is to do, and then the exact effects and results must be decided by the GM. In addition to the normal ways of lifting a curse, afflictions may have durations or conditions worded into them, in which case the curse is lifted when the duration expires or the condition is met. Players should note that Afflictions are particularly capricious, and can never be relied upon to operate in precisely the same manner twice. Some sample Afflictions are:
          ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "Target begins to age at 10 years per day. Target may die of old age. Once the curse is lifted the target will age backwards to their correct age, at the same rate.",
*/ 
// item END

/* item
		'_' : "Target contracts a deadly disease (including open running sores) that may not be cured by the arts of a Healer.",
*/ 
// item END

/* item
		'_' : "Target is transformed into a frog or other small creature (but retain their own mind). Condition: the Curse may be lifted by the kiss of a member of royalty of the opposite gender.",
*/ 
// item END

/* item
		'_' : "Target is cursed with Lycanthropy (random species).",
*/ 
// item END

/* item
		'_' : "Target will fall into a century long sleep (see Hibernation, College of Air Magics).",
*/ 
// item END

// enumerate END

// item END

/* item @title
		'_' : "Add ",
		'_' : " of the Adept with this spell to any percentile dice roll involving the target's use of their abilities. This may never be applied favourably. Note that this is an addition to the dice roll, not a subtraction from Base Chances.",
*/ 
/* rk @inc
*/ 
// rk END

// item END

/* item @title
		'_' : "A Doom is a pronouncement, by the Adept, upon an event that will occur in the target's future, such as: ``You will die by the hand of a loved one.'' The statement, which must be indefinite, will come true in not less than (24 - Rank) weeks. The Doom remains until it is fulfilled, and may not be removed by a Remove Curse Ritual, or even by the death of the target, unless that death fulfils the Doom. The target is immediately aware of the nature of the Doom, and its wording. A Doom may be modified, so as to decrease the severity, make the time factor longer, etc., by the casting of a modified Doom on the same target, by an Adept with Rank in this spell at least equal to the Rank at which the original Doom was cast. The exact effects of the Doom must be decided by the GM, and players should note that two Dooms, even if worded the same, need not have precisely the same effects.",
*/ 
// item END

// description END

// effects END

	},
  
	'S-11' : {
		'title' : "Earth Tremor",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "350",
		'resist' : "None",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "seconds",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "By the use of this spell the Adept causes the very earth to pitch and roll uncontrollably as though in a tremendous earthquake. The area that may be affected is a ",
		'_' : " hex area of ground. Any Entities within the Area must roll less than or equal to 1 x AG to retain their footing. Those who fail to remain standing fall prone immediately and may not rise for the duration of the tremor. Objects within the Area will tend to topple and roll around. If the spell is cast under part of, or all of, a building, wall, or other such construction, significant structural damage will occur, probably causing partial or total collapse.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-12' : {
		'title' : "Evil Eye",
		'type' : "S",
		'abbr' : "12",
		'multiple' : "300",
		'resist' : "Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "day",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "By use of this spell, the Adept curses the target with ill-fortune. Unless the target resists, all their Base Chances, Strike Chances, and their Magic Resistance are reduced by the Rank of the spell (1 if unranked). This spell is a minor curse.",
*/ 
// effects END

	},
  
	'S-13' : {
		'title' : "Hellfire",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "650",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "This sulphurous fire attacks ",
		'_' : " human-sized targets. The target's Magical Resistance is reduced by ",
		'_' : ". The spell does D",
		'_' : " damage to each target. If a target successfully resists, they suffer only half damage (round up). Double damage add an additional ",
		'_' : " damage and triple damage adds an additional ",
		'_' : " damage.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk
*/ 
// rk END

/* rk @inc
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Instilling Flight",
		'type' : "S",
		'abbr' : "14",
		'multiple' : "350",
		'resist' : "None",
		'storage' : "None",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration @conc, @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "This spell enables the Adept to instil a possession of up to ",
		'_' : "lbs with the power of flight. The spell will dissipate if the object stops being a possession of the Adept, the Adept loses concentration, or if the object is broken. The Adept may cause the object to fly at ",
		'_' : " miles per hour. It will take off and accelerate up to full speed, or halt and land, in a single pulse. The object may support ",
		'_' : "lbs in addition to its own weight. Naturally flexible or fragile items gain sufficient strength and rigidity to support the load. Any object or entity that falls from the flying object will move off in a random direction. If the object is about to crash into a surface, it will attempt to land, although some surfaces may be inappropriate for this (lava, sheer walls, etc.).",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-15' : {
		'title' : "Mass Fear",
		'type' : "S",
		'abbr' : "15",
		'multiple' : "400",
		'resist' : "Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "seconds",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The spell instills in all entities within range, other than the Adept, and those who successfully resist, an unreasoning and uncontrollable fear. All entities that fail to resist must roll on the Fright Table .",
*/ 
// effects END

	},
  
	'S-16' : {
		'title' : "Pestilence",
		'type' : "S",
		'abbr' : "16",
		'multiple' : "150",
		'resist' : "Special",
		'storage' : "Investment",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration @base, @inc
		'_' : "month",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Livestock",
*/ 
// target END

/* effects
		'_' : "The spell may be cast on up to ",
		'_' : " livestock that are within sight. All livestock so cursed that do not resist (individually) are infected (see Infection). Any new stock which comes into contact with the infected stock while the curse is in effect must also resist (individually) or become infected. This spell is a minor curse on each individual. This spell will also dissipate the effects of a Spell of Blessing Livestock which has previously been cast on the targets of this spell.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-17' : {
		'title' : "Skin Change",
		'type' : "S",
		'abbr' : "17",
		'multiple' : "350",
		'resist' : "Passive",
		'storage' : "Special",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration
		'_' : "Until dispelled by the appropriate counterspell",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The Adept may enchant an animal pelt or skin so that anyone who touches, or is touched by the ``inside'' will turn into the type of animal to whom the pelt originally belonged, but will retain their own mind and memories. The spell is, in effect, stored in the pelt or skin, and may be retained unused for an length of time dependent upon the Rank of the spell:
      ",
*/ 
Tables : {
	"Skin Change Effects" : {
		'title' : "Skin Change Effects",
		Head : [ "", "Duration" ],
	Rows : [
		[ "0 - 6", " week" ],
		[ "7 - 12", " weeks" ],
		[ "13 - 19", " month" ],
		[ "20 - 20", "permanent until used" ],
	],
	},
},
/* para
		'_' : "The wearer of the pelt may only resume their own form by having the Special Knowledge Counterspell of the College of Witchcraft cast over them. The pelt is destroyed by the process of returning the wearer to their original form. This spell may be used to enchant the pelts or skins of sentient entities, but if used for that purpose its Base Chance is reduced by 20%. Note that if a backfire result is achieved when casting this spell, the pelt or skin is destroyed in addition to any other backfire effects. The Skin Change spell itself may be stored by Investment (so that it may later be triggered on a pelt) but not by other means. The ``inside'' of a pelt is the side that was closest to the animal's body.",
*/ 
// para END

/* para
		'_' : "The skin must be applied to the target for at least 30 seconds before they will change, where upon the target gets to resist its effects.",
*/ 
// para END

// effects END

	},
  
	'S-18' : {
		'title' : "Virility",
		'type' : "S",
		'abbr' : "18",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Ward, Magical Trap, Potion",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Male Entity",
*/ 
// target END

/* effects
		'_' : "The spell is cast over a male entity and greatly increases the target's virility. In addition the chance of the target's female partner conceiving is increased by ",
		'_' : ". Note that if this spell is made into a potion, the target of the spell is the imbiber.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-19' : {
		'title' : "Wall of Thorns",
		'type' : "S",
		'abbr' : "19",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The Adept causes a wall of tangled briars and thorns to spring forth from the ground. The wall is 10 feet high x 20 feet long x 2 feet thick. The Adept may increase the length or height by ",
		'_' : " feet. The wall may not be cast on top of an entity. A human-sized hole may be made in the wall by causing 20 points of damage in one area. This damage need not come from a single attack. All ``A'' class weapons and most ``C'' class will have little effect on the tough springy vines. An entity forcibly pressed against the wall, or attempting to force their way through it will suffer [D + 2] damage for every Pulse they are so engaged. This damage is entirely physical, and armour may protect against it. An entity can normally force its way through the wall in 6 Pulses. The wall is very dense, and may not be seen through.",
*/ 
/* rk
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Finding Familiar",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Concentration",
		'concentration' : "Standard",
/* duration
		'_' : "Special",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Animal",
*/ 
// target END

/* material
		'_' : "A piece of food acceptable to the type of animal being summoned",
*/ 
// material END

/* effects
		'_' : "The Adept may attempt to summon a small animal that will serve them as a familiar. The type of animal is chosen by the Adept and may be any natural, unenchanted, small animal such as a cat, dog, bat, rat, toad, weasel, falcon, owl, goat, monkey, trout, etc, and must be native to the area in which the summoning is performed. If the summoning is successful, an animal of the chosen sort will arrive at the Adept's location in (25 - Rank) minutes. The ritual allows the Adept to communicate with the animal when it first arrives. The Adept must promise to feed and protect the animal. The GM should roll a reaction check for the animal. If the result is Enraged, the animal attacks, if Belligerent it leaves immediately. If neither of these results are achieved, the animal agrees to serve the Adept as a familiar. Regardless of the result, the Ritual confers no further ability to communicate with the animal. If the Adept fails to feed the familiar on a regular basis, or mistreats it in any way, the familiar may run away, and a new familiar must be found. The familiar will serve the Adept to the best of its ability, warning them of danger, and so forth. If the Adept is unable to communicate with the familiar magically it will attempt to warn them by tugging at their cloak, whimpering, or whatever, as appropriate. If the familiar is killed, the Adept suffers [D + 5] points of damage in the form of a magical backlash. This damage may not be resisted. An Adept may only have one familiar at any one time. A familiar is not an enchanted creature. The range of the summoning caused by this ritual is ",
		'_' : "mile.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'Q-2' : {
		'title' : "Tarot Reading",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "500",
		'resist' : "Special",
		'actions' : "Laying out & reading Tarot cards",
		'casttime' : "30 minutes",
		'concentration' : "None",
/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @inc
		'_' : "Special",
*/ 
// basechance END

/* target
		'_' : "Special",
*/ 
// target END

/* material
		'_' : "78 card Tarot deck",
*/ 
// material END

/* effects
		'_' : "
      The Adept may read the tarot to gain insight and information. The Tarot may be used in one of four ways, and only one of these four options may be chosen per reading. Once one of these options has been successfully implemented, a new reading must be begun in order to implement another. There is no Backfire except as specifically noted. The four options are:
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "The Adept may use the Tarot to attempt to divine the Aspect or Aspects of an entity that is present for the entire ritual and within ",
		'_' : "feet The entity may actively but not passively resist the reading. The Base Chance of the reading is 40% and if successful, the Tarot will tell the Adept the entity's basic Aspect (autumn air, lunar, death, etc), and whether the entity is light or dark aspected. Failure will result in no sensible answer and Backfire in an incorrect reading.",
*/ 
/* rk @base
*/ 
// rk END

// item END

/* item @title
		'_' : "
          The Adept may use the Tarot to attempt to determine if an entity or object is currently, or had been recently, under the effects of a spell. The object or entity must be present for the entire duration of the ritual, and be within ",
		'_' : "feet. The ritual may not be resisted. The Base Chance of the ritual being successful is 45%. The Base Chance is reduced by 5 for every week or part thereof since the spell that is being divined was cast. Permanent magic (e.g. invested items still with charges) or spells currently in effect carry no modifier. The Adept gains knowledge of those spells that fall within their cast chance.
          ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "If the Adept can divine the spell, its exact name and college are revealed. If the spell is non-colleged in origin, its general effects are revealed.",
*/ 
// para END

// item END

/* item @title
		'_' : "
          The Adept may use the Tarot to attempt to learn something about future events. The Adept must decide on a question to be posed or a general course of action being considered before attempting this divination. The GM may make the reading as simple or as complex as they desire, but in all cases the information gained should be vague.
          ",
*/ 
/* para
		'_' : "The Base Chance of successfully Divining the Future is 20%. If the Adept fails this option, the reading will be gibberish and obviously a failure, but if a Backfire occurs, a sensible but otherwise false, reading will be gained.",
*/ 
// para END

// item END

/* item @title
		'_' : "The Adept may attempt to communicate with the spirit of a deceased entity provided that they occupy the place that the entity died or was buried. The Adept may only attempt this if they are aware that the place they occupy was the site of the entity's death or burial. The Base Chance of the spirit responding to the Adept's questioning is 10%. If the spirit responds the Adept may ask it questions and interpret its answers by turning over cards. Only questions that can be answered with yes or no should be asked, and the spirit's answer is indicated by the orientation of the card turned. The dead can only provide knowledge of events that transpired while they were alive. Once the dead initially respond they will continue to answer all questions until dismissed, or the entire deck has been used.",
*/ 
// item END

// description END

// effects END

	},
  
	'R-1' : {
		'title' : "Controlling Weather",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "300",
		'resist' : "None",
		'actions' : "Dance",
		'concentration' : "None",
/* duration
		'_' : "8 hours x Rank (minimum 1)",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The Adept may change one or more of the three components that make up the weather by performing a ritual dance. The three components of weather are: Precipitation / Cloud Cover, Temperature, and Wind. The GM should consult the Weather Table and advise the player of the current level of each of the three components before they start dancing. The Adept may change one component by Rank / 2 (round down), or two components by Rank / 3 (round down) levels each, or all three components by Rank / 4 (round down) levels each. The changes are independent and may be in any direction. The weather will change gradually over ",
		'_' : " minutes per level shifted, and all three components will change simultaneously. The area of the effect is circular and the diameter is ",
		'_' : " miles. This ritual counts as Strenuous activity and the Adept will lose Fatigue. This ritual may not Backfire.",
*/ 
/* rk @base, @dec
*/ 
// rk END

/* rk @inc, @min
*/ 
// rk END

// effects END

	},
  
	'R-2' : {
		'title' : "Creeping Doom",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "450",
		'resist' : "Special",
		'actions' : "Carving bones",
		'casttime' : "2 hour",
		'concentration' : "None",
/* duration
		'_' : "Special",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* material
		'_' : "13 bones",
*/ 
// material END

/* effects
		'_' : "
      The Adept creates 13 Rune-bones by carving the appropriate maledictions into bones from an entity of the same race as the target. The Adept then buries the bones beneath the dwelling of the entity that they wish to curse. It is best if the victim's name is carved in the bones as well. If the intended victim's name is not carved on the bones, and there are 1 or more other entities inhabiting the dwelling, there is a ",
		'_' : "% chance that the curse will settle on someone other than the intended victim. For each month that the bones remain in or under the victim's dwelling, they must make a Resistance Check, the Base Chance for which is composed of the victim's Endurance multiplied by the Difficulty Multiplier of the resistance. The Difficulty Ratings are:
      ",
*/ 
/* rk @base, @dec
*/ 
// rk END

Tables : {
	"Creeping Doom Effects" : {
		'title' : "Creeping Doom Effects",
/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

	},
},
/* para
		'_' : "If the victim fails to resist, they suffer a wasting disease and lose [D - 4] Endurance for purposes of future resistance (only). If they fail to resist for three straight months they die.",
*/ 
// para END

// effects END

	},
  
	'R-3' : {
		'title' : "Dead Man's Candle",
		'type' : "R",
		'abbr' : "3",
		'resist' : "None",
		'actions' : "As detailed",
		'casttime' : "Variable",
		'concentration' : "None",
/* duration
		'_' : "Special",
*/ 
// duration END

/* basechance
		'_' : "Automatic",
*/ 
// basechance END

/* target
		'_' : "Materials",
*/ 
// target END

/* material
		'_' : "As detailed",
*/ 
// material END

/* effects
		'_' : "By means of this ritual the Adept creates an horrific and evil candle. Only the darkest of the Wicca would ever perform this Ritual. The Adept makes a Dead Man's candle by severing the left hand of a convicted murderer who has been hung. The hand must be severed during a full moon and wrapped in a burial shroud. It must then be dried in the sun until desiccated. The Adept must render the fats and oils from the body of a stillborn baby, so that the hand can be coated with them and a candle made. The wick of the candle is then made from the hair of the same murderer. The Adept says words of darkest power over the candle. Thereafter, it may be lit as part of any spell or ritual of this College and will increase the chance that the spell or ritual is successful by 20, provided that the ritual is being performed with malign intent. This Ritual may not be Ranked, and it always works, if it is correctly performed. A Dead Man's Candle will burn for about 10 hours before it is no longer usable, and may be extinguished and relit an indefinite number of times.",
*/ 
// effects END

	},
  
	'R-4' : {
		'title' : "Hand of Glory",
		'type' : "R",
		'abbr' : "4",
		'resist' : "None",
		'actions' : "As detailed",
		'casttime' : "Variable",
		'concentration' : "None",
/* duration
		'_' : "Permanent",
*/ 
// duration END

/* basechance
		'_' : "Automatic",
*/ 
// basechance END

/* target
		'_' : "Severed hand",
*/ 
// target END

/* material
		'_' : "Murderer's hand",
*/ 
// material END

/* effects
		'_' : "This gruesome ritual creates an amulet of great and malign potency. Many Wicca consider this ritual to be evil and it would certainly never be studied or performed by a ``White Mage''. To successfully perform the ritual, the Adept must sever the right hand of a convicted murderer who has been hung. The hand may only be severed during the new moon and must be wrapped in a winding sheet. It must then be dried in the sun and the blood entirely removed. When the desiccated hand is worn as an amulet, thereafter, it will subtract 10 from the Cast Check of creating any Plague, Blight, or Curse. This Ritual may not be Ranked, and it always works if it is correctly performed.",
*/ 
// effects END

	},
  
	'R-5' : {
		'title' : "Summoning Animals",
		'type' : "R",
		'abbr' : "5",
		'multiple' : "150",
		'resist' : "None",
		'actions' : "Concentration",
		'concentration' : "Standard",
/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Animals",
*/ 
// target END

/* effects
		'_' : "The Adept may summon a number of small animals equal to the Rank of the ritual (1 if unranked). The animals that the Adept attempts to summon must be native to the area. The animals are not controlled in any way when they arrive.",
*/ 
// effects END

	},
  
	},
  
};
  

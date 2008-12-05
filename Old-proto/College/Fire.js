
// == Dq -  College Fire ==
     
dq = {
FI : {
		'title' : "Fire Magics",
		'version' : "2.0",
		'abbr' : "FI",
		'requiredMA' : "12",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "Adepts of the College of Fire Magics may only practice their arts in an area where it is possible for fire to exist. They may not practice fire magic underwater or in a vacuum, for example.",
*/ 
// para END

// subsection END

/* subsection @title
*/ 
/* para
		'_' : "Only one modifier from each group may be applied together. These bonuses only apply to normal fire. Magical fire may only be used to reduce negative modifiers to zero.",
*/ 
// para END

/* para
		'_' : "Unless otherwise specified, Magical Fire will automatically ignite flammables.",
*/ 
// para END

/* subsubsection @title
*/ 
/* para
		'_' : "Occasionally a character will suffer damage from falling in to, or being exposed to, fire. The following table indicates the pulse by pulse damage taken by an entity being in contact with fire. While ignition of flammables on a person will not always occur, if an entity is immersed in fire (e.g. passage through a Wall of Fire) flammable possessions will catch alight. Unless otherwise specified, Magical Fire will automatically ignite flammables.",
*/ 
// para END

/* para
		'_' : "If the pulse after ignition is spent putting flammables out, no further damage occurs. In general exposure to a fire source indicates exposure for a full pulse, therefore standing in a bonfire might hurt a character but simply jumping through one might not. This table should be used as a guide to how much damage exposure to a particular fire source might cause.",
*/ 
// para END

Tables : {
	"Damage by Burning" : {
		'title' : "Damage by Burning",
		'cols' : "2",
/* modifier @mod
		'_' : "Clothing alight after passage through a fire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Standing in campfire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Standing in a one Hex bonfire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Very large bonfire, house fire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Raging forest fire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Immersion in boiling water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Immersion in boiling oil",
*/ 
// modifier END

/* modifier @mod
		'_' : "Immersion in molten metal or lava",
*/ 
// modifier END

/* modifier @mod
		'_' : "Sauron's forge",
*/ 
// modifier END

	},
},
// subsubsection END

// subsection END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Adept is in light mist, fog, or rain, or is soaking wet",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is in heavy fog, or rain, or is partially immersed in water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is almost totally immersed in water",
*/ 
// modifier END

// modifiers END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Adept is within 30 feet of large campfire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is within 30 feet of bonfire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is in contact with small campfire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is in contact with large campfire",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is in contact with bonfire",
*/ 
// modifier END

// modifiers END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Adept is in a hot, dry region desert",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Infravision",
		'abbr' : "1",
		'multiple' : "75",
		'resist' : "None",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* effects
		'_' : "
      The Adept is able to see heat sources as if they emit normal light and target them (e.g. with weapons or spells) in the absence of visible light. It works best in relative darkness, since it is easily over-powered by visible light.
      ",
*/ 
/* para
		'_' : "Within range low level heat sources (such as living bodies) can be seen. At double range medium level sources (such as camp fires) are visible and high level heat sources may be visible at any range.",
*/ 
// para END

/* para
		'_' : "This talent can sometimes penetrate where normal vision cannot. At half normal range the Adept can see heat sources which are warmer than the obscurement, eg. living entities through mist or light bushes. It may also possible to detect the residual heat of a source which has recently been moved or extinguished.",
*/ 
// para END

/* para
		'_' : "The Adept has a base chance of ",
		'_' : " - 1 / 10 feet between the Adept and the heat source (after the first 10) of gaining additional information about a particular heat source. They may:",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

/* enumerate
*/ 
/* item
		'_' : "Determine the relative temperature of the heat source.",
*/ 
// item END

/* item
		'_' : "Identify the general type of heat source. Only those heat sources that the Adept has previously encountered may be identified with this talent. At higher ranks familiar individuals may identified.",
*/ 
// item END

/* item
		'_' : "
          Determine if the heat radiated by source is being generated by magic,(e.g. ) the Adept is able to distinguish between normal and magical fire. (Note only fire College infravision has this ability).
          ",
*/ 
/* para
		'_' : "The Adept may re-attempt any of these abilities after a period of ",
		'_' : " pulses has elapsed or if the Adept is 20 feet closer to the target.",
*/ 
/* rk @base, @dec
*/ 
// rk END

// para END

// item END

// enumerate END

// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Pyrogenisis",
		'abbr' : "2",
		'multiple' : "75",
		'resist' : "Passive",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
		'_' : "- 1 / 5 feet separating the Adept from the target (after the first 5 feet)",
*/ 
// basechance END

/* effects
		'_' : "The Adept may cause to burst into flame a single mass of dry, flammable material weighing up to ",
		'_' : " ounces. Once alight it will burn normally and may be extinguished by either mundane or magical means. Flammable materials are defined as wood, paper, cloth etc, but not flesh, except that Pyrogenisis may be used to cremate insects and small creatures within the maximum weight restrictions. This talent cannot be used on possessions. Utilising this talent requires a pass action, and is obvious to observers.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'G-1' : {
		'title' : "Bolt of Fire",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "200",
		'resist' : "Passive",
		'storage' : "Ward, Investment, Magical Trap",
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
		'_' : "Entity, Object, Area",
*/ 
// target END

/* effects
		'_' : "The Adept causes a bolt of Fire to streak from their hand towards anywhere in range. The first entity or object the bolt hits in its path must resist or suffer ",
		'_' : " damage. If the bolt does not hit anything it will dissipate at the end of its range. At Rank 20 the Adept may delay releasing the bolt for a pulse if they should choose.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-2' : {
		'title' : "Extinguish Fire Spell",
		'type' : "G",
		'abbr' : "2",
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
		'_' : "Volume",
*/ 
// target END

/* effects
		'_' : "When successfully cast, this spell will extinguish all fire in a ",
		'_' : "foot sphere. All the volume affected must be within range of the spell. If the range doubled or tripled the volume may likewise be increased.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Fire Armour",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Touch",
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
		'_' : "Object, Entity",
*/ 
// target END

/* effects
		'_' : "This spell protects the target against damage by fire for ",
		'_' : " points of protection. Protection is ablative and when the damage the spell may absorb is exceeded, the spell is dissapated with any excess damage applied to the target. Double and triple effects may apply to duration or degree of protection. At Rank 20 the spell confers 100 points of protection.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Firelight",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "75",
		'resist' : "Passive",
		'storage' : "Investment",
/* range
		'_' : "Touch",
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
		'_' : "Object, Point",
*/ 
// target END

/* effects
		'_' : "The Adept creates a source of light emanating in all directions from an object or point touched by them. At ranks 0 to 5 the light emitted is equivalent to that of a torch, at ranks 6 to 10 that of a small campfire, at ranks 11 to 15 a large campfire, and at ranks 16 to 20 a bonfire. The light emitted will have the appearance of firelight of the appropriate strength. It is magical light, and will cast poor contrast shadows.",
*/ 
// effects END

	},
  
	'G-5' : {
		'title' : "Fireproofing",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Potion, Investment",
/* range
		'_' : "Touch",
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
		'_' : "Entity, Object",
*/ 
// target END

/* effects
		'_' : "The spell protects the target from all non-magical fire and heat effects up to the heat equivalent of a bonfire. An entity or object is also protected against smoke effects (including smoke inhalation), hypothermia and sunstroke.",
*/ 
// effects END

	},
  
	'G-6' : {
		'title' : "Increase Temperature",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "100",
		'resist' : "Passive",
		'storage' : "Investment",
/* range
		'_' : "Touch",
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
		'_' : "Volume, Object",
*/ 
// target END

/* effects
		'_' : "
      The Adept must remain in contact with the target for heating to occur. When the spell ends the target will cool normally.
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "
          Duration: ",
		'_' : "hour
          ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "The Adept may cause the temperature of a closed contiguous volume of gas (such as air) to increase. The volume affected is equal to ",
		'_' : " cubic feet. The temperature can be increased by up to ",
		'_' : " degrees C. At Rank 20 the volume that can be affected by Increase Temperature is doubled",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @inc
*/ 
// rk END

// para END

// item END

/* item @title
		'_' : "
          Duration: ",
		'_' : "minutes
          ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "The Adept may heat ",
		'_' : "lb of solid material up to ",
		'_' : " degrees C. The Adept may choose any combination of temperature increase increment and mass increment to a total of the Adept's rank. The temperature increase takes 10 seconds / 100 degrees / pound mass. At Rank 20 any metal item within the weight limit of the Adept can be reduced to molten slag in as little as 10 seconds (resistance roll is applicable).",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// para END

// item END

/* item @title
		'_' : "
          Duration: ",
		'_' : "minutes
          ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "The Adept may heat ",
		'_' : " pints of liquid up to ",
		'_' : " degrees C. They may choose any combination of temperature increase increment and mass increment to a total of the Adept's rank. The temperature increase takes 10 seconds / 10 degrees / pint. The volume of material that may be affected is increased by 6 times at Rank 20.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// para END

// item END

// description END

Tables : {
	"Useful Temperatures" : {
		'title' : "Useful Temperatures",
		'cols' : "2",
/* row
*/ 
/* cell
		'_' : "100",
*/ 
// cell END

/* cell
		'_' : "Boiling Water",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "113",
*/ 
// cell END

/* cell
		'_' : "Molten Sulphur",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "200",
*/ 
// cell END

/* cell
		'_' : "Burning paper and meths",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "232",
*/ 
// cell END

/* cell
		'_' : "Tin melts",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "300",
*/ 
// cell END

/* cell
		'_' : "Boiling oil",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "327",
*/ 
// cell END

/* cell
		'_' : "Lead melts",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "419",
*/ 
// cell END

/* cell
		'_' : "Molten zinc",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "800",
*/ 
// cell END

/* cell
		'_' : "Molten salt",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "1000",
*/ 
// cell END

/* cell
		'_' : "Silver melts",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "1053",
*/ 
// cell END

/* cell
		'_' : "Gold melts",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "1083",
*/ 
// cell END

/* cell
		'_' : "Bronze and copper armour and weapons melt",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "1600",
*/ 
// cell END

/* cell
		'_' : "Molten iron",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "1800",
*/ 
// cell END

/* cell
		'_' : "Sand melts",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "4000",
*/ 
// cell END

/* cell
		'_' : "Molten graphite",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : ">4000",
*/ 
// cell END

/* cell
		'_' : "Sauron's jewellery",
*/ 
// cell END

// row END

	},
},
// effects END

	},
  
	'G-7' : {
		'title' : "Slow Fire",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "This spell increases the duration that a wood, lamp or oil fire will burn for by ",
		'_' : " hours. Light remains constant while the spell is in effect but heat from the fire source is halved. This spell may be used to slow the effects of small fires or to ensure a fire lasts for a considerable period of time.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-8' : {
		'title' : "Smoke Creation",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "75",
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
		'_' : "The Adept may create a volume of smoke equal to ",
		'_' : "cubic feet. This volume must be closed and contiguous, and has a minimum thickness of 5 feet. The density of the smoke may vary from light vapours at Rank 0 to thick, roiling smoke at Rank 20. The Adept may choose the density of the smoke when casting. The smoke produced reduces visual perception check multiplier by ",
		'_' : ". The effective Rank of the spell will be decreased by 1 Rank per 10 miles/hour of wind (minimum Rank 0) in the target volume. Below rank 10 the smoke created by this spell is completely transparent to infravision.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @full, @min
*/ 
// rk END

// effects END

	},
  
	'S-1' : {
		'title' : "Cleansing Flame Spell",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "300",
		'resist' : "Special",
		'storage' : "Potion, Ward, Investment",
/* range @base, @inc
		'_' : "above 10feet",
*/ 
// range END

/* duration @base, @dec
		'_' : "seconds",
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
		'_' : "The target is wreathed in yellowy green flames causing hideous suffering, yet curing the target of the effects of natural poisons (acts as Rank / 2 vs synthetic poison), venoms, fevers and diseases. As the foulness is burnt away, the flames change colour until they become silvery white. While cleansing takes place any ongoing harm is halted. At the end of the duration, the target is cured and their possessions are cleaned to a high polish. During the cleansing all the target's Strike Chances, Defence and Cast Chances are reduced by ",
		'_' : ". This spell only affects willing targets. At Rank 20 this spell also cures the effects of Malignant Flames. This spell can also be used to cure burns, including third degree burns but scaring from burns are not affected.",
*/ 
/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Dragon Flames",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "500",
		'resist' : "Passive",
		'storage' : "Investment",
/* range
		'_' : "Special",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The Adept may breath magical fire like a Dragon causing D",
		'_' : " damage to entities within the area of effect. The area of effect is a cone issuing from the Adepts mouth and is ",
		'_' : "feet long, and ",
		'_' : " wide at end farthest from the Adept. If an entity resists the damage is halved, unless they are more than half immersed in water (eg. swimming) where they take no damage. Dragon Flames are analogous to an instantaneous flash of heat, but there are no over-pressure or explosive effects.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc, @per
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Fire Arc",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "250",
		'resist' : "Passive",
		'storage' : "Potion, Investment",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may transform ",
		'_' : " entities into a bolt of fire that flashes to any unobstructed point in line of sight up to ",
		'_' : " feet away. The bolt must land within 5 feet of a potentially flammable substance, an entity or a solid surface. When the bolt arrives, it bursts into flame causing D damage to all entities within 1 hex. At Rank 20 the target may instantaneously return to the point of origin of the spell at the end of the next pulse should they so desire. Double and triple effects apply to range only. This spell affects only willing targets and will not work underwater. Any barriers, wards etc that are passed over affect the targets as if crossed normally.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-4' : {
		'title' : "Fireball",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "500",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "
      The Adept conjures a ball of fire 1 foot in diameter which rushes to a point in line of sight of the Adept, and explodes in a radius of ",
		'_' : " feet. Every thing in this radius must resist or suffer D",
		'_' : " damage. If an entity resists the damage is halved, unless they are more than half immersed in water (e.g. swimming) where they take no damage. The spell may set flammable items afire when it bursts. Hard cover (e.g. walls, parapets, but not shields) reduces damage to half before resistance. In some instances,(e.g. ) a character wading through water, resistance may negate all damage. The fireball is analogous to an instantaneous flash of heat and are no over-pressure or explosive effects. A fireball may be detonated prematurely by the imposition of barriers in its line of flight.
      ",
*/ 
/* rk @base, @inc, @per
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* para
		'_' : "At Rank 20 this spell may be cast with a detonation delay of up to 10 pulses. This extends the casting time 4 pulses. A delayed blast fireball manifests itself as a 1 foot wide floating sphere of fire until detonation occurs. If a second fireball is cast within the proposed volume of effect of the first, both are detonated.",
*/ 
// para END

// effects END

	},
  
	'S-5' : {
		'title' : "Heat Shield",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Touch",
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
		'_' : "Object, Entity",
*/ 
// target END

/* effects
		'_' : "This spell protects the target against damage by cold or ice for ",
		'_' : " points of protection. Protection is ablative and when the damage the spell may absorb is exceeded, the spell is dissapated with any excess damage applied to the target. Double and triple effects may apply to duration or degree of protection.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-6' : {
		'title' : "Hellfire",
		'type' : "S",
		'abbr' : "6",
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
		'_' : " targets. The target's Magical Resistance is reduced by ",
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
  
	'S-7' : {
		'title' : "Immolation",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Self",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept gains the grace and form of a dancing flame, without in anyway altering their physical nature, but increasing their defence by ",
		'_' : ". Any entity that is within 5 feet must resist or take ",
		'_' : " Fire damage per pulse. The target will glow with the same degree of brightness as a Firelight spell 5 Ranks lower, (minimum 1). The target appears to be a humanoid shape composed of flame. If the target hides in a fire, the target may only be detected by witchsight or by infravision..",
*/ 
/* rk @base, @inc, @per
*/ 
// rk END

/* rk @per
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Malignant Flames",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "550",
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
		'_' : "The target is swathed in flames that are only visible to the victim causing D",
		'_' : " damage. If the spell is at rank 5 or higher the target may be cursed with the loss of ",
		'_' : " points from one characteristic or statistic, as chosen by the Adept. A characteristic may not be reduced below 1 as a result of this spell. This minor curse will last ",
		'_' : " days.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-9' : {
		'title' : "Pyrotechnics",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "200",
		'resist' : "Passive",
		'storage' : "Investment, Magical Trap",
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
		'_' : "Volume",
*/ 
// target END

/* effects
		'_' : "This spell may be mistaken for a Fireball. The Adept conjures a ball of fire 1 foot in diameter which rushes to a point in line of sight of the Adept, and bursts in a radius of ",
		'_' : " feet with an enormous flash of light and fireworks. Any entity in this radius who can see must resist or they are dazzled by the flash for ",
		'_' : " pulses. Dazzled entities have their strike chances, cast chances and perception checks reduced by ",
		'_' : ". Entities without normal vision (e.g. Undead) are unaffected by Pyrotechnics.",
*/ 
/* rk @base, @inc, @per
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-10' : {
		'title' : "Speak to Fire Creatures",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "75",
		'resist' : "None",
		'storage' : "Potion",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "This spell allows the Adept to communicate with all fire creatures within range. This communication is at an effective language rank of ",
		'_' : ". For the purposes of this spell, fire creatures are: Elementals, Salamanders, Efreets, desert creatures and creatures created using a Binding Fire Ritual.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-11' : {
		'title' : "Summoning Salamander",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Magical Trap",
/* range
		'_' : "Unlimited",
*/ 
// range END

/* duration
		'_' : "Until dispelled",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Salamander",
*/ 
// target END

/* effects
		'_' : "The Adept may summon a salamander which will then attempt to set afire anything flammable that it can reach. A Salamander may only be summoned to an environment it can survive in (e.g. a large fire source, volcano, in a desert). The Adept has no control over the salamander. Dispelling the spell returns the salamander to its origin.",
*/ 
// effects END

	},
  
	'S-12' : {
		'title' : "Weapon of Flames",
		'type' : "S",
		'abbr' : "12",
		'multiple' : "250",
		'resist' : "None",
		'storage' : "Investment",
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
		'_' : "Weapon",
*/ 
// target END

/* effects
		'_' : "The Adept may cause any weapon to burst into flame but without causing damage to the weapon or its wielder. The weapon has its Strike Chance increased by ",
		'_' : ", damage increased by ",
		'_' : ". When the weapon is used against a entity which are creatures of cold or water or against the Undead, damage increases to ",
		'_' : ". A missile may also be the target (e.g. arrow), but not missile weapons. At rank 11 any hand-held weapon may be created from fire. This weapon has normal characteristic requirements but no weight.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @per
*/ 
// rk END

/* rk
*/ 
// rk END

// effects END

	},
  
	'S-13' : {
		'title' : "Wall of Fire",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "250",
		'resist' : "Passive",
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
		'_' : "The Adept may create a 5 foot high x 20 foot long x 1 foot thick wall of flames, or a 5 foot high x 1 foot thick circle of flames with a 5 foot radius, or a pillar fire 15 feet high with a 2 foot radius. The Adept can increase any single dimension by ",
		'_' : ". The wall must be anchored to a surface and cannot easily be seen through. Any object or entity that passes through the wall must resist or suffer D",
		'_' : " damage. If an entity resists the damage is halved. The wall will provide light equivalent to a large campfire. At Rank 20 the Adept may double the damage of a Wall of Fire by halving its duration.",
*/ 
/* rk
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Wildfires",
		'type' : "S",
		'abbr' : "14",
		'multiple' : "250",
		'resist' : "Active, Passive",
		'storage' : "Potion, Investment",
/* range
		'_' : "Touch",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      This spell imbues an entity with the speed and essence of a forest fire. The target may run without tiring at a speed of ",
		'_' : " miles per hour over any solid surface. Additionally they may ``run'' across any substance that would ordinarily support fire (e.g. across tree tops, up a wooden wall, or across oil). Like a fire, momentum effects do not apply to the target: they may take corners at impossible angles, climb a flammable surface impossibly quickly, or stop instantly in place. The target may leap a gap (as a fire leaps a firebreak) a horizontal distance of ",
		'_' : " feet or a vertical distance of 1/",
		'_' : "PS feet. The target will leave charred footprints behind them but will not normally ignite surfaces they cross.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* para
		'_' : "An entity under Wildfires is moving too quickly to undertake normal tactical combat or to otherwise interact with other entities. If they wish to engage in melee they must dissipate the spell.",
*/ 
// para END

/* para
		'_' : "The target must keep moving at least two hexes in any direction per pulse. If they stop the spell is disippated. When the spell ends the target stops instantly in place.",
*/ 
// para END

/* para
		'_' : "At Rank 20 the target may extend the duration of the spell by suffering 1 EN damage / 10 additional minutes.",
*/ 
// para END

// effects END

	},
  
	'Q-1' : {
		'title' : "Binding Fire",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "500",
		'resist' : "None",
		'actions' : "Chanting and dancing",
		'concentration' : "Standard",
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
		'_' : "Fire",
*/ 
// target END

/* material
		'_' : "Fire source + Endurance (optional)",
*/ 
// material END

/* effects
		'_' : "
      The Adept gains complete control over a fire source as large as ",
		'_' : " cubic feet. This fire may then be moulded and shaped as desired but with a minimum of one foot thickness in any dimension. Regardless of the shape created, the fire retains its normal heat and damaging properties. Damage is as per a large bonfire or [D - 3] if the entity is within one hex. Bound fire is unaffected by normal rains and winds short of hurricane conditions, but may be extinguished by a dousing of water of similar or greater volume than the fire.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "If the Adept sacrifices 2 points of Endurance from a sentient as part of the ritual, the duration of the Ritual of Binding Fire is enhanced to ",
		'_' : "year.",
*/ 
/* rk @base
*/ 
// rk END

// para END

/* para
		'_' : "If the Adept sacrifices 4 points of Endurance from a sentient creature the duration of the Ritual of Binding Fire is permanent. This Fire is bound to a specific non-movable item from which the fire appears to issue (e.g. a ruby set in a wall, a line of runes on a floor etc). Permanent Bound Fire can be suppressed for [21 - Rank] minutes by a dousing of water of similar or greater volume than the fire, attack with magical cold for more damage than the damage rating of the fire etc. To disippate a permanent Bound Fire the object to which it is bound must be broken, destroyed or seriously defaced.",
*/ 
// para END

/* para
		'_' : "The Adept may instil basic intelligence in a Bound Fire if desired and give the entity thus created simple commands.",
*/ 
// para END

// effects END

	},
  
	'R-1' : {
		'title' : "Create Drought",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "200",
		'resist' : "None",
		'actions' : "Chanting and dancing",
		'concentration' : "Standard",
/* range @base, @inc
		'_' : "miles",
*/ 
// range END

/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Area",
*/ 
// target END

/* material
		'_' : "Fire source",
*/ 
// material END

/* effects
		'_' : "This ritual increases temperature in the target area by ",
		'_' : " degrees C, slowly building up at 2 degrees C per hour. This may impede rainfall, kills plants, dry up wells, ponds, etc and ruin crops if repeated regularly. In cold or icy areas climes it may make an area tolerable for life for a time or result in standing fogs if the difference between climes is too extreme.",
*/ 
/* rk @inc
*/ 
// rk END

// effects END

	},
  
	'R-2' : {
		'title' : "Flame Sight",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Staring into flames",
		'concentration' : "Standard",
/* range
		'_' : "5 feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "minute",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* material
		'_' : "Small fire",
*/ 
// material END

/* effects
		'_' : "
      The Adept must sit next to a fire and stare into the flames for half an hour. They may then attempt one of three visions:
      ",
*/ 
/* itemize
*/ 
/* item
		'_' : "A view as if the Adept was looking out of a fire within 1/2 a mile (+ 1/4 mile Rank). The Adept may choose to look out of a specific fire, otherwise the fire is randomly determined from all those in range. If no fires are within range the Adept will see nothing. They may move their viewpoint within the fire so as to see in any direction. There is no way to perceive that a fire is looked through by this ritual.",
*/ 
// item END

/* item
		'_' : "A precognitive vision which is controlled by the GM. The detail of this vision and the amount of information obtained increases with rank.",
*/ 
// item END

/* item
		'_' : "If the Adept chooses to sacrifice an object (which is destroyed) in the fire, they gain a vision relevant to that object's past. This version of the ritual can only be performed on flammable objects.",
*/ 
// item END

// itemize END

// effects END

	},
  
	'R-3' : {
		'title' : "Ritual of Summoning a Lesser Efreeti",
		'type' : "R",
		'abbr' : "3",
		'multiple' : "200",
		'resist' : "None",
		'casttime' : "Special",
		'concentration' : "Standard",
/* range
		'_' : "5 feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The Adept may summon a Lesser Efreeti to act as a steed for a themselves. The Lesser Efreeti will obey all its rider 's commands while it is mounted. If the rider is not mounted or is out of its presence then it will only follow simple passive commands (e.g. wait here, go there). At Rank 14 or higher it will obey commands which move it away from the rider (e.g. go attack people behind the hill, go and pick up Bob).
      ",
*/ 
/* para
		'_' : "This ritual will take ",
		'_' : " minutes to perform.",
*/ 
/* rk @base, @dec, @min
*/ 
// rk END

// para END

/* para
		'_' : "Its charactertics and statistics are based on either the Adept or their rank in the ritual.",
*/ 
// para END

Tables : {
	"Lesser Efreeti Statistics" : {
		'title' : "Lesser Efreeti Statistics",
		'cols' : "4",
/* row
*/ 
/* head
		'_' : "PS",
*/ 
// head END

/* cell
*/ 
/* rk @base, @inc
*/ 
// rk END

// cell END

/* head
		'_' : "MD",
*/ 
// head END

/* cell
		'_' : "Adept",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "EN",
*/ 
// head END

/* cell
*/ 
/* rk @base
*/ 
// rk END

// cell END

/* head
		'_' : "AG",
*/ 
// head END

/* cell
		'_' : "Adept",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "FT",
*/ 
// head END

/* cell
*/ 
/* rk @base, @inc
*/ 
// rk END

// cell END

/* head
		'_' : "WP",
*/ 
// head END

/* cell
		'_' : "Adept",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "PC",
*/ 
// head END

/* cell
		'_' : "Adept",
*/ 
// cell END

/* head
		'_' : "MA",
*/ 
// head END

/* cell
		'_' : "Adept",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "NA",
*/ 
// head END

/* cell @span
*/ 
/* rk @base, @per
*/ 
// rk END

// cell END

// row END

/* row
*/ 
/* head
		'_' : "DEF",
*/ 
// head END

/* cell @span
		'_' : "WP + Ritual BC / 2",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "TMR",
*/ 
// head END

/* cell @span
		'_' : "Walking = 5 (+ Rank / 4); Flying 8 (+ Rank / 3)",
*/ 
// cell END

// row END

/* description
*/ 
/* item @title
		'_' : "Movement Rate = ",
		'_' : " miles per hour",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

/* item @title
		'_' : " hexes",
*/ 
/* rk @base, @per
*/ 
// rk END

// item END

/* item @title
		'_' : "The Lesser Efreeti has three physical attacks, two claws and a bite. These have a base chance of 40% and do ",
		'_' : " damage. It also has a 65% chance of igniting in battle with flames extending in a 5 foot radius. Entities within the radius, except for the rider, must resist or suffer ",
		'_' : " damage. Entities that resist suffer half damage.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// item END

/* item @title
		'_' : "The Lesser Efreeti is immune to damage from fire but takes double damage from ice or water and magic resistance to these attacks is reduced by 10%. It cannot be banished while the rider is mounted.",
*/ 
// item END

// description END

	},
},
/* para
		'_' : "At Rank 20 the ritual has extra benefits:",
*/ 
// para END

/* itemize
*/ 
/* item
		'_' : "the adept may nominate another entity as the rider.",
*/ 
// item END

/* item
		'_' : "the Lesser Efreeti has Strength and Fatigue of 80 and Endurance of 60.",
*/ 
// item END

/* item
		'_' : "NA is 8 (+ WP / 4).",
*/ 
// item END

/* item
		'_' : "damage from claws and bite is [D + 16].",
*/ 
// item END

/* item
		'_' : "the ritual's duration is 24 hours.",
*/ 
// item END

// itemize END

/* para
		'_' : "This ritual may double or triple duration and may backfire. It may be invested with a material cost of 50,000 silver pieces per charge.",
*/ 
// para END

// effects END

	},
  
	'R-4' : {
		'title' : "Summon Fire Elemental",
		'type' : "R",
		'abbr' : "4",
		'multiple' : "450",
		'resist' : "None",
		'actions' : "Concentration",
		'concentration' : "Standard",
/* range
		'_' : "20 feet",
*/ 
// range END

/* duration @conc
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Fire Elemental",
*/ 
// target END

/* material
		'_' : "Large fire",
*/ 
// material END

/* effects
		'_' : "
      The Adept may summon a Fire Elemental with a combined endurance and fatigue of ",
		'_' : " which appears within the fire. The Elemental is under the Adept's control but strongly resents being summoned.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "If the ritual backfires the elemental arrives uncontrolled and will immediately attempt to kill the summoner",
*/ 
// para END

/* para
		'_' : "The Elemental is returned to its own dimension if the summoner's concentration is broken, it is banished, or the Adept casts a Fire Special Counterspell.",
*/ 
// para END

// effects END

	},
  
	},
  
};
  



// == Dq -  College Air ==



dq.AI = {

		'title' : "Air Magics",

		'version' : "2.1",

		'abbr' : "AI",

		'requiredMA' : "13",

		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",

/* subsection @title

*/

/* description

*/

/* item @title

		'_' : "is defined as being surrounded by walls or earth in a windowless area of less than 100 feet in any dimension where there is no direct and immediate communication with the air outside.",

*/

// item END



/* item @title

		'_' : "is defined as being in a cave or building or similar walled or earth enclosed area of greater than 100 feet in its smallest dimension, or in a smaller area, but having means of direct contact with the air outside, such as through an open window or portal.",

*/

// item END



/* item @title

		'_' : "is defined as being within ten minutes walking distance of the peak. Mountains have an enormous impact on the weather patterns.",

*/

// item END



// description END



// subsection END



/* subsection @title

*/

/* para

		'_' : "Adepts of the College of Air Magics may only practise their arts if they are in contact with the air. They may never practise Air magics while underwater or in a vacuum. They may never summon avians into an environment where they could not survive.",

*/

// para END



// subsection END



/* modifiers @group, @onlyOne

*/

/* modifier @mod

		'_' : "Caster is underground or totally enclosed",

*/

// modifier END



/* modifier @mod

		'_' : "Caster is only partially enclosed",

*/

// modifier END



/* modifier @mod

		'_' : "Caster is flying, or otherwise not in contact with any liquid or solid surface",

*/

// modifier END



/* modifier @mod

		'_' : "Caster is standing in natural winds of 40 mph or greater",

*/

// modifier END



/* modifier @mod

		'_' : "Caster is more than 100' above ground flying or falling etc.",

*/

// modifier END



/* modifier @mod

		'_' : "Caster is above all landmarks within 10 miles and at least 500' above the ground flying or falling etc.",

*/

// modifier END



/* modifier @mod

		'_' : "Caster is on top of a mountain",

*/

// modifier END



// modifiers END



	'T-1' : {

		'type' : "T",

		'title' : "Aerial Affinity",

		'abbr' : "1",

		'multiple' : "75",

/* effects

		'_' : "

      Due to their close association with the environment of air, Air Mages have the following abilities:

      ",

*/

/* enumerate

*/

/* item

		'_' : "The Adept can modify any flying or landing rolls by ",

		'_' : " steps better.(e.g. The Air Mage comes in for a landing and the GM tells the player that they need to make a 3 x AG landing roll, but because the Air Mage has this talent at rank 12 they need only make a 5 x AG landing roll.)",

*/

/* rk @full

*/

// rk END



// item END



/* item

		'_' : "They will not suffer from the effects of high altitude. This talent only works up to a height of ",

		'_' : "feet.(e.g. Hypothermia (at high altitudes), flying sickness, altitude sickness.)",

*/

/* rk @inc

*/

// rk END



// item END



/* item

		'_' : "General knowledge relating to being airborne.(e.g. Safe velocities, altitude, down drafts, flight hazards.)",

*/

// item END



/* item

		'_' : "Due to their close association with the environment, the Adept can modify the Force downwards and Gauge upwards on the Weather Scale Table by ",

		'_' : ", for themselves.",

*/

/* rk @per

*/

// rk END



// item END



// enumerate END



// effects END



	},



	'T-2' : {

		'type' : "T",

		'title' : "Detect Fumes",

		'abbr' : "2",

		'multiple' : "100",

/* range @base, @inc

		'_' : "feet",

*/

// range END



/* effects

		'_' : "The Adept may detect the presence of fumes and vapours and has a chance equal to ",

		'_' : " of accurately identifying each smell present. The Adept must spend a pulse sniffing the air while applying this talent. If the Adept's sense of smell is not operating, for whatever reason, then this talent may not be used. This talent may only be attempted once per set of smells. When new smells are introduced, the Adept may be able to identify these new smells by attempting this talent again, but any previously unidentified smells will remain so.",

*/

/* rk @base, @inc

*/

// rk END



// effects END



	},



	'T-3' : {

		'type' : "T",

		'title' : "Predict Weather",

		'abbr' : "3",

		'multiple' : "50",

/* basechance @base, @inc

*/

// basechance END



/* effects

		'_' : "

      The Adept may predict the local weather over the next ",

		'_' : " days. The Adept must be outside or able to see the sky to use this ability. If the Adept has resided in an area for a length of time they will be more familiar with the local weather. If they have lived in the area for over one month they will receive a bonus for predicting weather in the season they are familiar with. If they have lived in the area for over one year they will receive a bonus in any season.

      ",

*/

/* rk @base, @per

*/

// rk END



Tables : {

	"Predict Weather Effects" : {

		'title' : "Predict Weather Effects",

		'cols' : "3",

/* row

*/

/* head

		'_' : "Time",

*/

// head END



/* head

		'_' : "Familiarity",

*/

// head END



/* head

		'_' : "Bonus",

*/

// head END



// row END



/* row

*/

/* cell

		'_' : "1 month",

*/

// cell END



/* cell

		'_' : "Current season",

*/

// cell END



/* cell

		'_' : "+ 5% *",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "1 year",

*/

// cell END



/* cell

		'_' : "Complete",

*/

// cell END



/* cell

		'_' : "+10% *",

*/

// cell END



// row END



	},

},

/* para @title

		'_' : "only one modifier applies.",

*/

// para END



// effects END



	},



	'G-1' : {

		'title' : "Calm",

		'type' : "G",

		'abbr' : "1",

		'multiple' : "100",

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

		'_' : "Volume",

*/

// target END



/* effects

		'_' : "The Adept halts all gross or extreme non-magical air movement within a volume of ",

		'_' : "feet cubed. The entire volume must be within the Adept's range. The air within the volume will stay fresh and will slowly intermingle with air outside the volume. Once cast the volume may not be moved.",

*/

/* rk @base, @inc

*/

// rk END



// effects END



	},



	'G-2' : {

		'title' : "Feather Falling",

		'type' : "G",

		'abbr' : "2",

		'multiple' : "200",

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

		'_' : "Entity",

*/

// target END



/* effects

		'_' : "This spell causes the target to drift gently downwards if they fall more than 5 feet (should the target be falling faster than 5 feet per pulse they will undergo a magical deceleration over one pulse). The target will be subject to wind effects while drifting downwards.",

*/

// effects END



	},



	'G-3' : {

		'title' : "Mage Wind",

		'type' : "G",

		'abbr' : "3",

		'multiple' : "125",

		'resist' : "None",

		'storage' : "Investment, Ward, Magical Trap",

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

		'_' : "The Adept causes 1 wind-driven object to be affected by a magical wind with an effective speed of up to ",

		'_' : "miles per hour. Only the object targeted is affected by the magical wind. By concentrating the Adept may alter the direction and strength of the Mage wind.",

*/

/* rk @base

*/

// rk END



// effects END



	},



	'G-4' : {

		'title' : "Mist",

		'type' : "G",

		'abbr' : "4",

		'multiple' : "100",

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

		'_' : "Volume",

*/

// target END



/* effects

		'_' : "

      The Adept conjures ",

		'_' : "cubic feet of mist of any shape entirely within the Adept's range. The mist must be at least 1 foot in any dimension and may have detail no finer than 1 foot in size. The visibility in this mist is normally 30 feet (6 hexes). If the wind is stronger than a light breeze, the Adept must actively concentrate to maintain the mist. Otherwise, while the Adept actively concentrates, the mist may be changed in one of the following ways:

      ",

*/

/* rk @base, @inc

*/

// rk END



/* enumerate

*/

/* item

		'_' : "The Adept may move the mist up to 1 hex/pulse so long as it remains within range.",

*/

// item END



/* item

		'_' : "The Adept may change the visibility within the mist down to a minimum visibility of ",

		'_' : " hexes.",

*/

/* rk @base, @dec, @full

*/

// rk END



// item END



// enumerate END



// effects END



	},



	'G-5' : {

		'title' : "Speak to Avians",

		'type' : "G",

		'abbr' : "5",

		'multiple' : "75",

		'resist' : "None",

		'storage' : "Investment, Magical Trap, Potion",

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

		'_' : "Self",

*/

// target END



/* effects

		'_' : "The spell allows the target to communicate with any one type of aerial life within range of the spell. This communication usually consists of sound and gesture. If the Adept wishes to converse with several different types of aerial life concurrently then they may cast this spell multiple times.",

*/

// effects END



	},



	'G-6' : {

		'title' : "Storm Calling",

		'type' : "G",

		'abbr' : "6",

		'multiple' : "200",

		'resist' : "None",

		'storage' : "Investment, Magical Trap",

/* range

		'_' : "Special",

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

		'_' : "The Adept may summon any storm front which may exist anywhere in sight. If no front can be seen, the spell can still be cast but the Base Chance is modified by -20. Generally, a storm front can be seen for 20 to 30 miles. Upon reaching the spot occupied by the Adept at the time of casting, the storm front will slow and finally cease moving and begin to downpour (snow, rain, hail, sleet or whatever else the GM feels the clouds may contain). The storm front will take ",

		'_' : "minutes to arrive, minimum 1. Once the duration has lapsed the weather will gradually return to normal over a similar amount of time.",

*/

/* rk @base, @dec

*/

// rk END



// effects END



	},



	'G-7' : {

		'title' : "Summon Avians",

		'type' : "G",

		'abbr' : "7",

		'multiple' : "125",

		'resist' : "Active, Passive",

		'storage' : "Investment, Magical Trap",

/* range

		'_' : "5 miles",

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

		'_' : "Avians",

*/

// target END



/* effects

		'_' : "The Adept may summon ",

		'_' : "avian to their current location. The avians must be native to or present in the area and the Adept must specify the species (one per spell) that is being summoned. The Adept may summon a specific avian providing it is within line of sight (the species need not been known in this case). The avian will arrive by the shortest flight path and their initial reaction will be wary. The avians must have a clear flight path to the Adept and will spend up to 5 minutes attempting to reach the Adept. Note that not all avians will have a movement rate which will allow them to reach the Adept's location within this time. This spell may not be cast if the Adept is totally enclosed. If the avian being summoned is fantastical it gains a +20% to its base chance to resist this spell.",

*/

/* rk @min

*/

// rk END



// effects END



	},



	'G-8' : {

		'title' : "Vapour Breathing",

		'type' : "G",

		'abbr' : "8",

		'multiple' : "150",

		'resist' : "Active, Passive",

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

		'_' : "Entity",

*/

// target END



/* effects

		'_' : "The target can breathe any gas including otherwise poisonous vapours (e.g. Knockout Gas, Noxious Vapours etc). This spell will not enable the target to breathe in a vacuum or underwater. Also, this spell will not protect the target from any non-gaseous contents of the atmosphere,(e.g. ) Sleep Dust.",

*/

// effects END



	},



	'G-9' : {

		'title' : "Wind Whistle",

		'type' : "G",

		'abbr' : "9",

		'multiple' : "125",

		'resist' : "None",

		'storage' : "Investment, Potion",

/* range

		'_' : "Special",

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

		'_' : "Special",

*/

// target END



/* effects

		'_' : "

      The Adept is able to create a wind over an open space of up to ",

		'_' : "feet diameter centred on the Adept. Outside of this area, the wind will fade back to the prevailing wind over half again the distance. The wind will build up over ",

		'_' : "minutes and the Mage must choose at the time of casting which direction the wind will blow. The speed of the wind is determined by rolling a D100 roll as follows:

      ",

*/

/* rk @base, @inc

*/

// rk END



/* rk @base, @dec, @min

*/

// rk END



Tables : {

	"Wind Whistle Effects" : {

		'title' : "Wind Whistle Effects",

		'cols' : "3",

/* row

*/

/* head

		'_' : "Dice",

*/

// head END



/* head

		'_' : "Force",

*/

// head END



/* head

		'_' : "Speed (mph)",

*/

// head END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "5",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "4",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "3",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "2",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "3",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "4",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "5",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* span @from, @to

*/

// span END



/* cell

		'_' : "6",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



	},

},

/* para

		'_' : "The Adept can choose to modify the dice roll up or down by up to ",

		'_' : " points to determine the actual wind speed once the dice have been rolled. The effects of this spell override any existing wind effects including already existing Wind Whistle spells.",

*/

/* rk @inc

*/

// rk END



// para END



/* para

		'_' : "If the resulting wind is Force 5 or over, missile fire will be affected, reducing base chances by (wind speed/2)%.",

*/

// para END



// effects END



	},



	'S-1' : {

		'title' : "Air Blast",

		'type' : "S",

		'abbr' : "1",

		'multiple' : "200",

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

		'_' : "Entity, Object",

*/

// target END



/* effects

		'_' : "This spell projects a narrow and extremely strong blast of air at the target. The blast will impact either on the target or on the first obstruction blocking the path from the Adept to the target. If the target weighs less than ",

		'_' : "pounds they will be thrown back ",

		'_' : "feet. On landing the target suffers damage of ",

		'_' : " and must make a 1 times PS + AG check to remain standing. The target is thrown in an arc away from the Adept and the highest point of the arc equals ",

		'_' : " feet.",

*/

/* rk @base, @inc

*/

// rk END



/* rk @base, @inc, @full

*/

// rk END



/* rk @base, @full

*/

// rk END



/* rk @base

*/

// rk END



// effects END



	},



	'S-2' : {

		'title' : "Arrow Flight",

		'type' : "S",

		'abbr' : "2",

		'multiple' : "200",

		'resist' : "None",

		'storage' : "Investment",

/* range

		'_' : "5 feet",

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

		'_' : "Arrows or Quarrels",

*/

// target END



/* effects

		'_' : "The Adept can temporarily improve the flying quality of ",

		'_' : " arrows or quarrels. Anyone firing arrows or quarrels affected by this spell has their Base Chance increased by ",

		'_' : ". At rank 16+ the arrows are counted as magical for determining which entities may be harmed.",

*/

/* rk @base, @per

*/

// rk END



/* rk @base

*/

// rk END



// effects END



	},



	'S-3' : {

		'title' : "Avian Control",

		'type' : "S",

		'abbr' : "3",

		'multiple' : "200",

		'resist' : "Active, Passive",

		'storage' : "Investment, Potion",

/* range @base, @inc

		'_' : "feet",

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

		'_' : "Avian",

*/

// target END



/* effects

		'_' : "The Adept may control ",

		'_' : " avian within range unless the avian successfully resists. If the avian is fantastical, it gains +20% on its base chance to resist this spell. If the Adept fails to gain control or loses control, the avian will immediately attack the Adept. An avian which is still controlled when the spell duration expires, will flee the Adept's presence. The Adept may recast this spell before its duration has expired without breaking concentration. When the duration of the first casting expires the target gets another resistance check. The Adept may also choose to release an avian from their control before the spell's duration is up, whereupon it will flee as above. If the avian is sentient and is made to take an action that would endanger itself, another resistance check is made.",

*/

/* rk @base

*/

// rk END



// effects END



	},



	'S-4' : {

		'title' : "Barrier of Wind",

		'type' : "S",

		'abbr' : "4",

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

		'_' : "Entity",

*/

// target END



/* effects

		'_' : "This spell forms a swirling pattern of wind around the entity in all directions. Thrown and missile weapons passing through the barrier have a chance of being deflected from their course, to impact harmlessly elsewhere. The deflection adds ",

		'_' : " to defence against missiles. This spell provides a bonus of ",

		'_' : " in melee or close combat.",

*/

/* rk @base, @inc

*/

// rk END



/* rk @base

*/

// rk END



// effects END



	},



	'S-5' : {

		'title' : "Conjuring Air",

		'type' : "S",

		'abbr' : "5",

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

		'_' : "Volume",

*/

// target END



/* effects

		'_' : "The Adept may conjure anywhere within their range ",

		'_' : "cubic feet of sweet smelling breathable air in any shape or shapes of their choice. No dimension of the shape may be less than 1 foot. The volume of air will hold its shape versus any non solid intrusions for the full duration. At the end of the duration the volume will rapidly disperse into the surrounding area, mixing with whatever atmosphere was already there.",

*/

/* rk @base, @inc

*/

// rk END



// effects END



	},



	'S-6' : {

		'title' : "Flying",

		'type' : "S",

		'abbr' : "6",

		'multiple' : "250",

		'resist' : "Active, Passive",

		'storage' : "Investment, Potion",

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

		'_' : "Entity",

*/

// target END



/* effects

		'_' : "This spell enables the target to fly at a speed of ",

		'_' : "mph by walking winds and air currents. Initially it will take ",

		'_' : " minutes for the wind currents to arrive. After the wind currents have arrived the target can take off and land as many times as they desire, but to recall the winds to take off after landing will take [D + 2] pulses. When taking off, it takes one pulse to accelerate to full speed. If the target tries to land, it will take one pulse to slow to a standstill. The target can only travel into places where air currents or winds are possible. This will not normally occur inside buildings or tunnels.",

*/

/* rk @base

*/

// rk END



/* rk @base, @dec

*/

// rk END



// effects END



	},



	'S-7' : {

		'title' : "Gaseous Form",

		'type' : "S",

		'abbr' : "7",

		'multiple' : "300",

		'resist' : "Active, Passive",

		'storage' : "Potion, Investment, Magical Trap",

/* range

		'_' : "Self, touch at Rank 11+",

*/

// range END



/* duration @base, @inc, @per

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

		'_' : "When this spell is cast the target (and possessions) turn into a cloud of vapour, that appears as a heavy mist. The target may be affected by magic spells. Normal or silvered weapons do not harm the target, but magical weapons may. The target may not use any possessions such as weapons, nor may the target cast or trigger magic. Magical or Racial Talents may be used however. The target may move up to TMR 2 in any direction and pass through any opening that is not airtight. When the duration of the spell expires, the target will reform in the nearest hollow space large enough to accommodate the target's body.",

*/

// effects END



	},



	'S-8' : {

		'title' : "Gliding",

		'type' : "S",

		'abbr' : "8",

		'multiple' : "200",

		'resist' : "None",

		'storage' : "Investment, Potion",

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

		'_' : "Sentient Entity",

*/

// target END



/* effects

		'_' : "This spell enables the target to glide at an angle of approximately ",

		'_' : "feet horizontally for every foot of descent. The target's maximum forward speed will be approximately ",

		'_' : "feet / pulse and their minimum vertical speed (relative to the air around them) will be approximately ",

		'_' : "feet / pulse downwards. If the target is gliding in thermals or down-drafts, their actual rate of descent (or ascent) may vary. The actual rate of descent is up to the GM. The target must keep their arms (or equivalent) outstretched until landing or they will fall downwards, although the spell will resume if the target returns their arms to an outstretched position. The target flies with their body horizontal and may turn at a rate of ",

		'_' : "degrees / pulse while gliding. The spell will cause the target to automatically become vertical when within 5 feet of a horizontal surface. The target must then make flying roll when landing.",

*/

/* rk @base

*/

// rk END



/* rk @base

*/

// rk END



/* rk @base, @dec, @min

*/

// rk END



/* rk @base, @inc

*/

// rk END



// effects END



	},



	'S-9' : {

		'title' : "Knockout Gas",

		'type' : "S",

		'abbr' : "9",

		'multiple' : "450",

		'resist' : "Active, Passive",

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

		'_' : "This spell creates a heavy cloud of knockout gas that rises ",

		'_' : " feet above the ground. The area has a diameter of ",

		'_' : "feet. At ranks: 0 to 9 the cloud appears as a translucent mist (i.e. does not inhibit vision) and is pungent smelling; 10 to 15 the gas is invisible and pungent smelling; 16 and above the cloud becomes invisible and odourless. Any entity (including the Adept) within the gas must resist. If they fail to resist, they must roll under 2 x EN each pulse or fall unconscious (not asleep) while they remain within the gas. Any wind over 15 mph will disperse the gas in D-Force pulses. Once the gas is dispersed, the duration expires or a victim is removed from the area, any unconscious entities will recover in 1 pulse.",

*/

/* rk @base, @full

*/

// rk END



/* rk @base, @inc

*/

// rk END



// effects END



	},



	'S-10' : {

		'title' : "Lightning Bolt",

		'type' : "S",

		'abbr' : "10",

		'multiple' : "225",

		'resist' : "Active, Passive",

		'storage' : "Investment, Ward, Magical Trap",

/* range

		'_' : "60 feet",

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

		'_' : "Entity, Object",

*/

// target END



/* effects

		'_' : "The Adept may throw a single bolt of lightning 60 feet long from their fingertips. The bolt must extend the entire 60 feet and will deflect off stone until it reaches its full extent. All targets that are in the path of the bolt must resist or suffer ",

		'_' : " damage (save for half damage). In addition, any target who fails to resist is automatically stunned.",

*/

/* rk @base, @per

*/

// rk END



// effects END



	},



	'S-11' : {

		'title' : "Lightning Strike",

		'type' : "S",

		'abbr' : "11",

		'multiple' : "250",

		'resist' : "Active, Passive",

		'storage' : "Potion",

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

		'_' : "Entity",

*/

// target END



/* effects

		'_' : "This spell creates sheets of lightning that slowly arc around the entity's body doing no damage. This is extremely obvious. The first time the entity takes damage from a blow in combat and the attacker is within range, a bolt will strike out at the entity's attacker doing ",

		'_' : " damage (save for half damage). The spell then dissipates. The Range is ",

		'_' : "feet. At rank 10 or greater, any attacker who fails to resist and is capable of being stunned is automatically stunned. This spell cannot be cast on a target if they are already under the effect of a Lightning Strike spell.",

*/

/* rk @base, @per

*/

// rk END



/* rk @base, @inc

*/

// rk END



// effects END



	},



	'S-12' : {

		'title' : "Resist Cold",

		'type' : "S",

		'abbr' : "12",

		'multiple' : "100",

		'resist' : "None",

		'storage' : "Investment, Ward, Potion",

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

		'_' : "Entity",

*/

// target END



/* effects

		'_' : "This spell protects the target from the effects of cold temperature by increasing the Gauge by ",

		'_' : " up to a maximum of Gauge 7 (Comfortable). It will totally protect the target from the effects of Hypothermia at rank 11+. In addition, the target suffers 1 less damage due to magical or non-magical cold based attacks.",

*/

/* rk @base, @full

*/

// rk END



// effects END



	},



	'S-13' : {

		'title' : "Shaping Cloud",

		'type' : "S",

		'abbr' : "13",

		'multiple' : "150",

		'resist' : "None",

		'storage' : "Investment, Potion, Ward",

/* range @base, @inc

		'_' : "miles",

*/

// range END



/* duration @conc, @base, @inc

		'_' : "minute",

*/

// duration END



/* basechance @base

*/

// basechance END



/* target

		'_' : "Cloud band",

*/

// target END



/* effects

		'_' : "The Adept can cause some of a cloud bank (cloud density 5+) within range and line of sight to slowly shape a different image in it each minute. Each new shape will be gradually formed from the old over the course of the minute. The shape in the clouds is recognisable up to a range of ",

		'_' : "miles. Measurements for this spell should be taken from the ground (i.e. disregarding the height of the cloud bank).",

*/

/* rk @base

*/

// rk END



// effects END



	},



	'S-14' : {

		'title' : "Whirlwind Vortex",

		'type' : "S",

		'abbr' : "14",

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

		'_' : "This spell creates a tornado around ",

		'_' : " human sized target. If the target fails to resist they are so tossed and torn by the winds that muscles and ligaments tear, joints dislocate, bones break, organs rupture, and they perish. If the target successfully resists they suffer ",

		'_' : " damage due to excessive forces (instead of perishing). Targets that fail to resist may be resurrected.",

*/

/* rk @per, @min

*/

// rk END



/* rk @base, @inc

*/

// rk END



// effects END



	},



	'S-15' : {

		'title' : "Whispering Wind",

		'type' : "S",

		'abbr' : "15",

		'multiple' : "150",

		'resist' : "None",

		'storage' : "Potion",

/* range @base, @inc

		'_' : "miles",

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

		'_' : "Self",

*/

// target END



/* effects

		'_' : "This spell sends a message to an entity using the winds. The Adept must know the name of the entity and be able to pick them out from a crowd. The maximum length of the message is ",

		'_' : "words. The messages will be in the voice of the Adept at the same volume as when spoken, and can only be heard by the target. There is a noticeable but minor affect of swirling air when the message is sent and received. The time taken for the message to reach the entity (the duration) is ",

		'_' : " hours (minimum of 1 hour).",

*/

/* rk @inc

*/

// rk END



/* rk @base, @dec, @min

*/

// rk END



// effects END



	},



	'S-16' : {

		'title' : "Windstorm",

		'type' : "S",

		'abbr' : "16",

		'multiple' : "200",

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

		'_' : "The Adept creates a windstorm of Force 9 centred on the Adept and extending out to the full range of the spell. Once cast the Windstorm will not move. The winds in the area of a windstorm are random and violent, they do not prevail in a particular direction. All entities within this area except the Adept and those in the same hex must check against 2 x (Physical Strength + Agility) - 2 x Rank, every pulse, to regain their feet and/or remain upright. Every time an entity within the area falls prone, they take [D - 2] damage. This damage is physical. For the duration of this spell they have their TMR halved. All entities attempting to use missile or thrown weapons through or inside the area of effect have their Base Chance reduced by 5 per every 2 hexes of Windstorm travelled through.",

*/

// effects END



	},



	'S-17' : {

		'title' : "Wind Walking",

		'type' : "S",

		'abbr' : "17",

		'multiple' : "350",

		'resist' : "Active, Passive",

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

		'_' : "Entity",

*/

// target END



/* effects

		'_' : "The target of this spell (and possessions) turns into wind, keeping their approximate size and appearance. In the first pulse, the spell's effect is to accelerate the target to full speed and in the last pulse, the target will gradually slow. The distance travelled over the first and last pulse is half that of normal. The target moves through the air at ",

		'_' : "mph. The target can only pass through an area that they could pass through normally. The target chooses the direction of the flight but the speed may not be altered. The target will not collide with stationary objects during the flight, but if rushing directly towards an object or wall, will brush along or past it as a wind would. If blown down a corridor to a dead end or similar situation, the target will not stop but double back in a tight loop. Anything dropped by the target will go in a random direction.",

*/

/* rk @base, @inc

*/

// rk END



// effects END



	},



	'S-18' : {

		'title' : "Ball of Lightning",

		'type' : "S",

		'abbr' : "18",

		'multiple' : "350",

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

		'_' : "Entity or Object",

*/

// target END



/* effects

		'_' : "This spell creates a ball of lightning which shoots from the caster to the target. The ball is utterly silent and moves in a straight line. Anything standing between the caster and the target will be struck instead. Upon striking anything the ball explodes, in a bright flash, causing ",

		'_' : " electrical damage. If the target successfully resists the damage is halved (round up), otherwise they are also blinded for ",

		'_' : " pulses (round down).",

*/

/* rk @base, @inc

*/

// rk END



/* rk @per

*/

// rk END



// effects END



	},



	'S-19' : {

		'title' : "Thunderclap",

		'type' : "S",

		'abbr' : "19",

		'multiple' : "325",

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

		'_' : "Area",

*/

// target END



/* effects

		'_' : "

      The Adept causes the air in the targeted area to violently compress with a loud crash.

      ",

		'_' : "

      The entirety of the affected area must be within the caster's spell range for the spell to be effective. All those within the area suffer ",

		'_' : " concussive damage (resist for half - round up). Those failing to resist can hear nothing except a loud ringing for ",

		'_' : " pulses. On a Double or Triple effect any entities which fail to resist are also stunned (normal stun recovery applies). Note that this spell can be heard from a distance as per normal thunder.

    ",

*/

Tables : {

	"Thunderclap Area" : {

		'title' : "Thunderclap Area",

		Head : [ "", "Diameter (feet)" ],

	Rows : [

		[ "0 - 5", "5" ],

		[ "6 - 12", "15" ],

		[ "13 - 19", "25" ],

		[ "20 - 20", "35" ],

	],

	},

},

/* rk @base, @full

*/

// rk END



/* rk

*/

// rk END



// effects END



	},



	'Q-1' : {

		'title' : "Windspeak",

		'type' : "Q",

		'abbr' : "1",

		'multiple' : "150",

		'resist' : "None",

		'storage' : "None",

		'actions' : "None",

		'concentration' : "Standard",

/* range @base, @inc

		'_' : "feet",

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

		'_' : "Area",

*/

// target END



/* effects

		'_' : "The Adept can speak with the whispering spirits of the wind, learning what they have seen or heard and even soliciting their aid. All winds within a range of ",

		'_' : "feet can be communed with in this manner. There is no backfire.",

*/

/* rk @base, @inc

*/

// rk END



// effects END



	},



	'R-1' : {

		'title' : "Air Spring",

		'type' : "R",

		'abbr' : "1",

		'multiple' : "150",

		'resist' : "None",

		'storage' : "None",

		'actions' : "None",

		'concentration' : "Standard",

/* duration @sq, @min

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

		'_' : "The Adept can open a one way portal 2 feet in diameter from the elemental plane of Air from which fresh clean air flows. The rate of flow is ",

		'_' : "cubic feet per second. Additionally any modifier for being enclosed is reduced by 5.",

*/

/* rk @base, @inc

*/

// rk END



// effects END



	},



	'R-2' : {

		'title' : "Conjuring Air Elemental",

		'type' : "R",

		'abbr' : "2",

		'multiple' : "200",

		'resist' : "None",

		'storage' : "None",

		'actions' : "None",

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

		'_' : "Air Elemental",

*/

// target END



/* effects

		'_' : "

      The Adept may summon an Air Elemental and bind it to temporary service by performing this ritual. At the end of the ritual a Cast Check is performed. If the ritual is successful the Elemental is summoned and controlled. If the ritual backfires then the Elemental is summoned but no controlled and will attack the summoner and companions.

      ",

*/

/* para

		'_' : "The Air elemental will always appear within 20 feet of the summoner. If has a combined Endurance and Fatigue equal to ",

		'_' : ". The Elemental will remain until it is sent back to its home plane by the Adept (with Special Knowledge Counterspell of the college of Air Magics) or banished. If it is controlled by the summoner it will remain controlled until the summoner's concentration is broken.",

*/

/* rk @base, @inc

*/

// rk END



// para END



// effects END



	},



	'R-3' : {

		'title' : "Control Weather",

		'type' : "R",

		'abbr' : "3",

		'multiple' : "300",

		'resist' : "None",

		'storage' : "None",

		'actions' : "Dance (2 FT when unencumbered)",

		'concentration' : "None",

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



/* effects

		'_' : "

      The Adept may change one or more of the three components which make up the weather by performing a ritual dance. The three components of weather are;

      ",

		'_' : "

      (e.g. At rank 12, the Adept can change a Force 3 wind into a Force 10 wind or Force 3 into Force 7 and Density 5 into Density 2 cloud cover.)

      ",

*/

/* itemize

*/

/* item

		'_' : "Precipitation, Density",

*/

// item END



/* item

		'_' : "Temperature, Gauge",

*/

// item END



/* item

		'_' : "Wind, Force",

*/

// item END



// itemize END



/* para

		'_' : "The GM should consult the weather table and advise the Adept of the current level of each of these three components before they start dancing. The Adept may change the current components by a total of ",

		'_' : ".",

*/

/* rk @base, @full

*/

// rk END



// para END



/* para

		'_' : "All the changes may be in any direction on the table.",

*/

// para END



/* para

		'_' : "This ritual will not cause weather effects outside the normal climatic range of the area (as determined by the GM). The weather will change gradually over (",

		'_' : ") minutes per level shifted on the table and the three components will change simultaneously. The area of effect is circular with a radius of ",

		'_' : "mile. Casting this ritual counts as strenuous activity and the Adept will lose fatigue. This ritual cannot backfire.",

*/

/* rk @base, @dec

*/

// rk END



/* rk @min

*/

// rk END



// para END



// effects END



	},



	'R-4' : {

		'title' : "Summon and Bind Cloud",

		'type' : "R",

		'abbr' : "4",

		'multiple' : "300",

		'resist' : "None",

		'storage' : "None",

		'actions' : "None",

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

		'_' : "Clouds",

*/

// target END



/* effects

		'_' : "This ritual will summon a quantity of cirro-cumulus cloud and change its consistency to that of packed cotton wool to provide a method of transport. Items will pass through the cloud after 30 seconds unless supported by an Entity. The cloud arrives during the last half hour of casting and spends the first and last half hour of travel rising to and descending from its natural travelling height. The natural height of cirro-cumulus clouds is between 2 and 4 miles above sea level (10,000 to 20,000 feet). The cloud may support ",

		'_' : "entity and transports them in a comfortable and oxygenated environment, although it may be slightly cold if improperly clothed. Flying entities may take off or land on the cloud as long as the above limit is maintained. If more entities land on a cloud than it can carry, it will immediately start to descend taking half an hour and dissipate upon reaching the ground. The cloud appears to be a normal cloud but is sufficiently soft to prevent injury to anything that impacts it (it's also non-flammable). The clouds will move with the prevailing winds or can be moved with magical winds such as Mage Wind. By actively concentrating the Adept can cause the clouds to move at a different speed or in a different direction to the prevailing wind. The Adept can alter the movement of the clouds by ",

		'_' : "miles per hour in any one direction. The altitude of the clouds may not be controlled. While in contact with the ground the clouds will not move.",

*/

/* rk @base

*/

// rk END



/* rk @base, @inc

*/

// rk END



// effects END



	},



Tables : {

	"Weather Scale" : {

		'title' : "Weather Scale",

		'cols' : "4",

/* row

*/

/* head

		'_' : "Force",

*/

// head END



/* head

		'_' : "Wind",

*/

// head END



/* head

		'_' : "Specification",

*/

// head END



/* head

		'_' : "Speed mph",

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

		'_' : "Calm",

*/

// cell END



/* cell

		'_' : "Smoke rises vertically",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "1",

*/

// cell END



/* cell

		'_' : "Light air",

*/

// cell END



/* cell

		'_' : "Direction indicated by smoke only",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "2",

*/

// cell END



/* cell

		'_' : "Light breeze",

*/

// cell END



/* cell

		'_' : "Wind felt on face, leaves rustle",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "3",

*/

// cell END



/* cell

		'_' : "Gentle breeze",

*/

// cell END



/* cell

		'_' : "Leaves and twigs in constant motion, wind extends light flag",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "4",

*/

// cell END



/* cell

		'_' : "Moderate breeze",

*/

// cell END



/* cell

		'_' : "Wind raises dust and loose paper, small branches move",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "5",

*/

// cell END



/* cell

		'_' : "Fresh breeze",

*/

// cell END



/* cell

		'_' : "Small trees in leaf start to sway, crested wavelets on inland waters",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "6",

*/

// cell END



/* cell

		'_' : "Strong breeze",

*/

// cell END



/* cell

		'_' : "Large branches in motion, whistling through trees",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "7",

*/

// cell END



/* cell

		'_' : "Near gale",

*/

// cell END



/* cell

		'_' : "Whole trees in motion, inconvenient to walk against wind",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "8 *",

*/

// cell END



/* cell

		'_' : "Gale",

*/

// cell END



/* cell

		'_' : "Twigs break from trees, difficult to walk",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "9 **",

*/

// cell END



/* cell

		'_' : "Strong gale",

*/

// cell END



/* cell

		'_' : "Slight structural damage occurs",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "10 **",

*/

// cell END



/* cell

		'_' : "Storm",

*/

// cell END



/* cell

		'_' : "Trees uprooted, considerable structural damage occur",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "11 ***",

*/

// cell END



/* cell

		'_' : "Violent storm",

*/

// cell END



/* cell

		'_' : "Widespread damage",

*/

// cell END



/* span @from, @to

*/

// span END



// row END



/* row

*/

/* cell

		'_' : "12+***",

*/

// cell END



/* cell

		'_' : "Hurricane",

*/

// cell END



/* cell

		'_' : "Widespread damage",

*/

// cell END



/* cell

		'_' : "74 and above",

*/

// cell END



// row END



/* break

*/

// break END



/* row

*/

/* head

		'_' : "Gauge",

*/

// head END



/* head

		'_' : "Temperature",

*/

// head END



/* head

		'_' : "Specification",

*/

// head END



/* head

		'_' : "Degrees Celcius",

*/

// head END



// row END



/* row

*/

/* cell

		'_' : "0 ***",

*/

// cell END



/* cell

		'_' : "Arctic",

*/

// cell END



/* cell

		'_' : "Dangerous",

*/

// cell END



/* cell

		'_' : "-20 and below",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "1 **",

*/

// cell END



/* cell

		'_' : "Arctic",

*/

// cell END



/* cell

		'_' : "Salt water freezes",

*/

// cell END



/* cell

		'_' : "-15",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "2 *",

*/

// cell END



/* cell

		'_' : "Arctic",

*/

// cell END



/* cell

		'_' : "Branches become brittle",

*/

// cell END



/* cell

		'_' : "-10",

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

		'_' : "Arctic-like",

*/

// cell END



/* cell

		'_' : "Dangerously cold if not dressed in winter clothing",

*/

// cell END



/* cell

		'_' : "-5",

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

		'_' : "Sub-arctic",

*/

// cell END



/* cell

		'_' : "Water freezes, numbness, precipitation becomes hail, snow, sleet",

*/

// cell END



/* cell

		'_' : "0",

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

		'_' : "Sub-arctic",

*/

// cell END



/* cell

		'_' : "Cold, uncomfortable if poorly clothed",

*/

// cell END



/* cell

		'_' : "5",

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

		'_' : "Sub-tropical",

*/

// cell END



/* cell

		'_' : "Cool",

*/

// cell END



/* cell

		'_' : "10",

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

		'_' : "Sub-tropical",

*/

// cell END



/* cell

		'_' : "Comfortable",

*/

// cell END



/* cell

		'_' : "15",

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

		'_' : "Sub-tropical",

*/

// cell END



/* cell

		'_' : "Comfortable, warm",

*/

// cell END



/* cell

		'_' : "20",

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

		'_' : "Tropical",

*/

// cell END



/* cell

		'_' : "Hot, uncomfortable if poorly clothed",

*/

// cell END



/* cell

		'_' : "25",

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

		'_' : "Tropical",

*/

// cell END



/* cell

		'_' : "Uncomfortably hot, sub-tropical plants wither",

*/

// cell END



/* cell

		'_' : "30",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "11 **",

*/

// cell END



/* cell

		'_' : "Desert-like",

*/

// cell END



/* cell

		'_' : "Extreme heat, sub-tropical plants die, tropical plants wither",

*/

// cell END



/* cell

		'_' : "35",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "12+***",

*/

// cell END



/* cell

		'_' : "Desert",

*/

// cell END



/* cell

		'_' : "Debilitating, tropical plants die",

*/

// cell END



/* cell

		'_' : "40 and above",

*/

// cell END



// row END



/* break

*/

// break END



/* row

*/

/* head

		'_' : "Degree",

*/

// head END



/* head

		'_' : "Cloud",

*/

// head END



/* head

		'_' : "Precipitation",

*/

// head END



/* head

		'_' : "Inches / Hour",

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

		'_' : "Clear",

*/

// cell END



/* cell

		'_' : "Dry, high fire danger",

*/

// cell END



/* cell

		'_' : "0",

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

		'_' : "Clear",

*/

// cell END



/* cell

		'_' : "Dry, fires easy to start",

*/

// cell END



/* cell

		'_' : "0",

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

		'_' : "Clear",

*/

// cell END



/* cell

		'_' : "Comfortable",

*/

// cell END



/* cell

		'_' : "0",

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

		'_' : "Sparse",

*/

// cell END



/* cell

		'_' : "Humid, uncomfortable in high temperature",

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

		'_' : "4",

*/

// cell END



/* cell

		'_' : "Light",

*/

// cell END



/* cell

		'_' : "Damp",

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

		'_' : "5",

*/

// cell END



/* cell

		'_' : "Cloudy",

*/

// cell END



/* cell

		'_' : "Drizzle, fog in cold conditions",

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

		'_' : "6",

*/

// cell END



/* cell

		'_' : "Overcast",

*/

// cell END



/* cell

		'_' : "Showers",

*/

// cell END



/* cell

		'_' : "4",

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

		'_' : "Heavy Cloud",

*/

// cell END



/* cell

		'_' : "Light rain, leaves move, fires difficult to start",

*/

// cell END



/* cell

		'_' : "5",

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

		'_' : "Dark Cloud",

*/

// cell END



/* cell

		'_' : "Average rain",

*/

// cell END



/* cell

		'_' : "10",

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

		'_' : "Low black cloud",

*/

// cell END



/* cell

		'_' : "Heavy rain, small branches move, small fires doused",

*/

// cell END



/* cell

		'_' : "20",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "10 *",

*/

// cell END



/* cell

		'_' : "Oppressive",

*/

// cell END



/* cell

		'_' : "Torrential rain, river rise, large fires doused",

*/

// cell END



/* cell

		'_' : "40",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "11 **",

*/

// cell END



/* cell

		'_' : "Oppressive",

*/

// cell END



/* cell

		'_' : "Flood warning, rivers burst their banks",

*/

// cell END



/* cell

		'_' : "80",

*/

// cell END



// row END



/* row

*/

/* cell

		'_' : "12+***",

*/

// cell END



/* cell

		'_' : "Oppressive",

*/

// cell END



/* cell

		'_' : "Flash floods",

*/

// cell END



/* cell

		'_' : "160",

*/

// cell END



// row END



/* description

*/

/* item @title

		'_' : "Maximum variation Rank 5 in Control Weather Ritual",

*/

// item END



/* item @title

		'_' : "Maximum variation Rank 10 in Control Weather Ritual",

*/

// item END



/* item @title

		'_' : "Maximum variation Rank 15 in Control Weather Ritual",

*/

// item END



/* item @title

		'_' : "Due to their close association with the environment the Adept can modify the Force downwards, and Gauge upwards on the Weather Scale Table by 1 per 4 rank, for themselves.",

*/

// item END



/* item @title

		'_' : "This spell protects the target from the effects of cold temperature by increasing the Gauge by ",

		'_' : " up to a maximum of Gauge 7.",

*/

/* rk @base, @full

*/

// rk END



// item END



/* item @title

		'_' : "The Adept may change the current components by ",

		'_' : ".(e.g. At rank 12, the Adept can change a Force 3 wind into a Force 10 wind or Force 3 into Force 7 and Density 5 into Density 2 cloud cover.) Each of the changes may be in any direction on the table.",

*/

/* rk @base, @full

*/

// rk END



// item END



// description END



	},

},

};

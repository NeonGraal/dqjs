
// == Dq -  College Illusion ==
     
dq = {
IL : {
		'title' : "Illusions",
		'version' : "1.4",
		'abbr' : "IL",
		'requiredMA' : "13",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* modifiers @group
*/ 
/* modifier @mod
		'_' : "For each point the Adept's Willpower varies from 15",
*/ 
// modifier END

/* modifier @mod
		'_' : "For each two full Ranks in Troubadour",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Concealed Casting",
		'abbr' : "1",
		'multiple' : "150",
/* effects
		'_' : "This Talent allows the Adept to cast without any apparent movement or noise. The Adept may not speak or make meaningful or extravagant actions. They may not cast without a hand free or if mute. If an observer is intent on the Adept (e.g. in conversation with), the observer may make a (2 times PC) - Rank check to notice. All aspects of the Spell (including Base Chance) must be cast at the lower of the Talent's and Spell's ranks, and the Base Chance is further reduced by 20%. The Talent only functions with spells of the College of Illusions.",
*/ 
// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Enhanced Vision",
		'abbr' : "2",
		'multiple' : "225",
/* effects
		'_' : "The Adept may see through any obscurement such as smoke, dust, water, fog, cloud or rain (though not darkness) to a distance of ",
		'_' : "feet as if unobscured. Normal penalties then accrue from this range. The Adept may see objects or entities that are invisible - they appear to have a slight blue sheen around them. If the invisibility effect (excluding Walking Unseen) is of a higher Rank than the Enhanced Vision, the object or entity may not be clearly identified or directly magically targeted. The Adept has a Base Chance of ",
		'_' : " of Detecting Illusions if they take a Pass Action - each Illusion may only be checked once. Detecting an Illusion does not nullify its effects.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'T-3' : {
		'type' : "T",
		'title' : "Project Image",
		'abbr' : "3",
		'multiple' : "200",
/* effects
		'_' : "This Talent creates a visual Illusion of the Adept, who becomes Invisible as per (G-4) except that attacking in melee will always disrupt this Talent. Initially, the image forms over the Adept. The image will reflect the current appearance of the Adept, in any desired stance. The image may only be changed or moved (at TMR) when the Adept takes a pass action. The image must remain in line of sight and within ",
		'_' : "feet, and may not pass through solid objects. At Rank 5, the image may make appropriate environmental noises,(e.g. ) foot-steps. At Rank 10, the Adept may move while maintaining the relative distance and direction to their image. At Rank 15, the Adept may project their voice through the image. At Rank 20, the Illusionist may also see through the image. The abilities gained at Ranks 15 and 20 require pass actions to use.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-1' : {
		'title' : "Audile Illusion",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "125",
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
		'_' : "
      This Illusion allows the Adept to create up to Rank simple sounds, each coming from a location fixed either absolutely or relative to an object. Whilst taking a pass action, the Adept may cause any combination of these sounds to occur. Sounds and locations are defined as they are first used, not at time of casting. No language or musical instrument may be imitated.
      ",
		'_' : "
      The range at which the sound will be clearly heard is affected by the ambient level of noise.
    ",
*/ 
Tables : {
	"Audile Illusion Effects" : {
		'title' : "Audile Illusion Effects",
		Head : [ "", "Maximum Volume" ],
	Rows : [
		[ "0 - 4", "Stage whisper (usually clearly audible at 25')" ],
		[ "5 - 9", "normal conversation (50')" ],
		[ "10 - 14", "shouting (200')" ],
		[ "15 - 19", "screaming (500')" ],
		[ "20 - 20", "thunder (1 mile)" ],
	],
	},
},
// effects END

	},
  
	'G-2' : {
		'title' : "Flash of Light",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "150",
		'resist' : "Passive",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "This spell creates a blinding flash of light emanating from the Adept's body. This light is magical in nature, and may cut through areas of magical darkness. All entities not shielded by a solid object and within range must either resist or be blinded for ",
		'_' : " seconds. Blinded characters have their Strike Chance reduced by 50, and they move at half their normal TMR. The Adept is normally not affected by this spell.",
*/ 
/* rk @base, @inc, @full
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Illusion of Food",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "100",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "The Adept may change the taste, appearance and smell of up to ",
		'_' : " cubic foot of food or drink. At Rank 11, the Adept may create (Rank - 10) pounds of food or drink. This magically created food will recover fatigue for the duration of the spell. The Adept's Cooking Rank will effectively be improved by 2, or to a minimum of Rank / 2. No other properties (e.g. poison, magic) may be changed or created with this spell.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Invisibility",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "450",
		'resist' : "None",
		'storage' : "Investment, Potion, Ward",
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
		'_' : "Entity or Object",
*/ 
// target END

/* effects
		'_' : "The target is made invisible, but cannot melee attack without becoming visible. At Rank 16, the target can attack in melee whilst invisible. The target may become visible at will. Once they have become visible, the spell ends. The effects of this spell are identical to the E & E College spell of the same name.",
*/ 
// effects END

	},
  
	'G-5' : {
		'title' : "Personalised Illusion",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "75",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "This Illusion creates an image of a specific type peculiar to the Adept. At Rank 0, the image must be of a rock. At each of Ranks 4, 8, 11, 14, 16, 18, 19 and 20, another image may be chosen. The Adept may select the colouring, size and conformation of the image at cast time (e.g. a closed iron chest, or an open wooden casket) up to a maximum diameter of 5' and height of 8'. The Illusion is not affected by physical laws except that it is opaque to light. The Adept may move or rotate (though not manipulate) the Illusion by taking a pass action. The workmanship is as if the Adept were an Artisan of one-third Rank.",
*/ 
// effects END

	},
  
	'G-6' : {
		'title' : "Illusion of Seeming",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "200",
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
		'_' : "Object or Illusion",
*/ 
// target END

/* effects
		'_' : "
      This Illusion creates a visual image of up to ",
		'_' : " cubic feet on an object, which will move with the object if the object changes shape or position, and dissipate if the object is destroyed. The Adept may move or change the image by taking a pass action to concentrate on it. The object has not been changed, and still has its original physical properties. The workmanship is as if the Adept were an Artisan of one-third Rank.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "If the target is an Illusion, the target may be changed to any other form that it could normally take. Up to ",
		'_' : " cubic feet of the target may be changed during each pass action. This change will revert if the Seeming ceases before the target Illusion. The Adept may only affect their own Illusions.",
*/ 
/* rk @base
*/ 
// rk END

// para END

// effects END

	},
  
	'G-7' : {
		'title' : "Static Illusion",
		'type' : "G",
		'abbr' : "7",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "This spell creates a visual Illusion within a volume no larger than (Rank + 3) feet by (Rank / 2 + 2) feet by (Rank / 3 + 1) feet. The Illusion is fixed at casting, and may not be changed or moved with this spell. The workmanship is as if the Adept were an Artisan of one-half Rank.",
*/ 
// effects END

	},
  
	'G-8' : {
		'title' : "Illusionary Wall",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "125",
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
		'_' : "This spell creates an Illusion of a non-solid, linear or smoothly curved wall. It may have all the characteristics of any other wall spell (except solidity, damage or fear), or mimic an adjacent surface instead. The wall is 20' by 10' by 12, with each Rank altering its height or width by 2' or thickness by 4. The wall must be attached along the entirety of one of its thinnest edges.",
*/ 
// effects END

	},
  
	'S-1' : {
		'title' : "Illusionary Animal",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "None",
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
		'_' : "An Illusion of a non-magical, non-sentient creature of no larger than ",
		'_' : " pounsd is created. The Illusion will have the instincts of the creature it is based on, though it will obey most simple mental instructions from the Adept. This communication is one-way, and may only occur while the animal is within range of the spell. No other communication is possible - it has no mind. The animal has the minimum PS, MD, AG, TMR and PC for the selected creature. The animal is solid, and can bear weight. It cannot attack effectively, nor cause fear. Only creatures previously observed by the Adept may be created. Smell, sound and feel are created as appropriate. If damaged, the Illusion is dissipated. The Adept may perceive through the animal's senses as follows: Rank 3 taste; Rank 7 smell; Rank 11 touch; Rank 15 hearing; Rank 19 sight.",
*/ 
/* rk @base, @inc, @sq
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Illusionary Bolt",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment",
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
		'_' : "Entity, Object or Area",
*/ 
// target END

/* effects
		'_' : "An Illusion of any dangerous-looking object of ``throwable'' size is created in the Adept's hand. When thrown, it flies in a straight line, doing (D-",
		'_' : ")magical damage to the first Entity or object struck. Illusions take double damage from this bolt.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Illusory Creation",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "250",
		'resist' : "None",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "This spell creates the Illusion of one small object. The object will have the physical attributes of one of the following: cloth, leather, wood, bronze; to a maximum of ",
		'_' : " lb. The object will be of a single form, with no moving or removable pieces, though of any combination of colours. The object will interact normally with its surrounds. The workmanship is as if the Adept were an Artisan of one-third Rank.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-4' : {
		'title' : "Illusion of Deep Pockets",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "200",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "This Illusion creates ",
		'_' : " magical pockets about the Adept's clothing. Each pocket can hold an object with a largest dimension of no more than ",
		'_' : "inch. No entity can be placed in a pocket. The total weight held may not exceed ",
		'_' : "lb, and no individual object can weigh more than half this amount. The pockets are not obvious, but thorough investigation may find them: searchers get a (2 times PC) - Rank check to notice. Items within the pockets may not be located by spells of a lesser rank. The pockets may only be accessed while the Adept is clothed; however, a new set of clothes will still contain the pockets. At the end of the spell, the pockets expel their contents.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Disguise Illusion",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment, Potion, Ward",
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
		'_' : "The Adept may change the target's appearance. The target may not be located by location spells of a lesser rank. The target's height may vary by ",
		'_' : ", and their weight by ",
		'_' : ". The target's voice or clothing may be changed at Rank 5 or both of these at Rank 10; an individual may be duplicated or gender or race changed at Rank 15; or two of these at Rank 20. If clothes are included in the spell, they revert to normal if discarded. The disguised form has the PB of the target +/- ",
		'_' : ", within racial limitations.",
*/ 
/* rk
*/ 
// rk END

/* rk @inc
*/ 
// rk END

/* rk @inc, @full
*/ 
// rk END

// effects END

	},
  
	'S-6' : {
		'title' : "Illusionary Euphonia",
		'type' : "S",
		'abbr' : "6",
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
		'_' : "This Illusion creates the sound of harmonious voices or musical instruments. ",
		'_' : " instruments may be played; or ",
		'_' : " voices may speak or sing. Each may come from a different location fixed either absolutely or relative to an object. The effective rank of the performance or conversation is ",
		'_' : ", to a maximum of the Adept's rank in the instrument or language. Pass actions are required for musical performance at a skill level above ",
		'_' : ", or conversation. The maximum volume at Ranks 0-4 is that of a stage whisper (usually clearly audible at 25'), at Ranks 5-9, normal conversation (50'), at Ranks 10-14, shouting (200'), at Ranks 15-19, screaming (500'), and at Rank 20, thunder (1 mile). The range at which the sound will be clearly heard is affected by the ambient level of noise.",
*/ 
/* rk @base, @full
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

/* rk @per
*/ 
// rk END

/* rk @per
*/ 
// rk END

// effects END

	},
  
	'S-7' : {
		'title' : "Hallucination",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "225",
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
		'_' : "This spell enables the Adept to select ",
		'_' : " entity as an audience for their Illusions. Whenever the Adept casts an Illusion, they must decide whether everyone can perceive it, or just the targets of this spell. This spell does not circumvent any resistance checks by the targets. The Illusion must be cast during the duration of this spell although the effects may last after the Hallucination duration has expired.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Heroism",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "This spell charges the target with great might and heroism. They seem taller and stronger, and their actions gain a natural grace and power. All allies (in line-of-sight) led by the target gain a bonus die modifier of ",
		'_' : " to all fear checks, while neutral observers gain a bonus of ",
		'_' : " to reaction rolls. The target gains a defence bonus of ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-9' : {
		'title' : "Illusion of Innocence",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "250",
		'resist' : "Active",
		'storage' : "Investment, Potion",
/* range @base, @inc
		'_' : "foot",
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
		'_' : "This Illusion changes the mien of ",
		'_' : " entity. This influences the initial reactions of all entities who perceive the target: they will react as if the target is an innocent (this does not necessarily mean a favourable reaction). The spell does not force people to act stupidly - if the target does not act appropriately, their opinion may be revised rapidly. Extreme behaviour terminates these effects. For example, should a target prepare a weapon, cast a passively resistible spell, or attack, the spell will dissipate.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-10' : {
		'title' : "Maze",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "450",
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
		'_' : "The target is transported into a hedge-maze of perpetual fog, where they may wander as they will. The hex that they occupied is filled with opaque mist that disperses in 5 seconds. At the end of the spell, the target reappears in their original hex (they are displaced by solids but displace fluids); any items dropped inside the maze reappear along with the target. Whilst in the maze, they must make a 2 x WP check each pulse to perform a non-pass action. Personal magical effects continue, (e.g. while a Phantasm would follow the target into the maze, Agony wouldn't). For all purposes, the Maze is deemed to be on the same plane that the target just disappeared from. Each target appears within their own unique Maze. The Adept may still see (and thus cast upon) the target, but not physically contact them.",
*/ 
// effects END

	},
  
	'S-11' : {
		'title' : "Illusion of Metamorphosis",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "225",
		'resist' : "Active, Passive",
		'storage' : "Investment, Potion",
/* range @base, @inc
		'_' : "foot",
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
      The target's appearance alters to that of a one hex creature of at least (target's PS + EN) pounds, over a period of 5 seconds. Their actual form and characteristics do not change. They do not gain any special abilities (e.g. poison, magic, fear, flight) associated with that animal. The Adept must be familiar with the desired animal. The spell will cease when the target takes effective Endurance damage. Creatures available by Rank:
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "Small Land Animals;",
*/ 
// item END

/* item @title
		'_' : "Felines, Apes & Prehumans;",
*/ 
// item END

/* item @title
		'_' : "Avians, Fish, Lizards & Snakes;",
*/ 
// item END

/* item @title
		'_' : "Horses, Large Land Animals;",
*/ 
// item END

/* item @title
		'_' : "Earth Dwellers, Fairy Folk, Humans;",
*/ 
// item END

/* item @title
		'_' : "Giants.",
*/ 
// item END

// description END

// effects END

	},
  
	'S-12' : {
		'title' : "Illusion of Mist",
		'type' : "S",
		'abbr' : "12",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The Adept creates an Illusion of ",
		'_' : " cubic feet of mist of any shape entirely within the Adept's range. The mist must be least 1 foot in any dimension and may have detail no finer than one foot in size. The visibility in this mist is ",
		'_' : " feet. The mist is not affected by wind. By taking a pass action, the Adept may move the mist up to 1 hex / pulse so long as it remains within range.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'S-13' : {
		'title' : "Illusion of Multiple Images",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Potion",
/* range @base, @inc
		'_' : "foot",
*/ 
// range END

/* duration @base, @inc
		'_' : "minute",
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
		'_' : " images of the target appear in the target's hex. Each image disappears upon receiving damage. All images are identical to the target, and will imitate their actions faithfully. The images have the same defence as the target, but no magic resistance. Any targeted attack has an equal chance of hitting each image and the target. More than one image may be struck by a multi-target or area effect attack.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Nightmare Illusion",
		'type' : "S",
		'abbr' : "14",
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
		'_' : "The Adept creates a terrifying, hostile and dangerous Illusion. The Nightmare is initially under the Adept's control, and will obey their commands until the Adept's concentration is broken or the Nightmare is slain or dissipated. The Nightmare is totally insubstantial and invisible to all who resist. The Nightmare has a combined EN and FT of ",
		'_' : ", but no defence or armour. It can automatically hit up to two different targets a pulse for [D - 2] magical damage. It has a TMR of 10 and an Initiative of ",
		'_' : ". It may not be stunned. At Rank 15, every target must make a fear check upon first being struck. The Nightmare may move in any direction without restriction, including through air, walls, water, etc. except through the area of an Illusion Special counterspell. If concentration is lost, the Nightmare will attempt to kill as many people as possible, and can not be controlled by any means.",
*/ 
/* rk @base, @inc, @full
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Illusionary Cloaking",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "100",
/* range @base, @inc
		'_' : "feet",
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

/* effects
		'_' : "This ritual creates a subtle visual Illusion over all non-living matter within range according to the Adept's wishes. Only surface appearance is changed, and this ritual does not provide invisibility. This means that objects will retain their silhouette, and the Illusion will fill the same volume as the object. The new appearance will fade over the last hour of the duration. The workmanship is as if the Adept were an Artisan of one-half Rank.",
*/ 
// effects END

	},
  
	'Q-2' : {
		'title' : "Illusory Fog",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "75",
		'casttime' : "30 minutes",
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
		'_' : "This ritual creates Illusory fog to a height of ",
		'_' : "feet within range. The fog will rise within five minutes of the ritual's completion, centred on the spot where the Adept performed the ritual. The fog has a visibility of ",
		'_' : " hexes.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'R-1' : {
		'title' : "Illusionary Aura",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "200",
/* range
		'_' : "5 feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "day",
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
		'_' : "This ritual creates an Illusion to alter the Aura of the target. The target's apparent Aura is altered by fooling the DA, DE or Divination with a stereotype defined in Rank + 1 words,(e.g. ) Rank 4 - ``Master Thatcher and Evil Necromancer''. The questioner then receives appropriate answers based on the stereotype; if the question is not covered by the stereotype, the real answer is returned. The Illusory Aura will not hide information, merely alter it. The Ritual of Warding is not affected.",
*/ 
// effects END

	},
  
	'R-2' : {
		'title' : "Illusionary Terrain",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "150",
/* range @base, @inc
		'_' : "feet",
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

/* effects
		'_' : "This ritual creates an Illusion such that observers outside the range can not sense any sign of entities or their trappings within the area. Temporary campsites will not be seen and permanent dwellings appear deserted and dilapidated. However, some effects may be seen,(e.g. ) the smoke and light of a campfire rising above the ritual's range. The ritual will not hide entities from each other if both are outside the effect, even if the area lies between them. Magic that is not targeted on entities or their possessions may not be hidden through this ritual. Any Location or Scrying magic lower than the Rank of Illusionary Terrain may not detect into the ritual's area.",
*/ 
// effects END

	},
  
	'R-3' : {
		'title' : "Permanency",
		'type' : "R",
		'abbr' : "3",
		'multiple' : "550",
/* range
		'_' : "5 feet",
*/ 
// range END

/* duration
		'_' : "Permanent",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Spell or Ritual",
*/ 
// target END

/* material
		'_' : "Special",
*/ 
// material END

/* materialcost @base, @dec
*/ 
// materialcost END

/* effects
		'_' : "The Adept can make any one of their own Illusion spells or rituals permanent. The Illusion must have sufficient duration to last throughout the ritual. Once an Illusion has been made permanent, no changes are possible. The Illusion may be overridden by any similar spell for the duration, rather than queueing. Ingredients are consumed upon success or backfire. The ritual is removable by a Ritual of Dissipation or the Adept's own Special Knowledge counterspell.",
*/ 
// effects END

	},
  
	},
  
};
  

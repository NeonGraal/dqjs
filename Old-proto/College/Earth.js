
// == Dq -  College Earth ==
     
dq = {
EA : {
		'title' : "Earth Magics",
		'version' : "1.2",
		'abbr' : "EA",
		'requiredMA' : "15",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "Practitioners of the College of Earth Magics must always be in contact with the earth to perform magic of this College.",
*/ 
// para END

/* para
		'_' : "A practitioner of this College is considered in contact with the earth if they are in contact with an item which is, itself, rooted in the earth (tree, plant, foundation of a house, etc.). They would not be in contact with earth if they were in the air or in water where they could not touch bottom, or if they were atop a piece of furniture or an animal as these are not rooted in the ground. An Adept in a person's arms is not in contact with the earth.",
*/ 
// para END

// subsection END

/* modifiers @group
*/ 
/* modifier @mod
		'_' : "Adept is wearing a sprig of fresh mistletoe",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is in contact with earth, but beneath water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is in a manmade dwelling without an earthen floor",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept occupies a place of power",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Detect Aura",
		'abbr' : "1",
		'multiple' : "75",
		'resist' : "Active",
/* range
		'_' : "Special",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Entity, Object, Area, Volume",
*/ 
// target END

/* effects
		'_' : "The Base Chance is reduced by 1% for every foot after the first five feet the target is from the Adept. The results of this talent are the same as given in Detect Aura.",
*/ 
// effects END

	},
  
	'G-1' : {
		'title' : "Converse With Animals",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "50",
		'resist' : "None",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept may communicate with fauna (whether verbally or symbolically, and to what extent, are left up to the GM's discretion). Physical contact between the animal and the Adept increases the Base Chance of successfully casting this spell by 5. This spell does not include avians or fish and has to be recast for each type of animal, for example talking to wolves does not allow the Adept to talk to tigers.",
*/ 
// effects END

	},
  
	'G-2' : {
		'title' : "Converse With Plants",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "50",
		'resist' : "None",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept can communicate with flora with which they are familiar. The mode and extent of communication is up to the GM's discretion.",
*/ 
// effects END

	},
  
	'G-3' : {
		'title' : "Controlling Animals",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "100",
		'resist' : "Passive",
		'storage' : "Investment",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @conc
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
		'_' : "The Adept controls the actions of any animal that does not successfully resist. It will serve them so long as they continue to concentrate. If they release the animal or their concentration is broken, it may attack them or flee. The chance to cast this spell is reduced by 5% if the Adept cannot speak to the animal. If the Adept cannot make eye contact, the Base Chance is reduced another 5%.",
*/ 
// effects END

	},
  
	'G-4' : {
		'title' : "Blending",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "50",
		'resist' : "None",
		'storage' : "Investment, Potion, Ward",
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
		'_' : "
      Once this spell is cast, the target must remain still in order for it to have effect. While remaining still, the target is not able to be seen by non-magical means (i.e. as for invisibility). If the target moves, the spell ceases to work. However, if the target becomes still again during the duration of the spell, it will resume its effect. The duration of the spell refers to the time since casting, not the time that the spell is actually in effect (i.e. while the target is still).
      ",
*/ 
/* para
		'_' : "Keeping still will require (as a minimum) a 4 x WP check every hour. The target may be required to make additional willpower checks at the GM's discretion.",
*/ 
// para END

/* para
		'_' : "The spell only has effect while the target is ``still''. This means that the target is unable to move any of its external surfaces, with limited exceptions. Moving an external surface encompasses such actions as moving a limb, or opening and closing the mouth. Blinking and normal bodily movement caused by normal breathing will not constitute moving for the purposes of this spell. The following actions will automatically cause the spell to cease working: talking, spellcasting, triggering (subject to any revision of the Investment ritual), readying a weapon, altering facing in a hex, moving from the hex, using a silent language, or indeed any Action other than a Pass action (and Pass actions being restricted as outlined). Note that it is not relevant if an observer would see the movement for the spell to cease working (e.g. moving hands behind back, or talking behind hand will both cause the spell to cease having an effect).",
*/ 
// para END

// effects END

	},
  
	'G-5' : {
		'title' : "Walking Unseen",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Potion, Ward",
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
		'_' : "
      The target of this spell may move unnoticed, not invisible. This means that it will not transmit light. As a consequence the target will cast a shadow (which may or may not be noticed depending on the lighting etc - even if noticed may not be connected to the target) and have a reflection in a mirror (or any reflective surface). However the target may not be noticed even if another entity is looking directly at him/her. It should be noted that a crystal of vision or similar would count as looking directly at the target, not as a reflection. An entity will get a perception check if the target becomes invasive on that entity's senses (e.g. standing in a frontal adjacent hex, or standing behind the entity with the target's hands over his/her eyes). Although the target is not invisible, it may be detected using any magical means for detecting invisible entities (e.g. witchsight).
      ",
*/ 
/* para
		'_' : "If the target of the spell be touched by another entity, or that entity's possessions, then the spell is broken. The target of the spell may not break it voluntarily (other than by, for example, touching another entity). Once broken the spell must be recast.",
*/ 
// para END

// effects END

	},
  
	'G-6' : {
		'title' : "Healing",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "None",
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
		'_' : "Through a combination of magic and the application of healing herbs and salves, the Adept can cure ",
		'_' : " Damage Points suffered due to disease or injury. The spell takes about 5 minutes to cast.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-7' : {
		'title' : "Detecting Traps and Snares",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "75",
		'resist' : "None",
		'storage' : "Potion",
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
		'_' : "This spell increases the Base Chance of detecting traps or ambushes while outdoors by ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-8' : {
		'title' : "Detecting Poisons",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "75",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The spell requires a wand of either ashwood, ivory or unicorn horn. The Adept touches this to the object or substance in which they suspect is poisonous. The wand will momentarily turn black if poison is, in fact, present.",
*/ 
// effects END

	},
  
	'G-9' : {
		'title' : "Lesser Enchantment",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "125",
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
		'_' : "Sentient Entity",
*/ 
// target END

/* effects
		'_' : "
      The target of this spell is either blessed or cursed (Adept's choice). The spell increases either the character's luck or misfortune (depending on whether it operates as a blessing or as a curse) by 1 on every percentile dice roll in which the character is directly involved. This spell cannot be cast over oneself. The duration of the enchantment is as follows:
      ",
*/ 
Tables : {
	"Lesser Enchantment Duration" : {
		'title' : "Lesser Enchantment Duration",
		Head : [ "", "Duration" ],
	Rows : [
		[ "1 - 10", "a fortnight" ],
		[ "11 - 19", "3 months" ],
		[ "20 - 20", "permanent (until dispelled)" ],
	],
	},
},
// effects END

	},
  
	'G-10' : {
		'title' : "Herbal Lore",
		'type' : "G",
		'abbr' : "10",
		'multiple' : "75",
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
		'_' : "This gives the Adept Rank 0 Herbalist for the duration of the spell. It also increases their chance of finding herbs (as per the Herbalist or Ranger skills) by ",
		'_' : ". If the Adept is already ranked in Herbalist or Ranger, then they gain an additional +10%.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-11' : {
		'title' : "Tracking",
		'type' : "G",
		'abbr' : "11",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Self",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept adds ",
		'_' : " to their chance of Tracking while outdoors.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-1' : {
		'title' : "Earth Hammer",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "200",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept conjures a giant maul of stone which hurls itself at a target of the Adept's choosing. If the target fails to resist the spell, it takes ",
		'_' : " damage.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Hands of Earth",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "150",
		'resist' : "Passive",
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
		'_' : "Entity, Area",
*/ 
// target END

/* effects
		'_' : "The spell causes 1 + (Rank / 2) hands of stone to materialise out of the ground within range. Each hand is 7 feet tall and all must be contiguous to each other. They may clutch anything that enters the hex they occupy and will continue to do so until they have caught something. Any entity standing on a spot where a hand materialises will be snatched up if they fail to resist, otherwise the hand appears next to them within the hex. Any entity caught will still be able to wield a weapon or cast if they roll under 2 x MD. Entities (or combination of entities) with a combined PS + target's AG greater than ",
		'_' : " may attempt a 1 x PS to escape from the Hands, and may do so every pulse after the first. Any hand which has been broken out of will either dissipate or become hard cover (GM discretion).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Strength of Stone",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "200",
		'resist' : "Passive",
		'storage' : "Investment, Potion, Magical Trap",
/* range
		'_' : "10 feet",
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
		'_' : "The target of this spell has their Physical Strength or Endurance (Adept's choice) increased by Rank points (minimum 1).",
*/ 
// effects END

	},
  
	'S-4' : {
		'title' : "Armour of Earth",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Potion",
/* range
		'_' : "10 feet",
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
		'_' : "This spell increases the defence from physical weapons of the target by ",
		'_' : ". At Rank 11 and above, it also absorbs 1 Damage Point per strike.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Diamond Weapon",
		'type' : "S",
		'abbr' : "5",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "This spell is cast over a weapon of the Adept's choice, increasing its strike chance by Rank% (minimum of 1). The chance of an attacker's weapon breaking increases by 5% when striking a weapon under the effect of this spell (i.e. break chance becomes 94-99, instead of 99).",
*/ 
// effects END

	},
  
	'S-6' : {
		'title' : "Gem Creation",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "250",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "10 feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "day",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* effects
		'_' : "This spell creates ",
		'_' : " gemstone of random value. The gems dissipate at the end of the spell.",
*/ 
/* rk @per
*/ 
// rk END

// effects END

	},
  
	'S-7' : {
		'title' : "Animal Growth",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "225",
		'resist' : "Passive",
		'storage' : "Investment, Ward",
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
		'_' : "Non-sentient mammal",
*/ 
// target END

/* effects
		'_' : "One mammal of the Adept's choice is doubled in size. The effects of this radical change are determined by the GM.",
*/ 
// effects END

	},
  
	'S-8' : {
		'title' : "Enchanting Plants",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "225",
		'resist' : "None",
		'storage' : "Investment, Ward",
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
		'_' : "Plant",
*/ 
// target END

/* effects
		'_' : "This spell may impart partial mobility to a number of plants (including trees) equal to the Adept's Rank. The plants may not uproot themselves, but may move their branches and leaves while remaining in the same spot. The plant's actions are always under the control of the Adept so long as they maintain their concentration. If their concentration is broken, voluntarily or otherwise, the plants will be controlled by the GM until the Adept reestablishes control and could, conceivably attack the Adept.",
*/ 
// effects END

	},
  
	'S-9' : {
		'title' : "Binding Animals",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "250",
		'resist' : "Passive",
		'storage' : "Investment, Ward",
/* range @base, @inc
		'_' : "feet",
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
		'_' : "Animal",
*/ 
// target END

/* effects
		'_' : "This spell is similar to the Spell of Controlling Animals except that the Adept does not have to concentrate on it to maintain it. The spell will last until broken by the animal or dispelled by magic. Any animal subject to this spell makes one check per week against its Willpower to determine if the spell is broken. This only works on land animals, it will not work on avians or aquatics.",
*/ 
// effects END

	},
  
	'S-10' : {
		'title' : "Conjuring Earth Elemental",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "225",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range
		'_' : "20 feet",
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
		'_' : "Earth Elemental",
*/ 
// target END

/* effects
		'_' : "If the cast is successful, an Earth Elemental with a combined Fatigue and Endurance of ",
		'_' : " appears within 20 feet of the Adept. The Adept automatically casts a Spell of Controlling Earth Elemental to see if they control the Elemental. The Control spell is a separate spell and requires additional fatigue to cast, but does not require any preparation and is cast in conjunction with this spell.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-11' : {
		'title' : "Controlling Earth Elemental",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "225",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "20 feet",
*/ 
// range END

/* duration @conc
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Earth Elemental",
*/ 
// target END

/* effects
		'_' : "The Adept may attempt to control an Elemental they have just summoned. The Elemental does not get to resist. If successful in establishing control over the Elemental, the Adept maintains control until their concentration is broken or they banish the Elemental with a counterspell. If they fail to gain control of the Elemental or gain control, but have their concentration broken, the Elemental will immediately attack them. The Adept cannot banish an Elemental they do not control.",
*/ 
// effects END

	},
  
	'S-12' : {
		'title' : "Sinking Doom",
		'type' : "S",
		'abbr' : "12",
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
		'_' : "This spell opens a circular pit under ",
		'_' : " human-sized targets and sucks the unfortunate standing over it down to be encased in rock ",
		'_' : " feet underground. This spell may be used to affect multi-hex targets, each hex of the target counts as one human-sized target. If the spell does not affect every hex which the target occupies then the target will not be affected.",
*/ 
/* rk @per
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-13' : {
		'title' : "Wall of Stone",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "150",
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
		'_' : "Creates a 10 foot high x 20 foot long wall of granite or a 10 foot high ring of stone with a 20 foot radius or a pillar of stone 15 feet high and with a 2 foot radius. The Adept increases any dimension by ",
		'_' : " feet. They may not attempt to create a wall on top of an entity.",
*/ 
/* rk
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Wall of Iron",
		'type' : "S",
		'abbr' : "14",
		'multiple' : "250",
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
		'_' : "Same as for S-12 (Wall of Stone Spell) except that the Adept creates a wall of cold iron.",
*/ 
// effects END

	},
  
	'S-15' : {
		'title' : "Tunnelling",
		'type' : "S",
		'abbr' : "15",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Ward",
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
		'_' : "The Adept creates a circular opening or tunnel 10 feet in diameter and 20 feet deep in a wall, ceiling, floor, ground surface, cliff face, etc. The Adept may add ",
		'_' : " feet to either depth or radius.",
*/ 
/* rk
*/ 
// rk END

// effects END

	},
  
	'S-16' : {
		'title' : "Trollskin",
		'type' : "S",
		'abbr' : "16",
		'multiple' : "250",
		'resist' : "None",
		'storage' : "Investment, Potion, Ward",
/* range
		'_' : "10 feet",
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
		'_' : "The spell allows the subject to regenerate Endurance Points. The target begins to regenerate the pulse after the spell is cast and continues to regenerate at the rate of 1 Endurance Point per pulse for the duration of the spell. The spell will not help regenerate wounds inflicted by acid or fire. An entity will not die from damage while under the effects of a trollskin, even if they are below negative half Endurance.",
*/ 
// effects END

	},
  
	'S-17' : {
		'title' : "Smoking Magma",
		'type' : "S",
		'abbr' : "17",
		'multiple' : "300",
		'resist' : "Passive",
		'storage' : "Investment, Ward",
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
		'_' : "The Adept creates a pool of molten rock which wells up from underground. The pool has a radius of ",
		'_' : "feet. Any entity within the area covered by the pool suffers damage of ",
		'_' : ". If the target successfully resists, this damage is halved. Note that while the entity is within the area of effect the damage is applied ever pulse.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-18' : {
		'title' : "Diamond Javelins",
		'type' : "S",
		'abbr' : "18",
		'multiple' : "300",
		'resist' : "None",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The spell causes diamond-tipped javelins to fly from the earth at the Adept's feet and travel toward a target(s) of the Adept's choice. The number of javelins which appear is ",
		'_' : ". The javelins have a Base Chance to hit equal to the Base Chance of ordinary javelins ",
		'_' : ". Each javelin does ",
		'_' : " damage.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @inc
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-19' : {
		'title' : "Earth Transformation",
		'type' : "S",
		'abbr' : "19",
		'multiple' : "400",
		'resist' : "Passive",
		'storage' : "Investment, Ward",
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
		'_' : "Volume",
*/ 
// target END

/* effects
		'_' : "This spell turns ",
		'_' : " cubic feet of stone into mud or vice versa. An entity standing on a spot containing a mud puddle that is turned to stone has an opportunity to passively resist the effects of the spell. If they fail to resist, they will become trapped in the stone that has taken the place of the mud they were standing in. If they resist, the mud turns to stone, but they are not trapped.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Summoning Animals",
		'type' : "Q",
		'abbr' : "1",
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
		'_' : "If the Ritual Check is successful then a number of small animals equal to the Adept's Rank (minimum 1) are summoned. The animal the Adept attempts to summon must be a native of the area. If the Adept chooses to vocalise their summons in the form of a load shout or call the Base Chance is increased by 25%.",
*/ 
// effects END

	},
  
	'R-1' : {
		'title' : "Binding Earth",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "500",
		'resist' : "None",
		'actions' : "Sacrifice human",
		'concentration' : "Standard",
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
		'_' : "Earth",
*/ 
// target END

/* material
		'_' : "A human (or humanoid)",
*/ 
// material END

/* effects
		'_' : "If the is ritual successful, the Adept gains complete control over a ",
		'_' : " pounds weight of earth and stone. They can shape or move the earth, change its consistency or instill intelligence in it as they choose. The Base Chance to successfully employ this ritual is 10%. It can affect any earth or stone within ",
		'_' : "feet of the Adept. If a ritual sacrifice of a human (or humanoid) being is performed at the end of the duration, the affected earth becomes permanently bound (that is, it contains no life and blocks all earth shaping effects, for example, Hands of Earth, Earth Elementals, Tunnelling).",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	},
  
};
  

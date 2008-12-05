
// == Dq -  College Necro ==
     
dq = {
NE : {
		'title' : "Necromantic Conjurations",
		'version' : "1.1",
		'abbr' : "NE",
		'requiredMA' : "16",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "An Adept is limited in the amount of Undead they can exert control over at any one time. They have a maximum number of bound Lesser Undead equal to (Willpower + Rank with the spell of Binding of Undead) + Military Scientist Rank. Bound Lesser Undead include those made by the spells of Animation of the Dead, and Animating Bodily Parts as well as those bound by using the spell of Binding Lesser Undead. Non human-sized Undead will count as more than one Undead, or a fraction of one Undead, for the purposes of this limitation, as per the spell of Animation of the Dead. An Adept may also never have more than one bound Greater Undead at any one time.",
*/ 
// para END

// subsection END

/* modifiers @group
*/ 
/* modifier @mod
		'_' : "The Adept occupies an unconsecrated burial place (e.g. pagan graveyard, barrow)",
*/ 
// modifier END

/* modifier @mod
		'_' : "The Adept is standing on, or attempting to affect, consecrated ground",
*/ 
// modifier END

/* modifier @mod
		'_' : "During a Death Festival",
*/ 
// modifier END

/* modifier @mod
		'_' : "During a Life Festival",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Ask the Dead",
		'abbr' : "1",
		'multiple' : "150",
/* range
		'_' : "10 feet",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept may, whenever they occupy the place in which an entity has died or has been buried, attempt to communicate with the spirit of the entity. Such communication is only possible if the Adept could have communicated with the entity when it was alive (knew its language, etc.). The Adept must also be aware that the place is the site of an entity's death or burial. Questions put to the entity may only be answered with a simple yes or no, and the dead may only provide knowledge of events which transpired while they were alive. Once the dead have responded initially, they will continue to answer all questions until dismissed, or until the Adept has asked ",
		'_' : " questions. Whether or not the Adept is successful, they may not attempt to use this Talent again, on the same dead entity, until 24 hours have passed.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Death Sense",
		'abbr' : "2",
		'multiple' : "75",
/* range
		'_' : "10 feet",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      This talent has two distinct uses:
      ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "The Adept will always be aware of the death of a Sentient Entity within ",
		'_' : "feet, provided they are awake and not engaged in an activity requiring active concentration. The Adept will be aware of the approximate distance (within 20 feet) and approximate direction (within 45 degrees) of the demise.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

/* item
		'_' : "The Adept may attempt to determine whether the location they occupy is the site of a death or burial. If the Adept is unsuccessful they may not attempt to use this Talent on the same location until 24 hours have passed.",
*/ 
// item END

// enumerate END

// effects END

	},
  
	'T-3' : {
		'type' : "T",
		'title' : "Necrogeny",
		'abbr' : "3",
		'multiple' : "150",
/* range
		'_' : "Self",
*/ 
// range END

/* basechance
		'_' : "Automatic",
*/ 
// basechance END

/* effects
		'_' : "
      Due to their close association with death, decay and the Undead, Necromancers become somewhat resistant to:
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "The Adept gains a ",
		'_' : " bonus to any Willpower check to resist fear effects, caused by lesser Undead, hideous sights, etc. This Talent does not aid in resisting magical fear (e.g. Spell of Fear, Mass Fear Spell).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

/* item @title
		'_' : "The Adept reduces their chance of becoming infected by ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

// item END

/* item @title
		'_' : "Damage done to the Adept due to the touch of a Greater Undead is reduced by ",
		'_' : ".",
*/ 
/* rk @base, @per
*/ 
// rk END

// item END

// description END

// effects END

	},
  
	'G-1' : {
		'title' : "Animating Bodily Parts",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "175",
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
		'_' : "Parts of Corpses",
*/ 
// target END

/* effects
		'_' : "The Adept may instill ",
		'_' : " humanoid bodily part with a gruesome semblance of life. A single corpse consists of 6 bodily parts: 2 legs, 2 arms, 1 head, 1 torso. The Adept may join together previously unconnected parts before animation. The animated bodily parts will be able to follow simple commands given by the Adept. The exact mode of locomotion of the parts, and their speed and other abilities is left to the discretion of the GM. They will be slower and weaker than normal Skeletons or Zombies. The exact results of this spell are hard to predict, and even two identically constructed ``animates'' may not perform in precisely the same manner.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-2' : {
		'title' : "Binding Lesser Undead",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "200",
		'resist' : "Passive",
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
		'_' : "Lesser Undead Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may gain control of ",
		'_' : " Lesser Undead, that fail to resist. If the Undead to be affected are already controlled or bound, the rank of the Adept with this spell is compared to the rank of the original control or binding. If the original rank is equal or higher, the Undead are unaffected by this spell, otherwise the Undead must resist normally. The Undead will serve the Adept in all ways, obeying simple commands communicated verbally by the Adept. No target may resist an order once it has failed to initially resist the spell.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Conjuring Darkness",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "15 minutes x [D - 5] x Rank ( times 1 if unranked)",
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
  
	'G-4' : {
		'title' : "Detecting Undead",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "150",
		'resist' : "None",
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
		'_' : "The Adept becomes immediately aware of the class (Lesser or Greater), approximate number (to the nearest 5), and general location (to the nearest 20 feet) of all Undead within range. If the Undead are within ",
		'_' : "feet the Adept is aware of their exact types, numbers, and locations.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-5' : {
		'title' : "Fear",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "250",
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
		'_' : "The Adept instills in the target an uncontrollable fear. Unless the target successfully resists they must roll on the Fright Table. If a double effect is achieved, the Adept may modify the Fright Table roll up or down by an amount equal to the Rank of the spell. If a triple effect is achieved, the Adept may modify the Fright Table roll up or down by twice the Rank of the spell. See the Fright Table for the exact results of the fear.",
*/ 
// effects END

	},
  
	'G-6' : {
		'title' : "Noxious Vapours",
		'type' : "G",
		'abbr' : "6",
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
		'_' : "
      The entire area affected by the spell exudes a charnel stench, and all entities within it, except the Adept, must make a Will Power check or become nauseous. The Difficulty Factor for the Check is dependent on the Rank of the spell:
      ",
*/ 
Tables : {
	"Noxious Vapours Effects" : {
		'title' : "Noxious Vapours Effects",
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
		'_' : "Those entities who become nauseous have their Strike Chances reduced by ",
		'_' : ", and must make a Willpower concentration check to utilise Spell magic. The multiplier for this check is the same as that for resisting the nausea. In addition, this spell causes a thick, roiling white mist to rise from the ground. The mist is ",
		'_' : " inches high, and reduces the range of all forms of vision, within the mist, to ",
		'_' : " feet.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// para END

// effects END

	},
  
	'G-7' : {
		'title' : "Putrescence",
		'type' : "G",
		'abbr' : "7",
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
		'_' : "Volume of Food and / or Drink",
*/ 
// target END

/* effects
		'_' : "This spell causes up to ",
		'_' : " cubic feet of food and/or drink to putrefy, spoil, decay and rot. The foodstuffs will thereafter be unfit for consumption. If a Double or Triple effect is achieved, the amount of food and / or drink to be affected may be doubled or tripled.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-8' : {
		'title' : "Putrid Wound",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "250",
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
		'_' : "Living Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may cause ",
		'_' : " damage in the form of a putrid wound, to one entity within range, unless the target successfully resists. The wound is automatically infected. This spell will only affect living entities (i.e. it will not affect Undead, Animates, Demons, etc.)",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-9' : {
		'title' : "Rigor Mortis",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "200",
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
		'_' : "If the target entity fails to resist they are affected with a corpse-like stiffening. Any attempt to move will result in pain and accompanying cracking noises. The victim suffers a penalty to their Cast Chances and Strike Chances equal to ",
		'_' : ". In addition, their Agility is reduced by ",
		'_' : ". This Agility reduction will affect initiative and TMR.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'G-10' : {
		'title' : "Spectral Hand",
		'type' : "G",
		'abbr' : "10",
		'multiple' : "200",
		'resist' : "None",
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
		'_' : "Special",
*/ 
// target END

/* effects
		'_' : "The Adept conjures a giant, invisible, spectral hand, which executes a two word command(e.g. ) ``Smash that, Lift that, etc.'' The hand may move at TMR 4, and may not leave the Adept's range. The hand may exert force in one direction equal to a Physical Strength of ",
		'_' : ". Entities or Objects caught between the hand and an immovable object suffer ",
		'_' : " physical damage per Pulse (armour may reduce this). Entities may break away from the hand by executing a Withdraw action. If seen by Witchsight, the hand appears coldly blue and skeletal and is roughly 3 feet in diameter.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'G-11' : {
		'title' : "Warping",
		'type' : "G",
		'abbr' : "11",
		'multiple' : "175",
		'resist' : "Passive",
		'storage' : "Investment",
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
		'_' : "Volume of Object",
*/ 
// target END

/* effects
		'_' : "
      The Adept may twist and warp up to ",
		'_' : " cubic feet of any formerly living matter, into the shape of their choosing. The Volume may contain varied items.(e.g. An Adept could warp a collection of flowers, bones, and sticks together so as to form a funeral wreath.)
      ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "The spell confers no special artisan abilities on the Adept. Once warped the object(s) will remain in their new shape unless remoulded.",
*/ 
// para END

// effects END

	},
  
	'S-1' : {
		'title' : "Agony",
		'type' : "S",
		'abbr' : "1",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "This spell causes all entities in the affected area, except the Adept, to suffer extreme agony. Entities who fail to resist may only take Pass actions for the duration of the spell, or until such time as they leave the area of effect. Entities who successfully resist reduce all Strike Chances by 30, and take twice as long to perform any action. Note that Mind Mages gain a bonus to resist this spell equal to 2 x Rank with their Talent of Resisting Pain.",
*/ 
// effects END

	},
  
	'S-2' : {
		'title' : "Animation of the Dead",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "250",
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
		'_' : "Corpses",
*/ 
// target END

/* effects
		'_' : "The Adept may fill ",
		'_' : " human-sized corpses within range, with the power of undeath, giving them a gruesome semblance of life. The Undead so created will serve the Adept in all ways. The Undead will obey simple commands communicated verbally by the Adept. Corpses that possess most of their flesh will become Zombies, those that are mostly devoid of flesh will become Skeletons. If this spell is used on corpses of other than human size, the following strictures apply: Larger than human sized corpses count as 1 corpse per hex. Smaller than human sized corpses count as fractions of a corpse. Dog, 0.5; Cat, 0.2; Rat, 0.1. No more than 10 small corpses, even if smaller than rat sized, may be animated in the place of 1 human sized corpse. All corpses animated by a single casting of this spell must be of the same type. Note that if this spell is cast as the result of a Ward or Magical Trap the reanimated dead will be uncontrolled and will attack any living beings they can reach.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Binding Greater Undead",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "300",
		'resist' : "Active, Passive",
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
		'_' : "Greater Undead Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may order one Greater Undead, that fails to resist, to do anything that is within its physical capabilities, and is not obviously suicidal. No target may resist a valid order once it has failed to initially resist the spell. If the Undead to be affected is already controlled or bound, the rank of the Adept with this spell is compared to the rank of the original control or binding. If the original rank is equal or higher, the Undead is unaffected by this spell, otherwise the Undead must resist normally. This spell does not grant the Adept any particular ability to communicate with the target.",
*/ 
// effects END

	},
  
	'S-4' : {
		'title' : "Bone Construction",
		'type' : "S",
		'abbr' : "4",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "
      The Adept may create ",
		'_' : " cubic feet of interlocking bones in any shape or shapes of the Adept's choosing. Any dimension that is less than 1 foot is considered to be 1 foot for the purposes of computing volume. The bones always appear entirely within range of the Adept and may not appear on top of, or inside (partially or wholly), any entity. The bones become increasingly strong with higher Rank:
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

Tables : {
	"Bone Construction Effects" : {
		'title' : "Bone Construction Effects",
		Head : [ "", "Strength" ],
	Rows : [
		[ "0 - 5", "Bone" ],
		[ "6 - 10", "Wood" ],
		[ "11 - 15", "Bronze" ],
		[ "16 - 20", "Iron" ],
	],
	},
},
// effects END

	},
  
	'S-5' : {
		'title' : "Dark Vision",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Potion",
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
		'_' : "The Adept causes the target to develop excellent vision in the dark. Everything will appear monochromatic (ie shades of grey) and it is difficult to accurately estimate distance. The higher the Rank, the less of a problem this will be. Some amount of light must be present for this vision to operate. The range of the vision is ",
		'_' : "feet.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-6' : {
		'title' : "Hand of Death",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "250",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The target suffers [D + 1] damage each pulse that the Adept takes a Pass action and makes visible squeezing motions with their hand to simulate the squeezing of the victim's heart. Only at the time of casting, and on subsequent pulses when the Adept takes a pass action, must the target be in the Adept's line of sight. On Pulses that their heart is squeezed the target suffers extreme pain, and may only perform Pass actions.",
*/ 
// effects END

	},
  
	'S-7' : {
		'title' : "Life Draining",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "300",
		'resist' : "Special",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept's hand becomes charged for ",
		'_' : " seconds and will drain ",
		'_' : " Fatigue from the next entity to be touched, if the target fails to resist. This thereby discharges the spell. The Fatigue may be used to repair the Adept's own Fatigue and/or Endurance. If the target has no Fatigue remaining the Adept may drain from Endurance instead. The Adept may not drain from both Fatigue and Endurance with one cast of the spell. Note that only living entities will be affected by this spell and the Adept may not drain themselves.",
*/ 
/* rk @base, @inc, @per
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Mass Fear",
		'type' : "S",
		'abbr' : "8",
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
		'_' : "The spell instills in all entities within range, other than the Adept and those who successfully resist, an unreasoning and uncontrollable fear. All entities that fail to resist must roll on the Fright Table.",
*/ 
// effects END

	},
  
	'S-9' : {
		'title' : "Necrosis",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "450",
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
		'_' : "This spell causes ",
		'_' : " targets to suffer ",
		'_' : " damage in the form of internal hemorrhaging and rotting. If a target resists, they suffer only half damage (round up). Wounds inflicted by this spell will automatically be infected.",
*/ 
/* rk @per
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-10' : {
		'title' : "Petit Mort",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "250",
		'resist' : "Active, Passive",
		'storage' : "Investment, Potion",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration
		'_' : "Variable",
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
      By means of this spell, the Adept suspends all of the target's bodily functions, causing them to take on the semblance of death. The target will have no discernible signs of life, even so far as to appear dead to a Healer using empathy. The target's body will slowly cool to room temperature. At Rank 10 or below, the target's aura will still show them to be living, but at Rank 11 or greater, they will detect as ``Formerly Living''. A Healer will only be able to detect that the target is not truly dead if they attempt to either Preserve Dead or Resurrect. The target's body will require no sustenance of any sort, nor will it decay or age. The duration of the spell must be decided by the Adept at the time of casting, up to a maximum of:
      ",
*/ 
Tables : {
	"Petite Mort Effects" : {
		'title' : "Petite Mort Effects",
		Head : [ "", "Duration" ],
	Rows : [
		[ "0 - 3", "1 day" ],
		[ "4 - 8", "1 week" ],
		[ "9 - 11", "1 month" ],
		[ "12 - 16", "6 months" ],
		[ "17 - 19", "1 year" ],
		[ "20 - 20", "Any duration" ],
	],
	},
},
/* para
		'_' : "Note that if the spell is made into a Potion, the target of the spell is the imbiber, and they may only passively resist the spell's workings.",
*/ 
// para END

// effects END

	},
  
	'S-11' : {
		'title' : "Scarring Terrain",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "225",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range @base, @inc
		'_' : "feet",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "The Adept causes terrible ruin to all ground within range. The ground will be so damaged that it will be unable to support any flora for the duration of the spell (grass will turn to dust, small shrubs will shrivel, trees will lose all foliage and slowly die). Though the spell will wither any flora in the area, fauna will be unaffected.",
*/ 
// effects END

	},
  
	'S-12' : {
		'title' : "Spectral Warrior",
		'type' : "S",
		'abbr' : "12",
		'multiple' : "400",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration @conc
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
		'_' : "The Adept conjures to this plane a spectral warrior, and directs the warrior to hunt down and slay one target, who must be within sight when the spell is cast. The warrior is completely insubstantial and invisible except to its intended victim. It may be seen by others with Witchsight. It appears as a glowing spectre in baroque armour, with piercing red eyes. The warrior will continue with its mission until the Adept's concentration is broken, its intended victim dies, or it is dissipated or slain. The warrior can unerringly locate its intended victim and will always move towards them at its full movement rate, and engage them in melee combat. The warrior has a single, combined, Endurance and Fatigue Characteristic with a value of ",
		'_' : ". The spectral warrior automatically hits every Pulse for ",
		'_' : " damage. Its Initiative is ",
		'_' : ". The warrior has no defence or armour value. It may not be Stunned. The warrior's movement rate is 650 yards per minute, and its TMR is 13. The warrior may move in any direction without restriction, including through the air, walls, water, etc., except through the area of a Necromantic Special Counterspell. The warrior may be dissipated by having a Necromantic Special Counterspell cast on the area it occupies.",
*/ 
/* rk @base, @inc, @full
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
  
	'S-13' : {
		'title' : "Spectral Weapon",
		'type' : "S",
		'abbr' : "13",
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
		'_' : "The Adept may increase the usefulness of any weapon within range. The weapon begins to faintly glow with a cold, blue light. The weapon has its Base Chance increased by ",
		'_' : ", and the damage increased by ",
		'_' : ". In addition, the weapon may affect targets that are insubstantial, such as Spectres, Spectral Warriors, etc.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @per
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Stream of Corruption",
		'type' : "S",
		'abbr' : "14",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "From the Adept's fingertips erupts a column of rotting blood, pus, maggots and shards of bone which travel to the extent of the spell's range, and is 5 feet wide. The Adept may increase the width by ",
		'_' : " feet. All entities occupying hexes through which the stream passes must resist or suffer ",
		'_' : " damage. Entities who are damaged by this spell have their Base Chance of Infection increased by ",
		'_' : ". The putrid matter remains for about a minute after the spell is cast.",
*/ 
/* rk
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
		'title' : "Wall of Bones",
		'type' : "S",
		'abbr' : "15",
		'multiple' : "150",
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
		'_' : "The Adept conjures a wall of interlaced bones, 1 foot thick, 10 feet high, and either 20 feet long, or in a circle with a diameter of 10 feet. The Adept may increase height, length, or diameter, by ",
		'_' : " feet. Every time an entity comes in contact with the wall, they must passively resist or suffer a roll on the Fright Table. The wall can withstand 100 points of damage before crumbling to dust. ``A'' Class weapons cannot damage the wall.",
*/ 
/* rk
*/ 
// rk END

// effects END

	},
  
	'S-16' : {
		'title' : "Wraithcloak",
		'type' : "S",
		'abbr' : "16",
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
		'_' : "The Adept becomes shadowy and less corporeal, becoming increasingly ethereal with Rank. ",
		'_' : " is added to their defence, and if they are struck by weapon that is not magical or silvered, ",
		'_' : " is subtracted from the damage. In addition, the Adept gains a ",
		'_' : " bonus to their Stealth.",
*/ 
/* rk @base, @inc, @full
*/ 
// rk END

/* rk @full
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Converse with the Dead",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "200",
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
		'_' : "Spirit",
*/ 
// target END

/* material
		'_' : "Drawn Pentacle",
*/ 
// material END

/* effects
		'_' : "This Ritual summons a friendly Spirit, who will answer ",
		'_' : " questions for the Adept. The Adept must first draw a Pentacle, and remain within it throughout the Ritual. Each question will be answered with a riddle or puzzle. The GM creates all riddles and puzzles in answer to the Adept's questions. As the Adept's Rank with this ritual increases, the replies will become less cryptic and confusing. Undead may not be summoned or conversed with using this ritual.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'Q-2' : {
		'title' : "Summoning Lesser Undead",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Concentration",
		'casttime' : "2 hours",
		'concentration' : "Standard",
/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Lesser Undead",
*/ 
// target END

/* material
		'_' : "Drawn Pentacle",
*/ 
// material END

/* effects
		'_' : "To use this Ritual the Adept must first draw a Pentacle in or near an area where Lesser Undead may be found (near tombs, graveyards, barrows, etc.). The Adept must remain within the Pentacle during the entire course of the ritual. The ritual summons ",
		'_' : " Lesser Undead. Undead summoned successfully (i.e. not as a result of a backfire) will appear within 20 feet of the Adept's Pentacle, and will be unable to cross into the pentacle. The Undead are not bound or controlled in any way. If the ritual backfires the Lesser Undead will appear inside the pentacle and will attack the Adept.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'R-1' : {
		'title' : "Becoming Undead",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "250",
		'resist' : "Active, Passive",
		'actions' : "Ritual Sacrifice",
		'casttime' : "2 hours",
		'concentration' : "None",
/* duration
		'_' : "Permanent",
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
		'_' : "Drawn Pentacle, Sacrifice",
*/ 
// material END

/* effects
		'_' : "The Adept may transform a sentient entity into an Undead by employing this ritual. Once the entity joins the ranks of the Undead the effects may not be reversed. The Adept must draw a Pentacle and remain within it throughout the ritual, along with the entity to be transformed (who may be the Adept themself) and an entity to be sacrificed. During the course of the ritual, the Adept must sacrifice an entity of the same race as the entity to be transformed. The sacrifice may be bound, but must be conscious during the ritual. Upon the performance of sacrifice, a Ghost appears over the corpse. This Ghost becomes chained to the place in which the ritual was performed until freed by the death of the Adept. Once the sacrifice is performed, the Adept's Player checks to determine if the ritual was a success. If it is a success, the entity to be transformed joins the ranks of the Undead as the Greater Undead type of the Adept's choice. If the ritual backfires, the Ghost is transformed into a Wraith, who may immediately attack the Adept. Greater Undead created by this ritual retain all of their prior knowledge and magical abilities. They will also retain those physical abilities as may be used by their new form.",
*/ 
// effects END

	},
  
	'R-2' : {
		'title' : "Life Prolonging",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "350",
		'resist' : "None",
		'actions' : "Concentration",
		'casttime' : "8 hours",
		'concentration' : "Standard",
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

/* effects
		'_' : "The Adept may prolong an entity's life, including their own, causing them to remain unchanged and unaging for the duration of this ritual. Once the effects of the ritual wear off, the target will begin to age at the rate of 1 year per minute until they reach the proper biological age to match their chronological age. Normally, the ritual's effects last for ",
		'_' : "years, but at Rank 10 and above, the Adept can immediately upon the ritual being completed reduce the target's biological age by up to ",
		'_' : "year in addition to halting aging. Any backfire causes accelerated aging (this effect may be passively resisted).",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'R-3' : {
		'title' : "Permanency",
		'type' : "R",
		'abbr' : "3",
		'multiple' : "350",
		'resist' : "None",
		'actions' : "Anointing Undead or Bones",
		'concentration' : "None",
/* duration
		'_' : "Permanent",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Undead, Bones",
*/ 
// target END

/* material
		'_' : "Precious Ingredients",
*/ 
// material END

/* materialcost @base, @dec
		'_' : ", per cubic foot of bones or Undead to be affected",
*/ 
// materialcost END

/* effects
		'_' : "The Adept may use this ritual to increase the duration of the animation of any Lesser Undead, or any Bone Construction, created by them to ``Permanent''. This can be applied to the spells of Animating Bodily Parts, Animate Dead, and Bone Construction. The ritual may only be performed by the same Adept who made the animate or bones to be affected. The Adept must first cast the spell that they wish to make permanent and then immediately begin this ritual. A spell that has been enhanced by the use of this ritual may not be Counterspelled, but may still be Dissipated. The Adept must expend precious ingredients to perform this ritual.. Any dimension that is less than 1 foot is considered to be 1 foot for the purposes of computing volume. A standard human-sized Undead will be about 12 cubic feet.",
*/ 
// effects END

	},
  
	'R-4' : {
		'title' : "Shaping Flesh Golems",
		'type' : "R",
		'abbr' : "4",
		'multiple' : "500",
		'resist' : "None",
		'actions' : "Constructing Golem",
		'casttime' : "24 weeks",
		'concentration' : "None",
/* duration
		'_' : "Permanent",
*/ 
// duration END

/* basechance
		'_' : "Special",
*/ 
// basechance END

/* target
		'_' : "Parts of bodies",
*/ 
// target END

/* material
		'_' : "Parts of corpses & cost in Silver Pennies",
*/ 
// material END

/* materialcost @base, @dec
*/ 
// materialcost END

/* effects
		'_' : "
      This ritual is used to fashion a Golem from parts of different corpses. All pieces that are to go into the Golem must be found before the ritual can begin. In addition to the pieces of corpses and precious ingredients, the services of a Taxidermist or Undertaker of at least Rank 6 are needed for this ritual. Once the ritual is complete the Flesh Golem will become animate and will remain active until it is killed. A Flesh Golem will always obey its creator, but the GM must determine the complexity of commands it is capable of executing based on the intelligence of the brain used to fashion the Golem. This ritual is automatic, but there is a 1% chance of an accident each week during a Flesh Golem's creation. It must be noted that the creation of a Flesh Golem is an inexact science, and no two Flesh Golems seem to turn out the same. Even building a second Golem using identical materials rarely results in the same final creature. To perform this ritual the Adept will require access to an Alchemist's laboratory or a Binder's workshop. Flesh Golems have the following characteristics:
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "A Flesh Golem can be put together from different creatures within a species, or from any number of different species. For example, a troll could be fashioned with the brains of a human, and the wings of a gargoyle, or an ogre could be made with the strength of one ogre (presumably a powerful one), the endurance of another hardy one, and the brain of a bright ogre. Seams will show wherever parts are sewn together, and at low Ranks the Golem will exude a horrible, rotting odour. By Rank 6, the odour will only be noticeable in very close Proximity to the Golem, and above Rank 10 the odour will only be noticed by canines and other creatures with an exceptional sense of smell.",
*/ 
// item END

/* item @title
		'_' : "Flesh Golems never retain any of the skills or spell casting abilities (although they do retain some weapon skills) of any of the creatures from which they are made, but do retain any talents appropriate to the parts of a creature used. Thus, a Golem made with the eyes of a basilisk would be able to turn creatures to stone in the same manner as a basilisk.",
*/ 
// item END

/* item @title
		'_' : "(yards per minute): Variable, according to the Golem's size and method(s) of locomotion.",
*/ 
// item END

/* item @title
		'_' : "Average the Physical Strength of the creatures from which the Golem's muscle tissues were taken.",
*/ 
// item END

/* item @title
		'_' : "Average the Manual Dexterities of the creatures from which the Golem's muscles and brain were taken.",
*/ 
// item END

/* item @title
		'_' : "Average the Agilities of the creatures from which the Golem's muscles and brain were taken.",
*/ 
// item END

/* item @title
		'_' : "0",
*/ 
// item END

/* item @title
		'_' : "Average the Endurances of the creatures from which the Golem's muscles and internal organs were taken.",
*/ 
// item END

/* item @title
		'_' : "As for Endurance, but the creature from which the Golem's lungs were taken counts twice within the average.",
*/ 
// item END

/* item @title
		'_' : "Add 5 to the Willpower of the creature from which the Golem's brain was taken. Maximum 30.",
*/ 
// item END

/* item @title
		'_' : "Variable, depending on the quality of the eyes, ears, and mental faculties of the creatures that were used, but never more than 10 (+ Rank / 2, rounded up).",
*/ 
// item END

/* item @title
		'_' : "Variable, depending on the creatures used, but never more than 6 (+ Rank).",
*/ 
// item END

/* item @title
		'_' : "Variable depending on Agility and GM's discretion.",
*/ 
// item END

/* item @title
		'_' : "Variable, depending on the creature from which the skin was taken.",
*/ 
// item END

/* item @title
		'_' : "A Flesh Golem can use any natural weapons (such as claws and fangs) built into it, as well as any weapons it can carry. It will have the same Ranks in weapons as the creature who contributed its brain divided by 2 and rounded down. This is knowledge only, and there is no guarantee that the Golem will have the requisite PS or MD, or will even be able to manipulate weapons.",
*/ 
// item END

/* item @title
		'_' : "The GM will have to use discretion in allowing combinations of creatures. It would be absurd to allow a Golem to be built with a dragon's head on a human body - due to discrepancies in size, for instance. Flesh Golems can be harmed by weapons or magic as per normal.",
*/ 
// item END

// description END

// effects END

	},
  
	'R-5' : {
		'title' : "Summoning Greater Undead",
		'type' : "R",
		'abbr' : "5",
		'multiple' : "350",
		'resist' : "Passive",
		'actions' : "Concentration",
		'casttime' : "2 hours",
		'concentration' : "Standard",
/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Greater Undead",
*/ 
// target END

/* material
		'_' : "Drawn Pentacle",
*/ 
// material END

/* effects
		'_' : "This ritual works in the same manner and under the same conditions as the Ritual of Summoning Lesser Undead (Q-1) except that the Ritual summons only one Greater Undead.",
*/ 
// effects END

	},
  
	},
  
};
  

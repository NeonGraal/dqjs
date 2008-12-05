
// == Dq -  College Bardic ==
     
dq = {
BA : {
		'title' : "Bardic Magics",
		'version' : "2.1",
		'abbr' : "BA",
		'requiredMA' : "16",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "Adepts of the College of Bardic Magics can only practise their art in a region where sound can be heard. It is not possible to practise Bardic magic in a location where sound is silenced, magically or otherwise. Bardic magic may be practised underwater, but the results may vary somewhat from those expected.",
*/ 
// para END

// subsection END

/* modifiers @group
*/ 
/* modifier @mod
		'_' : "For each Rank of Troubadour Singing",
*/ 
// modifier END

/* modifier @mod
		'_' : "Area is acoustically excellent",
*/ 
// modifier END

/* modifier @mod
		'_' : "Area deadens sound",
*/ 
// modifier END

/* para @title
		'_' : "This bonus is only applicable when spell is sung",
*/ 
// para END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Concealed Casting",
		'abbr' : "1",
		'multiple' : "150",
/* effects
		'_' : "The Adept is able to conceal the casting of a spell within the words of a mundane song. If an observer is listening intently the observer may make a (2 times PC - Rank) check to notice. The bard may not make any movements which are inappropriate to the song being sung. All aspects of the spell (including Base Chance) must be cast at the lower of this talent and the spell's Rank and the Base Chance is further reduced by 20%. This Talent only functions with spells of the Bardic College.",
*/ 
// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Enhanced Hearing",
		'abbr' : "2",
		'multiple' : "75",
/* effects
		'_' : "The Adept is able to hear sounds too faint to be heard normally. The Rank of this talent should be added to the Adept's perception for the purposes of detecting sounds only. This talent can be activated and deactivated at will, and the Adept may be temporarily deafened by loud noises while it is activated.",
*/ 
// effects END

	},
  
	'T-3' : {
		'type' : "T",
		'title' : "Melodic Memory",
		'abbr' : "3",
		'multiple' : "75",
/* effects
		'_' : "The Adept can attempt to commit to memory any sounds that they can hear. The Adept must concentrate to activate this talent, and the Adept's player should represent this by taking down key words and phrases. By means of this talent the Adept can memorise music, dramas, dialogue etc. even if they cannot understand them. The Adept's chance of success to recall the sounds is ",
		'_' : " - 5 / week since the sounds were heard. If the Adept rolls above their Base Chance the higher the roll the greater the degree of error.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'T-4' : {
		'type' : "T",
		'title' : "Project Voice",
		'abbr' : "4",
		'multiple' : "75",
/* effects
		'_' : "The talent allows the Adept to project their voice so that it may be heard clearly everywhere within ",
		'_' : "feet.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-1' : {
		'title' : "Clairaudience",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "200",
		'resist' : "None",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept creates an invisible, intangible ear that can be moved about within the spell's range. The ear appears in the same hex as the Bard, and operates as a normal ear except that it is not physically attached to the Bard. The Adept may move the ear at up to ",
		'_' : " TMR, taking pass actions to do so. The ear may be detected by Witchsight or similar means of detection. If the ear takes any magical damage (it may be struck by a magical weapon) it is destroyed and the Adept is stunned. It cannot be used to target spells. In the area of a Confusion of Tongues spell the Adept will only hear meaningless jumbled words. Clairaudience will not penetrate the volume of a Shell of Silence spell.",
*/ 
/* rk
*/ 
// rk END

// effects END

	},
  
	'G-2' : {
		'title' : "Enchant Instrument",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "100",
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
		'_' : "Musical Instrument",
*/ 
// target END

/* effects
		'_' : "With this spell the Adept draws on the resonance left in an instrument from it having been played. The spell enchants one musical instruments so that a being may play it at an effective Troubadour Rank equal to ",
		'_' : ", whether or not they know how to play that form of instrument. This Rank may not exceed the maximum Rank the instrument being targeted has previously been played at.",
*/ 
/* rk @per
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Ethereal Orchestra",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "100",
		'resist' : "None",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "Creates magical accompaniment for the Adept's performance. The accompaniment consists of the sounds of ",
		'_' : " instruments. The Adept must be familiar with music made by their chosen instruments, but need not be able to play the instruments themself. This accompaniment increases the effective Rank of the performance by ",
		'_' : " without bestowing new skills, or affecting quasi-magical abilities or base chances. The maximum volume generated may not exceed that of loud chanting, and the accompaniment can be heard clearly everywhere within the range of the spell.",
*/ 
/* rk @base, @full
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Exhortation",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "By means of this spell the Adept may attempt to affect the mood of a crowd, inciting a riot or calming a mob. The reaction roll of the crowd is modified by ",
		'_' : ". Once the Adept ceases to play and/or sing, the spell ceases to be in effect, but the effects may continue as determined by the GM.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-5' : {
		'title' : "Quietness",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Potion, Investment",
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
		'_' : "The sounds of the target's movement are partially deadened. The effect of this is to add ",
		'_' : " to Stealth. Any Entity attempting to cast Bardic magic while under the effect of this spell suffers a 5 penalty to their Base Chance due to the deadening of sound.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-6' : {
		'title' : "Mockery",
		'type' : "G",
		'abbr' : "6",
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
		'_' : "Sentient Entity",
*/ 
// target END

/* effects
		'_' : "The Adept sings or orates a song or poem, detailing the target's shortcomings and inflicting general abuse, insults and mockery. A target that fails to resist may be embarrassed, shocked, humiliated, indignant or infuriated as appropriate to their personality. Whatever the emotional effect, the character is distracted, and may do nothing other than attempt to silence the Adept (by whatever means they wish) or take pass actions for the duration of the spell. A check of 1 x WP may be made at the end of the pulse following the pulse in which the spell is cast and every pulse thereafter. Once the target successfully makes a check the spell ends. The target must be able to hear and understand the Adept in order for the spell to have any effect.",
*/ 
// effects END

	},
  
	'G-7' : {
		'title' : "Shatter",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "200",
		'resist' : "Special",
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

/* target @base, @inc
		'_' : "pounds max weight, single Object",
*/ 
// target END

/* effects
		'_' : "
      The Adept shrieks in an unnatural and piercing fashion, creating ethereal dissonance that can destroy objects. The Adept may affect an object of no more than ",
		'_' : " pounds. Additionally, the Rank of this spell determines what material may be destroyed:
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

Tables : {
	"Shatter Effects" : {
		'title' : "Shatter Effects",
		Head : [ "", "Material" ],
	Rows : [
		[ "0 - 3", "glass, mirror" ],
		[ "4 - 6", "ceramics" ],
		[ "7 - 9", "crystals" ],
		[ "10 - 12", "stone" ],
		[ "13 - 14", "gems" ],
		[ "15 - 16", "bone or ivory" ],
		[ "17 - 18", "hard metal (iron)" ],
		[ "19 - 20", "soft metal (bronze)" ],
	],
	},
},
/* para
		'_' : "Note that the base MR of objects is 0. Crafted objects and those made of precious materials receive bonuses to their resistance rolls, as detailed below. Shaped magical items are immune to the effects of this spell. Possessions have their owners MR. These bonuses are cumulative. Crafting modifier: 2 x Artisan Rank; Material Modifiers: Silver +5%, Gold +10%, Truesilver +15%, Precious gems, etc. +20%. The GM should only apply the modifier of the material that makes up the majority of the object.",
*/ 
// para END

// effects END

	},
  
	'G-8' : {
		'title' : "Silent Sounds",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "100",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "The target object generates sounds which are almost inaudible, but affect living entities within ",
		'_' : "feet rendering them either: edgy, and more susceptible to fear and awe; or tranquil, and less prone to fear and awe. Affected beings either add or subtract ",
		'_' : " to rolls made on the fright or awe tables as appropriate.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-9' : {
		'title' : "Soothe the Savage Beast",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "200",
		'resist' : "Passive",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept plays or sings soothing music which causes any living non sentient entities within or entering the area of effect to resist or be pacified. Animals that do not resist must make a check against ",
		'_' : " to attack the Adept, and a check against 2 x WP to initiate any attack whilst in the area. The creature's reaction roll is increased by ",
		'_' : ", but the reaction roll may not be made to exceed 95 by the effects of this spell. If any soothed entity is attacked, or the Adept ceases to play and/or sing, the spell ceases to be in effect.",
*/ 
/* rk @base, @dec
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-10' : {
		'title' : "Speaking Beasts",
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
		'_' : "minutes",
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
		'_' : "This spell confers any one language known to the Adept at Rank 6 or greater, upon an animal (beast, avian, or aquatic; any non-sentient able to vocalise sounds) for the duration of the spell, at a language Rank equal to ",
		'_' : ".",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'G-11' : {
		'title' : "Ventriloquism",
		'type' : "G",
		'abbr' : "11",
		'multiple' : "150",
		'resist' : "None",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept may project their voice so that it appears to be emanating from anywhere within the range of the spell. Also, it may be altered so that it sounds like any other voice or voices the Adept has heard and memorised with the Melodic Memory talent. The Adept can project ",
		'_' : " extra, simultaneous and independent voices.",
*/ 
/* rk @full
*/ 
// rk END

// effects END

	},
  
	'S-1' : {
		'title' : "Charming",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "400",
		'resist' : "Active, Passive",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept can influence the actions of an entity who fails to resist, provided that the target can hear and understand the Adept. The target will see the Adept as their true friend and will readily accept most suggestions emanating from them. Sworn enemies of the Adept (or of their race) will not be affected by this spell. Any suggestion that is not directly and obviously inimical to the target's interests (as defined by the GM, but usually limited to actions that would be injurious or fatal) will be acted upon 90% of the time. The Adept may only ensure 100% compliance with a request by making it an order in which case the target makes an immediate Resistance Check. Any suggestion that would lead to the target's injury or death results in an immediate Resistance Check. If successful the spell is broken. Otherwise, the target accepts the order and will carry it out faithfully for the duration of the spell.",
*/ 
// effects END

	},
  
	'S-2' : {
		'title' : "Compel Speech",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range
		'_' : "Touch",
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
		'_' : "The target entity must resist, or be compelled to speak continuously on random subjects. Should anyone put a question to the entity they must make a ",
		'_' : " check or speak to the question. The entity is not compelled to speak the truth by this spell, or any particular language, and may cast spells.",
*/ 
/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Comprehending Tongues",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "300",
		'resist' : "None",
		'storage' : "None",
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
		'_' : "Enables the Adept to speak and understand one language at a Rank equal to ",
		'_' : ". The Adept must have heard the language that they wish to speak. The language may be nominated by name, or by choosing to speak a language that the Adept has memorised some words and phrases from using the Talent of Melodic Memory. This spell allows the Adept to be understood, but confers no other bonuses.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-4' : {
		'title' : "Confusion of Tongues",
		'type' : "S",
		'abbr' : "4",
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

/* target @base, @inc
		'_' : "foot Area",
*/ 
// target END

/* effects
		'_' : "All entities within the radius of effect of the spell who fail to resist become unable to communicate in, or understand any verbal language whilst within the affected area. Affected entities may not use the Military Scientist ``time out'' ability. They can cast spells and trigger items, but if casting, the backfire threshold (i.e. +30 or +40) is decreased by ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Dance of Swords",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "250",
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
		'_' : "While under the effect of this spell, the target may cavort and leap with surpassing grace and extravagance by evoking the magic of the dance. The target may walk and act in all ways normally, however, when they enter combat they may ``dance'' adding ",
		'_' : " to their Defence provided they move at least 1 hex each pulse. If the target is unwillingly confined to a single hex (by the effect of melee zones for example) the target must halve the defence bonus due to this spell. If the target is unable to move freely (in close combat or stunned) then no defence bonus is awarded. The target may also subtract the Rank of this spell from the dice roll for any AG Check solely involving Agility (e.g. avoid knockdown, leaping pits etc.).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-6' : {
		'title' : "Enthralling Audience",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "200",
		'resist' : "Special",
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
		'_' : "Sentient living entities",
*/ 
// target END

/* effects
		'_' : "All entities who willingly listen to the song sung by the Adept will perceive a succession of evocative images which illustrate the song being sung. These images are hallucinatory in nature, having no external reality, but are seen by the audience. No resistance check needs to be made by those who do not submit willingly to the effects of the spell, but they will not perceive the images. Those who submit to the effects will be enthralled by the images and may take no other action, unless and until their concentration is broken by physical contact with an external entity or force. The Adept must continue to sing throughout the duration.",
*/ 
// effects END

	},
  
	'S-7' : {
		'title' : "Shout of Thunder",
		'type' : "S",
		'abbr' : "7",
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
		'_' : "The Adept projects a thunderous shout of rage at the target. If the target fails to resist it suffers ",
		'_' : " damage and is automatically stunned. The target will also be deafened for ",
		'_' : " minutes and will have a very nasty headache which will make concentration one level more difficult until it wears off or is cured by a healer. There is a chance equal to ",
		'_' : "that this deafness will be permanent until cured by the arts of a Healer of Rank 4 or greater, or by the Ritual of Cure Deafness and Muteness. The sound is clearly audible in the area surrounding the target.",
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
  
	'S-8' : {
		'title' : "Inspirational Song",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "300",
		'resist' : "None",
		'storage' : "None",
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

/* target @base, @per
		'_' : "Sentient Entities",
*/ 
// target END

/* effects
		'_' : "The Adept sings a song of inspiration mentioning the name of each target. Each target gains ",
		'_' : " to their Strike Chances, and ",
		'_' : " to Fear Resistance rolls and Rally Chances. Targets must be able to hear and understand the Bard. The Adept must sing or orate for the entire duration of the spell, or the effect ceases. The Adept may perform other actions as long as they have no vocal requirement.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-9' : {
		'title' : "Satyr's Dance",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "450",
		'resist' : "Active, Passive",
		'storage' : "Potion",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @conc, @base, @inc
		'_' : "seconds",
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
		'_' : "The Adept sings and dances in a hypnotic pattern, entrancing all in range who fail to resist, and forcing them to join in the dance. All dancers (including the Adept) may move at 1/2 TMR (round up), but are unable to take any other action. The area of effect moves with the Adept and all victims will attempt to stay within range. Any entity that enters the area of effect must resist or suffer the same fate. The Adept must be seen and heard for a target to be effected. Victims of this song get an additional resistance roll every pulse that they are attacked or restrained, or somehow prevented from being within the area of effect.",
*/ 
// effects END

	},
  
	'S-10' : {
		'title' : "Shell of Silence",
		'type' : "S",
		'abbr' : "10",
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

/* target @base, @inc, @full
		'_' : "foot diameter Volume",
*/ 
// target END

/* effects
		'_' : "The Adept creates an invisible spherical shell. Sound created within this shell is totally inaudible to entities outside the shell and vice versa. A Clairaudience spell projected from outside the shell cannot penetrate it.",
*/ 
// effects END

	},
  
	'S-11' : {
		'title' : "Silver Tongue",
		'type' : "S",
		'abbr' : "11",
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
		'_' : "Everything that the Adept says becomes more convincing and believable. This ability does not force listeners to believe the Adept, and obvious lies where there is evidence to the contrary will be quickly dismissed. But in the absence of such evidence, or when the lie is not blatant, listeners will tend to take the Adept at their word. All natural or magical abilities that are normally able to determine whether the Adept is lying or telling the truth suffer a negative modifier to their Base Chance of ",
		'_' : ". Those abilities that always work or have no BC may be presumed to have a BC of 100% for these purposes. In addition, no magical ability is able to coerce the Adept to speak truthfully.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-12' : {
		'title' : "Siren Song",
		'type' : "S",
		'abbr' : "12",
		'multiple' : "250",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "All entities within the range of the spell and able to hear the Adept, must resist or feel a sudden affection for the Adept. They will then be unable to carry out any action that might harm the Adept. However, if the Adept carries out any hostile action towards an entity or the entity is rendered no longer able to hear, that entity will be released from the spell. The Adept must continue to sing for the duration or the spell ceases to be in effect.",
*/ 
// effects END

	},
  
	'S-13' : {
		'title' : "Slumber Song",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "250",
		'resist' : "Special",
		'storage' : "Investment",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Until waking",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target @base, @per
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept plays a song that affects ",
		'_' : " willing entities causing them to drift into a normal sleep. All affected targets fall asleep in ",
		'_' : "seconds. The targets will remain asleep until disturbed or they awaken normally. The resulting sleep is healing and refreshing allowing the targets to regain ",
		'_' : " more FT per hour while under its effect.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Whispering World",
		'type' : "S",
		'abbr' : "14",
		'multiple' : "250",
		'resist' : "None",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
*/ 
/* para
		'_' : "The Adept whispers a message consisting of no more than ",
		'_' : "words. The message travels to the recipient, who must be known to the Adept, taking D + (distance travelled / 100) hours. The recipient's surroundings (such as trees, waves or wind) whisper the message to the recipient. There is a once times perception chance that any Bard engaged in concentration will ``overhear'' a whisper which passes by their location.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

// effects END

	},
  
	'Q-1' : {
		'title' : "Implanting Sounds",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Perform song or sounds",
		'concentration' : "None",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "; Permanent at Rank 20week",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object or Area",
*/ 
// target END

/* effects
		'_' : "This ritual creates a type of ward, implanting a sequence of sounds (which may be words, spoken or sung) of up to ",
		'_' : "seconds duration into an object or area. The Adept may determine the triggering conditions, in the same way as a ward. Additionally, sounds implanted into an object may have a range of ``Touch'' thus being triggered by a tactile cue, usually simply the object being touched. The sound will be emitted each time the triggering conditions are met, up to a maximum of ",
		'_' : " times. The volume of the sound produced may not exceed that of loud ringing bells. The ritual dissapates at the end of its duration or if the Bardic General Knowledge counterspell is cast on the target. If the ritual backfires the sounds are triggered immediately and will repeat ",
		'_' : " times, or until counterspelled.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* rk
*/ 
// rk END

// effects END

	},
  
	'Q-2' : {
		'title' : "Recitation",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "200",
		'resist' : "None",
		'actions' : "None",
		'concentration' : "Standard",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration
		'_' : "Special",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object, Area or Entity",
*/ 
// target END

/* effects
		'_' : "At the completion of this ritual the Adept will enter a trance, during which they will recite a legend or story relating to their current location, to an object held in their hands, or to an entity they are touching. If no such story exists, or the ritual fails, then the Adept will recite some amusing but trivial song. If the ritual backfires the legend will be false. The amount of information received is related to the Bard's Rank with this ritual. If the GM prefers this may be played as obtaining an answer to ",
		'_' : " short questions related to the location, object or entity which will be answered in ``legendary'' terms. This ritual may not be repeated on a given target more than once per season.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'R-1' : {
		'title' : "Cure Deafness and Muteness",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "200",
		'resist' : "None",
		'actions' : "Singing",
		'concentration' : "Standard",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration
		'_' : "Immediate",
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
*/ 
/* para
		'_' : "The target is cured of deafness or muteness, whether of natural or magical origin. Only those born deaf or mute cannot be affected by this ritual.",
*/ 
// para END

// effects END

	},
  
	'R-2' : {
		'title' : "Resounding Instrument",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Playing instrument",
		'casttime' : "6 Hours",
		'concentration' : "None",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration @base, @inc
		'_' : "weeks",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Musical Instrument",
*/ 
// target END

/* material
		'_' : "Instrument",
*/ 
// material END

/* effects
		'_' : "This ritual enchants a instrument, which must be of religious or martial nature, such as trumpets, horns, bagpipes, drums, bells, or gongs. The enchanted instrument can be heard at its normal volume (usually loud) throughout an area with a radius equal to ",
		'_' : "mile. The effect may be made permanent if the Adept chooses to permanently expend a point of Endurance. If the ritual backfires the instrument will be destroyed in addition to the normal backfire effect.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'R-3' : {
		'title' : "Sound of Doom",
		'type' : "R",
		'abbr' : "3",
		'multiple' : "400",
		'resist' : "None",
		'actions' : "Playing trumpet and walking",
		'casttime' : "Special",
		'concentration' : "Standard",
/* range
		'_' : "Sight",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Structure",
*/ 
// target END

/* material
		'_' : "Musical Instrument",
*/ 
// material END

/* effects
		'_' : "The Adept marches around the structure, within earshot of the walls, playing a musical instrument. The music must be able to be clearly heard at the structure. The size of structure which may be encompassed is ",
		'_' : "feet in diameter. The structure begins to shake and vibrate, and at the end of the ritual, if it is successful, the structure falls apart. The Adept must walk slowly (1 mph) around the target until they have completely encircled the target at least once, and have marched for at least an hour.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'R-4' : {
		'title' : "The Piper's Song",
		'type' : "R",
		'abbr' : "4",
		'multiple' : "400",
		'resist' : "None",
		'actions' : "Playing instrument and walking",
		'concentration' : "Standard",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Self",
*/ 
// target END

/* material
		'_' : "Instrument (usually pipe)",
*/ 
// material END

/* effects
		'_' : "
      The Adept nominates one type of non-sentient entity which normally forms swarms, packs or herds (e.g. rats, locusts, wolves, elephants) at the start of this ritual. The size of the entity which can be affected is dependent on Rank:
      ",
		'_' : "
      The Adept then begins to play a tune which has a compelling effect on all entities of the target type. The area of effect moves with the Adept, and as they play and walk, all of these entities within range will begin to follow the Adept, growing into a horde. At the end of at least 1 hour the Adept gives a single command to the horde. The wording of this command may not exceed ",
		'_' : " words. The command will be obeyed for a period of ",
		'_' : "hour.
    ",
*/ 
Tables : {
	"The Piper's Song Effects" : {
		'title' : "The Piper's Song Effects",
		Head : [ "", "Entity Size" ],
	Rows : [
		[ "0 - 5", "entities less than 1 lb in weight" ],
		[ "6 - 10", "entities less than 10 lb in weight" ],
		[ "11 - 15", "entities less than 100 lb in weight" ],
		[ "16 - 20", "entities greater than 100 lb in weight" ],
	],
	},
},
/* rk @base, @per
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	},
  
};
  


// == Dq -  College Mind ==
     
dq = {
MI : {
		'title' : "Sorceries of the Mind",
		'version' : "1.1",
		'abbr' : "MI",
		'requiredMA' : "11",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* modifiers @group
*/ 
/* modifier @mod
		'_' : "Each point the Adept's Willpower is greater than target's Willpower.",
*/ 
// modifier END

/* modifier @mod
		'_' : "Each point the Adept's Willpower is less than target's Willpower",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Resist Temperature",
		'abbr' : "1",
		'multiple' : "250",
/* effects
		'_' : "Adepts of this College suffer ",
		'_' : " less Damage Points from either heat or cold (or fire or ice) used as weapons. They are immune to extremes of temperature.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Resist Pain",
		'abbr' : "2",
		'multiple' : "300",
/* effects
		'_' : "
      Adepts of this College are more or less immune to pain. They cannot be tortured or stunned. In addition, if there is a chance that their concentration may have been broken, ",
		'_' : " is always added to the Base Chance of their maintaining the concentration despite intrusions.
      ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "Their concentration is never automatically broken (i.e. is never broken without a check to see if they maintain concentration).",
*/ 
// para END

/* para
		'_' : "Since this is a magical talent, it is affected by cold iron. However, for a weapon to affect the talent, the weapon must be cold iron, must have done endurance damage, and must remain in contact with the body. If cold iron is used in the torture of a mind mage, the Adept adds their concentration bonus to the base chance of resisting the torture attempt.",
*/ 
// para END

// effects END

	},
  
	'T-3' : {
		'type' : "T",
		'title' : "Sensitivity to Danger",
		'abbr' : "3",
		'multiple' : "300",
/* effects
		'_' : "Adepts of this College always add ",
		'_' : " to their chances of detecting an ambush.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-1' : {
		'title' : "Extrasensory Perception",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept can sense the presence and general mood (but not the exact nature) of any entity within range of the spell. ESP will detect the presence of an entity even if that entity is mind cloaked. Spells cannot be targetted through ESP.",
*/ 
// effects END

	},
  
	'G-2' : {
		'title' : "Limited Precognition",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Potion",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "The Adept may see (unclearly) up to ",
		'_' : " hours into the future and may foresee events that may or may not be important to them. This spell works at any range.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Mind Cloak",
		'type' : "G",
		'abbr' : "3",
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
		'_' : "The Adept cloaks their own mind so that their thoughts cannot be detected or ``read'',(e.g. ) by Spell of Telepathy (S-2) or other mind reading talents, spells or rituals. The Adept's Resistance versus Mental Attack (S-1) is increased by ",
		'_' : " while the spell is in effect.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Empathy",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Touch until Rank 10",
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
		'_' : "The spell allows the Adept to feel the emotions and physical sensations which the target of the spell is currently experiencing. It also allows the Adept to absorb wounds from Endurance and Fatigue at a rate of 2 points cured for every 1 which the Adept agrees to subtract from their own Fatigue (never Endurance). Thus, an Adept could remove 6 Damage Points from a target by inflicting 3 of the 6 on themselves (the other 3 being eliminated). At Rank 10 or higher, the Adept can cast this spell on characters who are ",
		'_' : " above 10 feet or less from them.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-5' : {
		'title' : "Hypnotism",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "200",
		'resist' : "Active, Passive",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The Adept may lull an entity into a trance-like state in which they will be subject to suggestion. The spell may only be cast over a target with whom the caster is normally able to communicate verbally. It can never be cast over a totally hostile target. Once the subject has been hypnotized, the Adept can make suggestions which the subject will readily accept unless they conflict directly with their best interests. The subject will remain suggestible so long as concentration is maintained and will continue to implement the post-hypnotic suggestion for ",
		'_' : " hours after the spell ceases. The subject will never have any idea where the suggestions they are implementing came from.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "Only one post-hypnotic suggestion may be made per spell. The duration of the spell is concentration - it is only the post-hypnotic suggestion that has a time duration.",
*/ 
// para END

// effects END

	},
  
	'G-6' : {
		'title' : "Controlling Animals",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "100",
		'resist' : "Active, Passive",
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
		'_' : "
      The Adept gains control over every action of one animal within range. If they release the animal or their concentration is broken it may attack them.
      ",
*/ 
/* para
		'_' : "The Adept controls the animal's mind and body,(e.g. ) it is only possible to make a bird fly if the Adept is intimately familiar with the function of flying.",
*/ 
// para END

// effects END

	},
  
	'G-7' : {
		'title' : "Controlling Person",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "650",
		'resist' : "Active, Passive",
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
		'_' : "Sentient Entity",
*/ 
// target END

/* effects
		'_' : "The Adept gains control over every action of one person within range. They may control the physical activities of that person, but may not cause the target to cast spells. The subject always acts as if they were also affected by a Spell of Slowness (E &E S-11). The spell continues in effect until the Adept's concentration is broken or they release the victim.",
*/ 
// effects END

	},
  
	'S-1' : {
		'title' : "Mental Attack",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may cast this spell at any entity within range who can be seen or whose position has been pinpointed via Telepathy (S-2). If the target fails to resist, they fall unconscious for the duration of the spell. In addition, at Rank 15 and above they lose [D - 5] from Willpower. This loss of Willpower may be cured via hypnotism (G-5). Once hypnotised, the subject is totally cured.",
*/ 
// effects END

	},
  
	'S-2' : {
		'title' : "Telepathy",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "550",
		'resist' : "Passive",
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
		'_' : "The spell gives the Adept the ability to read the thoughts of any entity within range, who fails to resist. Each pulse, the Adept may use their telepathy to either locate the minds that are within range, or to read the thoughts of a particular mind. The Adept need not know the language of the entity whose thoughts are being read, but will have difficulty comprehending the thoughts of alien minds. Entities only get to resist telepathy once, regardless of whether they move in or out of range of the spell. Animal thoughts are usually very primitive and can summed up in a single word,(e.g. ) ``food'', ``danger'', ``sex.''",
*/ 
// effects END

	},
  
	'S-3' : {
		'title' : "Phantasm",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "400",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Special",
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
		'_' : "
      The spell conjures a beast with an Endurance and Fatigue with a combined value of ",
		'_' : ". The creature is a magical entity which must be targeted at a particular victim. It will then track the victim down and attack them until either the victim is killed, the victim kills it or the phantasm is dispelled (with a counterspell). The phantasm always hits for ",
		'_' : " damage per pulse.
      ",
*/ 
/* rk @base, @inc, @full
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "The target can only be an entity who is can be seen by the Adept or uniquely identified by Telepathy, or whose Individual True Name is known and used in the spell. The TMR of a phantasm is ",
		'_' : ". The phantasm is unseeable rather than invisible to all except the target, including the Adept. The phantasm will be dispelled if an area effect Mind Special Knowledge counterspell is cast on an area that the phantasm occupies, but it can enter an already existing area counterspell.",
*/ 
/* rk @base
*/ 
// rk END

// para END

/* para
		'_' : "The phantasm appears as an horrific nightmare from the target's subconscious, hence the Adept cannot choose its appearance. A phantasm always acts last in the pulse.",
*/ 
// para END

// effects END

	},
  
	'S-4' : {
		'title' : "Molecular Disruption",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "400",
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
		'_' : "This spell causes cellular damage to any living being or being in corporeal (substantial rather than insubstantial) form. It does ",
		'_' : " to any single target that fails to resist and half damage (round up) to any target that successfully resists.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Molecular Rearrangement",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "1000",
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
		'_' : "Entity or Object",
*/ 
// target END

/* effects
		'_' : "
      The Adept may rearrange the cells of any target that fails to resist, turning it into any shape of the same mass that they desire.
      ",
*/ 
/* para
		'_' : "If the new form is maintained without disruption for the duration of the spell, the target may revert to its original shape.",
*/ 
// para END

// effects END

	},
  
	'S-6' : {
		'title' : "Force Shield",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "250",
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
		'_' : "Reduces the Base Chance of the Adept being hit by ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-7' : {
		'title' : "Healing",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "375",
		'resist' : "None",
		'storage' : "Investment, Ward, Potion",
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
		'_' : "The Adept may heal the target of ",
		'_' : " Damage Points that have been removed from the subject's Fatigue or Endurance.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Undetectability",
		'type' : "S",
		'abbr' : "8",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The target of this spell becomes undetectable (other than by touch). The target may be detected if an observing entity makes a 1 x perception roll. Only one perception roll is made per entity for the duration of the spell, irrespective of the target of the spell's actions.
      ",
		'_' : "
      (e.g. An undetectable horse will make no sound crossing a cobblestone courtyard; an undetectable man will make no sound knocking on a door, however if he uses the knocker he will (as neither knocker nor door are possessions).) The target of this spell may initiate physical attacks or spell casting without the spell ceasing effect. The spell may not be terminated voluntarily (other than by way of counterspell).
      ",
*/ 
/* para
		'_' : "The target of the spell is effectively invisible (per E &E G-8, but cannot be seen by Witchsight or other magical means) and therefore has no shadow or reflection. The target also emits no odour and leaves no scent. The target makes no audible sound from its direct action, although secondary effects are possible. Thus where the target or its possessions interface with the external environment, no sound is made, however the adept may make sound using non-possessions.",
*/ 
// para END

/* para
		'_' : "It may be possible to detect a target of this spell using mundane means. For example the target of this spell will leave footprints in the sand, would leave a hole in a room full of dust.",
*/ 
// para END

// effects END

	},
  
	'S-9' : {
		'title' : "Telekinesis",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "250",
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
		'_' : "Entity or object",
*/ 
// target END

/* effects
		'_' : "Allows the Adept to lift the target with weight of up to 2 pounds and move it at the rate of 2 TMR. The Adept may choose to move an additional 5 pounds or increase the spell by an additional 3 TMR for each Rank in the spell.",
*/ 
// effects END

	},
  
	'S-10' : {
		'title' : "Telekinetic Rage",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "750",
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
		'_' : "The Adept creates a storm of force emanating from them which hurls any object or entity away from them at bone-breaking speed until out of the range of the spell. Anything which fails to resist suffers [D - 5] (+ 1 / foot travelled) damage.",
*/ 
// effects END

	},
  
	'S-11' : {
		'title' : "Mind Speech",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "400",
		'resist' : "None",
		'storage' : "Potion, Investment",
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
		'_' : "Allows the Adept to communicate telepathically with ",
		'_' : "entities. The entities targeted must be both within the range of the spell and either in sight or pinpointed via the Spell of Telepathy (at the time of casting). If the entity subsequently leaves the range, the communication continues.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Binding Will",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "500",
		'resist' : "Passive",
/* range
		'_' : "10 feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "day",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept may employ this ritual in order to bind the will of an entity that is physically present and either unconscious or otherwise restrained. The Adept may perform no other action while engaged in the performance of this ritual. Once bound, the subject will remain bound until the effects of the ritual wear off or they break the psychic bonds restraining them. The subject gets a chance to passively resist once at the end of the ritual and once at the end of each day. If they successfully resist, the bonds are broken and they are free. Until that time, they will be the loyal retainer of the Adept and serve them in all things. The Adept may never release the subject from servitude voluntarily, and the magic continues to work even after the Adept is dead (the subject will do all within their power to attempt to get the Adept resurrected). If the ritual backfires, the Adept loses D from their willpower in addition to any other backfire effect; hypnotism (G-5) cures this loss.",
*/ 
// effects END

	},
  
	'R-1' : {
		'title' : "Binding Elements",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "600",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept can bind any element (Earth, Air, Fire or Water) as if he were performing the binding ritual for the College dealing with that element. The ritual is conducted in exactly the same manner as the specific ritual for binding the element apart from Base Chance and EM. In all other ways the binding is executed according to the rules governing the appropriate ritual of binding from the College concerned with the element being bound.",
*/ 
// effects END

	},
  
	},
  
};
  

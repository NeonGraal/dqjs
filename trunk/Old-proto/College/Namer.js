
// == Dq -  College Namer ==
     
dq = {
NA : {
		'title' : "Naming Incantations",
		'version' : "1.3",
		'abbr' : "NA",
		'requiredMA' : "1",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "There are no special requirements for using the Naming Incantations, beyond the need for ``knowing'' relevant Generic and Individual True Names.",
*/ 
// para END

/* para
		'_' : "The MA requirement for this college is 1, since Rank 0 counterspells do not count towards MA requirement for Namers.",
*/ 
// para END

/* para
		'_' : "Namers must keep a Name Book, which records the Generic and Individual True Names they know, and at what ranks.",
*/ 
// para END

// subsection END

/* modifiers @group
*/ 
/* modifier @mod
		'_' : "Namer has never before encountered target's generic type",
*/ 
// modifier END

/* modifier @mod
		'_' : "Namer has not learned target's Generic True Name",
*/ 
// modifier END

/* modifier @mod
		'_' : "Each rank achieved with target's Generic True Name",
*/ 
// modifier END

/* modifier @mod
		'_' : "Each rank achieved with target's Individual True Name",
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
		'_' : "The Base Chance is reduced by 1% for every foot after the first five feet that the target is from the Adept. See the Detect Aura Talent for the results of this talent.",
*/ 
// effects END

	},
  
	'S-1' : {
		'title' : "Charming",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "450",
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
		'_' : "
      The Adept may influence the actions of any one entity whose Generic Name they know by casting a Spell of Charming over the individual. If, in addition, the Adept knows and pronounces the victim's Individual True Name, the Base Chance of the spell taking effect is increased by 50% and the effect of the spell is increased. The victim of the spell will then see the Adept as their true friend and will readily accept most suggestions emanating from them. Sworn enemies of the Adept (or of their race) will not be affected by this spell unless the victim's Individual True Name is spoken and, even then, the duration of the spell is halved.
      ",
*/ 
/* para
		'_' : "The Adept may either suggest actions to the victim or may order them to act in a certain way on pain of losing the Adept's ``friendship''. Any suggestion that is not directly and obviously inimical to the victim's interests (as defined by the GM, but usually limited to actions that would be injurious or fatal to the victim) will be acted upon 90% of the time. The Adept may only ensure 100% compliance with a request by making it an order based upon the friendship that binds the victim and Adept together. In such instances, however, the victim immediately makes a Resistance Check. If they resist, then the spell is broken. Otherwise, the victim will accept the order and be 100% faithful to it for the remainder of the spell. Whenever any suggestion is made that would lead to the victim's injury or death, another Resistance Check is made. If the check is unsuccessful, the victim will accept the suggestion, otherwise the spell will be broken.",
*/ 
// para END

// effects END

	},
  
	'S-2' : {
		'title' : "Compelling Obedience",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "500",
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
		'_' : "
      The Adept may cast this spell over any target(s) whose Generic or Individual True Names are known to them. Once successfully cast, the spell permits the Adept to order the target to do anything within its physical capabilities which is not obviously suicidal. The spell may affect a number of targets equal to or less than the Adept's Rank with this spell. The Base Chance is increased by 25% if the Adept pronounces the Individual True Name of all the spell's targets. Zombies and Skeletons can not be compelled. Plants may be compelled, as can animals, but the Adept must be able to communicate with it and the target compelled can only do what it is normally able to do (one couldn't make a dog talk in a human voice, or make a plant uproot itself and walk around for example).
      ",
*/ 
/* para
		'_' : "No target may resist an order once it has failed to initially resist the spell, although actions that are obviously suicidal will engender a Willpower check (1 times WP). Note that this is the most powerful of all the control spells - only truly suicidal or very repugnant acts (for example killing ones child or loved one) will engender a Willpower check.",
*/ 
// para END

// effects END

	},
  
	'S-3' : {
		'title' : "Paralysis",
		'type' : "S",
		'abbr' : "3",
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
		'_' : "The Adept may paralyse a single target with this spell, if it's Generic True Name is known. Normal stun recovery guidelines apply, with the first recovery roll coming at the end of the pulse following the spell's casting. This spell will affect entities that do not normally stun, such as demons and undead.",
*/ 
// effects END

	},
  
	'S-4' : {
		'title' : "Banishing",
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
		'_' : "seconds",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Summonable entities",
*/ 
// target END

/* effects
		'_' : "Through use of this spell, an Adept may banish a summoned being back to its own plane. While the banishment spell is in effect, the appropriate counterspell cast at a summoned entity by the Adept will cause the entity (unless it passively resists) to return to its own plane. The counterspell must match the type of spell/ritual used in the summoning of the creature. In general the spells/rituals affected are the elemental summonings (Summon Fire Elemental, etc), all Greater Summonings, Dark Sphere conjuration (Celestial R-1), and Fire college Efreeti and Salamander summoning. Call Master is not classified as a summoning spell. The base chance of the banishment is that of the counterspell employed (including modifiers for generic and individual names). The being to be banished may actively and passively resist the banishment.",
*/ 
// effects END

	},
  
	'Q-1' : {
		'title' : "Dissipation",
		'type' : "Q",
		'abbr' : "1",
		'casttime' : "Up to 10 hours (Minimum 1)",
/* basechance
		'_' : "That of the counterspell used",
*/ 
// basechance END

/* effects
		'_' : "A Namer may always use any counterspell they presently know to cause the effects of a spell cast over an individual or object to be dissipated (removed) by performing the Ritual of Dissipation. The Adept treats the Ritual of Dissipation as if they were employing Ritual Spell Preparation except that they must cast the appropriate counterspell in order to accomplish the dissipation of the spell. In order to perform this ritual, the Namer must know the exact name of the spell that was cast over the character or object, what College the spell was a part of, and whether or not the spell was a General or Special Knowledge spell. Only spells (not rituals) may be dissipated using this technique. Only Namers may use counterspells to dissipate spells once they have been cast, due to their superior knowledge of the nature and characteristics of auras. Adepts of other Colleges may use counterspells to send entities which they have personally summoned back to their own dimensions. In such cases, the counterspell need not be cast as part of a ritual. Only Namers, however, may dispel magic by using this ritual. At least 1 hour must be spent implementing this ritual. The Adept may not simply cast a counterspell over a character or object to achieve the same effect. Characters may never achieve Rank with this ritual, though the specific counterspell used may be ranked.",
*/ 
// effects END

	},
  
	'R-1' : {
		'title' : "Magic Divination",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Concentration",
		'concentration' : "Standard",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Entity or Object",
*/ 
// target END

/* effects
		'_' : "
      This is a two part ritual. The Adept may only use one part of the ritual at any one time. There is no possibility of backfire from this ritual.
      ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "
          The Adept may determine if an individual or object is currently or has been recently under the effects of a spell by employing the Ritual of Magic Divination. The Base Chance is reduced by 5% for each week (or fraction of a week) since the spell was cast. Permanent magic (e.g. invested items still with charges) or spells currently in effect carry no modifier.(e.g. Rolf the Barbarian has had three spells on him 1, 2 and 3 weeks ago respectively, and Moniker the Namer is rank 2 in the ritual, a cast of 50% would mean the 1 and 2 week ago spells would be revealed but not the spell of 3 weeks ago. However if the 3 week ago spell was a Lesser enchantment which was still in effect it would be revealed).)
          ",
*/ 
/* para
		'_' : "If the ritual is successful, the nature of the spell (its exact name and College) is revealed to the Adept. If the magic is of non-college origin its precise effects are revealed.",
*/ 
// para END

// item END

/* item
		'_' : "Through this ritual, the Adept can discover the exact nature of all enchantments, triggering mechanisms, curses, side-effects etc, placed upon an item. Note that if an item has been imbued with an Individual True Name it will not be revealed, but the fact that the item has a Name will be.",
*/ 
// item END

// enumerate END

// effects END

	},
  
	'R-2' : {
		'title' : "Name Summoning",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "300",
		'resist' : "Passive",
/* range @base, @inc
		'_' : "miles",
*/ 
// range END

/* duration @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base, @inc
		'_' : "+5 per Individual True Name Rank",
*/ 
// basechance END

/* target
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      A Namer who knows the Individual True Name of an entity may use this ritual to summon the spirit of the individual to the location of the ritual's enactment. The ritual is keyed to the specific aura of the victim through its Individual True Name. The individual must be on the same plane as the Adept. If the ritual succeeds and if the victim is within the range of effect, an extra-dimensional path will open and the spirit and consciousness of the target will appear at the location in an insubstantial form, taking on the habitus of the individual being summoned (including clothes currently worn, weapons, etc - good enough for a locate spell to be used). The spirit may not change location once summoned, but may move its ``limbs'', and talk just as if the person themselves were there. The spirit may not be harmed by any physical or magical attack, nor may it harm itself. Telepathy and suchlike will not affect the spirit, although the spirit will have a readable aura. The spirit may not use any magic, including talent magic. There is no compulsion on the spirit, who may answer questions only as they see fit, and may converse at will. However the spirit must remain for the duration of the ritual (",
		'_' : "minutes) or until dismissed by the Adept, either by choice or by the Adept leaving the vicinity of the spirit (100 ft or so). The target will remember all seen, heard, smelt, etc from the summoning as if they had actually been there in person.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "The target's body will, at the exact time the spirit is summoned, slump to the ground comatose. It will have a living aura, but no sentience will be present, just the body's autonomous functions. The body gains or loses no fatigue while in this coma, unless healed / harmed in some way. If the body is killed the spirit is immediately returned to it (N.B. if the body is on 0 EN it is possible that this return of the spirit may ``kickstart'' the body into life). Otherwise the spirit is not in contact with its body and has no idea what is happening to it.",
*/ 
// para END

/* para
		'_' : "If the ritual works, but nothing happens the Adept will know either the entity resisted, the entity is out of range, the entity is dead or the the wrong name has been used. Backfire is possible, with spell reversal probably entailing travel to the being being summoned.",
*/ 
// para END

// effects END

	},
  
	},
  
};
  

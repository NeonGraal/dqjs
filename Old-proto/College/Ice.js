
// == Dq -  College Ice ==
     
dq = {
IC : {
		'title' : "Ice Magics",
		'version' : "1.5",
		'abbr' : "IC",
		'requiredMA' : "13",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* subsubsection @title
*/ 
/* para
		'_' : "Ice weighs 47.2 lb. per cubic foot and is translucent (but not transparent).",
*/ 
// para END

// subsubsection END

/* subsubsection @title
*/ 
/* para
		'_' : "This applies particularly to the spells Ice Creation, Ice Construction and Wall of Ice, but may also be used in natural settings (for example a single inch of ice may cover a lake).",
*/ 
// para END

/* para
		'_' : "Ice is deemed to have 10 points of fatigue per inch, 120 points per foot. It takes only half damage from being hit by B class weapons, full damage from axes, fire and water based attacks, and double damage from picks (note that for fire based attacks bonuses against cold creatures apply, for those spells that have them). Other weapons only do a single point. Endurance blows do double damage. The exception is when a blow by any weapon exceeds the remaining fatigue of the ice; in this case all damage is applied (the ice breaks). Successful elimination of the ice's fatigue makes a human sized hole in the ice, big enough for a one hex entity to go through. Multiple entities may attempt to break through the same area of ice, within reason. Smaller holes may be made but for the purposes of simplicity are no quicker to make (when digging far into the ice at least a human sized hole must be made in order to keep working anyway).",
*/ 
// para END

// subsubsection END

/* subsubsection @title
*/ 
/* para
		'_' : "Bipeds must travel at half TMR (round up) while on ice or make a 2 x AG roll each pulse or go prone. Quadrupeds may make a 4 x AG roll to travel at full speed, or go prone. Subtract 1 x AG if the ice is wet. Entities going prone may also slide up to half their TMR along the ice in the pulse in which they fell, depending on how much of their movement was in one direction (GM's discretion).",
*/ 
// para END

// subsubsection END

/* subsubsection @title
*/ 
/* para
		'_' : "Travel through snow usually causes entities to lose 1/4 of their TMR per foot of powder, down to a minimum TMR of 1 (unless the powder is higher than the entity is tall). In addition there is an encumbrance shift of one column on the encumbrance table for each 1/4 TMR slowed. Note the reference to powder - if the snow is denser than freshly fallen powder the effects may be less. These figures are based on a human sized entity; a giant (for example) would only suffer the effects of 4 foot of powder (TMR reduced to 1) when up to its chest; that is, in about 13 feet for a Stone Giant (normally 20 feet tall). Quadrupeds tend to manage snowy conditions well, and should be treated as if they were standing erect for the purposes of height calculation. Hobbits, and other creatures with large feet, may have these penalties halved at the GM's discretion. GM's may also allow items such as snow shoes; a suggestion is a straight halving of TMR but the entity does not sink into the snow. Note that such items are not known or common in warmer climes!",
*/ 
// para END

// subsubsection END

// subsection END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Very Cold (0 - 3) <= -5",
*/ 
// modifier END

/* modifier @mod
		'_' : "Cold (4 - 5) <= 5",
*/ 
// modifier END

/* modifier @mod
		'_' : "Average (6 - 8) 6 - 24",
*/ 
// modifier END

/* modifier @mod
		'_' : "Hot (9 - 10) >= 25",
*/ 
// modifier END

/* modifier @mod
		'_' : "Very Hot (11 +) >= 35",
*/ 
// modifier END

// modifiers END

/* modifiers @group
*/ 
/* modifier @mod
		'_' : "The Adept is standing on Ice or Snow in an area where it is in abundance",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Cold Affinity",
		'abbr' : "1",
		'multiple' : "100",
/* effects
		'_' : "This talent allows the Adept to ignore the deleterious effects of low body temperature. The adept is treated as if having a Resist Cold spell of equal Rank to the Rank in this talent in effect at all times. Should the Adept also be under the effect of a Resist Cold spell, the higher of the two ranks is in effect.",
*/ 
// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Endure Hardship",
		'abbr' : "2",
		'multiple' : "150",
/* effects
		'_' : "This talent allows the Adept to function capably even in harsh and forbidding environments. The Adept may go without food (but not water!) for ",
		'_' : " days every three months with no ill effects. These days may be taken singly or consecutively, and the Adept need not consume extra food later to make up for this time spent fasting. The Adept may additionally increase the Base Chance of any concentration checks made in hostile environments, when the concentration checks are reduced below 4 x WP due to environmental effects, by WP x ",
		'_' : ". Finally, the Adept may reduce high fatigue rates due to environmental and weather effects, other than those relating to heat or fire, by a ",
		'_' : " row shift on the Rate of Exercise Chart (under the Fatigue and Encumbrance Chart), down to a minimum rate of medium fatigue, or light fatigue at rank 20. For example, at Rank 10 a Strenuous climb up a mountain may be treated as if it is only a Hard climb.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @full, @max
*/ 
// rk END

/* rk @full
*/ 
// rk END

// effects END

	},
  
	'G-1' : {
		'title' : "Extinguish Fires",
		'type' : "G",
		'abbr' : "1",
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
		'_' : "This spell extinguishes all fires within a chosen ",
		'_' : "foot diameter sphere, all of which must be within the spells range, by smothering them with ice crystals. Magical fires are not affected. This spell is identical to the Fire College ``Extinguish Fire Spell'', except that the effect is achieved by physical means (this is merely a cosmetic difference).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-2' : {
		'title' : "Freeze",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "50",
		'resist' : "None",
		'storage' : "Investment",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "The Adept may freeze one object of up to ",
		'_' : "lbs. This freezing will protect the object from decay while the duration lasts. While frozen the object will be as cold as ice to the touch and will drip slightly from condensation. When the duration has expired the object will defrost at the rate of 1 minute per pound of weight.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Ice Creation",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "This spell creates a film of ice 1 inch thick in a single square of dimensions ",
		'_' : " foot each side or a single cube of ice of dimensions ",
		'_' : " inches cubed. The ice must be created on the ground and not on top of an entity. It is non-magical and will persist until melted, etc.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Ice Traversal",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "125",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "This spell enables ",
		'_' : " targets to travel over ice and/or snow without slipping or sinking in, as if it were normal earth and/or rock. For example, this would enable climbers to climb icy slopes. Quadrapeds are treated as two targets for the purposes of this spell. In addition, if the terrain travelled on is flat ice, each target's TMR is increased by ",
		'_' : " while on the ice. See Travel on Ice, for additional detail.",
*/ 
/* rk @base, @full
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'G-5' : {
		'title' : "Refrigeration",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "50",
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
		'_' : "Volume",
*/ 
// target END

/* effects
		'_' : "The caster may cause the ambient temperature of one 15 x 15 x 15 foot cube to lower by ",
		'_' : " degrees. Note that this spell is the Ice Mage counterpart to the Fire Mage Spell of Temperature Alteration (G-2).",
*/ 
/* rk @inc
*/ 
// rk END

// effects END

	},
  
	'G-6' : {
		'title' : "Resist Cold",
		'type' : "G",
		'abbr' : "6",
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
		'_' : " up to a maximum of Gauge 7 (Comfortable). It will totally protect the target from the effects of Hypothermia at Rank 11+. In addition, the target suffers ",
		'_' : " less damage due to magical or non-magical cold based attacks. This spell is identical to the special knowledge Air college spell of the same name.",
*/ 
/* rk @base, @full
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'G-7' : {
		'title' : "Snow Shovel",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "125",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Self",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "This spell enables the Adept to clear a path along snow or ice obstructed ground and/or to tunnel through snow and ice. Any snow or ice up to ",
		'_' : " feet in front of the Adept undergoes a change in density to dry snow, and is pushed to either side, leaving a gap 2 feet wider, and higher (if applicable), than the size of the Adept. No more than 1 hex, may be cleared per pulse in this manner. This effect moves with the Adept. The Adept may lean in order to direct the path up or down. Note that the walls and roof of a tunnel through snow or ice are merely packed snow and do not confer any particular structural support or stability. See Travel on or through Snow for additional detail.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'G-8' : {
		'title' : "Water to Ice",
		'type' : "G",
		'abbr' : "8",
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
		'_' : "Volume of Water",
*/ 
// target END

/* effects
		'_' : "The Adept can freeze up to ",
		'_' : " cubic feet of existing water based liquids into solid ice, or into snow of a density chosen by the Adept. All the water to be transformed must be within the Adept's range at the time of casting. This spell may not be cast on or near entities or their possessions.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-1' : {
		'title' : "Armour of Ice",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "250",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The target of this spell is covered by a magical Armour of Ice, which provides ",
		'_' : " points of Armour Protection which fluctuates according to the current temperature: the Armour gains +2 points of Armour Protection when the temperature is very cold, +1 when its cold, -1 when its hot, and -2 when its very hot (see Ice Modifiers). The armour has a weight rating of 5 (see the Armour Table) and subtracts 2 from AG and 20 from stealth. Ice Armour may not be cast on entities wearing armour. This spell will stack with other defensive spells. The Ice Armour is vulnerable to Fire, and has an ablative effect; it will absorb up to half of any fire damage taken, but for every 10 points of damage taken (before halving) one point of protection is removed from the armour, and if the protection is reduced to zero the spell is immediately dissipated.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Icy Transformation",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "300",
		'resist' : "Special",
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
		'_' : "One (metal or mineral) Object",
*/ 
// target END

/* effects
		'_' : "This spell turns one metal or mineral object of up to ",
		'_' : "lbs entirely into ice (a wall of iron would have to be entirely turned to ice but a single brick in a wall could be transformed). The object is then transparent and vulnerable to damage, heat etc. At the end of the duration, the object will revert back, but any damage will not be repaired.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Freezing Wind",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "225",
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
		'_' : "Volume",
*/ 
// target END

/* effects
		'_' : "This spell causes Arctic conditions to prevail in a ",
		'_' : " feet cube. Any entity within this cube which fails to resist will suffer ",
		'_' : " points of magical cold damage per pulse. Creatures of fire (efreet, salamander or elemental) take half damage even if they resist.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-4' : {
		'title' : "Frostbite",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "200",
		'resist' : "Special",
		'storage' : "Investment",
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
		'_' : "Special",
*/ 
// target END

/* effects
		'_' : "This spell may either be used to kill ",
		'_' : "% of all non-sentient plants within the Adepts range, or the Adept may target and kill ",
		'_' : " individual plants. There is no visible effect, but death due to frostbite occurs at the time of casting and no amount of non-magical effort will revive plants affected by this spell. Sentient plants take ",
		'_' : " points of damage (instead of dying), and may passively resist for no damage. Other plants that are magical or especially resistant to cold may also be entitled to a passive resistance roll versus the spell's effects.",
*/ 
/* rk @inc
*/ 
// rk END

/* rk
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Frozen Doom",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "500",
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
		'_' : "This spell uses magical cold to freeze solid the blood of one target entity, which may be up to ",
		'_' : " hex in size, killing it instantly if they fail to resist.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-6' : {
		'title' : "Hibernation",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "250",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range
		'_' : "5 feet",
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
		'_' : "The target of this spell is placed in suspended animation for up to ([Rank x Rank]) days as specified by the Adept. At Rank 20 there is no maximum and the Adept may choose any duration. All bodily functions including ageing, are suspended for the duration of the spell and the target feels cool to the touch. The target is immune to cold and suffocation, and takes no more damage from existing injuries while this spell is in effect. Additional injuries will still affect the target, but any damage that would occur due to bleeding, poison etc. is ignored. When the spell duration runs out, or the spell is dispelled, the target awakens with physical strength reduced by 1 / full week hibernated and immediately begins to suffer from any existing injuries and conditions (poison, disease, shock, bleeding and suchlike). Physical strength may be regained at a rate of 1 point per day, and is not reduced below 1. Entities that naturally hibernate suffer -20 to their Magic Resistance vs. this spell.",
*/ 
// effects END

	},
  
	'S-7' : {
		'title' : "Ice Bolt",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "300",
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
		'_' : "Entity, Object",
*/ 
// target END

/* effects
		'_' : "The Adept creates a 2 foot long, 2 inch diameter non-magical bolt of ice which is projected at a target with a Strike chance of ",
		'_' : " + MD, modified by range as if it were a heavy crossbow. The ice bolt strikes as an A class weapon doing ",
		'_' : " damage which can stun and inflict specific grievous injuries. Once the spell is cast the target gets no magic resistance, but the target's defence is subtracted from the chance to hit, since the effect of the spell is to create a physical bolt. A double or triple effect cannot affect damage but may add +10% and +20% to the Strike Chance respectively.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Ice Construction",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "225",
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
		'_' : "The Adept may conjure ",
		'_' : " cubic feet ice in up to 1 + Rank shapes of the Adept's choice. The shapes always appear entirely within the range of the Adept and may not appear above or inside (partially or wholly) any entity. Each shape must appear on the ground in a stable fashion (not about to topple over) and must have a minimum thickness of 6 inches in any part. When the spell duration expires, the ice disappears (returns to whence it came).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-9' : {
		'title' : "Iceberg",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Investment, Ward, Magical Trap",
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
		'_' : "Area of Water",
*/ 
// target END

/* effects
		'_' : "The Adept creates a polyhedral iceberg of dimensions ",
		'_' : " feet cubed. It may only be successfully created in an existing volume of liquid sufficient to hold it without it touching the bottom. 8/9 of the Iceberg will be submerged. The Iceberg will be flat topped and may stably support up to ",
		'_' : " hexes of entities (Additional entities will cause it to roll in the water). While the Adept is in contract with the Iceberg the Adept may move the Iceberg at a speed of ",
		'_' : " miles per hour. The Iceberg spell also has a calming effect on the water around it, reducing the size of all waves up to Rank feet away by Rank feet.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-10' : {
		'title' : "Ice Pack",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Investment, Potion",
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
		'_' : "This spell immediately halts any damage being taken due to shock or blood loss and the target gains ",
		'_' : " to their chance of recovering from stun or unconsciousness (if applicable). It will restore a (live) character on negative endurance to zero, although any further damage will start the process of shock and bleeding as usual. In addition, if the target is suffering from the adverse effects of a fright roll or similar emotional effect, they get a second roll (in some cases a second resistance roll) to recover from (``or snap out of'') it with ",
		'_' : " added to their dice roll. The cause of the fright or shock may have been magical or otherwise. This spell may be recast on each target as often as desired. This spell will not work on regenerating entities (including those under the effects of a trollskin spell).",
*/ 
/* rk
*/ 
// rk END

/* rk
*/ 
// rk END

// effects END

	},
  
	'S-11' : {
		'title' : "Ice Projectiles",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "300",
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

/* target @base, @inc
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "Each entity targeted by this spell must resist or suffer ",
		'_' : " points of magical damage due to being pierced by flying A class shards of ice (armour does absorb damage but there is no AG loss). If this spell is doubled the adept may not double damage but may choose to have the ice projectiles ignore armour instead. If this spell is tripled, the adept may roll for a possible A class specific grievous injury for each target that failed to resist, in addition to ignoring armour as above (and still doing fatigue damage except as part of the grievous result), or reduce the targets' resistances as usual.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-12' : {
		'title' : "Ray of Cold",
		'type' : "S",
		'abbr' : "12",
		'multiple' : "300",
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
		'_' : "Entity, Object",
*/ 
// target END

/* effects
		'_' : "This spell projects a blast of intense magical cold at the target. The ray of cold will impact either on the target or on the first obstruction blocking the path from the Adept to the target. Anything struck by the ray must either resist or suffer ",
		'_' : " damage (resist for half damage).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-13' : {
		'title' : "Snowball",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Ward, Magical Trap",
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
		'_' : "Adept, Special (chosen each pulse)",
*/ 
// target END

/* effects
		'_' : "This spell causes the ground within ",
		'_' : "' of the Adept to be instantly covered with 5 inches of conjured snow (returns to whence it came when the spell duration expires). Snowballs then form themselves out of the snow and launch themselves at a target or targets of the Adepts choice. Up to 1 target can be pelted with a flurry of snowballs each pulse. A different set of targets may be chosen by the Adept each pulse. Each target must resist or suffer a reduction of ",
		'_' : " to their Base Chance of doing anything while being snowballed and in addition must make a 4 x WP roll (3 times WP if Adept is above Rank 10 in this spell) to perform any action that involves concentrating (e.g. casting a spell). Each target need only resist this spell once. If the Adept leaves the 5' diameter circle of snow while this spell is in effect, the spell is automatically dissipated.",
*/ 
/* rk @base, @full
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Snowfall",
		'type' : "S",
		'abbr' : "14",
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
		'_' : "Area",
*/ 
// target END

/* effects
		'_' : "This spell causes snow to begin gently falling in an area of between 5 feet minimum and ",
		'_' : "feet maximum diameter (chosen by the adept). The snow will form in the air at between 10 and 40 feet above the ground, and will gently float to the ground. The area within this spell, if above zero degrees in temperature, will be magically cooled to zero degrees for the spell duration (nb. This will not count as a positive modifier to Ice mage base chances as it is magical, although it may reduce negative modifiers to zero). For each 5 minutes that this spell is in effect, one inch of powder will cover the ground. At the end of the spell the snow will remain, but the temperature will be restored to normal (and the snow may begin melting). Note that if this spell is, for example, cast inside a house with a 20 foot ceiling, as the snow is formed in the air between 10 and 40 feet up, only a third of the snow will fall in the room. The other two thirds will appear above the 20 foot line and will fall on the roof, with the exception of a small amount that appears in the attic.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-15' : {
		'title' : "Wall of Ice",
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
		'_' : "This spell conjures a wall of ice that is 10' high, 20' long and 2' thick, or a pillar 15' high with a 3' diameter. The adept may choose to increase the height of the wall by 1', the width by 2' or the thickness by 6, or the height or diameter of the pillar by 1', for each Rank the Adept possesses in the spell. The wall may be uniformly curved up to a half circle. The wall may not be created on top of an entity, and is subject to the usual restrictions on physical walls. The wall is translucent but not transparent. When the spell duration expires the ice returns to whence it came.",
*/ 
// effects END

	},
  
	'S-16' : {
		'title' : "Weapon of Cold",
		'type' : "S",
		'abbr' : "16",
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
		'_' : "The weapon over which the spell is cast becomes infernally cold without harm to either the weapon or the user of it. The base chance of hitting with the weapon is increased by ",
		'_' : " and the damage done by the weapon is increased by ",
		'_' : ". This amount of damage is tripled if the object of the attack is a creature of fire.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'S-17' : {
		'title' : "Winter Garden",
		'type' : "S",
		'abbr' : "17",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "weeks",
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
		'_' : "This spell bestows resistance to cold on ",
		'_' : " plants or ",
		'_' : " square feet in one patch of the same species of plant of the Adepts choice. Plants with this resistance are immune to the Frostbite spell and will thrive even in permafrost and arctic temperatures.",
*/ 
/* rk
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Create Igloo",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "100",
/* duration @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept must spend one hour in ritual construction of a miniature dome made out of snow or ice cubes. At the end of this time the Adept must make a successful cast check. If successful, the dome swells in size to become an igloo of internal size ",
		'_' : " feet radius and 2 feet thick. This ritual cannot backfire. The Igloo has a single entrance which is chosen by the Adept to be up to half its internal height in both height and length. The inside temperature of the igloo always counts as very cold (-10 degrees) and the following enchantments apply to objects or entities while they remain inside the igloo:
      ",
		'_' : "
      In addition the igloo counts as bound snow while the duration is in effect and will not melt or break due to non-magical forces (although magical attacks affect it as normal). Once the duration runs out the igloo reverts to a normal (non-magical) igloo and will thereafter melt, collapse etc. as normal due to external conditions.
    ",
*/ 
/* rk @base
*/ 
// rk END

/* itemize
*/ 
/* item
		'_' : "All entities and creatures are treated as having a resist cold spell upon them of equal rank to that of the Adepts Rank in this ritual",
*/ 
// item END

/* item
		'_' : "All organic objects are preserved from decay",
*/ 
// item END

// itemize END

// effects END

	},
  
	'Q-2' : {
		'title' : "Bind Ice and Snow",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "750",
/* duration @conc, @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept may bind all of the ice and snow within a ",
		'_' : " feet radius circle of the Adept. The results of this ritual are similar to those for the binding of other elements. The Adept gains control of all of the facets of the element. The Adept may move or shape the ice and snow, change its consistency and instil intelligence in it as desired. Finally, the Adept may sacrifice a point of MA (this may be bought back with EP) in order to make a part or all of the bound ice and snow permanently bound. In this instance, the bound ice and snow is non-intelligent but magical, and is enduring. Almost no magical or physical force will affect it (e.g. it resists Wizard's Eye and Telepathy), with the exception of magical heat and fire, against which it has 100 times the resistance of ordinary ice and snow, and if any part of it remains it will (slowly) regenerate.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'R-1' : {
		'title' : "Snow Simulacrum",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "300",
		'resist' : "Special",
/* duration @conc, @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept spends an hour forming a human or animal figure, no larger than ",
		'_' : " hex in size, out of snow, which must be already present. The animated sculpture will have the same characteristics as the sculptured entity, except that all characteristics are reduced by 25%. This will generally cause abilities to be lessened by a like amount (e.g. Flying speed is reduced by 25% (if the entity can fly) due to Agility being reduced; Damage from attacks is reduced by 25% due to Strength reduction, Base Chance to hit is reduced because of M.D. reduction, etc.). Magical abilities are not copied in the copied form, although quasi-magical abilities may be. The simulacrum will not bear a close resemblance to any other figure unless the figure chosen to be duplicated is present during the ritual. In the latter instance the figure being duplicated may choose to actively resist the ritual; otherwise the ritual is non-resistible. The simulacrum has only animal intelligence, and the Adept may give it simple instructions or actively concentrate to control its movements (requires the Adept to perform pass actions). The simulacrum will have vague inclinations relating to its original (borrowed) form, and although no longer comprised of snow (it takes on a fleshy appearance, or whatever is appropriate for the original entity) will have an adverse reaction to the presence of heat and flame and will take an additional 2 points from heat and flame attacks. The simulacrum normally resembles a generic example of its borrowed form except that it has a snowy sheen to it and is cool to the touch. Clothes, possessions and suchlike are not duplicated by this ritual. When the Adepts concentration ceases, the simulacrum will collapse into a pile of ordinary non-magical snow.",
*/ 
/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'R-2' : {
		'title' : "Summoning and Controlling Ice Elemental",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "250",
/* duration @conc, @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept summons an Ice Elemental from its home plane (conjectured to be the elemental plane of Cold), which will appear within 20 feet. This ritual takes 2 hours, and may only be performed in temperatures of 0 degrees or less. If the ritual backfires the Elemental arrives uncontrolled and will attack the Adept (and others nearby); however if the ritual is successful the Elemental is controlled and must obey the Adept's every whim. The Elemental remains until dispelled, which the Adept may do by successfully casting a Special Knowledge counterspell at it. 1% is added to the base chance of success on this ritual for each point of Willpower the Adept has over 15. Ice Elementals are similar to other Elementals in that they do not normally exist on this plane, but are summoned by Ice magics. They will always be hostile to their summoner and will attack if uncontrolled. Ice Elementals are impervious to attacks with non-magical weapons. Magic does affect them. Ice Elementals are vulnerable to fire and can be damaged by attacks involving this ``opposite element''. Ice Elementals have a combined endurance and fatigue of ",
		'_' : ", which must be divided in such a way that they fall into the ranges indicated below. Any reference to Rank below refers to the Adept's Rank in this ritual.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "Ice Elementals have the following characteristics :",
*/ 
// para END

/* description
*/ 
/* item @title
		'_' : "Other Planes",
*/ 
// item END

/* item @title
		'_' : "Very Rare",
*/ 
// item END

/* item @title
		'_' : "1",
*/ 
// item END

/* item @title
		'_' : "Ice Elemental appear as lean crystalline humanoids with frosty hair and silvery blue eyes. They are half as tall, in feet, as their Endurance.",
*/ 
// item END

/* item @title
		'_' : "Ice Elementals can disappear into Ice with only a 10% chance of being detected. They can freeze water within line of sight at a rate of one cubic foot per pulse for every point of Physical strength available to the Elemental (entities within the area get a 3 times AG check to avoid being caught and trapped while Ice forms around them), and they can cast a Ice construction and Wall of Ice at a Rank equal to their summoner's Rank + 4 in this ritual. These are talents and cost no fatigue. They may expend 2 fatigue to fire an Ice bolt (as per the Spell) striking as an A class weapon with a base chance equal to the Elemental's combined maximum Endurance and Fatigue, and doing ",
		'_' : " points of damage. Since this is a physical attack formed from the Ice Elemental, the Ice bolt remains after firing.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

/* item @title
		'_' : "Running 200 + 10 x Summoner's Rank",
*/ 
// item END

// description END

Tables : {
	"Ice Elemental Statistics" : {
		'title' : "Ice Elemental Statistics",
		'cols' : "4",
/* row
*/ 
/* head
		'_' : "PS:",
*/ 
// head END

/* cell @span
*/ 
/* rk @base, @inc
*/ 
// rk END

// cell END

// row END

/* row
*/ 
/* head
		'_' : "MD:",
*/ 
// head END

/* cell
		'_' : "20 - 25",
*/ 
// cell END

/* head
		'_' : "WP:",
*/ 
// head END

/* cell
		'_' : "14 - 18",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "AG:",
*/ 
// head END

/* cell
		'_' : "15 - 20",
*/ 
// cell END

/* head
		'_' : "EN:",
*/ 
// head END

/* cell
		'_' : "5 - 50",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "MA:",
*/ 
// head END

/* cell
		'_' : "None",
*/ 
// cell END

/* head
		'_' : "FT:",
*/ 
// head END

/* cell
		'_' : "10 - 85",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "PB:",
*/ 
// head END

/* cell
		'_' : "8 - 10",
*/ 
// cell END

/* head
		'_' : "PC:",
*/ 
// head END

/* cell
		'_' : "15 - 20",
*/ 
// cell END

// row END

/* row
*/ 
/* head
		'_' : "TMR:",
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
		'_' : "NA:",
*/ 
// head END

/* cell @span
		'_' : "Skin absorbs 5 DP",
*/ 
// cell END

// row END

/* description
*/ 
/* item @title
		'_' : "Ice Elementals strike their opponents with open hands and pierce them with their long icy fingers. They can attack twice in the same pulse without penalty doing ",
		'_' : " damage per strike.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

// description END

	},
},
// effects END

	},
  
	'R-3' : {
		'title' : "Ritual of Winter",
		'type' : "R",
		'abbr' : "3",
		'multiple' : "350",
/* duration @conc, @base, @inc
		'_' : "hour",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept may change one or more of the three components which make up the weather by performing a ritual dance. The three components of weather are;
      ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "Precipitation, Degree",
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

// enumerate END

/* para
		'_' : "The GM should consult the weather table and advise the player of the current level of these three components before the Adept starts performing the ritual. The Adept may change the current components by ",
		'_' : ". All the changes may be in any direction on the table with the proviso that the Adept may never raise the temperature, and must lower it by at least one degree. All weather within ",
		'_' : "miles of the Adept is affected by the ritual. This ritual cannot backfire.",
*/ 
/* rk @base, @full
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// para END

// effects END

	},
  
	},
  
};
  

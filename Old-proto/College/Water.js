
// == Dq -  College Water ==
     
dq = {
WA : {
		'title' : "Water Magics",
		'version' : "1.3",
		'abbr' : "WA",
		'requiredMA' : "18",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "Adepts of the College of Water Magics may only practice their arts if they are in contact with, or near, water. With the exception of Dowsing, they may never practice their arts in a vacuum or in a totally arid place. They may not summon water-dwelling creatures into an area that does not contain a body of water large enough for the water-dwelling creature to immerse itself entirely. They may use their magic on land (in a non-arid area) but suffer some diminuition in their abilities.",
*/ 
// para END

// subsection END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Adept is completely immersed in water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is in physical contact with water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is within 25 feet of water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is within 500 feet of water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is surrounded by mist or fog, or is standing in the rain",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is on land and over 1 mile from water",
*/ 
// modifier END

/* modifier @mod
		'_' : "Adept is on land and over 10 miles from water",
*/ 
// modifier END

// modifiers END

/* modifiers @group
*/ 
/* modifier @mod
		'_' : "All water in the vicinity of the Adept is frozen",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Predict Weather",
		'abbr' : "1",
		'multiple' : "75",
/* range @base, @inc
		'_' : "miles",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept predicts with some accuracy what the weather will be like over the ensuing three days in the area within the range of the talent. The Adept must be at sea (on an ocean, sea or large lake) or within 15 miles of an ocean, sea or large lake. If the Adept makes a successful Predict Weather check, the GM rolls D100 and checks the accuracy of the prediction. The following results may occur:
      ",
*/ 
Tables : {
	"Predict Weather Results" : {
		'title' : "Predict Weather Results",
		Head : [ "Dice", "Accuracy" ],
	Rows : [
		[ "01 - 05", "Totally wrong (opposite of the prediction occurs)" ],
		[ "06 - 10", "Generally incorrect (fairly wide divergence)" ],
		[ "11 - 85", "Generally correct (close but not totally accurate)" ],
		[ "86 - 100", "Almost totally accurate (say within 1 degree)" ],
	],
	},
},
/* para
		'_' : "Following the dice roll the GM delivers the prediction as though it were generally correct.",
*/ 
// para END

// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Dowsing",
		'abbr' : "2",
		'multiple' : "75",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept is able to sense the presence of water above ground, and within ",
		'_' : "feet. The Adept can determine the direction and distance to the nearest source of water. Detection of underground water has a range of ",
		'_' : "feet. Assessment of freshness increases with increased Rank,(e.g. ) Rank 3 can tell salt from fresh; Rank 6 can tell alkali from clear, etc. This talent may be exercised when the Adept is in a vacuum or a totally arid place. In general the GM will roll to determine the success of this talent.",
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
		'title' : "Aquatic Affinity",
		'abbr' : "3",
		'multiple' : "100",
/* effects
		'_' : "
      Adepts of the College of Water Magic have a kinship with their element which gives them the following abilities:
      ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "The Adept may modify their swimming rolls by ",
		'_' : " they have achieved with this talent.",
*/ 
/* rk @inc
*/ 
// rk END

// item END

/* item
		'_' : "Above Rank 10, the Adept is considered to be an Aquatic entity for the purposes of calculating underwater defense.",
*/ 
// item END

/* item
		'_' : "Movement in water is considered to be one row less difficult on the Encumbrance table. If the Adept has more than Rank 10 in this talent then it is two levels less difficult.",
*/ 
// item END

/* item
		'_' : "General knowledge of the Aquatic environment.",
*/ 
// item END

// enumerate END

// effects END

	},
  
	'G-1' : {
		'title' : "Buoyancy",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Potion",
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
		'_' : "This spell allows the target to float at whatever depth they choose. If they want to float upon the surface this spell enables them to do so without using any float actions. The rate of ascent or descent is ",
		'_' : " feet and this spell also protects the target from any pressure effects related to being at extreme depths.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-2' : {
		'title' : "Cold Resistance",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Investment, Potion",
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
		'_' : "This spell protects the target from the effects of temperature down to ",
		'_' : " degrees C. It will totally protect the target from the effects of Hypothermia. In addition, the target takes ",
		'_' : " less damage from magical or non-magical cold-based attacks.",
*/ 
/* rk @base, @dec
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Create Fog",
		'type' : "G",
		'abbr' : "3",
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
		'_' : "Volume of Air",
*/ 
// target END

/* effects
		'_' : "This spell allows the Adept to create ",
		'_' : "cubic feet of fog entirely within range. The fog must be continuous and connected to the surface above which it is conjured. In addition the conjured mist has the effect that all entities within the fog have their Strike Chances reduced by ",
		'_' : " due to limited visibility. Visibility is reduced to 1 hex. The spell of Water Breathing completely negates the effect of this spell.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Mage Current",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "125",
		'resist' : "None",
		'storage' : "Investment",
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
		'_' : "Water",
*/ 
// target END

/* effects
		'_' : "The Adept creates a current in the water within the range (a volume that moves with the Adept) of ",
		'_' : " miles per hour in one direction. All objects/entities, etc. within the range that are submerged in the water or floating on the water are carried at the speed of the current. The Adept may freely alter the direction of the mage current during the spell (requires active concentration). Passive concentration is required to maintain this spell.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-5' : {
		'title' : "Navigation",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "125",
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
		'_' : "The spell attunes the Adept's mind to the sea and winds, allowing them to sail with less chance of mishap. This decreases the chance of veering off course, running aground, etc., by ",
		'_' : ". In addition the Adept may add ",
		'_' : ", to their effective Rank in the Navigator Skill.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// effects END

	},
  
	'G-6' : {
		'title' : "Rehydration",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "350",
		'resist' : "None",
		'storage' : "Investment, Magical Trap",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "This spell rehydrates (restores dried substances to their normal water content) including dehydrated entities.",
*/ 
// effects END

	},
  
	'G-7' : {
		'title' : "Saturated Earth",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "250",
		'resist' : "None",
		'storage' : "Investment, Ward",
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
		'_' : "The Adept summons water from deep within the earth, rising to the surface in ",
		'_' : " seconds, causing the ground in an area of ",
		'_' : "feet radius to become totally sodden. Earth will turn to mud. Sand has a 30% chance of turning into quicksand (swallowing any trapped individuals in 20 seconds) and a 70% chance of turning into firm hard sand facilitating easy movement. The Adept may alter these chances by ",
		'_' : ". Wetlands will be unaffected by this spell, as will solid rocky terrain. With this spell, all wells in an area can be caused to fill and all crops will be well watered.",
*/ 
/* rk @base, @dec
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk
*/ 
// rk END

// effects END

	},
  
	'G-8' : {
		'title' : "Ship Strength",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @inc
		'_' : "days",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Ship, boat, wood",
*/ 
// target END

/* effects
		'_' : "This spell may be used to strengthen the structure of any ship or boat, repair leaks or holes, restep masts, etc. At Rank 10 and above, a small sail craft can be constructed out of available wood. At Rank 15 or above, a large craft (40 feet or more in length) may be constructed. At the end of the spell's duration, its effects are undone; a constructed craft will fall apart (even in mid-ocean). In addition, any craft which is affected by this spell has its chance of encountering sea monsters, pirates or typhoons, decreased by ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-9' : {
		'title' : "Speak to Aquatic Life",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "150",
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
		'_' : "This spell allows the Adept to communicate with any one form of aquatic life within range. This communication usually consists of both speech and gesture. All members of the selected generic type of aquatic that are within speaking range can be understood and can understand the Adept. The Adept may have more than one spell on at once, as long as they are for different generic types.",
*/ 
// effects END

	},
  
	'G-10' : {
		'title' : "Summon Aquatic Life",
		'type' : "G",
		'abbr' : "10",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Potion",
/* range
		'_' : "Unlimited",
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
		'_' : "Aquatic Species",
*/ 
// target END

/* effects
		'_' : "The Adept may summon ",
		'_' : " aquatic creatures. It may take up to ",
		'_' : " minutes for the aquatic life forms to arrive. The species must be native to the area to be summoned and the Adept must be within 100 feet of a body of water.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'G-11' : {
		'title' : "Water Breathing",
		'type' : "G",
		'abbr' : "11",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Potion",
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
		'_' : "This spell forms a set of gills in the subject's neck and covers their eyes with a transparent film. This allows the target to breathe and see equally well under water as on land. The target may cast spells subject to the restrictions of their College. The spell does not affect the target's ability to operate on the surface. This spell allows vocal communication to a range of the target's perception in hexes.",
*/ 
// effects END

	},
  
	'G-12' : {
		'title' : "Water Creation",
		'type' : "G",
		'abbr' : "12",
		'multiple' : "150",
		'resist' : "None",
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
		'_' : "Water",
*/ 
// target END

/* effects
		'_' : "The Adept must touch the substance from which water is to be drawn. The spell allows the Adept to extract moisture from the air, or from plants (providing there is moisture available to be extracted) to the amount of ",
		'_' : "pint.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-13' : {
		'title' : "Waterproofing",
		'type' : "G",
		'abbr' : "13",
		'multiple' : "150",
		'resist' : "None",
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
		'_' : "Entity or Object",
*/ 
// target END

/* effects
		'_' : "This spell protects any affected entity or object completely from all forms of non-magical water damage. It works on any item less than or equal to ",
		'_' : "pounds in weight. Thus, written scrolls would not run, steel would not rust, potions would not dilute, clothing would not get wet etc. The duration is ",
		'_' : "days for objects, and ",
		'_' : "hours for entities.",
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
  
	'G-14' : {
		'title' : "Wave Control",
		'type' : "G",
		'abbr' : "14",
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
		'_' : "Volume of Water",
*/ 
// target END

/* effects
		'_' : "The Adept can increase or decrease the size of all waves within range by ",
		'_' : " feet.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-1' : {
		'title' : "Control Aquatic Life",
		'type' : "S",
		'abbr' : "1",
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
		'_' : "Aquatic Entity",
*/ 
// target END

/* effects
		'_' : "This spell allows the caster to control ",
		'_' : " aquatic creatures (which must be of the same generic type). These creatures will serve the caster so long as the caster concentrates or until they are told to go away (move out of range of the spell). A creature that is no longer controlled but still in the vicinity may attack its former master. If the target is of a particularly small, schooling species, the Adept may be able to control the whole or part of the school. This spell cannot be used to control sentient creatures. Aquatic Mammals are usually non-sentient.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Dehydration",
		'type' : "S",
		'abbr' : "2",
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
		'_' : "Object, Entity",
*/ 
// target END

/* effects
		'_' : "The target of this spell must successfully resist or have all of the water removed from their body, resulting in instant mummification. The target's corpse will remain preserved indefinitely (if kept dry, since little or no tissue damage occurs). After rehydration the body will be able to be resurrected as if it had just died. If the target is formerly or never living, the Adept receives +40% on the Base Chance. When used in this manner the spell can be used to dehydrate such things as food for preservation, such things lasting indefinitely if kept dry.",
*/ 
// effects END

	},
  
	'S-3' : {
		'title' : "Flash Flood",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "500",
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
		'_' : "Watercourse",
*/ 
// target END

/* effects
		'_' : "The Adept causes a particular watercourse within range to swell and burst its banks. The watercourse can be a stream, dry river bed, small or large river (i.e. anywhere that might be subject to such an occurrence naturally, including drains and sewers). The flood will occur with very little warning. After 30 seconds of low rumblings, the water level will suddenly rise, sweeping all before it. The flood will wipe out any small bridges and dams within range, wash people away, unhorse riders, wash wagons and carts away (chance of destruction dependent upon construction). The effects are most noticeable on small rivers or dry river beds. On a large river, the flood might appear as a large wave which would look rather innocuous at a distance but which would wreak just as much havoc. After the spell duration expires, the water level will drop just as quickly as it rose. All those caught in the flow must make a successful swimming roll to avoid drowning. If a person is unhorsed they must make a horsemanship roll to stay with their horse, in which case they may use the horse's Rank in swimming (generally 8) to determine drowning.",
*/ 
// effects END

	},
  
	'S-4' : {
		'title' : "Geyser",
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

/* target
		'_' : "Ground",
*/ 
// target END

/* effects
		'_' : "The Adept calls forth from the ground ",
		'_' : " jets of hot steam and mud. Each jet must appear in an adjacent hex to at least one other jet. Any Entity occupying an affected hex must resist or suffer ",
		'_' : ", half if resisted (round down), damage, per pulse. If a character resists they are allowed an automatic hex of movement. It is necessary to resist for each separate hex passed through, however only 1 resistance check is necessary for an individual hex regardless of the duration it is occupied for. Magical Waterproofing or Protection from Normal Fire will shield a character completely from any damage.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Liquid Purification",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "350",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "15 feet",
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
		'_' : "Aqueous Liquid",
*/ 
// target END

/* effects
		'_' : "The Adept may turn ",
		'_' : "quart of any aqueous liquid into drinkable water.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-6' : {
		'title' : "Liquid Transmutation",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "350",
		'resist' : "None",
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
		'_' : "Potable water",
*/ 
// target END

/* effects
		'_' : "The Adept may turn 1 pint of drinkable water into any other common liquid of their choice. The quality of the transformed liquid is dependent upon Rank (Rank 0, a wine might be made that was just drinkable, Rank 10 a Silver or Gold Medal young wine, Rank 20, an unsurpassed wine of its type).",
*/ 
// effects END

	},
  
	'S-7' : {
		'title' : "Maelstrom",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "500",
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
		'_' : "Volume of Water",
*/ 
// target END

/* effects
		'_' : "The Adept creates a horrifying watery vortex with a diameter of ",
		'_' : "feet which exists entirely within the spell's range. All objects and entities within 20 feet of the vortex must successfully resist or they are sucked into the eye of the vortex and down to the sea bottom. This spell will only be effective if cast over a large body of water (sea, ocean or lake).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Rainstorm",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "300",
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
		'_' : "The caster summons a miniature rainstorm, radius ",
		'_' : "feet, that appears over the target's head (little dark rain cloud, tiny lightning bolts and all). If the target fails to resist, the storm will follow them for the duration (even inside buildings), completely soaking everything not waterproof in ",
		'_' : " seconds. The distraction caused by the storm will add ",
		'_' : " to any rolls the target makes that are of a mental nature (i.e. require thought or concentration) or ",
		'_' : " to other rolls. All characters in the area of effect will suffer these effects although the effects are halved if they are not the actual target of the spell. If the target is waterproofed the effects will be minimal and if they are a Water Mage they will suffer no ill effect, but will have their Base Chances increased by 5%. If the Adept chooses to cast this spell on himself the duration is increased to 24 hours.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

/* rk @inc
*/ 
// rk END

/* rk
*/ 
// rk END

// effects END

	},
  
	'S-9' : {
		'title' : "Storm Calling",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Works at any Range",
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
		'_' : "Storm Front",
*/ 
// target END

/* effects
		'_' : "The Adept may summon any storm front which may exist anywhere in sight. Upon reaching the spot occupied by the Adept at the time of casting, the storm front will slow and finally cease moving and begin to downpour (snow, rain, sleet, or whatever else the GM feels clouds may contain). Generally a storm front can be seen for 20 to 30 miles. If no front can be seen, the spell may still be cast but the Base Chance is reduced by 20. The storm front will take ",
		'_' : " minutes to arrive.",
*/ 
/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'S-10' : {
		'title' : "Walk on Water",
		'type' : "S",
		'abbr' : "10",
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
		'_' : "The target is able to walk on the surface of water as if it were solid and non-slip. They may travel at their normal TMR. Reduce TMR by 1 for every foot above 3 in wave height. In rough waters, agility rolls may be deemed necessary (unless crawling).",
*/ 
// effects END

	},
  
	'S-11' : {
		'title' : "Waters of Healing",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "400",
		'resist' : "None",
		'storage' : "Special",
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
		'_' : "Volume of water",
*/ 
// target END

/* effects
		'_' : "
      This spell has two distinct uses:
      ",
		'_' : "
      In addition to these two effects the Adept may spend an hour and utilise materials costing 200sp to make a Potion with the same effects that will last indefinitely. The ingredients are used up regardless of success or failure.
    ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "The Adept can turn 1 pint of water into a half pint healing potion. The Potion will last ",
		'_' : "minutes and will cure ",
		'_' : " Endurance or Fatigue damage.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// item END

/* item
		'_' : "Alternatively, this potion may be used to immediately neutralise the effects of any venom, plus it will cure 1 point of Endurance loss due to the venom (the potion will only cure 1 point of damage due to venom).",
*/ 
// item END

// enumerate END

// effects END

	},
  
	'S-12' : {
		'title' : "Waters of Strength",
		'type' : "S",
		'abbr' : "12",
		'multiple' : "350",
		'resist' : "None",
		'storage' : "Special",
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
		'_' : "Pint of water",
*/ 
// target END

/* effects
		'_' : "
      This spell can be prepared in two ways:
      ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "The Adept can turn 1 pint of water into a half pint strength potion. The Potion will last ",
		'_' : "minutes and when drunk adds ",
		'_' : " to Physical Strength for ",
		'_' : "minutes.",
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

// item END

/* item
		'_' : "The Adept may spend an hour and utilise materials costing 500sp to make a Potion with the same effects that will last indefinitely. Potions are not cumulative. The ingredients are used regardless of success or failure.",
*/ 
// item END

// enumerate END

// effects END

	},
  
	'S-13' : {
		'title' : "Waters of Vision",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "250",
		'resist' : "None",
		'storage' : "Investment",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration
		'_' : "10 seconds",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Pool of water",
*/ 
// target END

/* effects
		'_' : "The Adept must touch a pool of water with their hand. They may then view visions (usually precognitive in nature) concocted by the GM. At Rank 5 and above, they may use this technique to spy into an area to see what is going on there. The maximum distance from the character to the area being spied into is ",
		'_' : "miles. The point of view of the Waters cannot be changed. If user is not able to form a clear mental image of the location to be spied upon or command the waters to focus on an unambiguously defined point in space, then it is the GM's discretion as to what will be seen",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-14' : {
		'title' : "Waterspout",
		'type' : "S",
		'abbr' : "14",
		'multiple' : "750",
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
		'_' : "Volume of water",
*/ 
// target END

/* effects
		'_' : "The Adept creates a tornado-like formation with a radius of ",
		'_' : "feet, over a body of water. The waterspout kills anyone and destroys anything which occupies the same space with it unless they successfully resist. The waterspout does ",
		'_' : " damage to a character who resists successfully instead of inflicting enough damage to kill them. A character need only resist the waterspout once. Boats and ships will be affected at the GM's discretion. Small boats may be broken into match sticks and will almost certainly capsize, large ships may suffer less damage, but lose rigging, masts etc. If the Adept concentrates they may move the waterspout in any direction they desire at a rate of ",
		'_' : "mph. It may never be moved onto dry land.",
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
		'title' : "Wave Riding",
		'type' : "S",
		'abbr' : "15",
		'multiple' : "300",
		'resist' : "None",
		'storage' : "Investment",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "This spell forms a wave of water under the target controlled by the Adept, allowing travel up to ",
		'_' : "mph. This spell will only form a wave on a suitably sized body of water. Speed of current will add/subtract to speed, wind will not. The wave requires passive concentration to maintain and to keep moving in the required direction. The wave dissipates if the Adept loses concentration. Multiple casts of this spell may be maintained by the same passive concentration action, thus several targets may ride the same wave (not separate ones).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Binding Water",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "750",
		'resist' : "Special",
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

/* effects
		'_' : "The Adept can bind the element of water while maintaining their concentration. It takes an hour to perform this ritual. The results are similar to the binding of all other elements. The Adept gains control of all facets of the element. They can, for example, create an intelligent water sprite (which will always have characteristics several points lower than the Adept) however, its every action would have to be directed by the Adept. At Rank 10 or higher, the Adept can create a free-willed water sprite that will be loyal to them and not require its every move be directed. Such entities will never leave the water. The will not be resisted unless the area contains a Water Elemental, which may passively and actively resist.",
*/ 
// effects END

	},
  
	'R-1' : {
		'title' : "Summoning and Binding Water Elemental",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "250",
		'resist' : "None",
/* range
		'_' : "20 feet",
*/ 
// range END

/* duration
		'_' : "passive concentration",
*/ 
// duration END

/* basechance @base, @inc
		'_' : "+1 per WP above 15",
*/ 
// basechance END

/* effects
		'_' : "
      The Adept may summon a Water Elemental and bind it to temporary service by performing this ritual. The ritual takes two hours. It may only be performed if the summoner is in contact with, or within 20 feet of, a large body of water (ocean, sea or lake) and the summoner remains stationary and takes no other action during the time the ritual is being performed. At the end of the two hour ritual, the player makes a Cast Check. If the ritual is successful the Elemental is summoned and controlled. If the ritual backfires then the Elemental is summoned but not controlled and will attack the summoner and their friends.
      ",
*/ 
/* para
		'_' : "A Water Elemental always appears within 20 feet of the summoner. It has a combined Endurance and Fatigue equal to ",
		'_' : ". The Elemental will remain until it is sent back to its own dimension by the Adept (with a Special Knowledge Counterspell of the College of Water Magics) or banished. If it is controlled by the summoner it will remain controlled until the summoner's concentration is broken.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

// effects END

	},
  
	},
  
};
  

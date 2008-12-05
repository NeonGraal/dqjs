
// == Dq -  College Binder ==
     
dq = {
BI : {
		'title' : "Binding and Animating Magics",
		'version' : "1.1",
		'abbr' : "BI",
		'requiredMA' : "17",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* description
*/ 
/* item @title
		'_' : "An assistant may be used to provide skills or abilities which the Binder does not possess. The assistant must be present throughout the entire ritual. If using an assistant's skill to craft a golem, the assistant's rank may affect the PB of the golem but not the base chance of performing the ritual.",
*/ 
// item END

/* item @title
		'_' : "Each golem type has a base construction time. This is multiplied by the height of the golem in feet (round up). This assumes that the adept has the requisite quantity of materials on hand and the tools or ability to shape the material.",
*/ 
// item END

/* item @title
		'_' : "To perform a Shaping Golem ritual the binder must have all of the materials on hand. They must also have the tools and skill to shape the material, or an assistant with the appropriate tools and skills.",
*/ 
// item END

/* item @title
		'_' : "The following statistics are for golems made of non-magical materials. Golems made of magical, enchanted or formerly enchanted materials are less predictable. A Binder attempting to use enchanted materials should exercise the utmost caution. Some golems may turn out fine, possibly even with beneficial side-effects, others may be actively inimical.",
*/ 
// item END

/* item @title
		'_' : "This is the cost for magical materials to perform the ritual. The cost of materials for the golem itself is additional to this.",
*/ 
// item END

/* item @title
		'_' : "When an Adept increases their rank in a golem ritual they may upgrade existing golems to their new rank. This requires the performance of the ritual. The time required is the base time for the golem (no matter how big it is).",
*/ 
// item END

/* item @title
		'_' : "When a golem is crafted or animated, the magic involved does not provide any sort of protection from normal weathering (i.e. Clay will dry and crumble, cloth will get torn, wood will rot, iron will rust, etc). Separate preservation magics may be cast on a golem to reduce or prevent normal weathering.",
*/ 
// item END

// description END

// subsection END

/* subsection @title
*/ 
/* para
		'_' : "When constructing a golem, it may be attuned to certain skills or magics. The adept may attune the golem with ",
		'_' : " ability. Each skill, language, weapon, talent (racial or college), spell, or ritual counts as 1 ability. What a golem has been attuned to cannot be changed but it can be increased when a golem is upgraded.",
*/ 
/* rk @base
*/ 
// rk END

// para END

// subsection END

/* subsection @title
*/ 
/* description
*/ 
/* item @title
		'_' : "Golems don't bleed.",
*/ 
// item END

/* item @title
		'_' : "Golems cannot be healed, instead they must be repaired. A golem must have positive Endurance to be activated.",
*/ 
// item END

/* item @title
		'_' : "A golem which has been killed cannot be re-activated until the damage is repaired and the appropriate shaping ritual is performed, as if doing an upgrade.",
*/ 
// item END

/* item @title
		'_' : "Golems always have full fatigue on activation. They also recover 1 FT per hour while activated.",
*/ 
// item END

/* item @title
		'_' : "Golems do not sleep and cannot be charmed. However, if the Binder is possessing a golem, they can be slept or charmed by targeting the golem.",
*/ 
// item END

/* item @title
		'_' : "Golems do not stun.",
*/ 
// item END

/* item @title
		'_' : "If a golem's Endurance is reduced below 1 then it deactivates.",
*/ 
// item END

/* item @title
		'_' : "A golem may wield weapons. If the golem has been attuned to a weapon then it may use that weapon at Rank 0. If that weapon is also built-in to the golem (or unarmed) then it will wield the weapon at Rank (Lower of: (Rank in ritual / 2) or maximum Rank). All other weapons will be wielded as if unranked. Note that a golem will not evade or attempt any special manoeuvre (e.g. trip, disarm) unless possessed by an Adept.",
*/ 
// item END

// description END

// subsection END

/* subsection @title
*/ 
/* para
		'_' : "Golems have an animal level intelligence. Each golem has an animal equivalent to use as a guideline for their intelligence and temperament when their masters' instructions are unclear, incomplete or no longer applicable.",
*/ 
// para END

/* para
		'_' : "Golems are somewhat different from their animal equivalents. They have a weak survival instinct, and their strongest drive is to follow their masters' instructions.",
*/ 
// para END

/* para
		'_' : "Golem Animal Equivalents: Clay = Ox; Rag & String = Monkey; Iron = Tiger; Stone = Elephant; Wood = Dog.",
*/ 
// para END

// subsection END

/* subsection @title
*/ 
/* para
		'_' : "Golems must be verbally instructed. Instructing a golem requires active concentration. A golem will only take instructions from its master. A golem will attempt to follow the nature and intent of the Adept's instructions.",
*/ 
// para END

// subsection END

/* modifiers @group
*/ 
/* modifier @mod
		'_' : "Rituals: Per 10% extra spent on Ritual materials",
*/ 
// modifier END

/* modifier @mod
		'_' : "Spells: Per hour of Ritual Spell Preparation",
*/ 
// modifier END

/* modifier @mod
		'_' : "per Rank in either Mechanician or Philosopher, not both.",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Activate Golem",
		'abbr' : "1",
/* effects
		'_' : "This talent requires 1 pulse of active concentration. It costs 2 FT to attempt this talent which activates an inactive golem. If the golem is one which the Adept has constructed then the talent automatically works; otherwise the chance of success is the Adept's chance of creating a golem of that type. This talent may not be ranked. The adept who activates a golem is considered its master.",
*/ 
// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Detect Enchantment",
		'abbr' : "2",
		'multiple' : "50",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      This talent determines whether an item, person, or area in line-of-sight and within range is currently under an enchantment or magical effect. The Adept can tell whether the enchantment is a current spell or ritual, a warded, invested, or permanent effect, is contained in a trap or is a curse. A double effect will reveal the general nature of the spell (eg; defensive, summoning, damaging) and the effective Rank or remaining duration of the enchantment. In addition, a triple effect will tell the Adept the exact name of the magic (eg; Wall of Bones, Hellfire), or the College of the spell.
      ",
*/ 
/* para
		'_' : "Once the initial, most recent, magical effect has been successfully detected, older enchantments on a target with multiple layers of magic may also be detected. This may be continued while the Adept continues to succeed in detecting Enchantments. However, only one attempt per quarter may be made to detect any given enchantment. If a new enchantment occurs, the Adept may attempt to detect it, though this in no way affects the status of the old layer. If an old, unsuccessfully detected enchantment expires, the Adept may attempt to detect any newly revealed magic beneath it.",
*/ 
// para END

/* para
		'_' : "If the Adept is in contact with the target then the base chance of this talent is increased by ",
		'_' : ".",
*/ 
/* rk @inc
*/ 
// rk END

// para END

// effects END

	},
  
	'G-1' : {
		'title' : "Adhesion",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "175",
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

/* target @base, @inc
		'_' : "cubic foot of non-living material",
*/ 
// target END

/* effects
		'_' : "The surface of a non-living solid, up to ",
		'_' : " cubic feet, is magically enchanted to adhere to any objects coming into contact with it. Once stuck, an object is released when the spell's duration expires, or the applied PS + D exceeds the spell's PS of ",
		'_' : ", which tears the object free (the durability of some objects may be less than the force required to tear them free from the spell). Several individuals may combine their PS to free an object. Being broken free of the area of the Adhesion, or resisting a particular contact, in no way protects the object from becoming stuck if brought into contact with the affected area again; nor is the spell in any way broken by having an object torn away; the area remains as adhesive as before. Except for the crowding of the area, there is no limit to the number of objects that may be stuck with this spell. The chance of a person coming into contact with an adhesive portion of a hex is ",
		'_' : "% applied to that hex.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* rk @inc
*/ 
// rk END

// effects END

	},
  
	'G-2' : {
		'title' : "Animating Objects",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "300",
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

/* target @base, @inc
		'_' : "pounds max weight, single Object",
*/ 
// target END

/* effects
		'_' : "
      This spell may be used to animate any one object. By taking a pass action the Adept may control the actions of ",
		'_' : " previously controlled animates within range. Once set in motion, the animates will attempt to carry out the action until ordered otherwise. The animates will move about in a manner applicable to their shape. Their TMR will not exceed 4.
      ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "Animates have a nominal PS value of ",
		'_' : " though this will have limited effect on objects made of flimsy materials. Their strike chance will be no more than ",
		'_' : ", with a maximum of D+2 damage. The animate will cease to function if the object is destroyed, or a Binder General Knowledge Counterspell is cast on it. An animate is an object, but may also be targeted as an Entity. If an animate is created through the use of a Ward or Magical Trap, it will receive one command determined when first cast.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// para END

// effects END

	},
  
	'G-3' : {
		'title' : "Bound Speech",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "200",
		'resist' : "Passive",
		'storage' : "None",
/* range @base, @inc
		'_' : "foot",
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
		'_' : "Object, Area of Object",
*/ 
// target END

/* effects
		'_' : "This spell allows the Adept to record a verbal message in an object, and defines the conditions under which the message will be replayed. This spell operates in most respects similarly to the Ward ritual, except that the range is the range of this spell or touch, and a message is stored instead of a spell. The message is replayed exactly as the Adept recorded it, and may contain any verbalisations that the Adept is capable of. The message may not exceed ",
		'_' : " words. Unlike the Ward ritual, the message may be triggered ",
		'_' : " additional times.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @full
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Durability",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "250",
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

/* target @base, @inc
		'_' : "pounds max weight, single Object",
*/ 
// target END

/* effects
		'_' : "
      One object may be made more resilient and less susceptible to damage. The item becomes almost as strong as steel of the same thickness, without losing any flexibility. The item cannot be broken unless exposed to stresses beyond that which steel could withstand, given the object's size and shape. The strength is improved with rank to a maximum of slightly stronger than steel.
      ",
*/ 
/* para
		'_' : "This spell does not protect against soiling, corrosion or fire or any forms of damage other than physical stress.",
*/ 
// para END

/* para
		'_' : "A weapon treated with this spell allows the wielder to add ",
		'_' : "% to any roll to save the weapon from breaking. Armour protected by this spell will have ",
		'_' : " extra Protection to a maximum of the equivalent Steel armour. At Rank 20, 1 may be added to this maximum.",
*/ 
/* rk @inc
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

// para END

/* para
		'_' : "Note that the added Protection replaces (rather than adds to) any other Protection bonuses due to a material's strength (eg Armourer bonuses). If the item is broken, or armour suffers damage from a Specific Grievous, the magic is dispelled.",
*/ 
// para END

// effects END

	},
  
	'G-5' : {
		'title' : "Mending",
		'type' : "G",
		'abbr' : "5",
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

/* target @base, @inc
		'_' : "pounds of parts of an Object, or the parts of one Golem",
*/ 
// target END

/* effects
		'_' : "Any single object or one Golem, can be mended. A mended object becomes exactly as it was before it was broken or deformed. Any pieces missing when the spell is cast will remain missing when the object is mended. Mending used to fix objects with an effective Artisan Rank greater than that the Adept possesses will degrade the object's effective rank. Magical items made mundane through breaking will remain mundane even after the use of a Mending. The Spell of Mending may be used on a living creature that has been transformed into stone, and subsequently broken. This requires that the Binder be a Sculptor of at least Rank 8. A Spell of Mending may be used to repair Golems. It may repair either a Specific Grievous injury, or all general Endurance damage.",
*/ 
// effects END

	},
  
	'G-6' : {
		'title' : "Modify Aura",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "100",
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

/* target @base, @inc
		'_' : "cubic feet max volume Object or an Entity",
*/ 
// target END

/* effects
		'_' : "
      This spell allows the Adept to able to modify the aura strength of any one object or entity. The strength of the aura increases or decreases by up to ",
		'_' : " on the table below. This spell does not alter the target's aura in any other way.
      ",
*/ 
/* rk @base, @per
*/ 
// rk END

Tables : {
	"Aura strength" : {
		'title' : "Aura strength",
		'cols' : "2",
/* row
*/ 
/* head
		'_' : "Aura",
*/ 
// head END

/* head
		'_' : "Equivalent",
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
		'_' : "No Aura",
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
		'_' : "Magic",
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
		'_' : "Formerly living as part of an object",
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
		'_' : "Formerly living",
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
		'_' : "Living plants",
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
		'_' : "Non-sentient Undead / Construct",
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
		'_' : "Living animals",
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
		'_' : "Sentient plant",
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
		'_' : "Sentient Undead / Construct",
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
		'_' : "Short-living Sentient",
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
		'_' : "Long-living Sentient",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "Avatar",
*/ 
// cell END

// row END

	},
},
// effects END

	},
  
	'G-7' : {
		'title' : "Minor Creation",
		'type' : "G",
		'abbr' : "7",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "The Adept may create a simple, common object from a larger source of its constituent substances by reaching into the source and withdrawing the object. For example, the Adept may reach into a tree and produce a staff. ",
		'_' : " different substances may be combined into a single finished object with this spell. The substance sources are in no way damaged or reduced by the spell. The created object will be a common example of its type and may not exceed ",
		'_' : " cubic feet in volume, nor ",
		'_' : "lb in weight. The object is physically real with all normal attributes. The object may not be created enclosed by or enclosing anything. Complicated or fine quality objects may not be created without the appropriate artisan skill. No alchemical, herbal or other quasi-magical objects may be created. Created food provides no sustenance. At the end of its duration the item vanishes. The object is a magical construct and will have a magical aura, regardless of its constituent materials.",
*/ 
/* rk @base, @full
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
  
	'G-8' : {
		'title' : "Moulding Elements",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "250",
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

/* target @base, @inc
		'_' : "cubic foot Volume",
*/ 
// target END

/* effects
		'_' : "A volume of up to ",
		'_' : "cubic feet containing one of the four material Elements (air, water, earth, fire) can be moulded by the Adept into any form desired, and will retain that form for the duration of the spell. The Adept must immediately mould the element into the correct shape with their hands. During this time the Adept is protected from the effects of the element, which is as malleable as putty. The time taken to mould the element is dependent on the size and complexity of the object desired, but will be at least a pulse. After the initial moulding, the element will retain its shape, unless something disrupts it, when it will immediately attempt to reform, possibly around or on top of the impedance. The shaped element will have a defined boundary and shape, but will not be rigid (excluding shaped earth). The spell cannot be cast over any entity. The Adept may use applicable artisan skills to shape an object of greater than Rank 0 quality. Once the spell expires the element will act normally according to its substance, shape, and natural laws.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-9' : {
		'title' : "Preservation",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "100",
		'resist' : "Passive",
		'storage' : "Ward, Investment, Magical Trap",
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
		'_' : "Volume, a dead / undead Entity",
*/ 
// target END

/* effects
		'_' : "This spell preserves and protects one animate, dead or undead entity, of up to ",
		'_' : "pounds or a collection of small objects of a total weight not greater than ",
		'_' : "pound against the effects of time, decay, rust, erosion or wave action. It does not confer any protection against magical attacks. It will not suspend time with regard to resurrection, poisons, curses, etc. Duration is ",
		'_' : " days, but is permanent at Rank 20.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

/* rk @base, @sq
*/ 
// rk END

// effects END

	},
  
	'G-10' : {
		'title' : "Transparency",
		'type' : "G",
		'abbr' : "10",
		'multiple' : "175",
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

/* target @base, @inc
		'_' : "adjacent 1 foot cubes",
*/ 
// target END

/* effects
		'_' : "This spell causes a volume of non-living solid material to become as transparent as high quality glass, but to otherwise retain its original characteristics. The Adept may cause the volume to be transparent from only a single direction, by reducing the BC by 10.",
*/ 
// effects END

	},
  
	'S-1' : {
		'title' : "Bubble of Force",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "450",
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
		'_' : "Volume",
*/ 
// target END

/* effects
*/ 
/* para
		'_' : "The spell causes an iridescent bubble of force to appear. The substance of the bubble prevents the occupant(s) from interacting with the world outside the bubble other than by sight and sound. The bubble is transparent to low levels of light and sound, but it prevents damaging levels of either passing through it. The bubble is impervious from both sides. It also absorbs physical damage, including that caused by falling. The bubble is impenetrable to magic - it may not be targeted through, and area effects will not pass through the bubble.",
*/ 
// para END

/* para
		'_' : "Inside, it provides a stable, warm and dry environment, with fresh air to breathe. The surface of the bubble is hard to the touch. The bubble may be rolled on a solid surface by an entity within it, by entities outside, or by a very strong wind or similar physical force. It will float on water or mud, lava and similar semi-solid substances, and may be carried by wind or current. All the bubble must appear within range.",
*/ 
// para END

Tables : {
	"Bubble of Force Effects" : {
		'title' : "Bubble of Force Effects",
		Head : [ "", "Diameter" ],
	Rows : [
		[ "0 - 10", "5' (one hex)" ],
		[ "11 - 15", "10' (three hexes)" ],
		[ "16 - 20", "15' (seven hexes)" ],
	],
	},
},
/* para
		'_' : "The bubble may enclose any entities and objects completely within the target hexes, if they fail to resist. Successful resistance will cause the entity to be gently pushed aside by the bubble. If the spell is cast in a gas, the gas is displaced outside the bubble. If cast in a liquid, the liquid is displaced, and the bubble will bob to the surface. The spell may not be cast inside a solid substance, or where there is insufficient room for the bubble to form without having to displace an immovable solid. Thus the whole sphere will always appear above ground. The bubble may be dissipated by anyone casting a Binder Special Knowledge Counterspell of at least equal Rank.",
*/ 
// para END

// effects END

	},
  
	'S-2' : {
		'title' : "Disintegration",
		'type' : "S",
		'abbr' : "2",
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
		'_' : "cubic feet max of a non-magical Object",
*/ 
// target END

/* effects
		'_' : "The Adept may disintegrate up to ",
		'_' : "cubic feet of a non-magical object. If the object has any magical attributes, the spell will fail.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Frictionless Floor",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "300",
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

/* target @base, @inc
		'_' : "square feet or equiv hexes.",
*/ 
// target END

/* effects
		'_' : "The area or ",
		'_' : " hexes, of contiguous surface becomes nearly frictionless, somewhat like wet ice. Footing becomes treacherous, and handholds non-existent. Any entity attempting to move on a frictionless surface must make a 1 x AG check each pulse, or fall prone. If they do fall, a successful AG check is required to regain their feet; and while prone, they will continue in the direction of their last movement until they clear the frictionless surface. The effect is not normally visible.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-4' : {
		'title' : "Instant Golem",
		'type' : "S",
		'abbr' : "4",
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
		'_' : "Object(s)",
*/ 
// target END

/* effects
		'_' : "
      This spell is cast to produce a specific type of golem with which the adept is familiar (must be greater than Rank 0 in the appropriate ritual) from materials within their range.
      ",
*/ 
/* para
		'_' : "If a sufficient quantity of materials is not within the Adept's range the spell will automatically fail.",
*/ 
// para END

/* para
		'_' : "When cast the materials within range will animate and draw together at the point where the majority of the materials are coming from. A golem will form in ",
		'_' : ". In the pulse after it has finished forming the golem will be ready to carry out its master's commands.",
*/ 
/* rk @base, @dec
*/ 
// rk END

// para END

/* para
		'_' : "The effective rank of the golem is the rank which the adept has in the appropriate ritual.",
*/ 
// para END

/* para
		'_' : "The duration of the golem is the duration of this spell. At the end of the duration the golem will collapse and its component materials will re-animate and attempt to return to their previous location and state.",
*/ 
// para END

/* para
		'_' : "Note for Investment: When Invested, the effective rank of the golem is the rank that the investing adept had in the appropriate ritual at the time of investment. The type of golem is set at the time of investment. The created golem will consider the triggerer to be its master.",
*/ 
// para END

/* para
		'_' : "Note for Ward: The type and effective rank of the golem are set at the time of warding. The Adept may also instill a basic instinct into the golem at the time of warding (e.g. kill, serve, assist, guard, dig, eat, etc.); the actions of the golem will be governed by this instinct. The instinct is always simple and indiscriminate (e.g. kill: the golem will attempt to kill anyone or anything that it perceives). The golem's master is the warding adept.",
*/ 
// para END

// effects END

	},
  
	'S-5' : {
		'title' : "Instant Petrifaction",
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
		'_' : "
      This spell immediately starts to petrify the target. For the next 5 seconds, all the target's percentage chances and D rolls are halved. At the end of this time, they must make their resistance check. If they succeed, they may resume normal activities, otherwise the petrifaction runs its course, leaving the target as marble-like stone.
      ",
*/ 
/* para
		'_' : "As with Ritual Petrifaction, any possessions of the target are petrified with the target. A petrified entity is not aware of their surroundings, and has time stopped for the purposes of poison, resurrection, curses and ageing. Petrifaction is not fatal, although a dead entity may still be petrified.",
*/ 
// para END

// effects END

	},
  
	'S-6' : {
		'title' : "Instilling Flight",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "350",
		'resist' : "None",
		'storage' : "None",
/* range
		'_' : "Touch",
*/ 
// range END

/* duration @conc, @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target @base, @inc
		'_' : "pound Object",
*/ 
// target END

/* effects
		'_' : "This spell enables the Adept to instil a possession with the power of flight. The spell will dissipate if the object stops being a possession of the Adept, the Adept loses concentration, or if the object is broken. The Adept may cause the object to fly at ",
		'_' : " miles per hour. It will take off and accelerate up to full speed, or halt and land, in a single pulse. The object may support ",
		'_' : "lbs in addition to its own weight. Naturally flexible or fragile items gain sufficient strength and rigidity to support the load. Any object or entity that falls from the flying object will move off in a random direction. If the object is about to crash into a surface, it will attempt to land, although some surfaces may be inappropriate for this (lava, sheer walls, etc.).",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-7' : {
		'title' : "Itemisation",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "300",
		'resist' : "None",
		'storage' : "None",
/* range
		'_' : "Touch",
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
		'_' : "One object is transformed into a representative figurine of itself. This spell will fail if the target is not free-standing or if the target does not fit within a ",
		'_' : "foot cube. The figurine will look like the original item but have the structural strength of soft wood and will have no moving parts. The figurine will be 1/12th of the size (min 1 inch in its longest dimension) and 1/10th the weight of the original. Any items contained within the target will not be affected, and may destroy the item as it shrinks. The figurine will revert to normal when the spell expires or the figurine is broken.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Making",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "Self",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "This spell enables the Adept to use their hands as if they were common tools. The hands do not change appearance. The Adept may freely change from the mimicry of one tool to another without re-casting the spell. This spell does not affect the damage done by Unarmed Combat. This spell does not enhance the Adept's craftsmanship, nor protect them while they work (except for the protective properties of the tools they are emulating). The tools that may be mimicked must be reasonably simple, and include: adze, auger, chisel, crowbar, hammer, hatchet, level, pickaxe, plane, pliers, plumb-bob, rock drill, saw, shovel, sickle, spokeshave, square, tongs and mallet.",
*/ 
// effects END

	},
  
	'S-9' : {
		'title' : "Matter Transmutation",
		'type' : "S",
		'abbr' : "9",
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

/* target @base, @inc
		'_' : "cubic feet of Volume",
*/ 
// target END

/* effects
		'_' : "The Adept may transmute a volume of non-living matter into any other matter. The matter must retain its elemental state - solid to solid, liquid to liquid, gas to gas. The transmuted matter will retain its original size and shape, but assumes all other physical characteristics of the resulting matter. The Adept must have some familiarity with the resulting matter.",
*/ 
// effects END

	},
  
	'S-10' : {
		'title' : "Possess Golem",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "250",
		'resist' : "Passive",
		'storage' : "Potion",
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
		'_' : "Self and Controlled Golem",
*/ 
// target END

/* effects
		'_' : "
      The Adept's body goes into a coma and the Adept's mind goes into the body of the target golem. The Willpower, Magical Aptitude, Perception and Magic Resistance of the golem are replaced by those of the Adept. The Adept may only use ranks in abilities which they have, and the golem has been attuned to.
      ",
*/ 
/* para
		'_' : "During the possession the Adept uses the golem's senses. The Adept may also speak through the golem's mouth.",
*/ 
// para END

/* para
		'_' : "The Adept may cast while possessing any non-iron golem, however: The FT cost of the magic is applied to the Adept's body and the host golem; The Adept cannot cast if the host golem has no FT; Backfires affect the Adept's body and the host golem (if applicable).",
*/ 
// para END

/* para
		'_' : "If the host golem takes Endurance damage then the adept's body takes half of that amount as FT damage. If the host golem is knocked unconscious or killed then the adept must make a Willpower check or fall unconscious for D minutes; the multiple is x 2 for unconsciousness or x 1 for death.",
*/ 
// para END

// effects END

	},
  
	'S-11' : {
		'title' : "Unfastening",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "250",
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
		'_' : "This spell unfastens, opens or unties all closures, buckles, straps, ties, knots, locks and other fastenings on the target (causing most armour, clothes, and packs to fall off). This will not undo stitching or weaving, and it will not cause any damage to the target. If targeted on an entity then all of their possessions will be affected by the spell.",
*/ 
// effects END

	},
  
	'S-12' : {
		'title' : "Wall of Dust and Sand",
		'type' : "S",
		'abbr' : "12",
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
		'_' : "This spell summons and binds together particles of dust and sand to create a wall with the strength and solidity of sandstone. The wall may be 15' tall 20' long 1' thick; or a ring 10' high with a 10' diameter; or a pillar 15' high with a 4' diameter. The Adept may increase any dimension by ",
		'_' : " feet. The Adept determines the position and orientation of the Wall, but at least one edge must be affixed to a solid surface. The fixed edge of the wall will bind fast to the adjacent surface, and can support the rest of the wall. Any entity that is in the area of the wall when it is cast will be ejected to the closest point outside the wall - if this is impossible, the wall will not appear. The wall may be destroyed by inflicting 100 points of damage, or a 5' x 5' x 5' hole may be caused by inflicting 50 points of damage.",
*/ 
/* rk
*/ 
// rk END

// effects END

	},
  
	'S-13' : {
		'title' : "Wall Walking",
		'type' : "S",
		'abbr' : "13",
		'multiple' : "450",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "This spell allows the Adept to pass through solid matter by becoming insubstantial. However, they may not pass through cold iron. The Adept has a TMR of 1 while within solid matter, and may move in any direction, including up and down. The Adept gains no ability to see through solid matter, but may breathe in it. While under the effects of this spell, the Adept is virtually immune to physical damage except that inflicted by cold iron, but conversely cannot harm anyone in melee unless they use cold iron in return. If the Adept is caught in a solid object when the spell expires, they lose the ability to breathe in solid matter, and are trapped.",
*/ 
// effects END

	},
  
	'Q-1' : {
		'title' : "Linking Lifeforce",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "300",
		'resist' : "Passive",
		'concentration' : "Standard",
/* duration
		'_' : "Permanent",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object, entity",
*/ 
// target END

/* material
		'_' : "Object",
*/ 
// material END

/* effects
		'_' : "This ritual allows the Adept to bind an object to the life-force of an entity. The object will reflect the entity's physical condition. If the entity is well, the object will be in perfect order; if the entity is sick or wounded, the object will appear appropriately damaged; and if the entity dies, the object will seem ruined. There is no limitation on the size or type of object, but it must remain the entity's possession during the entire ritual. Traditionally, apples, roses, statues, paintings or diamonds are used. The Life-force Link may be broken by destroying the object, or by the object being beyond ",
		'_' : "miles from the entity. The death of the entity will not break the Link. If ",
		'_' : " is spent on ingredients, the range is unlimited and the entity and object may occupy different planes without breaking the Link.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'Q-2' : {
		'title' : "Petrifaction",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "200",
		'resist' : "Active, Passive",
		'concentration' : "Standard",
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

/* effects
		'_' : "This ritual allows the Adept to either change one entity to marble-like stone, or turn one magically petrified entity back to flesh. The entity must be present for the entirety of the Ritual. Any possessions of an entity are (un)petrified with the entity. A petrified entity is not aware of their surroundings, and has time stopped for the purposes of poison, resurrection, curses and ageing. Petrifaction is not fatal, although a dead entity may still be petrified. If an entity is damaged after petrifaction, they may be repaired with the Mending Spell if the Adept is a Rank 8 Sculptor. Any damage will be applied when the entity becomes flesh. A petrified entity weighs 3 times their normal weight.",
*/ 
// effects END

	},
  
	'Q-3' : {
		'title' : "Shaping Clay Golems",
		'type' : "Q",
		'abbr' : "3",
		'multiple' : "300",
		'resist' : "None",
		'actions' : "Sculpting a statue",
		'basetime' : "2 hours",
		'concentration' : "None",
/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* material
		'_' : "Clay & Rare Earths",
*/ 
// material END

/* materialcost
		'_' : "100 sp",
*/ 
// materialcost END

/* effects
		'_' : "
      Turns a quantity of earth into a golem. Clay golems are susceptible to fire and immersion; exposure to either will cause D FT damage to the golem every minute. Fire and water based attacks do double damage. A clay golem will gradually dry out and become immobile if not kept moist. In a temperate climate a golem will lose 1 AG per day if no action is taken to prevent this. A golem which has completely dried out cannot be reactivated. During construction a clay golem may be designed to resemble a humanoid; this requires that the Adept or an assistant has the sculptor skill and is familiar with the humanoid race. The chance of the golem passing visual inspection is 40 ",
		'_' : "sculptor, ",
		'_' : "spy). Note that the golem will not pass close inspection - cold, hard skin, lifeless face. Base
      ",
*/ 
/* rk @inc
*/ 
// rk END

/* rk @inc
*/ 
// rk END

/* para
		'_' : "Base Materials: Clay or any soft earth. However clay tends to be the material of preference as golems made of more crumbly earth fall apart easily.",
*/ 
// para END

// effects END

	},
  
	'Q-4' : {
		'title' : "Shaping Rag & String Golems",
		'type' : "Q",
		'abbr' : "4",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Building a golem",
		'basetime' : "3 hours",
		'concentration' : "None",
/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* material
		'_' : "Cloth, straw & herbs",
*/ 
// material END

/* materialcost
		'_' : "50 sp",
*/ 
// materialcost END

/* effects
		'_' : "
      Turns a small mannequin into a golem. Rag & string golems are susceptible to fire; exposure to fire will cause [D - 4] FT damage to the golem every second pulse. Fire based attacks do double damage.
      ",
*/ 
/* para
		'_' : "Base Materials: Cloth, string, rope, straw. Flexible, easily manipulable materials.",
*/ 
// para END

// effects END

	},
  
	'R-1' : {
		'title' : "Binding Permanency",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "400",
		'resist' : "None",
		'concentration' : "Standard",
/* duration
		'_' : "Permanent",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Spell",
*/ 
// target END

/* material
		'_' : "Special",
*/ 
// material END

/* effects
		'_' : "This ritual enhances the duration of one of the Adept's spells or rituals belonging to the College of Binding and Animating Magics. The magic must have been cast previously, and have sufficient duration to last through the performance of this ritual. This ritual may not be used with any magics with concentration-based or indefinite, condition-based duration. A spell that has been enhanced by this ritual may not be counter-spelled, but may still be dissipated. Material costs for this ritual are ",
		'_' : " sp for General Knowledge Spells, ",
		'_' : " sp for Special Knowledge Spells, and ",
		'_' : " sp for Rituals.",
*/ 
/* rk @base, @dec
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'R-2' : {
		'title' : "Investment",
		'type' : "R",
		'abbr' : "2",
/* effects
		'_' : "Except as noted below, this ritual is identical to the ritual of the same name in the College Magic - Investment section. Adepts of this College learn this Ritual of Investment instead of the standard version. The Adept may invest either a spell of their own or that of a willing Mage who participates in the full ritual. If the spell being invested is contributed by another Mage, the maximum number of charges stored is ",
		'_' : ". The maximum investable rank of the spell is Spell Rank - [(20 -Ritual Rank) / 2 ]. A spell whose maximum investable rank is reduced below Rank 0 may not be invested. The Adept may not have any assistance in creating scrolls.",
*/ 
/* rk @full
*/ 
// rk END

// effects END

	},
  
	'R-3' : {
		'title' : "Item Divination",
		'type' : "R",
		'abbr' : "3",
		'multiple' : "150",
		'resist' : "None",
		'concentration' : "Standard",
/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* materialcost @base, @dec
*/ 
// materialcost END

/* effects
		'_' : "Through this ritual, the Adept discovers the exact nature of all enchantments, mechanisms, curses, side-effects, etc. placed on an item. If an item has been imbued with an Individual True Name, the name will not be revealed, but its existence will be. This ritual cannot backfire.",
*/ 
// effects END

	},
  
	'R-4' : {
		'title' : "Major Creation",
		'type' : "R",
		'abbr' : "4",
		'multiple' : "250",
		'resist' : "None",
		'concentration' : "Standard",
/* duration @base, @inc
		'_' : "day",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "The Adept may create an object from a larger source of its constituent substances by drawing forth the materials from the source. All constituent materials must be within ",
		'_' : "feet. Any number of different substances may be combined into a single finished object with this ritual. The substance sources are in no way damaged or reduced by the ritual. The created object may be any object which the adept can see or has studied and may not exceed ",
		'_' : "cubic feet in volume, nor ",
		'_' : "lbs in weight. The object is physically real with all normal attributes. The object may not be created enclosed by or enclosing anything. Complicated or fine quality objects may not be created without the appropriate artisan skill. No alchemical, herbal or other quasi-magical objects may be created. Created food provides no sustenance. At the end of its duration the item vanishes. The object is a magical construct and will have a magical aura, regardless of its constituent materials.",
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
  
	'R-5' : {
		'title' : "Shaping Iron Golems",
		'type' : "R",
		'abbr' : "5",
		'multiple' : "350",
		'resist' : "None",
		'actions' : "Forging a golem",
		'basetime' : "4 days",
		'concentration' : "None",
/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* material
		'_' : "Forgeable metal & Rare Earths",
*/ 
// material END

/* materialcost
		'_' : "1,000 sp",
*/ 
// materialcost END

/* effects
		'_' : "
      Turns a quantity of metal into a golem. When activated an iron golem radiates a faint glow, especially its eyes, and is warm to the touch.
      ",
*/ 
/* para
		'_' : "Base Materials: All metals which are normally solid at room temperature.",
*/ 
// para END

// effects END

	},
  
	'R-6' : {
		'title' : "Shaping Stone Golems",
		'type' : "R",
		'abbr' : "6",
		'multiple' : "350",
		'resist' : "None",
		'actions' : "Carving a golem",
		'basetime' : "4 days",
		'concentration' : "None",
/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* material
		'_' : "Stone & Rare Earths",
*/ 
// material END

/* materialcost
		'_' : "500 sp",
*/ 
// materialcost END

/* effects
		'_' : "
      Turns a quantity of stone into a golem. Stone golems are the heaviest of all golems. Stone golems cannot be stealthy, they grind as they move. A Stone Golem can usually be heard coming from 100 yards away.
      ",
*/ 
/* para
		'_' : "Base Materials: All types of stone or rock which are normally solid.",
*/ 
// para END

// effects END

	},
  
	'R-7' : {
		'title' : "Shaping Wood Golems",
		'type' : "R",
		'abbr' : "7",
		'multiple' : "250",
		'resist' : "None",
		'actions' : "Carving a Golem",
		'basetime' : "2 days",
		'concentration' : "None",
/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* materialcost
		'_' : "100 sp",
*/ 
// materialcost END

/* effects
		'_' : "
      Turns a quantity of wood into a golem. Wood golems are susceptible to fire; exposure to fire will cause D FT Damage to the Golem every 30 seconds. Fire based attacks do double damage. During construction a wood golem may be designed to resemble a tree, this requires that the Adept or an assistant has the Herbalist skill. The chance of the golem passing casual inspection is ",
		'_' : "Herbalist). Note that the disguise will only work if the golem is not moving.
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "Base Materials: All wood types, including wicker, cane and bamboo, but excluding fossilised woods and grasses. GMs may rule that unusual wood types have different properties (e.g. An iron wood golem might have +1 NA, +1 PS, + 2 EN, -2 TMR, -4 AG).",
*/ 
// para END

// effects END

	},
  
Tables : {
	"Golem Base Statistics" : {
		'title' : "Golem Base Statistics",
		'cols' : "6",
/* row
*/ 
/* head
		'_' : "Golem",
*/ 
// head END

/* head
		'_' : "MA",
*/ 
// head END

/* head
		'_' : "WP",
*/ 
// head END

/* head
		'_' : "PC",
*/ 
// head END

/* head
		'_' : "PB",
*/ 
// head END

/* head
		'_' : "NA",
*/ 
// head END

// row END

/* row
*/ 
/* cell
		'_' : "Clay",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "5 + 2 / Rk (Sculptor)",
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
		'_' : "Iron",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "8 + Rk (Blacksmith)",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "R &S",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "10 + Rk (Tailor)",
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
		'_' : "Stone",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "6 +3 / 2 Rk (Sculptor)",
*/ 
// cell END

/* cell
		'_' : "6",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Wood",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "10 +3 / 2 Rk (Carving)",
*/ 
// cell END

/* cell
		'_' : "4",
*/ 
// cell END

// row END

	},
	"Golem Rank Statistics" : {
		'title' : "Golem Rank Statistics",
		'cols' : "9",
/* row
*/ 
/* head
		'_' : "Golem Type",
*/ 
// head END

/* head
		'_' : "Size",
*/ 
// head END

/* head
		'_' : "PS",
*/ 
// head END

/* head
		'_' : "MD",
*/ 
// head END

/* head
		'_' : "AG",
*/ 
// head END

/* head
		'_' : "EN",
*/ 
// head END

/* head
		'_' : "FT",
*/ 
// head END

/* head
		'_' : "TMR Mod",
*/ 
// head END

// row END

/* row
*/ 
/* cell @align, @span
		'_' : "Clay",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "3'",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "17",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "-1",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "4'",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "-1",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "5'",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "6'",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "11",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "21",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "7'",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "24",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "8'",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "9",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "27",
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
*/ 
// cell END

/* cell
		'_' : "9'",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "11",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "30",
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
*/ 
// cell END

/* cell
		'_' : "Rk",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell @span
*/ 
// cell END

// row END

/* row
*/ 
/* cell @span
		'_' : "Iron",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "4'",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "19",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "-1",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "5'",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "22",
*/ 
// cell END

/* cell
		'_' : "22",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "6'",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "17",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "24",
*/ 
// cell END

/* cell
		'_' : "24",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "7'",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "26",
*/ 
// cell END

/* cell
		'_' : "26",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "8'",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "11",
*/ 
// cell END

/* cell
		'_' : "28",
*/ 
// cell END

/* cell
		'_' : "28",
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
*/ 
// cell END

/* cell
		'_' : "9'",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "30",
*/ 
// cell END

/* cell
		'_' : "30",
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
*/ 
// cell END

/* cell
		'_' : "10'",
*/ 
// cell END

/* cell
		'_' : "22",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "9",
*/ 
// cell END

/* cell
		'_' : "32",
*/ 
// cell END

/* cell
		'_' : "32",
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
*/ 
// cell END

/* cell
		'_' : "Rk",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

// row END

/* row
*/ 
/* cell @span
		'_' : "Rag & String",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "6",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

/* cell
		'_' : "22",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

/* cell
		'_' : "x0.25",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "1'",
*/ 
// cell END

/* cell
		'_' : "4",
*/ 
// cell END

/* cell
		'_' : "21",
*/ 
// cell END

/* cell
		'_' : "19",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

/* cell
		'_' : "4",
*/ 
// cell END

/* cell
		'_' : "x0.33",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "1'6",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "x0.50",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "2'",
*/ 
// cell END

/* cell
		'_' : "6",
*/ 
// cell END

/* cell
		'_' : "19",
*/ 
// cell END

/* cell
		'_' : "17",
*/ 
// cell END

/* cell
		'_' : "4",
*/ 
// cell END

/* cell
		'_' : "6",
*/ 
// cell END

/* cell
		'_' : "x0.66",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "2'6",
*/ 
// cell END

/* cell
		'_' : "7",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "7",
*/ 
// cell END

/* cell
		'_' : "x0.75",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "Rk",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell @span
*/ 
// cell END

// row END

/* row
*/ 
/* cell @span
		'_' : "Stone",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "5'",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "6'",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "11",
*/ 
// cell END

/* cell
		'_' : "16",
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
*/ 
// cell END

/* cell
		'_' : "7'",
*/ 
// cell END

/* cell
		'_' : "21",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "8'",
*/ 
// cell END

/* cell
		'_' : "24",
*/ 
// cell END

/* cell
		'_' : "11",
*/ 
// cell END

/* cell
		'_' : "9",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "21",
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
*/ 
// cell END

/* cell
		'_' : "9'",
*/ 
// cell END

/* cell
		'_' : "27",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "22",
*/ 
// cell END

/* cell
		'_' : "24",
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
*/ 
// cell END

/* cell
		'_' : "10'",
*/ 
// cell END

/* cell
		'_' : "30",
*/ 
// cell END

/* cell
		'_' : "9",
*/ 
// cell END

/* cell
		'_' : "7",
*/ 
// cell END

/* cell
		'_' : "24",
*/ 
// cell END

/* cell
		'_' : "27",
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
*/ 
// cell END

/* cell
		'_' : "11'",
*/ 
// cell END

/* cell
		'_' : "33",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "6",
*/ 
// cell END

/* cell
		'_' : "26",
*/ 
// cell END

/* cell
		'_' : "30",
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
*/ 
// cell END

/* cell
		'_' : "12'",
*/ 
// cell END

/* cell
		'_' : "36",
*/ 
// cell END

/* cell
		'_' : "7",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "28",
*/ 
// cell END

/* cell
		'_' : "30",
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
*/ 
// cell END

/* cell
		'_' : "Rk",
*/ 
// cell END

/* cell
		'_' : "1.5",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell @span
*/ 
// cell END

// row END

/* row
*/ 
/* cell @span
		'_' : "Wood",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "2'",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "-1",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "3'",
*/ 
// cell END

/* cell
		'_' : "6",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "-1",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "4'",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "-1",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "5'",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "13",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "6'",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "12",
*/ 
// cell END

/* cell
		'_' : "11",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "21",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "7'",
*/ 
// cell END

/* cell
		'_' : "14",
*/ 
// cell END

/* cell
		'_' : "11",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "24",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
*/ 
// cell END

/* cell
		'_' : "8'",
*/ 
// cell END

/* cell
		'_' : "16",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "9",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "27",
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
*/ 
// cell END

/* cell
		'_' : "9'",
*/ 
// cell END

/* cell
		'_' : "18",
*/ 
// cell END

/* cell
		'_' : "9",
*/ 
// cell END

/* cell
		'_' : "8",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "30",
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
*/ 
// cell END

/* cell
		'_' : "Rk",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

/* cell
		'_' : "0.5",
*/ 
// cell END

// row END

/* description
*/ 
/* item @title
		'_' : "Bonus to statistic per Rank in the ritual. Always truncate fractions.",
*/ 
// item END

// description END

	},
},
	},
  
};
  

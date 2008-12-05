
// == Dq -  College EandE ==
     
dq = {
EN : {
		'title' : "Ensorcelments and Enchantments",
		'version' : "1.1",
		'abbr' : "EN",
		'requiredMA' : "16",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
	'T-1' : {
		'type' : "T",
		'title' : "Wizardsight",
		'abbr' : "1",
		'multiple' : "150",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept may see objects or entities that are invisible - they appear to have a slight blue sheen around them. If the invisibility effect (excluding Walking Unseen) is of a higher Rank than the Wizardsight, the object or entity may not be clearly identified or directly magically targeted.",
*/ 
// effects END

	},
  
	'G-1' : {
		'title' : "Charming",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "500",
		'resist' : "Active, Passive",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The Adept may influence the actions of any one entity by casting a Spell of Charming over the individual. If the Generic True Name is known, the Base Chance is increased by 15. If the Individual True Name is known and used, the Base Chance is increased by 25.
      ",
*/ 
/* para
		'_' : "The victim of the spell will then see the caster as their true friend and will readily accept most suggestions emanating from them. Sworn enemies of the caster (or of their race) will not be affected by this spell unless the victim's Individual True Name is spoken and, even then, the duration of the spell is halved.",
*/ 
// para END

/* para
		'_' : "The caster may either suggest actions to the victim or may order them to act in a certain way on pain of losing the caster's ``friendship''. Any suggestion that is not directly and obviously inimical to the victim's interests (as defined by the GM, but usually limited to actions that would be injurious or fatal to the victim) will be acted upon 90% of the time. The caster may only ensure 100% compliance with a request by making it an order based upon the friendship that binds the victim and caster together. In such instances, however, the victim immediately makes a Resistance Check. If they resist, then the spell is broken. Otherwise, the victim will accept the order and be 100% faithful to it for the remainder of the spell.",
*/ 
// para END

/* para
		'_' : "Whenever any suggestion is made that would lead to the victim's injury or death, another Resistance Check is made. If the check is unsuccessful, the victim will accept the suggestion, otherwise the spell will be broken.",
*/ 
// para END

// effects END

	},
  
	'G-2' : {
		'title' : "Telekinesis",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "300",
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

/* target @base, @inc
		'_' : "pounds of Entity or Object",
*/ 
// target END

/* effects
		'_' : "Allows the Adept to lift a target and move it at the rate of 2 TMR. For each Rank of the spell Adept may move increase the weight or increase the speed by an additional 3 TMR.",
*/ 
// effects END

	},
  
	'G-3' : {
		'title' : "Enchanted Sleep",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "250",
		'resist' : "Active, Passive",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The Adept may send the target, provided it normally spends any time sleeping, into a deep enchanted sleep which will last for the duration of the spell or until the entity is awoken by another entity (by being shaken, etc.). The target may not be wakened if the spell is Rank 10 or higher, but must continue to sleep until the spell wears off. If a General Knowledge counterspell of this college is cast upon an affected target by any Adept then the spell will immediately dissipate and the target can then be woken normally.",
*/ 
// effects END

	},
  
	'G-4' : {
		'title' : "Walking Unseen",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Investment, Potion, Ward, Magical Trap",
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
		'_' : "If the target of the spell is touched by another entity, or that entity's possessions, then the spell is broken. The target of the spell may not break it voluntarily (other than by, for example, touching another entity). Once broken the spell must be recast.",
*/ 
// para END

// effects END

	},
  
	'G-5' : {
		'title' : "Speaking to Enchanted Creatures",
		'type' : "G",
		'abbr' : "5",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "The spell gives the Adept the ability to speak and understand the language of all magical creatures. One casting will allow communication with any fantastical creature, but will not allow the Adept to comprehend fantastical creatures talking amongst themselves or to other people affected by this spell.",
*/ 
// effects END

	},
  
	'G-6' : {
		'title' : "Location",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
/* range @base, @inc
		'_' : "miles",
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
		'_' : "The Adept may determine the direction in which they will find any person or object of their desire which they have previously encountered or studied and which is within range. The direction will be indicated by a large glowing arrow, only visible to the Adept. The arrow will not appear if the target is not within range. If cast, and the target is not within range, then the spell is dissipated. The arrow will not appear should the target come within range during the period the spell would normally have been in effect.",
*/ 
// effects END

	},
  
	'G-7' : {
		'title' : "Mass Charming",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "850",
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

/* target @base, @inc
		'_' : "Entities",
*/ 
// target END

/* effects
		'_' : "
      The spell takes 3 minutes to take effect and the effects linger 3 to 5 minutes after concentration is broken.
      ",
*/ 
/* para
		'_' : "The effects of the spell on the individuals are identical to the effects of Spell of Charming [G-1].",
*/ 
// para END

// effects END

	},
  
	'G-8' : {
		'title' : "Invisibility",
		'type' : "G",
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
		'_' : "Entity or object",
*/ 
// target END

/* effects
*/ 
/* para
		'_' : "The target of this spell becomes invisible and may not be seen by non-magical means. An invisible thing does not have a shadow or a reflection. They have no impact on their environment as a result of the effects of light in any form. The converse is not true - light still affects the target (e.g. may still see, be hit by Blackfire etc.). Invisibility may be cast over objects or entities (and any possessions of either). An object's possessions are any thing which is totally enclosed by that object (e.g. coins in an invisible chest which is closed, but not one which is open). If a thing ceases to be a possession, then the spell will not affect it. Similarly if an object becomes a possession then the spell will affect it (i.e. an object put down by an invisible entity will become seen; a coin put in the invisible chest will become invisible). Note that light may not be a possession - if the target is carrying a lantern it will be invisible, but the light it emits will not.",
*/ 
// para END

/* para
		'_' : "The spell ceases to work whenever the target makes a strike check (whether resulting in a ``hit'' or not) that does not involve a Thrown or Missile weapon (used as such). This restriction does not apply to Invisibility when cast at rank 16 or higher. The target may always choose to end the spell at any time.",
*/ 
// para END

// effects END

	},
  
	'G-9' : {
		'title' : "Evil Eye",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "300",
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
		'_' : "Entity",
*/ 
// target END

/* effects
*/ 
/* para
		'_' : "Any target who fails to resist has their Strike Chance and Magic Resistance reduced by ",
		'_' : ".",
*/ 
/* rk @min
*/ 
// rk END

// para END

// effects END

	},
  
	'S-1' : {
		'title' : "Ventriloquism",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "100",
		'resist' : "None",
		'storage' : "Potion",
/* range
		'_' : "90 feet",
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
		'_' : "The spell allows the Adept to project their voice and alter it so that it sounds like any other voice the Adept has heard. The voice may be projected so that it appears to be emanating from anywhere within the radius of the spell.",
*/ 
// effects END

	},
  
	'S-2' : {
		'title' : "Bolt of Energy",
		'type' : "S",
		'abbr' : "2",
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
		'_' : "Entity or object",
*/ 
// target END

/* effects
		'_' : "The Adept may cast a bolt of energy at a target and will, as a result, inflict ",
		'_' : " damage on the first entity or object that the bolt encounters.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Opening",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "150",
		'resist' : "Passive",
		'storage' : "Investment",
/* range @base, @inc
		'_' : "sfeet",
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
		'_' : "Instantly opens any one object or portal, including those locked by Mage Lock (S-6). A door or lid will have all locks unlocked and bolts undone and will become immediately open (ajar).",
*/ 
// effects END

	},
  
	'S-4' : {
		'title' : "Enchant Weapon",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "Increases the Base Chance to hit with the weapon over which it is cast by ",
		'_' : " and increases the damage done by the weapon by ",
		'_' : ".",
*/ 
/* rk @base
*/ 
// rk END

/* rk @per
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Web of Entanglement",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "150",
		'resist' : "Passive",
		'storage' : "Investment, Ward",
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
		'_' : "Entity or object",
*/ 
// target END

/* effects
		'_' : "
      This spell allows the Adept to project a sticky web, similar to a spider web in construction, from their fingertips at a target hex, object or entity. Any objects or entities standing between the Adept and the target are ensnared by the web along with the target. The web may only ensnare a number of human-sized entities equal to the Adepts's rank and so will stop at the hex at which this limit is reached (or maximum range).
      ",
*/ 
/* para
		'_' : "The web continues until cut or until the Adept ceases to concentrate on it. In order to cut the web, a character must successfully strike with a weapon that does type B damage and must inflict at least 10 points of damage as a result of that single strike. The web has no defence.",
*/ 
// para END

/* para
		'_' : "Any ensnared entity must roll 1 x PS (2 times PS if they successfully resisted) in order to move themselves to an adjacent hex (which may be free of the web), or to perform an action within the web. A similar check is required for any entity attempting to remove an object from the web. If an entity receives aid in removing themselves from the web, the PS of the aiding character may be combined with their own. Any dropped object will become ensnared by the web, as will any entity who comes into contact with it (up to the limit of the web).",
*/ 
// para END

// effects END

	},
  
	'S-6' : {
		'title' : "Mage Lock",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "150",
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
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "
      The spell may be cast over any portal (door, window, etc.) that can normally be opened or closed. It effectively locks the portal with an unpickable lock. The portal may still be forced open by brute strength. The Physical Strength(s) of all characters attempting to force a portal locked in this manner are added together and multiplied by the Difficulty Factor of the task. The Difficulty Factor is a function of the Rank of the spell:
      ",
*/ 
Tables : {
	"Mage Lock Effect" : {
		'title' : "Mage Lock Effect",
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
// effects END

	},
  
	'S-7' : {
		'title' : "Enhancing Enchantment",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "300",
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
		'_' : "
      The Rank of this spell is added to the Rank of one characteristic of any spell being cast within the area of effect. Note that the actual Rank of the affected spell is unchanged - only the effect of one characteristic is enhanced (as per double and triple effects).
      ",
*/ 
/* para
		'_' : "While casting the Spell of Enhancing Enchantment, the adept specifies the spell characteristic to be affected. Only Range, Duration, Base Chance, or (where appropriate) Damage, may be affected by this spell.",
*/ 
// para END

/* para
		'_' : "A spell may never have a characteristic enhanced by Ranks greater than its own rank by the use of this spell (e.g. a Rank 6 spell that is cast within a Rank 8 Spell of Enhancing Enchantment will only gain the effects of 6 extra ranks in the affected characteristic).",
*/ 
// para END

/* para
		'_' : "Only spells that are cast are affected, not spells being released from any form of storage. The caster of the subject spell will be aware that their spell is being affected by enhancement during the pulse that they are preparing (as per high or low Mana). They will not know which characteristic is being affected nor the amount of enhancement. They may not restrict the effect of the enhancement, but may reduce the spell effects in the normal manner. If an attempt is made to cast a Spell of Enhancing Enchantment on an area that has some part of it under the effects of another Spell of Enhancing Enchantment, then the second spell will fail.",
*/ 
// para END

/* para
		'_' : "Special Duration, Range, or Damage effects may be caused by the use of this spell (e.g. Duration of Lesser Enchantment at Rank 20).",
*/ 
// para END

// effects END

	},
  
	'S-8' : {
		'title' : "Levitation",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "125",
		'resist' : "Active, Passive",
		'storage' : "Investment, Ward, Potion",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @times
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
		'_' : "Causes the target of the spell to rise into the air ",
		'_' : "feet at the rate of 1 foot / pulse. The spell is limited to vertical movement and will in no way propel the target horizontally.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-9' : {
		'title' : "Enchant Armour",
		'type' : "S",
		'abbr' : "9",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Ward, Investment",
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
		'_' : "This spell adds ",
		'_' : " to the target's defense versus physical weapons. At Rank 11 and above it also permits the target's armour to absorb 1 additional point of damage. The target must be armoured.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-10' : {
		'title' : "Wizard's Eye",
		'type' : "S",
		'abbr' : "10",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Potion",
/* range @base, @inc
		'_' : "feet",
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
		'_' : "Self",
*/ 
// target END

/* effects
		'_' : "
      The Adept creates an invisible, intangible eye which they can move around within a radius equal to the spell's range. The eye originates in the same spot as the Adept and operates as would any normal eye except that it is not attached to the Adept physically. Wizard's Eyes have a TMR of 10.
      ",
*/ 
/* para
		'_' : "The eye can move through solid objects but will see only blackness while within an object. The eye can be seen with witchsight or other means of detecting invisible objects. It is possible to use the eye to target spells, but the range is determined from the Adept, not from the eye. The eye (and hence the Adept) is susceptible to magical effects if the effect can affect eyes (e.g. Flash of Light, blindness).",
*/ 
// para END

// effects END

	},
  
	'S-11' : {
		'title' : "Slowness",
		'type' : "S",
		'abbr' : "11",
		'multiple' : "300",
		'resist' : "Active, Passive",
		'storage' : "Potion, Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @base, @times
		'_' : "seconds",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target @base, @per
		'_' : "Entities",
*/ 
// target END

/* effects
		'_' : "All entities subject to this spell have their running, crawling, flying, or swimming speed halved and have the time it takes them to do anything on the Tactical Display doubled (e.g. they could only attack once every two pulses).",
*/ 
// effects END

	},
  
	'S-12' : {
		'title' : "Quickness",
		'type' : "S",
		'abbr' : "12",
		'multiple' : "300",
		'resist' : "Active, Passive",
		'storage' : "Potion, Investment, Ward",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "10 seconds x [D - 5] x [Rank]",
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
		'_' : "The spell affects ",
		'_' : " targets. The targets' Initiative Value is increased by 10, and they can perform Actions twice as often.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Greater Enchantment",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "125",
/* duration
		'_' : "Ranks 0--10 a fortnight ; Ranks 11--19 3 months ; Rank 20 permanent until dispelled",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Entity (not self)",
*/ 
// target END

/* material @base, @inc
		'_' : "ounces of black myrrh",
*/ 
// material END

/* materialcost @base, @inc
		'_' : "sp",
*/ 
// materialcost END

/* effects
		'_' : "The ritual takes 1 hour and requires that the Adept first draw a Pentacle within which both they and the subject of the ritual must remain during the entire ritual. The Adept must burn the black myrrh during the ritual. The target of this ritual will be either blessed or cursed (Adept's choice) with an increase or decrease in the target's Base Chance of doing anything or suffering any good or ill fortune by plus or minus ",
		'_' : ". All Strike Chances, Resistance Checks, etc. directly affecting the target will continue to be altered in this manner until the effects of the ritual wear off. If the ritual is used to curse, the curse is minor. This ritual cannot be performed on self.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'Q-2' : {
		'title' : "Creating Crystal of Vision",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "200",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept can create a crystal that acts as a viewing crystal. They perform the ritual over an available piece of crystal (the bigger the crystal, the better the image will ultimately be) in their possession. The Adept must burn 1 ounce of ambergris during the ritual at a cost of 1,000 Silver Pennies. The resulting crystal may be used once per day for ",
		'_' : " minutes (GMs should carefully time consultations).
      ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "They may then view visions (usually precognitive in nature) concocted by the GM. At Rank 6 and above, they may use the crystal to spy into an area to see what is going on there. The maximum distance from the character to the area being spied into is ",
		'_' : "miles. To do so, the Adept must remain in the same place and take no other action.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

/* para
		'_' : "If a crystal ball is used to look at a location then the ball will only look at the location specified. It can not then be commanded to move around. It will enable the observation of events in that location for its duration and will then clear. Once started it will continue to look at that location for its entire duration. If the user cannot form a clear mental image for the ball to focus on, or command it to focus on an unambiguously defined point in space, then it is the GM's discretion as to what the ball will show. These are mystical devices, not telescopes or x-ray machines. It is not possible to use detection talents (such as Detect Aura) through a crystal of vision.",
*/ 
// para END

// effects END

	},
  
	'Q-3' : {
		'title' : "Creating Sleep Dust",
		'type' : "Q",
		'abbr' : "3",
		'multiple' : "250",
		'casttime' : "3 hours",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept must spend 3 hours preparing and implementing this ritual and must expend ",
		'_' : " sp to purchase the necessary ingredients prior to making the attempt. If the attempt fails, the ingredients are ruined and may not be reused or resold. If the ritual succeeds, one ounce (a single dose) of sleep dust results.
      ",
*/ 
/* rk @base, @dec
*/ 
// rk END

/* para
		'_' : "When thrown in the face of one target it has the effect of an instant Spell of Enchanted Sleep of the same Rank as the sleep dust. The sleep dust will only remain fresh for three weeks after manufacture.",
*/ 
// para END

/* para
		'_' : "The effects of sleep dust can be passively resisted by the victim, but with a reduction of 20 to their Magic Resistance.",
*/ 
// para END

// effects END

	},
  
	'Q-4' : {
		'title' : "Manufacturing Poison Dust",
		'type' : "Q",
		'abbr' : "4",
		'multiple' : "250",
		'casttime' : "3 hours",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "This ritual works in the same manner as Q-3 and employs the same numbers for all purposes. However, instead of causing the victim to fall asleep, it inflicts ",
		'_' : " damage due to poisoning, on individuals who fail to resist. Like sleep dust, poison dust must be thrown in the face of the target.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	},
  
};
  

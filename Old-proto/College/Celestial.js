
// == Dq -  College Celestial ==
     
dq = {
CE : {
		'title' : "Celestial Magics",
		'version' : "1.3",
		'abbr' : "CE",
		'requiredMA' : "14",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "Adepts of the College of Celestial Magics may not practise their arts in an area where their element is not present.",
*/ 
// para END

/* para
		'_' : "Note also that certain spells of this college may only be learnt by specific divisions (as listed after the Spell Number).",
*/ 
// para END

// subsection END

/* subsection @title
*/ 
/* para
		'_' : "The Base Chance of performing any talent, spell, or ritual of the College of Celestial Magics is modified by the following numbers, based on the division to which the adept belongs.",
*/ 
// para END

// subsection END

/* subsection @title
*/ 
/* para
		'_' : "An Adept of Celestial Magics is affected greatly by the lighting conditions in their vicinity. The bonuses and penalties gained in this section apply only to non-magical forms of Light and Dark. Magical forms of the elements may at best neutralise any penalties suffered due to the natural elements. For the purposes of these modifiers the vicinity is deemed to be any bounded area around the Adept (such as a room); or, if the Adept is in the open, the area within 30' of the Adept.",
*/ 
// para END

/* para
		'_' : "Shadow Weavers must be within a shadow that has a defined edge within the vicinity (the shadow must be large enough to contain the Adept, and can not be generated from the Adept's possessions), and Star Mages must be in direct light from point sources (eg; casting a shadow), otherwise the lighting condition modifier is -25%.",
*/ 
// para END

/* para
		'_' : "The lighting modifiers are in the Celestial Lighting Modifiers table.",
*/ 
// para END

Tables : {
	"Celestial Lighting Modifiers" : {
		'title' : "Celestial Lighting Modifiers",
		'cols' : "8",
/* row
*/ 
/* head
		'_' : "Light",
*/ 
// head END

/* head
		'_' : "D'ness",
*/ 
// head END

/* head
		'_' : "Solar",
*/ 
// head END

/* head
		'_' : "Dark",
*/ 
// head END

/* head
		'_' : "Shadow",
*/ 
// head END

/* head
		'_' : "Star",
*/ 
// head END

/* head
		'_' : "Natural Lighting",
*/ 
// head END

/* head
		'_' : "Artificial Lighting",
*/ 
// head END

// row END

/* row
*/ 
/* cell
		'_' : "0%",
*/ 
// cell END

/* cell
		'_' : "100%",
*/ 
// cell END

/* cell
		'_' : "-",
*/ 
// cell END

/* cell
		'_' : "25",
*/ 
// cell END

/* cell
		'_' : "-",
*/ 
// cell END

/* cell
		'_' : "-",
*/ 
// cell END

/* cell
*/ 
// cell END

/* cell
		'_' : "Magical Effect - no vision works",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "1%",
*/ 
// cell END

/* cell
		'_' : "99%",
*/ 
// cell END

/* cell
		'_' : "-25",
*/ 
// cell END

/* cell
		'_' : "25",
*/ 
// cell END

/* cell
		'_' : "-10",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "Midnight in a storm Pitch Blackness",
*/ 
// cell END

/* cell
		'_' : "Underground, no lights",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "5%",
*/ 
// cell END

/* cell
		'_' : "95%",
*/ 
// cell END

/* cell
		'_' : "-20",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "Overcast night",
*/ 
// cell END

/* cell
		'_' : "Single Candle Underground",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "10%",
*/ 
// cell END

/* cell
		'_' : "90%",
*/ 
// cell END

/* cell
		'_' : "-20",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "25",
*/ 
// cell END

/* cell
		'_' : "New Moon, partially cloudy night",
*/ 
// cell END

/* cell
		'_' : "1 Torch Underground, Windowless room in day",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "20%",
*/ 
// cell END

/* cell
		'_' : "80%",
*/ 
// cell END

/* cell
		'_' : "-15",
*/ 
// cell END

/* cell
		'_' : "10",
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
		'_' : "Night with crescent Moon + stars",
*/ 
// cell END

/* cell
		'_' : "1 Lantern Underground",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "30%",
*/ 
// cell END

/* cell
		'_' : "70%",
*/ 
// cell END

/* cell
		'_' : "-10",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "25",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "Night in a town",
*/ 
// cell END

/* cell
		'_' : "Campfire at night; Shuttered room in day",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "40%",
*/ 
// cell END

/* cell
		'_' : "60%",
*/ 
// cell END

/* cell
		'_' : "-5",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "Night of Full Moon",
*/ 
// cell END

/* cell
		'_' : "Torch-lit Underground",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "50%",
*/ 
// cell END

/* cell
		'_' : "50%",
*/ 
// cell END

/* cell
		'_' : "0",
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
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "Twilight, Major Storm",
*/ 
// cell END

/* cell
		'_' : "Inside on overcast day",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "60%",
*/ 
// cell END

/* cell
		'_' : "40%",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "-5",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "Bright day in a forest, Solid rain",
*/ 
// cell END

/* cell
		'_' : "Lamp-lit Interior",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "70%",
*/ 
// cell END

/* cell
		'_' : "30%",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "-10",
*/ 
// cell END

/* cell
		'_' : "0",
*/ 
// cell END

/* cell
		'_' : "-5",
*/ 
// cell END

/* cell
		'_' : "Overcast; Mist, Light rain",
*/ 
// cell END

/* cell
		'_' : "Brightly lit Underground",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "80%",
*/ 
// cell END

/* cell
		'_' : "20%",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "-15",
*/ 
// cell END

/* cell
		'_' : "-5",
*/ 
// cell END

/* cell
		'_' : "-10",
*/ 
// cell END

/* cell
		'_' : "Autumn Morning, Light cloud",
*/ 
// cell END

/* cell
		'_' : "Brightly lit Interior",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "90%",
*/ 
// cell END

/* cell
		'_' : "10%",
*/ 
// cell END

/* cell
		'_' : "15",
*/ 
// cell END

/* cell
		'_' : "-20",
*/ 
// cell END

/* cell
		'_' : "-10",
*/ 
// cell END

/* cell
		'_' : "-15",
*/ 
// cell END

/* cell
		'_' : "Bright sunny afternoon",
*/ 
// cell END

/* cell
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "95%",
*/ 
// cell END

/* cell
		'_' : "5%",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

/* cell
		'_' : "-20",
*/ 
// cell END

/* cell
		'_' : "-15",
*/ 
// cell END

/* cell
		'_' : "-20",
*/ 
// cell END

/* cell
		'_' : "Noon",
*/ 
// cell END

/* cell
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "99%",
*/ 
// cell END

/* cell
		'_' : "1%",
*/ 
// cell END

/* cell
		'_' : "25",
*/ 
// cell END

/* cell
		'_' : "-25",
*/ 
// cell END

/* cell
		'_' : "-20",
*/ 
// cell END

/* cell
		'_' : "-25",
*/ 
// cell END

/* cell
		'_' : "Noon in a desert",
*/ 
// cell END

/* cell
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "100%",
*/ 
// cell END

/* cell
		'_' : "0%",
*/ 
// cell END

/* cell
		'_' : "25",
*/ 
// cell END

/* cell
		'_' : "-",
*/ 
// cell END

/* cell
		'_' : "-",
*/ 
// cell END

/* cell
		'_' : "-",
*/ 
// cell END

/* cell
*/ 
// cell END

/* cell
		'_' : "Magical Effect - no vision works",
*/ 
// cell END

// row END

/* description
*/ 
/* item @title
		'_' : "Adept cannot cast under these conditions.",
*/ 
// item END

// description END

	},
},
// subsection END

	'T-1' : {
		'type' : "T",
		'title' : "Speak to Creatures of Light/Darkness",
		'abbr' : "1",
		'multiple' : "50",
		'resist' : "None",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* effects
		'_' : "This talent allows the adept to communicate in a limited fashion with non-sentient creatures. A Solar Mage or Star mage may communicate with those creatures who are light aspected, whereas a Shadow Weaver or Dark Mage may communicate with those creatures who are dark aspected. The talent is limited to a range of ",
		'_' : " feet, and the communication is equivalent to a language skill of ",
		'_' : ". The communication is a combination of spoken and sign language. If either vision or sound is not possible then the talent operates at half its actual Rank (round down). Moreover, if neither of these senses are available then the talent cannot function at all.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Night Vision",
		'abbr' : "2",
		'multiple' : "100",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Always active",
*/ 
// duration END

/* effects
		'_' : "This talent allows the adept to see in the dark with vision similar to that of a cat. Everything will appear monochromatic (i.e. shades of grey) and it is difficult to accurately estimate distance. The higher the Rank, the less of a problem this will be. Because the vision is monochromatic it cannot be used to do a Detect Aura. Note that some amount of light must be present before any sort of vision is possible.",
*/ 
// effects END

	},
  
	'T-3' : {
		'type' : "T",
		'title' : "Detect Aura",
		'abbr' : "3",
		'multiple' : "75",
		'resist' : "Active",
/* range
		'_' : "Special",
*/ 
// range END

/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The effects of this talent are described in Detect Aura.",
*/ 
// effects END

	},
  
	'G-1' : {
		'title' : "Blending",
		'type' : "G",
		'abbr' : "1",
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
      Once this spell is cast, the target must remain still in order for it to have effect. While remaining still the target is not able to be seen by non-magical means (i.e. as for invisibility). If the target moves, the spell ceases to work. However, if the target becomes still again during the duration of the spell, it will resume its effect. The duration of the spell refers to the time since casting, not the time that the spell is actually in effect (i.e. while the target is still).
      ",
*/ 
/* para
		'_' : "Keeping still will require (as a minimum) a 4 x WP check every hour. The target may be required to make additional willpower checks at the GM's discretion.",
*/ 
// para END

/* para
		'_' : "The spell only has effect while the target is ``still''. This means that the target is unable to move any of its external surfaces, with limited exceptions. Moving an external surface encompasses such actions as moving a limb, or opening and closing the mouth. Blinking and normal bodily movement caused by normal breathing will not constitute moving for the purposes of this spell. The following actions will automatically cause the spell to cease working: talking, spell casting, triggering (subject to any revision of the Investment ritual) readying a weapon, altering facing in a hex, moving from the hex, using a silent language, or indeed any Action other than a Pass action (and Pass actions being restricted as outlined). Note that it is not relevant if an observer would see the movement for the spell to cease working (e.g. moving hands behind back, or talking behind hand will both cause the spell to cease having an effect).",
*/ 
// para END

// effects END

	},
  
	'G-2' : {
		'title' : "Light",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "75",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "15 minutes x [D - 5] x [Rank]",
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
		'_' : "The Adept creates a volume in which non-magical darkness is partially suppressed. The volume will be ",
		'_' : " cubic feet, and may be in any one contiguous area the Adept desires, provided that no dimension is smaller than one foot. The entire volume must be visible and within range at time of casting, and may not be moved. For visibility purposes, the Spell will increase Lighting levels within the volume to ",
		'_' : ". Rank 20 Light may not be seen through. It will not aid in providing bonuses for casting purposes, though it will neutralise penalties due to natural darkness, to a maximum of ",
		'_' : ". The volume counts as direct light for Star & Shadow Mages. If the lighting conditions are higher than that provided by the spell, no effect will be apparent. Note that because darkness is being suppressed, no light is generated, so any area outside the volume will not be lit. This spell can engender silhouettes, though not create shadows. If it is not possible to see into a lit volume, then objects within the volume are not visible. Any of this volume may be overridden by a higher ranked Spell of Darkness, or neutralised (back to original conditions) by an equal rank.",
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
  
	'G-3' : {
		'title' : "Darkness",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "75",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "15 minutes x [D - 5] x [Rank]",
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
		'title' : "Shadow Form / Coruscade",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Investment, Ward, Potion",
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
		'_' : "The target of this spell is enveloped in a confusing pattern of shadows (for Dark and Shadow) or coruscating pattern of motes of light (Solar and Star). Any attempt to physically hit the target with Melee or Ranged attacks will have ",
		'_' : " subtracted from the Strike Chance. In Close combat ",
		'_' : " is subtracted. Any attack made without using the sense of sight (either normal, or for that particular attack) will not be affected by this spell (e.g. a blind entity, a trample attack). In almost all circumstances it is quite apparent when an entity is under the effect of this spell. No form of magical vision will aid in avoiding the Strike Chance reduction produced as a result of this spell.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-5' : {
		'title' : "Wall of Starlight",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "150",
		'resist' : "Passive",
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
		'_' : "
      Creates a 10' high, 1' thick, 20' long wall of light, or a 10' high, l' thick, 5' internal radius ring of light, or a 15' high, 5' diameter pillar of light.
      ",
		'_' : "
      (e.g. An Adept casts a wall 1' off the ground, attached to a door. As soon as the door is opened the wall is dissipated. If, however, the adept had cast it so that it overlapped the door frame, and it projected slightly above the top of the door, then it would not have been dissipated because no entire cross-section of the anchoring edge has been removed. In this case somebody with a sharp implement (and quite a bit of patience) could scratch away at the stone wall until they had created a groove through the entire cross-section of the Wall of Starlight in order to make it dissipate.)
      ",
*/ 
/* para
		'_' : "The adept may increase any dimension by ",
		'_' : " feet. The wall cannot be cast so as to include any entity within it, other than the Adept. Any entity who is dark aspected must passively resist or suffer ",
		'_' : " damage each time they come within contact with the wall (not per pulse). Any entity damaged by the wall must roll on the fright table. The wall created banishes darkness from within its bounds in the same manner as a Spell of Light of the same Rank. The entirety of one edge must be affixed to a surface. This means that a wall can be created with a smaller dimension than would otherwise be possible. For example, casting a wall of light on a stepping stone that is 3' square will result in a wall which is only 3' long. Any edge may be affixed but, for the purposes of this spell, this does not include either face. For example, a wall could not be placed flat on a large open surface. The surface or surfaces that the Wall of Light is affixed to do not need to be flat, but the length of the wall is measured from the deepest depression on the surface that the wall fills. For example, a circularly concave wall of 5' radius, with a rank 0 wall affixed to it will end in a flit edge 15' beyond the end of the curvature. The entire anchoring edge must be visible to the Adept. The wall itself cannot be moved. Should an entire cross-section of the last remaining anchoring edge be removed then the wall will immediately dissipate.",
*/ 
/* rk
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// para END

/* para
		'_' : "Note that this spell will not be affected by a Spell of Darkness except to reduce its lighting effect.",
*/ 
// para END

/* para
		'_' : "Solar and Star mages get a reduction to the Experience Multiple of 50 (to 100) and +5% to base chance.",
*/ 
// para END

// effects END

	},
  
	'G-6' : {
		'title' : "Wall of Darkness",
		'type' : "G",
		'abbr' : "6",
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
		'_' : "
      This spell works similarly to the Wall of Starlight Spell, except that light aspected creatures are affected by it, and it banishes light in the same manner as a Spell of Darkness of the same Rank.
      ",
*/ 
/* para
		'_' : "Shadow and Dark mages get a reduction to the Experience Multiple of 50 (to 100) and +5% to base chance.",
*/ 
// para END

// effects END

	},
  
	'G-7' : {
		'title' : "Witchsight",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "150",
		'resist' : "None",
		'storage' : "Investment, Ward, Potion",
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
		'_' : "The Adept may see objects or entities which are invisible and they appear to have a slight blue sheen around them. If the invisibility effect (excluding Walking Unseen) is of a higher Rank than the Witchsight, the object or entity may not be clearly identified or directly magically targeted. The Adept may also see in the dark as a Human does on a cloudy day, with an effective range of vision of 150 feet under the open sky, and 75 feet elsewhere.",
*/ 
// effects END

	},
  
	'G-8' : {
		'title' : "Walking Unseen",
		'type' : "G",
		'abbr' : "8",
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
		'_' : "If the target of the spell, or the target's possessions, are touched by another entity, or that entity's possessions, then the spell is broken. The target of the spell may not break it voluntarily (other than by, for example, touching another entity). Once broken the spell must be recast.",
*/ 
// para END

// effects END

	},
  
	'G-9Sola' : {
		'title' : "Resistance to Light",
		'type' : "G",
		'abbr' : "9Sola",
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
		'_' : "While under the effects of this spell, an adept gains ",
		'_' : " to the chance of resisting magical, light-based attacks. This includes Flash of Light, Wall of Starlight, Bolt of Starfire, Web of Light, Solar Flare and Whitefire. The target will also become fully protected from damage caused by non-magical light (e.g. sunburn, snow-blindness), with the exception that it will not protect Greater Undead from sunlight. In addition, it allows vision in a Rank 20 Light Spell. Only Solar Mages may learn this spell.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-9Star' : {
		'title' : "Illumination",
		'type' : "G",
		'abbr' : "9Star",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Ward",
/* range
		'_' : "15 feet",
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
		'_' : "Object or area",
*/ 
// target END

/* effects
		'_' : "
      This spell causes a 1 inch circle on any non-living surface to radiate light. The intensity of light is determined by Rank
      ",
		'_' : "
      Only Star Mages may learn this spell. It will not aid in providing bonuses for casting purposes.
    ",
*/ 
Tables : {
	"Illumination Effects" : {
		'title' : "Illumination Effects",
		Head : [ "", "Light intensity" ],
	Rows : [
		[ "0 - 5", "glow" ],
		[ "6 - 10", "candle" ],
		[ "11 - 15", "torch" ],
		[ "16 - 20", "lantern" ],
	],
	},
},
// effects END

	},
  
	'G-9Shad' : {
		'title' : "Charismatic Aura",
		'type' : "G",
		'abbr' : "9Shad",
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
		'_' : "This spell allows the adept to use shadows advantageously to influence reaction rolls. The adept can choose one of three different effects at the time of casting. These are: to appear imposing or threatening; to appear alluring or seductive; or to appear helpless and in need of protection. When used in appropriate circumstances these effects modify reaction rolls by ",
		'_' : ". For example, when dealing with an Orc Chief the first of the effects would probably be most beneficial. It is very difficult to perceive that the spell is in effect. Only Shadow Weavers may learn this spell.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-9Dark' : {
		'title' : "Strength of Darkness",
		'type' : "G",
		'abbr' : "9Dark",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Ward, Potion",
/* range
		'_' : "15 feet",
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
		'_' : "The target's Physical Strength is increased by ",
		'_' : " for the duration of the spell. This spell may only be cast by Dark Mages when they are in an area of at least 60% Darkness.",
*/ 
/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-1' : {
		'title' : "Healing",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "200",
		'resist' : "None",
		'storage' : "Investment, Potion",
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
		'_' : "Cures ",
		'_' : " points of Endurance or Fatigue. This spell will not cure specific Grievous Injuries and the extra endurance points associated with any Grievous Injury, nor will it ``cure'' tiredness fatigue (including that lost due to spell casting). However, this spell can cure as if the curing was attempted by a healer of Rank equivalent to ",
		'_' : ".",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @full
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Creating Light/Dark Sword",
		'type' : "S",
		'abbr' : "2",
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
		'_' : "The Adept may cause any sword (as listed on the weapons chart) within range to become a sword of the Adept's element (i.e. light for Solar or Star Mages, and Dark for Shadow Weavers or Dark Mages). The sword will then have its Strike Chance increased by ",
		'_' : " and its Damage increased by ",
		'_' : " whenever it is used against a creature of the opposite element (i.e. dark aspected for a Light Sword and light aspected for a Dark Sword). Light Swords sparkle with small white sparks, and dark swords appear blacker than black.",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Bolt of Starfire",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "200",
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
		'_' : "Entity, object or volume",
*/ 
// target END

/* effects
		'_' : "The Adept casts a bolt of starfire towards any target within range. The target may be a volume of air. The first entity or object that the bolt hits along its flight path suffers ",
		'_' : " damage unless the target successfully resists. If fired at figures in Close Combat the bolt will hit a random target (based on their relative sizes).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-4' : {
		'title' : "Meteorite Shower",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "200",
		'resist' : "Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Delayed effect",
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
		'_' : "The adept calls down from the heavens a meteorite shower which peppers a given area that was entirely within the Adept's range at the time of casting. The meteorite shower is targeted to hit a specific hex and takes ",
		'_' : " seconds to arrive (minimum of the end of the following pulse). Any entities within a vertical column that is 25 feet in diameter (centred on the target hex), with a height equal to the spell's range) must resist or suffer ",
		'_' : " damage. The Adept may counterspell this spell at any time prior to the meteorite shower arriving by casting the appropriate counterspell at the targeted hex. The targeted hex will have a magical aura until the meteorite shower arrives (or is counterspelled by the Adept). This spell will have no effect if it is targeted on a hex which is already a target of this spell. Note that a solid surface (such as 10' of earth) will prevent the meteorite shower from reaching its target hex.",
*/ 
/* rk @base, @dec
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-5' : {
		'title' : "Star / Shadow Wings",
		'type' : "S",
		'abbr' : "5",
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
		'_' : "Sentient Entity",
*/ 
// target END

/* effects
		'_' : "
      The target of this spell receives wings comprising of the element of the Adept (i.e. Light if a Solar or Star Mage, and Dark if a Shadow Weaver or Dark Mage). These wings will carry the target, and anything that the target can carry, at a speed of ",
		'_' : " miles per hour. (NB : 1 mph approximately 1.5' / sec = 1.5 hexes / pulse. During a take off or landing half that distance will be travelled). The wings have a wingspan of 30' and are insubstantial. If the wings come in contact with an object they will cease to work until they can once more spread unhindered (e.g. 30' of open ground is usually necessary in order to start using them). Note that normal precipitation (i.e. rain, mist, snow and hail) will not cause the wings to cease functioning. The Wings will not become invisible or unseen if the wearer does. Star Wings are clearly visible at night and barely visible during the day, and Shadow Wings are clearly visible during the day and barely visible at night. During the last 5 seconds of the duration of the wings they will automatically try to land. There is no earlier warning of the end of duration of the wings. Only sentient creatures can control the wings.
      ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "Since shadow wings are made of shadow they are clearly insubstantial and hence can be worn in confined spaces. However, for them to be able to be used, they require to be properly and fully extended, that is shaped, and will fly at full speed or not at all. It requires 1 pulse to start and 1 pulse to stop. They will only fly a humanoid character and characters of human size. That is taken to mean characters of 3 hexes or less. They will carry a character plus the character's normal encumbrance.",
*/ 
// para END

// effects END

	},
  
	'S-6' : {
		'title' : "Web of Light / Darkness",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "250",
		'resist' : "Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @conc, @base, @inc
		'_' : "minute",
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
		'_' : "A five foot wide web of the element of the Adept is projected from the finger tips to a target hex, object or entity. Any entities not aspected to the element of the web, and all objects, are ensnared by the web. The web may only ensnare a number of entities equal to the Adepts rank, so it will stop at the hex at which this limit is reached (or at maximum range). Entities ensnared in the web suffer ",
		'_' : " damage (halved if they successfully resist) each pulse that they remain in the web after the first. The damage is done at the end of each pulse. Any ensnared entity must roll 1 x Physical Strength (2 times if they successfully resisted) in order to move themselves to an adjacent hex (which may be free of the web), or to perform an action within the web. A similar check is required for any entity (regardless of aspect) attempting to remove an object from the web. If an entity receives aid in removing themselves from the web, the PS of the aiding character may be combined with their own. Five or more points damage from a single blow from a B-class weapon will destroy the entire web. Treat the web's defence as being equal to its Rank. Entities of the same aspect as the element of the web may ignore its effects, but consequently may not affect the web. They may aid other character in getting free of the web. Any dropped object will become ensnared by the web, as will any entity not aspected to the element of the web who comes into contact with it (up to the limit of the web).",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'S-7' : {
		'title' : "Fear",
		'type' : "S",
		'abbr' : "7",
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
		'_' : "The target of this spell is seized by uncontrollable fear and must roll on the Fright table. At the time of casting, the Adept may choose to modify the Fright Table roll up or down by up to ",
		'_' : ". On a double or triple effect this modification may be doubled or tripled respectively.",
*/ 
/* rk
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Increased Gravity",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "450",
		'resist' : "Active, Passive",
		'storage' : "Investment",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @conc, @base, @inc
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
		'_' : "
      The spell causes a target of the Adept's choice which is within range to suffer the effects of an increase in gravity unless they successfully resist. This increase in gravity subtracts ",
		'_' : " from the target's strength and ",
		'_' : " from the target's TMR. The target must roll under 3 x strength each pulse or become immediately prone. Once prone, a roll of 1 x modified strength is required in order to stand up. If the target's strength is reduced to less than zero, the target suffers the negative amount as damage each pulse and must roll under Willpower + current Endurance in order to remain conscious. If the target and Adept become separated by a distance greater than the range of the spell then the spell immediately ceases to work. If the target is under (or comes under) the effect of a flying spell, the following applies:
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @per
*/ 
// rk END

/* itemize
*/ 
/* item
		'_' : "If the rank of the flying spell is greater than the rank of the Increased Gravity then the target may be able to fly. However, twice the rank of the Increased Gravity is subtracted from the rank of the flying spell for purposes of determining speed and lift of the flying spell. This may make it a negative modifier which may reduce the speed to 0 or less, in which case the target may not fly but may stand.",
*/ 
// item END

/* item
		'_' : "If the rank of the flying spell is less than or equal to the rank of the Increasing Gravity, then the target may not fly. However, half the rank of the flying spell is subtracted from the rank of the Increased Gravity for purposes of determining the strength and TMR reductions.",
*/ 
// item END

// itemize END

// effects END

	},
  
	'S-9' : {
		'title' : "Whitefire",
		'type' : "S",
		'abbr' : "9",
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
		'_' : "The target of this spell must resist or be instantaneously subjected to the heat of the interior of a star, causing death. The target's body is a blackened husk, their skin needs to be regenerated and their chance of resurrection is reduced by ",
		'_' : "%. If the target's Willpower is greater than or equal to the cast chance then the target will not be affected. Protection from magical fire will not help against this spell.",
*/ 
/* rk @inc
*/ 
// rk END

// effects END

	},
  
	'S-10Sola' : {
		'title' : "Solar Flare",
		'type' : "S",
		'abbr' : "10Sola",
		'multiple' : "500",
		'resist' : "Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Delayed effect",
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
		'_' : "The Adept calls down an incandescent lance of sunlight which blasts an area of ",
		'_' : " hexes in diameter. All non-sentient flora is immediately withered and charred. Any entities within the area must resist or suffer ",
		'_' : " damage . The flare takes ",
		'_' : " seconds to arrive (minimum of 5 seconds). The flare will always arrive at the end of a pulse and during that pulse the area will be brightly illuminated (that is 99% Light). This spell may only be cast when the sun is in the sky. Only Solar Mages may learn this spell.",
*/ 
/* rk @base, @inc, @full
*/ 
// rk END

/* rk @base, @per
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'S-10Star' : {
		'title' : "Failing Star",
		'type' : "S",
		'abbr' : "10Star",
		'multiple' : "500",
		'resist' : "Passive",
		'storage' : "Investment, Ward, Magical Trap",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Delayed effect",
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
		'_' : "The Adept calls from the sky a meteor which crashes into a given area that was within the Adept's range at the time of casting. The meteor is targeted to hit a specific hex and takes ",
		'_' : " seconds to arrive. The meteor will always arrive at the end of the pulse and will be preceded during that pulse by a high-pitched whistle in the general area. Any entities within the target hex suffer ",
		'_' : " damage. Entities within adjacent hexes suffer ",
		'_' : " damage. If an entity successfully resists it suffers only half damage (round up). The Adept may counterspell this spell at any time prior to the meteor arriving by casting the appropriate counterspell at the targeted hex. The targeted hex will have a magical aura until the meteor arrives (or is counterspelled by the Adept). This spell will have no effect if it is targeted on a hex which is already a target of this spell. Only Star Mages may cast this spell.",
*/ 
/* rk @base, @dec, @min
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
  
	'S-10Dark' : {
		'title' : "Blackfire",
		'type' : "S",
		'abbr' : "10Dark",
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
		'_' : "From the Adept's fingertips erupts a column of black flames which travel to the extent of the spell's range, and is 5 feet wide. The Adept may increase the width by ",
		'_' : " feet. All entities occupying hexes through which the fire passes must resist or suffer ",
		'_' : " damage. Entities who are damaged by this spell have their base chance of infection increased by ",
		'_' : ". Any entities wholly within the area of the fire must also roll under 1 x Willpower (2 times Willpower if they successfully resisted) or suffer the effects of a roll on the fright table. Protection from magical fires will not help against this spell. Only Dark Mages may learn this spell.",
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
  
	'S-10Shad' : {
		'title' : "Shadow Walking",
		'type' : "S",
		'abbr' : "10Shad",
		'multiple' : "550",
		'resist' : "None",
		'storage' : "Ward, Potion",
/* range
		'_' : "Self",
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
		'_' : "The Adept may instantly teleport from within one shadow to another shadow. The destination must be within sight or must have been carefully memorised beforehand. The destination may be up to ",
		'_' : "miles distant. Only Shadow Weavers may cast this spell.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'Q-1' : {
		'title' : "Reading the Night Sky",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "150",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept may read something of the future by performing this ritual. The ritual may only be performed from a vantage point with a clear view of the sky (not indoors or in a hollow), and it must be a clear night. The GM rolls for success or failure. The GM provides the answers writ in the stars in the form of generalised statements. If a successful roll occurs the statements should be generally accurate. If a failure occurs then nothing is read. If a backfire occurs then the statements should be misleading.",
*/ 
// effects END

	},
  
	'Q-2' : {
		'title' : "Summoning and Binding Creatures of Light / Darkness",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "200",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The adept may summon and bind ",
		'_' : " non-sentient creature whose aspect is the same as the aspect of the division of the college to which the Adept belongs. Any creature summoned must be native to the area. If the ritual succeeds, the creature will arrive bound to the Adept. In this state the creature will try to protect and aid the adept to the utmost of its ability (but it does not automatically know what the adept wishes it to do). If the ritual backfires then the creature will arrive and immediately attack the adept. The creature will arrive after (20 - D - Rank) minutes (minimum of 0). Bound creatures will continue to serve the Adept as long as passive concentration is maintained (the Adept stays conscious and does not attempt any other spell that requires concentration). If the Adept is stunned, a ",
		'_' : " check is required to maintain concentration. If the concentration is broken the creature will immediately attack the Adept. The Adept may at any time release any of the creatures, in which case the creature concerned will immediately flee from the Adept's presence. Creatures that may be summoned using this ritual are those appropriately aspected, non-sentient beings from the following categories: 66.2 Felines; 66.4 Small Land Mammals; 67.1 Common Avians; 69.1 Lizards and Kindred (except Hydras); 69.2 Snakes; 69.3 Insects and Spiders; and 72 Creatures of Night and Shadow. Note: Weres can only be affected by this ritual while they are in their beast form.",
*/ 
/* rk @base, @per
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'R-1' : {
		'title' : "Conjuring and Controlling Light / Dark Sphere",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "450",
/* duration @conc, @base, @inc
		'_' : "minutes",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept may summon a ",
		'_' : " inches diameter sphere comprised of the element of their division of the college. Solar and Star Mages summon a Light Sphere which is as bright as the sun and coruscates with sparks of light. Dark Mages and Shadow Weavers create a Dark Sphere which is inky black and seems to suck light into it. If the ritual is successful the sphere will appear within 15' of the Adept under the Adept's control. Active concentration is required to move the sphere, which may move at up to ",
		'_' : " TMR. Once the Adept stops concentrating, or the duration of ",
		'_' : "minutes is reached, the sphere will return to its own dimension. If the Adept fails to summon the sphere, nothing happens. If a backfire results (the Cast Check is more than 30 above the Cast Chance), the sphere appears, but is not under control so will move randomly about at maximum TMR. Anything that comes into contact with a Dark Sphere must resist or be immediately sucked into oblivion. Anything that comes into contact with a Light Sphere must resist or be immediately reduced to a pile of ashes. An entity that resists simply suffers D damage and is thrown to the ground by the shock of contact. It is believed that if a Light Sphere comes in contact with a Dark Sphere a cataclysmic explosion results (however there are no known witnesses to such an event).",
*/ 
/* rk @base
*/ 
// rk END

/* rk @base, @full
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	},
  
};
  

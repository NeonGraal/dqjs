
// == Dq -  College Rune ==
     
dq = {
RU : {
		'title' : "Rune Magics",
		'version' : "1.1",
		'abbr' : "RU",
		'requiredMA' : "18",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
/* subsection @title
*/ 
/* para
		'_' : "As part of their initiation into the mysteries of this College, the Adept is required to prepare a Runewand for themselves. Usually, one or more of their teachers will participate in the endeavour as well. If the Runewand being manufactured is of exceptionally costly materials, the Adept will be required to go into debt to pay for those materials, but in most cases the material will be of some cheap, common wood, and the Adept's labour during their apprenticeship will be sufficient to cover the cost.",
*/ 
// para END

/* para
		'_' : "Runewands are of three types: Rods, Staffs, and Sceptres. All three operate in basically the same manner. However, in addition to its magical properties, a Staff may be used as a normal weapon having exactly the same characteristics as a quarterstaff. A Sceptre may also be used as a weapon having the characteristics of a ceremonial mace. A Rod may never be used as a weapon, since it is often nothing more than a switch or hollow tube, looking much like the traditional magic wand.",
*/ 
// para END

/* para
		'_' : "When a character is initiated into the College of Rune Magics, the character's player rolls D100 and consults the Runewand Table to determine the type of Runewand the Adept receives from his teachers. An Adept may later equip themselves with a different type of Runewand or create (or purchase) another Runewand of the same type to replace a previously possessed Runewand that has been damaged, destroyed, or stolen. An Adept may own any number of Runewands, but may use only one at a time.",
*/ 
// para END

/* para
		'_' : "Runewands are created by performing the Ritual of Fashioning Runewand (Q-2). Runewands are considered magical weapons for all purposes and definitions.",
*/ 
// para END

/* para
		'_' : "In order to use a Runewand manufactured by someone else, the Adept must successfully read the Runes inscribed on the Runewand, using Talent T-3. If they fail to do so, they may not use the Runewand. Even if they successfully read the Runes inscribed on a Runewand which they did not manufacture, the Adept still suffers a penalty when using the Runewand. The Base Chance for any spell or ritual performed with the aid of that Runewand is reduced by 20.",
*/ 
// para END

/* para
		'_' : "Runesticks are small sticks carved of various woods or soft materials (which do not interfere with the flow of mana) and incised with Runes appropriate to the purpose of the Runesticks. Unlike Runewands, Runesticks are not multi-purpose tools which can be used for a variety of spells or rituals. They are specifically created to work with a single spell or ritual. Exception: the Warding Rune is used in a variety of spells and rituals, and Runesticks containing this Rune may be used in any of them. Runesticks are fashioned and prepared using the Ritual of Fashioning Runesticks (Q-1) and may be manufactured of any material listed on the Runestick Chart.",
*/ 
// para END

/* para
		'_' : "An Adept may use Runesticks fashioned by someone else, but they must first successfully read the Runes incised on them. The Base Chance is reduced by 10 when an Adept attempts to perform a ritual or cast a spell with Runesticks not of their manufacture.",
*/ 
// para END

/* para
		'_' : "In some cases, the Adept may have to draw or carve a Rune into some object to be enchanted instead of using Runesticks or a Runewand to perform the magic. In order to write the Rune, the Adept may use any substance that will mark the surface of the object to be enchanted. However, some substances will work better than others at creating the desired enchantment. Any tool may be used to carve a Rune into a substance, so long as the tool is hard enough to do the job and it is not composed of Cold Iron. Exception: the Adept may use a tool containing Cold Iron if the Cold Iron is neutralised as per Magic Restrictions - Cold Iron.",
*/ 
// para END

/* para
		'_' : "Rune Mages are not expert wood carvers. The minimum size, beyond which the stick would be too small to inscribe Runes on, is 15cm x 2cm x 1cm and weighs 2oz.",
*/ 
// para END

Tables : {
	"Runesticks" : {
		'title' : "Runesticks",
		'cols' : "4",
/* row
*/ 
/* head
		'_' : "Material",
*/ 
// head END

/* head
		'_' : "Weight",
*/ 
// head END

/* head
		'_' : "Cost",
*/ 
// head END

/* head
		'_' : "Time",
*/ 
// head END

// row END

/* row
*/ 
/* cell
		'_' : "Ashwood",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "1",
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
		'_' : "Aspenwood",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Cedarwood",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Chestnut",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Elder Wood",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Elm wood",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Gilded Metal",
*/ 
// cell END

/* cell
		'_' : "2.0",
*/ 
// cell END

/* cell
		'_' : "80",
*/ 
// cell END

/* cell
		'_' : "240",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Mistletoe",
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
		'_' : "10",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Oak",
*/ 
// cell END

/* cell
		'_' : "2.0",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

/* cell
		'_' : "20",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Pinewood",
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
		'_' : "5",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Rowan",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "4",
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
		'_' : "Silvered Metal",
*/ 
// cell END

/* cell
		'_' : "2.0",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

/* cell
		'_' : "240",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Walnut",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "1",
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
		'_' : "Willow Wood",
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
		'_' : "15",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Yarrow",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Yew",
*/ 
// cell END

/* cell
		'_' : "1.0",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

/* cell
		'_' : "10",
*/ 
// cell END

// row END

/* description
*/ 
/* item @title
		'_' : "The type of material used to make the Runestick.",
*/ 
// item END

/* item @title
		'_' : "The weight in ounces of one Runestick made of this material.",
*/ 
// item END

/* item @title
		'_' : "The cost of the materials (in Silver Pennies) necessary to make one Runestick of this material, not including cost of tools.",
*/ 
// item END

/* item @title
		'_' : "The amount of time in minutes necessary to manufacture one Runestick of this type. Some spells and rituals require the use of Runesticks made of specific materials. In other cases, any Runestick on this table will do, but the modifiers in Rune Modifiers apply.",
*/ 
// item END

// description END

	},
	"Runewands" : {
		'title' : "Runewands",
		'cols' : "5",
/* row
*/ 
/* head
		'_' : "Dice",
*/ 
// head END

/* head
		'_' : "Runewand",
*/ 
// head END

/* head
		'_' : "Weight",
*/ 
// head END

/* head
		'_' : "Cost",
*/ 
// head END

/* head
		'_' : "Time",
*/ 
// head END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Oak Staff",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

/* cell
		'_' : "55",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Blackthorn Staff",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

/* cell
		'_' : "60",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Ash Staff",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

/* cell
		'_' : "60",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Willow Rod",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "55",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Cedar Rod",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "75",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Ivory Rod",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "80",
*/ 
// cell END

/* cell
		'_' : "2",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Ebony Rod",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "90",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Copper Rod",
*/ 
// cell END

/* cell
		'_' : "1",
*/ 
// cell END

/* cell
		'_' : "55",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to
*/ 
// span END

/* cell
		'_' : "Bronze Sceptre",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "90",
*/ 
// cell END

/* cell
		'_' : "3",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to, @footnote
*/ 
// span END

/* cell
		'_' : "Silver Sceptre",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "200",
*/ 
// cell END

/* cell
		'_' : "4",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to, @footnote
*/ 
// span END

/* cell
		'_' : "Gilded Sceptre",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "500",
*/ 
// cell END

/* cell
		'_' : "4",
*/ 
// cell END

// row END

/* row
*/ 
/* span @from, @to, @footnote
*/ 
// span END

/* cell
		'_' : "Truesilver Sceptre",
*/ 
// cell END

/* cell
		'_' : "5",
*/ 
// cell END

/* cell
		'_' : "900",
*/ 
// cell END

/* cell
		'_' : "4",
*/ 
// cell END

// row END

/* description
*/ 
/* item @title
		'_' : "Type of Runewand.",
*/ 
// item END

/* item @title
		'_' : "The average weight in pounds of a Runewand made of this material.",
*/ 
// item END

/* item @title
		'_' : "The cost in Silver Pennies of the materials (including incense, oils, etc.) used in the preparation of the Runewand if it is manufactured by the Adept and not purchased.",
*/ 
// item END

/* item @title
		'_' : "The amount of time in weeks required to create a Runewand of this type, given the necessary materials and tools.",
*/ 
// item END

/* item @title
		'_' : "This type of Runewand must be paid for by the Adept out of the proceeds of their first six months of adventuring or the money lenders from whom they gained the wherewithal to have the item made will send one or more debt collectors to collect.",
*/ 
// item END

// description END

	},
},
// subsection END

/* subsection @title
*/ 
/* para
		'_' : "Rune Magicians may not engage in Ritual Spell Preparation as outlined in Magic Preparation.",
*/ 
// para END

/* para
		'_' : "The Rank of an Adept in the Ritual of Fashioning Runewand and the Ritual of Fashioning Runestick do not affect the efficacy of a spell cast using the Runesticks or Runewand created via those rituals. It affects only the actual performance of the rituals of fashioning.",
*/ 
// para END

// subsection END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Made of Gilded metal",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Silvered metal",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Mistletoe",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Ashwood",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Oak",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Cedarwood",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Aspenwood",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Chestnut",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Pinewood",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Yarrow",
*/ 
// modifier END

/* modifier @mod
		'_' : "Made of Yew",
*/ 
// modifier END

// modifiers END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "A Truesilver Sceptre",
*/ 
// modifier END

/* modifier @mod
		'_' : "A Gilded Sceptre",
*/ 
// modifier END

/* modifier @mod
		'_' : "A Silver Sceptre",
*/ 
// modifier END

/* modifier @mod
		'_' : "A Copper Rod",
*/ 
// modifier END

/* modifier @mod
		'_' : "An Ebony Rod",
*/ 
// modifier END

/* modifier @mod
		'_' : "An Ivory Rod",
*/ 
// modifier END

/* modifier @mod
		'_' : "An Ash Staff",
*/ 
// modifier END

/* modifier @mod
		'_' : "A Cedar Rod",
*/ 
// modifier END

/* modifier @mod
		'_' : "A Blackthorn Staff",
*/ 
// modifier END

/* modifier @mod
		'_' : "A Bronze Sceptre",
*/ 
// modifier END

/* modifier @mod
		'_' : "An Oak Staff",
*/ 
// modifier END

/* modifier @mod
		'_' : "A Willow Rod",
*/ 
// modifier END

// modifiers END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Fresh blood from a dragon",
*/ 
// modifier END

/* modifier @mod
		'_' : "Fresh blood from a member of a character race costs 1 fatigue",
*/ 
// modifier END

/* modifier @mod
		'_' : "Ink impregnated with particles of platinum*",
*/ 
// modifier END

/* modifier @mod
		'_' : "Ink impregnated with particles of gold**",
*/ 
// modifier END

/* modifier @mod
		'_' : "Ink impregnated with particles of silver***",
*/ 
// modifier END

/* modifier @mod
		'_' : "Fresh blood from a mammalian being",
*/ 
// modifier END

/* para @title
		'_' : "*Average cost of 22 Silver Pennies for enough ink to draw one Rune (i.e. to cast one spell).",
*/ 
// para END

/* para @title
		'_' : "**Average cost of 16 Silver Pennies for enough ink to draw one Rune.",
*/ 
// para END

/* para @title
		'_' : "***Average cost of 5 Silver Pennies for enough ink to draw one Rune.",
*/ 
// para END

/* para
		'_' : "In all cases, the weight of one vial with sufficient ink to draw one Rune is 5 ounces. It normally takes one minute to draw a Rune.",
*/ 
// para END

// modifiers END

/* modifiers @group, @onlyOne
*/ 
/* modifier @mod
		'_' : "Runestick manufactured by someone other than the Adept",
*/ 
// modifier END

/* modifier @mod
		'_' : "Runewand manufactured by someone other than the Adept",
*/ 
// modifier END

// modifiers END

	'T-1' : {
		'type' : "T",
		'title' : "Read Dead Languages",
		'abbr' : "1",
		'multiple' : "150",
/* effects
		'_' : "
      All Adepts of the College of Rune Magics have a 10% chance of knowing a dead language or dialect encountered at Rank 0. There is a ",
		'_' : " chance that the Adept will be able to puzzle out the language if they do not know it. If the Adept puzzles out or knows the language (from clues such as root words in known languages), they will have rank with the language equal to half their Rank with this talent (round up) after spending ",
		'_' : " minutes mastering the nuances of the language. A dead language may be studied in this manner via written word (tomes, inscriptions, etc.), and hence the language is known only in written form. There must be sufficient text to allow the Adept to achieve the requisite Rank (players should record the languages and rank they know using this talent, and also those that they have failed to master).
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

/* para
		'_' : "An Adept may increase Rank with a dead language that they have mastered by spending ",
		'_' : " weeks practising the language (at no Experience cost) until they know it at the same Rank as their Rank with this talent. If they wish to gain Rank with a dead language which is greater than their Rank with this talent, they must follow the normal procedure to gain Rank with a language as described in Languages.",
*/ 
/* rk
*/ 
// rk END

// para END

// effects END

	},
  
	'T-2' : {
		'type' : "T",
		'title' : "Decipher Codes and Ciphers",
		'abbr' : "2",
		'multiple' : "150",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "Any Adept of this College has a ",
		'_' : "% chance of being able to break any code or cipher created by an Adept of this college using T-4 if they study it for ",
		'_' : "hours (+1 per Rank of the Adept who created the code or cipher with T-4). The Adept's chances of breaking such a cipher or code are decreased by 3 per Rank the Adept who created the code or cipher had with T-4 (Create Codes and Ciphers) of this College. The Adept must maintain concentration for the required period of time in order to attempt to break the cipher or code. If the Adept maintains concentration, a D100 role can be made by the GM to determine the Adept's success. The Adept's Rank in breaking non-magical codes and ciphers is equal to their rank in this talent.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @dec
*/ 
// rk END

// effects END

	},
  
	'T-3' : {
		'type' : "T",
		'title' : "Read Runesticks",
		'abbr' : "3",
		'multiple' : "100",
/* effects
		'_' : "Any Adept of this College has a ",
		'_' : " chance, -3 per Rank of the Runestick created with Q-1) to successfully read the Runesticks of another Adept of the College of Rune magics without assistance. If assisted by whoever created the Runesticks, there is a ",
		'_' : " chance, -3 per Rank of the Runestick created with Q-1) of detecting misinformation given in the guise of assistance. Only Runesticks which have been successfully read may be employed to cast a spell or perform a ritual of this College. Runesticks which have been ``successfully'' read, but incorrectly assessed due to false assistance, may be used, but they will automatically backfire. The GM always rolls to determine the success or failure at the moment this talent is applied. An Adept automatically reads the runes (though not necessarily correctly) when assisted by the creator of the Runes.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'T-4' : {
		'type' : "T",
		'title' : "Create Codes and Ciphers",
		'abbr' : "4",
		'multiple' : "150",
/* effects
		'_' : "An Adept of the College of Rune Magics can create a magically enhanced code or cipher which a normal character or NPC would have only a 1% chance of breaking, but which another Adept of this College would have a greater chance of breaking. The Rank of the code or cipher's creator modifies all attempts to break the code or cipher by -3 per Rank. It takes 1 hour to create a code or cipher.",
*/ 
// effects END

	},
  
	'T-5' : {
		'type' : "T",
		'title' : "Summon Wand",
		'abbr' : "5",
		'multiple' : "200",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "An Adept can summon to themselves any Runewand they have created that is within ",
		'_' : "feet. The Adept simply wills the wand to come to them (requires a Pass Action in combat) and the Runewand leaps into their hand. The Base Chance to successfully use this talent is ",
		'_' : ". Note: this talent can operate only if the path between the Adept and their Runewand is not blocked by anything through which the Runewand could not normally pass (such as a wall or person). Only the Runewand is summoned; nothing surrounding or attached to it travels with it.",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-1' : {
		'title' : "Learn Rune",
		'type' : "G",
		'abbr' : "1",
		'multiple' : "100",
		'resist' : "Active",
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
		'_' : "The Adept must point their Runewand at the object of the spell. If successful the Adept will gain sufficient information to create a Rune that may be used to represent the generic type of the object of the spell.",
*/ 
// effects END

	},
  
	'G-2' : {
		'title' : "Darkness",
		'type' : "G",
		'abbr' : "2",
		'multiple' : "75",
		'resist' : "None",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @inc, @min
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
		'_' : "
      The Adept creates a volume in which non-magical light is partially suppressed. The volume will be ",
		'_' : " cubic feet, and may be in any one contiguous area the Adept desires, provided that no dimension is smaller than one foot. The entire volume must be visible and within range at time of casting, and may not be moved.
      ",
		'_' : "
      Although infravision works off heat and elvish and dwarvish visions work in total darkness, it is still not possible to see at all at ranks 16-20. It will not aid in providing bonuses for casting purposes, though it will reduce penalties due to natural light by up to ",
		'_' : ". If the lighting conditions are lower than that provided by the spell, no effect will be apparent. Note that because light is only being suppressed, it may still pass through, and no shadows are generated. If it is possible to see through a Darkness, all beyond it is perfectly visible. This spell can engender silhouettes of lit objects against the darkness, though not create shadows. Any of this volume may be overridden by a higher ranked Spell of Light, or neutralised (back to original conditions) by an equal rank. In all cases, the darkness will emanate from the tip of the Adept's Runewand, but will last for only so long as the Runewand remains unbroken and in the Adept's possession.
    ",
*/ 
/* rk @base, @inc
*/ 
// rk END

Tables : {
	"Darkness Effect" : {
		'title' : "Darkness Effect",
		Head : [ "", "Darkness Quality" ],
	Rows : [
		[ "0 - 5", "10% light (appears as though lit on a cloudy night)" ],
		[ "6 - 10", "5% light (as though a windowless room)" ],
		[ "11 - 15", "1% light (so dark that night vision like that of a cat will take about a minute to adjust)" ],
		[ "16 - 20", "all light is banished (i.e. totally dark)" ],
	],
	},
},
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-3' : {
		'title' : "Light",
		'type' : "G",
		'abbr' : "3",
		'multiple' : "75",
		'resist' : "None",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration @inc, @min
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
		'_' : "
      One 10-foot cube (1000 cubic feet) area is illuminated. The lighted area may be any shape (even pencil thin), but must emanate from the tip of the Adept's Runewand and will last for only so long as the Runewand remains unbroken and in the Adept's possession. At Ranks 16 - 20, it is impossible to see into or whilst within the volume (unless under the effects of a Resistance to Light).
      ",
		'_' : "
      It will not aid in providing bonuses for casting purposes, though it will reduce penalties due to natural darkness by up to ",
		'_' : ".
    ",
*/ 
Tables : {
	"Light Effect" : {
		'title' : "Light Effect",
		Head : [ "", "Light Quality" ],
	Rows : [
		[ "0 - 5", "10% darkness (appears as though lit on a cloudy day)" ],
		[ "6 - 10", "5% darkness (as though lit on a sunny day)" ],
		[ "11 - 15", "1% darkness (similar to daytime in a desert)" ],
		[ "16 - 20", "all darkness is banished (i.e. totally light)" ],
	],
	},
},
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-4' : {
		'title' : "Pyrogenesis",
		'type' : "G",
		'abbr' : "4",
		'multiple' : "75",
		'resist' : "Passive",
/* range
		'_' : "Touch of Runewand",
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
		'_' : "One small flammable object or entity may be caused to burst into flame by the touch of the Adept's Runewand. Thereafter, the flames are fuelled by the object or entity. They may be extinguished normally. Note this spell can only be used to light matches and cause insects and small furry animals no larger than a mouse to burst into flames.",
*/ 
// effects END

	},
  
	'G-5' : {
		'title' : "Curse",
		'type' : "G",
		'abbr' : "5",
		'multiple' : "400",
		'resist' : "Active, Passive",
/* range
		'_' : "Touch of Runewand",
*/ 
// range END

/* duration
		'_' : "Permanent until dispelled",
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
      The Adept may curse one target (who must be touched by the Runewand) with any of the possible minor curses listed (following) that he has the necessary Rank to employ (Rank: Possible curse). The touch is automatic unless the target is actively avoiding being touched, in which case the target cannot be touched and the spell cannot take effect. The spell must be prepared normally. The effects are permanent until dispelled by anyone casting a Rune College General Knowledge Counterspell.
      ",
*/ 
Tables : {
	"Curse Effect" : {
		'title' : "Curse Effect",
		Head : [ "", "Possible Curse" ],
	Rows : [
		[ "1 - 5", "The Adept may afflict the target with hallucinations that will reduce the target's Perception by 5 in addition to any specific effects. The GM and the Adept must work out the exact nature of the hallucination at the time that the curse is made. Hallucinations should, however, be of a minor, generalised nature: seeing coloured lights in the distance, hearing sounds like the clanking of weaponry, smelling meat cooking from time to time, and so forth." ],
		[ "6 - 10", "The Adept may afflict the target with increasing physical debilitation that will decrease Physical Strength by 1 immediately, and will subtract 1 from Endurance at the end of each day until the target reaches 4 Endurance or the curse is dispelled." ],
		[ "11 - 15", "The Adept may afflict the target with total loss of any one sense (sight, smell, touch, hearing, taste). The loss of sense takes place immediately." ],
		[ "16 - 20", "The Adept may afflict the target with extreme paranoia and nightmares. The target will recover only one fatigue point per hour from taking a nap, and only 2 per hour from sleeping. In addition, the target will feel hagridden and imagine themselves pursued by phantasms. They will, unless the curse is first dispelled, eventually become more and more estranged from reality, distrustful of friends and companions, and obsessed with the idea of destroying their enemies (who they think are ``all around''). If the curse is not dispelled within D x [] days, the target will completely lose touch with reality. They will then plot to destroy their friends in the belief that they are ``out to get them'' and will exhibit other bizarre behaviour. They will be cured of the advanced stage of this affliction only by having the curse dispelled and then spending a number of days equal to the Adept' s Rank x D in rest and recuperation." ],
	],
	},
},
// effects END

	},
  
	'G-6' : {
		'title' : "Illusion",
		'type' : "G",
		'abbr' : "6",
		'multiple' : "200",
		'resist' : "Special",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Permanent until dispelled",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Runestick",
*/ 
// target END

/* effects
		'_' : "The Adept places a single Runestick carved with the Rune for this spell and a Rune representing an object or entity of their choice on the ground. The visual Illusion must be contained within ",
		'_' : " adjacent one foot cubes. After a successful cast the stick will appear to all except the Adept to be the same object or entity as the Rune incised on the Runestick. The illusion lasts until dispelled by the appropriate counterspell or the stick is moved. The image will be static and will remain even when touched.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	'G-7' : {
		'title' : "Control Entity",
		'type' : "G",
		'abbr' : "7",
		'multiple' : "500",
		'resist' : "Active, Passive",
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
		'_' : "Three Runesticks containing the binding Rune must be physically bound onto the entity to be controlled. 10% is added to the Base Chance if the Rune representing the generic type of the entity to be bound has been carved onto the Runesticks. This binding cannot be done in combat, although the target may be physically restrained while the Adept attaches the Runesticks. In some cases, the Adept may be able to induce the entity to put the Runesticks on itself voluntarily (via trickery, for example). Once the sticks are in place, the spell can be cast to determine whether or not the sticks function. The target must be visible to the caster in order for the spell to be cast. Once cast, this spell remains in effect until the sticks are no longer bound to the target. However, every Rank + 1 days after the sticks have been placed, the entity gets a further resistance check. Successful resistance means that the entity is no longer under the spell's effects and the sticks cease to function. Failure to resist means that the sticks continue to work. The Base Chance of resisting (for the rechecks only) is equal to the entity's usual passive magic resistance versus Rune College spells minus the Adept's rank in this spell. Otherwise, the target may not remove the runesticks themselves unless so commanded by the binder. Until the sticks are removed, the target will freely do the bidding of the Adept, acting in all ways as their loyal servant (even to the extent of fighting anyone trying to remove the sticks from them).",
*/ 
// effects END

	},
  
	'G-8' : {
		'title' : "Purification",
		'type' : "G",
		'abbr' : "8",
		'multiple' : "100",
		'resist' : "None",
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
		'_' : "Liquid",
*/ 
// target END

/* effects
		'_' : "The Adept may turn any aqueous substance into potable water by touching the substance with a Runestick that has had a Purification Rune incised into it. The Adept may purify ",
		'_' : "quart by volume with this spell. This spell may be used to neutralise poison in solution. Note: This spell is not intended for use in combat and will not work if the Runestick is forced into an entity's bloodstream.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'G-9' : {
		'title' : "Runelock",
		'type' : "G",
		'abbr' : "9",
		'multiple' : "200",
		'resist' : "None",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Permanent until dispelled",
*/ 
// duration END

/* basechance @base
*/ 
// basechance END

/* target
		'_' : "Portal",
*/ 
// target END

/* effects
		'_' : "
      This spell may be cast over any portal (door or window) that can normally be opened or closed and is in sight. It effectively locks the portal with an unpickable lock. The spell can be dispelled by anyone casting the Rune College General Counterspell. The portal may still be forced open by brute strength. In this case, the Physical Strength of all the figures attempting to force the portal are totalled and multiplied by the Difficulty Factor of the task. The Difficulty Factor is always a function of the Rank of the spell:
      ",
*/ 
Tables : {
	"Runelock Effects" : {
		'title' : "Runelock Effects",
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
		'_' : "In order to place a Runelock on a portal, (which takes a minute), the Adept must draw or paint the Runelock Rune on the portal. They may only then cast the spell. Note: The opening spell of the College of Ensorcelments and Enchantments will open a Runelocked portal, but will not dissipate the Runelock.",
*/ 
// para END

// effects END

	},
  
	'S-1' : {
		'title' : "Runewall Spell",
		'type' : "S",
		'abbr' : "1",
		'multiple' : "250",
		'resist' : "Passive",
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
		'_' : "The Adept places a single Runestick incised with the warding Rune on the ground and performs the spell. If the spell is successful, the stick metamorphoses into a translucent, shimmering wall of force 1 inch thick, 10 feet high, and 20 feet long that may be shaped by the Adept (and no one else) into any shape of their devising (e.g. circle, dome, etc.). The Adept may alter the height or length of the wall by ",
		'_' : " feet. The wall cannot be created touching an entity, although it may encompass them. Any entity coming into contact with the wall must resist or be thrown back (falling prone). In addition, if the Runestick used to manufacture the wall was made of Elder, anyone who fails to resist suffers ",
		'_' : ".",
*/ 
/* rk
*/ 
// rk END

/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-2' : {
		'title' : "Torment",
		'type' : "S",
		'abbr' : "2",
		'multiple' : "250",
		'resist' : "Active, Passive",
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
		'_' : "The Adept can, by pointing a Runestick inscribed with the Pain Rune at one entity, cause that entity extreme pain. Each pulse that the Adept continues to point the Runestick at the entity (requiring a pass action) it suffers 1 point of damage and for the entire duration has all its Base Chances reduced by Rank%. For Mind Mages, the reduction is reduced by ",
		'_' : "with Resist Pain). Moreover, if the Runestick is made of Yarrow, the entity suffers a further Rank% reduction to Base Chances and - 1 / pulse off TMR (while the stick is still being pointed at them).",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-3' : {
		'title' : "Creating Rune Shield",
		'type' : "S",
		'abbr' : "3",
		'multiple' : "200",
		'resist' : "None",
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
		'_' : "Runestick",
*/ 
// target END

/* effects
		'_' : "The Adept must use a Runestick inscribed with the appropriate shield Rune. Upon successful cast, the stick is transformed into the shield of whatever type the Rune incised on the Runestick indicated (except Main Gauche). This shield may then be used by anyone (no strength or MD limitations) and provides an extra 5% + Rank defence extra to the shield type. Note that this defence is as per shield rules thus only protecting from two of the front three hexes. Moreover, if the Runestick is made of Walnut, any Grievous Blow through the shield will, instead of harming the wielder, merely smashes the shield, causing it to revert to a now broken Runestick.",
*/ 
// effects END

	},
  
	'S-4' : {
		'title' : "Visitation",
		'type' : "S",
		'abbr' : "4",
		'multiple' : "300",
		'resist' : "None",
/* range @base, @inc
		'_' : "mile",
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
		'_' : "Entity",
*/ 
// target END

/* effects
		'_' : "
      The Adept must cast the Runes of Far-seeing (three matched Runesticks) on the ground before them while performing the spell. If successful, the Adept is able to send a ghost-like image of themselves instantly to any location within range that the Adept has physically occupied at least once in the past. They are present in that location in all ways except bodily (i.e. the Adept may communicate and use all their senses while the image is there, but may not be harmed by any attack). The image ``mimics'' the actual actions of the Adept, and may move no more than ",
		'_' : "feet from the spot where it materialised, which may be anywhere at the location the Adept wishes. Since the Adept's consciousness is in the image, which is non-physical, they may not cast any spells (although they may appear to should they so desire).
      ",
*/ 
/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "Thus, if the Adept desired the image to talk, the body will also speak the words wherever it is physically located. Also, if the Adept is in a location which would prevent them from moving, the image may not move either. When the visitation time has expired (or anytime prior that the Adept wished), the image quickly fades and travels back to the Adept. This image has an ``aura'' which, if detected by a Detect Aura talent, may give the compass direction at which the Adept would be located, but not the distance.",
*/ 
// para END

// effects END

	},
  
	'S-5' : {
		'title' : "Truth",
		'type' : "S",
		'abbr' : "5",
		'multiple' : "300",
		'resist' : "Passive",
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
      Prior to casting this spell the Adept must first draw a Truth Rune on the forehead (or over the brainpan) of the spell's target (which may be themselves). The spell may only be cast over one target entity of the Adept's choosing and the Adept must touch the target to cast it. If unsuccessful, a new Truth Rune must be drawn on the target before the spell can be attempted again. A successful spell that is not successfully resisted causes the target to be unable to speak a falsehood for the duration of the spell. The target must not knowingly say anything false, but may refuse to answer a question put to him.
      ",
*/ 
/* para
		'_' : "In addition, the Truth Rune enables the target to see the true nature of all things. This results in the GM modifying the target's Perception roll because the wearer of the Rune is more likely to see through deceptions (e.g. magical traps). The roll should be modified by two times the Adept's rank with this spell.",
*/ 
// para END

// effects END

	},
  
	'S-6' : {
		'title' : "Banishment",
		'type' : "S",
		'abbr' : "6",
		'multiple' : "250",
		'resist' : "Active, Passive",
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
		'_' : "Summonable",
*/ 
// target END

/* effects
		'_' : "The Adept may banish any one entity from another dimension to its own plane of existence. In order to do so the Adept must touch the target entity with their Runewand at the moment the spell is completed. If successful, the spell results in the entity immediately returning to its own dimension unless the entity successfully resists. The touch is automatic unless the target is actively avoiding being touched, in which case the target cannot be touched and the spell cannot take effect. The spell must be prepared normally. The target returns to a random spot, in an appropriate medium, on its own plane. The exact whereabouts is GM's discretion, however, entities banished at approximately the same time will appear in approximately the same area.",
*/ 
// effects END

	},
  
	'S-7' : {
		'title' : "Smite",
		'type' : "S",
		'abbr' : "7",
		'multiple' : "200",
		'resist' : "Passive",
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
		'_' : "The Adept must, at the moment the spell is cast, touch the intended target with the Runewand. If the target fails to successfully resist, it suffers ",
		'_' : " damage. The target takes half damage if it fails to resist. The damage is similar to the effect of an electric shock, so halve the damage if the target is an insulator (entities are generally not insulators). The touch is automatic unless the target is actively avoiding being touched, in which case the target cannot be touched and the spell cannot take effect. The spell must be prepared normally. If the target fails to resist then they become stunned.",
*/ 
/* rk @base
*/ 
// rk END

// effects END

	},
  
	'S-8' : {
		'title' : "Creating Runeweapon",
		'type' : "S",
		'abbr' : "8",
		'multiple' : "200",
		'resist' : "None",
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
		'_' : "Runestick",
*/ 
// target END

/* effects
		'_' : "
      The Adept must use a Runestick incised with the Death Rune and with a Rune representing the type of weapon they wish to create. The Adept holds the Runestick while casting the spell. Upon successfully completing the cast, the Runestick transforms into a magical weapon of whatever type the Rune incised on the Runestick indicated (estoc, dagger, glaive, etc.). Since the substance of the weapon is magical, the Adept can wield the weapon without suffering the penalties associated with cold iron. Further, the weapon is usable against those entities normally affected only by magical weapons, but otherwise has the same properties as a normal weapon of the same type. An entity other than the Adept using a Runeweapon has -10% on strike chance. There is never any chance of the weapon breaking. The duration of this spell is decreased to ",
		'_' : "minute if the Runestick used is of Yew.
      ",
*/ 
/* rk @base
*/ 
// rk END

/* para
		'_' : "If Runesticks of Yew are used, and at least one point of effective damage is inflicted on a target, the wound is poisoned, causing ",
		'_' : " damage per pulse for D pulses due to poison. The target can only have one poison in effect at any one time,(i.e. ) poison from different strikes is not cumulative. The normal rules for using poisoned weapons apply. The poison is considered a nature poison for purposed of antidotes.",
*/ 
/* rk @base, @per
*/ 
// rk END

// para END

// effects END

	},
  
	'Q-1' : {
		'title' : "Fashioning Runesticks",
		'type' : "Q",
		'abbr' : "1",
		'multiple' : "100",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept must use this ritual to actually carve the appropriate Rune(s) on a stick fashioned of any material listed in(the Runestick Chart). At the time the Adept fashions the Runestick, the Adept's player must announce what Runes are being cut into the stick (i.e. what spell or ritual the Runestick can be used to perform). Careful records must be kept of the number and type of Runesticks carried by a character. Whenever an Adept wishes to cast a spell or perform a ritual using the runesticks in their possession, they prepare the spell or performs the ritual normally using the runestick(s) only to cast a spell once it is prepared. Until a spell is cast, the Runestick is unaffected by the preparation. However, once a Cast Check is made, whether successful or not, the Runesticks used in that spell or ritual are used up. They retain the power necessary to keep the spell or ritual in effect for its normal duration, but are otherwise of no magical value. They can never be ``recharged'' or reused, although the materials they comprise may be refashioned (see note). Once they have been fashioned as part of this ritual, Runesticks are permanently imbued with the power of the spell or ritual represented by the Rune(s) cut into them. Only one spell or ritual may be imbued in each stick. It takes a length of time equal to that listed on the ``Time'' column of the Runestick Chart ",
		'_' : " minutes to perform this ritual. Only one stick may be produced per ritual. It costs ",
		'_' : " fatigue points to perform the ritual, and the Base Chance of successfully performing it is ",
		'_' : ", and there is no backfire.
      ",
*/ 
/* rk @dec, @min
*/ 
// rk END

/* rk @base, @dec, @per
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* para @title
		'_' : "The actual materials in a Runestick, once used in a spell, may be used to fashion new Runesticks for future use. This requires a new ritual of Fashioning Runesticks, during which the Runesticks are refashioned (carved or cast). Runesticks used in a spell or ritual that backfires are destroyed (burned up), and the materials may not be refashioned into new Runesticks or used for any purpose, magical or otherwise. Only the actual stick itself may be reused (as opposed to the ink, etc.). The Base Chance of the stick being reusable is equal to the Adept's ",
		'_' : "with this ritual. If the Cast Check is successful then the stick can be refashioned by going through the ritual again (as listed). If the Cast Check is unsuccessful then the stick in question is absolutely useless.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

/* para @title
		'_' : "If a Runestick is fashioned using this ritual, but is not fashioned successfully, then the stick becomes useless and cannot be refashioned or used again. If, however, the ritual was successful, then the Runestick can be used as intended. Once a Cast Check has been made against a Runestick, then that stick cannot be used again until it has been refashioned. If the Adept desires to refashion it, then before they begin the ritual he first finds out if the stick is reusable using the Cast Chance given above. If the stick is reusable then the Adept can proceed with the ritual.",
*/ 
// para END

// effects END

	},
  
	'Q-2' : {
		'title' : "Fashioning Runewand",
		'type' : "Q",
		'abbr' : "2",
		'multiple' : "300",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept may employ this ritual to create a Runewand out of any of the materials listed on the Runewand Table. The implement is fashioned by inscribing Runes into the material's surface, which describe its use, name, and history. Once the Runewand has been fashioned and consecrated in this ritual, it remains fully effective unless and until it is broken or otherwise destroyed. It takes from one to four weeks to perform this ritual, depending on the type of material used to fashion the runewand. The total time necessary to fashion a Runewand is decreased by 1 day for each Rank the Adept has with this ritual (minimum of 1 day to perform the ritual), and the ritual costs ",
		'_' : " Endurance. The Endurance loss will heal normally. The Adept may interrupt the ritual to eat and attend to housekeeping (maximum two hours per day) and to sleep (maximum eight hours per day), but any break of longer than 10 hours results in the ritual failing and the materials used being ruined. Any Endurance expended on this ritual is expended upon completion of the ritual, not during its course. Once the ritual is completed, the Adept determines whether or not it was successful. The Base Chance for this ritual is ",
		'_' : ". All materials used in an unsuccessful ritual (or a ritual that backfires) are destroyed or ruined. If the ritual is successful, the Adept may use the Runewand thereafter to cast spells and perform rituals that require the use of a Runewand.
      ",
*/ 
/* rk @base, @dec, @per
*/ 
// rk END

/* rk @base, @inc
*/ 
// rk END

/* para
		'_' : "In addition, the Adept may create a resivour which can store a maximum of ",
		'_' : " Fatigue Points . Fatigue is stored in a Runewand simply by touching the Runewand and willing one or more Fatigue Points to enter the Runewand. Twice the Fatigue Points stored in the Runewand are subtracted from the Adept. Once stored in the Runewand, Fatigue Points remain there indefinitely and can be used by the Adept to cast spells at any time that they are holding the Runewand while making a Cast Check. An Adept may add Fatigue to a Runewand any number of times, so long as the Runewand has the capacity remaining to store the Fatigue each time the wand is ``recharged''.",
*/ 
/* rk @base, @per
*/ 
// rk END

// para END

// effects END

	},
  
	'Q-3' : {
		'title' : "Warding with Runesticks",
		'type' : "Q",
		'abbr' : "3",
		'multiple' : "200",
/* effects
		'_' : "
      The Adept sets up a pattern of Runesticks inscribed with the Ward Rune (as fashioned by Q-1). This pattern may consist of three, five or seven sticks composed of any material listed in the Runestick chart. If three Runesticks are used, the Base Chance for this ritual is 20%. If five sticks are used, the Base Chance is 30%. If seven sticks are used, the Base Chance is 40%. All Base Chances are increased by ",
		'_' : ". This ritual takes ",
		'_' : " minutes to complete. During the ritual, the Adept must place the Runesticks containing the Runeward symbol in a roughly circular configuration around the area to be warded (the Adept must remain inside the area while the ritual is being prepared). At the end of the ritual, if it is successful, a Runeward exists that will help to protect those inside it from magic. No magical item (amulet, weapon, etc.) can be brought into the warded area, though items already inside the warded area can be taken out. The area to be warded is a sphere with a diameter, in feet, of up to 10 times the number of sticks used.
      ",
*/ 
/* rk @inc
*/ 
// rk END

/* rk @base, @dec, @min
*/ 
// rk END

/* para
		'_' : "Any magical creature or Adept attempting to enter the warded area must make a Passive Resistance check, or it will be unable to enter the area. The entity's Magic Resistance is unaffected if the ritual used only three Runesticks. A five stick ward reduces the entity's Magic Resistance by the Adept's Rank with this ritual, and reduces Magic Resistance by twice their Rank for a seven stick ward. In addition, if the Runesticks are all made of Rowan then an entity which is wholly or partially of another plane (such as demons, devils, imps, hellhounds) decreases its Magic Resistance by 3 times the Adept's Rank when it attempts to enter the warded area.",
*/ 
// para END

/* para
		'_' : "The Runeward is automatically and permanently broken if any magical entity or magic user succeeds in passing it. However, so long as it is in effect, all targeted spells cast into (not out of) the warded area have a chance of being dissipated harmlessly when striking the ward according to the number of sticks used in the ward: by 10 if it is a three stick ward; by 20 if it is a five stick ward and by 30 if it is a seven stick ward, plus twice the Adept's rank in this ritual. Backfire from this ritual results not only in the destruction of the Runesticks, but in D damage to the Adept's Endurance as well.",
*/ 
// para END

/* para
		'_' : "The same Runesticks which are used for this ritual may be used in the Ritual of Healing (Q-4) and may also be used in conjunction with the Runestick(s) necessary to the casting of some other spell of this College to create a ward as described in Ward.",
*/ 
// para END

// effects END

	},
  
	'Q-4' : {
		'title' : "Healing",
		'type' : "Q",
		'abbr' : "4",
		'multiple' : "150",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept creates a warded area by setting up a Runeward as described in Q-3. However, only the seven Runestick Runeward may be used. The Runeward is set up around the entity to be healed. The ritual lasts seven hours, at the end of which the entity to be healed is cured of all Fatigue and Endurance losses, plus any non-magical diseases, fevers, or infections from which the entity may suffer. It is possible for the ritual to backfire. If it does so, the entity being healed immediately goes to 0 Fatigue and -1 Endurance (unless the patient is already below this). The Adept must expend 10 Fatigue to employ this ritual. Any types of material listed in the Runestick Chart may be used to make Runesticks used in this ritual except for Elder and Yew. In addition, if the Runesticks used in this ritual are made of Walnut or Elm, the number of hours the ritual requires is reduced to five.",
*/ 
// effects END

	},
  
	'Q-5' : {
		'title' : "Runes of Sight",
		'type' : "Q",
		'abbr' : "5",
		'multiple' : "300",
/* effects
		'_' : "
      The Adept may gain insight into the future by casting the Runes of Sight (Runesticks which have Runes cut into them representing the cosmic balance). It takes one hour to cast these Runes and the Adept may perform no other action during that time. The performance of this ritual allows the Adept to exercise one of the following functions during its course:
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "This action is executed as a ritual, but with the same results as for the Spell of Limited Precognition of the Mind College with a Base Chance of ",
		'_' : ".",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

/* item @title
		'_' : "This action is executed as a ritual in the same manner as the Ritual of Divination (R-1) of the College of Naming Incantations. It has a Base Chance of ",
		'_' : ".",
*/ 
/* rk @base, @inc
*/ 
// rk END

// item END

// description END

/* para
		'_' : "Only one of these two options may be performed at each casting of the Ritual. It requires three sticks incised with the appropriate Runes to perform this ritual.",
*/ 
// para END

// effects END

	},
  
	'Q-6' : {
		'title' : "Sending",
		'type' : "Q",
		'abbr' : "6",
		'multiple' : "250",
		'resist' : "Passive",
/* range @base, @inc
		'_' : "miles",
*/ 
// range END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept must paint their forehead with a Sending Rune before retiring to sleep at night. They will then require a five hour period of sleep with no disturbances sufficient to wake him or the ritual will fail. The target of the spell is likewise required to be asleep for five undisturbed hours or the ritual will not work. The time asleep counts as resting for Fatigue recovery purposes. During the time asleep, the Adept will be in communication with one entity of their choice that they have seen and studied sufficiently (as per College of Ensorcelments and Enchantments Spell of Location for ``seen and studied''). Alternatively, the Adept may employ the target's Individual True Name if it is known. If the Cast Check is successful and the target fails to resist then it will answer all questions asked of it in a yes / no fashion. This ritual does not allow communication with entities on other planes of existence. The questions that are to be asked of the target must be formulated before the Adept goes to sleep. Upon completion of the five hour ritual the Adept may receive the answers to Rank x 5 questions ( times 1 if unranked).",
*/ 
// effects END

	},
  
	'R-1' : {
		'title' : "Casting the Runes",
		'type' : "R",
		'abbr' : "1",
		'multiple' : "500",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept must prepare a piece of paper or vellum on which are written the Runes of Doom. The entire ritual of preparation takes one hour. At the end of the hour, the Adept chooses which of the demons from the College of Greater Summonings will be the executor of the doom and also writes this name on the paper. The Adept's player must actually write this information down, since it will only come into play in the future. Once the ritual is prepared, the Adept then passes the sheet of paper on to the victim whose name is written on the paper. The victim must voluntarily accept the paper (though they need not know what is on it). Once they accept it, the demon named on the paper hunts them down and kills them. Even if the demon is destroyed it returns as soon as it is able and continues the hunt (see College of Greater Summonings for how demons recover from injury and ``death'' in their own dimension). Only by passing the paper on to another entity who voluntarily accepts it can the doom be transferred. If the paper is destroyed, the doom can never be lifted or transferred. If the ritual backfires, the Adept loses [D + 2] Endurance.",
*/ 
// effects END

	},
  
	'R-2' : {
		'title' : "Creeping Doom",
		'type' : "R",
		'abbr' : "2",
		'multiple' : "450",
/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      The Adept creates 13 Runesticks by carving the appropriate maledictions into human bones. They then perform a ritual over them (duration 1 hour) and bury the sticks beneath the dwelling of someone they wish to curse. It is best if the victim's name is carved in the bones as well, otherwise others in the house may become ill instead. For each month that the bones remain in or under the victim's dwelling, they must make a Resistance Check, the Base Chance for which is composed of the victim's Endurance multiplied by the Difficulty Rating of the resistance.
      ",
*/ 
Tables : {
	"Creeping Doom Effects" : {
		'title' : "Creeping Doom Effects",
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

/* spanMultiple @from, @to, @multiple
*/ 
// spanMultiple END

	},
},
/* para
		'_' : "If the victim fails to resist, they suffer a wasting disease and loses [D - 3] Endurance points for the purposes of future resistance (only). If they fail to resist for three straight months, they die.",
*/ 
// para END

/* para
		'_' : "Generally, the victim of these maledictions does not know exactly what is wrong with them. Should they discover the bones, they may remove the curse by removing the bones from the house. Other means of ending a curse do not normally suffice, although the sufferer would show immediate improvement upon leaving the house and sleeping elsewhere for a few weeks. There is no chance of this ritual backfiring.",
*/ 
// para END

// effects END

	},
  
	'R-3' : {
		'title' : "Creating Rune Portal",
		'type' : "R",
		'abbr' : "3",
		'multiple' : "400",
/* effects
		'_' : "
      The Adept must place a Runestick with the Portal Rune on it in the ground and perform a half hour ritual. Once the ritual is successfully executed, the Runestick may not be moved without destroying the portal. It becomes the terminus for a future attempt at teleportation. Once the terminus has been established, the Adept may, at any future time, use another Runestick which was carved at the same time and is a mate of the Runestick used as the terminus to travel back to the original terminus. There can only be one ``mate'' for the terminus, and it too must contain the Portal Rune and must be of the same material as the terminus Runestick. In order to teleport to the terminus, the Adept simply places the mate in or on the ground and performs the ritual. If unsuccessful, both Runesticks are destroyed. If successful, the mate of the terminus is activated and becomes a terminus too. Thereafter, anyone who touches one terminus is teleported to the other terminus and appears standing within 5 feet of that terminus (travel time is one pulse). A terminus may be used any number of times until destroyed, but may never be moved without destroying the Portal. A terminus can be destroyed by casting a Special Knowledge Counterspell of the College of Rune Magics over it. Once a terminus is destroyed, the mate of the Runestick used to form the terminus no longer functions (though this will not necessarily be known until someone tries to use the mate). If a terminus is destroyed during the pulse while an entity is in transit between the two, the entity is destroyed and its molecules dispersed over known space.
      ",
*/ 
/* para
		'_' : "The Base Chance for this ritual is ",
		'_' : ", and is decreased by 1 for every 5 miles separating the two Runesticks and increased by 15 if the Runesticks are shaped from Willow wood.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

// effects END

	},
  
	'R-4' : {
		'title' : "Binding Elements",
		'type' : "R",
		'abbr' : "4",
		'multiple' : "500",
		'casttime' : "30 minutes",
/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "The Adept may gain control of any element by using this ritual. They must possess a Runestick containing the Binding Rune and the Rune representing the element to be bound and they must touch the element with that Runestick at the conclusion of the ritual. The Adept may bind ",
		'_' : " pounds of earth, ",
		'_' : " gallons of water, ",
		'_' : " cubic feet of air, or all fire within a ",
		'_' : " foot radius. They may do anything with the element except form an elemental. This ritual may not be used over an area occupied by an elemental and cannot be used in any way to control an elemental.",
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

/* rk @base, @inc
*/ 
// rk END

// effects END

	},
  
	},
  
};
  


// == Dq -  College NonCollege ==
     
dq.NC = {
		'title' : "Non College Magics",
		'abbr' : "NC",
		'requiredMA' : "0",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
	'S-Geas' : {
		'title' : "Geas",
		'type' : "S",
		'abbr' : "Geas",
		'multiple' : "250",
		'resist' : "Special",
/* range
		'_' : "The Adept must be able to see and communicate with the target",
*/ 
// range END

/* duration
		'_' : "Until removed, fulfilled or target dies",
*/ 
// duration END

/* basechance
		'_' : "Always successful (see below)",
*/ 
// basechance END

/* target
		'_' : "Sentient entity",
*/ 
// target END

/* effects
		'_' : "
      A geas is an obligation to complete a quest, an injunction against the performance of a particular action, or a requirement to respond in the same fashion to particular stimuli.
      ",
*/ 
/* para
		'_' : "A being to be compelled must acknowledge their acceptance of the geas. Furthermore, the Adept must believe that the being deserves the geas, or the being must truly wish (not forced by physical or magical means) to have an unmerited geas placed upon them. The Adept specifies the nature of the geas in 25 words or less, and the GM will use the most liberal interpretation of that wording to the benefit of the compelled being. Rank with the geas spell does not affect the chance of casting the spell as it is always automatically successful. The Rank equals the effectiveness of the geas, expressed in percentage terms. If a geased being directly contravenes the letter of a geas, they have a chance of dying equal to the Rank of the geas. A compelled being will begin to feel weak or ill when they first take an action counter to the restriction of the geas, and will become increasingly afflicted until they once more comply with the geas. There is no limit to the Rank of a geas.",
*/ 
// para END

/* para
		'_' : "If a quest geas is fulfilled by the compelled being, they are no longer subject to that geas. The other two types of geas (for and against a given action) last indefinitely. A geas can be removed automatically by the one who placed it upon the compelled being. A geased person will not attempt to free themself from the compulsion. An Adept with Rank greater than that of the geas may try to do so. The Adept must inscribe a triangle about the compelled, and perform the ritual of geas removal for 12 consecutive hours. If the triangle is silver or True-silver, the compelled being does not suffer the penalties for ignoring the geas during the ritual.",
*/ 
// para END

/* para
		'_' : "The Adept attempting to remove the geas has a success chance equal to five times the difference between their Rank with geas and the Rank of the geas being removed. The GM rolls percentile dice: if the roll is less than or equal to the success percentage, the geas is removed. If the roll is greater than the success percentage, the Rank of the geas is increased by one.",
*/ 
// para END

/* para @title
		'_' : "A being with Rank greater than 50 with the geas spell has the power of full geas. A full geas can be placed upon a being without their consent, though it can be passively resisted. Additionally, one with the power of full geas may automatically remove (without the support of a triangle and 12 hours of ritual) a geas which is at least 5 Ranks less than their Rank with the spell.",
*/ 
// para END

// effects END

	},
  
	'S-MC' : {
		'title' : "Major Curse",
		'type' : "S",
		'abbr' : "MC",
		'multiple' : "750",
		'resist' : "Passive (unless a Death-curse)",
/* range @base, @inc
		'_' : "feet",
*/ 
// range END

/* duration
		'_' : "Until removed or target dies",
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
      An Adept's Endurance value is decreased by one whenever they inflict a major curse upon a being. Note that when casting a Death-curse this Endurance point loss is in addition to any possible Endurance point loss due to resurrection. There are several types of major curses:
      ",
*/ 
/* description
*/ 
/* item @title
		'_' : "
          The Adept may choose to torment or kill their target. If the effects of the affliction curse are intended to be deadly, the target may not die as a direct result of the curse before (24 - Rank) hours have passed. The following list of sample affliction curses is provided to give the GM a guideline as to what major curses should be allowed in their campaign.
          ",
*/ 
/* enumerate
*/ 
/* item
		'_' : "Target becomes totally blind, deaf or mute.",
*/ 
// item END

/* item
		'_' : "Target becomes senile.",
*/ 
// item END

/* item
		'_' : "Target suffers from a contagious disease (for example open running sores).",
*/ 
// item END

/* item
		'_' : "Target is transformed into a frog or other small creature.",
*/ 
// item END

/* item
		'_' : "Target becomes weakened and enfeebled and must be helped with any physical action.",
*/ 
// item END

/* item
		'_' : "Target falls into century-long sleep.",
*/ 
// item END

// enumerate END

// item END

/* item @title
		'_' : "Add ",
		'_' : " of the major curse spell to any percentile roll involving the target or the use any of their abilities. This may not be applied favourably.",
*/ 
/* rk @inc
*/ 
// rk END

// item END

/* item @title
		'_' : "A doom is a pronouncement, by the Adept, upon an event that will occur in the target's future (Example: ``You will die by the hand of a loved one.''). The statement which must be indefinite, will be true unless removed. The GM should be careful as to what to allow for dooms.",
*/ 
// item END

/* item @title
		'_' : "At the moment of their death, an Adept may automatically cast a major curse (unless backfire occurs). The being at which it is cast may not resist the curse. A death-curse must be an affliction, ill luck or doom. If a doom, it will be gasped out with the Adept's final breath.",
*/ 
// item END

/* item @title
		'_' : "Lycanthropy is considered a major curse.",
*/ 
// item END

// description END

// effects END

	},
  
	'R-Remove' : {
		'title' : "Remove Curse",
		'type' : "R",
		'abbr' : "Remove",
		'multiple' : "500",
		'resist' : "None",
		'actions' : "Inscribe symbol of power",
		'casttime' : "Minor: 6 hours; Major: 18 hours",
		'concentration' : "Standard",
/* duration
		'_' : "Immediate",
*/ 
// duration END

/* basechance @base, @inc
		'_' : "- MA of curse. Minor Curse",
*/ 
// basechance END

/* basechance @base, @inc
		'_' : "- MA of curse. Major Curse",
*/ 
// basechance END

/* target
		'_' : "A curse",
*/ 
// target END

/* effects
		'_' : "
      Every curse is rated by the Magical Aptitude (MA) of the Adept who cast it. If the curse is natural (such as Lycanthropy) it usually has an MA of 20.
      ",
*/ 
/* para
		'_' : "There are two types of curses, minor ones and major ones. A minor curse causes its victim to suffer from a non-fatal malediction. Minor curses come from various sources, for example the spells Evil Eye (G-9 of the College of Ensorcelments and Enchantments), the Damnum Minatum (G-1 of the Witchcraft College) and certain backfires. Major curses normally comes from the Major Curse spell.",
*/ 
// para END

/* para
		'_' : "When a ritual of curse removal has been completed, the GM rolls percentile dice. If the roll is less than or equal to the success percentage the curse is removed. If the roll is between one and two times the success percentage, the curse remains in effect. If the roll is equal to or greater than twice the success percentage, the MA of the curse is increased by one. This ritual does not backfire in the normal fashion.",
*/ 
// para END

/* para @title
		'_' : "The Adept must inscribe a triangle or symbol of power about the cursed being, and perform this ritual for six consecutive hours.",
*/ 
// para END

/* para @title
		'_' : "The Adept must have a Magical Aptitude greater than that of the curse. They must inscribe a triangle or symbol of power about the cursed being, and perform this ritual for eighteen consecutive hours. If the major curse is a death-curse, add only ",
		'_' : ".",
*/ 
/* rk
*/ 
// rk END

// para END

/* para @title
		'_' : "The use of triangles or symbols of power fashioned of varying amounts of precious metals causes an addition to the success percentage, per the following schedule:",
*/ 
// para END

Tables : {
	"Curse Removal Aids" : {
		'title' : "Curse Removal Aids",
		'cols' : "3",
/* row
*/ 
/* head
		'_' : "Metal",
*/ 
// head END

/* head
		'_' : "Add",
*/ 
// head END

/* head
		'_' : "Cost",
*/ 
// head END

// row END

/* row
*/ 
/* cell
		'_' : "Silver",
*/ 
// cell END

/* cell
		'_' : "+ 3",
*/ 
// cell END

/* cell
		'_' : "1,000 sp",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Gold",
*/ 
// cell END

/* cell
		'_' : "+ 7",
*/ 
// cell END

/* cell
		'_' : "10,000 sp",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Platinum",
*/ 
// cell END

/* cell
		'_' : "+ 10",
*/ 
// cell END

/* cell
		'_' : "15,000 sp",
*/ 
// cell END

// row END

/* row
*/ 
/* cell
		'_' : "Truesilver",
*/ 
// cell END

/* cell
		'_' : "+ 15",
*/ 
// cell END

/* cell
		'_' : "20,000 sp",
*/ 
// cell END

// row END

	},
},
/* para
		'_' : "The symbol necessary for this ritual is large enough for the target to sit in, and is inscribed in the ground. This symbol may be portable.",
*/ 
// para END

// effects END

	},
  
};
  

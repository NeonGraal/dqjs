
// == Dq -  College PerCollege ==
     
dq.CO = {
		'title' : "Per College Magics",
		'abbr' : "CO",
		'requiredMA' : "0",
		'xsi:noNamespaceSchemaLocation' : "../../Dq.xsd",
	'?-GC' : {
		'title' : "General Knowledge Counterspell",
		'type' : "?",
		'abbr' : "GC",
		'multiple' : "100",
		'resist' : "Passive",
		'storage' : "Investment, Potion, Ward, Magical Trap",
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
		'_' : "Entity or area (super-hex or 15' diameter)",
*/ 
// target END

/* effects
*/ 
/* para
		'_' : "The counterspell for each College is a separate spell.",
*/ 
// para END

/* para
		'_' : "Confers +",
		'_' : " Magic Resistance vs the General Knowledge of the College to all affected Entities.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

/* para
		'_' : "Area counterspells also inhibit the casting of the General Knowledge of the College with the area.",
*/ 
// para END

/* para
		'_' : "A double or triple effect may also increase the diameter to 25' or 35' respectively of the area.",
*/ 
// para END

/* para
		'_' : "Area and Entity counterspell's are different for queueing purposes. A higher Rank identical counterspell will override.",
*/ 
// para END

/* para
		'_' : "Wards can be temporarily ``defused'' by the casting of the appropriate counterspell. The area-effect counterspell(s) must cover the whole area of the ward. When the duration of the counterspell(s) ends the ward becomes active again (it does not get triggered).",
*/ 
// para END

/* para
		'_' : "An Adept may always counter the effect of their own spell by the appropriate counterspell (unless otherwise specified in the spell description). In all other cases only spells specifically so stating may be removed by any person by the appropriate counterspell. The counterspell will have no other effect. Only Namers may remove the effects of other spells, by means of the Ritual of Dissipation. Counterspells as used by practitioners of the College of Naming Incantations have some additional powers - see the college description for more details.",
*/ 
// para END

/* para
		'_' : "When an Adept attempts to remove a spell effect using a counterspell, they must direct the counterspell at the specific spell effect. If there are multiple instances of a spell effect acting on the target (for example when spell effects are queued) then the Adept can nominate which instance to counter. In the case of area effect spells, the Adept just has to place an area counterspell within the area of the spell. It need not cover the entire area of the spell. In general, this will only apply to Namers with Dissipation, but items and special abilities may be affected.",
*/ 
// para END

/* para
		'_' : "Note that counterspells are resistible when cast at an entity, so unless the entity is deliberately not resisting they must attempt to resist the spell.",
*/ 
// para END

// effects END

	},
  
	'?-SC' : {
		'title' : "Special Knowledge Counterspell",
		'type' : "?",
		'abbr' : "SC",
		'multiple' : "200",
		'resist' : "Passive",
		'storage' : "Investment, Potion, Ward, Magical Trap",
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
		'_' : "Entity or area (super-hex or 15' diameter)",
*/ 
// target END

/* effects
*/ 
/* para
		'_' : "The counterspell for each College is a separate spell.",
*/ 
// para END

/* para
		'_' : "Confers +",
		'_' : " Magic Resistance vs the Special Knowledge of the College to all affected Entities.",
*/ 
/* rk @base, @inc
*/ 
// rk END

// para END

/* para
		'_' : "Area counterspells also inhibit the casting of the Special Knowledge of the College with the area.",
*/ 
// para END

/* para
		'_' : "A double or triple effect may also increase the diameter to 25' or 35' respectively of the area.",
*/ 
// para END

/* para
		'_' : "Area and Entity counterspell's are different for queueing purposes. A higher Rank identical counterspell will override.",
*/ 
// para END

/* para
		'_' : "Wards can be temporarily ``defused'' by the casting of the appropriate counterspell. The area-effect counterspell(s) must cover the whole area of the ward. When the duration of the counterspell(s) ends the ward becomes active again (it does not get triggered).",
*/ 
// para END

/* para
		'_' : "An Adept may always counter the effect of their own spell by the appropriate counterspell (unless otherwise specified in the spell description). In all other cases only spells specifically so stating may be removed by any person by the appropriate counterspell. The counterspell will have no other effect. Only Namers may remove the effects of other spells, by means of the Ritual of Dissipation. Counterspells as used by practitioners of the College of Naming Incantations have some additional powers - see the college description for more details.",
*/ 
// para END

/* para
		'_' : "When an Adept attempts to remove a spell effect using a counterspell, they must direct the counterspell at the specific spell effect. If there are multiple instances of a spell effect acting on the target (for example when spell effects are queued) then the Adept can nominate which instance to counter. In the case of area effect spells, the Adept just has to place an area counterspell within the area of the spell. It need not cover the entire area of the spell. In general, this will only apply to Namers with Dissipation, but items and special abilities may be affected.",
*/ 
// para END

/* para
		'_' : "Note that counterspells are resistible when cast at an entity, so unless the entity is deliberately not resisting they must attempt to resist the spell.",
*/ 
// para END

// effects END

	},
  
	'Q-Prep' : {
		'title' : "Ritual Spell Preparation",
		'type' : "Q",
		'abbr' : "Prep",
/* effects
		'_' : "For each hour spent in preparation, the Base Chance of the spell is increased by 3 (up to a maximum of 30 if 10 full hours are spent in preparation). The spell must be cast immediately upon completing the Ritual Preparation. An Adept cannot achieve Rank with this Ritual.",
*/ 
// effects END

	},
  
	'Q-Pure' : {
		'title' : "Purification",
		'type' : "Q",
		'abbr' : "Pure",
		'multiple' : "200",
/* duration @base, @inc
		'_' : "hours",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* effects
		'_' : "
      This purification ritual takes one hour and confers the following benefits:
      ",
		'_' : "
      The additional MA does not count towards any EP reduction (e.g. ranking general spells or rituals). This ritual cannot backfire.
    ",
*/ 
/* itemize
*/ 
/* item
		'_' : " MA.",
*/ 
/* rk @base, @full
*/ 
// rk END

// item END

/* item
		'_' : " Magic Resistance.",
*/ 
/* rk @base
*/ 
// rk END

// item END

// itemize END

// effects END

	},
  
	'R-Ward' : {
		'title' : "The Ward Ritual",
		'type' : "R",
		'abbr' : "Ward",
		'multiple' : "400",
		'resist' : "None",
		'actions' : "Concentration",
		'concentration' : "Standard",
/* duration
		'_' : "Until triggered",
*/ 
// duration END

/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Volume",
*/ 
// target END

/* effects
		'_' : "
      An entity may employ Ritual Magic to set a Ward over an area which they occupy.
      ",
*/ 
/* para
		'_' : "A Ward is a spell which is activated by the entry or exit of objects or entities into the volume it occupies. Whenever an entity wants to create a Ward, they engage in one or more hours of Ritual Preparation to create the Ward. At the end of the preparation, they check to see if the Ward is set by making a Cast Check. If the Cast Check is successful, the Ward is set. If the Check is not successful, no Ward exists.",
*/ 
// para END

/* para
		'_' : "It is possible to backfire from an attempt to create a Ward. In such cases, the spell being incorporated into the Ward backfires immediately. This is rolled for on the backfire table as though a normal Cast Check had resulted in the backfire.",
*/ 
// para END

/* para
		'_' : "Once the Ward is cast, the entry or exit of any object or being in the area occupied by the Ward (determined by the range of the spell incorporated into the Ward) may trigger the Ward. The area that the Ward occupies and the range of the spell incorporated into the Ward are identical. This means that most spells (Range 15' + 15 rank) have a minimum sized ward of 30' diameter (a sphere, centred on the caster, of 15'radius). Also, note that many spells have an indefinite range and hence cannot be incorporated into a Ward. This includes spells with ranges of unlimited, self, or touch and spells that can only affect the adept. Once a ward has been triggered, it ceases to exist. It takes full effect on the entity(s) or object(s) that triggered it, but is dissipated thereafter. It takes full but normal effect on the target(s) - there is no possibility for a double or triple effect (nor for failure or backfire). Note that a Ward set up for triggering by an entity or object exiting the area cannot be a targeted spell, since the target would no longer be within range. The exiting method of triggering is still useful for area of effect spells that don't have a specific target. All Wards emanate from the exact spot occupied by the individual who cast the Ward (important for determining range). Note that there are a couple of spells that can have an effect beyond their range.",
*/ 
// para END

/* para
		'_' : "Spells that are not suitable for incorporation into a Ward are those which require concentration, or some other action by the Adept. A Ward always consists of only one spell. More than one Ward may not be set over a specific area. Any attempt to set a Ward on an area that overlaps another Ward will fail. The adept will only become aware of this if they would otherwise have been successful.",
*/ 
// para END

/* para
		'_' : "Whenever creating a Ward, the Adept must also specify under what conditions the Ward will be triggered. They may decide not to limit its effect, in which case the ward will be triggered by anyone or anything entering the area over which it is set, or they may limit it to affecting specific individuals or anything in between. Thus, an Adept could set a Ward that would only be triggered by the entry or exit of a troll. If a multi-target spell is required to hit more than one target from a Ward, then the trigger must include the number of beings. For example, a spell which affects three targets could be set up to be triggered by three trolls. The instant that the third troll entered the volume the Ward would be triggered, but prior to that any number of lone trolls could have freely moved through the Ward.",
*/ 
// para END

/* para
		'_' : "A Ward, once it is successfully set, cannot be triggered until the caster leaves the volume of the Ward. Specifics of the triggering mechanism must be something intrinsic to the object or entity (similar to Detect Aura). Hence a Ward could be set up to be triggered by a Rank 4 or higher assassin, but could not be constructed to trigger on the assassin known as Mac the Knife. In order to affect, or exclude, specific people, those people's Individual True Names may be incorporated into the Ward, with a sufficiently detailed description so as to identify the individual. If Individual True Names are incorporated then there is no possible way to determine what those names are, but a Divination would reveal the number of people specifically affected, or excluded. A Ward cannot recognise a specific object, but merely an instance of an object. For example, ``my sword'' could not be included in the triggering mechanism, but a ``magical sword with a yak-hide grip'' could be. A Ward cannot tell the time so a Ward cannot include such phrases as ``after x minutes'' or ``at midnight''. Nor does a Ward have any memory, so in cannot be set up to be triggered by the third troll to pass.",
*/ 
// para END

/* para
		'_' : "Once a Ward is set, any entity or object which could trigger the Ward and which enters the area occupied by the Ward is automatically subject to whatever spell was woven into the Ward. Only those spells known by the caster of the Ward may be woven into the Ward and they take effect exactly as if the caster of the Ward were present and casting at the spot occupied by the entity when they set the Ward. All entities or objects nearby which would normally be affected by the spell are subject to its effects when it is cast as a result of the Ward being triggered. Note that for entities or objects to be affected they must be within the volume that the Ward occupied, with the exception of those spells which can affect beyond their range. Targeted spells can only affect what is incorporated in the triggering mechanism.",
*/ 
// para END

/* para
		'_' : "Wards are dispelled in one of two ways: either by a Namer casting the appropriate Counterspell of the same College incorporated into the Ward, or by being triggered by an entity or object. The Adept who set the Ward may always counterspell their own spells, and hence they can dissipate their own wards by casting a counterspell into it. Wards exist in perpetuity until dispelled.",
*/ 
// para END

// effects END

	},
  
	'R-Invest' : {
		'title' : "The Investment Ritual",
		'type' : "R",
		'abbr' : "Invest",
		'multiple' : "300",
		'version' : "1.1",
		'casttime' : "Special",
/* basechance @base, @inc
*/ 
// basechance END

/* target
		'_' : "Object",
*/ 
// target END

/* effects
		'_' : "
      This ritual allows an Adept to store a spell in an object or scroll.
      ",
*/ 
/* description
*/ 
/* item @title
*/ 
/* para
		'_' : "The object to be invested must be in a form appropriate to the spell which it is to contain (e.g. Spell of Opening might be invested into a set of lock picks, or Spell of Enchanting Armour into a set of armour), and of a size appropriate to the rank and style of that spell. Please note that a staff engraved with the symbols of the Adept's college is always considered to be appropriate. The item must weigh at least one ounce.",
*/ 
// para END

/* para
		'_' : "An Investment Ritual may not be performed on an object which still carries charges of invested spells, or a shaped item, or anything made of cold iron.",
*/ 
// para END

/* para
		'_' : "The time taken to perform the ritual is one day per charge, unless the Adept's rank with this ritual is less than the spell rank which they choose to invest, in which case the investment ritual will take much longer (spell Rank times charges) days. As a ritual which takes an extended period of time, the rules inExtended Rituals apply.",
*/ 
// para END

/* para
		'_' : "The cost of materials used in creating an invested item is spell Rank (minimum 1) x charges x EM of spell / 2 silver pennies. These ingredients are consumed progressively during the ritual, with the last snatch of incense being burned as the success (or otherwise) of the investment is determined. The Adept may elect to spend more than this base cost to increase the chance of the success of the ritual of investment. For every 200 extra silver pennies spent on materials the base chance of success with this ritual is increased by 1%.",
*/ 
// para END

/* para
		'_' : "Alternatively, the Adept may instead opt to prepare a scroll (in a language in which they have a minimum of Rank 8 literacy). This takes one day per scroll, and costs only half the usual sum to create. A scroll may only ever hold one charge, and weighs only two ounces - however a scroll case sufficient to protect it from the elements will weigh much more.",
*/ 
// para END

/* para
		'_' : "If the Investment ritual backfires, then it is as though the spell being invested has backfired.",
*/ 
// para END

// item END

/* item @title
		'_' : "
          The Base Chance to successfully trigger an invested spell is the cast chance of the spell at the moment the adept completes the investment ritual, including all college bonuses, MA, magic, and environmental conditions. Dice roll modifiers are applied at the moment of triggering, not investing.
          ",
*/ 
/* para
		'_' : "A spell contained in an invested item functions as any pulse-cast spell, with the usual chance of double and treble effect, and of backfire.",
*/ 
// para END

/* para
		'_' : "Any sentient entity may trigger an invested item, if it is physically possible for them to do so, and if they have been taught how to trigger it. The adept who created the item, and any adept who has divinated it, know how to trigger it. Teaching someone how to trigger an item take 15 minutes.",
*/ 
// para END

/* para
		'_' : "Triggering always involves speech or a specific motion to target the item, which may be perceived by a sufficiently alert observer. An invested item always takes a full five seconds to trigger.",
*/ 
// para END

/* para
		'_' : "Triggering a prepared scroll takes a full ten seconds and may only be done by someone literate in the language in which the scroll is written. The scroll must be read aloud without interruption. No teaching is required to trigger a scroll.",
*/ 
// para END

/* para
		'_' : "Any item or scroll loses a charge when it is triggered regardless of whether or not the triggering is successful.",
*/ 
// para END

// item END

/* item @title
		'_' : "
          An invested item may be drained of all magic by a Namer casting the appropriate counterspell over the item.
          ",
*/ 
/* para
		'_' : "If an entity carries more than one hundred charges of invested spells, these will trigger randomly until under this limit.",
*/ 
// para END

// item END

// description END

// effects END

	},
  
};
  

$DQ.class('Base', {
	className: function(f) {
		if (f) return this.constructor.className + ' ' + f;
		return this.constructor.className;
	},
	addGroup: function(gh, gc, g) {
		if (!gh[g]) new gc(g);
		gh[g].add(this);
		this.group = gh[g];
	},
  toElem: function(p) {
  	var o = this;
  	if (o.fields)
	  	o.fields.each(function(f) {
			  	p.td(o.className(f)).$A(o[f]);
			 	})
  	else
  		p.td().$A(o && o.toHTML ? o.toHTML() : o);
  },
	toJSON: function() {
		var results = [];
		for (var property in this)
			if (property != 'nameHash' ) {
				var value = Object.toJSON(this[property]);
				if (value !== undefined)
					results.push(property.toJSON() + ': ' + value);
			}

		return '{' + results.join(', ') + '}';
	},
});

$DQ.class('Named', $DQ.Base, {
	initialize: function(name) {
		this.name = name;
		if (this.nameHash)
			this.nameHash[name] = this;
	},
  toHTML: function() {
    return this.name;
  },
});

$DQ.class('Group', $DQ.Named, {
	initialize: function($super, name) {
		$super(name);
		this.members = [];
	},
  toElem: function(p) {
    this.members.each(function(m){
   		m.toElem(p);
   		p = p.break();
    });
  },
  toHTML: function($super) {
    return this.members.map(Object.toHTML).join('<br>');
  },
	add: function(item) {
		if (item.heads &&
				(!this.heads || this.heads != item.heads))
				this.heads = item.heads;
		if (item.fields &&
				(!this.fields || this.fields != item.fields))
				this.fields = item.fields;
		this.members.push(item);
		return this;
	},
});

$DQ.group('Stats', DQ.stats);

$DQ.class('Stat', $DQ.Named, {
	heads: $w('Abbr Name First Rest'),
	fields: $w('abbr name epFirst epRest'),
	initialize: function($super, group, abbr, name, first, rest) {
		$super(name);
		this.addGroup(DQ.stats, $DQ.Stats, group);
		DQ.stat[abbr] = this;
		this.abbr = abbr;
		this.epFirst = first;
		this.epRest = rest;
	},
	dqKey: function() {
		return 'C-' + this.abbr;
	},
  toHTML: function() {
	  return ('#{abbr} : #{name}' +
	  	(this.epFirst ? ' (#{epFirst} / #{epRest})'	: '')).
	  	interpolate(this);
  },
});

$DQ.class('Gender', $DQ.Named, {
	nameHash: DQ.gender,
	initialize: function($super, name, size) {
		$super(name);
		this.size = size;
		this.statMods = {};
	},
  toElem: function(r) {
  	r.td().$A('Size: ', this.size, ' ', $H(this.statMods).map(function(p) {
  			return p.value.toHTML();
	  	}).join(', '));
  },
  toHTML: function() {
  	var r = [];
  	$H(this.statMods).each(function(p) {
  		r.push(p.value.toHTML());
  	});
    return 'Size: #{size} '.interpolate(this) + r.join(', ');
  },
	addStatMod: function(stat, mod) {
		this.statMods[stat] = new $DQ.StatMod(DQ.stat[stat], mod);
		return this;
	},
});

$DQ.class('StatMod', $DQ.Base, {
	initialize: function(stat, mod) {
		this.stat = stat;
		this.mod = mod;
	},
  toHTML: function() {
	  return '#{stat.abbr} : #{mod}'.interpolate(this);
  },
});

$DQ.class('Hand', $DQ.Named, {
	nameHash: DQ.hand,
	heads: $w('Description Roll'),
	fields: $w('desc roll'),
	initialize: function($super, name, roll, desc) {
		$super(name);
		this.roll = roll;
		this.desc = desc;
	},
  toHTML: function() {
	  return '#{desc} (#{roll})'.interpolate(this);
  },
});

$DQ.class('GenderMod', $DQ.Base, {
	initialize: function(gender, height, weight) {
		this.gender = gender;
		this.height = height;
		this.weight = weight;
	},
  toHTML: function() {
	  return '#{gender.name} : height #{height} weight #{weight}'.interpolate(this);
  },
});

$DQ.class('Race', $DQ.Named, {
	nameHash: DQ.race,
	initialize: function($super, name, em, size, heightTable) {
		$super(name);
		this.epModifier = em;
		this.size = size;
		this.heightTable = heightTable;
		this.traits = [];
		this.genderMods = {};
		this.statMods = {};
	},
	living: function(startAge, lifeSpan, fertility) {
		this.startAge = startAge;
		this.lifeSpan = lifeSpan;
		this.fertility = fertility;
		return this;
	},
	addTrait: function(trait) {
		this.traits.push(trait);
		return this;
	},
	addGenderMod: function(gender, height, weight) {
		this.genderMods[gender] = new $DQ.GenderMod(DQ.gender[gender], height, weight);
		return this;
	},
	addStatMod: function(stat, mod) {
		this.statMods[stat] = new $DQ.StatMod(DQ.stat[stat], mod);
		return this;
	},
  toHTML: function() {
  	var t = '#{epModifier} (#{heightTable} Size: #{size})' +
			  		' Start: #{startAge} Lifespan: #{lifeSpan} Fertility: #{fertility}%';
  	var gm = [];
  	$H(this.genderMods).each(function(p) {
  		gm.push(p.value.toHTML());
  	});
  	var sm = [];
  	$H(this.statMods).each(function(p) {
  		sm.push(p.value.toHTML());
  	});
	  return t.interpolate(this) +
	  	'<br>Gender mods - ' + gm.join(', ') +
	  	( sm ? '<br>Stat mods - ' + sm.join(', ') : '' ) +
	  	( this.traits ? '<ul><li>' + this.traits.join('</li><li>') + '</li></ul>' : '' );
  },
});

$DQ.class('HeightWeight' ,$DQ.Base, {
	fields: $w('height minWgt maxWgt avgWgt'),
	initialize: function(table, height, min, max, avg) {
		this.addGroup(DQ.heightTable, $DQ.HeightTable, table);
		this.height = height;
		this.minWgt = min;
		this.maxWgt = max;
		this.avgWgt = avg;
	},
  toHTML: function() {
	  return '#{height} : #{minWgt} - #{maxWgt} (#{avgWgt})'.interpolate(this);
  },
});

$DQ.class('HeightTable', $DQ.Named, {
	nameHash: DQ.heightTable,
	heads: $w('Height Min Max Avg'),
	initialize: function($super, name, roll, desc) {
		$super(name);
		this.heights = [];
	},
	add: function(item) {
		this.heights.push(item);
		return this;
	},
	addHeight: function(height, min, max, avg) {
		new $DQ.HeightWeight(this.name, height, min, max, avg);
		return this;
	},
  toElem: function(p) {
    this.heights.each(function(o){
   		o.toElem(p);
   		p = p.break();
    });
  },
  toHTML: function() {
	  return this.heights.map(Object.toHTML).join('<br>');
  },
});

$DQ.class('RowRange', $DQ.Base, {
	initialize: function(start, end, text) {
		this.start = start;
		this.end = end;
		this.text = text;
	},
	toElem: function(p) {
		p.td().$A(this.start +
							(this.start == this.end ? '' : ' - ' + this.end));
	  p.td().$A(this.text);
	},
  toHTML: function() {
	  return '<tr><td>' + this.start +
	  	(this.start == this.end ? '' : ' - ' + this.end) +
	  	'</td><td>' + this.text + '</td></tr>';
  },
});

$DQ.class('Table', $DQ.Named, {
	nameHash: DQ.table,
	initialize: function($super, name, heads) {
		$super(name);
		this.heads = heads
		this.rows = [];
	},
	addRange: function(start, end, text) {
		this.rows.push(new $DQ.RowRange(start, end, text));
		return this;
	},
	toElem: function(p) {
		this.rows.each(function(o){
			o.toElem(p);
			p = p.break();
		});
	},
  toHTML: function() {
	  return "<table><tr><th>#{heads[0]}</th><th>#{heads[1]}</th></tr>".interpolate(this) +
	  	this.rows.map(Object.toHTML).join('') + "</table>";
  },
});

$DQ.group('Armours', DQ.armours, {
	initialize: function($super, name, preqs) {
		$super(name);
		this.preqs = preqs;
	},
});

$DQ.class('Armour', $DQ.Named, {
	nameHash: DQ.armour,
	heads: $w('Name Weight Protection AG Stealth Cost'),
	fields: $w('name weight prot lostAG stealthMod cost'),
	initialize: function($super, group, name, weight, prot, lostAG, stealthMod, cost) {
		$super(name);
		this.addGroup(DQ.armours, $DQ.Armours, group);
		this.weight = weight;
		this.prot = prot;
		this.lostAG = lostAG;
		this.stealthMod = stealthMod;
		this.cost = cost;
	},
  toHTML: function() {
	  return ('#{name} : #{prot} W #{weight} AG #{lostAG}' +
	  	' S #{stealthMod} C #{cost}').interpolate(this);
  },
});

$DQ.class('Shield', $DQ.Named, {
	nameHash: DQ.shield,
	heads: $w('Name Weight Defense MD Cost'),
	fields: $w('name weight def lostMD cost'),
	initialize: function($super, name, weight, def, lostMD, cost) {
		$super(name);
		this.addGroup(DQ.armours, $DQ.Armours, 'Shield');
		this.weight = weight;
		this.def = def;
		this.lostMD = lostMD;
		this.cost = cost;
	},
  toHTML: function() {
	  return ('#{name} : #{def}% W #{weight} MD #{lostMD}' +
	  	' C #{cost}').interpolate(this);
  },
});

$DQ.group('Weapons', DQ.weapons);

$DQ.class('Weapon', $DQ.Named, {
	nameHash: DQ.weapon,
	heads: $w('Name Hnds Wgt PS MD BC Dmg Rng Cls Use Max Cost'),
	fields: $w('name hands weight reqPS reqMD baseChance ' +
				  		'damage range class usage maxRank cost'),
	initialize: function($super, group, name, hands, weight, reqPS, reqMD,
												baseChance, damage, range, class, usage, maxRank, cost) {
		$super(name);
		this.addGroup(DQ.weapons, $DQ.Weapons, group);
		this.hands = hands;
		this.weight = weight;
		this.reqPS = reqPS;
		this.reqMD = reqMD;
		this.baseChance = baseChance;
		this.damage = damage;
		this.range = range;
		this.class = class;
		this.usage = usage;
		this.maxRank = maxRank;
		this.cost = cost;
	},
  toHTML: function() {
	  return ('#{name} : #{hands} W #{weight} PS #{reqPS} MD #{reqMD} BC #{baseChance} ' +
	  	'D #{damage} R #{range} Cl #{class} U #{usage} mR #{maxRank} C #{cost}').interpolate(this);
  },
});

$DQ.class('Accessory', $DQ.Named, {
	nameHash: DQ.accessory,
	heads: $w('Name Num Wgt Cost Description'),
	fields: $w('name num weight cost descr'),
	initialize: function($super, name, num, weight, cost, descr) {
		$super(name);
		this.addGroup(DQ.weapons, $DQ.Weapons, 'Accessory');
		this.num = num;
		this.weight = weight;
		this.cost = cost;
		this.descr = descr;
	},
  toHTML: function() {
	  return ('#{name} : #{num} W #{weight} C #{cost} - #{descr}').interpolate(this);
  },
});

$DQ.class('WeaponCategory', $DQ.Named, {
	nameHash: DQ.weaponCategory,
	initialize: function($super, name, members) {
		$super(name);
		this.members = members.map(function(m){
			var w = DQ.weapon[m];
			return w ? w : m;
		});
	},
  toHTML: function() {
	  return this.members.map(function(m){
	  		return m.name ? m.name : m;
	  	}).join(', ');
  },
});

$DQ.class('Script', $DQ.Named, {
	nameHash: DQ.script,
	heads: $w('Description'),
	fields: $w('desc'),
	initialize: function($super, name, desc) {
		$super(name);
		this.desc = desc;
	},
  toHTML: function() {
	  return this.desc;
  },
});

$DQ.group('LangFamily', DQ.languages);

$DQ.class('Language', $DQ.Named, {
	nameHash: DQ.language,
	heads: $w('Name Max Scripts'),
	fields: $w('name maxRank scripts'),
	initialize: function($super, family, name, maxRank, scripts) {
		$super(name);
		this.addGroup(DQ.languages, $DQ.LangFamily, family);
		this.maxRank = maxRank;
		this.scripts = scripts;
	},
  toHTML: function() {
	  return this.name + ' ' + this.maxRank;
  },
});

$DQ.class('LangGroup', $DQ.Named, {
	nameHash: DQ.languageGroup,
	initialize: function($super, name, members) {
		$super(name);
		this.members = members.map(function(m){
			var w = DQ.language[m];
			return w ? w : m;
		});
	},
  toHTML: function() {
	  return this.members.map(function(m){
	  		return m.name ? m.name : m;
	  	}).join(', ');
  },
});

$DQ.SkillFuncs = {
	addAbility: function(h) {
		if (!this.Ability) this.Ability = [];
		this.Ability.push(h);
		return this;
	},
	addChance: function(h) {
		if (!this.Chance) this.Chance = [];
		this.Chance.push(h);
		return this;
	},
	skillHTML: function(p) {
		var r = [];
		if (this.Ability)
			this.Ability.each(function(a){
					r.push(Object.toJSON(a));
				});
		if (this.Chance)
			this.Chance.each(function(a){
					r.push(Object.toJSON(a));
				});
		if (this.EP)
			r.push('[' + this.EP.join(', ') + ']');
		return r;
	},
};

$DQ.group('Skills', DQ.skills, {
	toHTML: function() {
		return this.skillHTML().concat(this.members.map(Object.toHTML)).join('<br>');
	},
}, $DQ.SkillFuncs);

$DQ.class('Skill', $DQ.Named, {
	nameHash: DQ.skill,
	initialize: function($super, group, name) {
		$super(name);
		this.addGroup(DQ.skills, $DQ.Skills, group);
	},
  toHTML: function() {
	  return this.name + " " + this.skillHTML().join('<br>');
  },
}, $DQ.SkillFuncs);

$DQ.class('Char', {
	charDetails: ['Name', 'Race', 'Aspect', 'Social Status', 'College', 'Gender', 'Age',
			'Hand', 'Height', 'Weight', 'Birth Order'],
	stats: $w('PS MD AG WP MA EN FT PC PB'),
	statMultiple: function(s,m) {
		return this[s] * m;
	},
	weapBC: function(w,rk) {
		var b = this.MD + rk*4;
		var f = '';
		if (this.MD < w.reqMD) {
			b += (this.MD - w.reqMD)*5;
			f = '<sup>m</sup>';
		}
		if (Object.isNumber(w.baseChance))
			return (w.baseChance + b) + f;
		else
			return w.baseChance + "+" + b + f;
	},
	weapIV: function(w,rk) {
		return this.PC + this.AG + rk;
	},
	weapDmg: function(w,rk) {
		if (Object.isNumber(w.damage)) {
			var bd = w.name == 'Unarmed' ? 3 : 5;
			var b = Math.floor((this.PS - w.reqPS)/bd);
			var r = Math.floor(rk/4);
			var f = '';
			d = w.damage + r;
			if (this.PS < w.reqPS) {
				d += this.PS - w.reqPS;
				f = '<sup>m</sup>';
			} else if (b > r) {
				d = w.damage + b;
				f = '<sup>o</sup>';
			} else
				if (r > 0)
					f = '<sup>s</sup>';
			return (d < 0 ? "D" + d : "D+" + d) + f;
		} else
			return w.damage;
	},
	skillBC: function(c,rk) {
		var r = '';
		if (c.name) r = c.name + ': ';
		var v;
		if (c.base) {
			var js = c.base;
			this.stats.each(function(s) { js = js.replace(s, 'this.' + s); });
			js = js.replace(/x/, '*');
			try {
				v = eval(js).round();
			} catch (e) {
				v= c.base + ' + ';
			}
		}

		if (c.inc) v += (rk * c.inc)
		else v += rk;
			
		r += v + ' ';

		if (c._) r+= c._;
		return r;
	},
});

$DQ.class('CharNull', $DQ.Char, {
	initialize: function() {
		var my = this;
		this.charDetails.each(function(ln) {
				var j = ln.replace(' ', '');
				my[j] = '<I> { ' + ln + ' } </I>';
			});
		this.stats.each(function(s) { my[s] = 8 + Math.ceil(Math.random()*15); });
		this["AG Combat"] = this.AG - 3;
		this["AG Full Pack"] = this.AG - 6;
		this.weapons().each(function(w) { my[w.name] = Math.floor(Math.random()*11); });
		this.languages().each(function(l) { my[l.name] = Math.floor(Math.random()*11); });
		$w('Adventuring Major Artisan').each(function(g) {
				my.skills(g).each(function(l) { my[l.name] = Math.floor(Math.random()*11); });
			});
	},
	weapons: function() {
		var r = [];
		$H(DQ.weapon).each(function(w){if (!Object.isFunction(w.value)) r.push(w.value); });
		return r;
	},
	languages: function() {
		var r = [];
		$H(DQ.language).each(function(l){if (!Object.isFunction(l.value)) r.push(l.value); });
		return r;
	},
	skills: function(c) {
		return DQ.skills[c+' skills'].members;
	}
});

$DQ.class('CharSheet', {
	render: function(chr, pe) {
		var cs = $HT('table');
		if (!chr) chr = new $DQ.CharNull();
		this.charHead(chr, cs);
		var r = cs.tr();
		this.charDetails(chr, r.td('charDetails'));
		this.charStats(chr, r.td('charStats', {colspan: 2}));
//		r = cs.tr();
//		this.weapSkills(chr, r.td('weapSkills', {colspan: 2}));
//		this.langSkills(chr, r.td('langSkills'));
		this.mainSkills(chr, cs.tr().td('mainSkill', {colspan: 3}));
		var h = cs.toHTML('');
		pe.innerHTML = h;
	},
	charHead: function(chr, pe) {
		pe.tr().td('charHead', {colspan: 3}).$A('Character Heading');
	},
	charDetails: function(chr, pe) {
		var t = pe.$T('table', 'b');
		var my = this;
		chr.charDetails.each(function(i) {
				my.charDetail(chr, t.tr(), i);
			});
	},
	charDetail: function(chr, pe, ln) {
		var j = ln.replace(' ', '');
		pe.td('label').$A(ln);
		pe.td('char'+j).$A(chr[j]);
	},
	charStats: function(chr, pe) {
		var t = pe.$T('table', 'b');
		var my = this;
		var r = t.tr('head');
		r.td('stat').$A('Stat');
		$w('Actual x1 x2 x3 x4 x5').each(function(s) {
				r.td('val ' + s.toLowerCase()).$A(s);
			});
		chr.stats.each(function(s) {
				my.charStat(chr, t.tr(), s);
			});
		my.charStat(chr, t.tr(), 'AG Combat');
		my.charStat(chr, t.tr(), 'AG Full Pack');
		r = pe.$T('table', 'b').tr();
		this.charTMR(chr, r, 'TMR', 6);
		this.charTMR(chr, r, 'Combat', 5);
		this.charTMR(chr, r, 'Full Pack', 4);
	},
	charStat: function(chr, pe, s) {
		pe.td('stat').$A(s);
		pe.td('actual val').$A(chr[s]);
		var f = function(x) {
				pe.td('val x'+x).$A(chr.statMultiple(s,x));
			};
		$R(1, 5).each(f);
	},
	charTMR: function(chr, pe, l, v) {
		pe.td('stat', {width: "28%"}).$A(l);
		pe.td('actual val', {width: "5%"}).$A(v);
	},
	weapSkills: function(chr, pe) {
		var t = pe.$T('table', 'b');
		var my = this;
		var r = t.tr('head');
		$w('Rk Weapon IV BC Dmg Cls Use Range PS MD').each(function(s) {
				r.td(s.toLowerCase()).$A(s);
			});
		chr.weapons().each(function(w) {
				my.weapSkill(chr, t.tr('weap'), w);
			});
	},
	weapSkill: function(chr, pe, w) {
		var rk = chr[w.name];
		pe.td('rk').$A(rk);
		pe.td('weapon').$A(w.name);
		pe.td('iv').$A(chr.weapIV(w, rk));
		pe.td('bc').$A(chr.weapBC(w, rk));
		pe.td('dmg').$A(chr.weapDmg(w, rk));
		pe.td('cls').$A(w.class);
		pe.td('use').$A(w.usage);
		pe.td('range').$A(w.range);
		pe.td('ps').$A(w.reqPS);
		pe.td('md').$A(w.reqMD);
	},
	langSkills: function(chr, pe) {
		var t = pe.$T('table', 'b');
		var my = this;
		var r = t.tr('head');
		$w('Rk Language Scripts').each(function(s) {
				r.td(s.toLowerCase()).$A(s);
			});
		chr.languages().each(function(l) {
				my.langSkill(chr, t.tr('lang'), l);
			});
	},
	langSkill: function(chr, pe, l) {
		var rk = chr[l.name];
		pe.td('rk').$A(rk);
		pe.td('language').$A(l.name);
		pe.td('scripts').$A(l.scripts);
	},
	mainSkills: function(chr, pe) {
		var t = pe.$T('table', 'b');
		var my = this;
		var r = t.tr('head');
		$w('Rk Skill Details').each(function(s) {
				r.td(s.toLowerCase()).$A(s);
			});
		$w('Adventuring Major Artisan').each(function(g) {
				t.tr('group').td('', {colspan: 3}).$A(g+' Skills');
				chr.skills(g).each(function(s) {
						my.mainSkill(chr, t.tr('skl'), s);
					});
			});
	},
	mainSkill: function(chr, pe, s) {
		var rk = chr[s.name];
		pe.td('rk').$A(rk);
		pe.td('skill').$A(s.name);

		var cs = [];
		if (s.Chance)
			s.Chance.each(function(c) {
					cs.push(chr.skillBC(c, rk));
				});
		if (s.group.Chance)
			s.group.Chance.each(function(c) {
					cs.push(chr.skillBC(c, rk));
				});
		var as = [];
		if (s.Ability)
			s.Ability.each(function(a) {
					if (a.rank) {
						if (rk >= a.rank)
							as.push((a.name ? a.name + " (" + a.rank + ")" : "Rk " + a.rank) + ': ' + a._);
					}
					else
						as.push(a.name + ':' + a._);
				});
		if (s.group.Ability)
			s.group.Ability.each(function(a) {
					as.push(a.name + ': ' + a._);
				});
		pe.td('details').$A(cs.join(', '), (cs.length>0 ? $HT('br') : ''), as.join('<br>'));
	},
});

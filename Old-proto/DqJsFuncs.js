var $DQ = {
	class: function(cn, p, d1, d2, d3) {
		c = Class.create(p, d1, d2, d3);
		c.className = cn;
		$DQ[cn] = c;
	},
	group: function(gn, gh, ge, gd) {
		return $DQ.class(gn, $DQ.Group, {
			nameHash: gh
		}, ge, gd);
	},
};

DQtoHTML = function() {
	var r = '<table>';
	for (var p in this) {
		var t = typeof(this[p]);
		switch (t) {
			case "object":
				r = r + '<tr valign="top"><td>' + p + '</td><td>' + Object.toHTML(this[p]) + '</td></tr>';
			case "function":
				break;
			default:
				r = r + '<tr valign="top"><td>' + p + '</td><td><I>' + t + '</I></td></tr>';
			}
		}
	return r + '</table>';
};

DQtoElem = function(e) {
	var d = $HT('div');
	var t, heads, r;
	var va = {valign: 'top'};
	for (var p in this) {
		o = this[p];
		ty = typeof(o);
		switch (ty) {
			case "function":
				break;
			case "object":
				if (o.heads) {
					if (heads != o.heads) {
						t = d.$T('table');
						heads = o.heads;
						r = t.tr('', va);
						r.th(this.className ? this.className('tag Head') : '').$A('Tag');
						for (var i = 0, l = heads.length; i < l; ++i)
							r.th(o.fields && o.className ?
										o.className(o.fields[i] + ' Head')
										: '').$A(heads[i]);
					}
				}
			default:
				if (!t) t = d.$T('table');
				r = t.tr('', va);
				r.prefix = function(r) {
					r.td().$A("&nbsp;");
				};
				r.td(this.className ? this.className('tag') : '').$A(p);
				if (ty == "object") {
					if (o.toElem)
						o.toElem(r)
					else
						 r.td().$A(Object.toHTML(o));
				}
				else
					r.td().$T('I').$A(t);
			}
		}
	e.innerHTML = d.toHTML('');
};

function hashDQ() {
	return { toHTML: DQtoHTML, toElem: DQtoElem };
}

var DQ = {
	stats: hashDQ(),
	stat: hashDQ(),
	gender: hashDQ(),
	hand: hashDQ(),
	race: hashDQ(),
	armours: hashDQ(),
	armour: hashDQ(),
	shield: hashDQ(),
	weapons: hashDQ(),
	weapon: hashDQ(),
	accessory: hashDQ(),
	weaponCategory: hashDQ(),
	script: hashDQ(),
	table: hashDQ(),
	heightTable: hashDQ(),
	languages: hashDQ(),
	language: hashDQ(),
	languageGroup: hashDQ(),
	skills: hashDQ(),
	skill: hashDQ(),
	};

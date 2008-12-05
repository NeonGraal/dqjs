var $HTML = {};

function $HT(t, c, a) {
	if ($HTML[t])
		return new $HTML[t](c, a)
	else
		return new $HTML.TAG(t, c, a);
}

$HTML.TAG = Class.create({
	initialize: function(t, c, a) {
		this.tag = t;
		this.class = c;
		this.attr = a;
		this.children = [];
	},
	$A: function() {
		for (var i = 0, l=arguments.length; i < l; ++i) {
			var a = arguments[i];
			this.children.push(a);
			if (a && a.break)
				a.parent = this;
		}
		return this;
	},
	$T: function(t, c, a) {
		var e = $HT(t, c, a);
		this.$A(e);
		return e;
	},
	break: function() {
		$T('br');
		return this;
	},
	toHTML: function(i) {
		var h = (i ? i : '') + '<' + this.tag +
			(this.class ? ' class="' + this.class + '"' : '') +
			(this.attr ? $H(this.attr).map(function(p){
					return ' '+p.key+'="'+p.value+'"';
				}).join('') : '');
		if (this.children.length > 0)
			return h + '>\n' +
				this.children.map(function(c){
						return c ? c.toHTML ? c.toHTML(i+'  ')+'\n' : c.toString() : '';
					}).join('') +
				(i ? i : '') + '</' + this.tag + '>'
		else
				return h + '/>\n';
	},
	$Z: function() {
		this.children = [];
		return this;
	},
});

$HTML.table = Class.create($HTML.TAG, {
	initialize: function($super, c, a) {
		$super('table',c , a);
	},
	tr: function(c, a) {
		var e = new $HTML.tr(c, a);
		this.$A(e);
		return e;
	},
});

$HTML.tr = Class.create($HTML.TAG, {
	initialize: function($super, c, a) {
		$super('tr',c , a);
	},
	break: function() {
		var r = this.parent.tr();
		if (this.prefix) {
			this.prefix(r);
			r.prefix = this.prefix;
		}
		return r;
	},
	td: function(c, a) {
		return this.$T('td', c, a);
	},
	th: function(c, a) {
		return this.$T('th', c, a);
	},
});

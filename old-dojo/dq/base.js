dojo.provide("dq.base");

dojo.declare("$DQ.Base", null, {
	addGroup: function(gh, gc, g) {
		if (!gh[g]) new gc(g);
		gh[g].add(this);
		this.group = gh[g];
	},
	className: function(f) {
		if (f) return this.constructor.className + ' ' + f;
		return this.constructor.className;
	},
});

var DQ = {
	applyMods: function applyMods(base) {
			var val = base;
			if (base.mods)
				for (var i=0; i<base.mods.length; i++)
					val += val + base.mods[i].val;
			return val;
		},
	load: function load(id,html,cb) {
		var $e = $(id);
		if ($e.children().length > 0) cb();
		else $e.load(html, cb);
	},
	script: function script(script) {
			$.getScript('dq/'+script+'.js',function(d,s){
					console.log('dq/'+script+'.js loaded: '+s);
				});
		}
};
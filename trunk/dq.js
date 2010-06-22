var DQ = {
	applyMods: function applyMods(base) {
			var val = base;
			if (base.mods)
				for (var i=0; i<base.mods.length; i++)
					val += val + base.mods[i].val;
			return val;
		}
};
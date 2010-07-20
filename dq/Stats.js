$.extend(DQ, {
	Stats: ['PS', 'MD', 'AG', 'WP', 'MA', 'EN', 'FT', 'PC', 'PB'],
	statCurr: function statCurr(char,stat) {
			return DQ.applyMods(char.Stats[stat]);
		},
	statCheck: function statCheck(char,stat, mul) {
			return DQ.statCurr(char,stat) * mul;
		},
	showStat: function showStat(char,stat) {
			var r = '<TR><TD class="stat">'+stat;
			r += '</TD><TD id="my'+stat;
			r += '">'+char.Stats[stat];
			r += '</TD><TD id="curr'+stat;
			r += '">'+DQ.statCurr(char,stat);
			r += '</TD><TD>'+DQ.statCheck(char,stat,1);
			r += '</TD><TD>'+DQ.statCheck(char,stat,2);
			r += '</TD><TD>'+DQ.statCheck(char,stat,3);
			r += '</TD><TD>'+DQ.statCheck(char,stat,4);
			r += '</TD><TD>'+DQ.statCheck(char,stat,5);
			r += '</TD></TR>';
			return r;
		}
});
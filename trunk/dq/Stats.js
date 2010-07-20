$.extend(DQ, {
	Stats: ['PS', 'MD', 'AG', 'WP', 'MA', 'EN', 'FT', 'PC', 'PB'],
	statCurr: function statCurr(char,stat) {
			return DQ.applyMods(char.Stats[stat]);
		},
	statCheck: function statCheck(char,stat, mul) {
			return DQ.statCurr(char,stat) * mul;
		},
	showStat: function showStat(char,stat) {
			if (char && char.Stats)
				$('#my'+stat)
					.text(char.Stats[stat])
					.next().text(DQ.statCurr(char,stat))
					.next().text(DQ.statCheck(char,stat,1))
					.next().text(DQ.statCheck(char,stat,2))
					.next().text(DQ.statCheck(char,stat,3))
					.next().text(DQ.statCheck(char,stat,4))
					.next().text(DQ.statCheck(char,stat,5));
			else
				$('#my'+stat)
					.text('')
					.next().text('')
					.next().text('')
					.next().text('')
					.next().text('')
					.next().text('')
					.next().text('');
		}
});
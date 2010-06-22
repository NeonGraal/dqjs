var $dqChars, $output, $dqChar;
var Char;

$(function() {
	function showChar(char) {
		var sV;
		function statCurr(stat) {
			return DQ.applyMods(char.Stats[stat]);
		}
		function statCheck(stat, mul) {
			return statCurr(stat) * mul;
		}
		function showStat(stat) {
			sV[sV.length] =
				'<TR><TD class="stat">'+stat+'</TD><TD id="my'+stat+'">'+char.Stats[stat]+'</TD>' +
				'<TD id="curr'+stat+'">'+statCurr(stat)+'</TD>' + '<TD>'+statCheck(stat,1)+'</TD>' +
				'<TD>'+statCheck(stat,2)+'</TD>' + '<TD>'+statCheck(stat,3)+'</TD>' +
				'<TD>'+statCheck(stat,4)+'</TD>' + '<TD>'+statCheck(stat,5)+'</TD></TR>';
		}
		return function(sT,tS,xhr) {
			sV = [];
			showStat('PS');showStat('MD');showStat('AG');
			showStat('WP');showStat('MA');showStat('EN');
			showStat('FT');showStat('PC');showStat('PB');
			$('#tblStats').append(sV.join(''));
		};
	}

	$dqChars = $('#dqCharacters');
	$dqChar = $('#dqChar');
	$output = $('#output');

	$dqChars.bind('change', function(e) {
		$.getJSON($(this).val()+'.dq', function(char,s) {
			$dqChar.load('dqChar.html #dqChar-All', showChar(char));
			$output.text($.toJSON(char));
		});
	});
	$.getJSON('*.dq', function(char,s) {
		var a = [];
		for (var k in char) {
			a[a.length] = '<OPTION>' + char[k].replace('.dq', '') + '</OPTION>';
		}
		$dqChars.append(a.join('')).change();
	});
});
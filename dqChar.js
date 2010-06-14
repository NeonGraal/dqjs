var $dqChars, $output, $dqChar;
$(function() {
	function showChar(dq) {
		var sH, sV;
		function showStat(stat) {
			sH[sH.length] = '<TH>'+stat+'</TH>';
			sV[sV.length] = '<TD class="stat" id="my'+stat+'">'+dq.Stats[stat]+'</TD>';
		}
		return function(sT,tS,xhr) {
			sH = []; sV = [];
			showStat('PS');showStat('MD');showStat('AG');
			showStat('WP');showStat('MA');showStat('EN');
			showStat('FT');showStat('PC');showStat('PB');
			$('#statHead').append(sH.join(''));
			$('#statVal').append(sV.join(''));
		};
	}

	$dqChars = $('#dqCharacters');
	$dqChar = $('#dqChar');
	$output = $('#output');

	$dqChars.bind('change', function(e) {
		$.getJSON($(this).val()+'.dq', function(d,s) {
			$dqChar.load('dqChar.html #dqChar-All', showChar(d));
			$output.text($.toJSON(d));
		});
	});
	$.getJSON('*.dq', function(d,s) {
		var a = [];
		for (var k in d) {
			a[a.length] = '<OPTION>' + d[k].replace('.dq', '') + '</OPTION>';
		}
		$dqChars.append(a.join('')).change();
	});
});
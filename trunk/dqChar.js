var $dqChars, $output, $dqChar;
var Char;

$(function() {
	function showChar(char) {
		var sV;
		return function(sT,tS,xhr) {
			sV = [];
			for (var stat in DQ.Stats)
				sV[sV.length] = DQ.showStat(char,DQ.Stats[stat]);
			$('#tblStats').append(sV.join(''));
		};
	}

	$dqChars = $('#dqCharacters');
	$dqChar = $('#dqChar');
	$output = $('#output');

	$.getScript('dq/Stats.js',function(d,s){
			console.log('dq/Stats.js loaded: '+s);
		});

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
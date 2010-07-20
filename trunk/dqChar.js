var $dqChars, $output, $dqChar;
var Char;

$(function() {
	function showChar(char) {
		return function(sT,tS,xhr) {
			DQ.load($('#tblStats'), 'dq/Stats.html', function() {
					for (var stat in DQ.Stats)
						DQ.showStat(char,DQ.Stats[stat]);
				});
		};
	}

	$dqChars = $('#dqCharacters');
	$dqChar = $('#dqChar');
	$output = $('#output');

//	DQ.script('Stats');

	$dqChars.bind('change', function(e) {
		$.getJSON($(this).val()+'.dq', function(char,s) {
			DQ.load($dqChar, 'dqChar.html #dqChar-All', showChar(char));
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
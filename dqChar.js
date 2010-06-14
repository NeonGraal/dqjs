var $dqChars, $output;
$(function() {
	$dqChars = $('#dqCharacters');
	$output = $('#output');
	
	$dqChars.bind('change', function(e) {
		$.getJSON($(this).val()+'.dq', function(d,s) {
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
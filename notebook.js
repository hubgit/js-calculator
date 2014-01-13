$(function() {
	$('form.calculation').each(function() {
		var form = this;
		var data;

		$(form)
			.on('submit', false)
			.on('input', function() {
				try {
					data = eval(form.dataInput.value);
					form.dataOutput.value = eval('(function() {' + form.dataCalculation.value + '})()');
					form.dataOutput.removeAttribute('data-error');
				} catch (e) {
					form.dataOutput.value = e.message;
					form.dataOutput.setAttribute('data-error', true);
				}
			}).trigger('input');
	});
});
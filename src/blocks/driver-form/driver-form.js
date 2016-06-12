$('body').on('click', '#nextPage', function(event) {
	event.preventDefault();
	
	if ($('#pageOne').attr('data-show') === 'true') {
		$('#pageOne').attr('data-show', 'false');
		$('#pageTwo').attr('data-show', 'true');
	} else if ($('#pageTwo').attr('data-show') === 'true') {
		$('#pageTwo').attr('data-show', 'false');
		$('#pageThree').attr('data-show', 'true');
	}
});

$('body').on('click', '#prevPage', function(event) {
	event.preventDefault();
	
	if ($('#pageThree').attr('data-show') === 'true') {
		$('#pageThree').attr('data-show', 'false');
		$('#pageTwo').attr('data-show', 'true');
	} else if ($('#pageTwo').attr('data-show') === 'true') {
		$('#pageTwo').attr('data-show', 'false');
		$('#pageOne').attr('data-show', 'true');
	}
});
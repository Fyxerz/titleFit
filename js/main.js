function heightFit(target) {
	$(target).each(function() {
		var titleSize = $(this).outerHeight(true)
		var parentSize = $(this).parent().height()

			// IF NO CSS RESET, MARGIN BOTTOM HAS A DEFAULT
		$(this).css('margin-bottom', '0');

		var titleFont = $(this).css('font-size')
		titleFont = titleFont.match(/\d+/)
		console.log(titleFont)
 
		if (titleSize > parentSize) {
			titleFont = titleFont - 1
			$(this).css('font-size', titleFont)
			console.log($(this).css('font-size'))
			heightFit(this)
		}
	})
}

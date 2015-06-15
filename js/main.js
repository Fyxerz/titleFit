function init() {
	heightFit("h2");
	heightFit("p");
	lineFit("h3", 2)
}

function heightFit(target) {
	$(target).each(function() {
		var titleSize = $(this).outerHeight(true)
		var parentSize = $(this).parent().height()

			// IF NO CSS RESET, MARGIN BOTTOM HAS A DEFAULT
		$(this).css('margin-bottom', '0');

		var titleFont = $(this).css('font-size')
		titleFont = titleFont.match(/\d+/)
 
		if (titleSize > parentSize) {
			titleFont -= 1
			$(this).css('font-size', titleFont)
			heightFit(this)
		}
	})
}


function lineFit(elem, lines) {

	$(elem).each(function(index, el) {
		var titleSize = $(this).outerHeight(true)

		var titleFont = $(this).css('font-size')
		titleFont = titleFont.match(/\d+/)
		console.log(titleFont)
		if (titleSize > (titleFont * lines)) {
			titleFont = titleFont - 1

			$(this).css('font-size', titleFont);
			console.log(titleFont)
			lineFit(this, lines	)
		}
	});
}

init()
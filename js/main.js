

function heightFit(target) {
    $(target).each(function() {
        var titleSize = $(this).outerHeight(true);
        var parentSize = $(this).parent().height();

        var titleFont = $(this).css('font-size').match(/\d+/);


        for (titleFont; titleSize > parentSize; titleFont--) {
            $(this).css('font-size', titleFont);
            titleSize = $(this).outerHeight(true);
        }
    });
}

function lineFit(elem, lines) {
    $(elem).each(function(index, el) {
        var titleSize = $(this).outerHeight(true);

        var titleFont = $(this).css('font-size').match(/\d+/);

        for (titleFont; titleSize > (titleFont * (lines + 1)); titleFont--) {
            $(this).css('font-size', titleFont);
            titleSize = $(this).outerHeight(true);
        }
    });
}

function init() {
    heightFit('h2');
    heightFit('p');
    lineFit('h3', 1);
    lineFit('.card_title', 1);
}

init();

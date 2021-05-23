$(document).on('click', '.spoiler__head', function () {
    let spoiler = $(this).parent('.spoiler');
    let spoilerSet = spoiler.parent('.col-spoilers-content').data('set');
    let spoilerNumber = spoiler.data('spoiler');
    let spoilerContent = spoiler.find('.spoiler__content');
    let spoilerTabList = $('.col-spoilers-number[data-set="'+spoilerSet+'"]');
    let spoilerTab = spoilerTabList.find('.tab-spoiler-number[data-spoiler="'+spoilerNumber+'"]');
    if (spoiler.hasClass('open')) {
        spoilerContent.slideUp(300);
        spoiler.removeClass('open');
        spoilerTab.removeClass('open');
    } else {
        spoilerContent.slideDown(300);
        spoiler.addClass('open');
        spoilerTab.addClass('open');
    }
});

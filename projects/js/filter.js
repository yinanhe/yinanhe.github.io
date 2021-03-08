var filter_keyword = "";
var filter_items = [];
var root_ele;
var last_btn = '#btn-ft-all';

function init_filter(elClsOrID) {
    root_ele = elClsOrID;
    var filter_ctx = $(elClsOrID + ' ' + '.filter-gallery').find('.filter-item');
    filter_items = filter_ctx.clone(true);
}

function fitler_dataset(keyword) {
    var eleID = '#btn-ft-all';
    if (keyword !== "") {
        eleID = '#btn-ft-' + keyword;
    }
    var galary = $(root_ele + ' ' + '.filter-gallery');

    galary.html("");
    for (var i = 0; i < filter_items.length; ++i) {
        var item = $(filter_items[i]);
        var filter_content = item.attr('data-category');
        if (filter_content.includes(keyword)) {
            galary.append(item);
        }
    }

    // if ($(last_btn).hasClass('btn-primary')) {
    //     $(last_btn).removeClass('btn-primary')
    //     $(last_btn).addClass('btn-outline-primary')
    // }
    $(last_btn).removeClass('btn-primary')
    $(last_btn).addClass('btn-outline-primary')
    $(eleID).removeClass('btn-outline-primary');
    $(eleID).addClass('btn-primary');
    last_btn = eleID;
}
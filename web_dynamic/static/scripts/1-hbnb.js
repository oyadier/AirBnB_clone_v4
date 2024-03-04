$(document).ready(init);

function init () {
    const obj_amenity = {};
    $('.amenities .popover input').change(function () {
        if ($(this).is(':checked')) {
            obj_amenity[$(this).attr('data-name')] = $(this).attr('data-id');
        }else if ($(this).is(':not(:checked)')) {
            delete obj_amenity[$(this).attr('data-name')];
        }
        const ame_obj = Object.keys(obj_amenity);
        $('.amenities h4').text(ame_obj);
    });
}
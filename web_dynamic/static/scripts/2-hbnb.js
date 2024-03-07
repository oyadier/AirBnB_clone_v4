$(document).ready(init);

function init () {
  const obj_amenity = {};
  $('.amenities .popover input').change(function () {
    const name = $(this).data('name');
    const id = $(this).data('id');

    if ($(this).is(':checked')) {
      obj_amenity[name] = id;
    } else {
      delete obj_amenity[name];
    }

    const ame_obj = Object.keys(obj_amenity);
    $('.amenities h4').text(ame_obj);
  });
}

function status_api () {
  const URL_API = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(URL_API, (data, status) => {
    if (status == 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}

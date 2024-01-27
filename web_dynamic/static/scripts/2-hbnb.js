$(function () {
  const checkedAmenities = {};

  $("input[type='checkbox']").change(function () {
    const id = $(this).data('id');
    const name = $(this).data('name');

    if (this.checked) {
      if (!checkedAmenities[id]) {
        checkedAmenities[id] = name;
      }
    } else {
      if (checkedAmenities[id]) {
        delete checkedAmenities[id];
      }
    }

    const selectedAmenities = Object.values(checkedAmenities);

    if (selectedAmenities.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(selectedAmenities.join(', '));
    }
  });
  $.get('http://localhost:5001/api/v1/status/', function (data) {
  const apiStatusElement = $('#api_status');
  if (data.status === 'OK') {
    apiStatusElement.addClass('available');
  } else {
    apiStatusElement.removeClass('available');
  }
  });
});

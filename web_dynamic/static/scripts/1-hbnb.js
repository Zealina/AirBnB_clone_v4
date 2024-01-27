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
});

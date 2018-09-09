// with jQuery
var count = 0;

$('#cat_img').click(function(e) {
  //the element has been clicked... do stuff here
  count++;
  $("#cat_count").html(count);
});

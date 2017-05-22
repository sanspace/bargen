jQuery(document).ready(function($){
  // Duplicate barcode form
  var step;
  for (step = 0; step < 5; step++) {
    $('.content:last').clone().insertAfter('.content:last');
  }

  // Barcode Generating function
  var get_barcode = function(text, format, target){
    JsBarcode(target, text, {"format": format,"height": 60,"width": 1});
  };
  
  // Generate Barcode on text change
  $('.barcode-input').on('input', function(){
     var text = $(this).val();
     var target = $(this).siblings('svg')[0];
     var format = $(this).siblings('.barcode-format').val();
     get_barcode(text, format, target);
  });

  // Generate Barcode on format change
  $('.barcode-format').change(function(){
     var format = $(this).val();
     var target = $(this).siblings('svg')[0];
     var text = $(this).siblings('.barcode-input').val();
    get_barcode(text, format, target);
  });

  // Generate Barcode on Page Load only on the first element
  var format = $('.barcode-format')[0].value;
  var target = $('.barcode')[0];
  get_barcode("Example 1234", format, target);

});
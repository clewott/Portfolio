function printDiv(chrisOttenResume) {
  var printContents = document.getElementById(chrisOttenResume).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

$(document).ready( function() {

    $(".drawer").drawer();

    $('.image').on("mouseover", function() {
      $(this).children('.projectImage').addClass("coolEffect");
      $(this).children('.hiddenH3').addClass("showBtn");
      });
    $('.image').on("mouseout", function() {
      $(this).children('.projectImage').removeClass("coolEffect");
      $(this).children('.hiddenH3').removeClass("showBtn");
      });

});

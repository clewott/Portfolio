function printDiv() {
     window.print();
}

$(document).ready( function() {

    $('.image').on("mouseover", function() {
      $(this).children('.projectImage').addClass("coolEffect");
      $(this).children('.hiddenH3').addClass("showBtn");
      });
    $('.image').on("mouseout", function() {
      $(this).children('.projectImage').removeClass("coolEffect");
      $(this).children('.hiddenH3').removeClass("showBtn");
      });

});

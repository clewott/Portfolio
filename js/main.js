function printDiv() {
     window.print();
}

$(document).ready( function() {

    $('.projectImage').on("mouseover", function() {
      $(this).addClass("coolEffect");
      $(this).next('.hiddenH3').fadeIn(500);
      });
    $('.projectImage').on("mouseout", function() {
      $(this).removeClass("coolEffect");
      $(this).next('.hiddenH3').fadeOut(500);
      });

});

$(document).ready(function(){
    console.log ("ready!");
    $(".parallax").parallax();
    $(".sidenav").sidenav();



    
 const gototop = $("#goto");



 $(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
      gototop.show();
    } else {
      gototop.hide();
    }
  });

  gototop.on("click", function(e){
      e.preventDefault();
      $("html,body").animate({scrollTop:0},"300");
  });

















// end of document ready
});
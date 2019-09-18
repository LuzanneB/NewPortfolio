$(document).ready(function(){
    console.log ("ready!");

// initialize parallax and sidenav
    $(".parallax").parallax();
    $(".sidenav").sidenav();

// go to top element
// grab the button
    const gototop = $("#goto");
// set rules for when to show and hide the button
    $(window).scroll(function() {
       if ($(window).scrollTop() > 20) {
         gototop.show();
       } else {
         gototop.hide();
       }
     });
// scroll to the top of the page when the button is clicked 
     gototop.on("click", function(e){
         e.preventDefault();
         $("html,body").animate({scrollTop:0},"300");
     });
   




















// end of document ready
});
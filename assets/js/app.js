$(document).ready(function(){
    console.log ("ready!");

// initialize parallax and sidenav
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $('.collapsible').collapsible();

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

    // toggle icon for collapsible on open and close
    // const blogItem = $(".blogItem")

    //  blogItem.on("click", function(){
    //    if($(this).attr("class") === "active"){
    //      $(this).find(".fas").removeClass("fa-plus-square").addClass("fa-minus-square")
    //    }
    //    })
    

 //change icon of li when clicked
//  $(document).on("click", "li", function () {
//   if ($(this).attr("class") == "active") {
//       $(".material-icons").text("add_circle_outline");
//       $(this).find(".material-icons").text("remove_circle_outline");
//   } else {
//       $(this).find(".material-icons").text("add_circle_outline");
//   }
// });
   




















// end of document ready
});
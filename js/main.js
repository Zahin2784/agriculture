
AOS.init();

 AOS.init();




$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 600){
            $('.scroll_icon').css({
                "opacity":"1", "pointer-events":"auto"
            });
        }else{
            $('.scroll_icon').css({
                "opacity":"0", "pointer-events":"none"
            });
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 600){
            $('.smooth_scroll').css({
                "opacity":"1", "pointer-events":"auto"
            });
        }else{
            $('.smooth_scroll').css({
                "opacity":"0", "pointer-events":"none"
            });
        }
    });
});


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("menubar2").style.top = "0";
  } else {
    document.getElementById("menubar2").style.top = "-50px";
  }
}




/*Disabling right click*/

/*document.addEventListener("contextmenu",function(right_disable){
    right_disable.preventDefault();
});


alert("Right click is disabled for this site");*/


/*Disabling right click*/

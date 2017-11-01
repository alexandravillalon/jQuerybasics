$(document).ready(function(){

$("body").click(function(){
  $("h1").hide(3000);
  $("h1").show(3000);
  //could i have done what I did for "p" for this h1? does this code do the  same thing? what's the difference between the animation used for h1 and p?

  $("p").slideUp(1000,function(){
    $("p").slideDown(1000);
  });

  $(".box1").css("background-color", "red");

  $(".box2").fadeOut(2000, function(){
    $(".box2").fadeIn(2000);
  });

  $(".box3, .box6").animate({
    opacity: .75,
    width: "50%"
  },1000);

  $(".box4").hide(3000, function(){
    $(".box4").show(3000);
  });

  $(".box5").click(function(){
    $(".box5").css("background-color","black");
  });

  $(".box7, .box8").animate({
    opacity: .4,
    width: 600
  },4000);

  $("h2").hide(5000, function(){
    $("h2").show(5000);
  });

});




});

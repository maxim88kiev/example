$(document).ready(function(){
  var headclix = 0, eyeclix=0, noseclix= 0, mouthclix = 0;
    
lightning_one(3000);
lightning_two(4000);
lightning_three(5000);

$("p").animate({
left:"-=90px",
fontSize:"35px",
color:"#27408B"
},3000);

$("#head").click(function(){

      if (headclix < 2){
        $(this).animate({left:"-=367px"},500);
        headclix += 1;
      }
      else{
       $(this).animate({left:"0px"},500);
        headclix = 0;
      }
 });


    $("#eyes").click(function() {


      if (eyeclix < 2){
      $(this).animate({left:"-=367px"},500);
        eyeclix += 1;
      }
      else{
      $(this).animate({left:"0px"},500);
        eyeclix = 0;
      }
    });


   $("#nose").click(function() {

     if (noseclix < 2){
     $(this).animate({left:"-=367px"},500);
       noseclix += 1;
     }
     else{
     $(this).animate({left:"0px"},500);
       noseclix = 0;
     }
   });


   $("#mouth").click(function() {

     if (mouthclix < 2){
     $(this).animate({left:"-=367px"},500);
       mouthclix += 1;
     }
     else{
     $(this).animate({left:"0px"},500);
       mouthclix = 0;
     }
   });

});


function lightning_one(t){
$("#lightning1").fadeIn(250).fadeOut(250);
setTimeout("lightning_one(3000)",t);
}


function lightning_two(t){
$("#lightning2").fadeIn(250).fadeOut(250);
setTimeout("lightning_two(4000)",t);
}

function lightning_three(t){
$("#lightning3").fadeIn(250).fadeOut(250);
setTimeout("lightning_three(5000)",t);
}

$(document).ready(function() {
$(".robot").click(checkForCode);
$(".robot").hover(check1,check2);
hideCode();
});

function check1(){
$(this).addClass("discont44");
}

function check2(){
$(this).removeClass("discont44");
}

function checkForCode(){

var discount;
var discount22;
var discount3;
 if($.contains(this, document.getElementById("has_discount") ) )
 {
  var my_num = getRandom(100);
  discount = "<p id='nomer'>Ура ты выграл</p>";
  discount22 = "<p class='nomer2'>Твоя скидка " + my_num + "%</p>"
  $(".robot22").append(discount22); 
  $(this).addClass("discont22");
  
 }else{
  discount = "<p class='nomer'>Не выграли</p>";
  $(this).addClass("discont33");
 }
$(this).append(discount);
 
$(".robot").each( function(){ 
 if($.contains(this, document.getElementById("has_discount") ) )
 { 
discount3 = "<p id='nomer3'>Скидка здесь!</p>";
$(this).append(discount3);
$(this).addClass("discount");
if($.contains(this, document.getElementById("nomer") ) ){
 $("p#nomer3").remove();
}
 }else{
$(this).addClass("no_discont");
 }
 //$(this).unbind('click');
 
});
setTimeout(fresh, 2000);


/*
if(document.getElementById("nomer3")){
 if(document.getElementById("nomer")){
 $("p#nomer3").remove();
 }
}
*/
} 


function fresh() {
    location.reload();
}


function getRandom(num){
var my_num = Math.floor(Math.random()*num);
return my_num;

}

var hideCode = function (){
var numRand = getRandom(4);
 $(".robot").each(function(index, value) {
  if(numRand == index){
   $(this).append("<span id='has_discount'></span>");
   return false;
  }
 });
}
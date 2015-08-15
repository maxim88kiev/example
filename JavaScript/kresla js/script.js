var seats = [[false, true, false, true, true, true, false, true, false], 
             [false, true, false, true, false, true, false, true, false], 
             [false, false, true, true, true, false, false, true, false], 
             [false, false, false, true, false, true, true, true, false]];

var selSeat = -1;

function initseats(){
 for(var i = 0; i < seats.length; i++){
  for(var j = 0; j < seats[i].length; j++){
   if(seats[i][j]){
    document.getElementById("seats" + (i * seats[i].length + j)).src = "seat_avail.png";
    document.getElementById("seats" + (i * seats[i].length + j)).alt = "Available seat";
    }else{
    document.getElementById("seats" + (i * seats[i].length + j)).src = "seat_unavail.png";
    document.getElementById("seats" + (i * seats[i].length + j)).alt = "Unavailable seat";
   }
  }
 }
}

function findSeat(){
 if(selSeat >= 0){
  selSeat = -1;
  initseats();
 }
 
 for(var i = 0; i < seats.length; i++){
  for(var j = 0; j < seats[i].length; j++){
   if(seats[i][j] && seats[i][j + 1] && seats[i][j + 2]){
     selSeat = i * seats[i].length + j;
     document.getElementById("seats" + (i * seats[i].length + j)).src = "seat_select.png";
     document.getElementById("seats" + (i * seats[i].length + j)).alt = "Your Seat";
	 document.getElementById("seats" + (i * seats[i].length + j + 1)).src = "seat_select.png";
     document.getElementById("seats" + (i * seats[i].length + j + 1)).alt = "Your Seat";
	 document.getElementById("seats" + (i * seats[i].length + j + 2)).src = "seat_select.png";
     document.getElementById("seats" + (i * seats[i].length + j + 2)).alt = "Your Seat";
	 
     var accept = confirm("Место с " + (j + 1) + " по " + (j + 3) + " ряд " + (i + 1) + " свободно. Выбрать?");
      if(!accept){
       selSeat = -1;
       document.getElementById("seats" + (i * seats[i].length + j)).src = "seat_avail.png";
       document.getElementById("seats" + (i * seats[i].length + j)).alt = "Available seat";
	   document.getElementById("seats" + (i * seats[i].length + j + 1)).src = "seat_avail.png";
       document.getElementById("seats" + (i * seats[i].length + j + 1)).alt = "Available seat";
	   document.getElementById("seats" + (i * seats[i].length + j + 2)).src = "seat_avail.png";
       document.getElementById("seats" + (i * seats[i].length + j + 2)).alt = "Available seat";
      } else { 
	  i = seats.length + j;
	  break;
	  } 
	}
  }
 }
}

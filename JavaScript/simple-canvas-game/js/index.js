var start = 0;
var score = 0;
var scoreInterval = 0;
var speed = 0;
var num = 6;
var space = 510/num;
var left = 0;
var right = 0;
var up = 0;
var down = 0;
var playerspeed = 0;
var r = [[238.5,450,20,20]];
var minwidth = 300;
function funcstart(){
  start = start+1;
  score = 0;
  scoreInterval = 10;	//10		
  speed = 1.5;
  playerspeed = speed*7;
  verticalplayerspeed = speed*1.5;
  generate();
}
function generate(){
  r = [[238.5,450,20,20]];
  for(var i=0; i<num; i++){
    var width = Math.floor(Math.random() * (((500-((r[0][2]+10)))-minwidth)+1)) + minwidth;
    var left = Math.floor(Math.random() * (((500-width)-0)+1) + 0);
    if(num-i>3){
      r[i+1] = [left, ((i*space)-10), width, 10];
    }
    else{
      r[i+1] = [-1, ((i*space)-10), 0, 0];
    }
  }
}
function game(){
  function funcleft(a){
    if(a == 1){
      r[0][0] = r[0][0]-(playerspeed);
      if(r[0][0] < 0){
        r[0][0] = 0;
      }
    }
  }
  function funcright(a){
    if(a == 1){
      r[0][0] = r[0][0]+(playerspeed);
      if(r[0][0]+r[0][2] > 500){
        r[0][0] = 500-r[0][2];
      }
    }
  }
  function funcup(a){
    if(a == 1){
      r[0][1] = r[0][1]-(verticalplayerspeed);
      if(r[0][1] < 0){
        r[0][1] = 0;
      }
    }
  }
  function funcdown(a){
    if(a == 1){
      r[0][1] = r[0][1]+(verticalplayerspeed);
      if(r[0][1]+r[0][3] > 500){
        r[0][1] = 500-r[0][3];
      }
    }
  }
  document.onkeydown = function(e){
    var evt = e || window.event;
    switch(evt.keyCode){
      case 37: //left
        left = 1;
        break;
      case 39: //right
        right = 1;	
        break;
      case 38: //up
        up = 1;
        break;
      case 40: //down
        down = 1;
        break;
    }
  };
  document.onkeyup = function(e){
    var evt = e || window.event;
    switch(evt.keyCode){
      case 37: //left
        left = 0;
        break;
      case 39: //right
        right = 0;	
        break;
      case 38: //up
        up = 0;
        break;
      case 40: //down
        down = 0;
        break;
    }
  };
  var canvas = document.getElementById("canvas");
  var canvasContext = canvas.getContext("2d");
  function reset(a){
    var reswidth = Math.floor(Math.random() * (((500-((r[0][2]+10)))-minwidth)+1)) + minwidth;
    var resleft = Math.floor(Math.random() * (((500-reswidth)-0)+1) + 0);
    if((500-(resleft+reswidth))<(r[0][2]+10)){
      if(resleft<(r[0][2]+10)){
        if(Math.random() < 0.5){
          resleft = (r[0][2]+10);
        }
        else{
          resleft = 0;
        }
      }
    }
    r[a] = [resleft, -10, reswidth, 10];
  }
  function collisiontest(i){
    if(r[i][0] <= r[0][0]+r[0][2]){
      if(r[i][0] + r[i][2] >= r[0][0]){
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(r[0][0],r[0][1],r[0][2],r[0][3]);
        start = 0;
      }
    }
  }
  function frame(){
    score = score + 0.02;
    funcleft(left);
    funcright(right);
    funcup(up);
    funcdown(down);
    canvas.width = canvas.width;
    canvasContext.fillStyle = "blue";
    canvasContext.fillRect(r[0][0],r[0][1],r[0][2],r[0][3]);
    canvasContext.font = "20px Arial";
    canvasContext.fillText(Math.floor(score),5,25);
    for(var i=1; i<r.length; i++){	
      if(r[i][1] > 500){
        reset(i);
      }
      r[i][1] = r[i][1]+speed;
      if(r[i][1]+r[i][3] >= r[0][1] && r[i][1] <= r[0][1]+r[0][3]){
        collisiontest(i);
      }
      canvasContext.fillStyle = "black";
      canvasContext.fillRect(r[i][0], r[i][1], r[i][2], r[i][3]);
    }
    if(score > 5 && Math.floor(score)%scoreInterval == 0){	//score>5
      playerspeed = speed*7;
      verticalplayerspeed = speed*1.5;
      if((r[0][2]+10) < (500-minwidth)){
        r[0][2] = r[0][2]+5;
        r[0][0] = r[0][0]-2.5;		
      }
      else{
        if(speed+0.25<space){
          speed = speed+0.25;
        }
      }
      if(1.5*(r[0][3]+5) < (space-10)){		
        r[0][3] = r[0][3]+5;	
        r[0][1] = r[0][1]-2.5;	
      }
      score = score+1;
    }
  }
  frame();
  setInterval(function(){
    if(start>0){
      frame();
    }
  }, 20);
}
game();

var request; 

function startAjax(){


  if(window.XMLHttpRequest){ 
      request = new XMLHttpRequest(); 
  } else if(window.ActiveXObject){ 
      request = new ActiveXObject("Microsoft.XMLHTTP");  
  } else { 
      return; 
  } 


request.onreadystatechange = function(){
		switch (request.readyState) {
		  case 1: print_console("<br/><em>1: Подготовка к отправке...</em>"); break
		  case 2: print_console("<br/><em>2: Отправлен...</em>"); break
		  case 3: print_console("<br/><em>3: Идет обмен..</em>"); break
		  case 4:{
		   if(request.status==200){	
                      
					  startAjax222();
					  //var name = request.responseXML.getElementsByTagName("title")[0].firstChild.data; 
					  //alert(name);
					  
	           }else if(request.status==404){
		      alert("Ошибка: запрашиваемый скрипт не найден!");
		   }else alert("Ошибка: сервер вернул статус: "+ request.status);
		   break
		   }
		         }		
                                         }


//request.open('GET', 'http://localhost/javascript 33/addblogentry.php', true);

request.open('POST', 'http://localhost/javascript 33/addblogentry.php', true);


//request.send('');


var text222 = "date=" + document.getElementById("date22").value + 
"&body=" + document.getElementById("body22").value + 
"&img=" + document.getElementById("image22").value;



//var text222 = "date=11/14/2007&body=HELLOY22&img=r6j6j6j6j6.jpg";


request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

request.send(text222);


} 



function startAjax222(){
 if (request.readyState == 4 && request.status == 200) {
	 var  xmlData = request.responseXML.getElementsByTagName("blog")[0];
     
	 var  xmlData2 = xmlData.getElementsByTagName("title")[0].firstChild.data;
     
     var xml2 = "by " + getText(xmlData.getElementsByTagName("author")[0]);
   
  
   var entries = xmlData.getElementsByTagName("entry");
   
   for (var i = 0; i < entries.length; i++) {
      
       blog.push(new Blog(getText(entries[i].getElementsByTagName("body")[0]),
       new Date(getText(entries[i].getElementsByTagName("date")[0])),
       getText(entries[i].getElementsByTagName("img")[0])));
	   
   }
  showBlog(5);
   alert('finish');
 }else{ alert("сервер не отвечает");}
}


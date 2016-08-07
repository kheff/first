
var import1=require("./linker.js");


var locstrg=localStorage;

var page = new tabris.Page({
  title: 'Eng 4th year app',
  id:'pg',
  topLevel: true,
  background:'#F5F5DC'
});


var sizex=(16/100*screen.width);
var sizey=(26/100*screen.height);
var sizez=(35/100*screen.height);

var b1=new tabris.TextView(
{  
	layoutData:{top:sizey,left:sizex},
	id:'b1',
	text:"Username:",
	font:'18px'
}).appendTo(page);

var b2=new tabris.TextView(
{  
	layoutData:{top:sizez,left:sizex},
	id:'b2',
	font:'18px',
	text:"Password:",
}).appendTo(page);



var text1=new tabris.TextInput({
    id:'txt1',
	layoutData:{top:(sizey-5),left:(sizex+100), width:(40/100*screen.width)},

	
}
	).appendTo(page);


var text2=new tabris.TextInput({
    id:'txt2',
    type:'password',
	layoutData:{top:(sizey+50),left:(sizex+100), width:(40/100*screen.width)},
}
	).appendTo(page);

var Enter=new tabris.Button
(
{
id:'loginbtn',
layoutData:{top:[text2,30],left:(sizex+100)},
text:'Login',
background:'#F5F5DC'
}
).appendTo(page);


var sign=new tabris.Button
(
{
id:'signbtn',
layoutData:{top:[text2,30],left:(sizex+200)},
text:'Sign up',
background:'#F5F5DC'
}
).appendTo(page);




if(locstrg.getItem("locuser")!=null && locstrg.getItem("locuser")!=null)
{
  usr=locstrg.getItem("locuser");
  pas=locstrg.getItem("locpas");
   import1.http(page);

  
}





Enter.on('select',function()
{
	usr=text1.get('text');
	pas=text2.get('text');
	if(usr=='')
	{
 
		text1.set('message','fill username');

	}
	if(pas=='')
	{
		text2.set('message','fill password');
	}


if(usr!='' && pas!='')
{  

   import1.http(page);
  
}

 }); 



sign.on("select",function()
	{
		locstrg.setItem("locuser","ENG-219-070/2013");
		locstrg.setItem("locpas",1234);

	});



tabris.ui.set('background','blue');
page.open();

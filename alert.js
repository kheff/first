exports.open=function(str)
{

var children=str.children()
len=children.length;
if(len>0)
{

	for(var c=0;c<len;c++)
	{   
		if(children[c].get("id")==="tabf")
		{
			continue;
		};
		children[c].dispose();
	};
};


//assingment tab
var comp=new tabris.Composite(
	{
		top:(9/100*screen.height),
		width:screen.width,
		height:(4/100*screen.height),
		background:'#2e86c1'
	}).appendTo(str);
//fill assingment

if(comp)
{
    var list=1;
	for(var c=0;c<64;c++)
	{   
		if(c!=0 && (c%2)!=0)
		{
			c=c+6;
		};
		if((c%2)==0)
		{
			continue;
		};
	     var txt=new tabris.TextView(
		{
			layoutData:{top:['prev()',1],left:3},
			text:list+++'.'+"Yes"
		
			
		}).appendTo(str);
	   
       
       
   };
 };




//cats tab
var comp1=new tabris.Composite(
	{
		top:(33/100*screen.height),
		width:screen.width,
		height:(4/100*screen.height),
		background:'#2e86c1'
	}).appendTo(str);

//fill cats
if(comp1)
{
    var list=1;
	for(var c=0;c<70;c++)
	{   
		if(c!=0 && (c%2)!=0)
		{
			c=c+6;
		};
		if((c%2)==0)
		{
			continue;
		};
	     var txt1=new tabris.TextView(
		{
			layoutData:{top:['prev()',1],left:3},
			text:list+++'.Hello'
		
			
		}).appendTo(str);

     
       
       
   };
 };

//exams tab
var comp2=new tabris.Composite(
	{
		top:(56.4/100*screen.height),
		width:screen.width,
		height:(4/100*screen.height),
		background:'#2e86c1'
	}).appendTo(str);
//fill exams
if(comp2)
{
    var list=1;
	for(var c=0;c<70;c++)
	{   
		if(c!=0 && (c%2)!=0)
		{
			c=c+6;
		};
		if((c%2)==0)
		{
			continue;
		};
	     var txt2=new tabris.TextView(
		{
			layoutData:{top:['prev()',1],left:3},
			text:list+++'.Hello'
		
		}).appendTo(str);
       
       
       
   };
 };


//assingment tab
new tabris.TextView(
	{
	 text:"Assingments due",
	 layoutData:{centerX:0,centerY:0}
	}).appendTo(comp);

//cats tab
new tabris.TextView(
	{
	 text:"Upcoming cats",
	 layoutData:{centerX:0,centerY:0}
	}).appendTo(comp1);

//exams tab
new tabris.TextView(
	{
	 text:"Upcoming exams",
	 layoutData:{centerX:0,centerY:0}
	}).appendTo(comp2);



//function to animate
function anim(strtxt)
{
	 strtxt.animate(
                {   
                    transform:{
                        
                        scaleX:1.8
               }
          }
                     
      );

};




};
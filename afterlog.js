

exports.logpage=function()
{


var page=new tabris.Page
(
{

title: 'Eng 4th year app',
  id:'pgl',
  topLevel: true,
  background:'#F5F5DC'


});

var tabfolder=new tabris.TabFolder(
  {
paging:true,
id:"tabf"
  }).appendTo(page);

var tabhome=new tabris.Tab(
  {
    title:"Home",
    id:"home",
    selection:"tbh",
    background:'#F5F5DC'
      }).appendTo(tabfolder);



var tabcwork=new tabris.Tab(
  {
    title:"Course",
    id:"crs",
    selection:"scr",
    background:'#F5F5DC',
     

      }).appendTo(tabfolder);



var tabfora=new tabris.Tab(
  {
    title:"Forum",
    id:"Forum",
    background:'#F5F5DC',
      }).appendTo(tabfolder);

var tabnotif=new tabris.Tab(
  {
    title:"Alerts",
    background:'#F5F5DC',
      }).appendTo(tabfolder);


var tabresearch=new tabris.Tab(
  {
    title:"Research",
    id:"Research",
    background:'#F5F5DC',
      }).appendTo(tabfolder);


tabfolder.on('change:selection',function()
{
   var tab=tabfolder.get('selection');
   var stab=tab.get('title');
   if(stab=="Home")
   {
   var cors=require('./home.js');
   cors.open(page)
   }

    if(stab=="Course")
   {
   var cors=require('./course.js');
   cors.open(page)
   }

    if(stab=="Forum")
   {
   var cors=require('./fora.js');
   cors.open(page)
   }

    if(stab=="Alerts")
   {
   var cors=require('./alert.js');
   cors.open(page)
   }

    if(stab=="Research")
   {
   var cors=require('./research.js');
   cors.open(page)
   }

 
}


);


page.open();
}



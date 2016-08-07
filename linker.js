exports.http=function(str)//function used to make http requests
{
var xhttp = new XMLHttpRequest();
    
   xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState==4 && xhttp.status==200) 
        {   
            var msg=xhttp.responseText;
            if(msg=="ERROR1")// called when user has wrong details or has forgot
            {
                var erroview=new tabris.TextView(
                {
                    layoutData:{top:(60/100*screen.height),left:(50/100*screen.width)},
                    text:"Wrong details",
                    font:'12px underline'
                }).appendTo(str);

                erroview.animate(
                {   
                    transform:{
                        
                        scaleX:1.5
                    }
                     }
                     
                );

                setTimeout(dispo,2000,erroview);


                

            }

            if(msg=="Verify")//called when user has not verified account
            {



               var erroview=new tabris.TextView(
                {
                    layoutData:{top:(60/100*screen.height),left:(30/100*screen.width)},
                    text:"Check email to verify account",
                    font:'12px'
                }).appendTo(str);

                erroview.animate(
                {   
                    transform:{
                        
                        scaleX:1.5
                    }
                     }
                     
                );

                setTimeout(dispo,2000,erroview);





            }


            if(msg=="Verified")//called when user has  verified account
            {

            var afterlog=require("./afterlog.js");
            afterlog.logpage();




            }

             

            
            
        }


    }


    xhttp.open('GET','http://192.168.43.42/logn.php?str1='+usr+'&str2='+pas);
    xhttp.send();
}




function dispo(str)
{    
    str.set(
        {text:''
        });
}
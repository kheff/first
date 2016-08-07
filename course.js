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
		}
		children[c].dispose();
	}
}


var canv=new tabris.Canvas({
layoutData:{left:10,top:20,right:20,bottom:20}
}).on('resize',function()
	{
		var ctx=canv.getContext("2d",screen.width,screen.height);

        var rect=ctx.rect((3/100*screen.width),(7/100*screen.height),(22/100*screen.width),(5/100*screen.height));
        ctx.stroke();
        ctx.fillText('Units',(7/100*screen.width),(10/100*screen.height));

        var rect2=ctx.rect((25/100*screen.width),(7/100*screen.height),(22/100*screen.width),(5/100*screen.height));
        ctx.stroke();
        ctx.fillText('Time',(29/100*screen.width),(10/100*screen.height));

        var rect3=ctx.rect((47/100*screen.width),(7/100*screen.height),(22/100*screen.width),(5/100*screen.height));
        ctx.stroke();
        ctx.fillText('Cats',(51/100*screen.width),(10/100*screen.height));

        var rect4=ctx.rect((69/100*screen.width),(7/100*screen.height),(22/100*screen.width),(5/100*screen.height));
        ctx.stroke();
        ctx.fillText('Exams',(73/100*screen.width),(10/100*screen.height));





        var rectv=ctx.rect((3/100*screen.width),(12/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(15/100*screen.height));

        var rect2v=ctx.rect((3/100*screen.width),(19/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(22/100*screen.height));

        var rect3v=ctx.rect((3/100*screen.width),(26/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(29/100*screen.height));

        var rect4v=ctx.rect((3/100*screen.width),(33/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(36/100*screen.height));

        var rect5v=ctx.rect((3/100*screen.width),(40/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(43/100*screen.height));

        var rect6v=ctx.rect((3/100*screen.width),(47/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(50/100*screen.height));

        var rect7v=ctx.rect((3/100*screen.width),(54/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(57/100*screen.height));

        var rect8v=ctx.rect((3/100*screen.width),(61/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(64/100*screen.height));

        var rect8v=ctx.rect((3/100*screen.width),(68/100*screen.height),(22/100*screen.width),(5.6/100*screen.height));
        ctx.stroke();
        ctx.fillText('Analogue Elec',(3/100*screen.width),(71/100*screen.height));




        var rect21v=ctx.rect((25/100*screen.width),(12/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(14/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(16/100*screen.height));
        ctx.fillText('Fri(12-4P.M)',(26/100*screen.width),(18/100*screen.height));

        var rect22v=ctx.rect((25/100*screen.width),(19/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(21/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(23/100*screen.height));

        var rect23v=ctx.rect((25/100*screen.width),(26/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(28/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(30/100*screen.height));

        var rect24v=ctx.rect((25/100*screen.width),(33/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(35/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(37/100*screen.height));

        var rect25v=ctx.rect((25/100*screen.width),(40/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(42/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(44/100*screen.height));

        var rect26v=ctx.rect((25/100*screen.width),(47/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(49/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(51/100*screen.height));

        var rect27v=ctx.rect((25/100*screen.width),(54/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(56/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(58/100*screen.height));

        var rect28v=ctx.rect((25/100*screen.width),(61/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(63/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(65/100*screen.height));

         var rect29v=ctx.rect((25/100*screen.width),(68/100*screen.height),(22/100*screen.width),(5.6/100*screen.height));
        ctx.stroke();
        ctx.fillText('Mon(7-8A.M)',(26/100*screen.width),(70/100*screen.height));
        ctx.fillText('Tue(12-2P.M)',(26/100*screen.width),(72/100*screen.height));

        

        var rect31v=ctx.rect((47/100*screen.width),(12/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(14/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(16/100*screen.height));

        var rect32v=ctx.rect((47/100*screen.width),(19/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(21/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(23/100*screen.height));

        var rect33v=ctx.rect((47/100*screen.width),(26/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(28/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(30/100*screen.height));

        var rect34v=ctx.rect((47/100*screen.width),(33/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(35/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(37/100*screen.height));

        var rect35v=ctx.rect((47/100*screen.width),(40/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(42/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(44/100*screen.height));

        var rect36v=ctx.rect((47/100*screen.width),(47/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(49/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(51/100*screen.height));

        var rect37v=ctx.rect((47/100*screen.width),(54/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(56/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(58/100*screen.height));

        var rect38v=ctx.rect((47/100*screen.width),(61/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(63/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(65/100*screen.height));

        var rect39v=ctx.rect((47/100*screen.width),(68/100*screen.height),(22/100*screen.width),(5.6/100*screen.height));
        ctx.stroke();
        ctx.fillText('12/3/2016',(47/100*screen.width),(70/100*screen.height));
        ctx.fillText('12/3/2016)',(47/100*screen.width),(72/100*screen.height));





        var rect41v=ctx.rect((69/100*screen.width),(12/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(15/100*screen.height));

        var rect42v=ctx.rect((69/100*screen.width),(19/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(22/100*screen.height));

        var rect43v=ctx.rect((69/100*screen.width),(26/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(29/100*screen.height));

        var rect44v=ctx.rect((69/100*screen.width),(33/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(36/100*screen.height));

        var rect45v=ctx.rect((69/100*screen.width),(40/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(43/100*screen.height));

        var rect46v=ctx.rect((69/100*screen.width),(47/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(50/100*screen.height));

        var rect47v=ctx.rect((69/100*screen.width),(54/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(57/100*screen.height));

        var rect48v=ctx.rect((69/100*screen.width),(61/100*screen.height),(22/100*screen.width),(7/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(64/100*screen.height));

        var rect49v=ctx.rect((69/100*screen.width),(68/100*screen.height),(22/100*screen.width),(5.6/100*screen.height));
        ctx.stroke();
        ctx.fillText('NA',(70/100*screen.width),(71/100*screen.height));
        


}).appendTo(str);


canv.animate(
                {   
                    transform:{
                        
                        scaleX:1.1
                    }
                     }
                     
                );



};
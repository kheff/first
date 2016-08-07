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




new tabris.TextView(
	{
		top:70,
		text:"Home"


	}).appendTo(str);


};
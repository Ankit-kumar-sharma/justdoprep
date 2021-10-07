function expand()
{
    if(document.getElementById('sun').className=="fa fa-moon-o darkMode")
    {

        document.getElementById('Search').style="width:80%; background-color:rgba(0,0,0,0);";
    }
    else
    {
        document.getElementById('Search').style="width:80%; background-color:rgba(0,0,0,0);color:white;";
    }
    // alert("Hello");
}
function shrink()
{
    document.getElementById('Search').style="width:0%; background-color:rgba(0,0,0,0);";
}
function changeMode()
{
const c=document.getElementById('sun').className;
// alert(c);
if(c==="fa fa-sun-o darkMode")
{
    document.getElementById('sun').className="fa fa-moon-o darkMode";
    document.getElementById('slider').style="background-color:white";
    document.getElementById('body').style="background-color:white;";
    document.getElementById('container').style="background-color:white;";
    document.getElementById('header').style="border-bottom:none;";
    document.getElementById('typingText').style="color:black; border-right:1px solid black";
    document.getElementById('Search').style="background-color:none; color:black; border-bottom:none;";
  
}
else
{
    document.getElementById('slider').style="background-color:black";
    document.getElementById('body').style="background-color:black;";
    document.getElementById('container').style="background-color:black;";
    document.getElementById('typingText').style="color:white; border-right:1px solid white";
    // document.getElementById('header').style="border-bottom:1px solid #bfbfbf;";
    document.getElementById('searchIcon').addEventListener('mouseover',function mouseOver()
    {
        document.getElementById('searchIcon').style="color:white";
    });
    
    document.getElementById('sun').className="fa fa-sun-o darkMode";
}
}
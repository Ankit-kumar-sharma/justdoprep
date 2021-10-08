

// console.log(scrollY);
window.onscroll=function()
{
    if(scrollY>=4389)
    {
        document.getElementById('logoName').style="display:none";
        // alert("Hello");
    }
    else
    {
        document.getElementById('logoName').style="display:block;";
        
    }
}
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
    document.getElementById('getStarted').style="color:black; border:1px solid black;";   
    document.getElementById('getStarted').addEventListener('mouseover',function mouseOver()
    {
        document.getElementById('getStarted').style="color:white";
    });
   
    document.getElementById('searchIcon').addEventListener('mouseover',function mouseOver()
    {
        document.getElementById('searchIcon').style="color:black";
    });
 
    // document.getElementById('title').style="color:black;";
    document.getElementById('courseinfo1').style="color:black; border:none;";
    document.getElementById('courseinfo2').style="color:black; border:none;";
    document.getElementById('courseinfo3').style="color:black; border:none;";
    document.getElementById('courseinfo4').style="color:black; border:none;";
    // document.getElementById('jBtn1').style="color:black;";
    // document.getElementById('jBtn2').style="color:black;";
    // document.getElementById('jBtn3').style="color:black;";
    // document.getElementById('jBtn4').style="color:black;";
    document.getElementById('footerLogo').src="./Images/graduation-hat.png";
    document.getElementById('footer').style="color:black;";
    // document.getElementById('footerTitle').style="color:black;";
    document.getElementById('mentorinfo1').style="color:black";
    document.getElementById('mentorinfo2').style="color:black";
    document.getElementById('mentorinfo3').style="color:black";
    document.getElementById('mentorinfo4').style="color:black";
    let arr=Array.from(document.getElementById('footer').getElementsByTagName('a'));
   arr.forEach(element => {
       element.style="color:black";
   });
   let mentorLink=Array.from(document.getElementById('mentor').getElementsByTagName('a'));
   mentorLink.forEach(element => {
    element.style="color:black";
   });
   let title=Array.from(document.getElementsByClassName('titleContainer'));
    title.forEach(element => {
        element.style="color:black";
    });
   document.getElementById('sEmail').style="color:black";
   document.getElementById('subText').style="color:black";
   document.getElementById('subscribeBtn').style="border:none;";
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
    document.getElementById('getStarted').addEventListener('mouseover',function mouseOver()
    {
        document.getElementById('getStarted').style="color:white; border:1px solid white; background: linear-gradient(to left,black 100%, white 0%); background-position:left;";
    }); 
    
    document.getElementById('getStarted').style="background:black; color:white; border:1px solid white;";
    document.getElementById('sun').className="fa fa-sun-o darkMode";
    document.getElementById('courseinfo1').style="color:white; border:none";
    document.getElementById('courseinfo2').style="color:white; border:none";
    document.getElementById('courseinfo3').style="color:white; border:none";
    document.getElementById('courseinfo4').style="color:white; border:none";
    document.getElementById('jBtn1').style="color:white;";
    document.getElementById('jBtn2').style="color:white;";
    document.getElementById('jBtn3').style="color:white;";
    document.getElementById('jBtn4').style="color:white;";
    document.getElementById('mentorinfo1').style="color:white";
    document.getElementById('mentorinfo2').style="color:white";
    document.getElementById('mentorinfo3').style="color:white";
    document.getElementById('mentorinfo4').style="color:white";
    // document.getElementById('title').style="color:white;";
    document.getElementById('footer').style="color:white;";
    // document.getElementById('footerTitle').style="color:white;";
    document.getElementsByClassName('fContent').style="color:white";
    document.getElementById('sEmail').style="color:white";
    document.getElementById('subText').style="color:white";
    let title=Array.from(document.getElementsByClassName('titleContainer'));
    title.forEach(element => {
        element.style="color:white";
    });
    console.log(title);
    document.getElementById('subscribeBtn').style="border:1px solid white;";
    // document.querySelectorAll('fContainer4');
    document.getElementById('footerLogo').src="./Images/logo.png";
    // document.getElementsByClassName('emailAddr').className="bColor";
   let arr=Array.from(document.getElementById('footer').getElementsByTagName('a'));
   arr.forEach(element => {
       element.style="color:white";
   });
//    let brr=Array.from(document.getElementById('footer').getElementsByTagName('a'));
//    console.log(brr);
   let mentorLink=Array.from(document.getElementById('mentor').getElementsByTagName('a'));
   mentorLink.forEach(element => {
    element.style="color:white";
   });
//    console.log(mentorLink);
    
}
}
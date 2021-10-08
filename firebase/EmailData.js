var emailV;
var uidV=1;


function read()
{
 emailV=document.getElementById('sEmail').value;
 firebase.database().ref("EmailAddress/"+uidV).on("value", function(snap)
{
  uidV=snap.val().uid;
  uidV++;
});
 
}

document.getElementById("subscribeBtn").onclick = function ()
{
    // alert("Insert called");
    read();
    if(emailV.length!==0)
    {
        firebase.database().ref("EmailAddress/"+uidV).set({
            email: emailV,
            uid:uidV,
          });
          alert('Subscribe Successfully.');
          document.getElementById("sEmail").value="";
       
    }
    else
    {
        alert("Please Enter Email Address");
    }
    
}


let displayContent=document.getElementById('container');
displayContent.style="display:none;";
// var myVar;
function myLoaderFunctionality()
{
  setTimeout(showPage, 3000);

}
function showPage() {
  document.getElementById("loaderContainer").style.display = "none";
  displayContent.style="display:block;";
}















showComments();
let userName = document.getElementById("nameCommentor");
let publish = document.getElementById("publishButton");
document.getElementById("cancelBtn").onclick = function () {
  //alert("Hello");
  let commentText = document.getElementById("comment");
  commentText.value = "";
  userName.value = "";
};
publish.addEventListener("click", function (e) {
  let userName = document.getElementById("nameCommentor");
  let commentText = document.getElementById("comment");
  let comments = localStorage.getItem("comments");
  if (comments == null) {
    commentsArray = [];
  } else {
    commentsArray = JSON.parse(comments);
  }
  if (commentText.value.length != 0) {
    let myObj = {
      userName: userName.value,
      text: commentText.value,
    };
    commentsArray.push(myObj);
    localStorage.setItem("comments", JSON.stringify(commentsArray));
    commentText.value = "";
    userName.value = "";
    // console.log(commentsArray);
    showComments();
  }
});
function showComments() {
  let comments = localStorage.getItem("comments");
  if (comments == null) {
    commentsArray = [];
  } else {
    commentsArray = JSON.parse(comments);
  }
  let html = "";
  commentsArray.forEach(function (element, index) {
    // console.log(element);
    html += `
        <div class="userComment">
        <div><p class="commentDUser"><i class="fa fa-opencart" style="margin-right:5px"></i>${element.userName}</p></div>
        <p id="dPara">${element.text}</p>
        <button onclick="deleteComments(this.id)" id="${index}" class="deleteComment">Delete</button>
        </div>
        `;
  });
  let commentsElement = document.getElementById("Comments");
  if (commentsArray.length != 0) {
    commentsElement.innerHTML = html;
  } else {
    commentsElement.innerHTML = `Comments are no longer available ! Use "Add a comment" section above to add comments`;
  }
}

function deleteComments(index) {
  //  console.log(index);
  let comments = localStorage.getItem("comments");
  if (comments == null) {
    commentsArray = [];
  } else {
    commentsArray = JSON.parse(comments);
  }
  commentsArray.splice(index, 1);
  localStorage.setItem("comments", JSON.stringify(commentsArray));
  showComments();
}

// console.log(scrollY);
window.onscroll = function () {
  if (scrollY >= 4389) {
    document.getElementById("logoName").style = "display:none";
    // alert("Hello");
  } else {
    document.getElementById("logoName").style = "display:block;";
  }
};
function expand() {
  if (document.getElementById("sun").className == "fa fa-moon-o darkMode") {
    document.getElementById("Search").style =
      "width:80%; background-color:rgba(0,0,0,0);";
  } else {
    document.getElementById("Search").style =
      "width:80%; background-color:rgba(0,0,0,0);color:white;";
  }
  // alert("Hello");
}
function shrink() {
  document.getElementById("Search").style =
    "width:0%; background-color:rgba(0,0,0,0);";
}
function changeMode() {
  const c = document.getElementById("sun").className;
  // alert(c);
  if (c === "fa fa-sun-o darkMode") {
    let y = document.querySelector(".ContactR");
    y.innerHtml = `<p style="color:black">Contact Us</p>`;
    console.log(y);

    document.getElementById("sun").className = "fa fa-moon-o darkMode";
    document.getElementById("slider").style = "background-color:white";
    document.getElementById("body").style = "background-color:white;";
    document.getElementById("container").style = "background-color:white;";
    document.getElementById("header").style = "border-bottom:none;";
    document.getElementById("typingText").style =
      "color:black; border-right:1px solid black";
    document.getElementById("Search").style =
      "background-color:none; color:black; border-bottom:none;";
    document.getElementById("getStarted").style =
      "color:black; border:1px solid black;";
    document
      .getElementById("getStarted")
      .addEventListener("mouseover", function mouseOver() {
        document.getElementById("getStarted").style = "color:white";
      });

    document
      .getElementById("searchIcon")
      .addEventListener("mouseover", function mouseOver() {
        document.getElementById("searchIcon").style = "color:black";
      });

    // document.getElementById('title').style="color:black;";
    document.getElementById("courseinfo1").style = "color:black; border:none;";
    document.getElementById("courseinfo2").style = "color:black; border:none;";
    document.getElementById("courseinfo3").style = "color:black; border:none;";
    document.getElementById("courseinfo4").style = "color:black; border:none;";
    // document.getElementById('jBtn1').style="color:black;";
    // document.getElementById('jBtn2').style="color:black;";
    // document.getElementById('jBtn3').style="color:black;";
    // document.getElementById('jBtn4').style="color:black;";
    document.getElementById("footerLogo").src = "./Images/graduation-hat.png";
    document.getElementById("footer").style = "color:black;";
    // document.getElementById('footerTitle').style="color:black;";
    document.getElementById("mentorinfo1").style = "color:black";
    document.getElementById("mentorinfo2").style = "color:black";
    document.getElementById("mentorinfo3").style = "color:black";
    document.getElementById("mentorinfo4").style = "color:black";
    let arr = Array.from(
      document.getElementById("footer").getElementsByTagName("a")
    );
    arr.forEach((element) => {
      element.style = "color:black";
    });
    let mentorLink = Array.from(
      document.getElementById("mentor").getElementsByTagName("a")
    );
    mentorLink.forEach((element) => {
      element.style = "color:black";
    });
    let title = Array.from(document.getElementsByClassName("titleContainer"));
    title.forEach((element) => {
      element.style = "color:black";
    });
    document.getElementById("sEmail").style = "color:black";
    document.getElementById("subText").style = "color:black";
    document.getElementById("subscribeBtn").style = "border:none;";
    let creatorDesign = Array.from(
      document.getElementsByClassName("creatorDesign")
    );
    creatorDesign.forEach((element) => {
      element.style = "color:black";
    });
    let creatorPos = Array.from(document.getElementsByClassName("creatorPos"));
    creatorPos.forEach((element) => {
      element.style = "color:black";
    });
    let creatorPictures = Array.from(
      document.getElementsByClassName("creatorPictures")
    );
    creatorPictures.forEach((element) => {
      element.style = "height:130px";
    });
    let creatorPhoto = Array.from(
      document.getElementsByClassName("creatorPhoto")
    );
    creatorPhoto.forEach((element) => {
      element.style = "top:20px";
    });
    let phoneNumber = Array.from(
      document.getElementsByClassName("phoneNumber")
    );
    phoneNumber.forEach((element) => {
      element.style = "none";
    });
    document.getElementById("commentTitle").style = "color:black;";
    document.getElementById("publishComm").style =
      "color:black; font-size:30px; margin-bottom:20px";
    document.getElementById("aboutDesc").style = "color:black;";
    document.getElementById("rMore").style =
      "color:black; border:1px solid black; animation:none";
    document.getElementsByClassName("mSubmitBtn")[0].style =
      "border:none;border-radius:2px";
      document.getElementById('ContactR').style="color:black";
      document.getElementById("mName").style = "color:black";
      document.getElementById("emName").style = "color:black";
      document.getElementById("message").style = "color:black";
      let fLabel=Array.from(document.getElementsByClassName('mNameC'));
      fLabel.forEach(e=>{
          e.style="color:black";
      });
      let phoneLink=document.getElementsByClassName('phoneLink');
      for(let i=0; i<phoneLink.length; i++)
      {
        phoneLink[i].style="color:white";
      }
     } else {
    let phoneLink=document.getElementsByClassName('phoneLink');
    for(let i=0; i<phoneLink.length; i++)
    {
      phoneLink[i].style="color:white";
    }
    document.getElementById("commentTitle").style = "color:white;";
    document.getElementById("aboutDesc").style = "color:white;";
    document.getElementById("slider").style = "background-color:black";
    document.getElementById("body").style = "background-color:black;";
    document.getElementById("container").style = "background-color:black;";
    document.getElementById("typingText").style =
      "color:white; border-right:1px solid white";
    // document.getElementById('header').style="border-bottom:1px solid #bfbfbf;";
    document
      .getElementById("searchIcon")
      .addEventListener("mouseover", function mouseOver() {
        document.getElementById("searchIcon").style = "color:white";
      });
    document
      .getElementById("getStarted")
      .addEventListener("mouseover", function mouseOver() {
        document.getElementById("getStarted").style =
          "color:white; border:1px solid white; background: linear-gradient(to left,black 100%, white 0%); background-position:left;";
      });

    document.getElementById("getStarted").style =
      "background:black; color:white; border:1px solid white;";
    document.getElementById("sun").className = "fa fa-sun-o darkMode";
    document.getElementById("courseinfo1").style = "color:white; border:none";
    document.getElementById("courseinfo2").style = "color:white; border:none";
    document.getElementById("courseinfo3").style = "color:white; border:none";
    document.getElementById("courseinfo4").style = "color:white; border:none";
    document.getElementById("jBtn1").style = "color:white;";
    document.getElementById("jBtn2").style = "color:white;";
    document.getElementById("jBtn3").style = "color:white;";
    document.getElementById("jBtn4").style = "color:white;";
    document.getElementById("mentorinfo1").style = "color:white";
    document.getElementById("mentorinfo2").style = "color:white";
    document.getElementById("mentorinfo3").style = "color:white";
    document.getElementById("mentorinfo4").style = "color:white";
    // document.getElementById('title').style="color:white;";
    document.getElementById("footer").style = "color:white;";
    // document.getElementById('footerTitle').style="color:white;";
    document.getElementsByClassName("fContent").style = "color:white";
    document.getElementById("sEmail").style = "color:white";
    document.getElementById("subText").style = "color:white";
    let title = Array.from(document.getElementsByClassName("titleContainer"));
    title.forEach((element) => {
      element.style = "color:white";
    });
    // console.log(title);

    document.getElementById("subscribeBtn").style = "border:1px solid white;";
    // document.querySelectorAll('fContainer4');
    document.getElementById("footerLogo").src = "./Images/logo.png";
    // document.getElementsByClassName('emailAddr').className="bColor";
    let arr = Array.from(
      document.getElementById("footer").getElementsByTagName("a")
    );
    arr.forEach((element) => {
      element.style = "color:white";
    });
    //    let brr=Array.from(document.getElementById('footer').getElementsByTagName('a'));
    //    console.log(brr);
    let mentorLink = Array.from(
      document.getElementById("mentor").getElementsByTagName("a")
    );
    mentorLink.forEach((element) => {
      element.style = "color:white";
    });
    //    console.log(mentorLink);
    let creatorDesign = Array.from(
      document.getElementsByClassName("creatorDesign")
    );
    creatorDesign.forEach((element) => {
      element.style = "color:white";
    });

    let creatorPos = Array.from(document.getElementsByClassName("creatorPos"));
    creatorPos.forEach((element) => {
      element.style = "color:white";
    });
    let creatorPictures = Array.from(
      document.getElementsByClassName("creatorPictures")
    );
    creatorPictures.forEach((element) => {
      element.style = "height:165px";
    });
    document.getElementById("rzp-button1").style = "border:1px solid white;";
    let scButton = Array.from(document.getElementsByClassName("commentButton"));
    scButton.forEach((e) => {
      e.style.border = "1px solid white";
    });
    document.getElementById("publishComm").style =
      "color:white; font-size:30px; margin-bottom:20px";
    let creatorPhoto = Array.from(
      document.getElementsByClassName("creatorPhoto")
    );
    creatorPhoto.forEach((element) => {
      element.style = "top:0px";
    });
    let phoneNumber = Array.from(
      document.getElementsByClassName("phoneNumber")
    );
    phoneNumber.forEach((element) => {
      element.style = "border:2px solid #6C63FF";
    });
    document.getElementById("rMore").style =
      "color:white; border:1px solid white; animation:none;";
      document.getElementById("mName").style = "color:white";
      document.getElementById("emName").style = "color:white";
      document.getElementsByClassName("mSubmitBtn")[0].style =
        "border:1px solid white;border-radius:1px";
    document.getElementById('ContactR').style="color:white";    
    document.getElementById('message').style="color:white";
    let fLabel=Array.from(document.getElementsByClassName('mNameC'));
    fLabel.forEach(e=>{
        e.style="color:white";
    });    
}
}


/* module for importing other js files */
function include(file) {
  const script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}


// Bot pop-up intro
document.addEventListener("DOMContentLoaded", () => {
  const elemsTap = document.querySelector(".tap-target");
  // eslint-disable-next-line no-undef
  const instancesTap = M.TapTarget.init(elemsTap, {});
  instancesTap.open();
  setTimeout(() => {
    instancesTap.close();
  }, 4000);
});

/* import components */
include('./static/js/components/index.js');

window.addEventListener('load', () => {
  // initialization
  $(document).ready(() => {
    // Bot pop-up intro
    $("div").removeClass("tap-target-origin");

    // drop down menu for close, restart conversation & clear the chats.
    $(".dropdown-trigger").dropdown();

    // initiate the modal for displaying the charts,
    // if you dont have charts, then you comment the below line
    $(".modal").modal();

    // enable this if u have configured the bot to start the conversation.
    // showBotTyping();
    // $("#userInput").prop('disabled', true);

    // if you want the bot to start the conversation
    // customActionTrigger();
  });
  // Toggle the chatbot screen
  $("#profile_div").click(() => {
    $(".profile_div").toggle();
    $(".widget").toggle();
  });

  // clear function to clear the chat contents of the widget.
  $("#clear").click(() => {
    $(".chats").fadeOut("normal", () => {
      $(".chats").html("");
      $(".chats").fadeIn();
    });
  });

  // close function to close the widget.
  $("#close").click(() => {
    $(".profile_div").toggle();
    $(".widget").toggle();
    scrollToBottomOfResults();
  });
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
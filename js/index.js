window.addEventListener("load", function () {
  preloader.style.display = "none";
  html.classList.add("active");
});

var body = document.querySelector("body");
var cursor = document.getElementsByClassName("custom-cursor")[0];
var navLinks = document.querySelectorAll(".nav-item");
var preloader = document.querySelector("#preloader");
var html = document.querySelector("html");

// Vars for typewriter

var dynamicText = document.querySelector(".dynamic-text");
var texts = [
  "Full Stack Web Developer",
  "Javascript Developer",
  "Your Virtual Assistant"
  // "Mobile Hybrid App Developer",
];
var count = 0;
var index = 0;
var currentText = "";
var currentWords = "";
var erase = false;
var stay = 0;

if ("ontouchstart" in document.documentElement) {
  cursor.style.display = "none";
}

window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", function (e) {
  cursor.classList.add("clicked");
});

window.addEventListener("mouseup", function (e) {
  cursor.classList.remove("clicked");
});

// cursor grow on link hover

navLinks.forEach(function (navItem) {
  navItem.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-grow");
  });

  navItem.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-grow");
  });
});

(function typeWriter() {
  if (stay < 10) {
    stay++;
  } else {
    if (index === texts.length) {
      index = 0;
    }

    currentText = texts[index];
    if (erase === false) {
      currentWords = currentText.slice(0, ++count);
    } else {
      currentWords = currentText.slice(0, --count);
      if (currentWords.length === 0) {
        index++;
        erase = false;
      }
    }

    dynamicText.textContent = currentWords;

    if (currentWords.length === currentText.length) {
      erase = true;
      stay = 0;
    }
  }

  setTimeout(typeWriter, 100);
})();

// var curYPos = 0;
// var curXPos = 0;
// var curDown = false;

// $(document).on("mousemove", function (event) {
//   if (curDown === true) {
//     $(document).scrollTop(parseInt($(document).scrollTop() + (curYPos - event.pageY)));
//     $(document).scrollLeft(parseInt($(document).scrollLeft() + (curXPos - event.pageX)));
//   }
// });

// $(document).on("mousedown", function (e) { curDown = true; curYPos = e.pageY; curXPos = e.pageX; e.preventDefault(); });
// $(window).on("mouseup", function (e) { curDown = false; });
// $(window).on("mouseout", function (e) { curDown = false; });

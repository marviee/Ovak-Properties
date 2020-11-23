// Changing Background Image
var imageGotten=document.querySelector('.pic');
imageArray=['ovak1.jpg','ovak2.jpg','ovak3.jpg'];
var imageIndex=0;
function imageChanger(){
  if (imageIndex<2){imageIndex++;
                           imageGotten.src=imageArray[imageIndex];
                          }
  else if (imageIndex=2){imageIndex=0;
                    imageGotten.src=imageArray[imageIndex];
                                     }
}
setInterval(imageChanger,5000);

// Navigation Bar - Mobile viewport
function myFunction10() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
var mybutton = document.getElementById("mytop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

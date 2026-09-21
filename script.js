var roles = [
  "MCA student.",
  "Building with Java, Python, HTML, CSS & JS.",
  "Percussionist & instructor."
];

var roleIndex = 0;   
var charIndex = 0;    
var deleting = false; 

var typingEl = document.getElementById("typingText");

function updateText() {
  var currentPhrase = roles[roleIndex];

  if (deleting == false) {
    charIndex = charIndex + 1;
    typingEl.textContent = currentPhrase.substring(0, charIndex);

    if (charIndex == currentPhrase.length) {
      deleting = true;
    }
  } else {
    charIndex = charIndex - 1;
    typingEl.textContent = currentPhrase.substring(0, charIndex);

    if (charIndex == 0) {
      deleting = false;
      roleIndex = roleIndex + 1;
      if (roleIndex == roles.length) {
        roleIndex = 0;
      }
    }
  }
}

setInterval(updateText, 100);


var navToggle = document.getElementById("navToggle");
var navList = document.getElementById("navList");

navToggle.onclick = function () {
  navList.classList.toggle("open");
};

var navLinks = navList.getElementsByTagName("a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function () {
    navList.classList.remove("open");
  };
}

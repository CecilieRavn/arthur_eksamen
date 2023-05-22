window.addEventListener("DOMContentLoaded", function () {
  var landingSection = document.getElementById("landing");
  var images = [
    "landing.webp",
    "landing4.webp",
    "landing5.webp",
    "landing6cut.webp",
  ];
  var currentIndex = 0;

  function changeBackgroundImage() {
    landingSection.style.animation = "none"; // Fade out the section
    setTimeout(function () {
      landingSection.style.backgroundImage =
        "url(" + images[currentIndex] + ")";
      landingSection.style.animation = "fadeAnimation 10s linear infinite"; // Fade in the section
      currentIndex = (currentIndex + 1) % images.length;
    }, 500);
  }

  // Call the function initially
  changeBackgroundImage();

  // Change background image every 1 seconds (5000 milliseconds)
  setInterval(changeBackgroundImage, 1000);
});

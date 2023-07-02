window.addEventListener('scroll', function() {
    var elements = [
      document.querySelector('h1.inline-text'),
      document.querySelector('h2.inline-text'),
      document.querySelector('.ring1 img'),
      document.querySelector('.ring2 img'),
      document.querySelector('.ring3 img'),
      document.querySelector('.ring4 img'),
      document.querySelector('.ring5 img'),
      document.querySelector('.ring6 img'),
      document.querySelector('.ring7 img'),
      document.querySelector('.ring8 img'),
      document.querySelector('.ring9 img'),
      document.querySelector('.ring10 img'),
      document.querySelector('.ring11 img'),
      document.querySelector('.ring12 img'),
      document.querySelector('.ring13 img'),
      document.querySelector('.ring14 img'),
      document.querySelector('.ring15 img'),
      document.querySelector('.ring16 img'),
      document.querySelector('.ring17 img'),
      document.querySelector('.ring18 img'),
      document.querySelector('.lowerground'),
      document.querySelector('.left-content h4'),
      document.querySelector('.left-content h3'),
      document.querySelector('.left-content p'),
      document.querySelector('.subhed1'),
      document.querySelector('.subhed2'),
      document.querySelector('.subhed3'),
      document.querySelector('.subhed4'),
      document.querySelector('.subhed5'),
      document.querySelector('.hed1'),
      document.querySelector('.hed2'),
      document.querySelector('.hed3'),
      document.querySelector('.hed4'),
      document.querySelector('.hed5'),
      document.querySelector('.texte1'),
      document.querySelector('.texte2'),
      document.querySelector('.texte3'),
      document.querySelector('.texte4'),
      document.querySelector('.texte5')

    ];
  
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var elementRect = element.getBoundingClientRect();
  
      if (elementRect.top > windowHeight || elementRect.bottom < 0) {
        element.classList.add('fade-out');
      } else {
        element.classList.remove('fade-out');
      }
    });
  });
  

  let progress = document.getElementById('progressbar');
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function()
        {
            let progressHeight = (window.pageYOffset/totalHeight) *100;
            progress.style.height = progressHeight +"%";
        }  

var intervalId;
var scrollDistance = 4; // Distance to scroll in each step
var scrollDelay = 8; // Delay between each scroll step (in milliseconds)

// Add event listener to the tour button
document.getElementById("tourButton").addEventListener("click", startTour);

// Scroll to the top of the page when the page is reloaded
window.onload = function() {
  window.scrollTo(0, 0);
};

function startTour() {
  // Scroll to the image filter section
  var imageFilterSection = document.querySelector(".firstground");
  window.scrollTo({ top: imageFilterSection.offsetTop, behavior: "smooth" });

  // Calculate the height of the webpage
  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // Scroll down until the end of the webpage
  var currentPosition = window.pageYOffset;
  intervalId = setInterval(function () {
    currentPosition += scrollDistance;
    if (currentPosition >= documentHeight) {
      // Reached the end, ask the user whether to go back up
      clearInterval(intervalId);
      var shouldGoUp = confirm("You've reached the end of the page. Do you want to go back up?");

      if (shouldGoUp) {
        // Start scrolling back to the top
        intervalId = setInterval(function () {
          currentPosition -= scrollDistance;
          if (currentPosition <= imageFilterSection.offsetTop) {
            // Scrolled back to the image filter section, stop scrolling and enable the button
            clearInterval(intervalId);
            document.getElementById("tourButton").disabled = false;
          }
          window.scrollTo(0, currentPosition);
        }, scrollDelay);
      } else {
        // User chose not to go back up, enable the button
        document.getElementById("tourButton").disabled = false;
      }
    }
    window.scrollTo(0, currentPosition);
  }, scrollDelay);
}


        
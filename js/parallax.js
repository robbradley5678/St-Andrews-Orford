let el = document.getElementsByClassName("parallax");
var imageAspectRatio;

document.addEventListener('DOMContentLoaded', function() {
    for (let i=0; i < el.length; i++) {

        // Get background image aspect ratio
        var backgroundImage = new Image();
        backgroundImage.src = getComputedStyle(el[i])
                              .backgroundImage
                              .replace(/url\((['"])?(.*?)\1\)/gi, '$2');
        
        backgroundImage.onload = function() {
          imageAspectRatio = (this.width)/(this.height);
        };

        window.addEventListener('scroll', function() {
            let scrollOffset = window.scrollY;
            let elementPosition = el[i].offsetTop;

            // Get difference between bg image and container height
            var heightDifference =((el[i].clientWidth)/imageAspectRatio) - el[i].clientHeight;

            // Keep it above zero or it fucks up when window aspect ratio is less than than the image's
            if (heightDifference < 0) {
                heightDifference = 0;
            }

            el[i].style.backgroundPositionY =  ((scrollOffset - elementPosition - heightDifference) *  0.4) + "px";
        })
    }
  });
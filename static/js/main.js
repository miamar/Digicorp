jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    
    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
    
        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
    
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
    
        // Replace image with new SVG
        $img.replaceWith($svg);
    
    }, 'xml');
    
    });


gsap.registerPlugin(ScrollTrigger);
const elements = document.querySelectorAll(".hr-animation-js");

elements.forEach(element => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 90%",
      toggleClass: "active", 
    },
    scaleX: 0,
    duration: 0.4,
    transformOrigin: "left center",
    ease: "none",
  });
});


// Get all the columns within the .soluzioni (civil-design), .servizi-home (softwares-html) container
const columns = document.querySelectorAll('.soluzioni .col-12, .soluzioni .col-lg-6, .servizi-home .col-12, .servizi-home .col-lg-6');
    
// Function to calculate the height of the tallest column
const setEqualHeight = () => {
  let maxHeight = 0;
    
// Loop through each column and find the tallest one
columns.forEach((column) => {
  const columnHeight = column.offsetHeight;
  if (columnHeight > maxHeight) {
    maxHeight = columnHeight;
  }
});
    
// Set the height of all columns to the height of the tallest column
columns.forEach((column) => {
  column.style.height = `${maxHeight}px`;
});
};
    
// Call the setEqualHeight function initially and on window resize
window.addEventListener('load', setEqualHeight);
window.addEventListener('resize', setEqualHeight);



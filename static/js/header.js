var app = new Vue({
    el: 'header',
    data: {
      openDropdown: ''
    },
    methods: {
      toggleDropdown(dropdown) {
        this.openDropdown = this.openDropdown === dropdown ? '' : dropdown;
        if (this.openDropdown) {
          // Attach a click event listener to the document
          document.addEventListener('click', this.closeDropdown);
        } else {
          // Remove the click event listener from the document
          document.removeEventListener('click', this.closeDropdown);
        }
      },
      isDropdownOpen(dropdown) {
        return this.openDropdown === dropdown;
      },
      closeDropdown(event) {
        // Check if the click event target is within the header element
        if (!event.target.closest('header')) {
          this.openDropdown = '';
          // Remove the click event listener from the document
          document.removeEventListener('click', this.closeDropdown);
        }
      }
    }
  });

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

$(document).ready(function() {
  $(".navbar .nav-link").focus(function() {
    $(".navbar").addClass("navbar-focused");
  });

  $(".navbar .nav-link").blur(function() {
    $(".navbar").removeClass("navbar-focused");
  });
});

// Add scroll event handler
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $(".navbar").addClass("navbar-scrolled");
  } else {
    $(".navbar").removeClass("navbar-scrolled");
  }
});


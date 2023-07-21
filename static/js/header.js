var app = new Vue({
  el: '#app',
  data: {
    state: 'close'
  }
});

var headerApp = new Vue({
  el: 'header',
  data: {
    openDropdown: ''
  },
  methods: {
    toggleDropdown(dropdown) {
      this.openDropdown = this.openDropdown === dropdown ? '' : dropdown;
      if (this.openDropdown) {
        document.addEventListener('click', this.closeDropdown);
      } else {
        document.removeEventListener('click', this.closeDropdown);
      }
    },
    isDropdownOpen(dropdown) {
      return this.openDropdown === dropdown;
    },
    closeDropdown(event) {
      if (!event.target.closest('header')) {
        this.openDropdown = '';
        document.removeEventListener('click', this.closeDropdown);
      }
    }
  }
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "container") {
    x.className += " responsive";
  } else {
    x.className = "container";
  }
}

document.addEventListener('click', function(event) {
  var container = document.getElementById("myTopnav");
  if (!container.contains(event.target)) {
    container.classList.remove("responsive");
  }
});



$(document).ready(function() {
  $(".nav-link").click(function() {
    $(".nav-link").removeClass("selected"); // Remove selected class from all .nav-link elements
    $(this).addClass("selected"); // Add selected class to the clicked .nav-link

    // Check if any .nav-link has the class "selected"
    if ($(".nav-link").hasClass("selected")) {
      $(".navbar").addClass("navbar-focused"); // Add the class "navbar-focused" to the navbar
    } else {
      $(".navbar").removeClass("navbar-focused"); // Remove the class "navbar-focused" from the navbar
    }

    // Remove the .selected class from all .nav-link elements when dropdonw-meny has no class .show
    if (!$(".dropdown-menu").hasClass("show")) {
      $(".nav-link").removeClass("selected");
    }
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



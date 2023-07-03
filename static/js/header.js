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


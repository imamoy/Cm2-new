(function ($)
  { "use strict"

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
  menu.slicknav({
    prependTo: ".mobile_menu",
    closedSymbol: '+',
    openedSymbol:'-'
  });
};


  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7.  Custom Sticky Menu  */
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 245) {
    $(".header-sticky").removeClass("sticky-bar");
  } else {
    $(".header-sticky").addClass("sticky-bar");
  }
});

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
  } else {
      $(".header-sticky").addClass("sticky");
  }
});


/* sildeBar scroll */
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="icon-up-open-mini"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/* 9. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
var wow = new WOW({
  boxClass: 'wow',
  offset: 10
});
wow.init();


$('#solutions').each(function(){
  $('header').addClass('white');
});

$("a.anchor").on('click', function (event) {

  if (this.hash !== "") {
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      window.location.hash = hash;
    });
  } // End if
});

})(jQuery);

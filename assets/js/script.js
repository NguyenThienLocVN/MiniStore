(function($) {

    "use strict";

    var searchPopup = function() {
      // open search box
      $('#header-nav').on('click', '.search-button', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $('#header-nav').on('click', '.btn-close-search', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });
      
      $(".search-popup-trigger").on("click", function(b) {
          b.preventDefault();
          $(".search-popup").addClass("is-visible"),
          setTimeout(function() {
              $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
      $(".search-popup").on("click", function(b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
          $(this).removeClass("is-visible"))
      }),
      $(document).keyup(function(b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
      })
    }

    var initProductQty = function(){

      $('.product-qty').each(function(){

        var $el_product = $(this);
        var quantity = 0;

        $el_product.find('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            if(quantity>0){
              $el_product.find('#quantity').val(quantity - 1);
            }
        });

      });

    }

    jQuery(document).ready(function($) {
      // Scroll top
      var duration = 500;
      $(window).scroll(function(){
        if($(this).scrollTop() < 300) {
          $('#scroll-top').fadeOut(duration);
        } else {
          $('#scroll-top').fadeIn(duration);
        }
      });

      $('#scroll-top').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 1000);
          return false;
      })
    }); // End of a document ready

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    const swiper2 = new Swiper('.container-slide', {
      // Optional parameters
      loop: true,
      spaceBetween: 30,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

})(jQuery);
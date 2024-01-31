jQuery( document ).ready(function( $ ) {

	"use strict";
    
        $(function() {
            $( "#tabs" ).tabs();
        });
        // Page loading animation
        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });

        $('.testimonials_slider').owlCarousel({
          autoplay:true,
          slideSpeed:3000,
          items:3,
          nav:true,
          navText:["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-left'></i>"],
          margin:30,
          dots:true,
          loop:true,
          responsive: {
            320:{
              items:1
            },
            767: {
              items:2
            },
            600: {
              items:3
            },
            1000: {
              items:4
            }
          }
        })

        $('.owl-carousel').owlCarousel({
          loop:true,
          autoplay:true,
          margin:10,
          nav:true,
          autoplayTimeout: 3000,
          responsive:{
            0:{
              items:1
            },
            600:{
              items:3
            },
            1000:{
              items:4
            }
          }
        })
		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })

    $(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	
		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");
	
			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	
			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

    $('.reviews-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 300,
        smartSpeed: 500,
        responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
            margin: 100,
          },
          1280:{
            items:2,
            margin: 100,
          }
        }
    });

    // Banner Carousel
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1500,
    })

    // REVIEWS NAVIGATION
    function ReviewsNavResize(){
      $(".navbar").scrollspy({ offset: -94 });

      var ReviewsOwlItem = $('.reviews-carousel .owl-item').width();

      $('.reviews-carousel .owl-nav').css({'width' : (ReviewsOwlItem) + 'px'});
    }

    $(window).on("resize", ReviewsNavResize);
    $(document).on("ready", ReviewsNavResize);

 
});



// $("#signup").click(function() {
//   $("#first").fadeOut("fast", function() {
//   $("#second").fadeIn("fast");
//   });
//   });
  
//   $("#signin").click(function() {
//   $("#second").fadeOut("fast", function() {
//   $("#first").fadeIn("fast");
//   });
//   });
  
  
    
          //  $(function() {
          //    $("form[name='login']").validate({
          //      rules: {
                 
          //        email: {
          //          required: true,
          //          email: true
          //        },
          //        password: {
          //          required: true,
                   
          //        }
          //      },
          //       messages: {
          //        email: "Please enter a valid email address",
                
          //        password: {
          //          required: "Please enter password",
                  
          //        }
                 
          //      },
          //      submitHandler: function(form) {
          //        form.submit();
          //      }
          //    });
          //  });
           
  
  
  // $(function() {
    
  //   $("form[name='registration']").validate({
  //     rules: {
  //       firstname: "required",
  //       lastname: "required",
  //       email: {
  //         required: true,
  //         email: true
  //       },
  //       password: {
  //         required: true,
  //         minlength: 5
  //       }
  //     },
      
  //     messages: {
  //       firstname: "Please enter your firstname",
  //       lastname: "Please enter your lastname",
  //       password: {
  //         required: "Please provide a password",
  //         minlength: "Your password must be at least 5 characters long"
  //       },
  //       email: "Please enter a valid email address"
  //     },
    
  //     submitHandler: function(form) {
  //       form.submit();
  //     }
  //   });
  // });
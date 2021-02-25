export function common() {
  (function ($) {
    $(window).on('load', function() {
      if($.cookie('window')) {
      } else {
        $('.cookie').show();
      }
    });

    $(document).ready(function () {

      $(document).on('click', '.cookie__close', function () {
        $('.cookie').hide();
      });
      $(document).on('click', '.cookie__confirm', function () {
        $('.cookie').hide();
        $.cookie('window', 'true', { expires: 7 });
      });

      $('.stellarnav').stellarNav({
        menuLabel: '',
        breakpoint: 1200,
        showArrows: false
      });

      $('.stellarnav .dd-toggle').html('<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L4 3.08579L6.29289 0.792893C6.68342 0.402369 7.31658 0.402369 7.70711 0.792893C8.09763 1.18342 8.09763 1.81658 7.70711 2.20711L4.70711 5.20711C4.31658 5.59763 3.68342 5.59763 3.29289 5.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z"/></svg>');

      if($(window).innerWidth() <= 1200) {
        $('.reviews .tab').slick({
          dots: true,
          arrows: false,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        });
        $('.reviews .tab').slick('refresh');

        $(document).on('click', '.stellarnav .menu-toggle', function () {
          $('.header').toggleClass('white');
          $(this).toggleClass('active');
        });

        $('.stellarnav .dd-toggle').html('<svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.49643 0.134138C1.01934 -0.141997 0.409284 0.0218742 0.133835 0.500154C-0.141614 0.978435 0.0218505 1.59001 0.498941 1.86615L7.43796 5.82785C7.60397 5.94045 7.80045 6.00029 8.00002 6C8.1996 6.00029 8.39608 5.94045 8.56208 5.82785L15.5011 1.86615C15.9782 1.59001 16.1417 0.978435 15.8662 0.500154C15.5908 0.0218742 14.9807 -0.141997 14.5036 0.134138L8.00002 3.84382L1.49643 0.134138Z"/></svg>');
      
      } else {
        $(".mainblock .slider").on("beforeChange", function (){
          let slide = $(this).find('.slick-current');
          if(slide.hasClass('blue')) {
            $(this).removeClass('blue').addClass('orange');
          } else if(slide.hasClass('orange')) {
            $(this).removeClass('orange').addClass('blue');
          }
        });
      }

      $(document).on('click', '.anchor', function (e) {
        var fixed_offset = 50;
        $('html, body').stop().animate({
          scrollTop: $(this.hash).offset().top - fixed_offset
        }, 500);
        e.preventDefault();
      });

      $('.popup-link').magnificPopup({
        type: 'inline',
        focus: 'input',
        showCloseBtn: true,
        alignTop: true,
        fixedContentPos: true,
        showCloseBtn: false
      });

      $(document).on('click', 'sup', function() {
        let noteNumber = $(this).data('popup');
        $('.popup-note').each(function() {
          if($(this).data('popup') == noteNumber) {
            $('.popup-note').removeClass('active');
            $(this).addClass('active');
          }
        });
      });
      $(document).on('click', '.popup-note__close', function() {
        $('.popup-note').removeClass('active');
      });

      $('.popup-videolink').magnificPopup({
        type: 'inline',
        inline: {
          markup:	'<div class="popup video">'+
                  '<div class="close-popup"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683417 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"/></svg></div>'+
                  '<div class="caption">'+
                  '<div class="caption__title caption__title_small">Аллервэй — новый путь <br> от аллергии</div>'+
                  '</div>'+
                  '<div class="mfp-iframe-scaler">'+
                    '<iframe width="560" height="315" src="https://www.youtube.com/embed/yCq_LHn4tDc?loop=1&amp;;playlist=yCq_LHn4tDc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
                  '</div>'+
                  '</div>'
        }
      });

      $(document).on('click', '.close-popup', function () {
        $.magnificPopup.close();
      });

      $('.mainblock .slider').slick({
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: $('.mainblock .arrow_prev'),
        nextArrow: $('.mainblock .arrow_next'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

      // Табы в отзывах на главной
      $(document).on('click', '.reviews .tab-links a', function (e) {
        let tab = $(this).data('tab');
        e.preventDefault();
        if($(this).hasClass('active')) {
        } else {
          $('.reviews .tab-links a').removeClass('active');
          $(this).addClass('active');
        }
        $('.reviews .tab').each(function () {
          if($(this).data('tab') == tab) {
            $('.reviews .tab').removeClass('active');
            $(this).addClass('active');
          }
        });

        if($(window).innerWidth() <= 1200) {
          $('.reviews .tab').slick('refresh');
        }
      });

      $('.allergy-tips .slider').slick({
        dots: true,
        arrows: true,
        prevArrow: $('.allergy-tips .arrow_prev'),
        nextArrow: $('.allergy-tips .arrow_next'),
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: false
            }
          }
        ]
      });

    });
  })(jQuery);
}

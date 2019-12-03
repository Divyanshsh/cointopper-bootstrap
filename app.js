$(document).ready(function(){
    $('.container-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:  true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 300,
        dots: true,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 775,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 680,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              }
        ]
    });
  });
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
              breakpoint: 1020,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 580,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
            //   {
            //     breakpoint: 550,
            //     settings: {
            //       slidesToShow: 2,
            //       slidesToScroll: 1,
            //     }
            //   }
        ]
    });
  });

  $(document).ready(function(){
    $('.blog-posts').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:  true,
      speed: 300,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }); 
  });
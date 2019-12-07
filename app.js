$(document).ready(function () {
  $('.container-1').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
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

$(document).ready(function () {
  $('.blog-posts').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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



let tableRow1 = document.querySelector('.table-row1');
let tableRow2 = document.querySelector('.table-row2');
let tableRow3 = document.querySelector('.table-row3');
let tableRow4 = document.querySelector('.table-row4');
let tableRow5 = document.querySelector('.table-row5');
tableRow1.addEventListener('mouseover', function () {
  function displayHover() {
    let lastAnchor1 = document.querySelector('.last-anchor1');
    let star1 = document.querySelector('.star1');
    let camera1 = document.querySelector('.camera1');
    lastAnchor1.style.display = 'none';
    star1.style.display = 'inline-block';
    camera1.style.display = 'inline-block';
  }
  displayHover();
});

tableRow2.addEventListener('mouseover', function () {
  function displayHover() {
    let lastAnchor2 = document.querySelector('.last-anchor2');
    let star2 = document.querySelector('.star2');
    let camera2 = document.querySelector('.camera2');
    lastAnchor2.style.display = 'none';
    star2.style.display = 'inline-block';
    camera2.style.display = 'inline-block';
  }
  displayHover();
});

tableRow3.addEventListener('mouseover', function () {
  function displayHover() {
    let lastAnchor3 = document.querySelector('.last-anchor3');
    let star3 = document.querySelector('.star3');
    let camera3 = document.querySelector('.camera3');
    lastAnchor3.style.display = 'none';
    star3.style.display = 'inline-block';
    camera3.style.display = 'inline-block';
  }
  displayHover();
});

tableRow4.addEventListener('mouseover', function () {
  function displayHover() {
    let lastAnchor4 = document.querySelector('.last-anchor4');
    let star4 = document.querySelector('.star4');
    let camera4 = document.querySelector('.camera4');
    lastAnchor4.style.display = 'none';
    star4.style.display = 'inline-block';
    camera4.style.display = 'inline-block';
  }
  displayHover();
});

tableRow5.addEventListener('mouseover', function () {
  function displayHover() {
    let lastAnchor5 = document.querySelector('.last-anchor5');
    let star5 = document.querySelector('.star5');
    let camera5 = document.querySelector('.camera5');
    lastAnchor5.style.display = 'none';
    star5.style.display = 'inline-block';
    camera5.style.display = 'inline-block';
  }
  displayHover();
});


tableRow1.addEventListener('mouseout', function () {
  function displayHover() {
    let lastAnchor1 = document.querySelector('.last-anchor1');
    let star1 = document.querySelector('.star1');
    let camera1 = document.querySelector('.camera1');
    lastAnchor1.style.display = 'block';
    star1.style.display = 'none';
    camera1.style.display = 'none';
  }
  displayHover();
});

tableRow2.addEventListener('mouseout', function () {
  function displayHover() {
    let lastAnchor2 = document.querySelector('.last-anchor2');
    let star2 = document.querySelector('.star2');
    let camera2 = document.querySelector('.camera2');
    lastAnchor2.style.display = 'block';
    star2.style.display = 'none';
    camera2.style.display = 'none';
  }
  displayHover();
});

tableRow3.addEventListener('mouseout', function () {
  function displayHover() {
    let lastAnchor3 = document.querySelector('.last-anchor3');
    let star3 = document.querySelector('.star3');
    let camera3 = document.querySelector('.camera3');
    lastAnchor3.style.display = 'block';
    star3.style.display = 'none';
    camera3.style.display = 'none';
  }
  displayHover();
});

tableRow4.addEventListener('mouseout', function () {
  function displayHover() {
    let lastAnchor4 = document.querySelector('.last-anchor4');
    let star4 = document.querySelector('.star4');
    let camera4 = document.querySelector('.camera4');
    lastAnchor4.style.display = 'block';
    star4.style.display = 'none';
    camera4.style.display = 'none';
  }
  displayHover();
});

tableRow5.addEventListener('mouseout', function () {
  function displayHover() {
    let lastAnchor5 = document.querySelector('.last-anchor5');
    let star5 = document.querySelector('.star5');
    let camera5 = document.querySelector('.camera5');
    lastAnchor5.style.display = 'block';
    star5.style.display = 'none';
    camera5.style.display = 'none';
  }
  displayHover();
});

// Sorting


// let names1 = document.querySelector('.names1');
// let subNames1 = document.querySelector('.subNames1');
// let names2 = document.querySelector('.names2');
// let subNames2 = document.querySelector('.subNames2');
// let names3 = document.querySelector('.names3');
// let subNames3 = document.querySelector('.subNames3');
// let names4 = document.querySelector('.names4');
// let subNames4 = document.querySelector('.subNames4');
// let names5 = document.querySelector('.names5');
// let subNames5 = document.querySelector('.subNames5');
// let bitcoin = document.querySelector('.Bitcoin');
// let ethereum = document.querySelector('.Ethereum');
// let ripple = document.querySelector('.Ripple');
// let tether = document.querySelector('.Tether');
// let bitcoinCash = document.querySelector('.Bitcoin-cash');
// let rowAnchor5 = document.querySelector('.row-anchor5');
let angleUpArrow = document.querySelector('.angle-up-arrow');
angleUpArrow.addEventListener('click', function () {
  let arrowDown = document.querySelector('.angle-down-arrow');
    angleUpArrow.style.display = 'none';
    arrowDown.style.display = 'inline-block';
});

let angleDownArrow = document.querySelector('.angle-down-arrow');
angleDownArrow.addEventListener('click', function () {
  let angleUpArrow = document.querySelector('.angle-up-arrow');
  angleDownArrow.style.display = 'none';
  angleUpArrow.style.display = 'inline-block'; 
});

$(document).ready(function () {
  $('#myTable').DataTable();
});




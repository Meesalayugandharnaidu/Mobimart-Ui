/* 
 custom js
nav-menu collapse
*/
const navItems = document.querySelectorAll(".nav-item");
const navMenu = document.querySelector("#navMenu");
navItems.forEach((li) => {
  li.addEventListener("click", () => {
    let ww = window.innerWidth;
    if (ww < 992) {
      let bsToggle = new bootstrap.Collapse(navMenu);
      bsToggle.toggle();
    }
  });
});

/*
owl carouesl
*/
$(document).ready(function () {
  $("#slide-show .owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
  });
});
/*
new phones
*/

$(document).ready(function () {
  $("#new-mobiles .owl-carousel").owlCarousel({
    items: 5,
    dots: false,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },

      992: {
        items: 5,
      },
    },
  });
});
$(document).ready(function () {
  $("#ear-buds .owl-carousel").owlCarousel({
    items: 5,
    dots: false,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },

      992: {
        items: 5,
      },
    },
  });
});

$(document).ready(function () {
  $("#top-sale .owl-carousel").owlCarousel({
    dots: false,
    autoplay: false,
    loop: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },

      992: {
        items: 5,
      },
    },
  });

  /*
isotope
*/
  let grid = $("#special-price .grid").isotope({
    // options

    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });

  // filters

  $("#filters").on("click", "button", function () {
    let filterValue = $(this).attr("data-filter");
    grid.isotope({ filter: filterValue });
    removeActiveFilter();
    $(this).addClass("active-filter");
  });
});
// remove active-filter

function removeActiveFilter() {
  const buttons = document.querySelectorAll("#filters button");
  buttons.forEach((btn) => {
    btn.classList.remove("active-filter");
  });
}

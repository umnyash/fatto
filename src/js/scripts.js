$(function () {
  let screenWidth = screen.width;

  /*
   *  Util functions
   */

  function checkBreakWidth(breakWidth) {
    return window.matchMedia(`(max-width: ${breakWidth}px)`).matches;
  }

  function setSwiper(sliderElement, listElement, itemElements, options) {
    sliderElement.classList.add('swiper');
    listElement.classList.add('swiper-wrapper');
    itemElements.forEach((item) => item.classList.add('swiper-slide'));

    return new Swiper(sliderElement, options);
  }

  function deleteSwiper(swiper, sliderElement, listElement, itemElements) {
    swiper.destroy(true, true);

    sliderElement.classList.remove('swiper');
    listElement.classList.remove('swiper-wrapper');
    itemElements.forEach((item) => item.classList.remove('swiper-slide'));
  }

  /*
   *  Search dropdown
   */

  $(".search__form input").on("focus", function () {
    $(this).parents(".search").find(".search__dropdown").fadeIn();
  });

  $(".search__form input").on("blur", function () {
    $(this).parents(".search").find(".search__dropdown").fadeOut();
  });

  /*
   *  Mobile footer menu
   */

  if (screenWidth < 768) {
    $(".f-menu__title").on("click", function (e) {
      e.preventDefault();
      $(this)
        .toggleClass("open")
        .siblings(".f-menu__list")
        .slideToggle()
        .parent(".f-menu__col")
        .siblings(".f-menu__col")
        .find(".f-menu__list")
        .slideUp()
        .siblings(".f-menu__title")
        .removeClass("open");
    });
  }

  /*
   *  Dropdown
   */

  if (screenWidth > 1365) {
    $(".menu__item").hover(
      function () {
        $(this).find(".dropdown").slideDown();
      },
      function () {
        $(this).find(".dropdown").slideUp();
      },
      200
    );
  } else {
    $(".menu__item").on("click", function (e) {
      if ($(this).children(".dropdown").length > 0) {
        e.preventDefault();
        $(this)
          .siblings(".menu__item")
          .removeClass("active")
          .find(".dropdown")
          .fadeOut();
        $(this).toggleClass("active").find(".dropdown").slideToggle();
      }
    });
  }

  /*
   *  Mobile menu
   */

  $(".burger").on("click", function () {
    $(this).toggleClass("open");
    $(".mobile-menu").slideToggle();
  });

  $(".mobile-nav__link").on("click", function (e) {
    if ($(this).siblings(".mob-dropdown").length > 0) {
      e.preventDefault();
      if ($(this).hasClass("open")) {
        $(this)
          .removeClass("open")
          .parent(".mobile-nav__item")
          .siblings(".mobile-nav__item")
          .slideDown();
        $(this).siblings(".mob-dropdown").slideUp();
      } else {
        $(this)
          .addClass("open")
          .parent(".mobile-nav__item")
          .siblings(".mobile-nav__item")
          .slideUp();
        $(this).siblings(".mob-dropdown").slideDown();
      }
    }
  });

  /*
   *  Cookies
   */

  $(".cookies__btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".cookies").fadeOut();
  });

  /*
   *  Modal
   */

  $(".js-modal-show").on("click", function () {
    let currentModal = $(this).attr("href");
    $(currentModal).fadeIn(500);
    $("body").css("overflow", "hidden");
    setTimeout(function () {
      $(currentModal).find(".modal__inner").addClass("open");
    }, 200);
  });

  $(".js-modal-close").on("click", function (e) {
    e.preventDefault();
    $(".js-modal").fadeOut().find(".modal__inner").removeClass("open");
    $("body").css("overflow", "visible");
  });

  $("body").on("click", ".js-modal", function (e) {
    if (e.target.classList.contains("js-modal")) {
      $(".js-modal").fadeOut().find(".modal__inner").removeClass("open");
      $("body").css("overflow", "visible");
    }
    e.stopPropagation();
  });

  /*
   *   Регистрация и вход
   */

  $(".js-login").on("click", function (e) {
    let link = $(this).attr("href");
    e.preventDefault();

    $(this).parents(".modal").hide();
    $(link).fadeIn();
  });

  $(".js-registr").on("click", function (e) {
    let link = $(this).attr("href");
    e.preventDefault();

    $(this).parents(".modal").hide();
    $(link).fadeIn();
  });

  if ($("#designer").is(":checked")) {
    $(".modal__info").css("display", "block");
  }

  $("#designer").on("click", function () {
    if ($("#designer").is(":checked")) {
      $(".modal__info").slideDown();
    } else {
      $(".modal__info").slideUp();
    }
  });

  /*
   *   Маска телефона
   */

  $(".phone").mask("+7 (999) 999-99-99");

  /*
   *  Tabs
   */

  $(".js-tab-link:first-child").addClass("active");
  $(".js-tab:first-child").addClass("active");

  $(".js-tab-link").on("click", function (e) {
    e.preventDefault();
    let link = $(this).attr("href");

    $(this).addClass("active").siblings(".js-tab-link").removeClass("active");
    $(link)
      .addClass("active")
      .fadeIn()
      .siblings(".js-tab")
      .hide()
      .removeClass("active");
  });

  if (screenWidth < 1024) {
    $(".js-tab-link").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).parents(".cattabs__menu").toggleClass("open");
      }
    });
  }

  /*
   *   Faq
   */

  $(".faq__header").on("click", function () {
    $(this)
      .toggleClass("open")
      .siblings(".faq__text")
      .slideToggle()
      .parents(".faq__item")
      .siblings(".faq__item")
      .find(".faq__header")
      .removeClass("open")
      .siblings(".faq__text")
      .slideUp();
    $(this)
      .parents(".faq__col")
      .siblings(".faq__col")
      .find(".faq__header")
      .removeClass("open")
      .siblings(".faq__text")
      .slideUp();
  });

  /*
   * Back to Top
   */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  /*
   * Account
   */

  if (screenWidth < 1024) {
    $(".acc-nav__link:first-child").on("click", function (e) {
      e.preventDefault();
      $(this)
        .parent(".acc-nav")
        .hide()
        .siblings(".account__name")
        .hide()
        .siblings(".account__exit")
        .hide()
        .parent(".account")
        .siblings(".breadcrumbs")
        .hide();
      $(this)
        .parents(".account")
        .find(".mydata")
        .fadeIn()
        .css("display", "flex");
    });

    $(".mydata .account-link").on("click", function (e) {
      e.preventDefault();
      $(this)
        .parent(".mydata")
        .hide()
        .siblings(".account__name")
        .fadeIn()
        .siblings(".acc-nav")
        .fadeIn()
        .siblings(".account__exit")
        .fadeIn()
        .parent(".account")
        .siblings(".breadcrumbs")
        .fadeIn();
    });
  }

  /*
   *  Plus - minus
   */

  $(".js-minus").on("click", function () {
    let $input = $(this).parent().find("input");
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".js-plus").on("click", function () {
    let $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  /*
   *  Basket
   */

  $(".js-basket-del").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".card-basket").slideUp();
    setTimeout(function () {
      $(this).parents(".card-basket").remove();
    }, 400);
  });

  /*
   *  Basket promocode
   */

  $(".promocode__toggle").on("click", function () {
    $(this).toggleClass("open").siblings(".promocode__hidden").slideToggle();
  });

  /*
   *  Плавный скрол
   */

  $(".js-anchor").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html,body").animate({ scrollTop: destination }, 1100);
    return false;
  });

  /*
   *  Mobile basket pop-up
   */

  if (screenWidth < 575) {
    const checkout = $("#checkout");
    let checkoutOffset = 0;

    if (checkout.length > 0) {
      checkoutOffset = $("#checkout").offset().top - 100;
    }
    let basketPopup = $(".basket-popup");

    $(window).scroll(function () {
      let fromTop = $(window).scrollTop();

      if (fromTop > 200 && fromTop < checkoutOffset) {
        basketPopup.addClass("open");
      } else {
        basketPopup.removeClass("open");
      }
    });
  }

  /*
   *  Mobile tocart pop-up
   */

  if (screenWidth < 575) {
    const product = $(".product");
    let productOffset = 0;

    if (product.length > 0) {
      productOffset = $(".prod-btns").offset().top + 150;
    }

    let tocartPopup = $(".tocart-popup");

    $(window).scroll(function () {
      let fromTop = $(window).scrollTop();

      if (fromTop > productOffset) {
        tocartPopup.addClass("open");
      } else {
        tocartPopup.removeClass("open");
      }
    });
  }

  /*
   *  Mobile my orders
   */

  $(".order-mobile").on("click", function () {
    let orderGrid = $(this).siblings(".order__grid");
    let heightOrder = orderGrid.height() + 190;
    orderGrid
      .fadeIn()
      .parents(".order")
      .siblings(".order")
      .hide()
      .parents(".acc-wrap")
      .height(heightOrder);
  });

  $(".order__back").on("click", function () {
    $(this)
      .parents(".order__grid")
      .fadeOut()
      .parents(".order")
      .siblings(".order")
      .show();
    let heightAccount = $(this).parents(".account").height() + 120;
    $(this).parents(".acc-wrap").height(heightAccount);
  });

  /*
   *  Swiper
   */

  const firstSwiper = new Swiper(".first-swiper .swiper", {
    loop: true,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".first-swiper .swiper-pagination",
      clickable: true,
    },
  });

  const lookedSwiper = new Swiper(".looked-swiper .swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 800,
    navigation: {
      nextEl: ".looked-swiper .swiper-next",
      prevEl: ".looked-swiper .swiper-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
        },
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
        },
      },
      1660: {
        slidesPerView: 4,
        spaceBetween: 50,
        autoplay: {
          delay: 5000,
        },
      },
    },
  });

  const filterSwiper = new Swiper(".js-swiper-filter .swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 800,
    navigation: {
      nextEl: ".js-swiper-filter .swiper-next",
      prevEl: ".js-swiper-filter .swiper-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
        },
        scrollbar: {
          el: ".js-swiper-filter .swiper-scrollbar",
          hide: false,
        },
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
        },
        scrollbar: {
          el: ".js-swiper-filter .swiper-scrollbar",
          hide: false,
        },
      },
      1660: {
        slidesPerView: 4,
        spaceBetween: 50,
        autoplay: {
          delay: 5000,
        },
        scrollbar: {
          el: ".js-swiper-filter .swiper-scrollbar",
          hide: false,
        },
      },
    },
  });

  const similarSwiper = new Swiper(".goods-swiper--similar .swiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 800,
    navigation: {
      nextEl: ".goods-swiper--similar .swiper-next",
      prevEl: ".goods-swiper--similar .swiper-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
        },
        scrollbar: {
          el: ".goods-swiper--similar .swiper-scrollbar",
          hide: false,
        },
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
        },
        scrollbar: {
          el: ".goods-swiper--similar .swiper-scrollbar",
          hide: false,
        },
      },
      1660: {
        slidesPerView: 4,
        spaceBetween: 50,
        autoplay: {
          delay: 5000,
        },
        scrollbar: {
          el: ".goods-swiper--similar .swiper-scrollbar",
          hide: false,
        },
      },
    },
  });

  const productsSwiper = new Swiper(".products .swiper", {
    loop: false,
    slidesPerView: "auto",
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 5,
    speed: 800,
    breakpoints: {
      1024: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      1660: {
        slidesPerView: "auto",
        spaceBetween: 50,
      },
    },
  });

  productsSwiper.on("touchStart", function () {
    $(".products .swiper").css("transform", "scale(0.93)");
  });

  productsSwiper.on("touchEnd", function () {
    $(".products .swiper").css("transform", "scale(1)");
  });

  let activeSlide = "1";

  const collectionsSwiper = new Swiper(".collections-swiper > .swiper", {
    //effect: "fade",
    loop: true,
    slidesPerView: 1,
    speed: 800,
    allowTouchMove: false,
    navigation: {
      nextEl: ".collections-swiper__nav .swiper-next",
      prevEl: ".collections-swiper__nav .swiper-prev",
    },
    on: {
      slideChange: function () {
        activeSlide = this.realIndex + 1;
        $(".slide-count__active").text(activeSlide);
      },
    },
  });

  const slidesCount =
    $(".collections-swiper .swiper-slide").length -
    $(".collections-swiper .swiper-slide-duplicate").length;

  $(".slide-count__total").text(slidesCount);

  /*
   *  Swipers only on mobile width
   */

  const mobileSliders = [];
  const collectionGallerySliderElements = document.querySelectorAll('.collections .coll-slide__right');
  const cattabSliderElements = document.querySelectorAll('.cattabs__tab');

  collectionGallerySliderElements.forEach((sliderElement) => {
    mobileSliders.push({
      swiper: null,
      sliderElement,
      listElement: sliderElement.querySelector('.coll-slide__gallery'),
      slideElements: sliderElement.querySelectorAll('.card'),
    });
  });

  cattabSliderElements.forEach((sliderElement) => {
    mobileSliders.push({
      swiper: null,
      sliderElement,
      listElement: sliderElement.querySelector('.cattabs__grid'),
      slideElements: sliderElement.querySelectorAll('.card, .cattabs__all'),
    });
  });

  if (mobileSliders.length) {
    const toggleMobileSwipersState = () => {
      if (checkBreakWidth(767)) {
        mobileSliders.forEach((slider) => {
          if(slider.swiper?.initialized) {
            return;
          }

          slider.swiper = setSwiper(
            slider.sliderElement,
            slider.listElement,
            slider.slideElements,
            {
              spaceBetween: 5,
              slidesPerView: 'auto',
              speed: 800,
            }
          );
        });
      } else {
        mobileSliders.forEach((slider) => {
          if (!slider.swiper || slider.swiper?.destroyed) {
            return;
          }

          deleteSwiper(
            slider.swiper,
            slider.sliderElement,
            slider.listElement,
            slider.slideElements
          );
        });
      }
    };

    toggleMobileSwipersState();
    window.addEventListener('resize', toggleMobileSwipersState);
  }

  /*
   *  Filter swiper
   */

  $(".goods-nav__link").on("click", function (e) {
    e.preventDefault();
    const dataTarget = $(this).data("target");
    const slides = $(this).parents(".goods").find(".swiper-slide");

    console.log(dataTarget);
    console.log(slides);

    if (screenWidth > 1023) {
      if (!$(this).hasClass("active")) {
        $(this)
          .addClass("active")
          .siblings(".goods-nav__link")
          .removeClass("active");

        if (dataTarget === "swiper-all") {
          slides.show();
          filterSwiper.update();
        } else {
          slides.hide();
          $(dataTarget).show();
          filterSwiper.update();
        }
      }
    } else {
      if ($(this).hasClass("active")) {
        $(this).toggleClass("open").siblings(".goods-nav__link").slideToggle();
      } else {
        $(this)
          .addClass("active")
          .siblings(".goods-nav__link")
          .removeClass("open active")
          .slideUp();

        if (dataTarget === "swiper-all") {
          slides.show();
          filterSwiper.update();
        } else {
          slides.hide();
          $(dataTarget).show();
          filterSwiper.update();
        }
      }
    }
  });

  /*
   *  Video
   */

  const players = Plyr.setup(".js-player");

  /*
   * Filter favorites
   */

  const favGrid = $(".favorites__grid");

  if (favGrid.length > 0) {
    var mixer = mixitup(favGrid);
  }

  /*
   * Sort
   */

  $(".sort__item a").on("click", function (e) {
    e.preventDefault();
    const sortItem = $(this).parent(".sort__item");

    if (sortItem.hasClass("current")) {
      sortItem.toggleClass("open").siblings(".sort__item").slideToggle();
    } else {
      sortItem
        .addClass("current")
        .removeClass("open")
        .siblings(".sort__item")
        .slideUp()
        .removeClass("current open");
    }
  });

  /*
   * Filter
   */

  $(".filter-results__del").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".filter-results__item").remove();
  });

  $(".filter__reset").on("click", function (e) {
    e.preventDefault();
    $(".filter-results").remove();
  });

  $(".filter-modal__name").on("click", function () {
    $(this).toggleClass("open").siblings(".filter-modal__hidden").slideToggle();
  });

  /*
   * Search results nav
   */

  if (screenWidth < 576) {
    $(".search-res__link.active").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("open").siblings(".search-res__link").slideToggle();
    });
  }

  /*
   * Product gallery
   */

  $('[data-fancybox="product-gallery"]').fancybox({
    loop: true,
    infobar: false,
    arrows: false,
    toolbar: true,
    buttons: ["close"],
    thumbs: {
      autoStart: true,
    },
  });

  /*
   * Product description
   */

  $(".prod-desc__more").on("click", function (e) {
    e.preventDefault();
    let wrapText = $(this).siblings(".prod-desc__text");
    let heightText = wrapText.find("p").height();
    $(this).slideUp();
    wrapText.height(heightText);
  });

  /*
   * Modal basket delete
   */

  $(".js-modal-basket-del").on("click", function (e) {
    e.preventDefault();
    $(this)
      .parents(".card-basket")
      .hide()
      .siblings(".modal-basket__remove")
      .fadeIn()
      .css("display", "grid");
  });

  $(".modal-basket__remove a").on("click", function (e) {
    e.preventDefault();
    $(this)
      .parents(".modal-basket__remove")
      .hide()
      .siblings(".card-basket")
      .fadeIn();
  });

  /*
   * Price range slider
   */

  $("#range-price").slider({
    range: true,
    min: 0,
    max: 200000,
    values: [32000, 130000],
    slide: function (event, ui) {
      $(".range-price__min span").text(ui.values[0].toLocaleString());
      $(".range-price__max span").text(ui.values[1].toLocaleString());
    },
  });

  $(".range-price__min span").text(
    $("#range-price").slider("values", 0).toLocaleString()
  );
  $(".range-price__max span").text(
    $("#range-price").slider("values", 1).toLocaleString()
  );

  $(".ui-slider-handle").draggable();
});

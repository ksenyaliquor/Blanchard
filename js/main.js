ymaps.ready(init);
function init() {
    let myMap = new ymaps.Map("map", {
        center:[55.762373, 37.607898],
        zoom: 16
    });
}

//SWIPER
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
		delay: 6000,
	},
  });


let swiperHero = new Swiper(".gallery__swiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
	  type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
});

let swiperEvents = new Swiper(".events__swiper", {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,

  navigation: {
    prevEl: '.events__swiper-next',
    nextEl: '.events__swiper-prev',
  }
});


// ACCORDION

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
  onOpen: function(currentElement) {
    console.log(currentElement);
  }
});
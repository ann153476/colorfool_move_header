import Swiper, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

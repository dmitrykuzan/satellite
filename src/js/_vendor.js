// Библиотека для фокуса (доступности)
import "./vendor/focus-visible.js";

import "../../node_modules/swiper/swiper-bundle";
import Swiper, {  Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper();

// Подключение плавной прокрутки к якорям (подключать в случае если плавная прокрутка нужна в Safari)
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');


// Кастомный скролл
// import Simplebar from "simplebar";

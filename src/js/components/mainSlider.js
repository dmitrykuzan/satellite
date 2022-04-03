export const mainSlider = () => {
  let mainSlider = new Swiper(".first__slider", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".first__pagination",
      clickable: true,
    },
  });
};

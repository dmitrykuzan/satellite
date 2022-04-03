"use strict";

// Connecting vendors (plugins)
import "./_vendor";
// Functions
import { mobileCheck } from "./functions/mobile-check";
// import { burger } from "./functions/burger";

// Components
// import { formValidation } from "./components/formValidation";
import { mainSlider } from "./components/mainSlider";


window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  // burger();
  // formValidation();
  mainSlider();
});

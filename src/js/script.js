"use strict";

// Connecting vendors (plugins)
import "./_vendor";
// Functions
import { mobileCheck } from "./functions/mobile-check";
import { burger } from "./functions/burger";

// Components
// import { formValidation } from "./components/formValidation";
import { accordion } from "./functions/accordion";


window.addEventListener("DOMContentLoaded", () => {
  // mobileCheck();
  accordion(".faq__body", "faq__question", ".faq__wrapper", "faq__wrapper--active")
  burger();
  // formValidation();
});

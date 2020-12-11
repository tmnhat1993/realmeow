import Home from "./modules/home";

import LazyLoadImage from "./modules/lazy-load";

// Run Lazy Load Image Function First
LazyLoadImage();

$(document).ready(() => {
    if ($("#realmeow-page").length > 0) {
        let home = new Home();
    }
});
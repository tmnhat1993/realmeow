// Libraries

// Ultils
import { pageListener } from "./utils";

// Behavior
import Common from "./_Common";

export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Page Listener
        window.realme7TeasingListener = new pageListener();
        window.currentGameAvailable = 1;

        // Ipad devices and below
        window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
        $(window).on("resize", () => {
            window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
        });

        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {}

    /* ===================================
     *  METHODS
     * =================================== */
}
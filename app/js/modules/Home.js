// Libraries
import ScrollOut from "scroll-out";
import TweenMax from "gsap";

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
        window.realmeowListener = new pageListener();
        window.currentGameAvailable = 1;

        // Ipad devices and below
        window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
        $(window).on("resize", () => {
            window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
        });

        // TweenMax
        window.TweenMax = TweenMax;

        // Common Behavior
        let common = new Common();

        // Page Sections Behavior


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.ScrollOutSetup();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    ScrollOutSetup() {
        ScrollOut({
            onShown: (el) => {
                // use the web animation API
                let elementID = $(el).attr("id");
                realmeowListener.emit(`${elementID}-anim`);
            },
            onHidden: (el) => {
                let elementID = $(el).attr("id");
                realmeowListener.emit(`${elementID}-hide`);
            },
            threshold: 0.225,
        });
    }
}
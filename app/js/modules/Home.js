// Libraries
import ScrollOut from "scroll-out";
import TweenMax from "gsap";

// Ultils
import { pageListener } from "./utils";

// Behavior
import Common from "./_Common";

// Sections
import Banner from "./_Banner";
import Intro from "./_Intro";
import CoverListing from "./_CoverListing";
import TVC from "./_TVC";
import WhoCall from "./_WhoCallRealmeow";
import Slogan from "./_Slogan";
import Power from "./_Power";
import Legend from "./_TheLegend";
import Equipment from "./_Equipments";


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
        let banner = new Banner();
        let intro = new Intro();
        let coverListing = new CoverListing();
        let tvc = new TVC();
        let whoCall = new WhoCall();
        let slogan = new Slogan();
        let power = new Power();
        let legend = new Legend();
        let equipment = new Equipment();

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
            threshold: 0.375,
        });
    }
}
export default class Intro {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements Variables
        this.$IntroSection = $("#realmeow-intro-banner");

        // Background
        this.$Intro_Background = this.$IntroSection.find(".background-holder");

        // Title
        this.$Intro_Title = this.$IntroSection.find(".main-content");

        // Content
        this.$Intro_Content = this.$IntroSection.find(".disclaimer-holder");

        // Elements
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Init STate
        this.IntroInit();

        // Event that trigger the section effect
        realmeowListener.on("realmeow-intro-banner-anim", () => {
            this.IntroTimeline.play();
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    IntroInit() {
        // Init State
        TweenMax.set(
            [this.$Intro_Background, this.$Intro_Title, this.$Intro_Content], { alpha: 0 }
        );

        // Timeline Animation Build
        this.IntroTimeline = new TimelineMax({ paused: true });

        //   Start
        this.IntroTimeline.add("anim-start");
        this.IntroTimeline.fromTo(
            this.$Intro_Content,
            1, {
                alpha: 0,
                y: window.innerWidth * 0.033,
            }, {
                alpha: 1,
                y: 0,
                ease: Power3.easeOut,
            },
            "anim-start"
        );
        this.IntroTimeline.fromTo(
            this.$Intro_Background,
            1, {
                alpha: 0,
                scale: 1.2,
            }, {
                alpha: 1,
                scale: 1,
                ease: Power3.easeOut,
            },
            "anim-start+=0.4"
        );
        this.IntroTimeline.add("background-show");

        // Title
        this.IntroTimeline.fromTo(
            this.$Intro_Title,
            0.5, { y: window.innerWidth * 0.01, alpha: 0 }, { y: 0, alpha: 1 },
            "background-show-=0.3"
        );
    }
}
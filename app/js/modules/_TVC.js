export default class TVC {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements Variables
        this.$TVCSection = $("#realmeow-tvc-banner");

        // Background
        this.$TVCBg = this.$TVCSection.find('.background-holder');

        // Play Button
        this.$TVCPlayBtn = this.$TVCSection.find('.play-btn-holder');

        // Bind Events
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Banner Effect Setup
        this.TVCInit();

        /* Event that trigger the section */
        realmeowListener.on("realmeow-tvc-banner-anim", () => {
            this.TVCTimeline.play();
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    TVCInit() {
        // Init State
        TweenMax.set([
            this.$TVCBg,
            this.$TVCPlayBtn
        ], { alpha: 0 });

        // Apear Animation Timeline Build
        this.TVCTimeline = new TimelineMax({ paused: true });

        this.TVCTimeline.add('anim-start');
        this.TVCTimeline.to(this.$TVCBg, 0.5, { alpha: 1 }, 'anim-start');
        this.TVCTimeline.fromTo(this.$TVCPlayBtn, 0.3, { alpha: 0, y: window.innerWidth * 0.01 }, { alpha: 1, y: 0 }, 'anim-start+=0.2')
    }
}
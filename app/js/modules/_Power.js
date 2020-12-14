export default class Power {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements Variables
        this.$PowerSection = $("#realmeow-superpower");

        // Background
        this.$Power_Background = this.$PowerSection.find(".background");

        // Title
        this.$Power_Title = this.$PowerSection.find(".section-title");

        // Wire Frame
        this.$Power_WireFrame = this.$PowerSection.find(".wire-element-holder");

        // Power Listing
        this.$Power_Listing = this.$PowerSection.find('.power-listing-holder');
        this.$Power_Listing_Title = this.$Power_Listing.find('.power-title');
        this.$Power_Listing_Desc = this.$Power_Listing.find('.power-desc');
        this.$Power_Listing_Decor = this.$Power_Listing.find('.decor');

        // Elements
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Init STate
        this.PowerInit();

        // Event that trigger the section effect
        realmeowListener.on("realmeow-superpower-anim", () => {
            this.PowerTimeline.play();
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    PowerInit() {
        // Init State
        TweenMax.set([
            this.$Power_Background,
            this.$Power_Title,
            this.$Power_Listing_Title,
            this.$Power_Listing_Desc,
            this.$Power_Listing_Decor,
            this.$Power_WireFrame
        ], { alpha: 0 });

        // Animation Timeline Build
        this.PowerTimeline = new TimelineMax({ paused: true });

        // Start
        this.PowerTimeline.add('anim-start');
        this.PowerTimeline.to(this.$Power_Background, 0.7, { alpha: 1 }, 'anim-start');
        this.PowerTimeline.fromTo(this.$Power_Title, 0.4, {
            y: window.innerWidth * 0.02,
            alpha: 0,
        }, {
            y: 0,
            alpha: 1
        }, 'anim-start+=0.2');
        this.PowerTimeline.add('bg-show');

        this.PowerTimeline.to(this.$Power_WireFrame, 0.3, { alpha: 1 }, 'bg-show');
        this.PowerTimeline.fromTo(this.$Power_Listing_Title, 0.4, {
            alpha: 0,
            y: window.innerWidth * 0.005
        }, {
            alpha: 1,
            y: 0,
            ease: Power2.easeOut,
        }, 'bg-show');
        this.PowerTimeline.to([
            this.$Power_Listing_Desc,
            this.$Power_Listing_Decor,
        ], 0.4, { alpha: 1 }, "-=0.05")
    }
}
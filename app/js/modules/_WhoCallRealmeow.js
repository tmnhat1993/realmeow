export default class TVC {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements Variables
        this.$WhoCallSection = $("#who-call-realmeow");

        // Background
        this.$WhoCall_Bg = this.$WhoCallSection.find('.background-holder');

        // Main Content
        this.$WhoCall_Content = this.$WhoCallSection.find('.main-content');
        this.$WhoCall_Content_Children = this.$WhoCall_Content.find('> *');

        // Profile
        this.$WhoCall_Profile = this.$WhoCallSection.find('.realmeow-profile');
        this.$WhoCall_Profile_Children = this.$WhoCall_Profile.find('> *');

        // Bind Events
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Banner Effect Setup
        this.WhoCallInit();

        /* Event that trigger the section */
        realmeowListener.on("who-call-realmeow-anim", () => {
            this.WhoCallTopTimeline.play();
        });

        /* Event that trigger the section */
        realmeowListener.on("realmeow-profile-anim", () => {
            this.WhoCallProfileTimeline.play();
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    WhoCallInit() {
        // Init State
        TweenMax.set([
            this.$WhoCall_Bg,
            this.$WhoCall_Content_Children,
            this.$WhoCall_Profile_Children
        ], { alpha: 0 });

        // Apear Animation Timeline Build
        this.WhoCallTopTimeline = new TimelineMax({ paused: true });

        // Start
        this.WhoCallTopTimeline.add('start');

        // Background Show
        this.WhoCallTopTimeline.to(this.$WhoCall_Bg, 0.5, { alpha: 1 }, 'anim-start');

        // Content Stagger
        this.WhoCallTopTimeline.staggerFromTo(this.$WhoCall_Content_Children, 1, {
            alpha: 0,
            y: window.innerWidth * 0.02
        }, {
            alpha: 1,
            y: 0,
            ease: Power2.easeOut,
        }, 0.2, 'anim-start+=0.25');


        // Profile Timeline Animation Build
        this.WhoCallProfileTimeline = new TimelineMax({ paused: true });
        this.WhoCallProfileTimeline.staggerFromTo(this.$WhoCall_Profile_Children, 1, {
            alpha: 0,
            y: window.innerWidth * 0.02
        }, {
            alpha: 1,
            y: 0,
            ease: Power2.easeOut,
        }, 0.2);
    }
}
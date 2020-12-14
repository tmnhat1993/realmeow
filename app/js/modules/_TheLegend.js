export default class Legend {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements Variables
        this.$LegendSection = $("#realmeow-the-legend");

        // Title
        this.$Legend_Title = $('.title-holder');

        // 
        this.$Legend_Intro = $('.legend-intro-layout');

        // Elements
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Init STate
        this.LegendInit();

        // Event that trigger the section effect
        realmeowListener.on("realmeow-the-legend-anim", () => {
            this.LegendTimeline.play();
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    LegendInit() {
        // Init State
        TweenMax.set([
            this.$Legend_Title,
            this.$Legend_Intro,
        ], { alpha: 0 });

        // Timeline Build
        this.LegendTimeline = new TimelineMax({ paused: true });
        this.LegendTimeline.add('anim-start');
        this.LegendTimeline.staggerFromTo([
            this.$Legend_Title,
            this.$Legend_Intro,
        ], 0.5, {
            y: window.innerWidth * 0.01,
            alpha: 0,
        }, {
            alpha: 1,
            y: 0
        }, 0.25, 'anim-start');
    }
}
export default class Slogan {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        this.PARALLAX_DISTANCE = 10 * window.innerWidth / 1920;
        this.currentAngle = 1;

        // Elements Variables
        this.$SloganSection = $("#realmeow-slogan-banner");

        // Logo
        this.$Slogan_Logo = this.$SloganSection.find('.realmeow-logo');

        // Rotating Effect
        this.$Slogan_Rotating = this.$SloganSection.find('.realmeow-rotating-effect');
        this.$Slogan_Rotating_Children = this.$Slogan_Rotating.find('>*');

        // Slogan Listing
        this.$Slogan_Listing = this.$SloganSection.find('.slogan-listing');
        this.$Slogan_Listing_Children = this.$Slogan_Listing.find(">*");
        this.$Slogan_Listing_Shadow = this.$Slogan_Listing.find(".shadow-txt");

        // Bind Events
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Banner Effect Setup
        this.SloganInit();

        realmeowListener.on('realmeow-slogan-banner-anim', () => {
            this.SloganShowTimeline.play();
        });

        realmeowListener.on('realmeow-slogan-banner-hide', () => {
            clearInterval(this.RotateInterval);
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SloganInit() {
        // Init State
        TweenMax.set([
            this.$Slogan_Logo,
            this.$Slogan_Rotating,
            this.$Slogan_Listing_Children,
            this.$Slogan_Listing_Shadow
        ], { alpha: 0 });

        // Timeline Build
        this.SloganShowTimeline = new TimelineMax({
            paused: true,
            onComplete: () => {
                this.SetupRotating();
                this.DoShadowParallax();
            }
        });

        // Start
        this.SloganShowTimeline.add('anim-start');
        this.SloganShowTimeline.fromTo(this.$Slogan_Logo, 0.7, {
            y: -window.innerWidth * 0.02,
            scale: 0.7,
            alpha: 0,
        }, {
            y: 0,
            scale: 1,
            alpha: 1,
            ease: Power2.easeOut,
        }, 'anim-start');

        this.SloganShowTimeline.fromTo(this.$Slogan_Rotating, 0.6, {
            alpha: 0,
            x: -window.innerWidth * 0.05
        }, {
            alpha: 1,
            x: 0
        }, 'anim-start+=0.4');

        this.SloganShowTimeline.staggerFromTo(this.$Slogan_Listing_Children, 0.5, {
            alpha: 0,
            x: window.innerWidth * 0.025
        }, {
            alpha: 1,
            x: 0
        }, 0.15, 'anim-start+=0.6')

    }

    SetupRotating() {
        if (this.RotateInterval) {
            clearInterval(this.RotateInterval);
        };

        this.RotateInterval = setInterval(() => {
            if (this.currentAngle == 8) {
                this.currentAngle = 1
            } else {
                this.currentAngle += 1;
            }

            this.$Slogan_Rotating_Children.removeClass('active');
            $(`.realmeow-rotating-effect .image-${this.currentAngle}`).addClass('active');
        }, 300);
    }

    DoShadowParallax() {
        TweenMax.to(this.$Slogan_Listing_Shadow, 0.5, {
            opacity: 1,
            x: 0,
            y: 0,
            onComplete: () => {
                if (window.innerWidth > 767) {
                    this.$SloganSection.on('mousemove', (e) => {
                        let coreData = {
                            offsetX: e.clientX,
                            offsetY: e.clientY,
                            core: { x: this.$SloganSection.width() / 2, y: this.$SloganSection.height() / 2 },
                        };

                        let calculatedData = {
                            xMove: this.PARALLAX_DISTANCE * (coreData.offsetX - coreData.core.x) / coreData.core.x,
                            yMove: this.PARALLAX_DISTANCE * (coreData.offsetY - coreData.core.y) / coreData.core.y
                        }

                        TweenMax.to(this.$Slogan_Listing_Shadow, 0.4, { x: -calculatedData.xMove, y: -calculatedData.yMove, ease: Power2.easeOut });
                    });
                }
            }
        });
    }
}
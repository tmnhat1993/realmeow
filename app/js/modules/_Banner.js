import { Power4 } from "gsap";

export default class Banner {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements Variables
        this.$BannerSection = $("#realmeow-banner");

        // Background
        this.$BannerBg = this.$BannerSection.find(".background-holder");
        this.$BannerBg_Logo = this.$BannerBg.find(".bg-logo");
        this.$BannerBg_Left = this.$BannerBg.find(".bg-left");
        this.$BannerBg_Right = this.$BannerBg.find(".bg-right");
        this.$BannerBg_SideRight = this.$BannerBg.find(".side-decor-right");
        this.$BannerBg_Mobile = this.$BannerBg.find("bg-mobile");

        // Effect
        this.$Banner_Effect = this.$BannerSection.find(".effect-holder");
        this.$Banner_Effect_Shadow1 = this.$Banner_Effect.find(".shadow-1");
        this.$Banner_Effect_Shadow2 = this.$Banner_Effect.find(".shadow-2");
        this.$Banner_Effect_MainImg = this.$Banner_Effect.find(".main-img");

        //   Decor
        this.$Banner_Decor = $(".decoration-holder");
        this.$Banner_Decor_Star1 = this.$Banner_Decor.find(".star-1");
        this.$Banner_Decor_Star2 = this.$Banner_Decor.find(".star-2");

        // Bind Events
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Banner Effect Setup
        this.InitBanner();

        /* Event that trigger the section */
        realmeowListener.on("realmeow-banner-anim", () => {
            this.BannerTimeline.play();
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    InitBanner() {
        // Init State
        TweenMax.set(
            [
                this.$Banner_Effect_Shadow1,
                this.$Banner_Effect_Shadow2,
                this.$Banner_Effect_MainImg,
                this.$BannerBg_Left,
                this.$BannerBg_Logo,
                this.$BannerBg_Right,
                this.$BannerBg_Mobile,
                this.$Banner_Decor_Star1,
                this.$Banner_Decor_Star2,
                this.$BannerBg_SideRight,
            ], { alpha: 0 }
        );

        // Animation Timeline Build
        this.BannerTimeline = new TimelineMax({ paused: true });

        // Start
        this.BannerTimeline.add("anim-start");
        this.BannerTimeline.to(
            this.$Banner_Effect_Shadow1,
            0.5, { alpha: 1 },
            "anim-start+=0.3"
        );
        this.BannerTimeline.fromTo(
            this.$BannerBg_SideRight,
            0.5, {
                y: window.innerWidth * 0.1,
                alpha: 0,
            }, {
                y: 0,
                alpha: 1,
            },
            "anim-start+=0.3"
        );
        this.BannerTimeline.add("side-right-show");

        // Shadow 2
        this.BannerTimeline.to([this.$Banner_Effect_Shadow2], 0.6, {
            alpha: 1,
        });
        this.BannerTimeline.add("shadow-2-show");

        //   Main Image and its background
        this.BannerTimeline.to(
            [this.$Banner_Effect_MainImg, this.$BannerBg_Right, this.$BannerBg_Left],
            0.6, {
                alpha: 1,
                ease: Power2.easeIn,
            },
            "shadow-2-show+=0.25"
        );

        this.BannerTimeline.to(this.$BannerBg_SideRight, 0.4, { alpha: 0.05 }, 'shadow-2-show+=0.6');

        this.BannerTimeline.fromTo(
            this.$BannerBg_Logo,
            0.7, {
                y: -window.innerWidth * 0.06,
                scale: 0.7,
                alpha: 0,
            }, {
                y: 0,
                scale: 1,
                alpha: 1,
                ease: Power2.easeIn,
            },
            "shadow-2-show+=0.25"
        );
        this.BannerTimeline.add("cat-show");

        // Decoration
        this.BannerTimeline.fromTo(
            this.$Banner_Decor_Star1,
            0.4, {
                alpha: 0,
                scale: 0.2,
                rotation: 90,
            }, {
                alpha: 1,
                scale: 1,
                rotation: 0,
            },
            "cat-show-=0.1"
        );
        this.BannerTimeline.fromTo(
            this.$Banner_Decor_Star2,
            0.3, {
                alpha: 0,
                scale: 0.4,
                rotation: -90,
            }, {
                alpha: 1,
                scale: 1,
                rotation: 0,
            },
            "cat-show"
        );
    }
}
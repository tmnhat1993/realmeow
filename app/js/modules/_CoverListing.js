import { Power2, Power3, TimelineMax, TweenMax } from "gsap";

export default class CoverListing {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Elements Variables
    this.$CoverSection = $("#realmeow-cover-listing");

    // Background
    this.$Cover_Background = this.$CoverSection.find(".background-holder");

    // Cover List
    this.$Cover_List = this.$CoverSection.find(".cover-listing-holder");

    // Elements
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    // Init STate
    this.CoverListInit();

    // Event that trigger the section effect
    realmeowListener.on("realmeow-cover-listing-anim", () => {
      this.CoverTimeline.play();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  IntroInit() {
    // Init State
    TweenMax.set([this.$Cover_Background, this.$Cover_List], { alpha: 0 });

    // Timeline Animation Build
    this.CoverTimeline = new TimelineMax({ paused: true });

    //   Start
    this.CoverTimeline.add("anim-start");
  }
}

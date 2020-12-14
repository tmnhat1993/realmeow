export default class Equipment {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements Variables
        this.$Equipment_Section = $("#realmeow-equipment");

        // Title
        this.$Equipment_Title = this.$Equipment_Section.find('.section-title');

        // Equip List
        this.$Equipment_List = this.$Equipment_Section.find('.equipment-list')
        this.$Equipment_List_Children = this.$Equipment_List.find('.equipment-item');

        // Elements
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        // Init STate
        this.EquipmentInit();

        // Event that trigger the section effect
        realmeowListener.on("realmeow-equipment-anim", () => {
            this.EquipmentTimeline.play();
        });
    }

    /* ===================================
     *  METHODS
     * =================================== */
    EquipmentInit() {
        // Init State
        TweenMax.set([
            this.$Equipment_Title,
            this.$Equipment_List_Children
        ], { alpha: 0 });

        // Animation Timeline Build
        this.EquipmentTimeline = new TimelineMax({ paused: true });

        // Start
        this.EquipmentTimeline.add('anim-start');
        this.EquipmentTimeline.fromTo(this.$Equipment_Title, 0.5, {
            y: window.innerWidth * 0.01,
            alpha: 0,
        }, {
            y: 0,
            alpha: 1,
        }, 'anim-start');
        this.EquipmentTimeline.staggerFromTo(this.$Equipment_List_Children, 0.5, {
            y: window.innerWidth * 0.01,
            alpha: 0,
        }, {
            y: 0,
            alpha: 1,
        }, 0.25, 'anim-start+=0.25');
    }
}
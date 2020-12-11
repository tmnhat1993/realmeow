import YouTubePlayer from "youtube-player";

export default class Common {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Elements
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        /* Video Modal Setup */
        if ($("#video-modal").length > 0) {
            this.SetupVideoPlayer();
        }
    }

    /* ===================================
     *  METHODS
     * =================================== */
    /* Modal Video Control */
    SetupVideoPlayer() {
        this.playerYT = YouTubePlayer("video-modal-video", {
            videoId: "8NwFFVPjTZI", // Default Clip
            playerVars: {
                disablekb: 1,
                fs: 0,
                modestbranding: 1,
                rel: 0,
                controls: 0,
                playlist: "8NwFFVPjTZI",
                loop: 1,
            },
        });

        // console.log(this.playerYT);

        $(".play-modal-video").on("click", (e) => {
            this.videoCode = "8NwFFVPjTZI"; // Default Youtube Video ID

            if ($(e.target).parents(".play-modal-video").length > 0) {
                this.videoCode = $(e.target).parents(".play-modal-video").data("video-id");
            } else {
                this.videoCode = $(e.target).data("video-id");
            }
            this.PlayModalClip(this.videoCode);
        });

        $(".close-video-modal").on("click", (e) => {
            this.CloseModalClip();
        });
    }

    PlayModalClip(clipID = "") {
        $("body").addClass("show-modal");
        $(".video-modal").addClass("active");
        this.playerYT.cueVideoById(clipID);
        this.playerYT.unMute();
        this.playerYT.playVideo();

        this.playerYT.addEventListener("onStateChange", (e) => {
            if (e.data == 0) {
                this.CloseModalClip();
            }
        });

        // console.log(clipID);
    }

    CloseModalClip() {
        this.playerYT.mute();
        $("body").removeClass("show-modal");
        $(".video-modal").removeClass("active");
        setTimeout(() => {
            this.playerYT.stopVideo();
        }, 200);
    }
}
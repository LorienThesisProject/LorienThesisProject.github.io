/*global $*/
/* Must be included below jquery */
$(document).ready(function() {
    // Constants
    const secondsToWaitBeforeShowingHearTheirStories = 0;

    var video = document.getElementById("myVideo");
    let videoHasBeenPlayed = false;

    function playPause() {
        var el = document.getElementById("playButton");
        videoHasBeenPlayed = true;
        if (videoHasBeenPlayed) {
            setTimeout(function() {
                $(".media-overlay-contents").css('visibility', 'visible');
            }, secondsToWaitBeforeShowingHearTheirStories * 1000);
        }

        if (video.paused) {
            video.play();
            $(".media-play-overlay").css('visibility', 'hidden');
        }
        else {
            video.pause();
            $(".media-play-overlay").css('visibility', 'visible');
        }
    }

    // Event listeners
    $('.media-overlay-contents').click(() => {
        document.querySelector('.navbar').scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    });

    $('#playButton').click(playPause);

    $('#myVideo').click(playPause);
});

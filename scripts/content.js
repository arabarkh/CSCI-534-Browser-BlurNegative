console.log("Content script loaded and running");

function blurYouTubeElements() {
    // Blur all <video> elements
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.style.filter = "blur(10px)";
        console.log("Video blurred");
    });

    // Blur YouTube thumbnails by selecting the <a> or <img> elements
    const thumbnails = document.querySelectorAll('ytd-thumbnail a, ytd-thumbnail img');
    thumbnails.forEach(thumb => {
        thumb.style.filter = "blur(10px)";
        console.log("Thumbnail blurred");
    });
}

blurYouTubeElements();
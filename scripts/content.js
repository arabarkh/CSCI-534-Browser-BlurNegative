console.log("Content script loaded and running");

function blurElements() {

    // Blur all video elements
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.style.filter = "blur(10px)";
        console.log("Video blurred");
    });

    // Blur YouTube video thumbnails
    const thumbnails = document.querySelectorAll('ytd-thumbnail #thumbnail, ytd-thumbnail img');
    thumbnails.forEach(thumb => {
        thumb.style.filter = "blur(10px)";
        console.log("Thumbnail blurred");
    });

    // Blur YouTube Shorts
    const shorts = document.querySelectorAll('ytd-reel-item-renderer video, ytd-reel-item-renderer img, ytd-reel-item-renderer #thumbnail');
    console.log(`Found ${shorts.length} shorts`);
    shorts.forEach(short => {
        short.style.filter = "blur(10px)";
        console.log("Short blurred");
    });
}

const observer = new MutationObserver(blurElements);
observer.observe(document.body, { childList: true, subtree: true });

blurElements();
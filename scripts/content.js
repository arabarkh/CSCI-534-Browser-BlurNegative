function blurElements() {

    // Type of filters
    const elements = document.querySelectorAll(
        'video, iframe[src*="youtube"], iframe[src*="vimeo"], object[type*="video"], embed[type*="video"], div[class*="video"], img[class*="thumbnail"], a[href*="video"], img[src*="video"], img[alt*="video"], picture source[type*="video"], figure img, ytd-thumbnail #thumbnail, ytd-thumbnail img, .video-stream.html5-main-video, #description, .video-description, .metadata-snippet, #info, .yt-simple-endpoint.style-scope.yt-formatted-string'
    );

    // Store + log links
    let videoLinks = [];
    elements.forEach(element => {
        let link = null;

        if (element.tagName === 'A' && element.href) {
            link = element.href;
        }

        else if (element.src) {
            link = element.src;
        }

        else if (element.closest('a')) {
            link = element.closest('a').href;
        }

        //console.log('Element blurred:', element);
        if (link && videoLinks.includes(link)) {
            console.log('Link:', link);
            videoLinks.push(link);
        }

    });

    // Apply the filters
    elements.forEach(element => {
        element.style.setProperty('filter', 'blur(10px)', 'important');
        //console.log("Element blurred:", element);
    });
}

const observer = new MutationObserver(blurElements);
observer.observe(document.body, { childList: true, subtree: true });

blurElements();

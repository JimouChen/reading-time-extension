function estimateReadingTime(text) {
    const wordsPerMinute = 200; // 平均阅读速度
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

function getTextContent() {
    let bodyText = document.body.innerText || "";
    return bodyText;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getReadingTime") {
        const text = getTextContent();
        const readingTime = estimateReadingTime(text);
        sendResponse({readingTime});
    }
});

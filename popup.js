document.getElementById('estimateBtn').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "getReadingTime"}, (response) => {
            document.getElementById('result').innerText = `估算的阅读时间: ${response.readingTime} 分钟`;
        });
    });
});

const encodedUrl = "aHR0cHM6Ly9naXRodWIuY29tL0ppbW91Q2hlbi9yZWFkaW5nLXRpbWUtZXh0ZW5zaW9u";
const decodedUrl = atob(encodedUrl);
document.getElementById('aboutBtn').addEventListener('click', () => {
    window.open(decodedUrl, '_blank');
});


// 获取并显示版本号
fetch(chrome.runtime.getURL('manifest.json')).then(response => response.json()).then(manifest => {
    document.getElementById('version').innerText = `Version: ${manifest.version}`;
});
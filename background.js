chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'add_towtruck.js'
    }, function() {
        chrome.tabs.executeScript({
            file: 'run_towtruck.js'
        });
    });
});

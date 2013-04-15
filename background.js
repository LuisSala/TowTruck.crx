/*global chrome: false */
"use strict";

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'add_towtruck.js'
    }, function() {
        chrome.tabs.executeScript({
            file: 'run_towtruck.js'
        });
    });
});


chrome.tabs.onUpdated.addListener(function(tab_id, change_info, tab) {
    if (tab.url.indexOf('#&towtruck') !== -1) {
        chrome.tabs.executeScript({
            file: 'add_towtruck.js'
        });
    }
});

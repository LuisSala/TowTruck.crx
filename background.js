var js_code = "  \
    var s= document.createElement('script');  \
    s.type = 'text/javascript';  \
    s.src = 'https://towtruck.mozillalabs.com/towtruck.js';  \
    document.body.appendChild(s);  \
";

var run_code = "  \
    var s= document.createElement('script');  \
    s.type = 'text/javascript';  \
    s.async = true;  \
    s.innerText = 'TowTruck();';  \
    document.body.appendChild(s);  \
";

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: js_code
    });
    console.log(run_code);
    setTimeout(function() {
        chrome.tabs.executeScript({
            code: run_code
        });
    }, 1000);
});

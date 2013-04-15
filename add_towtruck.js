(function() {
    if (document.getElementById('towtruck.crx') !== null) {
        return;
    }

    var i, scripts = document.getElementsByTagName('script');
    for (i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf('towtruck.js') !== -1) {
            return;
        }
    }

    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = 'towtruck.crx';
    s.src = 'https://towtruck.mozillalabs.com/towtruck.js';
    document.body.appendChild(s);
}());

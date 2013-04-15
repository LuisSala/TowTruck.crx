var s = document.createElement('script');
s.type = 'text/javascript';
// don't understand why onload can't work on the original script element
// use this as a workaround
s.innerHTML = "  \
    document.getElementById('towtruck.crx').onload = function() {  \
        TowTruck();  \
    };  \
";
document.body.appendChild(s);

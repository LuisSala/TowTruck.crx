var s = document.createElement('script');
s.id = 'run_towtruck.crx';
s.type = 'text/javascript';
// don't understand why onload can't work on the original script element
// use this as a workaround
s.innerHTML = "  \
    if (typeof TowTruck === 'function') {  \
        TowTruck();  \
    } else {  \
        document.getElementById('towtruck.crx').onload = function() {  \
            TowTruck();  \
        };  \
    }  \
    /* http://goo.gl/PQyui */  \
    var ele = document.getElementById('run_towtruck.crx');  \
    ele.parentNode.removeChild(ele);  \
";
document.body.appendChild(s);

/*
 * Copyright (C) 2013 Bo Zhu http://zhuzhu.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/*jslint browser: true */
"use strict";

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

// ==UserScript==
// @name         룰렛
// @namespace    http://tampermonkey.net/
// @version      0.0
// @description  try to take over the world!
// @author       You
// @match        https://m.live.livepbt.com*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    window.resizeTo(1616, 968);
    document.querySelector("#popupModal").style.width = 1600;
    document.querySelector("#popupModal").style.height = 900;

    if (window.innerWidth != 1616)
    {
        location.reload();
    }
    // Your code here...
})();

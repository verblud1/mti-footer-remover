// ==UserScript==
// @name         Remove LMS Footer
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Удаление футера на LMS MTI
// @match        *://lms.mti.moscow/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

// Мгновенно скрываем через CSS
GM_addStyle('#footer { display: none !important; }');

// На случай, если нужно физически вырезать из DOM
(function() {
    'use strict';

    function removeFooter() {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.remove();
        }
    }

    removeFooter();

    const observer = new MutationObserver(removeFooter);
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();

// ==UserScript==
// @name         Onboarding Managers Rejection Reasons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Expand text abbreviations link to specific rejection reasons into their full forms.
// @author       Test IO Community Education Team
// @match        https://onboardingmanager.test.io/managers/onboarding_submissions/*
// @icon         https://test.io/content/dam/test-io/test_io_logo1.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define your text expansions
    const expansions = {
        'susp': 'Hi {EDIT WITH NAME}, we noticed that this report is not your own work. \n\n We reject this attempt and give you another chance to do it yourself and prove that you understand our concepts. \n\n Please take a NEW BUG via the ❝Show new bug❞ button, which is located at the bottom, and describe it in your own words. Why is this important? Only when you understand how to report bugs the quality of your bug reports will meet the criteria required to work on our platform. \n\n Thank you.',
        'btw': 'By the way',
        'lol': 'Laugh out loud'
    };

    // Create a preview element
    const previewElement = document.createElement('div');
    previewElement.id = 'text-expander-preview';
    previewElement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #7954ff;
        color: #f4f4f4;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px;
        display: none;
        white-space: pre-wrap;
        z-index: 9999; /* Increase the z-index value */
    `;
    document.documentElement.appendChild(previewElement);

    // Listen for input changes
    document.addEventListener('input', function(event) {
        const activeElement = document.activeElement;

        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            const caretPosition = activeElement.selectionStart;
            const text = activeElement.value;
            const lastWord = text.slice(0, caretPosition).split(' ').pop();
            const expansion = expansions[lastWord];

            if (expansion) {
                const expandedText = expansion.replace('{EDIT WITH NAME}', document.querySelector("#bug-header > div.flex > div:nth-child(4) > span").outerText);
                previewElement.style.display = 'block';
                previewElement.textContent = expandedText;
            } else {
                previewElement.style.display = 'none';
            }
        }
    });

    // Listen for keydown events
    document.addEventListener('keydown', function(event) {
        if (event.key === ' ' && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
            const activeElement = document.activeElement;

            if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
                const caretPosition = activeElement.selectionStart;
                const text = activeElement.value;
                const lastWord = text.slice(0, caretPosition).split(' ').pop();
                const expansion = expansions[lastWord];

                if (expansion) {
                    const expandedText = expansion.replace('{EDIT WITH NAME}', document.querySelector("#bug-header > div.flex > div:nth-child(4) > span").outerText);
                    const newText = `${text.slice(0, caretPosition - lastWord.length)}${expandedText}${text.slice(caretPosition)}`;

                    activeElement.value = newText;
                    activeElement.setSelectionRange(caretPosition - lastWord.length + expandedText.length, caretPosition - lastWord.length + expandedText.length);

                    const scrollTop = activeElement.scrollTop;
                    activeElement.scrollTop = scrollTop + activeElement.scrollHeight - activeElement.clientHeight;

                    previewElement.style.display = 'none';

                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        }
    });

})();

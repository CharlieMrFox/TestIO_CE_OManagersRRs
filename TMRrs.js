(function() { 'use strict';function getTextFromElement() { const testerDt = document.querySelector('dt.col-4.col-md-2 label.meta-label'); // Find the <dt> with the label "Tester" if (testerDt) { const parentDl = testerDt.closest('dl'); // Find the closest <dl> parent element if (parentDl) { const ddElement8 = parentDl.querySelector('dd:nth-child(8)'); const ddElement10 = parentDl.querySelector('dd:nth-child(10)'); const ddElement = ddElement8.textContent.trim() ? ddElement8 : ddElement10; // Use ddElement8 if not empty, otherwise use ddElement10 return ddElement ? ddElement.textContent.trim() : ''; // Return the text content or an empty string if the element is not found } } return ''; // Return an empty string if the required elements are not found} // Define your trigger text here const triggerTexts = [ "hi", "sv", "t", "u", "s1", "ss", "ar", "er", "att", "all", ]; // Define the text expansions for each trigger const expansions = { 'hi': 'Hi, <strong>' + getTextFromElement() + '</strong>! Thank you for your submission.<br><br>Unfortunately, your bug report must be rejected because of the following reasons:<br><br><h1>Please enter your feedback here!</h1><br><br>Thank you, and remember all this information for the following submission.<br><strong>Good luck!</strong>', 't': 'The <em>title</em> does not answer the three questions a report title must respond to about the bug: ❝Where❞, ❝what ❞ , and ❝when❞ is happening.<br><br>A report title must provide a clear overview of the problem so readers don’t have to read the whole report to understand the problem. Remember to:<br><br>✅ Describe what is happening, not what is not happening.<br>✅ Avoid generic, meaningless descriptions such as something ❝doesn’t work❞, ❝doesn’t trigger❞, etc.<br>✅If the bug happens under specific conditions (e.g. on a specific product detail page) or the system triggers a specific error message), this information must be part of the title.<br><br>A good bug report title looks like this:<br><ul><li><strong>Wrong</strong>: The user cannot add a product to the Cart.</li><li><em>Correct</em>: "Unexpected Error" was shown on PDP when the user selected Size and clicked on the "Add To Cart" button.</li></ul><br>Please refer to our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_f4796ee256" target="_blank">❝Bug Report Requirements❞</a>.', 'u': 'The <em>URL</em> is incorrect since it does not correspond to the one shown on the page the bug is shown. To do this properly:<br><br>✅ Copy and paste the URL shown in the browser address bar.<br><br>Please refer to our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_25a3802a1b" target="_blank">❝Bug Report Requirements❞</a>.','s1': '<em>Step 1</em> must include a command verb and the landing page URL shown in the browser’s address bar at the beginning of the video. If you’re testing a mobile app, use the app’s name.<br><br>A good bug report title looks like this:<br><br><ol><li>Go to http://www.examplewebsite.com</ol></li><ol><li>Enter any search query in the top-right search bar (e.g. “San Francisco”)</ol></li><ol><li>Click on “Search Now” button</ol></li><ol><li>Scroll down and click on "Sort by”</ol></li><ol><li>Select the option "Sort by price: High to Low”</ol></li><br>Please refer to our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_bfb6d95941" target="_blank">❝Bug Report Requirements❞</a>.','ss': 'The <em>steps</em> sections must describe all **actions** the user took on the website until the one that triggers the bug. This is why you must use:<br><br>✅Command verbs like ❝Click on❞, ❝Scroll up❞, ❝Swipe down❞, etc.<br>✅ Avoid meaningless terms like *observe*.<br>✅ Don’t write the ❝I❞ pronoun (e.g. I clicked, I selected…).<br>✅ Provide all buttons pressed, the exact characteristics of a product or any input entered, etc.<br>✅The last step must be the one that triggers or leads to the bug. Therefore, avoid mentioning results in this section.<br><br>Please refer to our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_bfb6d95941" target="_blank">❝Bug Report Requirements❞</a>.','ar': 'To construct a good <em>actual result</em>, remember:<br><br>✅ Start describing the bug after the last described step.<br>✅ Avoid repeating information already provided in the steps or the title.<br>✅ Explain the problem in detail, avoiding general statements.<br>✅ Don’t repeat the title or rephrase the expected result to make it the opposite.<br><br>Please refer to our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_49ed0cc338" target="_blank">❝Bug Report Requirements❞</a>.', 'er': 'To construct a good <em>expected result</em>, remember:<br><br>✅ Start describing the anticipated behaviour after the last described step.<br>✅ Avoid repeating information already provided in the steps or the title.<br>✅ Explain the expectation in detail, considering a realistic scenario of what the user should have experienced.<br>✅ Avoid general statements or just rephrasing the actual result in a positive way.<br><br>Please refer to our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_49ed0cc338" target="_blank">❝Bug Report Requirements❞</a>.', 'att': 'Remember that this is mandatory on <em>attachments</em>:<br><br>✅ Clicks or taps must be shown (desktop and Android devices).<br>✅ Sound must not be recorded.<br>✅The current date must be visible on all attachments, in DD/MM or MM/DD format, in Engish (or optional German if the bug report language is German).<br>✅ The time is also mandatory information. Display it in a 24-hour clock; if you use a 12-hour clock, use AM/PM format.<br>✅ Don’t show your tester Dashboard on screencasts.<br><br>Please refer to our article <a href="https://academy.test.io/en/articles/2541954-bug-report-attachments" target="_blank">❝Bug Report Attachments❞</a>.','sv': 'The selected <em>severity</em> is incorrect. To select the correct severity of this issue, review the section ❝We have three severity levels for functional bugs❞ in our Academy article <a href="https://academy.test.io/en/articles/2570792-functional-bugs#h_a539fccda9 target="_blank">❝Functional Bugs❞</a> as well as <a href="https://academy.test.io/en/articles/6796474-how-to-select-the-correct-severity-of-a-functional-bug target="_blank">❝How to select the correct severity of a functional bug❞</a>.','all': 'The entire report must be corrected.<br><br>Please, review the following sections and Academy articles thoroughly before submitting anything else: <ul><li>To select the correct <em>severity</em> of functional bugs: <a href="https://academy.test.io/en/articles/6796474-how-to-select-the-correct-severity-of-a-functional-bug" target="_blank">❝How to select the correct severity of a functional bug❞</a> </li> <li>To write a meaningful title, review the section <em>Title</em> in the article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_f4796ee256" target="_blank">❝Bug Report Requirements❞</a></li> <li>Review the section <em>URL</em> in our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_25a3802a1b" target="_blank">❝Bug Report Requirements❞</a> to identify the correct URL of a bug.</li> <li>To understand how the steps need to be constructed, review the section <em> Steps to reproduce</em> in our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_bfb6d95941 target="_blank">❝Bug Report Requirements❞</a></li> <li>To write the actual result correctly, review the section <em> Actual Result </em> in our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_226816b256 target="_blank"> ❝Bug Report Requirements❞</a> </li> <li>To write the expected result correctly, review the section <em> Expected Result </em> in our article <a href="https://academy.test.io/en/articles/2541949-bug-report-requirements#h_4c09cd5fef target="_blank">❝Bug Report Requirements❞</a></li></ul>', };// Function to handle text expansionfunction handleTextExpansion(event) { const trixEditor = document.getElementById('onboarding_submission_comment'); const currentContent = trixEditor.value; // Use 'value' to get the plain text content const triggerSymbol = '#'; for (const triggerText in expansions) { const triggerIndex = currentContent.indexOf(triggerSymbol + triggerText); if (triggerIndex !== -1) { // Insert the expanded content at the trigger index (replacing the trigger) const expandedContent = expansions[triggerText]; const cleanedContent = expandedContent.replace(/#.{2}/g, ''); const expandedHtml = '<span id="expansion_marker"></span>' + cleanedContent; // Replace the trigger text with the expanded content trixEditor.value = currentContent.replace(triggerSymbol + triggerText, expandedHtml); // Set the cursor position after the inserted content const marker = document.getElementById('expansion_marker'); if (marker) { const range = document.createRange(); range.selectNodeContents(marker); range.collapse(false); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); marker.parentNode.removeChild(marker); } // Display an alert to confirm that text expansion is triggered alert('Text expansion triggered for: ' + triggerText); return; } }}// Function to detect the Trix editor and add input event listener for text expansionfunction detectTrixEditorAndAddListener() { const trixEditor = document.getElementById('onboarding_submission_comment'); if (trixEditor) { trixEditor.addEventListener('input', handleTextExpansion); } else { // Retry detecting the Trix editor after a slight delay setTimeout(detectTrixEditorAndAddListener, 500); }}// Call the function to start detecting Trix editordetectTrixEditorAndAddListener();})();

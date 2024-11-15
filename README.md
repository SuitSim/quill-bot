<h1 align="center">Quill-Bot</h1>
<div align="center">An auto-completion hack for <a href="https://quill.org">quill.org</a></div>

<div>&nbsp;</div>

Quill-Bot is a JavaScript program designed to automatically answer Quill assignments.  It is only designed to work with simple sentence writing prompts.

## Usage

Quill-Bot only works before the question is loaded, so it is recommended that you refresh your browser before proceeding if a question is loaded (you should be in the instructions page of the assignment).  The "Get Feedback" button often doesn't register the updated text, but can be updated by clicking anywhere on the screen.

If these steps are completed correctly, you should get an alert saying "Connected" followed by the version number.

### Bookmarklet (Recommended)

1. Create a new bookmark in your browser of choice.

2. Address the bookmark to `javascript:(function(){ PASTE INDEX.JS HERE })();`.

3. Open the bookmark to activate the script.

### Console

1. Open the developer console in your browser of choice.

2. Paste [index.js](src/index.js) into the JavaScript console.

3. Press enter on the pasted script to active it.

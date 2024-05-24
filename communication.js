chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        document.dispatchEvent(new CustomEvent("ScratchSploitMessage",{
            detail: message
        }))
    }
);
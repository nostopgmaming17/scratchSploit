const ui = {
    username: {
        input: document.getElementById("username"),
        set: document.getElementById("setusername")
    },
    inject: {
        sprite: document.getElementById("spriteinject"),
        js: document.getElementById("jsinject")
    }
}

function getTab() {
    return new Promise(resolve => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            resolve(tab);
        })
    })
}
function isScratch(tab) {
    return tab.url.startsWith("https://scratch.mit.edu/projects/");
}

ui.username.set.onclick = function() {
    getTab().then(tab=>{
        if (isScratch(tab)) {
            chrome.tabs.sendMessage(tab.id,{
                type: "spoofUser",
                value: ui.username.input.value
            });
        }
    });
}
ui.inject.sprite.onclick = function() {
    getTab().then(tab=>{
        if (isScratch(tab)) {
            chrome.tabs.sendMessage(tab.id,{
                type: "injectSprite",
            });
        }
    });
}
ui.inject.js.onclick = function() {
    getTab().then(tab=>{
        if (isScratch(tab)) {
            chrome.tabs.sendMessage(tab.id,{
                type: "injectJS",
            });
        }
    });
}
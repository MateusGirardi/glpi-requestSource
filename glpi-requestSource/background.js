// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(async () => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

chrome.tabs.onUpdated.addListener(async function () {
    console.log("TAB UPDATED")
    let tab = await getCurrentTab();
    console.log(tab)

    chrome.scripting.executeScript({
        target: {tabId: tab.id,allFrames: true},
        files: ['content.js']
    });

});
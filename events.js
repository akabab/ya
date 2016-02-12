// alert("EVENTS LOADED");
console.log("EVENTS LOADED");

chrome.tabs.onUpdated.addListener(function(id, changeInfo, tab) {
  console.log("onUpdated:" + tab.url);
});

chrome.tabs.onActivated.addListener(function(id, changeInfo, tab) {
  alert("onActivated:" + tab.url);
});
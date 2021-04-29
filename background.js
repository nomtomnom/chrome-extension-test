chrome.runtime.onInstalled.addListener(function () {
  console.log('Hello World!!!!');
  console.log('chrome.windows', chrome.windows);
});

function insertDiv() {
    const body = document.getElementByTagName('body');
    const newSpan = document.createElement('div');
    newSpan.innerHTML = 'Search For Me';
    body.appendChild(newSpan);
}

chrome.action.onClicked.addListener((tab) => {
  console.log(tab);
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: insertDiv
    })
})


// const dictionarySearch = (keyword) => {
//   const url = `https://api-portal.dictionary.com/dcom/pageData/${keyword}`;
// }

// chrome.runtime.onInstalled.addListener(function () {
  // chrome.contextMenus.create(createProperties: {}, dictionarySearch);
// 
// });
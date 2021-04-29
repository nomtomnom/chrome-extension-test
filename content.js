const images = ['images/600px-008Wartortle.png', 'images/anisha.jpg', 'images/casey.jpg', 'images/Michael.png', 'images/oliver.jpg', 'images/snakehead.png', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.png', 'images/6.jpg', 'images/7.jpg', 'images/charmander.jpg', 'images/fatpikachu.jpg'];

function addMichael() {
  if (document.getElementById('codesmithWrapper')) {
    document.getElementById('speechBubble').remove();
    document.getElementById('codesmithWrapper').remove();
  }

  const num = Math.floor(Math.random() * images.length);

  const michaelWrapper = document.createElement('div');
  michaelWrapper.setAttribute('id', 'codesmithWrapper');

  const michaelImage = document.createElement('img');
  michaelImage.src = chrome.runtime.getURL(images[num]);
  michaelImage.setAttribute('id', 'codesmithImage');

  const michaelDescription = document.createElement('p')
  michaelDescription.setAttribute('id', 'codesmithDescription');

  michaelWrapper.append(michaelImage);
  michaelWrapper.append(michaelDescription);
  return michaelWrapper;
}

const addFriend = addMichael();

function speechBubble(keyword, text) {
  const speechBubble = document.createElement('div');
  speechBubble.setAttribute('id', 'speechBubble');
  speechBubble.innerHTML = keyword.toUpperCase() +': '+ text;
  return speechBubble;
}

document.onclick = function (event) {
  let keyword = document.getSelection().toString();
  console.log(keyword);
  fetch(`https://api-portal.dictionary.com/dcom/pageData/${keyword}`)
    .then(data => data.json())
    .then(jsonData => {
      const michael = addMichael(jsonData.data.content[0].entries[0].posBlocks[0].definitions[0].definition);
      const speech = speechBubble(keyword, jsonData.data.content[0].entries[0].posBlocks[0].definitions[0].definition);
      event.target.append(speech);
      event.target.append(michael);
    });
}
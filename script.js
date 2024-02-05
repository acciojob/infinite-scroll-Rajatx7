//your code here!

const dynamicList = document.getElementById('infi-list');
  let itemCount = 10;

 function addMoreItems() {
    // Add 2 more items to the list
    for (let i = 0; i < 2; i++) {
      itemCount++;
      const newItem = document.createElement('li');
      newItem.textContent = `Item ${itemCount}`;
      dynamicList.appendChild(newItem);
    }
  }

 dynamicList.addEventListener('scroll', function() {
    if (dynamicList.scrollTop + dynamicList.clientHeight >= dynamicList.scrollHeight) {
      addMoreItems();
    }
  });
const itemList = document.querySelector('.plates'); //ul
const addItems = document.querySelector('.add-items'); //form
//button
const selectAll = document.querySelector('.select');
const clearAll = document.querySelector('.clear');
const deleteAll = document.querySelector('.delete');

let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;

  const item = {
    text,
    done: false,
  };
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemList);
  this.reset();
}

function populateList(plates = [], itemList) {
  itemList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      }>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    })
    .join(''); //to get all the li from map as string we used join('')
}

populateList(items, itemList);

function toggleCheck(e) {
  if (!e.target.matches('input')) return;
  // console.log(e.target)

  const el = e.target;
  const index = el.dataset.index;
  // console.log(index);

  items[index].done = !items[index].done;
  // console.log(items[index].done);

  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemList);
}

function selectAllItems() {
  items.forEach((item) => {
    item.done = true;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemList);
}

function clearAllCheck() {
  items.forEach((item) => {
    item.done = false;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemList);
}

function deleteAllItems() {
  items = [];
  localStorage.removeItem('items', JSON.stringify(items));
  populateList(items, itemList);
}

// Event listener on form
addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleCheck);

selectAll.addEventListener('click', selectAllItems);
clearAll.addEventListener('click', clearAllCheck);
deleteAll.addEventListener('click', deleteAllItems);

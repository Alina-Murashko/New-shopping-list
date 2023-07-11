const container = document.querySelector('#items');
const input = document.querySelector('#input');

function addToTheList() {
  input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
      const item = document.createElement('div');
      const textItem = input.value;
      item.textContent = textItem;
      
      item.addEventListener('click', ()=> {
        item.classList.toggle('done');
      })

      if (input.value != '') {
        container.append(item)
      }

      input.value != ''
    }
  })
}

addToTheList()
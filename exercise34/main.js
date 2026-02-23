const list = document.querySelector('#list')

function addItem(){
    const newItem = document.createElement('li')
    newItem.textContent = 'film 4'
    list.appendChild(newItem)
}

function removeItem(){
   const list = document.querySelector("#list");
   if (list.lastChild){
    list.removeChild(list.lastChild)

   }

}


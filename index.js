const divContainer = document.getElementById('container-list');
const input = document.getElementById('inputPrimary');
const addButton = document.getElementById('addButton');
const tasks = document.getElementById('tasks');
const ol = document.querySelector('ol');


// Add event listener to the add button

addButton.addEventListener('click', () => {
    if (input.value !== '') {
        function crearElemento(){
            const parrafojs = document.createElement('li');
            parrafojs.innerHTML += input.value;
            ol.appendChild(parrafojs);
            button = document.createElement('button');
            parrafojs.appendChild(button);
            button.innerHTML = 'X'
            button.className = 'clearButton';
            button.addEventListener('click', (e) => {
                const item = e.target.parentElement;
                ol.removeChild(item);
                
            })
        }
        tasks.style.display = 'none';
        crearElemento();
        } else {
            alert('No puedes dejar el campo vacío');
        } 
})

const items = document.querySelectorAll('li')


if(items.length === 0) {
    tasks.style.display = 'block';
}




const buttonAdd = document.querySelector("#addNewToDO");
const listToDo = document.querySelector('.listToDo');

buttonAdd.addEventListener('click', function(event) {
    let newToDo = document.querySelector('#newToDo').value;
    let li = document.createElement('li');
    li.innerHTML = newToDo;
    document.querySelector('ul').append(li);
    document.querySelector('#newToDo').value = ' ';

    addButton()
})

listToDo.addEventListener( 'click', function(event) {
    if (event.target.closest('li')) {
        event.target.closest('li').classList.toggle('done');
    }

    if (event.target.closest('button')) {
        event.target.previousElementSibling.remove();
        event.target.remove();
    }
})

function addButton() {
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete_button');

    let liLasChild = document.querySelector('li:last-child');
    liLasChild.after(deleteButton);
}
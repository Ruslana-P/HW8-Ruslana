const buttonAdd = document.querySelector("#addNewToDO");

buttonAdd.addEventListener('click', function (event){
    newToDo = document.querySelector('#newToDo').value;
    //console.log(newToDo);
    let li = document.createElement('li');
    li.innerHTML = newToDo;
    document.querySelector('ul').append(li);
    document.querySelector('#newToDo').value = ' ';

    addButton ()
    //deleteButtons()

})



const listToDo = document.querySelector('.listToDo');
listToDo.addEventListener( 'click', function(event){
    if (event.target.closest('li')){
        event.target.closest('li').classList.toggle('done');
    }
    if (event.target.closest('button')){

        event.target.previousElementSibling.remove();
        event.target.remove();
    }
})


function addButton (){
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete_button');
    document.querySelector('li:last-child').after(deleteButton);
}
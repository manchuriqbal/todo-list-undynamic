// Write your code here
const selectItem = document.querySelector('.body ul');
const selectFrom = document.querySelector('.todo');

selectItem.addEventListener('click', (e) =>{

    if (e.target.tagName === 'LI') {

        if (e.target.classList.contains('done')) {

            e.target.classList.remove('done');
        } else {
            e.target.classList.add('done');
        }


     
    }

    if (e.target.classList.contains('remove')) {
        e.target.parentNode.remove()
        
    }

})


selectFrom.addEventListener('submit', (e) =>{
    e.preventDefault();

    const input = e.target.task.value;

    if (validateInput (input, e.target.task)) {

        selectItem.insertAdjacentElement('afterbegin', newItem(e.target.task.value));
        e.target.task.value = '';
        
    }
})



const validateInput  = (input, element) => {
    if (input) {

    element.parentNode.classList.remove('error');
    return true;
        
    } else{ element.parentNode.classList.add('error')
    return false;

    }
}



const newItem = (content) =>{
    const newListItem = document.createElement('li');
    newListItem.textContent = content;

    newListItem.insertAdjacentElement('afterbegin', removeButton());

    return newListItem;
}

const removeButton = () => {
    const createRemoveBtn = document.createElement('span')
    createRemoveBtn.classList.add('remove');

    createRemoveBtn.textContent = 'X';
    return createRemoveBtn;
}







// ***** LIBRARY ARRAY *****

let library = []


let addBook = (book) => {
    library.push(book);
}


// ***** LOCAL STORAGE *****

let myStorage = localStorage;

function addToStorage(library) {
    myStorage.setItem('library', JSON.stringify(library));
}
// }


function getItem() {
    return JSON.parse(localStorage.getItem('library'))
}


function checkStorage() {
    if (getItem()) {
        library.push(getItem())
       if (library) {
           render(library)
       }
    } else (!getItem()) 
     {  /* do nothing*/ }
}




// ***** DECLARATIONS ***** 

const openModal = document.getElementById('open-addBook-modal');
const closeModal = document.getElementById('close-modal-btn');
const modal = document.getElementById('main-modal-container');
const libEditBtn = document.querySelector('#lib-edit-btn');
const libDelBtn = document.querySelector('#lib-delete-button');
const h1 = document.querySelector('#main-heading');
const modalAddBookBtn = document.getElementById('addIcon-btn');
const bookLibSec = document.querySelector('.book-library');




// ***** OPEN / CLOSE NEW BOOK MODAL *****

openModal.addEventListener('click', (e) => {
    modal.style.display = 'block';
    clearBookForm();
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})





// ***** BOOK CONSTRUCTOR *****

class Book {

    constructor(title, authur, pages, isRead) {
        this.title = title;
        this.authur = authur;
        this.pages = pages;
        this.isRead = isRead;

    }

    changeRead () {
        this.isRead ? this.isRead = false : this.isRead = true;
        addToStorage();
    }
    
}



// ***** CHANGE READ STATUS *****

function clearForm() {
    location.reload();
}

function changeReadStatus() {
    
        if (document.querySelector('.switch-read').textContent == 'yes') {
            document.querySelector('.switch-read').textContent = 'no';
        } else if (document.querySelector('.switch-read').textContent == 'no') {
            document.querySelector('.switch-read').textContent = 'yes';
        } else { }

    }

    let clearButton = document.querySelector('.clearBtn');
    clearButton.addEventListener('click', clearForm);


// ***** RENDER LIBRARY ON PAGE *****


function render(library) {

    library = []

    let bookCard = document.createElement('div');
    bookCard.classList = 'book-card';
    bookLibSec.addEventListener('click', (e) => {
        if (e.target.classList == 'lib-btn edit'){
            changeReadStatus();
        } 
    })
   
    bookLibSec.append(bookCard);

    let bookCardTitle = document.createElement('div');
    bookCardTitle.classList = 'card-title';
    bookCard.append(bookCardTitle);
    let cardTitle = document.createElement('h2');
    cardTitle.innerHTML = 'Title:';
    bookCardTitle.append(cardTitle);

    let titleData = document.createElement('h2')
    titleData.textContent = document.querySelector('.form-input.title').value;
    bookCardTitle.append(titleData);


    let bookCardAuthur = document.createElement('div');
    bookCardAuthur.classList = 'card-title';
    bookCard.append(bookCardAuthur);
    let cardAuthur = document.createElement('h2');
    cardAuthur.innerHTML = 'Authur:';
    bookCardAuthur.append(cardAuthur);

    let authurData = document.createElement('h2');
    authurData.textContent = document.querySelector('.form-input.authur').value;
    bookCardAuthur.append(authurData);


    let bookCardPages = document.createElement('div');
    bookCardPages.classList = 'card-title';
    bookCard.append(bookCardPages);
    let cardPages = document.createElement('h2');
    cardPages.innerHTML = 'Pages:';
    bookCardPages.append(cardPages);

    let pageData = document.createElement('h2');
    pageData.textContent = document.querySelector('.form-input.page').value;
    bookCardPages.append(pageData);


    let bookCardIsRead = document.createElement('div');
    bookCardIsRead.classList = 'card-title';
    bookCard.append(bookCardIsRead);
    let cardIsRead = document.createElement('h2');
    cardIsRead.innerHTML = 'Read Status';
    bookCardIsRead.append(cardIsRead);

    let isReadData = document.createElement('h2');
    isReadData.classList = 'switch-read'
    isReadData.textContent = document.querySelector('.select').value;
    bookCardIsRead.append(isReadData);




    let bookCardEditDelete = document.createElement('div');
    bookCardEditDelete.classList = 'edit-delete';
    bookCard.append(bookCardEditDelete);



    let cardEdit = document.createElement('button');
    cardEdit.textContent = 'Change Status';
    cardEdit.classList = 'lib-btn edit';
    bookCardEditDelete.append(cardEdit);



}




// ***** CLEAR ADD-BOOK FORM *****

function clearBookForm() {
    let title = document.querySelector('.title').value = '';
    let authur = document.querySelector('.authur').value = '';
    let pages = document.querySelector('.page').value = '';
}


// ***** ADD BOOK EVENT LISTENER *****


modalAddBookBtn.addEventListener('click', () => {
    let title = document.querySelector('.form-input.title').value;
    let authur = document.querySelector('.form-input.authur').value;
    let pages = document.querySelector('.form-input.page').value;
    let isRead = document.querySelector('.select').value;

    let newBook = new Book(title, authur, pages, isRead);


    if (title == '' || authur == '' || pages == '' || isRead == '') {
        alert('Please enter Book Data')
    } else {

        addBook(newBook);

        addToStorage(library);

        checkStorage();

        modal.style.display = 'none';

        
    }
})





// let editBtn = document.querySelector('lib-btn.edit').addEventListener('click', (e) => {
//     console.log(e)
// });




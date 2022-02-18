let userLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(author.value, title.value, pages.value, readBool());
  userLibrary.push(newBook);
  console.log(userLibrary);

}

function readBool() {
  if (readYes.checked) {
    return 'read';
  } else if (readNo.checked) {
    return 'notRead';
  };
}

function displayBooks() {

}




const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');

const readYes = document.querySelector('#read-yes');
const readNo = document.querySelector('#read-no');

const addBookBtn = document.querySelector('.button-add-book');
const formSubmitBtn = document.querySelector('#form-btn');
const closeFormBtn = document.querySelector('.close-form');

const popupForm = document.querySelector('.popup-form');

addBookBtn.addEventListener('click', () => popupForm.style.display = "flex");
closeFormBtn.addEventListener('click', () => popupForm.style.display = "none");
formSubmitBtn.addEventListener('click', () => console.log(addBookToLibrary()));

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  if (validateInputs() === 'isEmpty') {
    alert('Please enter all the required information');
    return;
  }
  const newBook = new Book(author.value, title.value, pages.value, readBool());
  userLibrary.push(newBook);
  clearInputFields();
}

function validateInputs() {
  let textFieldsEmpty;
  let radioButtonsEmpty;
  let emptyRadioBtnCounter = 0;

  textFields.forEach(input => {
    if (input.value === '') {
      textFieldsEmpty = true;
    };
  });

  radioButtons.forEach(btn => {
    if (btn.checked === false) {
      emptyRadioBtnCounter++;
    };
    if (emptyRadioBtnCounter === 2) {
      radioButtonsEmpty = true;
    };
  });

  return (textFieldsEmpty || radioButtonsEmpty) ? 'isEmpty' : 'notEmpty';
}

function readBool() {
  if (readYes.checked) {
    return 'read';
  } else if (readNo.checked) {
    return 'notRead';
  };
}

function clearInputFields() {
  textFields.forEach(input => input.value = '');
  radioButtons.forEach(btn => btn.checked = false);
}

function makeCard() {
  const card = document.createElement('div');
  card.classList.add('card');

  const authorField = document.createElement('h4');
  authorField.textContent = 'lorem ipsum';
  card.append(authorField);
  const titleField = document.createElement('h5');
  titleField.textContent = 'lorem ipsum';
  card.append(titleField);
  const pagesField = document.createElement('p');
  pagesField.textContent = 'lorem ipsum';
  card.append(pagesField);
  const readField = document.createElement('p');
  readField.textContent = 'lorem ipsum';
  card.append(readField);

  const cardContainer = document.querySelector('.card-container');
  cardContainer.append(card);
}

let userLibrary = [];
//Form text inputs
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
//Form radio inputs
const readYes = document.querySelector('#read-yes');
const readNo = document.querySelector('#read-no');
//Popup form
const popupForm = document.querySelector('.popup-form');
const textFields = [author, title, pages];
const radioButtons = [readYes, readNo];
//Buttons
const addBookBtn = document.querySelector('.button-add-book');
const formSubmitBtn = document.querySelector('#form-btn');
const closeFormBtn = document.querySelector('.close-form');


addBookBtn.addEventListener('click', () => popupForm.style.display = "flex");
closeFormBtn.addEventListener('click', () => popupForm.style.display = "none");
formSubmitBtn.addEventListener('click', () => console.log(addBookToLibrary()));

for (i=0; i < 22; i++) {
  makeCard();
}

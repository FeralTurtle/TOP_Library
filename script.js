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
  const newBook = new Book(author.value, title.value, pages.value, readBool()); //User text input values into newBook object
  userLibrary.push(newBook);
  makeCard();
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

function makeCard() {
  cardIndex = userLibrary.length;

  const cardContainer = document.querySelector('.card-container');
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-index', cardIndex);

  const removeCardBtn = document.createElement('div');
  removeCardBtn.setAttribute('data-index', cardIndex);
  removeCardBtn.textContent = 'x';
  removeCardBtn.addEventListener('click', removeCard);
  const authorField = document.createElement('h4');
  const titleField = document.createElement('h5');
  const pagesField = document.createElement('p');
  const readField = document.createElement('p');
  readField.setAttribute('data-index', cardIndex);
  const toggleReadBtn = document.createElement('button');
  toggleReadBtn.classList.add('toggle-read-btn');
  toggleReadBtn.setAttribute('data-index', cardIndex);
  toggleReadBtn.addEventListener('click', toggleReadStatus);
  readField.setAttribute('data-index', cardIndex);
  authorField.textContent = author.value;
  titleField.textContent = title.value;
  pagesField.textContent = pages.value;
  readField.textContent = readBool();
  card.append(removeCardBtn);
  card.append(authorField);
  card.append(titleField);
  card.append(pagesField);
  card.append(readField);
  card.append(toggleReadBtn);

  cardContainer.append(card);
}

function clearInputFields() {
  textFields.forEach(input => input.value = '');
  radioButtons.forEach(btn => btn.checked = false);
}

function removeCard() {
  let currentIndex = this.dataset.index;
  const card = document.querySelector(`div[data-index="${currentIndex}"]`);

  userLibrary.splice(currentIndex, 1);
  card.remove();

  const cards = document.querySelectorAll('.card[data-index]');
  cards.forEach(item => {
    if (item.dataset.index > currentIndex) {
      item.dataset.index -= 1;
    }
  });
}

function toggleReadStatus() {
  let currentIndex = this.dataset.index;

  const readField = document.querySelector(`.card>p+p[data-index="${currentIndex}"]`);
  readField.style.backgroundColor = '#808080';

  if (readField.textContent == 'read') {
    readField.textContent = 'notRead';
  } else {
    readField.textContent = 'read';
  };
}

let userLibrary = [];
let cardIndex = -1;
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

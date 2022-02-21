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
    return 'Read';
  } else if (readNo.checked) {
    return 'Not read';
  };
}

function makeCard() {
  const cardIndex = userLibrary.length - 1;
  
  const cardContainer = document.querySelector('.card-container');
  const card = document.createElement('div');
  const removeCardBtn = document.createElement('div');
  const authorField = document.createElement('h4');
  const titleField = document.createElement('h5');
  const pagesField = document.createElement('p');
  const toggleReadBtn = document.createElement('button');
  card.classList.add('card');
  toggleReadBtn.classList.add('toggle-read-btn');
  card.setAttribute('data-index', cardIndex);
  removeCardBtn.addEventListener('click', removeCard);
  toggleReadBtn.addEventListener('click', toggleReadStatus);

  removeCardBtn.textContent = 'x';
  authorField.textContent = author.value;
  titleField.textContent = title.value;
  pagesField.textContent = pages.value;
  toggleReadBtn.textContent = readBool();

  const cardFields = [removeCardBtn, authorField, titleField, pagesField, toggleReadBtn];
  cardFields.forEach(field => card.append(field));

  cardContainer.append(card);
}

function clearInputFields() {
  textFields.forEach(input => input.value = '');
  radioButtons.forEach(btn => btn.checked = false);
}

function removeCard() {
  const card = this.parentElement;
  const cardIndex = this.parentElement.dataset.index;
  userLibrary.splice(cardIndex, 1);
  card.remove();
}

function toggleReadStatus() {
  const cardIndex = this.parentElement.dataset.index;
  const toggleReadBtn = document.querySelector(`.card[data-index="${cardIndex}"]>button`);

  if (toggleReadBtn.textContent == 'Read') {
    toggleReadBtn.textContent = 'Not read';
    toggleReadBtn.style.backgroundColor = '#ff3333';
  } else {
    toggleReadBtn.textContent = 'Read';
    toggleReadBtn.style.backgroundColor = '#5cd65c';
  };
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
formSubmitBtn.addEventListener('click', () => addBookToLibrary());

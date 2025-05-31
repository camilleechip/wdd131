const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const articlesContainer = document.querySelector("#articles");
const bookDropdown = document.querySelector("#bookDropdown");

const options = articles.map(book => {
  const option = document.createElement('option');
  option.value = book.title;
  option.textContent = book.title;
  return option;
});
options.forEach(option => bookDropdown.appendChild(option));

function createBookElement(book) {
  const article = document.createElement('article');
  article.classList.add('book-entry');
  article.innerHTML = `
    <div class="first-block">
      <section class="book-rating">
        <p>${book.date}</p>
        <p>${book.ages}</p>
        <p>Genre: ${book.genre}</p>
        <p>Rating: ${book.stars}</p>
      </section>
    </div>
    <div class="second-block">
      <section class="book-details">
        <h2>${book.title}</h2>
        <figure>
          <img src="${book.imgSrc}" alt="${book.imgAlt}">
        </figure>
        <p>${book.description}</p>
      </section>
    </div>
  `;
  return article;
}

function retrieveAllBooks() {
  articlesContainer.innerHTML = '';
  const bookElements = articles.map(createBookElement);
  bookElements.forEach(article => articlesContainer.appendChild(article));
}

retrieveAllBooks();

bookDropdown.addEventListener('change', function () {
  const selectedTitle = this.value;

  articlesContainer.innerHTML = '';
  
  if (!selectedTitle) {
    retrieveAllBooks();
  } else {
    const selectedBook = articles.find(book => book.title === selectedTitle);
    if (selectedBook) {
      const bookElement = createBookElement(selectedBook);
      articlesContainer.appendChild(bookElement);
    }
  }
});





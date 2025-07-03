import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  const html = tags.map(tag => `<li>${tag}</li>`).join('');
  return html;
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">
        ${recipe.description}
      </p>
    </figcaption>
  </figure>`;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
  const outputElement = document.querySelector('#recipe-display');

  const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');

  outputElement.innerHTML = html;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

init();
const searchInput = document.getElementById('searchInput');

function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const q = query.toLowerCase();

    const nameMatch = recipe.name.toLowerCase().includes(q);
    const descriptionMatch = recipe.description.toLowerCase().includes(q);

    const tagMatch = recipe.tags.find(tag => tag.toLowerCase().includes(q));

    const ingredientMatch = recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(q));

    return nameMatch || descriptionMatch || tagMatch || ingredientMatch;
  });

  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

  return sorted;
}

function searchHandler(e) {
  e.preventDefault();

  const input = document.getElementById('searchInput');
  const query = input.value.trim().toLowerCase();

  const filteredRecipes = filterRecipes(query);

  renderRecipes(filteredRecipes);
}

document.querySelector('.search-container img').addEventListener('click', searchHandler);

document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchHandler(e);
  }
});


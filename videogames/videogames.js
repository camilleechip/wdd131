const games = [
  {
    title: 'Animal Crossing: New Horizons',
    rating: '⭐⭐⭐⭐⭐',
    description: 'A relaxing life-simulation game with endless decorating and community building. It is one of many in the series, but has been my favorite! I most enjoyed terraforming and changing the island to my preferences and choosing villagers to live on my island. This was my first cozy game, so I am a bit biased, but this is an all time favorite of mine!',
    platform: 'Nintendo',
    image: 'images/animal-crossing.avif'
  },
  {
    title: 'Calico',
    rating: '⭐⭐⭐⭐⭐',
    description: 'Life as a witchy cat cafe owner has never been more magical! You get to enjoy designing your cafe, making desserts and coffee while you explore the area and meet new animal friends. The townsfolk are friendly and have lots of quests for you to accomplish while you explore the forest and discover all that this game has to offer. ',
    platform: 'Steam, Nintendo, Playstation, Xbox',
    image: 'images/calico.jpg'
  },
  {
    title: 'Cattails',
    rating: '⭐⭐⭐☆☆',
    description: 'I enjoyed this simple game because it gave Stardew Valley vibes. You are a cat in one of four clans and your job is to hunt and keep relations with the other clans in good spirits. There is mining, hunting, gathering and you can even romance different characters! I had fun with this game, but I found myself bored after a while. ',
    platform: 'Steam, Nintendo',
    image: 'images/cattails.avif'
  },
  {
    title: 'Disney Dreamlight Valley',
    rating: '⭐⭐⭐⭐☆',
    description: 'This is such a fun game for those who love disney! It is another farming and decorating sim that syncs up to your day. My only issue is that it is a bit childish, but it was otherwise very fun! I enjoy Disney stuff so the game was a cute getaway from real life and I also loved designing my character and shopping for clothing every day in the game.',
    platform: 'Steam, Nintendo, Playstation, Xbox',
    image: 'images/dreamlight-valley.webp'
  },
  {
    title: 'Fae Farm',
    rating: '⭐⭐⭐☆☆',
    description: 'This is another fun farming sim where you are stranded on an island that you can not leave because there is a scary tide surrounding and you must help the island to keep it safe. I am having fun so far, the fishing and bug catching aspect of this game is very fun and I am excited to get further into this game. There are not a whole lot of outfit choices and that is a bummer because designing my character is one of my favorite parts. I hope to find more clothing as I continue with this game.',
    platform: 'Steam, Nintendo, Playstation, Xbox',
    image: 'images/fae-farm.jpg'
  },
  {
    title: 'Stardew Valley',
    rating: '⭐⭐⭐⭐⭐',
    description: 'This is hands down one of the best games I have ever played! The townsfolk are dynamic, there are a ton of quests and there is never a shortage of things to accomplish each day. Mining is my favorite aspect of this game because you find cool treasures and get to fight off monsters. I also enjoy designing the town and caring for my farm animals. This game is an absolute must buy for anyone starting off with cozy games.',
    platform: 'Steam, Nintendo, Playstation, Xbox',
    image: 'images/stardew-valley.jpg'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const gameSelect = document.getElementById('gameSelect');
  const gameDetails = document.getElementById('gameDetails');

  games.forEach((game, index) => {
    const option = document.createElement('option');
    option.value = index.toString();  
    option.textContent = game.title;
    gameSelect.appendChild(option);
  });

  function showGameDetails(index) {
    const game = games[index];
    gameDetails.innerHTML = `
      <div class="game-card">
        <img class="game-image" src="${game.image}" alt="${game.title}">
        <div class="game-info">
          <h3 class="game-title">${game.title}</h3>
          <p class="game-rating"><strong>Rating:</strong> ${game.rating}</p>
          <p class="game-description">${game.description ? game.description : '<em>No description available.</em>'}</p>
          <p class="game-platform"><strong>Platform:</strong> ${game.platform}</p>
      </div>
  </div>
`;

  }

  const randomIndex = Math.floor(Math.random() * games.length);
  gameSelect.value = randomIndex.toString();
  showGameDetails(randomIndex);
  
  gameSelect.addEventListener('change', () => {
    const selectedIndex = parseInt(gameSelect.value, 10);
    if (isNaN(selectedIndex)) {
      gameDetails.innerHTML = '';
      return;
    }
    showGameDetails(selectedIndex);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const themeSelector = document.querySelector('#theme-selector');

  function changeTheme() {
    const selectedTheme = themeSelector.value;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(selectedTheme);

    const steamIcon = document.getElementById('steam-icon');
    const playstationIcon = document.getElementById('playstation-icon');

    if (steamIcon && playstationIcon) {
      if (selectedTheme === 'dark') {
        steamIcon.src = 'images/dark-steam.png';
        playstationIcon.src = 'images/dark-playstation.png';
      } else {
        steamIcon.src = 'images/steam-icon.jpg';
        playstationIcon.src = 'images/playstation-icon.png';
      }
    }
  }

  themeSelector.addEventListener('change', changeTheme);
  changeTheme();
});







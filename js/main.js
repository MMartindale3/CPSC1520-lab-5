/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();
    filterGames(platform);
  });

  function filterGames(params) {
    allGameListItems.forEach(e => {
      if (e.innerText.toLowerCase().includes(params)) {
        e.classList.remove("hidden-item");
      }
      else {
        e.classList.add("hidden-item");
      }
    });
  }
  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game);
  });

  function addToFavouriteGames(game) {
    myGames.push(game);
    renderFavouriteList();
  }

  function renderFavouriteList() {
    myGameList.innerHTML = "";
    myGames.forEach(element => {
      const template = `<li class="list-group-item">${element}</li>`;
      myGameList.innerHTML += template;
    });
  }

  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let favGame = event.target.innerText;
    removeFromFavouriteGames(favGame)
  });

  function removeFromFavouriteGames(game) {
    var gameIndex = myGames.indexOf(game);
    myGames.splice(gameIndex, 1);
    renderFavouriteList();
  }
})();

let charactersList = document.querySelector('#characters');// estoy almacenando la lista UL de HTML.

console.log(charactersList);

let characters;

fetch('https://rickandmortyapi.com/api/character')
  .then(function (response){
      return response.json();
  })

  .then(function (data) {
    characters = data.results;
    console.log(characters.length);
    characters.forEach(oneCharacter => {
      let htmlContent =`
        <li>
          ${oneCharacter.name} <br>
          <img src = "${oneCharacter.image}" width = "100">
          <hr/>
          </li>
          `;
      charactersList.insertAdjacentHTML('beforeend', htmlContent);
    });
  })
  .catch(function (error) {
    console.log(error);
  })

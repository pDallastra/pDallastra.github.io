const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const prophets = jsonObject.prophets
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pDateOfBirth = document.createElement('p');
        let pPlaceOfBirth = document.createElement('p');
        let image = document.createElement('img')
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        pDateOfBirth.textContent = 'Date Of Birth: ' + prophets[i].birthdate;
        pPlaceOfBirth.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        
        card.appendChild(h2);
        card.appendChild(pDateOfBirth);
        card.appendChild(pPlaceOfBirth);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
    }
  });


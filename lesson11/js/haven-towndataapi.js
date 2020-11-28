const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject.towns
    const cities = [towns[1]]
    for (let i = 0; i < cities.length; i++ ) {
        let section = document.createElement('section');
        document.querySelector('div.cards2').appendChild(section);
        
        let div = document.createElement('div');
        section.appendChild(div);
      }

      for (let i = 0; i < cities.length; i++) {
        let cards = document.querySelector('div.cards2');
        let sections = cards.children;
        
        let children = sections[i].children;
        let div = children[0]

        let h2 = document.createElement('h2');
        h2.textContent = "City Events";
        div.appendChild(h2);
        
        let events = cities[i].events;
        for(let i = 0; i < events.length; i++) {
        let yearFounded = document.createElement('h4');
        yearFounded.textContent = events[i];
        div.appendChild(yearFounded);
        }
        
      }
  }); 
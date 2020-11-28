function setTimes() {
  let date = new Date();
  let dateFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
        
   document.getElementById('lastModified').textContent = date.toLocaleDateString('en-US', dateFormat);

  let day = date.getDay();
  let isFriday = false;
   
  let adds = document.getElementById('adds');

    if(day == 5) {
      isFriday = true
    }

    if(!isFriday) {
      adds.setAttribute("style", "display:none");
    }
  }
  
  function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    $(document).on('click', 'div a', function(){
      $(this).addClass('active').siblings().removeClass('active')
  })
  

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject.towns
    const cities = [towns[1], towns[5], towns[6]]
    for (let i = 0; i < cities.length; i++ ) {
        let section = document.createElement('section');
        document.querySelector('div.cards').appendChild(section);
        
        let div = document.createElement('div');
        section.appendChild(div);
       
        let image = document.createElement('img')
        image.setAttribute('src', './images/' + cities[i].photo);
        image.setAttribute('alt', cities[i].name);
        section.appendChild(image);
      }

      for (let i = 0; i < cities.length; i++) {
        let cards = document.querySelector('div.cards');
        let sections = cards.children;
        
        let children = sections[i].children;
        let div = children[0]

        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('h4');
        let population = document.createElement('h4');
        let averageRainfall = document.createElement('h4');
        
        h2.textContent = cities[i].name;
        motto.textContent = cities[i].motto;
        yearFounded.textContent = 'Year Founded: ' + cities[i].yearFounded;
        population.textContent = 'Population: ' + cities[i].currentPopulation;
        averageRainfall.textContent = 'Annual Rain Fall: ' + cities[i].averageRainfall;
        
        div.appendChild(h2);
        div.appendChild(motto);
        div.appendChild(yearFounded);
        div.appendChild(population);
        div.appendChild(averageRainfall);
        
      }
  });

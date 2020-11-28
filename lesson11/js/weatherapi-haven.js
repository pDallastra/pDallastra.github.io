const apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=e488b641e56e59b24e07ad11f68b56b7";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("current").textContent = jsObject.list[0].weather[0].main;
    document.getElementById('high').textContent = jsObject.list[0].main.temp.toPrecision(2);
    document.getElementById('humi').textContent = jsObject.list[0].main.humidity;
    document.getElementById('wSpeed').textContent = jsObject.list[0].wind.speed;
    
    document.getElementById('tempDay1').textContent = jsObject.list[7].main.temp.toPrecision(2);
    document.getElementById('tempDay2').textContent = jsObject.list[15].main.temp.toPrecision(2);
    document.getElementById('tempDay3').textContent = jsObject.list[23].main.temp.toPrecision(2);
    document.getElementById('tempDay4').textContent = jsObject.list[31].main.temp.toPrecision(2);
    document.getElementById('tempDay5').textContent = jsObject.list[39].main.temp.toPrecision(2);

    const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[7].weather[0].icon + '.png';  // note the concatenation
    const desc1 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon1').setAttribute('src', imagesrc1);  // focus on the setAttribute() method
    document.getElementById('icon1').setAttribute('alt', desc1);

    const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[15].weather[0].icon + '.png';  // note the concatenation
    const desc2 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon2').setAttribute('src', imagesrc2);  // focus on the setAttribute() method
    document.getElementById('icon2').setAttribute('alt', desc2);

    const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[23].weather[0].icon + '.png';  // note the concatenation
    const desc3 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon3').setAttribute('src', imagesrc3);  // focus on the setAttribute() method
    document.getElementById('icon3').setAttribute('alt', desc3);

    const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[31].weather[0].icon + '.png';  // note the concatenation
    const desc4 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon4').setAttribute('src', imagesrc4);  // focus on the setAttribute() method
    document.getElementById('icon4').setAttribute('alt', desc4);

    const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[39].weather[0].icon + '.png';  // note the concatenation
    const desc5 = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon5').setAttribute('src', imagesrc5);  // focus on the setAttribute() method
    document.getElementById('icon5').setAttribute('alt', desc5);
  });
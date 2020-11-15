let high = document.getElementById("high");
let wSpeed = document.getElementById('wSpeed');
let wChill = document.getElementById('wChill');

let hightemp = parseInt(high.textContent);
let windSpeed = parseInt(wSpeed.textContent);

if (hightemp <= 50 && windSpeed >= 3) {
    windchill = 35.75 + 0.6215 * hightemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * hightemp * Math.pow(windSpeed, 0.16);
    wChill.innerHTML = Math.round(windchill) + "℉";
}

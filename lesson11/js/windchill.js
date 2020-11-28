let high = document.getElementById("high");
let wSpeed = document.getElementById('wSpeed');
let wChill = document.getElementById('wChill');

let hightemp = parseInt(high.textContent);
let windSpeed = parseInt(wSpeed.textContent);

if (hightemp <= 50 && windSpeed >= 3) {
    windchill = 35.75 + 0.6215 * hightemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * hightemp * Math.pow(windSpeed, 0.16);
    wChill.innerHTML = Math.round(windchill) + "℉";
}

let day = new Date;
weekDay = day.getDay();
let day1;
let day2;
let day3;
let day4;
let day5;

switch(weekDay){
    case 0:
        day1 = 1;
        day2 = 2;
        day3 = 3;
        day4 = 4;
        day5 = 5;
        break;
    case 1:
        day1 = 2;
        day2 = 3;
        day3 = 4;
        day4 = 5;
        day5 = 6;
        break;
    case 2:
        day1 = 3;
        day2 = 4;
        day3 = 5;
        day4 = 6;
        day5 = 0;
        break;
    case 3:
        day1 = 4;
        day2 = 5;
        day3 = 6;
        day4 = 0;
        day5 = 1;
        break;
    case 4:
        day1 = 5;
        day2 = 6;
        day3 = 0;
        day4 = 1;
        day5 = 2;
        break;
    case 5:
        day1 = 6;
        day2 = 0;
        day3 = 1;
        day4 = 2;
        day5 = 3;
        break;
    case 6:
        day1 = 0;
        day2 = 1;
        day3 = 2;
        day4 = 3;
        day5 = 4;
        break;
    default:
        console.log("Wrong Value 65")
}

function getDayName(n) {
    switch(n){
        case 0:
            return "Sun"
            break;
        case 1:
            return "Mon"
            break;
        case 2:
            return "Tue"
            break;
        case 3:
            return "Wed"
            break;
        case 4:
            return "Thu"
            break;
        case 5:
            return "Fri"
            break;
        case 6:
            return "Sat"
            break;
        default:
            console.log("Wrong Value 85")
    }
}

let day1Name = getDayName(day1);
let day2Name = getDayName(day2);
let day3Name = getDayName(day3);
let day4Name = getDayName(day4);
let day5Name = getDayName(day5);

document.getElementById("day1").innerHTML = day1Name;
document.getElementById("day2").innerHTML = day2Name;
document.getElementById("day3").innerHTML = day3Name;
document.getElementById("day4").innerHTML = day4Name;
document.getElementById("day5").innerHTML = day5Name;

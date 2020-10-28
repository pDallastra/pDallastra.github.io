function setTimes() {
  let date = new Date();
  let dateFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
    
    document.getElementById('lastModified').textContent = date.toLocaleDateString('en-US', dateFormat);
  }
  
  function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
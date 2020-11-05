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

  WebFont.load({
    google: {
      families: ['Poppins', 'Sansita Swashed', 'Piazzolla']
    }
  })

  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
// Set the date we're counting down to
    var countDownDate = new Date("Nov 15, 2019 00:00:00").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

// Get todays date and time
    var now = new Date().getTime();

// Find the distance between now an the count down date
    var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
    document.getElementById("CDT").innerHTML = "Pokemon Sword and Shield will be available in</br>" + days + " Days " + hours + " Hrs " + minutes + " Mins " + seconds + " Secs";

// If the count down is finished, write some text 
        if (distance < 0) {
            // Time calculations for days, hours, minutes and seconds
                var updays = Math.floor(distance / ((1000 * 60 * 60 * 24) * -1));
                var uphours = Math.floor((distance % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60) * -1));
                var upminutes = Math.floor((distance % ((1000 * 60 * 60)) / (1000 * 60) * -1));
                var upseconds = Math.floor((distance % ((1000 * 60)) / 1000) * -1);
 
            // Display the result in the element with id="demo"
                document.getElementById("CDT").innerHTML = "Pokemon Sword and Shield has been available for</br>" + updays + " Days " + uphours + " Hrs " + upminutes + " Mins " + upseconds + " Secs";
        }
    }, 1000);
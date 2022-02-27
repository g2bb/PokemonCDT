// Set vars
var CDT, CUT, distance;

// Set the date we're counting down to
var countDownDate = new Date("Nov 15, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    CDT = {
        days : Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds : Math.floor((distance % (1000 * 60)) / 1000)
    }
    
    // Set Day to string
    var badgeDay = CDT.days.toString();
        
    // If the count down is finished, write some text 
    if (distance < 0) {
        // Time calculations for days, hours, minutes and seconds
        CUT = {
            days : Math.floor(distance / ((1000 * 60 * 60 * 24) * -1)),
            hours : Math.floor((distance % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60) * -1)),
            minutes : Math.floor((distance % ((1000 * 60 * 60)) / (1000 * 60) * -1)),
            seconds : Math.floor((distance % ((1000 * 60)) / 1000) * -1)
        }
    }
        
    // Display the result in the banner text
    if (distance > 0) {
        chrome.browserAction.setBadgeText({text: badgeDay + "D"});
    }
    
}, 1000);
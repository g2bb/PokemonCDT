// Set vars
var CDT, CUT, distance;

// Set the date we're counting down to
var countDownDate = new Date("Nov 19, 2021 00:00:00").getTime();

// Update the count down every 1 second
setInterval(function() {

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
        console.log("D/P");
        chrome.browserAction.setBadgeText({text: badgeDay + "D"});
    }
    
}, 1000);




//--------------------------------------------------------------------------------------
// Set vars
var CDT2, CUT2, distance2;

// Set the date we're counting down to
var countDownDate2 = new Date("Jan 28, 2022 00:00:00").getTime();

// Update the count down every 1 second
setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    distance2 = countDownDate2 - now;

    // Time calculations for days, hours, minutes and seconds
    CDT2 = {
        days : Math.floor(distance2 / (1000 * 60 * 60 * 24)),
        hours : Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes : Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60)),
        seconds : Math.floor((distance2 % (1000 * 60)) / 1000)
    }
    
    // Set Day to string
    var badgeDay = CDT2.days.toString();
        
    // If the count down is finished, write some text 
    if (distance2 < 0) {
        // Time calculations for days, hours, minutes and seconds
        CUT2 = {
            days : Math.floor(distance2 / ((1000 * 60 * 60 * 24) * -1)),
            hours : Math.floor((distance2 % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60) * -1)),
            minutes : Math.floor((distance2 % ((1000 * 60 * 60)) / (1000 * 60) * -1)),
            seconds : Math.floor((distance2 % ((1000 * 60)) / 1000) * -1)
        }
    }
        
    // Display the result in the banner text
    if (distance < 0 && distance2 > 0) {
        console.log("L:A");
        console.log(distance);
        console.log(distance2);
        chrome.browserAction.setBadgeText({text: badgeDay + "D"});
    }
    
}, 1000);
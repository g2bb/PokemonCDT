//Set Badge color
chrome.action.setBadgeBackgroundColor({color: "#8F00FF"});

// Set vars
var CDT, CUT, distance;
var BadgeCDT;

// Set the date we're counting down to
var countDownDate = new Date("Nov 18, 2022 00:00:00").getTime();

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

    //Fetch Settings
    chrome.storage.local.get("BadgeCDTSetting", function(result) {
        BadgeCDT = result.BadgeCDTSetting;
    });

    // Display the result in the banner text
    if (distance > 0 && BadgeCDT) {
        chrome.action.setBadgeText({text: badgeDay + "D"});
    } else {
        chrome.action.setBadgeText({text: ""});
    }

}, 1000);

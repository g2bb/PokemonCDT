setInterval(function() {
    document.getElementById("CDT").innerHTML = "Pokemon Brilliant Diamond and Shining Pearl will be available in</br>" + CDT.days + " Days " + CDT.hours + " Hrs " + CDT.minutes + " Mins " + CDT.seconds + " Secs";
    document.getElementById("CDT2").innerHTML = "Pokemon Legends: Arceus will be available in</br>" + CDT2.days + " Days " + CDT2.hours + " Hrs " + CDT2.minutes + " Mins " + CDT2.seconds + " Secs";

    if (distance < 0) {
        document.getElementById("CDT").innerHTML = "Pokemon Brilliant Diamond and Shining Pearl has been available for</br>" + CUT.days + " Days " + CUT.hours + " Hrs " + CUT.minutes + " Mins " + CUT.seconds + " Secs";
    }
    if (distance2 < 0){
        document.getElementById("CDT2").innerHTML = "Pokemon Legends: Arceus has been available for</br>" + CUT2.days + " Days " + CUT2.hours + " Hrs " + CUT2.minutes + " Mins " + CUT2.seconds + " Secs";
    }
}, 1000);
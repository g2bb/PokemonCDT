setInterval(function() {
    document.getElementById("CDT").innerHTML = "Pokémon Legends: Z-A will be available in</br>" + CDT.days + " Days " + CDT.hours + " Hrs " + CDT.minutes + " Mins " + CDT.seconds + " Secs";

    if (distance < 0) {
        document.getElementById("CDT").innerHTML = "Pokémon Legends: Z-A has been available for</br>" + CUT.days + " Days " + CUT.hours + " Hrs " + CUT.minutes + " Mins " + CUT.seconds + " Secs";
    }
}, 1000);


document.addEventListener('DOMContentLoaded', function() {
    //Make settings menu toggle buttons work.
    var gear = document.getElementById('settingsBtn');
    gear.addEventListener('click', function() {
        toggleSettings();
    });
    var close = document.getElementById('SettingsCloseBtn');
    close.addEventListener('click', function() {
        toggleSettings();
    });

    //Save settings when anything changes.
    var BadgeChkBx = document.getElementById('BadgeChkBx');
    BadgeChkBx.addEventListener('click', function() {
        storeData();
    });

    //Toggle settings menu "hidden" class.
    function toggleSettings(){
        var SettingsMenu = document.getElementById('SettingsMenu');
        SettingsMenu.classList.toggle('hidden');
    }

    //Fill settings with curent values.
    chrome.storage.local.get("BadgeCDTSetting", function(result) {
        document.getElementById('BadgeChkBx').checked = result.BadgeCDTSetting;
    });
});



function storeData(){
    // Get a value saved in a form.
    var BadgeCDT = document.getElementById('BadgeChkBx').checked;

    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'BadgeCDTSetting': BadgeCDT});
}

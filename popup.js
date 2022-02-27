setInterval(function() {
    document.getElementById("CDT").innerHTML = "Pokemon Scarlet and Violet will be available in</br>" + CDT.days + " Days " + CDT.hours + " Hrs " + CDT.minutes + " Mins " + CDT.seconds + " Secs";

    if (distance < 0) {
        document.getElementById("CDT").innerHTML = "Pokemon Scarlet and Violet has been available for</br>" + CUT.days + " Days " + CUT.hours + " Hrs " + CUT.minutes + " Mins " + CUT.seconds + " Secs";
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
    var RssChkBx = document.getElementById('RssChkBx');
    RssChkBx.addEventListener('click', function() {
        storeData();
        toggleRss();
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
    chrome.storage.local.get("RssSetting", function(result) {
        document.getElementById('RssChkBx').checked = result.RssSetting;
    });

    setTimeout(function(){
        //When DOM loads check if RssChkBx is unchecked. If yes hide.
        if(!RssChkBx.checked){
            toggleRss();
        }
    }, 100);

    //Toggle RSS based on sored setting.
    function toggleRss(){
        var Rss = document.getElementById('marquee');
        var TimeBg = document.getElementById('TimeBG');
        Rss.classList.toggle('hidden');
        TimeBG.classList.toggle('noRSS');
    }
});



function storeData(){
    // Get a value saved in a form.
    var BadgeCDT = document.getElementById('BadgeChkBx').checked;
    var RssChkBx = document.getElementById('RssChkBx').checked;

    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'BadgeCDTSetting': BadgeCDT});
    chrome.storage.local.set({'RssSetting': RssChkBx});
}

document.addEventListener('DOMContentLoaded', () => {

    const feedUrl = ['https://cors.g2bb1965.workers.dev/corsproxy/?apiurl=https://www.pokemon.com/us/pokemon-news/rss?order=DESC'
    ];

    const elementSelector = document.getElementById('marquee');

    new RSSMarquee(feedUrl, elementSelector, {
        speed: 110,
        maxItems: 5
    });
});

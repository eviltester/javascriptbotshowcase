var twitterAdCloserBot = setInterval(function(){ 
        var advert = document.querySelector("div.promoted-tweet button.js-action-dismiss"); 
        if(advert){
            advert.click();
            console.log("BOT: Removed an ad");
        }
        var didYouMiss = document.querySelector("div.recap-header button[data-feedback-type='SeeFewer']"); 
        if(didYouMiss){
            didYouMiss.click();
            console.log("BOT: Removed the Did you miss?");
        } 
    },200);
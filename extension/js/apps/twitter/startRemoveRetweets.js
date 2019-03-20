var twitterRetweetRemoverBot = setInterval(function(){ 
        var retweet = document.querySelector("div[data-retweeter]"); 
        if(retweet){
            retweet.parentNode.removeChild(retweet);
            console.log("BOT: Removed an Retweet");
        } 
        var quotes = document.querySelector("div.tweet  > div.content > div.QuoteTweet"); 
        if(quotes){
            var quoter = quotes.parentNode;
            quoter.parentNode.removeChild(quoter);
            console.log("BOT: Removed an Quote");
        } 
    },200);
var twitterReplyRemoverBot = setInterval(function(){ 
        var conversation = document.querySelector("ol.conversation-module"); 
        if(conversation){
            conversation.parentNode.removeChild(conversation);
            console.log("BOT: Removed an Conversation");
        } 
    },200);
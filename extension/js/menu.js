var menuActions = [
    // parent menu items need to have a unique menuref, which is used by other items as the 'menu:' property
    // currently parents need to be defined first in the array
    { menu: "", "title": "Apps", menuref: "A", file: ""},
        { menu: "A", "title": "Twitter", menuref: "A>T", file: ""},
            {menu: "A>T", "title": "Start Twitter Ad Removal Bot", file: "js/apps/twitter/startRemoveAds.js", instant: false},
            {menu: "A>T", "title": "Stop Twitter Ad Removal Bot", file: "js/apps/twitter/stopRemoveAds.js", instant:false},
            {menu: "A>T", "title": "Start Twitter Retweet Removal Bot", file: "js/apps/twitter/startRemoveRetweets.js", instant: false},
            {menu: "A>T", "title": "Stop Twitter Retweet Removal Bot", file: "js/apps/twitter/stopRemoveRetweets.js", instant:false},
            {menu: "A>T", "title": "Start Twitter Reply Removal Bot", file: "js/apps/twitter/startRemoveReplies.js", instant: false},
            {menu: "A>T", "title": "Stop Twitter Reply Removal Bot", file: "js/apps/twitter/stopRemoveReplies.js", instant:false},
    { menu: "", "title": "Games", menuref: "G", file: ""},
        { menu: "G", "title": "ZType", menuref: "G>Z", file: ""},          
            {menu: "G>Z", "title": "Start Crude ZType Bot", file: "js/games/ztype/startCrudeBot.js", instant: false},
            {menu: "G>Z", "title": "Start Good ZType Bot", file: "js/games/ztype/startGoodBot.js", instant: false},
            {menu: "G>Z", "title": "Stop ZType Bot", file: "js/games/ztype/stopZtypeBot.js", instant:false},
];
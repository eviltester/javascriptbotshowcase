    var zTypeBotAlphaChars = "abcdefghijklmnopqrstuvwxyz";
    var zTypeBotCharToType = 0;
    ztypebot = setInterval(function() {
        window.ig.game.shoot(zTypeBotAlphaChars.charAt(zTypeBotCharToType));
        zTypeBotCharToType = (zTypeBotCharToType+1) % 26;
    }, 100);

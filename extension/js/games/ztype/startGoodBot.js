    ztypebot = setInterval(function() {
        if (ig.game.currentTarget == null) {
            for (var t in ig.game.targets) {
                if (ig.game.targets[t].length > 0) {
                    ig.game.shoot(t);
                    break;
                }
            }
        } else {
            while (ig.game.currentTarget != null) {
                ig.game.shoot(ig.game.currentTarget.remainingWord.charAt(0));
            }
        }
    }, 2);

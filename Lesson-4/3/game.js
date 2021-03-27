let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("game over");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },
    init() {
        console.log("положение на поле");
        renderer.render();
        console.log("чтобы начать игру наберите game.run(); и нажмите Enter.");
    }
};

game.init();


let mover = {
    getDirection() {
        const availableDirections = [2, 4, 6, 8];
        while (true) {
            let direction = parseInt(prompt("используйте 2 4 6 8 на нумпаде для того чтобы перемещаться"));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("для перемещения необходимы числа 2 4 6 8");
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
        }
        return nextPosition;
    }
}
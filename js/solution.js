(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    function bfs(map, x, y) {
        let arr = [];
        arr.push({x: x, y: y})
        map[y][x] = WATER;
        while (arr.length >0){
            let point = arr.shift();
            switch(point.x) {
                case 0:
                {
                    if (map[point.y][point.x + 1] === ISLAND) {
                        map[point.y][point.x + 1] = WATER;
                        arr.push({x: point.x+1, y: point.y})
                    }
                    break
                }
                case map[0].length-1:
                    if (map[point.y][point.x - 1] === ISLAND) {
                        map[point.y][point.x - 1] = WATER;
                        arr.push({x: point.x-1, y: point.y})
                    }
                    break
                default : {
                    if (map[point.y][point.x + 1] === ISLAND) {
                        map[point.y][point.x + 1] = WATER;
                        arr.push({x: point.x+1, y: point.y})
                    }
                    if (map[point.y][point.x - 1] === ISLAND) {
                        map[point.y][point.x - 1] = WATER;
                        arr.push({x: point.x-1, y: point.y})
                    }
                }
            }
            switch(point.y) {
                case 0:
                {
                    if (map[point.y + 1][point.x] === ISLAND) {
                        map[point.y + 1][point.x] = WATER;
                        arr.push({x: point.x, y: point.y + 1})
                    }
                    break
                }
                case map.length-1:
                    if (map[point.y - 1][point.x] === ISLAND) {
                        map[point.y - 1][point.x] = WATER;
                        arr.push({x: point.x, y: point.y - 1})
                    }
                    break
                default : {
                    if (map[point.y + 1][point.x] === ISLAND) {
                        map[point.y + 1][point.x] = WATER;
                        arr.push({x: point.x, y: point.y + 1})
                    }
                    if (map[point.y - 1][point.x] === ISLAND) {
                        map[point.y - 1][point.x] = WATER;
                        arr.push({x: point.x, y: point.y - 1})
                    }
                }
            }
        }
    }

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var island = 0;
        var row,
            cell,
            x,
            y;
        for (y = 0; y < map.length; y++) {
            row = map[y];
            for (x = 0; x < row.length; x++) {
                cell = row[x];
                if (cell === ISLAND) {
                    island++;
                    bfs(map,x,y);
                }
            }
        }
        return island;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);

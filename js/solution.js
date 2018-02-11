(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    function bfs(map, x, y) {
        let arr = [];
        arr.push({x: x, y: y})
        map[x][y] = WATER;
        while (arr.length >0){
            let point = arr.shift();
            console.log(map.length);
            console.log(map[0].length)
            switch(point.x) {
                case 0:
                {
                    if (map[point.x + 1][point.y] === ISLAND) {
                        map[point.x + 1][point.y] = WATER;
                        arr.push({x: x+1, y: y})
                    }
                    break
                }
                case map[0].length:
                    if (map[point.x - 1][point.y] === ISLAND) {
                        map[point.x - 1][point.y] = WATER;
                        arr.push({x: x-1, y: y})
                    }
                    break
                default : {
                    if (map[point.x + 1][point.y] === ISLAND) {
                        map[point.x + 1][point.y] = WATER;
                        arr.push({x: x+1, y: y})
                    }
                    if (map[point.x - 1][point.y] === ISLAND) {
                        map[point.x - 1][point.y] = WATER;
                        arr.push({x: x-1, y: y})
                    }
                }
            }
            switch(point.y) {
                case 0:
                {
                    if (map[point.x][point.y + 1] === ISLAND) {
                        map[point.x][point.y + 1] = WATER;
                        arr.push({x: x, y: y + 1})
                    }
                    break
                }
                case map.length:
                    if (map[point.x][point.y - 1] === ISLAND) {
                        map[point.x][point.y - 1] = WATER;
                        arr.push({x: x, y: y - 1})
                    }
                    break
                default : {
                    if (map[point.x][point.y + 1] === ISLAND) {
                        map[point.x][point.y + 1] = WATER;
                        arr.push({x: x, y: y + 1})
                    }
                    if (map[point.x][point.y - 1] === ISLAND) {
                        map[point.x][point.y - 1] = WATER;
                        arr.push({x: x, y: y - 1})
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
        console.log(island);
        // todo: подсчитать кол-во островов на карте
        return island;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);

(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    const classPassed = 'passed';
    const classActive = 'active';
    const textCount = 'Count: ';

    let way = [];

    function addClass(domMap, x, y, status) {
        let elem = domMap.children[y + 1].children[x];
        if (status) {
            elem.classList.add(classPassed);
        }
        elem.classList.add(classActive);

    }

    function removeClass(domMap, x, y) {
        let elem = domMap.children[y + 1].children[x];
        elem.classList.remove(classActive);
    }

    function bfs(map, x, y) {
        let arr = [];
        arr.push({x: x, y: y})
        map[y][x] = WATER;
        while (arr.length > 0) {
            let point = arr.shift();
            way.push({x: point.x, y: point.y, status: 1})
            switch (point.x) {
                case 0: {
                    if (map[point.y][point.x + 1] === ISLAND) {
                        map[point.y][point.x + 1] = WATER;
                        arr.push({x: point.x + 1, y: point.y})
                    }
                    break
                }
                case map[0].length - 1:
                    if (map[point.y][point.x - 1] === ISLAND) {
                        map[point.y][point.x - 1] = WATER;
                        arr.push({x: point.x - 1, y: point.y})
                    }
                    break
                default : {
                    if (map[point.y][point.x + 1] === ISLAND) {
                        map[point.y][point.x + 1] = WATER;
                        arr.push({x: point.x + 1, y: point.y})
                    }
                    if (map[point.y][point.x - 1] === ISLAND) {
                        map[point.y][point.x - 1] = WATER;
                        arr.push({x: point.x - 1, y: point.y})
                    }
                }
            }
            switch (point.y) {
                case 0: {
                    if (map[point.y + 1][point.x] === ISLAND) {
                        map[point.y + 1][point.x] = WATER;
                        arr.push({x: point.x, y: point.y + 1})
                    }
                    break
                }
                case map.length - 1:
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

    function solution(map) {
        let island = 0;
        let row,
            cell;
        for (let y = 0; y < map.length; y++) {
            row = map[y];
            for (let x = 0; x < row.length; x++) {
                cell = row[x];
                way.push({x: x, y: y, status: 0});
                if (cell === ISLAND) {
                    island++;
                    bfs(map, x, y);
                }
            }
        }
    }

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution(map) {
        solution(map);
        let island = 0;
        let domMap = document.querySelector('.map');
        let time = 0;
        let interval = 500;
        let prev = {x: 0, y: 0, status: 0};
        while (way.length > 0) {
            let point = way.shift();
            setTimeout(() => {
                removeClass(domMap, prev.x, prev.y);
                addClass(domMap, point.x, point.y, point.status);
                if (point.status & !prev.status) {
                    island++;
                    domMap.children[0].innerHTML = textCount + island;
                }
                prev = {x: point.x, y: point.y, status: point.status};
            }, time);
            time = time + interval;
        }
        setTimeout(() => {
            removeClass(domMap, prev.x, prev.y);
        }, time);
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);

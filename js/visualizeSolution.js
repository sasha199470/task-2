(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    var classPassed = " passed";
    var classActive = " active";
    var className = "";
    var textCount = "Count: ";

    var way = [];

    function addClass(domMap, x, y, status) {
        let elem = domMap.children[y + 1].children[x];
        if (status){
            elem.className += classPassed;
        }
        className = elem.className;
        elem.className += classActive;

    }
    function removeClass(domMap, x, y) {
        let elem = domMap.children[y + 1].children[x];
        elem.className = className;

    }
    function bfs(map, x, y) {
        let arr = [];
        arr.push({x: x, y: y})
        map[y][x] = WATER;
        while (arr.length >0){
            let point = arr.shift();
            way.push({x: point.x, y: point.y, status: 1})
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
    function solution(map) {
        var island = 0;
        var row,
            cell,
            x,
            y;
        console.log(map[0][0],map[0][1],map[0][2],map[0][3])
        for (y = 0; y < map.length; y++) {
            row = map[y];
            for (x = 0; x < row.length; x++) {
                cell = row[x];
                way.push({x: x, y: y, status:0});
                if (cell === ISLAND) {
                    island++;
                    bfs(map,x,y);
                }
            }
        }
        console.log(island);
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
        let interval = 1000;
        className = domMap.children[1].children[0].className;
        console.log(className)
        let prev = {x:0,y:0,status:0};
        while (way.length>0) {
            let point = way.shift();
            setTimeout(()=>{
                removeClass(domMap, prev.x,prev.y);
                addClass(domMap, point.x,point.y,point.status);
                if (point.status&!prev.status){
                    island++;
                    console.log(domMap.children[0].innerHTML = textCount + island)
                }
                prev = {x: point.x, y: point.y, status: point.status}
            },time);
            time = time + interval;
        }
        setTimeout(()=>{
            removeClass(domMap, prev.x,prev.y);
        },time)
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);

(function (root) {
    var map = root.SHRI_ISLANDS.MAP;
    // var count = root.SHRI_ISLANDS.solution(map);
    var count = 0;

    document.querySelector('.outer').appendChild(
        root.SHRI_ISLANDS.render(map, count)
    );
    root.SHRI_ISLANDS.visualizeSolution(map);
})(this);

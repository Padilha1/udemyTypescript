"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function areaCirc(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCirc = areaCirc;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));

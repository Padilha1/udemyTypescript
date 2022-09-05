"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        function areaRet(base, altura) {
            return base * altura;
        }
        Area.areaRet = areaRet;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));

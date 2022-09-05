console.log("=========NameSpaces=========")
// Below, doesn't guarantee the IMPORT
///<reference path="geometryCirc.ts"/>
///<reference path="geometryRet.ts"/>

// reference to namespace
// DON'T FORGET TO REFERENCE IN INDEX
console.log(Geometry.Area.areaCirc(10))
console.log(Geometry.Area.areaRet(10, 15))

// Namespace Inside 
// export inner namespace and reference at console.log
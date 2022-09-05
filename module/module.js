"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=======MODULE=======");
// import { areaRectangule } from "./rectangle";
// import { areaCircuference } from "./circuference";
const circuference_1 = require("./circuference");
const rectangle_1 = __importDefault(require("./rectangle"));
console.log((0, circuference_1.areaCircuference)(10));
console.log((0, rectangle_1.default)(5, 10));

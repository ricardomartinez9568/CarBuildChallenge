(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Vehicle = require("./carbuild");
document.getElementById("submit").onclick = function () { newCar(); };
function newCar() {
    var color = document.getElementById("color").value;
    var model = document.getElementById("model").value;
    var doors = document.getElementById("doors").value;
    var mpg = document.getElementById("MPG").value;
    var carObject = {
        incomingColors: color,
        incomingModel: model,
        incomingDoors: doors,
        incomingMPG: mpg
    };
    var myCar = new Vehicle.Car(carObject);
    console.log(myCar);
}

},{"./carbuild":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(labelledObj) {
        this.color = labelledObj.incomingColor;
        this.model = labelledObj.incomingModel;
        this.doors = labelledObj.incomingDoors;
        this.MPG = labelledObj.incomingMPG;
    }
    return Car;
}());
exports.Car = Car;

},{}]},{},[1]);

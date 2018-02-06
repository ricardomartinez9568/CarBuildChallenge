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

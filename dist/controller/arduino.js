"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class ArduinoController {
    constructor() {
        this.timers = new Array();
        this.timerListener();
    }
    timerListener() {
        setInterval(() => {
            console.log(this.timers.length);
            this.timers.forEach(timer => {
                axios_1.default.post(timer.targetDevice.ip + '5003').then(value => {
                    console.log("Arduino activated");
                }).catch(reason => {
                    console.log("Arduino not activated");
                });
            });
        }, 5000);
    }
}
exports.ArduinoController = ArduinoController;
const arduinoController = new ArduinoController();
exports.default = arduinoController;
//# sourceMappingURL=arduino.js.map
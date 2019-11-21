"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const timer_1 = require("./routes/timer");
class App {
    constructor() {
        this.timerRoutes = new timer_1.TimerRoutes();
        this.app = express();
        this.config();
        this.timerRoutes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=server.js.map
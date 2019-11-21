"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arduino_1 = require("../controller/arduino");
class TimerRoutes {
    routes(app) {
        app.route('/timer')
            .post((req, res) => {
            let timer = req.body.newTimer;
            arduino_1.default.timers.push(timer);
            res.status(200).send(JSON.stringify({ success: true }));
        }).delete((req, res) => {
            arduino_1.default.timers = arduino_1.default.timers.filter(timer => timer.id !== req.body.id);
            res.status(200).send(JSON.stringify({ success: true }));
        });
    }
}
exports.TimerRoutes = TimerRoutes;
//# sourceMappingURL=timer.js.map
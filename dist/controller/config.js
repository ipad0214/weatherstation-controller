"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Config {
    constructor() { }
    async getConfig() {
        return new Promise((resolve, reject) => {
            axios_1.default.get('http://localhost:5001/config/').then((data) => {
                resolve(data);
            });
        });
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map
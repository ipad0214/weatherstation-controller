"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figlet = require("figlet");
const server_1 = require("./server");
const PORT = 5002;
let boot = new Promise((resolve, reject) => {
    figlet('Weatherstation Controller', (err, banner) => {
        if (err) {
            console.error("Something went wrong...");
            console.error(err);
            reject(false);
        }
        resolve(banner);
    });
});
boot.then((banner) => {
    console.info(banner);
    server_1.default.listen(PORT, () => {
        console.log('Express server listening on port ' + PORT);
    });
});
//# sourceMappingURL=main.js.map
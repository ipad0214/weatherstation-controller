import axios from 'axios';
import {ITimer} from "../models/timer.interface";

export class ArduinoController {

    public timers: Array<ITimer> = new Array<ITimer>();

    constructor() {
        this.timerListener();
    }

    timerListener() {
        setInterval(() => {
            console.log(this.timers.length);
            this.timers.forEach(timer => {
               axios.post(timer.targetDevice.ip + '5003').then(value => {
                    console.log("Arduino activated");
               }).catch(reason => {
                   console.log("Arduino not activated");
               });
            });
        }, 5000)
    }

}

const arduinoController = new ArduinoController();
export default arduinoController;

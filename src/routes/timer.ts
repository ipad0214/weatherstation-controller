import { Request, Response } from "express";
import { ITimer } from "./../models/timer.interface";
import arduinoController from "../controller/arduino";

export class TimerRoutes {
    public routes(app: any): void {
        app.route('/timer')
            .post((req: Request, res: Response) => {
                let timer: ITimer = req.body.newTimer;
                arduinoController.timers.push(timer);

                res.status(200).send(JSON.stringify({success: true}));
            }).delete((req: Request, res: Response) => {
                arduinoController.timers = arduinoController.timers.filter(timer => timer.id !== req.body.id);
                res.status(200).send(JSON.stringify({success: true}));
            });
    }
}

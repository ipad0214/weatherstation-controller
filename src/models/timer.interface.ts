
export interface ITimer {
    id: number;
    name: string;
    days: string;
    time: string;
    duration: number;
    targetDevice: {
        name: string;
        ip: string;
    }
}

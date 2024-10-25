export interface Game {
    id:           number;
    titleId:      number;
    name:         string;
    devices:      Device[];
    displayImage: string;
    createdAt:    Date;
    updatedAt:    Date;
}


export enum Device {
    Android = "Android",
    Mobile = "Mobile",
    PC = "PC",
    Win32 = "Win32",
    Xbox360 = "Xbox360",
    XboxOne = "XboxOne",
    XboxSeries = "XboxSeries",
}
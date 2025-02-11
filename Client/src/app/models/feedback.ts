import { Data } from "@angular/router";

export interface FeedBack{
    id: number,
    star: number,
    feedBack: string,
    userName: string,
    created: Data
}
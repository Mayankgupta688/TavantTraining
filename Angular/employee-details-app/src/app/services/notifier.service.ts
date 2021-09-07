import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class NotifierService {
    notifierEvent: EventEmitter<any> = new EventEmitter()
}
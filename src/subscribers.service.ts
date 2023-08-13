import { Injectable } from "@nestjs/common";

@Injectable()
export class SubscriberService {
    notifySubscribers() {
        console.log("Subscribers have been notified")
    }
}
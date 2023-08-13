import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class AddService {
    @OnEvent('video.created')
    enableAdd({ title }: { title: string }) {
        console.log("adds enabled, title of video is: ", title)
    }
}
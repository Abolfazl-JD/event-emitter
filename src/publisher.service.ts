import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class PublisherService {

    @OnEvent('video.created')
    confirmPublisher({ title }: { title: string }) {
        console.log("youtube publisher has confirmed your video, title is :", title)
    }
}
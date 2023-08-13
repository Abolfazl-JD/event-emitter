import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AddService } from './add.service';
import { PublisherService } from './publisher.service';
import { SubscriberService } from './subscribers.service';

@Injectable()
export class AppService {

  constructor(
    private readonly addService: AddService,
    private readonly publisherService: PublisherService,
    private readonly subscribersService: SubscriberService,
    private eventEmitter: EventEmitter2
  ) { }

  createVideo() {
    console.log('video created')
    this.eventEmitter.emit('video.created', { title: 'Nestjs' })

    this.subscribersService.notifySubscribers()
    return 'all done'
  }
}

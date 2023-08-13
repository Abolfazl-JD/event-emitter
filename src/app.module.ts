import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AddService } from './add.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherService } from './publisher.service';
import { SubscriberService } from './subscribers.service';

@Module({
  imports: [
    EventEmitterModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, PublisherService, AddService, SubscriberService],
})
export class AppModule { }

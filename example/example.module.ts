import { Module } from '@nestjs/common';
import { ExampleCommandHandler } from 'example/example.command';
import { ExampleController } from 'example/example.controller';
import { ExampleNotificationHandler1 } from 'example/example.notification';
import { MediatorModule } from 'src/lib/mediator.module';
import { ExceptionHandler } from './example.di';

@Module({
  imports: [MediatorModule],
  controllers: [ExampleController],
  providers: [ExampleCommandHandler, ExampleNotificationHandler1, ExceptionHandler],
})
export class ExampleModule {}

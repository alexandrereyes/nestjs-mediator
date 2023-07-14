import { Body, Controller, Post } from '@nestjs/common';
import { ExampleCommand } from 'example/example.command';
import { ExampleNotification } from 'example/example.notification';
import { Mediator } from 'src/lib';
import { ExceptionHandler } from './example.di';

@Controller('example')
export class ExampleController {
  constructor(private mediator: Mediator, private exceptionHandler: ExceptionHandler) {}

  @Post()
  command(@Body() command: ExampleCommand) {
    return this.mediator.send(command);
  }

  @Post('notification')
  notification(@Body() noti: ExampleNotification) {
    this.exceptionHandler.xpto = 'blah!';
    return this.mediator.publish(noti);
  }
}

import { NotificationHandler, INotificationHandler, Notification } from 'src/lib';
import { ExceptionHandler } from './example.di';

export class ExampleNotification extends Notification {}

@NotificationHandler(ExampleNotification)
export class ExampleNotificationHandler1 implements INotificationHandler<ExampleNotification> {
  constructor(private exceptionHandler: ExceptionHandler) {}
  handle(data: ExampleNotification) {
    console.log(this.exceptionHandler);
    console.log('data1', data);
  }
}

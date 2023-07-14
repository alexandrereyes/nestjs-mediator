import { Request, RequestHandler, IRequestHandler } from 'src/lib';
import { ExceptionHandler } from './example.di';
export class ExampleCommand extends Request<string> {
  id: string;
}
@RequestHandler(ExampleCommand)
export class ExampleCommandHandler implements IRequestHandler<ExampleCommand, string> {
  constructor(private exceptions: ExceptionHandler) {}

  handle(data: ExampleCommand): Promise<string> {
    console.log(this.exceptions);
    return Promise.resolve(data.id);
  }
}

import { EggLogger } from 'egg';
import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum,Context, EggContext } from '@eggjs/tegg';

@HTTPController({
  path: '/',
})
export class HomeController {
  @Inject()
  logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/',
  })
  async index(@Context() ctx: EggContext) {
    this.logger.info('hello egg logger');
    this.logger.info('ctx',ctx)
    ctx.body = 'hello ctx egg';
    return
  }
}

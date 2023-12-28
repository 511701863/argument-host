import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestFilterModule } from './test-filter/test-filter.module';
import { BbbModule } from './bbb/bbb.module';
import { CustomModule } from './custom-module/custon-module.module';
import { TestMiddleware } from './test.middleware';
import { TwoTestMiddleware } from './twoTest.middleware';

@Module({
  imports: [
    TestFilterModule, BbbModule.register({ value: '测试参数' }),
    CustomModule.register({ aaa: 'string', bbb: 9871, isGlobal: true }),
    CustomModule.registerAsync({
      useFactory: async () => {
        await 111;
        return {
          aaa: '123123',
          bbb: 999999999
        }
      },
      inject: []
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(TestMiddleware,TwoTestMiddleware).forRoutes('custom-module/*')
      consumer.apply(TestMiddleware,TwoTestMiddleware).forRoutes('bbb')
  }
}

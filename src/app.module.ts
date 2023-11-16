import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestFilterModule } from './test-filter/test-filter.module';
import { BbbModule } from './bbb/bbb.module';

@Module({
  imports: [TestFilterModule, BbbModule.register({value:'测试参数'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

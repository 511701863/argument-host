import { Controller, Get, Inject } from '@nestjs/common';
import { CccModuleOptions, MODULE_OPTIONS_TOKEN,OPTIONS_TYPE } from './ccc-module-defineiton';

@Controller('custom-module')
export class CustomModuleController {
    @Inject(MODULE_OPTIONS_TOKEN)
    private options: typeof OPTIONS_TYPE;

    @Get()
    findAll() {
        return this.options
    }
    @Get('/list')
    findList() {
        return JSON.stringify(['1234', 'sdsdsd'])
    }
}

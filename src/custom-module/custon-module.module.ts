import {  Module } from "@nestjs/common";
import { CustomModuleController } from "./custom-module.controller";
import { ConfigurableModuleClass } from "./ccc-module-defineiton";



@Module({
    controllers:[CustomModuleController]
})
export class CustomModule extends ConfigurableModuleClass {
    
} 
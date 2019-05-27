import { SystemSettings } from './system-settings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SystemSettingsService } from './system-settings.service';
import { SystemSettingsResolver } from './system-settings.resolver';

@Module({
  providers: [SystemSettingsService, SystemSettingsResolver],
  imports: [TypeOrmModule.forFeature([SystemSettings])],
  exports: [SystemSettingsService],
})
export class SystemSettingsModule {}

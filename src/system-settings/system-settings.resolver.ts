import { SystemSettingsService } from './system-settings.service';
import { Resolver } from '@nestjs/graphql';

@Resolver('SystemSettings')
export class SystemSettingsResolver {
  constructor(private systemSettingsService: SystemSettingsService) {}
}

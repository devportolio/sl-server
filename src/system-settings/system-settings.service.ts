import { SystemSettings } from './system-settings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from './../shared/base.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class SystemSettingsService extends BaseService {
  constructor(
    @InjectRepository(SystemSettings)
    private readonly systemSettings: Repository<SystemSettings>,
  ) {
    super(systemSettings);
  }
}

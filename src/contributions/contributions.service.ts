import { SystemSettingsService } from './../system-settings/system-settings.service';
import { BaseService } from './../shared/base.service';
import { Contributions } from './contributions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Scope, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ContributionsService extends BaseService {
  constructor(
    @InjectRepository(Contributions)
    private readonly contributionsRepository: Repository<Contributions>,

    private readonly systemSettings: SystemSettingsService,
  ) {
    super(contributionsRepository);
  }

  async getSettings() {
    let setting = await this.systemSettings.first();
    if (!setting) {
      setting = await this.systemSettings.create();
    }

    return setting;
  }
}

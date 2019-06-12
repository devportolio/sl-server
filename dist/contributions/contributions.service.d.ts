import { SystemSettingsService } from './../system-settings/system-settings.service';
import { BaseService } from './../shared/base.service';
import { Contributions } from './contributions.entity';
import { Repository } from 'typeorm';
export declare class ContributionsService extends BaseService {
    private readonly contributionsRepository;
    private readonly systemSettings;
    constructor(contributionsRepository: Repository<Contributions>, systemSettings: SystemSettingsService);
    getSettings(): Promise<any>;
}

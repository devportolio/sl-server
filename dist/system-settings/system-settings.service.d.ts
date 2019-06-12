import { SystemSettings } from './system-settings.entity';
import { BaseService } from './../shared/base.service';
import { Repository } from 'typeorm';
export declare class SystemSettingsService extends BaseService {
    private readonly systemSettings;
    constructor(systemSettings: Repository<SystemSettings>);
}

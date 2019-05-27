import { SystemSettingsModule } from './../system-settings/system-settings.module';
import { ContributionsResolover } from './contributions.resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contributions } from './contributions.entity';
import { Module } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { SystemSettingsService } from 'src/system-settings/system-settings.service';
import { ContributionPaymentsModule } from './contribution-payments/contribution-payments.module';

@Module({
  providers: [
    ContributionsService,
    ContributionsResolover,
    SystemSettingsService,
  ],
  imports: [TypeOrmModule.forFeature([Contributions]), SystemSettingsModule, ContributionPaymentsModule],
})
export class ContributionsModule {}

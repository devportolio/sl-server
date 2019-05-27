import { Module } from '@nestjs/common';
import { ContributionPaymentsService } from './contribution-payments.service';

@Module({
  providers: [ContributionPaymentsService]
})
export class ContributionPaymentsModule {}

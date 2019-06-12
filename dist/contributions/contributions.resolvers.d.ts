import { ContributionsService } from './contributions.service';
export declare class ContributionsResolover {
    private contributionsService;
    constructor(contributionsService: ContributionsService);
    allContributions(userId: number): Promise<any[]>;
    addContribution(numberOfShare: number, user: any): Promise<any>;
}

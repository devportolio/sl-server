import { Repository } from 'typeorm';
export declare class BaseService {
    private repository;
    constructor(repository: Repository<any>);
    findAll(criteria?: any): Promise<any[]>;
    findById(itemId: number): Promise<any>;
    first(): Promise<any>;
    create(newItem?: any): Promise<any>;
    update(itemId: string, updateItem: any): Promise<any>;
    delete(itemId: string): Promise<any>;
}

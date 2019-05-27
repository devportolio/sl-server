import { UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';

export class BaseService {
  constructor(private repository: Repository<any>) {}

  async findAll(criteria?: any): Promise<any[]> {
    return await this.repository.find(criteria);
  }

  async findById(itemId: number) {
    const item = await this.repository.findOne(itemId);

    if (!item) {
      throw new UnauthorizedException('Item not found.');
    }

    return item;
  }

  async first() {
    return await this.repository.findOne();
  }

  async create(newItem?: any): Promise<any> {
    const item = await this.repository.create(newItem);
    await this.repository.save(item);
    return item;
  }

  async update(itemId: string, updateItem: any): Promise<any> {
    await this.repository.update(itemId, { ...updateItem });
    return await this.repository.findOne(itemId);
  }

  async delete(itemId: string): Promise<any> {
    const result = await this.repository.delete(itemId);
    return result.raw.affectedRows > 0;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: {
        product: true,
      },
    });
  }

  async findById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        id,
      },
      relations: {
        product: true,
      },
    });

    if (!category)
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);

    return category;
  }

  async findAllByCategory(category: string): Promise<Category[]> {
    return await this.categoryRepository.find({
      where: {
        category: ILike(`%${category}%`),
      },
      relations: {
        product: true,
      },
    });
  }

  async create(Category: Category): Promise<Category> {
    return await this.categoryRepository.save(Category);
  }

  async update(category: Category): Promise<Category> {
    await this.findById(category.id);

    return await this.categoryRepository.save(category);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.categoryRepository.delete(id);
  }
}

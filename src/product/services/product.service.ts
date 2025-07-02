import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { CategoryService } from '../../category/service/category.service';
import { Product } from '../entities/product.entities';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private CategoryService: CategoryService,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
      relations: { category: true },
    });
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
      relations: { category: true },
    });

    if (!product)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return product;
  }

  async findAllByName(name: string): Promise<Product[]> {
    return await this.productRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
      relations: { category: true },
    });
  }

  async create(product: Product): Promise<Product> {
    await this.CategoryService.findById(product.category.id);
    return await this.productRepository.save(product);
  }

  async update(product: Product): Promise<Product> {
    const buscaProduct = await this.findById(product.id);

    if (!buscaProduct || !product.id)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return await this.productRepository.save(product);
  }

  async delete(id: number): Promise<DeleteResult> {
    const buscaProduct = await this.findById(id);

    if (!buscaProduct)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return await this.productRepository.delete(id);
  }
}

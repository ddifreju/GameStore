// src/product/product.entity.ts
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @Column({ length: 100, nullable: true })
  description: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  gender: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @ManyToOne(() => Category, (category) => category.product, {
    onDelete: 'CASCADE'
  })
  category: Category;

}

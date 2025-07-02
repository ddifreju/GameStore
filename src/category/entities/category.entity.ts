import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entities';

@Entity({ name: 'tb_category' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  category: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}

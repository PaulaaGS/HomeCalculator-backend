import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../enums/order-status';
import { Unit } from '../enums/unit';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 60,
  })
  name: string;

  @Column({
    length: 10000,
    default: null,
    nullable: true,
  })
  description: string | null;

  @Column({
    type: 'enum',
    enum: Unit,
    default: Unit.PIECE,
  })
  unit: Unit;

  @Column({
    type: 'float',
    precision: 9,
    scale: 2,
  })
  unitPriceNet: number;

  @Column({
    type: 'float',
    precision: 2,
    scale: 2,
  })
  vatRate: number;

  @Column({
    type: 'float',
    precision: 6,
    scale: 2,
  })
  quantity: number;

  @Column({
    type: 'float',
    precision: 9,
    scale: 2,
    default: 0,
  })
  paidAmount: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.NOT_ORDERED,
  })
  orderStatus: OrderStatus;

  @Column({
    length: 2048,
    default: null,
    nullable: true,
  })
  url: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}

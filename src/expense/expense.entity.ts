import { OrderStatus } from 'src/enums/order-status';
import { Unit } from 'src/enums/unit';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
        type:'enum',
        enum: Unit,
        default: Unit.PIECE,
    })
    unit: Unit;

    @Column({
        type: 'float',
        precision: 6,
        scale: 2,
    })
    unitPriceNet: number;

    @Column({
        type: 'float',
        precision: 6,
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
        precision: 6,
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
}
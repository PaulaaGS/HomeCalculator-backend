import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Expense extends BaseEntity {

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
        length: 10,
    })
    unit: string;

    @Column({
        type: 'float',
        precision: 6,
        scale: 2,
    })
    unitPriceNet: number;

    @Column({
        type: 'integer',
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
    })
    paidAmount: number;

    @Column({
        length: 20,
    })
    status: string;

    @Column({
        length: 2048,
        default: null,
        nullable: true,
    })
    url: string;
}
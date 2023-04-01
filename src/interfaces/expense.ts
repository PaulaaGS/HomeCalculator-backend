import { OrderStatus } from "src/enums/order-status";
import { Unit } from "src/enums/unit";

export interface Expense {
    id: string;
    name: string;
    description: string | null;
    unit: Unit;
    unitPriceNet: number;
    vatRate: number;
    quantity: number;
    paidAmount: number;
    orderStatus: OrderStatus;
    url: string;
}

export type GetListOfExpensesResponse = Expense[];

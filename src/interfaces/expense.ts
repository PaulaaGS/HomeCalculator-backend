import { Category } from '../enums/category';
import { OrderStatus } from '../enums/order-status';
import { Unit } from '../enums/unit';

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
  category: Category;
}

export type GetListOfExpensesResponse = Expense[];

export type GetOneExpenseResponse = Expense;

export type CreateExpenseResponse = Expense;

export type UpdateExpenseResponse = Expense;

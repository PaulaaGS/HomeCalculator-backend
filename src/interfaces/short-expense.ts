import { Expense } from './expense';

export type ShortExpense = Pick<
  Expense,
  'id' | 'name' | 'paidAmount' | 'orderStatus' | 'category'
> & { price: number };

export type GetShortListOfExpenseResponse = ShortExpense[];

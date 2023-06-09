import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import {
  CreateExpenseResponse,
  GetListOfExpensesResponse,
  UpdateExpenseResponse,
} from '../interfaces/expense';
import { GetShortListOfExpenseResponse } from '../interfaces/short-expense';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  async getExpenses(): Promise<GetListOfExpensesResponse> {
    return await this.expenseRepository.find({
      order: {
        category: 'ASC',
        createdAt: 'ASC',
      },
    });
  }

  async getShortListOfExpenses(): Promise<GetShortListOfExpenseResponse> {
    const expenses = await this.getExpenses();
    return expenses.map((ex) => {
      const price = ex.unitPriceGross * ex.quantity;
      return {
        id: ex.id,
        name: ex.name,
        paidAmount: ex.paidAmount,
        price,
        orderStatus: ex.orderStatus,
        category: ex.category,
      };
    });
  }

  async getOneExpense(id: string): Promise<Expense> {
    return await this.expenseRepository.findOneByOrFail({ id });
  }

  async removeExpense(id: string): Promise<void> {
    await this.expenseRepository.delete(id);
  }

  async createExpense(newExpense: Expense): Promise<CreateExpenseResponse> {
    return await this.expenseRepository.save(newExpense);
  }

  async updateExpense(
    id: string,
    updatedExpense: Expense,
  ): Promise<UpdateExpenseResponse> {
    await this.expenseRepository.update(id, updatedExpense);
    return this.getOneExpense(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { GetListOfExpensesResponse } from 'src/interfaces/expense';

@Injectable()
export class ExpenseService {
    constructor(
        @InjectRepository(Expense)
        private expenseRepository: Repository<Expense>,
    ) {}

    async getExpenses(): Promise<GetListOfExpensesResponse> {
        return await this.expenseRepository.find();
    }
}

import { Controller, Get, Inject } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { GetListOfExpensesResponse } from 'src/interfaces/expense';

@Controller('expense')
export class ExpenseController {

    constructor(
        @Inject(ExpenseService) private expenseService: ExpenseService,
    ) {}

    @Get('/')
    getListOfExpenses(): Promise<GetListOfExpensesResponse> {
        return this.expenseService.getExpenses();
    }
}

import { Inject, Injectable } from '@nestjs/common';
import { ExpenseService } from '../expense/expense.service';
import { GetSummaryResponse } from '../interfaces/summary';

@Injectable()
export class SummaryService {
    constructor(
        @Inject(ExpenseService) private expenseService: ExpenseService,
    ) { }

    async getSummary(): Promise<GetSummaryResponse> {
        const expenses = await this.expenseService.getExpenses();

        const expensesSum = expenses.map(ex => {
            return Number((ex.unitPriceNet * (ex.vatRate + 1) * ex.quantity).toFixed(2))
        }).reduce((prev, curr) => (prev + curr), 0)

        const expensesPaid = expenses.map(ex => {
            return (ex.paidAmount)
        }).reduce((prev, curr) => (prev + curr), 0)

        return {
            expensesSum,
            expensesPaid
        }
    }
}
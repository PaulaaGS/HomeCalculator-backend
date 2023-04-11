import { Controller, Inject, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { GetSummaryResponse } from '../interfaces/summary';

@Controller('summary')
export class SummaryController {
  constructor(@Inject(SummaryService) private summaryService: SummaryService) {}

  @Get('/')
  getSummary(): Promise<GetSummaryResponse> {
    return this.summaryService.getSummary();
  }
}

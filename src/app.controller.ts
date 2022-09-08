import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { data, ReportType } from './data';
import { v4 as uuid } from "uuid"; 


@Controller('report/:type')
export class AppController {
  @Get()
  getAllVapeSaleReports( @Param('type') type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((report) => report.type === reportType)
    
  }

  @Get(':id')
    getVapeSaleReportById(
     @Param('type') type : string,
    @Param('id') id: string
    ){
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

        return data.report.
        filter((report) =>  report.type === reportType).find((report) => report.id === id);
      
    }

    @Post()
    createVapeSalesReport(
   @Body()  {amount, source}: {
        amount: number;
        source: string
      },
      @Param('type') type: string,
    ){
      const newReport = {
        id: uuid(),
        source,
        amount,
        created_at: new Date(),
        updated_at: new Date(),
        type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
      }
    data.report.push(newReport);
      return newReport;
    
}


    
    @Put(':id')
    updateVapeSalesReport(){
        return "updated";
    }

    @Delete(':id')
      deleteVapeSalesReport(){
        return 'deelete';
      }
    
    }

  //http://localhost:3000/report/sales/saleid22



//http://localhost:3000/ + controller decorator + method decorator 
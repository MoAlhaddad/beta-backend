import { Controller, Get, Post, Put, Delete } from '@nestjs/common';


@Controller('report/:type')
export class AppController {
  @Get()
  getAllVapeSaleReports() {
    return [];
  }

  @Get(':id')
    getVapeSaleReportById(){
      return {};
    }

    @Post()
    createVapeSalesReport(){
      return "Created"
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
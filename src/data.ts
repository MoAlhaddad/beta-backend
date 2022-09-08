import { report } from "process";

export const data = {
    report: []
}

interface Data {
report: [{
    id: string,
    source: string,
    amount: number,
    created_at: Date,
    updated_at: Date;
    type: "sales" | "expense"
}]
}

enum ReportType {
    INCOME = "sales",
    EXPENSE = "expense"
}

data.report.push({
    id: "uuid",
    source: "Sales",
    amount: 6400,
    created_at: new Date(),
    updated_at: new Date(),
    type:ReportType.INCOME
})


data.report.push('threethousand')

data.report.push(1268)

data.report.push(true)

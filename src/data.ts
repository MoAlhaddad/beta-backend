import { report } from "process";

export enum ReportType {
    INCOME = "sales",
    EXPENSE = "expense"
}

export const data: Data = {
    report: [
        {
            id: "uuid1",
            source: "HCOW 6000 Puff",
            amount: 6000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "HCOW 2500 Puff",
            amount: 4000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid3",
            source: "Hcow 5000 puff",
            amount: 6000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid4",
            source: "SmokeShop Cosignment Bonus",
            amount: 16500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        }
    ],
};

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
    }


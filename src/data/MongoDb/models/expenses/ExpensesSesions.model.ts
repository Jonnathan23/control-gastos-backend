import mongoose, { PopulatedDoc } from "mongoose";
import { ProyectsControlI } from "../ProyectsControl.model";
import { ExpensesI } from "./Expenses.model";



export interface ExpensesSesionsI {
    ex_ses_id: string
    ex_ses_name: string
    ex_pro_id: PopulatedDoc<ProyectsControlI>
    ex_all_expenses: PopulatedDoc<ExpensesI>[]
}

const ExpensesSesionsSchema = new mongoose.Schema<ExpensesSesionsI>({
    ex_ses_id: { type: String, required: true },
    ex_ses_name: { type: String, required: true },
});

export const ExpensesSesions = mongoose.model<ExpensesSesionsI>('ExpensesSesions', ExpensesSesionsSchema);
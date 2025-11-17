import mongoose from "mongoose";


export interface ExpensesI {
    ex_id: string
    ex_name: string
    ex_quentity: number
    //TODO    exp_ex_ses_id: string
}


const SchemaExpenses = new mongoose.Schema<ExpensesI>({
    ex_id: { type: String, required: true },
    ex_name: { type: String, required: true },
    ex_quentity: { type: Number, required: true },
    //TODO    exp_ex_ses_id: { type: String, required: true }
});


export const Expenses = mongoose.model<ExpensesI>('Expenses', SchemaExpenses);
import mongoose from "mongoose";



export interface CategoriesI {
    cat_id: string
    cat_name: string
    cat_icon: string
}


const CategoriesSchema = new mongoose.Schema<CategoriesI>({
    cat_id: { type: String, required: true },
    cat_name: { type: String, required: true },
    cat_icon: { type: String, required: true }
});

export const Categories = mongoose.model<CategoriesI>('Categories', CategoriesSchema);
import mongoose from "mongoose";


export interface ProyectsControlI {
    pro_id: string
    pro_name: string
}

const ProyectsControlSchema = new mongoose.Schema<ProyectsControlI>({
    pro_id: { type: String, required: true },
    pro_name: { type: String, required: true },
});

export const ProyectsControl = mongoose.model<ProyectsControlI>('ProyectsControl', ProyectsControlSchema);
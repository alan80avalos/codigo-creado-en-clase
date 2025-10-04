import { model, Schema, SchemaTypes } from 'mongoose';

//Nombre y correo
const userSchema = new Schema({
    name: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true, unique: true }
});

                    //Users -> nombre de la colección (se pone en plural!!!)
const user = model('user', userSchema);
//export const User = model('User', userSchema);
 //La interfaz se llama IUser por convención de los programadores
export interface IUser {
    //El "?" indica que es opcional
    id?: number;
    name: string;
    email: string;
    password?: string;
}
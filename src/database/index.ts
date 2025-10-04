import { connect } from 'mongoose';
//import { connect as mongoConnect} from 'mongoose';  -> por si queremos cambiarle el nombre a la función




//const dbConnect = (cb: () => ) => {   -> callback cuando se conecte
                            //Promise<void> -> para asignar el tipo de dato que regresa la promesa
export const dbConnect = (): Promise<void> => {

    return new Promise((resolve, reject) => {
        connect(process.env.MONGO_URL!).then(() => {
            resolve();
        }).catch(() => {
            reject();
        });
    });
}

/*
dbConnect().then(() => {
    app.listen(prompt, () => {
        console.log(`App is running in port ${port}`)
    });
}).catch((error) => {
    console.log('Error to connect to database');
    console.log(error);
});
*/
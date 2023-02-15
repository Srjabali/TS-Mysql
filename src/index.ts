import {App} from './app'

async function main(){
    const app = new App(3000);
    await app.listen();
}

main();







/*Codigo para comprobar que el server funciona*/
// import express from 'express';
// const app = express();
// app.listen(3000, ()=> console.log('server on port 3000'));


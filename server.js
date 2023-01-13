//aula 2
//importando o modulo declarado no app.js
import app from "./src/app.js";
const port  =  process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})

//aula 1
//criacao manual da porta

//const port  =   3000;
// const http=require("http");
// const rotas ={
//     '/':'curso de node',
//     '/livros':'Entrei na pag de livros',
//     '/autores':'Listagem de autores'
// }

// const server = http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'text/plain'});
//     resp.end(rotas[req.url]);
// })

// server.listen(port,()=>{
//     console.log(`Servidor escutando em http://localhost:${port}`)
// })


// const const express = require('express');
// const app = express();
// const port = process.env.PORT || =;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));

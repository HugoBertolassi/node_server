import  express  from "express";

const app = express();
const livros =[
    {id:1,"titulo":"Senhor doas aneis"},
    {id:2,"titulo":"O Hobit"}
];

app.get('/',(req,resp)=>{
    resp.status(200).send('Curso de node')
})

app.get('/livros',(req,resp)=>{
    resp.status(200).json(livros)
})

//exportar para o server e escutar

export default app
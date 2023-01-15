import  express  from "express";
import db from "../config/dbConnect.js";

//criar conexão com o db
db.on("erro",console.log.bind(console,'Erro de conexão'));
db.once("open",()=>{
    console.log('conexão com o banco feita com sucesso')
})//tenta fazer uma vez a conexão


const app = express();

app.use(express.json());//habilita interpretador de json

const livros =[
    {id:1,"titulo":"Senhor doas aneis"},
    {id:2,"titulo":"O Hobit"}
];

app.get('/',(req,resp)=>{
    resp.status(200).send('Curso de node')
})

//traz a list de livros
app.get('/livros',(req,resp)=>{
    resp.status(200).json(livros)
})


app.get('/livros/:id',(req,resp)=>{
    let index = buscaLivro(req.params.id);
    resp.json(livros[index]);
})

//adicionar livros
app.post('/livros',(req,resp)=>{
    livros.push(req.body);
    resp.status(201).send('adicionado com sucesso')
})

app.put('/livros/:id',(req,resp)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo =req.body.titulo;
    
    resp.json(livros);
})

app.delete('/livros/:id',(req,resp)=>{
    let {id}= req.params //desiturturacao eh igual req.params.id
    let index = buscaLivro(id);
    livros.splice(index,1);
    
    resp.send(`Livro ${id} removido com sucesso`);
})


function buscaLivro(id){
    return livros.findIndex(livro =>livro.id == id)
}

//exportar para o server e escutar

export default app
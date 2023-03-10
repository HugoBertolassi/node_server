import livros from "../models/Livro.js";

class LivroController{
    static listarLivros =   (req,res)=>{
        livros.find()
            .populate('autor')//faz com que pegue os dados de autor dos livros
            .exec((err,livros)=>{//busca livros no mongoose
                res.status(200).json(livros);
            });
    }

    static listarLivroId = (req,res)=>{
        const id = req.params.id;
        livros.findById(id)
            .populate('autor','nome')
            .exec((err,livro)=>{
            if (err){
                res.status(400).send({message:`${err.message}-Id do livro n'ao encontrado!`})
            }
            else{
                res.status(200).json(livro)
            }
        })
    }

    static listarLivroPorEditora = (req,res)=>{
        //let populateQuery = [{path:'books', select:'title pages'}, {path:'movie', select:'director'}];
        //{path:'user',select:['key1','key2']}
        let populateQuery = [{path:'autor', select:['nome','nacionalidade']}];
        const editora = req.query.editora

        livros.find({"editora":editora},{})
        .populate(populateQuery)
        .exec((err,livros)=>{
            if(err){
                res.status(500).json(`${err}-Editora nao encontrada`)
            }
            else{
                res.status(200).json(livros)
            }
        })
    }

    static cadastrarLivro =(req,res)=>{
        let livro = new livros(req.body);

        livro.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message}-Falha ao cadastrar livro`})
            }
            else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req,res)=>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:`Livro atualizdo com sucesso!`})
            }
            else{
                res.status(500).send({message:`${err.message}-Erro ao atualizar livro!`})
            }
        })
    }

    static excluirLivro = (req,res)=>{
        const {id} = req.params

        livros.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message:`Livro removido com sucesso`})
            }
            else{
                res.status(500).send({message:`${err.message}`}) 
            }
        })
    }
}
export default LivroController;
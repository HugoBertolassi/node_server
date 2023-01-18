import express from "express";
import LivroController from "../controllers/livrosController.js";

const router =express.Router();

router
    .get("/livros",LivroController.listarLivros)
    .get("/livros/busca",LivroController.listarLivroPorEditora)//Tem que colocar antes do id// exemplo de busca http://localhost:3001/livros/busca?editora=abril
    .get("/livros/:id",LivroController.listarLivroId)
    .post("/livros",LivroController.cadastrarLivro)
    .put("/livros/:id",LivroController.atualizarLivro)
    .delete("/livros/:id",LivroController.excluirLivro)


export default router;
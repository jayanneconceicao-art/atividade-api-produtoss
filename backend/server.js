const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    {
        nome: "Celular",
        preco: 1800,
        categoria: "Eletrônico",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREr6na6A4zPfYe4DZWiFxY8PRHq89Z0l2DQTXZ5p6MhQ&s=10"
    },
    {
        nome: "Notebook",
        preco: 2000,
        categoria: "Eletrônico",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0q6Jg3yMZ9AH8_e9CgqcUXhsKTXuH436-Tz9S2l9vQ&s=10"
    },
    {
        nome: "Teclado",
        preco: 390,
        categoria: "Eletrônico",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnjtaHhy9iogF5BdmpWkis-L_d5H4MeM8iOvyfVKJ9A&s=10"
    }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
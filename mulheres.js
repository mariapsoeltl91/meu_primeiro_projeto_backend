const express = require("express")

const app = express()
const porta = 3333

const mulheres = [ 
    {
        nome: 'Maria Maravilha',
        imagem: 'foto',
        minibio: 'Viajadora e inspirada pelo mundo'
    },
    {
        nome: 'Dandara',
        imagem: 'foto',
        minibio: 'Dandara de Odara'
    },
    {
        nome: 'Alexa',
        imagem: 'foto',
        minibio: 'tecnologia'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.get('/mulheres', mostraMulheres)
app.listen(porta, mostraPorta)
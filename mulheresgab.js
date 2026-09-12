const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Maria',
        imagem: 'aviao',
        minibio: 'aquela lá'
    },
    {
        nome: 'Joca',
        imagem: 'carro',
        minibio: 'muito rápido'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

router.get('/mulheresgab',mostraMulheres)

app.use(router)

app.listen(porta, mostraPorta)
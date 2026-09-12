const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Maria Moreira',
        imagem: 'https://www.shutterstock.com/pt/image-photo/traveler-woman-sits-on-retro-suitcase-214023157',
        minibio: 'visitou mais de 40 países'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
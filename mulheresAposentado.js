const express = require("express") //aqui inicio o express
const router = express.Router() //aqui configuro a primeira parte da rota
const { v4: uuidv4} = require('uuid') 

const conectaBancoDeDados = require('./bancoDeDados') //ligando o banco de dados ao arquivo bancoDeDados
conectaBancoDeDados() //chamando a função que conecta o banco de dados


const app = express() //aqui inicio o app
app.use(express.json())
const porta = 3333 //aqui crio a porta

//aqui crio a lista inicial de mulheres
const mulheres = [ 
    {
        id: '1',
        nome: 'Maria Maravilha',
        imagem: 'foto',
        minibio: 'Viajadora e inspirada pelo mundo'
    },
    {
        id: '2',
        nome: 'Dandara',
        imagem: 'foto',
        minibio: 'Dandara de Odara'
    },
    {
        id: '3',
        nome: 'Alexa',
        imagem: 'foto',
        minibio: 'tecnologia'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        } //aqui estou dizendo no if que se o id da mulher encontrada for igual a id da rota da requisiçã, ele deve me retornar a mulher
    }

    const mulherEncontrada = mulheres.find(encontraMulher) //o codigo começa por aqui. ele entende que precisa buscar a mulher na lista mulheres, e ai roda a função de pesquisa e se for a mulher correta, guarda dentro dessa variável

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    } //se na requisição da mulher encontrada, teve alteração na imagem, substituir com o que foi colocado

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher (request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        } //aqui o if procura mulheres que tenham id diferente da rota, guardando nessa função das que ficam
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}


//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //aqui configurei a rota /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota PATCH /mulheres/:id 
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei a rota DELETE /mulheres/:id

app.listen(porta, mostraPorta) //servidor ouvindo a porta
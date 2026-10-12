const mongoose = require('mongoose')

const mulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }    
})

module.exports = mongoose.model('diva', mulherSchema) //aqui usamos outra função do mongoose que fala qual é o modelo; chamamos a lista que seguirá esse modelo e também como ele deve ser

const User = require('../models/card.model')

//Lógica para traer el .json con la data de las cartas y parsearlo
// const path = require('path');
// const allCardsDirectory = path.join('data', 'allCards.json')
// const fs = require('fs');
// const jsonData = fs.readFileSync(allCardsDirectory);
// const allCardsData = JSON.parse(jsonData);

const createAllCardsSummary = (req, res) => {
    allCardsData.forEach(e => {
        if (e.image_uris && e.image_uris.small && e.image_uris.normal) {        
        Card.create([
            {
                id_scryfall: e.id,
                name: e.name,
                image_uris: {
                    small: e.image_uris.small,
                    normal: e.image_uris.normal,
                },
                set: e.set,
                set_name: e.set_name,
            }
        ])
        }else{
        console.log('La carta no tiene la estructura de datos esperada:', e);
          }
    })    
}

module.exports = { createAllCardsSummary }
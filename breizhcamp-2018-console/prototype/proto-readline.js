let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Vous allez bien ? : ', function(saisie) {
   console.log(`vous avez saisi : ${saisie}`)

    //console.log('vous avez saisi : ', saisie)

    rl.close(); // une fois l'interface fermée, la saisie n'est plus possible
})
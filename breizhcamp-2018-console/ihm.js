var service = require('./service')
var readline = require('readline')


/*
exports.start = function() {
    service.init(function(nb) {
        console.log('[init]', nb, 'sessions trouvées.')
    })
}
*/

// Créer un menu
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var questionPosee = '*****************\r\n 1. Rafraichir les données \r\n 2. Lister les données \r\n 99. Quitter \r\n'

var saisieUser = function(saisie) {
        switch(saisie) {
            case '1' :
                service.init(function(nb) {
                    console.log('[init]', nb, 'sessions trouvées.')
                })
                rl.question(questionPosee, saisieUser) 

            case '2' :
                service.listerSessions(function(nbSessions){
                    console.log('[sessions]', nbSessions)
                })
                rl.question(questionPosee, saisieUser) 

            case '99' :
                rl.close()
                break;
            default :
                console.log('oooooops ')
        }
}
rl.question(questionPosee, saisieUser)
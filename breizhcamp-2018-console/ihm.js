let Service = require('./service')
const readline = require('readline')



const serv = new Service()



exports.start = function() {

    // Créer un menu
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })


const questionPosee = '*****************\r\n 1. Rafraichir les données \r\n 2. Lister les données \r\n\ 3. Lister les présentateurs \r\n 4. Rechercher une session \r\n 99. Quitter \r\n'

let saisieUser = function(saisie) {


// Méthode avec switch
        switch(saisie) {
            case '1' :
                serv.init() 
                    .then(nb => console.log('[init]', nb, 'sessions trouvées.'))
                     rl.question(questionPosee, saisieUser) 
                     break;
            case '2' :
                serv.listerSessions() 
                    .then(talks => {
                        talks.forEach(uneSession => console.log(uneSession.name))
                        rl.question(questionPosee, saisieUser) 
                    })
                    break;

            case '3' :
                serv.listerPresentateur()
                    .then(talks => {
                        talks.forEach(unPresentateur => console.log(unPresentateur.speakers))
                        rl.question(questionPosee, saisieUser)
                    })
                break;

            case '4' : 
                    serv.rechercherPresentateur()

                    rl.question(questionPosee, saisieUser)

            case '99' :
                rl.close()
                break;
        }
}
    // Méthode avec 'if'
 /*   if(`${saisie}`== 1) {
        serv.init() 
        .then(nb => console.log('[init]', nb, 'sessions trouvées.'))
        rl.question(questionPosee, saisieUser) 

    } else if(`${saisie}` == 2) {
        serv.listerSessions() 
        .then(talks => {
            talks.forEach(uneSession => console.log(uneSession.name))
            rl.question(questionPosee, saisieUser) 
        })
       

    } else if(`${saisie}` == 99) {
        rl.close()
    }

}*/

rl.question(questionPosee, saisieUser) 

}
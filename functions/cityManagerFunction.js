let db = require('../database/models');

module.exports = async (req, res, ciudadText) => {

   
    let ciudadActual
    let ciudadNueva
    let ciudadId
   

    ciudadActual = await db.Ciudad.findAll({
        where: {
            nombre: ciudadText
        }
    })

    

    if (ciudadActual.length == 0) {
        ciudadNueva = await db.Ciudad.create({
            nombre: ciudadText
        })
        ciudadId = ciudadNueva.id
    } else {
        ciudadId = ciudadActual[0].id
    }
    
    return ciudadId
}

const runQuery = require('../Module/query')
const db = require('../config/connection')

function defaultResponse(message, error, statuscode, token) {
    return {
        message     : message,
        token       : token,
        error       : error,
        statuscode  : statuscode
    }
}

function checkId(result, id) {
    console.log(result.length)
    for (let i = 0; i < result.length; i++) {
        if (id ){

        }
        
    }
}

async function isSuccess(message, id, name, unit, price) {
    if (message == undefined){
        id = parseInt(id) + 1
        const data = await db.sequelize.query(
            runQuery.insertDataIntoTableProduct(
                id, 
                name,
                unit,
                price
                ),{
                type: db.QueryTypes.INSERT
            }
        );
        message = defaultResponse(
            process.env.ERROR_DATA_SUCCESS,
            false,
            201
          )
      } else {
            message = defaultResponse(
                process.env.ERROR_DATA_IS_EXIST,
                true,
                404
            )
      }
      return message
}

async function isIdAlreadyExist(result, id, name, unit, price) {
    let message
    if (result != null){
        var data = await db.sequelize.query(
          runQuery.updateDataIntoTableProduct(
            id,
            name,
            unit,
            price
            ),{
              type: db.QueryTypes.UPDATE
          }
        );
        message = defaultResponse(
          process.env.ERROR_DATA_SUCCESS,
          false,
          200
        )
      }else if (result == undefined){
        message = defaultResponse(
          process.env.ERROR_DATA_IS_NOT_FOUND,
          true,
          404
        )
      }
      return message
}

module.exports = {
    defaultResponse,
    isSuccess,
    isIdAlreadyExist
};
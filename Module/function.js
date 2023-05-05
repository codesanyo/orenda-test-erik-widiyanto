function defaultResponseWithToken(message, token, error, statuscode) {
    return {
        message     : message,
        token       : token,
        error       : error,
        statuscode  : statuscode
    }
}

function defaultResponse(message, error, statuscode) {
    return {
        message     : message,
        error       : error,
        statuscode  : statuscode
    }
}

module.exports = {
    defaultResponseWithToken,
    defaultResponse
};
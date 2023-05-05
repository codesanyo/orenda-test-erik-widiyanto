

function getDataFromTableCustomer(email, phone){
    return "SELECT * FROM customer where email='"+email+"' or phone='"+phone+"'"
}

function getDataFromTableProduct(email, phone){
    return "SELECT * FROM customer where email='"+email+"' or phone='"+phone+"'"
}

function insertDataIntoTableProduct(id, name, unit, price) {
    return "INSERT INTO product (id, name, unit, price)" +
    "VALUES ('"+id+"','"+name+"', '"+unit+"', '"+price+"');"
}

function updateDataIntoTableProduct(id, name, unit, price) {
    return "UPDATE product SET name = '"+name+"', unit = '"+unit+"', price = '"+price+"' WHERE id = '"+id+"'"
}

function getIdFromTable(table, id) {
    return "SELECT * FROM `"+table+"` where id = '"+id+"';"
}

function getAllIdFromTable(table) {
    return "SELECT * FROM `"+table+"`;"
}

module.exports = {
    getIdFromTable,
    getAllIdFromTable,
    getDataFromTableCustomer,
    getDataFromTableProduct,
    insertDataIntoTableProduct,
    updateDataIntoTableProduct
};
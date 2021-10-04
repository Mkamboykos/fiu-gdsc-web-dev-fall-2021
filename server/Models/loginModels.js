const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let loginSchema = new Schema (
    {
        username: {type: String},
        password: {type: String}
    }
)

module.exports = mongoose.model ('login', loginSchema);
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
nama : {
type : String,
required : true
},
email : {
type : String,
required : true
},
nomor : {
type : String,
required : true
}
})

UserSchema.plugin(mongoosePaginate)

const User = mongoose.model("user", UserSchema);
module.exports = User;
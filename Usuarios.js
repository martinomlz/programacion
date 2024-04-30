const mongoose = require('mongoose');
const usuario = new mongoose.Schema(
{ 
 marca:{ 
    type: String
 },

 modelo:{ 
    type: String
  },
  talle:{
    type: String
   },
   precio : {
    type: String
 }

},
{ 
    timestamps: true,
    versionKey: false
}
)

const modeluser = mongoose.model("user", usuario);
module.exports = modeluser;




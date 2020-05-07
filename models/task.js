const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const Dorinel = new Scheme({

    title : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

const Ninja = mongoose.model("emo",Dorinel);
module.exports = Ninja;
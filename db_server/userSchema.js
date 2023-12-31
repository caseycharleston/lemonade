const mongoose = require("mongoose");

const user_detail_schema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: {type:String, unique: true},
        password: String,
        userType: String,
        wallet: { type: Number, default: 0.0 }
    },
    {
        collection:"UserInfo",
    }
);

mongoose.model("UserInfo", user_detail_schema);

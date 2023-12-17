const express = require('express');
const mongoNode = express();

const mongoose = require ("mongoose");
mongoNode.use(express.json());

const cors = require("cors");
mongoNode.use(cors());

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const SECRET = "(N)@#8!vy)(@#!8n$(@#!8ncVmUHiuewghweiumgh8GQ#Nm0(#@CNMg0t8";

const url = "mongodb+srv://caseycharleston:pTQUy8r23SJoCWXP@registrar.omo2opy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url)
    .then(() => {
        console.log("Connected to MongoDB through Mongoose");
    })
    .catch((e) => console.log(e));

// Import User detail schema
require("./userSchema");
const user = mongoose.model("UserInfo");

/*
    Register Listen Scheme
 */

mongoNode.post("/registerUser", async(req, res) => {
    const {first_name, last_name, email, password, userType} = req.body;

    const encryptedPassword = await bcrypt.hash(password,10);
    try {
        const oldUser = await user.findOne({email}) // does this user exist?
        if (oldUser) {
            return alert("User with that email already exists.");
        }
        await user.create({
            first_name,
            last_name,
            email,
            password:encryptedPassword,
            userType,
        });
        res.send({status:"ok"});
    } catch(e) {
        res.send({status:"not ok"});
    }
});

/*
    Login Listen Scheme
 */

mongoNode.post("/login", async(req, res) => {
    const {email, password} = req.body;

    const oldUser = await user.findOne({email});
    if (!oldUser) {
        return res.json({error: "User not found"});
    }

    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({email:oldUser.email}, SECRET);

        // Success!
        if (res.status(201)) {
            return res.json({status:"ok", data: token});
        } else {
            // Failure!
            return res.json({error: "error"});
        }
    }
    // More Failure!
    res.json({status:" error", error: "Invalid Password"});
});

mongoNode.post("/userData", async (req, res) => {
    const {token} = req.body;
    try {
        const oldUser = jwt.verify(token, SECRET);
        const email = oldUser.email;
        user.findOne({email:email}).then((data) => {
            res.send({status:"ok", data:data});
        }).catch((error) => {
            res.send({status:"error", data: error});
        });
    } catch (e) {}
})

mongoNode.listen(8080, () => {
    console.log("server start");
})





const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./models/User');
const app = express();


app.use(cors(
  {
    origin:["https://skolarproject-frontend.vercel.app/"],
    methods: ["POST" , "GET"],
    credential:true
  }
));
app.use(express.json());
mongoose.connect("mongodb+srv://SanthoshR:Santhu9632@cluster0.2a3hy3o.mongodb.net/User", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


  app.get("/" ,(req ,res )=>{
    res.json("helloe");
  })
  app.post('/Login' ,(req, res)=> {
    const {email ,password}= req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if (user.password === password){
                res.json("success" )
            }
            else{
                
                res.json("The Password is incorrect" )
               
            }
        } else{
            
            res.json("no record found")
          
        }
    })

  })

app.post('/register', (req, res) => {
    UserModel.create(req.body)
      .then(User => res.json(User))
      .catch(err => res.json(err));
});

app.listen(3501, () => {
    console.log("Server is running on port 3501");
});

const express =require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const PORT = 8001
const data = require('./data/index')
const Data = require('./models/Data');
const path = require('path');


app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.json()); 
app.use(cors());


app.get('/', async (req, res)=>{
    try{
        const data = await Data.find();
        res.json(data);
    }catch(error){
        console.log('error',error)
        res.status(500).send('Server Error')
    }
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is Connected")
    })
  .catch((err) => console.log(err));

app.listen(PORT, ()=>{
    console.log('server number', PORT);

})
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require('body-parser');
const errorHandler = require("./Middleware/errorMiddleWare.jsx")
const productRoute = require("./Routes/productRoute.jsx")
const uri = process.env.DATABASE_URI
const categoryRoute = require("./Routes/categoryRoute.jsx")

const app = express();
const port = process.env.PORT|| 8000
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
    
}
app.use(cors(corsOptions))

app.use('/api/products', productRoute)
app.use('/api/category', categoryRoute)

app.get('/', (req, res)=>{
    res.send('Mega Mart')
})

app.use(errorHandler)

class ServerSelectionError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ServerSelectionError';
  }

  assimilateError(originalError) {
    this.message = originalError.message;
    this.stack = originalError.stack;
    this.code = originalError.code;
    // Add any other properties from the original error you want to retain
  }
}

//checking the server is working
async function connectToDatabase(){
    try{
        mongoose.set("strictQuery", false);
await  mongoose.connect(uri,{
    useNewUrlParser: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    serverSelectionTimeoutMS: 30000,

});

console.log('MongoDB connected...')

    app.listen(port, () => console.log(`Server is running on port ${port}`))

    }
    catch (err){
        // const handledError = _handleConnectionErrors(err);
    console.error('MongoDB connection error:', err);
    }
}

connectToDatabase();
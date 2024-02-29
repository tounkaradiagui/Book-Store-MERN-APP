import express  from 'express'
import { PORT, MONGO_URL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'; 
import booksRoute from  './routes/booksRoute.js';
import cors from 'cors';
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling cors policy
// * First option: Allow all origin with Default of cors(*)
app.use(cors());

// Second option: Allow custom origin
// app.use(cors({
//     origin: "http://localhost:8001",
//     methods: ["GET","POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"]
// }));

app.get('/', (req, res) => {
    return res.status(234).send('Welcome to my book store');
});

app.use('/books', booksRoute);

// Connection to mongo DB
mongoose.connect(MONGO_URL).then(() =>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
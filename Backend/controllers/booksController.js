// import {Book} from "../models/bookModel.js";

// const createBook = async (req, res) => {
//     try {
//         if(!req.body.title ||  !req.body.author ||  !req.body.publishYear){
//             return res.status(400).send({message: "All fields are required"});
//         }
//         const newBook = {
//             title : req.body.title,
//             author : req.body.author,
//             publishYear : req.body.publishYear
//         };
//         const book = await  Book.create(newBook);
//         return res.status(201).send(book);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({message: error.message});
//     }
// }

// const getBooks = async (req, res) => {
//     try {
//         const books = await Book.find({});
//         if(!books) {
//             return res.status(404).json('No books found');
//         }
//         return res.status(200).json({
//             count: books.length,
//             data: books
//         });
//     } catch (error) {
//         return res.status(500).send({message: error.message});
//     }
// }

// const getBook = async (req, res) => {

// }



// export default {
//     createBook,
//     getBooks
// }
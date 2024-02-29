import express from 'express';
import {Book}  from '../models/bookModel.js';

const router = express.Router();

// Create a new book
router.post('/', async(req, res) => {
    try {
        if(!req.body.title ||  !req.body.author ||  !req.body.publishYear){
            return res.status(400).send({message: "All fields are required"});
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        };
        const book = await  Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
});

// Get all books
router.get('/', async(req, res) => {
    try {
        const books = await Book.find({});
        if(!books) {
            return res.status(404).json('No books found');
        }
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

// Get single book by id
router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book) {
            return res.status(404).json('Book not found');
        }
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

// Update a book
router.put('/:id', async(req, res) => {
    try {
        if(!req.body.title ||  !req.body.author ||  !req.body.publishYear){
            return res.status(400).send({message: "All fields are required"});
        }
        const {id} = req.params;

        const book = await Book.findByIdAndUpdate(id, req.body);
        if (!book) {
            return res.status(404).json('Cannot found any book');
        }
        return res.status(200).send({message: "Book updated successfully !"})
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

// Delete a book
router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;

        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json('Cannot found any book');
        }
        return res.status(200).send({message: "Book Deleted successfully !"})
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

export default router;
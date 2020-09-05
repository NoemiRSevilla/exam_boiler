require("../models/author");


const mongoose = require("mongoose"),
    Author = mongoose.model("Author");


module.exports = {
    getAll: (req, res) => {
        Author.find()
            .then(authors => {
                res.json({
                    results: authors
                });
            })
            .catch(err => {
                res.json({
                    errors: err.errors
                });
            })
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(author => {
                res.json({
                    results: author
                });
            })
            .catch(err => {
                res.json({
                    errors: err.errors
                });
            })
    },
    edit: (req, res) => {
        Author.findOneAndUpdate({
                _id: req.params.id
            }, req.body, {
                runValidators: true
            })
            .then(author => {
                res.json({
                    results: author
                });
            })
            .catch(err => {
                res.json({
                    err: err.errors
                });
            })
    },
    show: (req, res) => {
        Author.findOne({
                _id: req.params.id
            })
            .then(author => {
                res.json({
                    results: author
                });
            })
    },
    destroy: (req, res) => {
        Author.remove({
                _id: req.params.id
            })
            .then(deleteAuthor => {
                res.json({
                    results: deleteAuthor
                });
            })
            .catch(err => {
                res.json({
                    err: err.errors
                });
            })
    }
}
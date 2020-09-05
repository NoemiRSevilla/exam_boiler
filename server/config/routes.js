const authors = require("../controllers/authors");

module.exports = (app) => {

    app.get('/allauthors', (req, res) => authors.getAll(req, res));

    app.post('/create/author', (req, res) => authors.create(req, res));

    app.get('/author/:id', (req, res) => authors.show(req, res));

    app.put('/update/author/:id', (req, res) => authors.edit(req, res));

    app.delete('/destroy/author/:id', (req, res) => authors.destroy(req, res));

}
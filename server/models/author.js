const mongoose = require("mongoose");


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter author name"],
        minlength: [3, "Author must have at least 3 character name"]
    }
}, {
    timestamps: true
});

mongoose.model("Author", AuthorSchema);
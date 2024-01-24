const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

model User {
    id Int @id @default(autoincrement())  
    firstName String
    lastName String
    age Int
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

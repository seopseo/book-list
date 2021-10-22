const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({ // 스키마 정의
    title: { type: String, required: true, trim: true},
    author: { type: String, required: true, trim: true},
    summary: { type: String},
    genre: { type: String},
    release: { type: String, required: true, trim: true},
    ISBN: { type: Number, required: true, trim: true}
})

const Book = mongoose.model('Book', bookSchema) // 스키마로부터 생성된 모델 객체
module.exports = Book;
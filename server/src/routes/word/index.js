const express = require('express')
const WordRouter = express.Router()
const word = require('../../../models/Word')

WordRouter.route('/(:word)?').get((req, res) => {
    let words = []
    const { word } = req.params
    console.log(word)
    // res.send(word)

    if(word !== 'undefined' && word !== undefined){ // 사용자로부터 쿼리가 존재하는 경우
        // db.collection.find({ r_word: word })// 쿼리로 DB 검색
        console.log(word)
        words = [
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},

            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},

            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},

            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
        ]
    }else{ // 쿼리가 없는 경우
        console.log(word)
        // words = await Word.find() // 전체 DB 조회
        words = ["no query"]
    }
    res.json({ status: 200, words })
})    // /api/words/     , /api/words/학원
      // ()? 는 옵션주는 기능

module.exports = WordRouter
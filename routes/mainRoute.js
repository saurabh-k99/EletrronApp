const express = require('express')
const path = require('path')
const router = express.Router()

let imageName = 'curr'
let prevImageName = 'prev'

router.route('/').get((req, res) => {
    res.sendFile(path.resolve('index.html'))
})


router.route('/upload').post((req, res) => {
    const { image } = req.files
    const { timestamp } = req.body
    imageName = `${timestamp}.${image.name}`
    image.mv(path.resolve(__dirname, '..', 'uploads', `${timestamp}.${image.name}`))
    res.sendStatus(200)
})

router.route('/source').get((req, res) => {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*')

    setInterval(() => {
        if(imageName !== prevImageName) {
            res.write(`data: ${imageName}\n\n`)
        }
        prevImageName = imageName
    }, 1000)
})

module.exports = router
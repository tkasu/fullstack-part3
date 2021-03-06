const express = require('express')
const app = express()

const persons = [
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
    },
    { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
    },
    { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
    },
    { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.send(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Web server started, listening to port: ${PORT}`)
})

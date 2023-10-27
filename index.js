const express = require('express')
const app = express()

// GET /products/all HTTP/1.1
app.get('/products/all', (request, response) => {   
    const page = 2;
    const sort = 'price';
    const order = 'desc';
    response.send(
        `GET Products: ${page}, ${sort}, ${order}`)
})

// GET /products/8719-small-red HTTP/1.1
app.get('/products/:productId-:productName', (request, response) => {   
    response.send(
        'GET Products: 8719, small, red')
})

// GET /products/8719 HTTP/1.1
app.get('/products/:productId', (request, response) => {   
    response.send(
        'GET Products: 8719')
})

app.listen(3000)
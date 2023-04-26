const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/route1', // creates a route for the URL route (/route1)
        function(req, res) {res.send('Hello World! from route 1!')}
       )  // sends the response 'Hello World! from route 1!' back to the client
       
app.listen(port, () => {
  console.log(`This app now listening on port ${port}`)
})

/* Used for local testing */
const app = require('./app')

app.listen(9000, err => {
  if (err) return console.error('Error starting server', err)
  console.log('Server listening on port 9000')
})

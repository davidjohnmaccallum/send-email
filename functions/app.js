require('dotenv').config()
var bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail')
const express = require('express')
const coms = require('./lib/coms')

const app = express()
app.use(bodyParser.json())

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const from = process.env.FROM_EMAIL;

app.use((req,res,next) => {
  if (req.get('X-API-Key') !== '1234') {
    return res.status(401).send({
      err: 'Missing or invalid X-API-Key header'
    })
  }
  next()
})

app.post('/welcome-email', (req, res) => {

  if (!req.body.name || !req.body.to) {    
    return res.status(400).send({
      err: 'name and to required'
    })
  }

  const welcomeMessage = coms.buildWelcomeEmail({ 
    name: req.body.name, 
    to: req.body.to,
    from
  })
  
  console.debug('Sending message', welcomeMessage)

  sgMail.send(welcomeMessage)
    .then(() => {
      console.debug('Email sent.')
      res.send({
        result: 'Sent',
        detail: welcomeMessage
      })
    })
    .catch((err) => {
      console.error('Error sending email.', welcomeMessage, err)
      return res.status(500).send({
        err: `Error sending email. ${err.message || err}`
      })
    })

})

app.use((req, res, _next) => {
  res.status(404).send({
    err: `No handler for ${req.method} ${req.path}`
  })
})

app.use((err, _req, res, _next) => {
  res.status(500).send({
    err: err.message || err
  })
})

module.exports = app
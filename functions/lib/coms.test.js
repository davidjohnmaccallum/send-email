const subject = require('./coms')

test('coms', () => {

  expect(subject.buildWelcomeEmail({
    name: 'John Doe',
    to: 'to@example.com',
    from: 'from@example.com'
  })).toEqual({
    to: 'test@example.com', 
    from: 'test@example.com',
    subject: 'Welcome to XYZ',
    text: 'Welcome John Doe',
    html: '<strong>Welcome John Doe</strong>',
  })

})
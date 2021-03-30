const buildWelcomeEmail = ({name, from, to}) => ({
  to, 
  from,
  subject: 'Welcome to XYZ',
  text: `Welcome ${name}`,
  html: `<strong>Welcome ${name}</strong>`,
})

module.exports = {
  buildWelcomeEmail
}
# Send Email

Sends an Email using SendGrid.

Includes access control via an X-API-Key header.

## Getting Started

For details see the [Firebase Functions docs](https://firebase.google.com/docs/functions/get-started).

Create a .env file in the functions folder with the following environment variables.

```
SENDGRID_API_KEY=SG.xxx
FROM_EMAIL=xxx
```

Create a Firebase project.
Setup the function.

```sh
npm install -g firebase-tools
cd functions
firebase login
firebase init functions
npm run deploy
```

Send a message (replace to param with your number).

```sh
curl [Replace with function URL from Firebase console]/welcome-email -d '{"name":"Paul", "to":"you@email.address"}' --header "Content-Type: application/json" --header "X-API-Key: 1234"
```
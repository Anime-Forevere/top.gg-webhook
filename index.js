/* Hi!

Go to config.json to change your things.
Paste token to auth token on top.gg
Paste link to your site
Example of site: www.example.com/votes

*/
const { token, path } = require('./config.json')
const express = require('express');
const { Webhook } = require('@top-gg/sdk');

const wh = new Webhook(token)
const app = express()

app.post(path, wh.listener((vote) => {
	// Do your stuff here
	console.log(vote.user + " has voted!") // Logs ID of user.
}))

app.listen(3000)
console.log("App is running on port 3000!")
const express = require('express');
const actions = require('./actions/actions-router')
const projects = require('./projects/projects-router')
const server = express();

// Configure your server here
server.use(express.json())
// Build your actions router in /api/actions/actions-router.js
server.use(actions)

// Build your projects router in /api/projects/projects-router.js
server.use(projects)
// Do NOT `server.listen()` inside this file!
server.use((err, req, res) => {
    res.status(500).json({message: 'Oops! Something went wrong!'})
})

module.exports = server;

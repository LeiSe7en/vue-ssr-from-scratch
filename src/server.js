const express = require('express')
const path = require('path')
const template = require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')
const ServerRenderer = require('vue-server-renderer').createRenderer({
	template
})
const server = new express()
const createApp = require('./app.js')

server.get('/vue-ssr', (req, res) => {
	const app = createApp({})
	ServerRenderer.renderToString(app, (err, html) => {
		if (err) {
      res.status(500).end('Internal Server Error')
      return;
    }
    res.end(html)
	})
})

server.listen(5000, () => {
	console.log('Server listening on port 5000')
})

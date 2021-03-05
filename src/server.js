const express = require('express')
const path = require('path')
const template = require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')
const ServerRenderer = require('vue-server-renderer').createRenderer({
	template
})
const server = new express()
const createApp = require('./app.js')
const serverEntry = require('./entry-server')
server.get('*', (req, res) => {
	const context = {
		url: req.url
	}
	serverEntry(context).then(app => {
		ServerRenderer.renderToString(app, (err, html) => {
			if (err) {
	      res.status(500).end('Internal Server Error')
	      return;
	    }
	    res.end(html)
		})
	}).catch(err => {
		console.log(err)
	})
	
})

server.listen(5000, () => {
	console.log('Server listening on port 5000')
})

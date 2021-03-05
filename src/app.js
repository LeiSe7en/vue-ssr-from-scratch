const Vue = require('vue')
const createRouter = require('./router.js')

module.exports = function createApp (context) {
	const router = createRouter()
	const app = new Vue({
		template: '<div>Hello world! I am App<router-view></router-view></div>',
		router
	})
	return { router, app }
}
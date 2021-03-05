const createApp = require('./app')

module.exports = (context) => {

  return new Promise((resolve, reject) => {

		const { app, router } = createApp()
		router.push(context.url)

	  router.onReady(() => {
	    const matchedComponents = router.getMatchedComponents()
	    console.log(matchedComponents)
	    // no matched routes, reject with 404
	    if (!matchedComponents.length) {
	      return reject({ code: 404 })
	    }
	    // the Promise should resolve to the app instance so it can be rendered
	    resolve(app)
	  }, reject)
	})

}
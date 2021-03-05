const Vue = require('vue')
const Router = require('vue-router')

Vue.use(Router)

module.exports = function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {name: 'index', path: '/home', component: {render: (h) => h('div', 'I am homepage')}}
    ]
  })
}
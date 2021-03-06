import { createApp } from './app'

// client-specific bootstrapping logic...

const { app, router } = createApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')

router.onReady(() => {
	app.$mount('#app')
})
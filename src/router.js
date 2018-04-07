const Vue = require("vue/dist/vue.esm.js").default
const VueRouter = require("vue-router").default

Vue.use(VueRouter)

const routes = [
	{ path: "/", component: require("./root.vue") },
	{ path: "*", component: require("./404.vue") }
]

module.exports = new VueRouter({
	mode: "history",
	routes
})

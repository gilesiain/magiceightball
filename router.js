import Vue from 'vue'
import router from 'vue-router'
import eightball from './components/eightball.vue'
import howto from "./components/howto.vue"

Vue.use(router)

export default new router({
    routes: [
        {
            path: '/',
            name: 'eightball',
            component: eightball
        },
        {
            path: '/howto',
            name: 'howto',
            component: howto
        }
    ]
})
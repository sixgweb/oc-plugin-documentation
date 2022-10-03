// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import NavBarLogo from './components/NavBarLogo.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('NavBarLogo')
    },
    Layout: NavBarLogo
}
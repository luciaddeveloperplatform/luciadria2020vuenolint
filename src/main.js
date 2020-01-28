import "./index.scss";
import Vue from 'vue';
import App from './App';

new Vue({
    render: (createEl) => createEl(App)
}).$mount('#root')

import Vue from 'vue'

import vSelect from 'vue-select'
Vue.component( 'v-select', vSelect )

import App from './App.vue'

new Vue( {
	el: '#form',
	render: h => h( App )
} )

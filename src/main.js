import Vue from 'vue'

import GeneralFunctions from './plugins/general'
Vue.use( GeneralFunctions )

import NumberPicker from './components/NumberPicker.vue'
Vue.component( 'number-picker', NumberPicker )
import NumberPickerGroup from './components/NumberPickerGroup.vue'
Vue.component( 'np-group', NumberPickerGroup )

import App from './App.vue'

new Vue( {
	el: '#form',
	render: h => h( App )
} )

<template>
	<div id="app">
		<v-select v-model="departure" :options="departureList"></v-select>
		<v-select v-model="arrival" :options="arrivalList"></v-select>
		<number :min="1" :max="4" :default="1"></number>
	</div>
</template>

<script>
import DepartureList from './assets/departureList.json'
import ArrivalList from './assets/arrivalList.json'
import Number from './components/Number.vue'

export default {
	components: {
		Number
	},

	data()
	{
		return {
			departureList: [],
			arrivalList: [],

			departure: null,
			arrival: null,

		}
	},

	methods: {
		getDepartureList()
		{
			setTimeout( () => {
				this.departureList = DepartureList.slice();
			}, 1000 );
		},

		getArrivalList()
		{
			setTimeout( () => {
				this.arrivalList = ArrivalList.slice();
			}, 1000 );
		},

	},

	mounted()
	{
		this.getDepartureList();
		this.getArrivalList();
	}
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}
</style>

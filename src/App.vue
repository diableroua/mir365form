<template>
	<div id="app">
		<v-select v-model="departure" :options="departureList"></v-select>
		<v-select v-model="arrival" :options="arrivalList"></v-select>
		<number-picker :min="1" :max="4" :default="1"></number-picker>
		<np-group :group="touristsAmount"></np-group>
	</div>
</template>

<script>
import DepartureList from './assets/departureList.json'
import ArrivalList from './assets/arrivalList.json'

export default {
	data()
	{
		return {
			/**
			 * Lists of Data
			 */
			departureList: [],
			arrivalList: [],
			touristsAmount: [
				{
					label: 'Взрослые',
					min: 1,
					max: 4,
					default: 1
				},
				{
					label: 'Дети (от 2 до 11)',
					min: 0,
					max: 4,
					default: 0
				},
				{
					label: 'Дети (до 2 лет)',
					min: 0,
					max: 4,
					default: 0
				}
			],

			/**
			 * Selected Data
			 */
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

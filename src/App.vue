<template>
	<div id="app">
		<select-list v-model="departure"
		:items="departureList"></select-list>
		<number-picker :min="1" :max="4" :default="1"></number-picker>
		<np-group :group="touristsAmount"></np-group>
		<datepicker :value="dateFrom"></datepicker>
		<datepicker :value="dateTo"></datepicker>
		<select-multi :list="categories"></select-multi>
	</div>
</template>

<script>
import DepartureList from './assets/departureList.json'
import ArrivalList from './assets/arrivalList.json'
import Cities from './assets/cities.json'
import Hotels from './assets/hotels.json'
import Datepicker from 'vuejs-datepicker'

export default {
	components: {
		Datepicker
	},

	data()
	{
		const currentDate = new Date();
		return {
			/**
			 * Lists of Data
			 */
			departureList: [],
			arrivalList: [],
			citiesList: {},
			hotelsList: {},
			touristsAmount: [
				{
					label: 'Взрослые',
					shortLabel: 'Взрослые',
					icon: '',
					min: 1,
					max: 4,
					default: 1
				},
				{
					label: 'Дети (от 2 до 11)',
					shortLabel: 'Дети',
					icon: '',
					min: 0,
					max: 4,
					default: 0
				},
				{
					label: 'Дети (до 2 лет)',
					shortLabel: 'Младенцы',
					icon: '',
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

			dateFrom: currentDate,
			dateTo: currentDate,

			/**
			 * Categories List
			 */
			categories: [
				{
					label: '2',
					status: false
				},
				{
					label: '3',
					status: false
				},
				{
					label: '4',
					status: false
				},
				{
					label: '5',
					status: false
				},
				{
					label: 'Apts',
					status: false
				},
				{
					label: 'Villas',
					status: false
				},
				{
					label: 'HV-1',
					status: false
				},
				{
					label: 'HV-2',
					status: false
				}
			]
		}
	},

	methods: {
		getDepartureList()
		{
			setTimeout( () => {
				this.departureList = DepartureList;
			}, 1000 );
		},

		getArrivalList()
		{
			setTimeout( () => {
				this.arrivalList = ArrivalList;
			}, 1000 );
		},

		getCitiesList()
		{
			setTimeout( () => {
				this.citiesList = Cities;
			}, 1000 );
		},

		getHotelsList()
		{
			setTimeout( () => {
				this.hotelsList = Hotels;
			}, 1000 );
		},
	},

	mounted()
	{
		this.getDepartureList();
		this.getArrivalList();
		this.getCitiesList();
		this.getHotelsList();
	}
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}
</style>

<template>
	<div class="select">
		<div class="activator" @focus="visible = !visible">
			<input v-model="inputVal" >
		</div>
		<transition name="fade">
			<div class="group-container" v-if="visible">
				<div v-for="(item, index) of group" v-bind:key="index"
				class="item">
					<div class="label">{{ item.label }}</div>
					<number-picker :min="item.min" :max="item.max" :default="item.default"
					@selected="setSelected( index, item, $event )"></number-picker>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		items: Array,
		value: String
	},

	data()
	{
		return {
			visible: false,
			inputVal: this.value,
		}
	},

	computed: {
		itemsList()
		{
			return this.items
		},
	},

	watch: {
		inputVal( val )
		{
			console.log( val );
			
			this.$emit( 'input', val );
		},
	},

	methods: {

	},
}
</script>

<style lang="scss" scoped>

</style>


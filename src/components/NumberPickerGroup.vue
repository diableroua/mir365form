<template>
	<div class="number-group">
		<div class="activator">{{ selectedInGroup.join( ', ' ) }}</div>
		<div class="group-container">
			<number-picker v-for="(item, index) of group" v-bind:key="index"
			:min="item.min" :max="item.max" :default="item.default"
			@selected="setSelected( index, $event )"></number-picker>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		group: Array
	},

	data()
	{
		return {
			selectedInGroup: this.group.map( obj => `${obj.label}: ${obj.default}` )
		}
	},

	methods: {
		setSelected( index, data )
		{
			this.selectedInGroup.splice( index, 1, `${this.group[ index ].label}: ${data}` );
		}
	}
}
</script>

<style lang="scss" scoped>
.number-group {

	.activator {

	}

	.group-container {

	}
}
</style>


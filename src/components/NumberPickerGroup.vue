<template>
	<div class="number-group">
		<div class="activator" @click="visible = !visible">
			<span v-for="(item, index) of selectedInGroup"
			v-bind:key="index" v-if="item.value">
				{{ item.shortLabel }}: {{ item.value }}
			</span>
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
		group: Array
	},

	data()
	{
		return {
			visible: false,
			selectedInGroup: this.group.map( obj => {
				return { label: obj.label, shortLabel: obj.shortLabel, value: obj.default } } )
		}
	},

	methods: {
		setSelected( index, item, number )
		{
			this.selectedInGroup[ index ].value = number;
			this.selectedInGroup[ index ].label = item.label;
			this.selectedInGroup[ index ].shortLabel = item.shortLabel;
		}
	}
}
</script>

<style lang="scss" scoped>
.number-group {
	position: relative;

	.activator {
		border: 1px solid #dcdcdc;
		border-radius: 5px;
		padding: 5px 10px;
	}

	.group-container {
		position: relative;
		top: 100%;
		left: 0;
		box-shadow: 0 5px 10px 0 rgba(0,0,0,.3);
		padding: 10px;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-justify-content: space-between;
		-ms-justify-content: space-between;
		justify-content: space-between;
	}
}
</style>


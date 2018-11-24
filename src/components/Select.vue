<template>
	<div class="select">
		<div class="activator">
			<input v-model="inputVal" @focus="onFocus" @blur="onBlur">
		</div>
		<transition name="fade">
			<div class="group-container" v-if="visible">
				<div v-for="(item, index) of itemsList" v-bind:key="index"
				class="item">
					<div class="item">{{ item.label }}</div>
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
			return this.items.filter( obj => obj.label.toLowerCase().includes( this.inputVal.toLowerCase() ) );
		},
	},

	watch: {
		inputVal( val )
		{		
			this.$emit( 'input', val );
		},
	},

	methods: {
		onFocus()
		{
			this.visible = true;
		},

		onBlur()
		{
			this.visible = false;
		}
	},
}
</script>

<style lang="scss" scoped>

</style>


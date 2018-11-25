<template>
	<div class="select">
		<div class="activator">
			<input v-model="inputVal" @focus="onFocus" @blur="onBlur">
		</div>
		<transition name="fade" v-if="visible">
			<div class="group-container">
				<div v-for="(item, index) of itemsList"
				v-bind:key="index"
				@mousedown="setItem( item )"
				class="item">{{ item.label }}</div>
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
			savedVal: null
		}
	},

	computed: {
		itemsList()
		{
			return this.items.filter( obj => {
				if( this.inputVal )
				{
					return obj.label.toLowerCase().includes( this.inputVal.toLowerCase() )
				}
				else
				{
					return obj;
				}
			} );
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
			this.savedVal = this.inputVal;
			this.inputVal = null;
		},

		onBlur()
		{
			this.visible = false;
			if( !this.inputVal ) this.inputVal = this.savedVal;
		},

		setItem( item )
		{
			this.inputVal = item.label
		}
	},
}
</script>

<style lang="scss" scoped>
.select {
	position: relative;
	display: inline-block;

	.group-container {
		max-height: 300px;
		overflow-y: auto;
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		background-color: #ffffff;
		z-index: 1;

		.item {
			cursor: pointer;
			height: 30px;
			line-height: 30px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			&:hover {
				background-color: #efefef;
			}
		}
	}
}
</style>


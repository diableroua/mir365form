<template>
	<div class="number">
		<div v-bind:class="[ value > min ? 'active' : '', 'controls', 'minus' ]" @click="minus()">-</div>
		<input type="text" class="value" v-model="value" @input="valValidate( $event.target.value )">
		<div v-bind:class="[ value < max ? 'active' : '', 'controls', 'plus' ]" @click="plus()">+</div>
	</div>
</template>

<script>
export default {
	props: {
		min: Number,
		max: Number,
		default: Number
	},

	data()
	{
		return {
			value: this.default !== undefined ? this.default : 0
		}
	},

	methods: {
		minus()
		{
			if( this.value > this.min ) { this.value-- }
		},

		plus()
		{
			if( this.value < this.max ) { this.value++ }
		},

		valValidate( value )
		{
			if( !isNaN( value ) && value >= this.min && value <= this.max )
			{
				this.value = value;
			}
			else
			{
				this.value = this.default;
			}
		},
	}
}
</script>

<style lang="scss" scoped>
.number {
	user-select: none;

	.controls,
	.value {
		display: inline-block;
		vertical-align: top;
		width: 36px;
		height: 36px;
		line-height: 36px;
		text-align: center;
	}

	.controls {
		border-radius: 2px;
		background-color: #dfdfdf;
		color: #9f9f9f;
		cursor: default;
		font-weight: 600;

		&.active {
			background-color: #009dda;
			color: #ffffff;
			cursor: pointer;
		}
	}

	.value {
		border: 0;
	}
}
</style>


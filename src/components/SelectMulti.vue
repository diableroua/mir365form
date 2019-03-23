<template>
	<div class="select-multi">
		<div class="activator" @click="visible = !visible" ref="activator">
			{{ selected }}
		</div>
		<transition name="fade">
			<div class="list"
			v-show="visible"
			v-closable="{
			exclude: ['activator'],
			handler: 'onClose'
			}">
				<div class="item" v-for="( item, index ) of list" :key="index">
					<label>
						<div class="checkbox">
							<input type="checkbox" v-model="item.status">
						</div>
						{{ item.label }}
					</label>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		list: Array
	},

	data()
	{
		return {
			visible: false,

		}
	},

	computed: {
		selected( )
		{
			let selected = this.list.filter( obj => obj.status ).map( obj => obj.label ).join( ', ' )		
			return selected ? selected : 'Categories'
		}
	},

	watch: {
		
	},

	methods: {
		onClose( )
		{
			this.visible = false
		}
	},
}
</script>

<style lang="scss" scoped>
.select-multi {

	.list {

		.item {

			.checkbox {
				position: relative;
				display: inline-block;
				vertical-align: middle;
			}
		}
	}
}
</style>


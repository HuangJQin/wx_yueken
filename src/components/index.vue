<template>
	<div class="index">
		<keep-alive>
		  <router-view></router-view>
		</keep-alive>
		<foot></foot>
	</div>
</template>

<script>
import foot from './footer'
export default {
	components: {
		foot
	}
}
</script>

<style scoped="scoped">

</style>

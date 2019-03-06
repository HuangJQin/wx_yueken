<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script>
import login from './components/login'
export default {
	components: {
		login
	}
}
</script>

<style>
  *{
		margin: 0;
		padding: 0;
	}
</style>

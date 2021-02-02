<template>
	<div class="app">
		<div class="app__sidebar">
			<Logo descColor="gray"/>

			<div class="burger"></div>
			<form action="" class="form"></form>
			<span class="copyright"></span>
		</div>
		<div class="app__body">
			<header class="header">
				<nav class="static-menu"></nav>
				<div class="user-buttons"></div>
			</header>
			<div class="app-map app__map"></div>
			<div class="order-info-card"></div>
			<div class="app__banner"></div>
			<div class="site-menu"></div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	
	export default {
		layout: ({isMobile}) => isMobile ? 'app-mobile' : 'app',
	}
</script>

<style lang="scss">
	@import "~/assets/scss/_variables.scss";
	@import "~/assets/scss/_mixins.scss";
	
	
</style>

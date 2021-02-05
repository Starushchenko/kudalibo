<template>
	<div class="container">
		<h1>Здесь будет текст политики конфиденциальности</h1>
		<NuxtLink to="/">На главную</NuxtLink>
	</div>
</template>

<script>
	export default {
		layout: ({ isMobile }) => isMobile ? 'default-mobile' : 'default',
	}
</script>

<style lang="scss">
	@import "~/assets/scss/_variables.scss";
	@import "~/assets/scss/_mixins.scss";
</style>

<template>
	<nav class="static-menu">
		<ul class="static-menu__list">
			<li class="static-menu__item"><NuxtLink to="/about" class="static-menu__link">Как работает Кудалибо</NuxtLink></li>
			<li class="static-menu__item"><NuxtLink to="/drivers" class="static-menu__link">Водителям</NuxtLink></li>
			<li class="static-menu__item"><NuxtLink to="/partners" class="static-menu__link">Партнёрам</NuxtLink></li>
		</ul>
	</nav>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	@import '~assets/scss/mixins';
	
	.static-menu {
		
		&__list {
			display: flex;
		}
		
		&__item {
			padding: 15px;
			margin-right: 10px;
			
			&:last-child {
				margin-right: 0;
			}
		}
		
		&__link {
			font-size: 16px;
			font-weight: 500;
			color: $main-text-color;
			@include underline($main-text-color);
			
			&:hover {
				color: $accent-color;
				@include underline($accent-color);
			}
		}
	}
</style>

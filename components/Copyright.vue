<template>
	<span class="copyright">
		<span class="copyright__text">Сделано в «<a target="_blank" href="https://poravinternet.ru/">Первом интернет-проекте</a>»</span>
		<a target="_blank" href="https://poravinternet.ru/" class="copyright__logo-wrap">
		<svg-icon slot="icon" name="pip-logo-accent" width="25" height="13"/>
		</a>
	</span>
</template>


<script>
	export default {}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	
	.copyright {
		font-weight: 400;
		font-size: 14px;
		color: $text-gray-color;
		display: flex;
		align-items: center;
		
		.copyright__text a {
			color: $text-gray-color;
			border-bottom: 1px solid;
			
			&:hover {
				color: $accent-color;
				border-color: $accent-color;
			}
		}
		
		&--white {
			color: $light;
			font-size: 12px;
			
			.copyright__text a {
				color: $light;
				border-bottom: 1px solid;
			}
		}
		
		&__logo-wrap {
			margin-left: 10px;
			margin-top: 4px;
			
			a {
				border-bottom: none;
			}
		}
	}
</style>

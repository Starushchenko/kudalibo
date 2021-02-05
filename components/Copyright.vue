<template>
	<span class="copyright">
		<span class="copyright__text">Сделано в «<a target="_blank" href="https://poravinternet.ru/">Первом интернет-проекте</a>»</span>
		<a target="_blank" href="https://poravinternet.ru/" class="copyright__logo-wrap">
			<svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 7.11462L7.30758 11.8938L8.29904 10.4848L2.453 6.6615L5.42746 2.43461L11.5079 6.42658V4.55654L4.95742 0.0698242L0 7.11462Z" fill="#F2994A"/>
				<path d="M6.36751 7.16421L13.6751 11.9434L14.6666 10.5344L7.35901 5.75525L6.36751 7.16421Z" fill="#F2994A"/>
				<path d="M17.641 6.30749L10.3334 1.52834L11.3249 0.119385L18.6325 4.89853L17.641 6.30749Z" fill="#F2994A"/>
				<path d="M16.701 1.5779L17.6924 0.168945L25 4.9481L20.0426 11.9929L13.1892 7.33587L13.1035 5.40121L19.5725 9.6281L22.547 5.40121L16.701 1.5779Z" fill="#F2994A"/>
			</svg>
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

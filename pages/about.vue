<template>
	<div class="container">
		<div>
			<Logo/>
			<h1 class="title">
				kudalibo-front
			</h1>
			<div class="links">
				<a
						href="https://nuxtjs.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="button--green"
				>
					Documentation
				</a>
				<a
						href="https://github.com/nuxt/nuxt.js"
						target="_blank"
						rel="noopener noreferrer"
						class="button--grey"
				>
					GitHub
				</a>
			</div>
		</div>
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
	
	.container {
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		
		.subtitle {
			font-weight: 300;
			font-size: 42px;
			word-spacing: 5px;
			padding-bottom: 15px;
		}
	}
	
	.links {
		padding-top: 15px;
	}
</style>

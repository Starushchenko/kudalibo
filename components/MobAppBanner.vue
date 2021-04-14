<template>
	
	<transition name="hideToRight">
		<div v-if="!bannerClosed && !bannerClosedManually" class="mobapp-banner">
			<a class="mobapp-banner__close" @click.prevent="saveClosed">
        <svg-icon name="close-dark" width="24" height="24"/>
			</a>
			<h3 class="mobapp-banner__title">В приложении комфортнее!</h3>
			<p class="mobapp-banner__text">Скачайте удобное приложение Кудалибо в Play Маркет или App Store</p>
			<img class="mobapp-banner__image" src="~assets/img/mobile-banner.png" alt="Приложение Kudalibo">
			<div class="mobapp-banner__links">
				<a class="mobapp-banner__link" href="#">
					<img class="mobapp-banner__market" src="~assets/img/appstore.png" alt="Кудалибо в Play Market">
				</a>
				<a class="mobapp-banner__link" href="#">
					<img class="mobapp-banner__market" src="~assets/img/gplay.png" alt="Кудалибо в AppStore">
				</a>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data: () => {
			return {
				bannerClosedManually: false
			}
		},
		computed: {
			bannerClosed() {
				return (this.$cookies.get('mobapp-banner-closed'));
			}
		},
		methods: {
			saveClosed() {
				this.$cookies.set('mobapp-banner-closed', 'true', {
					path: '/',
					maxAge: 60 * 60 * 24 * 7
				});
				this.bannerClosedManually = true;
			},
		},
	}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	@import '~assets/scss/mixins';
	
	.mobapp-banner {
		position: absolute;
		right: 0;
		bottom: 60px;
		max-width: 270px;
		z-index: 4;
		border-radius: 6px 0 0 6px;
		background: $light;
		padding: 20px 30px 20px 20px;
		box-shadow: $card-shadow;
    transition: .3s;
	}
	
	.mobapp-banner__close {
		position: absolute;
		top: 8px;
		right: 8px;
		cursor: pointer;
		width: 25px;
		height: 25px;
		background: $light;
		z-index: 2;
  
		svg {
			transition: 0.3s;
      stroke: $main-text-color
		}
		
		&:hover {
			
			svg {
				stroke: $accent-color
			}
		}
	}
	
	.mobapp-banner__title {
		font-size: 22px;
		font-weight: 500;
		line-height: 1.2;
		margin-bottom: 10px;
	}
	
	.mobapp-banner__text {
		font-size: 14px;
		font-weight: 400;
		max-width: 175px;
		color: $text-gray-color;
		margin-bottom: 22px;
	}
	
	.mobapp-banner__image {
		position: absolute;
		top: 20px;
		right: 0;
	}
	
	.mobapp-banner__links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	
	.mobapp-banner__link {
		box-shadow: $card-shadow;
		margin-bottom: 8px;
		display: block;
		
		&:hover {
			box-shadow: none;
		}
	}
  
  @media (max-width: 1199px) {
    .mobapp-banner {
      display: none;
    }
  }
</style>

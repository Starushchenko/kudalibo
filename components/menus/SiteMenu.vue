<template>
	<div class="site-menu">
		<h2 class="site-menu__title">Меню сайта</h2>
		<div class="site-menu__wrap">
			<nav class="site-menu__block">
				<span class="site-menu__block-title">Информация</span>
				<ul class="site-menu__block-list">
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">Как работает Кудалибо</a>
					</li>
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">О компании</a>
					</li>
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">Отзывы</a>
					</li>
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">Частые вопросы</a>
					</li>
				</ul>
				
				<span class="site-menu__block-title">Пользователям</span>
				<ul class="site-menu__block-list">
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">Связаться с нами</a>
					</li>
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">Последние новости</a>
					</li>
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">Доверие и безопасность</a>
					</li>
					<li class="site-menu__item">
						<a href="#" class="site-menu__item-link">Политика конфиденциальности</a>
					</li>
				</ul>
        
        <Social class="site-menu__socials" />
			</nav>
			
			<div class="site-menu__content-block">
				<span class="site-menu__block-title">Работа в Кудалибо</span>
				<div class="site-menu__block-content">
					<p>Кудалибо — это уникальный сервис, где водители сами назначают цену за поездку, а пользователи всегда
						имеют возможность выбора.</p>
					<p>Мы также предлагаем выгодные условия для партнёров, которые готовы разместить виджет Кудалибо на
						своём сайте или выставлять новые заказы.</p>
				</div>
				<div class="site-menu__banners">
					<div class="site-menu__banners-left">
						<a href="#" class="image-link">
							<img src="~assets/img/driver-link.jpg" alt="Водителям">
							<span>Водителям</span>
						</a>
						<a href="#" class="image-link">
							<img src="~assets/img/partner-link.jpg" alt="Партнёрам">
							<span>Партнёрам</span>
						</a>
					</div>
					<a href="#" class="site-menu__banners-right">
						<div class="blogs-banner cookie-banner cookie-banner--black">
							<h3 class="cookie-banner__title">Не знаете, куда поехать в Крыму ?</h3>
							<p class="cookie-banner__text">Мы составили полный перечень достопримечательностей Крыма на любой вкус и
								кошелёк!</p>
							<span class="btn btn--gray">Узнать больше</span>
							<img class="cookie-banner__image" src="~assets/img/crimea-blogs-logo.png" alt="Логотип Крыма">
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	@import '~assets/scss/mixins';
	
	.site-menu {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		visibility: hidden;
		padding: 30px 50px;
		opacity: 0;
		border-left: 1px solid rgba(255, 255, 255, .5);
		background: rgba(0, 0, 0, .3);
		color: $light;
    overflow-y: auto;
    @include scrollbar(5px, $accent-color);
		
		&__title {
			color: $light;
			font-size: 24px;
			font-weight: 300;
			margin-bottom: 95px;
		}
		
		&__wrap {
			display: flex;
		}
		
		&__block {
			max-width: 230px;
			min-width: 230px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-right: 60px;
		}
		
		&__block-title {
			font-size: 20px;
			font-weight: 700;
			margin-bottom: 12px;
			display: block;
		}
		
		&__content-block {
			max-width: 585px;
		}
		
		&__block-content {
			max-width: 566px;
			margin-bottom: 35px;
			
			p {
				margin-bottom: 10px;
			}
		}
		
		&__block-list {
			display: flex;
			flex-direction: column;
			margin-bottom: 45px;
		}
		
		&__item {
			margin-bottom: 10px;
		}
		
		&__item-link {
			color: $light;
			font-size: 16px;
			font-weight: 400;
			@include underline($light);
			padding-bottom: 1px;
			line-height: 1.3;
			
			&:hover {
				color: $accent-color;
				@include underline($accent-color)
			}
		}
		
		&__banners {
			display: flex;
		}
		
		&__banners-left {
			min-width: 300px;
			margin-right: 18px;
			
			.image-link {
				margin-bottom: 18px;
			}
		}
    
    @media (max-width: 1439px) {
      &__content-block {
        max-width: calc(100% - 290px);
      }
      &__banners {
        flex-direction: column;
        max-width: 300px;
      }
    }
    
    @media (max-width: 1199px) {
      padding: 30px 20px;
      
      &__block {
        margin-right: 20px;
      }
      
      &__title {
        margin-bottom: 45px;
      }
      
      &__block-content {
        font-size: 14px;
      }
      
      &__block-list {
        margin-bottom: 25px;
      }
      
      &__banners-left {
        min-width: unset;
        margin: 0;
  
        .image-link {
          min-height: 60px;
          
          span {
            font-size: 18px;
          }
          
          img {
            object-fit: cover;
          }
        }
      }
    }
	}
</style>

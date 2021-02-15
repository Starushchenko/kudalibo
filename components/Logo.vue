<template>
	<a class="logo" @click="goTo('/')" @mouseover.self="highlightLogo" @mouseleave.self="finishHighlightLogo">
		<svg class="logo__image" width="150" height="34" viewBox="0 0 150 34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#logo-orange)">
				<path d="M13.3397 0.178741L4.49102 21.2958L6.84769 0.178741H3.55724L0 31.9929H3.29045L8.1283 20.4468L12.0057 31.9929H15.2961L9.96028 16.0858L16.6301 0.178741H13.3397Z" fill="#F2994A"/>
				<path d="M67.6765 31.9929H70.9669L81.781 9.23147L79.2375 31.9929H82.528L86.0852 0.178741H82.7948L67.6765 31.9929Z" fill="#F2994A"/>
				<path d="M65.0083 0.178741L49.89 31.9929H53.1805L57.4314 23.0563H62.456L61.4511 31.9929H64.7415L68.2988 0.178741H65.0083ZM58.8721 20.0179L63.9945 9.23147L62.7939 20.0179H58.8721Z" fill="#F2994A"/>
				<path d="M45.4438 0.178741L31.2149 30.1162H26.9462V33.3333H48.0228V30.1162H45.3905L48.7343 0.178741H45.4438ZM34.5053 30.1162L44.43 9.23147L42.1 30.1162H34.5053Z" fill="#F2994A"/>
				<path d="M33.9715 0.178741L25.5409 17.9267L23.5666 0.178741H20.2762L22.8907 23.4942L18.8533 31.9929H22.1437L37.262 0.178741H33.9715Z" fill="#F2994A"/>
				<path d="M93.6798 22.9401L96.2233 0.178741H92.9328L89.3756 31.9929H92.666L103.48 9.23147L100.937 31.9929H104.227L107.784 0.178741H104.494L93.6798 22.9401Z" fill="#F2994A"/>
				<path d="M119.025 13.6461H116.242L117.407 3.21717H127.794V0.178741H117.745H116.855H114.454L110.897 31.9929H112.364H114.187H119.025C124.041 31.9929 128.15 27.8642 128.15 22.824C128.15 17.7748 124.041 13.6461 119.025 13.6461ZM124.326 22.7346C124.326 25.6926 121.916 28.1144 118.972 28.1144H114.623L115.824 17.3459H118.972C121.916 17.3459 124.326 19.7677 124.326 22.7346Z" fill="#F2994A"/>
				<path d="M142.921 0C138.519 0 134.473 3.6193 133.93 8.04289L131.965 24.1287C131.423 28.5523 134.58 32.1716 138.982 32.1716C143.384 32.1716 147.43 28.5523 147.973 24.1287L149.938 8.04289C150.48 3.6193 147.323 0 142.921 0ZM146.407 7.605L144.442 23.6908C144.291 24.9508 143.606 26.202 142.566 27.1403C141.534 28.0697 140.227 28.597 138.991 28.597C137.906 28.597 136.954 28.1948 136.314 27.462C135.656 26.7113 135.371 25.6836 135.504 24.5666L137.47 8.48079C137.621 7.22073 138.306 5.96961 139.346 5.03128C140.378 4.10188 141.685 3.57462 142.921 3.57462C144.006 3.57462 144.958 3.97676 145.598 4.70956C146.265 5.46023 146.55 6.48793 146.407 7.605Z" fill="#F2994A"/>
			</g>
			<defs>
				<clipPath id="logo-orange">
					<rect width="150" height="33.3333" fill="white"/>
				</clipPath>
			</defs>
		</svg>
		<span class="logo__desc" :class="descColor">Перевозки по Крыму</span>
	</a>
</template>

<script>
	export default {
		props: ['descColor'],
		methods: {
			goTo(link) {
				this.$router.push(link);
			},
			highlightLogo(event) {
				event.target.classList.add('logo--hovered');
				event.target.classList.remove('logo--outhovered');
			},
			finishHighlightLogo(event) {
				event.target.classList.remove('logo--hovered');
				event.target.classList.add('logo--outhovered');
			}
		}
	}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	
	.logo {
		display: inline-flex;
		flex-direction: column;
		cursor: pointer;
		align-self: flex-start;
		
		&__desc {
			color: $text-gray-color;
			font-size: 13px;
			font-weight: 400;
			display: block;
			margin-top: 5px;
			
			&.gray {
				color: $text-gray-color;
			}
			
			&.white {
				color: $light;
			}
		}
	}
	
	// Описание анимаций
	.logo {
		path {
			transition: 0.6s;
			fill: $accent-color;
		}
		&.logo--hovered {
			path:first-of-type {
				animation: logoPathFilling 0.3s 1 linear;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(5) {
				animation: logoPathFilling 0.3s 1 linear 0.1s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(4) {
				animation: logoPathFilling 0.3s 1 linear 0.15s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(3) {
				animation: logoPathFilling 0.3s 1 linear 0.2s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(2) {
				animation: logoPathFilling 0.3s 1 linear 0.25s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(6) {
				animation: logoPathFilling 0.3s 1 linear 0.3s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(7) {
				animation: logoPathFilling 0.3s 1 linear 0.35s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(8) {
				animation: logoPathFilling 0.3s 1 linear 0.4s;
				animation-fill-mode: forwards;
			}
		}
		&.logo--outhovered {
			path {
				fill: $accent-alt-light;
			}
			
			path:first-of-type {
				animation: logoPathFillingBack 0.3s 1 linear;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(5) {
				animation: logoPathFillingBack 0.3s 1 linear 0.1s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(4) {
				animation: logoPathFillingBack 0.3s 1 linear 0.15s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(3) {
				animation: logoPathFillingBack 0.3s 1 linear 0.2s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(2) {
				animation: logoPathFillingBack 0.3s 1 linear 0.25s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(6) {
				animation: logoPathFillingBack 0.3s 1 linear 0.3s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(7) {
				animation: logoPathFillingBack 0.3s 1 linear 0.35s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(8) {
				animation: logoPathFillingBack 0.3s 1 linear 0.4s;
				animation-fill-mode: forwards;
			}
		}
		&.logo--white {
			path {
				fill: $light;
			}
		}
		&.logo--white.logo--hovered {
			path:first-of-type {
				animation: logoWhitePathFilling 0.3s 1 linear;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(5) {
				animation: logoWhitePathFilling 0.3s 1 linear 0.1s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(4) {
				animation: logoWhitePathFilling 0.3s 1 linear 0.15s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(3) {
				animation: logoWhitePathFilling 0.3s 1 linear 0.2s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(2) {
				animation: logoWhitePathFilling 0.3s 1 linear 0.25s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(6) {
				animation: logoWhitePathFilling 0.3s 1 linear 0.3s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(7) {
				animation: logoWhitePathFilling 0.3s 1 linear 0.35s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(8) {
				animation: logoWhitePathFilling 0.3s 1 linear 0.4s;
				animation-fill-mode: forwards;
			}
		}
		&.logo--white.logo--outhovered {
			path {
				fill: $accent-alt-light;
			}
			
			path:first-of-type {
				animation: logoWhitePathFillingBack 0.3s 1 linear;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(5) {
				animation: logoWhitePathFillingBack 0.3s 1 linear 0.1s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(4) {
				animation: logoWhitePathFillingBack 0.3s 1 linear 0.15s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(3) {
				animation: logoWhitePathFillingBack 0.3s 1 linear 0.2s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(2) {
				animation: logoWhitePathFillingBack 0.3s 1 linear 0.25s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(6) {
				animation: logoWhitePathFillingBack 0.3s 1 linear 0.3s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(7) {
				animation: logoWhitePathFillingBack 0.3s 1 linear 0.35s;
				animation-fill-mode: forwards;
			}
			
			path:nth-of-type(8) {
				animation: logoWhitePathFillingBack 0.3s 1 linear 0.4s;
				animation-fill-mode: forwards;
			}
		}
	}
	
	@keyframes logoPathFilling {
		0% {
			fill: $accent-color;
		}
		
		100% {
			fill: $accent-alt-light;
		}
	}
	@keyframes logoPathFillingBack {
		0% {
			fill: $accent-alt-light;
		}
		
		100% {
			fill: $accent-color;
		}
	}
	@keyframes logoWhitePathFilling {
		0% {
			fill: $light;
		}
		
		100% {
			fill: $accent-alt-light;
		}
	}
	@keyframes logoWhitePathFillingBack {
		0% {
			fill: $accent-alt-light;
		}
		
		100% {
			fill: $light;
		}
	}
</style>

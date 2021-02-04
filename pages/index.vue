<template>
	<div class="app">
		<div class="app__sidebar">
			<Logo descColor="white"/>
			
			<Btn class="burger btn btn--dark btn--no-text btn--rounded">
				<svg slot="icon" width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="2" width="25" height="2" rx="1" fill="white"/>
					<rect y="10" width="25" height="2" rx="1" fill="white"/>
					<rect y="18" width="20" height="2" rx="1" fill="white"/>
					<circle cx="25" cy="3" r="3" fill="#FF9332"/>
				</svg>
			</Btn>
			
			<form action="" class="form">
				<fieldset class="form__set">
				
				</fieldset>
				<fieldset class="form__set">
					<div class="form__group form__group--place-g">
						<label for="place1">Откуда</label>
						<input type="text" name="place1" id="place1">
					</div>
					<div class="form__group form__group--place-o">
					
					</div>
				</fieldset>
			</form>
			
			<!-- Пример валидации поля -->
			<!--<ValidationObserver tag="form" class="form" v-slot="{ invalid }">
				<ValidationProvider rules="required|alpha" v-slot="{ errors }">
					<input type="text" v-model="value" :data-invalid="errors">
				</ValidationProvider>
			</ValidationObserver>-->
			
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
	import Btn from '~/components/Btn.vue'
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	
	export default {
		layout: ({isMobile}) => isMobile ? 'app-mobile' : 'app',
		components: {
			ValidationProvider,
			ValidationObserver
		},
		data: () => ({
			value: ""
		})
	}
</script>

<style lang="scss">
	@import "~/assets/scss/_variables.scss";
	@import "~/assets/scss/_mixins.scss";
	
</style>

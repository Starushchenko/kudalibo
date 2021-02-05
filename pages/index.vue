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
			
			<form action="" class="form form">
				<fieldset class="form__set">
					<div class="tab-radios form__tab-radios">
						<div class="tab-radios__item">
							<input type="radio" name="order-type" id="transfer" value="transfer" v-model="orderType" checked>
							<label for="transfer">Между городами</label>
						</div>
						<div class="tab-radios__item">
							<input type="radio" name="order-type" id="taxi" v-model="orderType" value="taxi">
							<label for="taxi">По городу</label>
						</div>
					</div>
				</fieldset>
				
				<transition name="fadeToRight">
					<div key="transfer" v-if="orderType == 'transfer'">
					<fieldset class="form__set">
					<div class="form__group form__group--place-g" data-place-index="1">
						<label for="place1">Откуда</label>
						<input type="text" name="place1" id="place1" placeholder="Введите адрес начала маршрута">
					</div>
					<div class="form__group form__group--place-o" data-place-index="1">
						<label for="place2">Куда</label>
						<input type="text" name="place2" id="place2" placeholder="Введите адрес конца маршрута">
					</div>
					
					<Btn class="btn btn--white form__btn" type="button">
						<svg slot="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 2.25V9M9 15.75V9M9 9H15.75M9 9H2.25" stroke="#F2994A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<span slot="text">Добавить адрес</span>
					</Btn>
				</fieldset>
					
					<fieldset class="form__set">
						<div class="form__group form__group--date">
							<label for="order-date">Дата / время поездки</label>
							<input type="text" name="order-date" id="order-date" placeholder="Выберите дату и время поездки">
						</div>
						<div class="form__group">
							<label for="order-tel">Номер телефона</label>
							<input type="text" name="order-tel" id="order-tel" placeholder="+7 989 721 64 27">
						</div>
						
						<Btn class="btn btn--white form__btn" type="button">
							<svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.90837 3.72142C10.3566 1.42408 13.6434 1.42408 14.0916 3.72142C14.3644 5.11939 15.9053 5.86148 17.1683 5.20309C19.2439 4.12112 21.2933 6.69092 19.7766 8.47369C18.8536 9.55854 19.2342 11.226 20.5365 11.803C22.6765 12.7511 21.9451 15.9556 19.6056 15.8813C18.182 15.8362 17.1156 17.1734 17.4764 18.5512C18.0694 20.8155 15.108 22.2416 13.7075 20.3663C12.8552 19.2251 11.1448 19.2251 10.2926 20.3663C8.89198 22.2416 5.93059 20.8155 6.52357 18.5512C6.88441 17.1734 5.81802 15.8362 4.39442 15.8813C2.05494 15.9556 1.32354 12.7511 3.46356 11.803C4.76578 11.226 5.14637 9.55854 4.22344 8.47369C2.70674 6.69092 4.75609 4.12112 6.83166 5.20309C8.09468 5.86148 9.63564 5.11939 9.90837 3.72142Z" stroke="#F2994A" stroke-width="1.8"/>
								<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3432 15 9.00001 13.6569 9.00001 12C9.00001 10.3431 10.3432 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#F2994A" stroke-width="1.8"/>
							</svg>
							<span slot="text">Дополнительные настройки</span>
						</Btn>
					</fieldset>
					
					<fieldset class="form__set">
						<Btn class="btn form__submit" type="submit">
						<span slot="text">Заказать поездку</span>
					</Btn>
					</fieldset>
					
					<div class="form__rules-agree form__rules-agree--white">
						<input type="checkbox" id="rules-agree" name="rules-agree" required checked>
						<label for="rules-agree">Соглашаюсь с <NuxtLink to="/confidential">правилами обработки персональных данных</NuxtLink></label>
					</div>
				</div>
					
					<div key="taxi" v-else="orderType == 'taxi'">
						<fieldset class="form__set">
							<div class="form__group form__group--place-g" data-place-index="1">
								<label for="city">Выберите ваш город</label>
								<select name="city" id="city">
									<option value="1">Севастополь</option>
									<option value="2">Симферополь</option>
									<option value="3">Ялта</option>
									<option value="4">Евпатория</option>
									<option value="5">Керчь</option>
								</select>
							</div>
							<div class="form__group form__group--place-g" data-place-index="1">
								<label for="place1">Откуда</label>
								<input type="text" name="place1" id="place1" placeholder="Введите адрес начала маршрута">
							</div>
							<div class="form__group form__group--place-o" data-place-index="1">
								<label for="place2">Куда</label>
								<input type="text" name="place2" id="place2" placeholder="Введите адрес конца маршрута">
							</div>
							
							<Btn class="btn btn--white form__btn" type="button">
								<svg slot="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 2.25V9M9 15.75V9M9 9H15.75M9 9H2.25" stroke="#F2994A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								<span slot="text">Добавить адрес</span>
							</Btn>
						</fieldset>
						
						<fieldset class="form__set">
							<div class="form__group form__group--date">
								<label for="order-date">Дата / время поездки</label>
								<input type="text" name="order-date" id="order-date" placeholder="Выберите дату и время поездки">
							</div>
							<div class="form__group">
								<label for="order-tel">Номер телефона</label>
								<input type="text" name="order-tel" id="order-tel" placeholder="+7 989 721 64 27">
							</div>
							
							<Btn class="btn btn--white form__btn" type="button">
								<svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.90837 3.72142C10.3566 1.42408 13.6434 1.42408 14.0916 3.72142C14.3644 5.11939 15.9053 5.86148 17.1683 5.20309C19.2439 4.12112 21.2933 6.69092 19.7766 8.47369C18.8536 9.55854 19.2342 11.226 20.5365 11.803C22.6765 12.7511 21.9451 15.9556 19.6056 15.8813C18.182 15.8362 17.1156 17.1734 17.4764 18.5512C18.0694 20.8155 15.108 22.2416 13.7075 20.3663C12.8552 19.2251 11.1448 19.2251 10.2926 20.3663C8.89198 22.2416 5.93059 20.8155 6.52357 18.5512C6.88441 17.1734 5.81802 15.8362 4.39442 15.8813C2.05494 15.9556 1.32354 12.7511 3.46356 11.803C4.76578 11.226 5.14637 9.55854 4.22344 8.47369C2.70674 6.69092 4.75609 4.12112 6.83166 5.20309C8.09468 5.86148 9.63564 5.11939 9.90837 3.72142Z" stroke="#F2994A" stroke-width="1.8"/>
									<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3432 15 9.00001 13.6569 9.00001 12C9.00001 10.3431 10.3432 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#F2994A" stroke-width="1.8"/>
								</svg>
								<span slot="text">Дополнительные настройки</span>
							</Btn>
						</fieldset>
						
						<fieldset class="form__set">
							<Btn class="btn form__submit" type="submit">
								<span slot="text">Заказать поездку</span>
							</Btn>
						</fieldset>
						
						<div class="form__rules-agree form__rules-agree--white">
							<input type="checkbox" id="rules-agree" name="rules-agree" required checked>
							<label for="rules-agree">Соглашаюсь с <NuxtLink to="/confidential">правилами обработки персональных данных</NuxtLink></label>
						</div>
					</div>
				</transition>
			</form>
			
			<!-- Пример валидации поля -->
			<!--<ValidationObserver tag="form" class="form" v-slot="{ invalid }">
				<ValidationProvider rules="required|alpha" v-slot="{ errors }">
					<input type="text" v-model="value" :data-invalid="errors">
				</ValidationProvider>
			</ValidationObserver>-->
			
			
			<Copyright class="copyright--white app__copyright"/>
		</div>
		<div class="app__body">
			<header class="header">
				<nav class="static-menu"></nav>
				<div class="user-buttons"></div>
			</header>
			<div class="app-map app__map">
				<client-only>
					<l-map :zoom=zoom :center="[center.lat,center.lng]">
						<l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
						<l-marker v-for="item in waypoints" :key="item.lat" :lat-lng="[item.lat,item.lng]"></l-marker>
					</l-map>
				</client-only>
			</div>
			<div class="order-info-card"></div>
			<div class="app__banner"></div>
			<div class="site-menu"></div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	import Btn from '~/components/Btn.vue'
	import Copyright from '~/components/Copyright.vue'
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	
	export default {
		layout: ({isMobile}) => isMobile ? 'app-mobile' : 'app',
		components: {
			Copyright
			/*ValidationProvider,
			ValidationObserver,*/
		},
		data: () => ({
			// transfer или taxi
			orderType: "transfer",
			// Настройки карты
			zoom: 9,
			center: { lat: 45.2500, lng: 34.506 },
			waypoints: [
				{ lat: 45.7436056, lng: 2.5304153 },
				{ lat: 38.7436056, lng: -0.131281 }
			]
		})
	}
</script>

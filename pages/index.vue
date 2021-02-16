<template>
	<div class="app" :class="{'app--menu-open': menuOpened}">
		<div class="app__sidebar" :class="{'app__sidebar--settings-open': settingsShown}">
			<Logo descColor="white"/>
			
			<!-- Иконка меню -->
			<Btn class="burger btn btn--dark btn--no-text btn--rounded" :class="{'burger--active': menuOpened}" @click.native="menuOpened = !menuOpened">
				<div slot="icon">
						<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="2" width="25" height="2" rx="1" fill="white"/>
							<rect y="10" width="25" height="2" rx="1" fill="white"/>
							<rect y="18" width="20" height="2" rx="1" fill="white"/>
							<circle cx="25" cy="3" r="3" fill="#FF9332"/>
							<path d="M1.66675 1.66669L11.0001 11M11.0001 11L20.3334 20.3334M11.0001 11L20.3334 1.66669M11.0001 11L1.66675 20.3334" stroke="url(#burger-linear)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
								<linearGradient id="burger-linear" x1="11.0001" y1="1.66669" x2="11.0001" y2="20.3334" gradientUnits="userSpaceOnUse">
									<stop stop-color="white"/>
									<stop offset="0.760417" stop-color="#DD8D46"/>
									<stop offset="1" stop-color="#DD8D46"/>
								</linearGradient>
							</defs>
						</svg>
				
				</div>
			</Btn>
			
			<!--	Дополнительные настройки заказа	-->
			<transition name="fadeToLeft">
				<form v-if="settingsShown" action="" class="form app__settings-side">
					<button type="button" class="app__settings-close" @click="switchOrderSettings">
						Закрыть
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.83337 5.83334L14 14M14 14L22.1667 22.1667M14 14L22.1667 5.83334M14 14L5.83337 22.1667" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
					
					<h2 class="app__settings-title">Дополнительные настройки</h2>
					
					<fieldset class="form__set">
						<div class="form__group">
							<input type="checkbox" v-model="orderData.childSeat" id="child-seat" name="child-seat">
							<label for="child-seat">Детское кресло</label>
						</div>
						<div class="form__group">
							<input type="checkbox" v-model="orderData.baggage" id="baggage" name="baggage">
							<label for="baggage">С багажом</label>
						</div>
						<div class="form__group">
							<input type="checkbox" v-model="orderData.bigBaggage" id="bigBaggage" name="bigBaggage">
							<label for="bigBaggage">Увеличенный багажник
								<span class="form__label-desc">(~50 ₽)</span>
							</label>
						</div>
						<div class="form__group">
							<input type="checkbox" v-model="orderData.withPet" id="withPet" name="withPet">
							<label for="withPet">С животным
								<span class="form__label-desc">(~50 ₽)</span>
							</label>
						</div>
						<div class="form__group">
							<input type="checkbox" v-model="orderData.signMeeting" id="signMeeting" name="signMeeting">
							<label for="signMeeting">Встреча с табличкой
								<span class="form__label-desc">(~100 ₽)</span>
							</label>
						</div>
						<div class="form__group">
							<label for="signMeetingText">Текст на табличке</label>
							<input type="text" name="signMeetingText" id="signMeetingText" v-model="orderData.signMeetingText" placeholder="Любой приличный текст">
						</div>
					</fieldset>
					
					<fieldset class="form__set">
						<div class="form__group">
							<label for="message">Дополнительная информация</label>
							<textarea name="message" id="message" v-model="orderData.message"
												placeholder="Введите дополнительные уточнения водителю (например, как до вас доехать)">
						</textarea>
						</div>
					</fieldset>
					
					<fieldset class="form__set">
						<Btn class="btn btn--white form__btn" type="button" @click.native="switchOrderSettings">
							<svg slot="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.75 4.5L6.75 13.5L2.25 9" stroke="#DD8D46" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<span slot="text">Сохранить</span>
						</Btn>
					</fieldset>
				</form>
			</transition>
			
			<!--	Форма заказа	-->
			<form action="" class="form form--app-order">
				<fieldset class="form__set">
					<div class="tab-radios form__tab-radios">
						<div class="tab-radios__item">
							<input type="radio" name="order-type" id="transfer" value="transfer" v-model="orderData.orderType" checked>
							<label for="transfer">Между городами</label>
						</div>
						<div class="tab-radios__item">
							<input type="radio" name="order-type" id="taxi" v-model="orderData.orderType" value="taxi">
							<label for="taxi">По городу</label>
						</div>
					</div>
				</fieldset>
				
				<transition name="fadeToRight">
					<div key="transfer" v-if="orderData.orderType == 'transfer'">
						<fieldset class="form__set">
							<div class="form__group form__group--place-g" data-place-index="1">
								<label for="place1">Откуда</label>
								<input type="text" name="place1" id="place1" v-model="orderData.cityFrom" placeholder="Введите адрес начала маршрута">
							</div>
							<div class="form__group form__group--place-o" data-place-index="1">
								<label for="place2">Куда</label>
								<input type="text" name="place2" id="place2" v-model="orderData.cityTo" placeholder="Введите адрес конца маршрута">
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
								<input type="text" name="order-date" id="order-date" v-model="orderData.date" placeholder="Выберите дату и время поездки">
							</div>
							<div class="form__group">
								<label for="order-tel">Номер телефона</label>
								<input type="text" name="order-tel" id="order-tel" v-model="orderData.phone" placeholder="+7 989 721 64 27">
							</div>
							
							<Btn class="btn btn--white form__btn" type="button" @click.native="switchOrderSettings">
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
							<label for="rules-agree">Соглашаюсь с
								<NuxtLink to="/confidential">правилами обработки персональных данных</NuxtLink>
							</label>
						</div>
					</div>
					
					<div key="taxi" v-else="orderData.orderType == 'taxi'">
						<fieldset class="form__set">
							<div class="form__group form__group--place-g" data-place-index="1">
								<label for="city">Выберите ваш город</label>
								<select v-model="orderData.city" name="city" id="city">
									<option value="1">Севастополь</option>
									<option value="2">Симферополь</option>
									<option value="3">Ялта</option>
									<option value="4">Евпатория</option>
									<option value="5">Керчь</option>
								</select>
							</div>
							<div class="form__group form__group--place-g" data-place-index="1">
								<label for="place1">Откуда</label>
								<input type="text" name="place1" id="place1" v-model="orderData.cityFrom" placeholder="Введите адрес начала маршрута">
							</div>
							<div class="form__group form__group--place-o" data-place-index="1">
								<label for="place2">Куда</label>
								<input type="text" name="place2" id="place2" v-model="orderData.cityTo" placeholder="Введите адрес конца маршрута">
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
								<input type="text" name="order-date" id="order-date" v-model="orderData.date" placeholder="Выберите дату и время поездки">
							</div>
							<div class="form__group">
								<label for="order-tel">Номер телефона</label>
								<input type="text" name="order-tel" id="order-tel" v-model="orderData.phone" placeholder="+7 989 721 64 27">
							</div>
							
							<Btn class="btn btn--white form__btn" type="button" @click.native="switchOrderSettings">
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
							<label for="rules-agree">Соглашаюсь с
								<NuxtLink to="/confidential">правилами обработки персональных данных</NuxtLink>
							</label>
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
				
				<StaticMenu/>
				
				<div class="user-buttons">
					<Btn class="btn btn--dark btn--rounded">
						<svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 8C13.7956 8 14.5587 8.31607 15.1213 8.87868C15.6839 9.44129 16 10.2044 16 11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12C17.2652 12 17.5196 11.8946 17.7071 11.7071C17.8946 11.5196 18 11.2652 18 11C18 9.67392 17.4732 8.40215 16.5355 7.46447C15.5979 6.52678 14.3261 6 13 6C12.7348 6 12.4804 6.10536 12.2929 6.29289C12.1054 6.48043 12 6.73478 12 7C12 7.26522 12.1054 7.51957 12.2929 7.70711C12.4804 7.89464 12.7348 8 13 8Z" fill="#DD8D46"/>
							<path d="M13 4C14.8565 4 16.637 4.7375 17.9497 6.05025C19.2625 7.36301 20 9.14348 20 11C20 11.2652 20.1054 11.5196 20.2929 11.7071C20.4804 11.8946 20.7348 12 21 12C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 8.61305 21.0518 6.32387 19.364 4.63604C17.6761 2.94821 15.3869 2 13 2C12.7348 2 12.4804 2.10536 12.2929 2.29289C12.1054 2.48043 12 2.73478 12 3C12 3.26522 12.1054 3.51957 12.2929 3.70711C12.4804 3.89464 12.7348 4 13 4ZM21.75 15.91C21.695 15.7495 21.6 15.6056 21.4741 15.4919C21.3481 15.3781 21.1953 15.2984 21.03 15.26L15.03 13.89C14.8671 13.8531 14.6976 13.8575 14.5369 13.9029C14.3762 13.9484 14.2294 14.0333 14.11 14.15C13.97 14.28 13.96 14.29 13.31 15.53C11.1532 14.5362 9.42499 12.8009 8.44 10.64C9.71 10 9.72 10 9.85 9.85C9.96671 9.73056 10.0516 9.58379 10.0971 9.42308C10.1425 9.26238 10.1469 9.09286 10.11 8.93L8.74 3C8.70165 2.8347 8.62186 2.68187 8.50814 2.55591C8.39443 2.42995 8.25053 2.335 8.09 2.28C7.85647 2.19659 7.61531 2.1363 7.37 2.1C7.11725 2.0414 6.85933 2.0079 6.6 2C5.38 2 4.20998 2.48464 3.34731 3.34731C2.48464 4.20998 2 5.38 2 6.6C2.00529 10.6827 3.62949 14.5967 6.5164 17.4836C9.40331 20.3705 13.3173 21.9947 17.4 22C18.0041 22 18.6022 21.881 19.1603 21.6498C19.7184 21.4187 20.2255 21.0798 20.6527 20.6527C21.0798 20.2255 21.4187 19.7184 21.6498 19.1603C21.881 18.6022 22 18.0041 22 17.4C22.0003 17.1455 21.9802 16.8913 21.94 16.64C21.898 16.3916 21.8344 16.1474 21.75 15.91ZM17.4 20C13.8469 19.9974 10.4401 18.5847 7.92769 16.0723C5.41528 13.5599 4.00265 10.1531 4 6.6C4.00263 5.91125 4.27741 5.25146 4.76443 4.76443C5.25146 4.27741 5.91125 4.00263 6.6 4H6.93L8 8.64L7.46 8.92C6.6 9.37 5.92 9.73 6.28 10.51C6.86622 12.1696 7.81477 13.6777 9.05674 14.9249C10.2987 16.172 11.8029 17.1269 13.46 17.72C14.3 18.06 14.63 17.43 15.08 16.56L15.37 16.01L20 17.07V17.4C19.9974 18.0888 19.7226 18.7485 19.2356 19.2356C18.7485 19.7226 18.0888 19.9974 17.4 20Z" fill="white"/>
							<path d="M17.9497 6.05025C16.637 4.7375 14.8565 4 13 4C12.7348 4 12.4804 3.89464 12.2929 3.70711C12.1054 3.51957 12 3.26522 12 3C12 2.73478 12.1054 2.48043 12.2929 2.29289C12.4804 2.10536 12.7348 2 13 2C15.3869 2 17.6761 2.94821 19.364 4.63604C21.0518 6.32387 22 8.61305 22 11C22 11.2652 21.8946 11.5196 21.7071 11.7071C21.5196 11.8946 21.2652 12 21 12C20.7348 12 20.4804 11.8946 20.2929 11.7071C20.1054 11.5196 20 11.2652 20 11C20 9.14348 19.2625 7.36301 17.9497 6.05025Z" fill="#DD8D46"/>
						</svg>
						<span slot="text">+ 7 978 282 82 82</span>
					</Btn>
					
					<div class="user-buttons__dropdown">
						<Btn class="btn btn--dark btn--rounded">
							<svg slot="icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="12.1202" cy="6.5" rx="4" ry="4.5" stroke="white" stroke-width="1.8"/>
								<path d="M20.1202 19C20.1202 22.5 16.1202 21.5 12.1202 21.5C8.12024 21.5 4.12024 22.5 4.12024 19C4.12024 17 7.70196 14.5 12.1202 14.5C16.5385 14.5 20.1202 17 20.1202 19Z" stroke="#DD8D46" stroke-width="1.8"/>
							</svg>
							<span slot="text">Личный кабинет</span>
						</Btn>
					</div>
				</div>
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
			
			<transition name="fadeToRight">
				<SiteMenu/>
			</transition>
			
			<div class="app__back" :class="{'app__back--active': modalBackShown}"></div>
		</div>
	</div>
</template>

<script>
	// import {ValidationProvider, ValidationObserver} from "vee-validate";

	export default {
		layout: ({isMobile}) => isMobile ? 'app-mobile' : 'app',
		components: {
			/*ValidationProvider,
			ValidationObserver,*/
		},
		data: () => ({
			// Данные заказа
			orderData: {
				orderType: "transfer", // transfer or taxi
				city: '',
				cityFrom: '',
				cityTo: '',
				date: '',
				phone: '',
				childSeat: false,
				baggage: false,
				bigBaggage: false,
				withPet: false,
				signMeeting: false,
				signMeetingText: '',
				otherPassengerPhone: '',
				message: ''
			},

			settingsShown: false,
			modalBackShown: false,
			menuOpened: false,

			// Настройки карты
			zoom: 9,
			center: {lat: 45.2500, lng: 34.506},
			waypoints: [
				{lat: 45.7436056, lng: 2.5304153},
				{lat: 38.7436056, lng: -0.131281}
			]
		}),
		methods: {
			switchOrderSettings: function () {
				this.settingsShown = (this.settingsShown !== true);
				this.modalBackShown = (this.modalBackShown !== true);
			},
		}
	}
</script>

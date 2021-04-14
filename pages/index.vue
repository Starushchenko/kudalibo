<template>
  <div class="app" :class="{'menu-open': menuOpened}">
    <div class="app__sidebar" :class="{'settings-open': settingsShown}">
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
            <svg-icon name="close-light" width="28" height="28"/>
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
              <svg-icon slot="icon" name="check-icon-accent" width="18" height="18"/>
              <span slot="text">Сохранить</span>
            </Btn>
          </fieldset>
        </form>
      </transition>
      
      <!--	Форма заказа	-->
      <ValidationObserver ref="orderFormValidator" slim>
        <form @submit.prevent="onOrderSubmit" ref="orderForm" action="" class="form form--app-order" :class="{'points-draggable': orderData.points.length > 2}">
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
              <OrderFields :orderData="orderData" @switchSettings="switchOrderSettings" :refs="$refs"></OrderFields>
            </div>
            
            <div key="taxi" v-else="orderData.orderType == 'taxi'">
              <OrderFields :orderData="orderData" @switchSettings="switchOrderSettings" :refs="$refs">
                <div slot="citySelect" class="form__group form__group--select">
                  <label for="city">Выберите ваш город</label>
                  <select v-model="orderData.city" name="city" id="city">
                    <option value="1">Севастополь</option>
                    <option value="2">Симферополь</option>
                    <option value="3">Ялта</option>
                    <option value="4">Евпатория</option>
                    <option value="5">Керчь</option>
                  </select>
                </div>
              </OrderFields>
            </div>
          </transition>
          
        </form>
      </ValidationObserver>
      
      <!--	Копирайт	-->
      <Copyright class="copyright--white app__copyright"/>
    </div>
    
    <div class="app__body">
      <header class="header">
        <!--	Меню по статическим страницам	-->
        <StaticMenu/>
        
        <!--	Интерактивные кнопки для авторизации / перехода по разделам ЛК	-->
        <div class="user-buttons">
          <Btn class="btn btn--dark btn--rounded">
            <svg-icon slot="icon" name="tel-icon-gradient" width="24" height="24"/>
            <span slot="text">+ 7 978 282 82 82</span>
          </Btn>
          
          <div v-if="userData.authorized" class="user-buttons__dropdown">
            <Btn class="btn btn--dark btn--rounded user-buttons__dropdown-handler">
              <svg-icon slot="icon" name="user-icon-gradient" width="25" height="24"/>
              <span slot="text">Личный кабинет</span>
            </Btn>
            <div class="user-buttons__dropdown-content">
              <ul class="user-buttons__dropdown-list">
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/orders">
                  <svg-icon v-slot="icon" name="flag-gray" width="22" height="22"/>
                  <span>Мои заказы</span>
                </NuxtLink>
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/settings">
                  <svg-icon v-slot="icon" name="settings-gray" width="22" height="22"/>
                  <span>Настройки</span>
                </NuxtLink>
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/support">
                  <svg-icon v-slot="icon" name="messages-gray" width="22" height="22"/>
                  <span>Нужна помощь ?</span>
                </NuxtLink>
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/addresses">
                  <svg-icon v-slot="icon" name="home-gray" width="22" height="22"/>
                  <span>Мои адреса</span>
                </NuxtLink>
                <li class="user-buttons__dropdown-item user-buttons__dropdown-item--alert" @click="toggleAuthorize()">
                  <svg-icon v-slot="icon" name="exit-red" width="22" height="22"/>
                  <span>Выйти</span>
                </li>
              </ul>
            </div>
          </div>
          <Btn v-else class="btn btn--dark btn--rounded" @click.native="$modal.show('authModal')">
            <svg-icon slot="icon" name="user-icon-gradient" width="25" height="24"/>
            <span slot="text">Войти / Регистрация</span>
          </Btn>
        </div>
      </header>
      
      <!--	Карта для отрисовки маршрута	-->
      <div class="app-map app__map">
        <client-only>
          <l-map :zoom=zoom :center="[center.lat,center.lng]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker v-for="item in waypoints" :key="item.lat" :lat-lng="[item.lat,item.lng]"></l-marker>
          </l-map>
        </client-only>
      </div>
  
      <!--	Информация о маршруте	-->
      <div v-if="routeLength && tripDuration" class="order-info-card">
        <div class="order-info-card__item">
          <span class="order-info-card__prop">Длина маршрута — </span>
          <span class="order-info-card__value">{{ routeLength }}</span>
        </div>
        <div class="order-info-card__item">
          <span class="order-info-card__prop">Время в пути без пробок ≈ </span>
          <span class="order-info-card__value">{{ tripDuration }}</span>
        </div>
      </div>
      
      <!--	Баннер мобильного приложения	-->
      <MobAppBanner class="app__banner"/>
  
      <!--	Полноэкранное меню по приложению	-->
      <transition name="fadeToRight">
        <SiteMenu/>
      </transition>
      
      <!--	Тёмный фон для выделения меню	-->
      <div class="app__back" :class="{'app__back--active': modalBackShown}"></div>
    </div>
  </div>
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  import draggable from "vuedraggable";
  import DatePicker from 'vue2-datepicker';
  
  export default {
    layout: 'app',
    components: {
      draggable,
      DatePicker,
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      // Данные заказа
      orderData: {
        orderType: "transfer", // transfer or taxi
        points: [
          {
            name: '',
            coords: [44.609662, 33.521640],
          },
          {
            name: '',
            coords: [44.948335, 34.095123],
          },
        ],
        city: '',
        date: '',
        phone: '',
        childSeat: false,
        baggage: false,
        bigBaggage: false,
        withPet: false,
        signMeeting: false,
        signMeetingText: '',
        otherPassengerPhone: '',
        message: '',
      },
      
      settingsShown: false,
      modalBackShown: false,
      menuOpened: false,
      
      // Перемещение точек маршрута
      dragging: false,
      
      // Настройки карты
      zoom: 9,
      center: {lat: 44.607231, lng: 33.526968},
      waypoints: [
        {lat: 44.607231, lng: 33.526968},
        {lat: 45.036015, lng: 33.982251},
      ]
    }),
    computed: {
      userData() {
        return this.$store.state.user.userData
      },
      routeLength() {
        return '48 км'
      },
      tripDuration() {
        return '51 мин'
      },
    },
    methods: {
  
      // Показать/скрыть дополнительные опции заказа
      switchOrderSettings: function () {
        this.settingsShown = (this.settingsShown !== true);
        this.modalBackShown = (this.modalBackShown !== true);
      },
      
      toggleAuthorize: function () {
        this.$store.commit('user/TOGGLE_AUTHORIZED');
        this.$notify({
          title: 'Выход пользователя',
          text: 'Вы вышли из личного кабинета',
          type: 'alert',
          duration: 2000,
          speed: 500,
        });
      },
      
      // Заглушка для обработчика формы заказа
      onOrderSubmit() {
        this.$refs.orderFormValidator.validate().then(success => {
          if (!success) {
            return;
          }
  
          this.$modal.show('driverSearchingModal');
          
          // Сброс значений формы к дефолтным
          this.orderData = {
            orderType: "transfer",
            points: [
              {
                name: '',
                coords: [],
              },
              {
                name: '',
                coords: [],
              },
            ],
            city: '',
            date: '',
            phone: '',
            childSeat: false,
            baggage: false,
            bigBaggage: false,
            withPet: false,
            signMeeting: false,
            signMeetingText: '',
            otherPassengerPhone: '',
            message: '',
          };
          // Обнуление формы
          this.$nextTick(() => {
            this.$refs.orderFormValidator.reset();
          });
        });
      },
    },
  }
</script>

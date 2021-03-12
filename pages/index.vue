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
            <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8C13.7956 8 14.5587 8.31607 15.1213 8.87868C15.6839 9.44129 16 10.2044 16 11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12C17.2652 12 17.5196 11.8946 17.7071 11.7071C17.8946 11.5196 18 11.2652 18 11C18 9.67392 17.4732 8.40215 16.5355 7.46447C15.5979 6.52678 14.3261 6 13 6C12.7348 6 12.4804 6.10536 12.2929 6.29289C12.1054 6.48043 12 6.73478 12 7C12 7.26522 12.1054 7.51957 12.2929 7.70711C12.4804 7.89464 12.7348 8 13 8Z" fill="#DD8D46"/>
              <path d="M13 4C14.8565 4 16.637 4.7375 17.9497 6.05025C19.2625 7.36301 20 9.14348 20 11C20 11.2652 20.1054 11.5196 20.2929 11.7071C20.4804 11.8946 20.7348 12 21 12C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 8.61305 21.0518 6.32387 19.364 4.63604C17.6761 2.94821 15.3869 2 13 2C12.7348 2 12.4804 2.10536 12.2929 2.29289C12.1054 2.48043 12 2.73478 12 3C12 3.26522 12.1054 3.51957 12.2929 3.70711C12.4804 3.89464 12.7348 4 13 4ZM21.75 15.91C21.695 15.7495 21.6 15.6056 21.4741 15.4919C21.3481 15.3781 21.1953 15.2984 21.03 15.26L15.03 13.89C14.8671 13.8531 14.6976 13.8575 14.5369 13.9029C14.3762 13.9484 14.2294 14.0333 14.11 14.15C13.97 14.28 13.96 14.29 13.31 15.53C11.1532 14.5362 9.42499 12.8009 8.44 10.64C9.71 10 9.72 10 9.85 9.85C9.96671 9.73056 10.0516 9.58379 10.0971 9.42308C10.1425 9.26238 10.1469 9.09286 10.11 8.93L8.74 3C8.70165 2.8347 8.62186 2.68187 8.50814 2.55591C8.39443 2.42995 8.25053 2.335 8.09 2.28C7.85647 2.19659 7.61531 2.1363 7.37 2.1C7.11725 2.0414 6.85933 2.0079 6.6 2C5.38 2 4.20998 2.48464 3.34731 3.34731C2.48464 4.20998 2 5.38 2 6.6C2.00529 10.6827 3.62949 14.5967 6.5164 17.4836C9.40331 20.3705 13.3173 21.9947 17.4 22C18.0041 22 18.6022 21.881 19.1603 21.6498C19.7184 21.4187 20.2255 21.0798 20.6527 20.6527C21.0798 20.2255 21.4187 19.7184 21.6498 19.1603C21.881 18.6022 22 18.0041 22 17.4C22.0003 17.1455 21.9802 16.8913 21.94 16.64C21.898 16.3916 21.8344 16.1474 21.75 15.91ZM17.4 20C13.8469 19.9974 10.4401 18.5847 7.92769 16.0723C5.41528 13.5599 4.00265 10.1531 4 6.6C4.00263 5.91125 4.27741 5.25146 4.76443 4.76443C5.25146 4.27741 5.91125 4.00263 6.6 4H6.93L8 8.64L7.46 8.92C6.6 9.37 5.92 9.73 6.28 10.51C6.86622 12.1696 7.81477 13.6777 9.05674 14.9249C10.2987 16.172 11.8029 17.1269 13.46 17.72C14.3 18.06 14.63 17.43 15.08 16.56L15.37 16.01L20 17.07V17.4C19.9974 18.0888 19.7226 18.7485 19.2356 19.2356C18.7485 19.7226 18.0888 19.9974 17.4 20Z" fill="white"/>
              <path d="M17.9497 6.05025C16.637 4.7375 14.8565 4 13 4C12.7348 4 12.4804 3.89464 12.2929 3.70711C12.1054 3.51957 12 3.26522 12 3C12 2.73478 12.1054 2.48043 12.2929 2.29289C12.4804 2.10536 12.7348 2 13 2C15.3869 2 17.6761 2.94821 19.364 4.63604C21.0518 6.32387 22 8.61305 22 11C22 11.2652 21.8946 11.5196 21.7071 11.7071C21.5196 11.8946 21.2652 12 21 12C20.7348 12 20.4804 11.8946 20.2929 11.7071C20.1054 11.5196 20 11.2652 20 11C20 9.14348 19.2625 7.36301 17.9497 6.05025Z" fill="#DD8D46"/>
            </svg>
            <span slot="text">+ 7 978 282 82 82</span>
          </Btn>
          
          <div v-if="userData.authorized" class="user-buttons__dropdown">
            <Btn class="btn btn--dark btn--rounded user-buttons__dropdown-handler">
              <svg slot="icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12.1202" cy="6.5" rx="4" ry="4.5" stroke="white" stroke-width="1.8"/>
                <path d="M20.1202 19C20.1202 22.5 16.1202 21.5 12.1202 21.5C8.12024 21.5 4.12024 22.5 4.12024 19C4.12024 17 7.70196 14.5 12.1202 14.5C16.5385 14.5 20.1202 17 20.1202 19Z" stroke="#DD8D46" stroke-width="1.8"/>
              </svg>
              <span slot="text">Личный кабинет</span>
            </Btn>
            <div class="user-buttons__dropdown-content">
              <ul class="user-buttons__dropdown-list">
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/orders">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3.46512V8.58139M3 19.7442V16.0233V19.7442ZM3 16.0233V4.86046C3 4.36704 3.1873 3.89382 3.5207 3.54492C3.8541 3.19601 4.30628 3 4.77778 3H10.5556L11.4444 3.93023H19L16.3333 9.51163L19 15.093H11.4444L10.5556 14.1628H4.77778C4.30628 14.1628 3.8541 14.3588 3.5207 14.7077C3.1873 15.0566 3 15.5298 3 16.0233V16.0233Z" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Мои заказы</span>
                </NuxtLink>
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/settings">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.08281 3.4113C9.49365 1.3054 12.5066 1.3054 12.9175 3.4113C13.1675 4.69277 14.58 5.37302 15.7378 4.7695C17.6404 3.7777 19.519 6.13334 18.1287 7.76755C17.2826 8.76199 17.6315 10.2905 18.8252 10.8194C20.7869 11.6885 20.1164 14.626 17.9719 14.5579C16.667 14.5165 15.6894 15.7422 16.0202 17.0053C16.5638 19.0809 13.8492 20.3882 12.5653 18.6691C11.784 17.623 10.2162 17.623 9.43498 18.6691C8.15111 20.3882 5.43651 19.0809 5.98008 17.0053C6.31084 15.7422 5.33333 14.5165 4.02836 14.5579C1.88384 14.626 1.21338 11.6885 3.17506 10.8194C4.36877 10.2905 4.71765 8.76199 3.87163 7.76755C2.48132 6.13334 4.35988 3.7777 6.26249 4.7695C7.42026 5.37302 8.83281 4.69277 9.08281 3.4113Z" stroke="#DADADA" stroke-width="1.8"/>
                    <path d="M13.7501 11C13.7501 12.5188 12.5189 13.75 11.0001 13.75C9.48136 13.75 8.25014 12.5188 8.25014 11C8.25014 9.48122 9.48136 8.25 11.0001 8.25C12.5189 8.25 13.7501 9.48122 13.7501 11Z" stroke="#DADADA" stroke-width="1.8"/>
                  </svg>
                  <span>Настройки</span>
                </NuxtLink>
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/support">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0932 9.71094C19.9619 10.5979 19.6585 11.4415 19.2113 12.2187C19.2481 12.4217 19.2669 12.627 19.2669 12.8334C19.2669 13.5268 19.066 14.1902 18.6941 14.7927C18.5154 15.0822 18.4668 15.4196 18.4476 15.6459C18.4257 15.9033 18.4309 16.1847 18.4479 16.4556C18.469 16.7911 18.5106 17.1462 18.5583 17.4782C18.1797 17.3674 17.7655 17.2554 17.3732 17.1684C17.0739 17.102 16.7684 17.046 16.4914 17.0187C16.2485 16.9947 15.9012 16.9776 15.5894 17.0784C14.8846 17.3063 14.1091 17.4334 13.2919 17.4334C12.3058 17.4334 11.4008 17.2556 10.6096 16.9473C10.4354 16.9547 10.26 16.9584 10.0836 16.9584C8.99005 16.9584 7.93719 16.8159 6.95117 16.5525C8.39453 18.2093 10.7637 19.2334 13.2919 19.2334C14.2837 19.2334 15.2354 19.081 16.1123 18.801C16.1138 18.8011 16.1164 18.801 16.1203 18.8009C16.1417 18.8004 16.2019 18.7989 16.3148 18.81C16.4916 18.8274 16.7194 18.8672 16.9836 18.9257C17.5098 19.0424 18.1051 19.2166 18.5829 19.367C19.6069 19.6893 20.6047 18.7981 20.4244 17.7541C20.3484 17.3137 20.2726 16.7915 20.2443 16.3427C20.2302 16.117 20.2296 15.9331 20.2411 15.7986C20.2458 15.7432 20.2516 15.7084 20.2553 15.6899C20.7705 14.8374 21.0669 13.8667 21.0669 12.8334C21.0669 11.6763 20.7094 10.6187 20.0932 9.71094Z" fill="#DADADA"/>
                    <path d="M17.8752 8.70833C17.8752 11.999 14.3867 14.6667 10.0835 14.6667C8.93976 14.6667 7.85358 14.4782 6.87516 14.1397C6.26192 13.9275 4.19329 14.6537 2.90416 15.152C2.49567 15.3099 2.0729 14.9067 2.20883 14.4904C2.60302 13.2831 3.13424 11.4497 2.88898 11C2.50427 10.2945 2.29182 9.52041 2.29182 8.70833C2.29182 5.41764 5.78027 2.75 10.0835 2.75C14.3867 2.75 17.8752 5.41764 17.8752 8.70833Z" stroke="#DADADA" stroke-width="1.8"/>
                  </svg>
                  <span>Нужна помощь ?</span>
                </NuxtLink>
                <NuxtLink class="user-buttons__dropdown-item" tag="li" to="/addresses">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7426 3.73558C11.2563 3.6039 10.7436 3.6039 10.2573 3.73558C9.74517 3.87424 9.25308 4.23716 7.90467 5.28593L5.52133 7.13963C4.65327 7.81479 4.34818 8.06116 4.13195 8.35351C3.92641 8.6314 3.7733 8.94447 3.68013 9.27733C3.58212 9.62749 3.57495 10.0196 3.57495 11.1193V17.1875C3.57495 17.8871 3.5839 18.0541 3.61837 18.1677C3.71612 18.49 3.96831 18.7421 4.29058 18.8399C4.40419 18.8744 4.57113 18.8833 5.27078 18.8833H5.8437C5.95989 18.8833 5.98813 18.8831 6.00776 18.8821C6.52574 18.8567 6.93995 18.4425 6.9654 17.9245C6.96636 17.9048 6.96662 17.8766 6.96662 17.7604V15.125C6.96662 12.8974 8.7724 11.0917 10.9999 11.0917C13.2275 11.0917 15.0333 12.8974 15.0333 15.125V17.7604C15.0333 17.8766 15.0335 17.9048 15.0345 17.9245C15.0599 18.4425 15.4742 18.8567 15.9921 18.8821C16.0118 18.8831 16.04 18.8833 16.1562 18.8833H16.7291C17.4288 18.8833 17.5957 18.8744 17.7093 18.8399C18.0316 18.7421 18.2838 18.49 18.3815 18.1677C18.416 18.0541 18.4249 17.8871 18.4249 17.1875V11.1193C18.4249 10.0196 18.4178 9.62749 18.3198 9.27733C18.2266 8.94447 18.0735 8.6314 17.8679 8.35351C17.6517 8.06116 17.3466 7.81479 16.4786 7.13963L14.0952 5.28593C12.7468 4.23716 12.2547 3.87424 11.7426 3.73558ZM9.82607 2.14292C10.5948 1.93478 11.4051 1.93478 12.1738 2.14292C13.0477 2.37953 13.8163 2.97783 14.9627 3.87021C15.0105 3.90746 15.059 3.94523 15.1082 3.9835L17.4916 5.8372C17.5223 5.86109 17.5526 5.88465 17.5825 5.9079C18.3263 6.4861 18.8267 6.87508 19.1945 7.37234C19.5194 7.8116 19.7614 8.30644 19.9087 8.83257C20.0754 9.42816 20.0752 10.062 20.075 11.0041C20.075 11.042 20.0749 11.0804 20.0749 11.1193V17.1875C20.0749 17.2246 20.075 17.2614 20.075 17.2976C20.0756 17.8274 20.076 18.2659 19.9605 18.6467C19.7028 19.4963 19.0379 20.1611 18.1883 20.4189C17.8075 20.5344 17.3691 20.5339 16.8393 20.5334C16.803 20.5334 16.7663 20.5333 16.7291 20.5333L16.1379 20.5333C16.0496 20.5333 15.977 20.5334 15.9112 20.5301C14.5456 20.463 13.4536 19.371 13.3865 18.0054C13.3833 17.9397 13.3833 17.867 13.3833 17.7788L13.3833 15.125C13.3833 13.8087 12.3162 12.7417 10.9999 12.7417C9.68367 12.7417 8.61662 13.8087 8.61662 15.125L8.61662 17.7788C8.61663 17.867 8.61664 17.9397 8.61341 18.0054C8.54633 19.371 7.45432 20.463 6.08872 20.5301C6.02294 20.5334 5.95027 20.5333 5.86203 20.5333L5.27078 20.5333C5.23363 20.5333 5.19691 20.5334 5.16062 20.5334C4.63084 20.5339 4.19239 20.5344 3.81161 20.4189C2.962 20.1611 2.29714 19.4963 2.03942 18.6467C1.92391 18.2659 1.92434 17.8274 1.92488 17.2976C1.92491 17.2614 1.92495 17.2246 1.92495 17.1875V11.1193C1.92495 11.0804 1.92494 11.042 1.92493 11.0041C1.92466 10.062 1.92449 9.42816 2.0912 8.83257C2.23847 8.30644 2.48049 7.8116 2.80538 7.37234C3.17316 6.87508 3.67357 6.4861 4.41739 5.9079C4.44731 5.88465 4.47762 5.86109 4.50833 5.8372L6.89166 3.9835C6.94087 3.94523 6.98938 3.90746 7.03723 3.87021C8.18361 2.97783 8.95222 2.37953 9.82607 2.14292Z" fill="#DADADA"/>
                  </svg>
                  <span>Мои адреса</span>
                </NuxtLink>
                <li class="user-buttons__dropdown-item user-buttons__dropdown-item--alert" @click="toggleAuthorize()">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11C3 11.2652 3.10536 11.5196 3.29289 11.7071C3.48043 11.8946 3.73478 12 4 12H11.59L9.29 14.29C9.19627 14.383 9.12188 14.4936 9.07111 14.6154C9.02034 14.7373 8.9942 14.868 8.9942 15C8.9942 15.132 9.02034 15.2627 9.07111 15.3846C9.12188 15.5064 9.19627 15.617 9.29 15.71C9.38296 15.8037 9.49356 15.8781 9.61542 15.9289C9.73728 15.9797 9.86799 16.0058 10 16.0058C10.132 16.0058 10.2627 15.9797 10.3846 15.9289C10.5064 15.8781 10.617 15.8037 10.71 15.71L14.71 11.71C14.801 11.6149 14.8724 11.5028 14.92 11.38C15.02 11.1365 15.02 10.8635 14.92 10.62C14.8724 10.4972 14.801 10.3851 14.71 10.29L10.71 6.29C10.6168 6.19676 10.5061 6.1228 10.3842 6.07234C10.2624 6.02188 10.1319 5.99591 10 5.99591C9.86814 5.99591 9.73757 6.02188 9.61575 6.07234C9.49393 6.1228 9.38324 6.19676 9.29 6.29C9.19676 6.38324 9.1228 6.49393 9.07234 6.61575C9.02188 6.73757 8.99591 6.86814 8.99591 7C8.99591 7.13186 9.02188 7.26243 9.07234 7.38425C9.1228 7.50607 9.19676 7.61676 9.29 7.71L11.59 10H4C3.73478 10 3.48043 10.1054 3.29289 10.2929C3.10536 10.4804 3 10.7348 3 11V11ZM16 1H6C5.20435 1 4.44129 1.31607 3.87868 1.87868C3.31607 2.44129 3 3.20435 3 4V7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8C4.26522 8 4.51957 7.89464 4.70711 7.70711C4.89464 7.51957 5 7.26522 5 7V4C5 3.73478 5.10536 3.48043 5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V15C5 14.7348 4.89464 14.4804 4.70711 14.2929C4.51957 14.1054 4.26522 14 4 14C3.73478 14 3.48043 14.1054 3.29289 14.2929C3.10536 14.4804 3 14.7348 3 15V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H16C16.7956 21 17.5587 20.6839 18.1213 20.1213C18.6839 19.5587 19 18.7956 19 18V4C19 3.20435 18.6839 2.44129 18.1213 1.87868C17.5587 1.31607 16.7956 1 16 1Z" fill="#DD4646"/>
                  </svg>
                  <span>Выйти</span>
                </li>
              </ul>
            </div>
          </div>
          <Btn v-else class="btn btn--dark btn--rounded" @click.native="$modal.show('authModal')">
            <svg slot="icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12.1202" cy="6.5" rx="4" ry="4.5" stroke="white" stroke-width="1.8"/>
              <path d="M20.1202 19C20.1202 22.5 16.1202 21.5 12.1202 21.5C8.12024 21.5 4.12024 22.5 4.12024 19C4.12024 17 7.70196 14.5 12.1202 14.5C16.5385 14.5 20.1202 17 20.1202 19Z" stroke="#DD8D46" stroke-width="1.8"/>
            </svg>
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
      
      <div class="order-info-card"></div>
      <!--	Баннер мобильного приложения	-->
      <MobAppBanner class="app__banner"/>
      
      <transition name="fadeToRight">
        <!--	Полноэкранное меню по приложению	-->
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
  import VueScrollbar from 'vue2-scrollbar';
  import {mapMutations} from 'vuex'
  
  export default {
    layout: 'app',
    components: {
      draggable,
      DatePicker,
      ValidationProvider,
      ValidationObserver,
      VueScrollbar
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
      center: {lat: 45.2500, lng: 34.506},
      waypoints: [
        {lat: 44.607231, lng: 33.526968},
        {lat: 45.036015, lng: 33.982251},
      ]
    }),
    computed: {
      userData () {
        return this.$store.state.user.userData
      }
    },
    methods: {
  
      // Показать/скрыть дополнительные опции заказа
      switchOrderSettings: function () {
        this.settingsShown = (this.settingsShown !== true);
        this.modalBackShown = (this.modalBackShown !== true);
      },
      
      // Заглушка для обработчика форм заказа
      onOrderSubmit() {
        this.$refs.orderFormValidator.validate().then(success => {
          if (!success) {
            return;
          }
          
          alert('Форма отправлена (тестовый режим)');
          
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
          this.$nextTick(() => {
            this.$refs.orderFormValidator.reset();
          });
        });
      },
      
      ...mapMutations({
        toggleAuthorize: 'user/toggleAuthorize'
      })
    },
  }
</script>

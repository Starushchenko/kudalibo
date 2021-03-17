<template>
  <div>
    <fieldset class="form__set">
      <slot name="citySelect"></slot>
    
      <draggable :list="orderData.points" class="form__points js_points-drag" handle=".js_point-drag">
        <ValidationProvider :key="index" v-for="(point, index) in orderData.points" v-slot="{ errors }" :rules="{'required': index <= 1}" slim>
          <div class="form__group form__group--place-g form__point-field" :class="{'form__group--invalid': errors.length > 0}">
            <label :for="'point' + (index + 1)">
              <span>Точка маршрута</span>
            </label>
            <input aria-label="Адрес" type="text" :name="'point' + (index + 1)" :id="'point' + (index + 1)" :data-coords="point.coords" v-model="point.name" placeholder="Введите адрес">
            <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
            <div class="form__point-btns">
              <button class="form__drag-btn js_point-drag" type="button" title="Зажмите и перетаскивайте">
                Зажмите и перетаскивайте
              </button>
              <button class="form__delete-btn js_point-delete" type="button" title="Удалить точку маршрута" @click="removePoint(index)">
                Удалить точку маршрута
              </button>
            </div>
          </div>
        </ValidationProvider>
      </draggable>
    
      <Btn class="btn btn--white form__btn" type="button" @click.native="addPoint">
        <svg slot="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2.25V9M9 15.75V9M9 9H15.75M9 9H2.25" stroke="#F2994A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span slot="text">Добавить адрес</span>
      </Btn>
    </fieldset>
  
    <fieldset class="form__set">
      <ValidationProvider v-slot="{ errors }" rules="required|isAfterNow" slim>
        <div class="form__group form__group--date" :class="{'form__group--invalid': errors.length > 0}">
          <label for="order-date">Дата / время поездки</label>
          <date-picker :append-to-body="false" :default-value="new Date()" title-format="DD.MM.YYYY" :clearable="false" :confirm="true" confirm-text="Подтвердить" :disabled-date="disabledBeforeTodayAndAfterAWeek" :minute-step="5" format="DD.MM.YYYY HH:mm" v-model="orderData.date" name="order-date" id="order-date" type="datetime" placeholder="Выберите дату и время поездки"></date-picker>
          <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="required|phoneLength" mode="eager" slim>
        <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
          <label for="order-tel">Номер телефона</label>
          <input type="text" name="order-tel" id="order-tel" v-model="orderData.phone" v-mask="'+7 ### ### ## ##'" placeholder="+7 989 721 64 27">
          <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
    
      <Btn class="btn btn--white form__btn" type="button" @click.native="switchSettings">
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
  
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  import draggable from "vuedraggable";
  import DatePicker from 'vue2-datepicker';
  
  export default {
    props: ['orderData', 'settingsShown', 'modalBackShown', 'refs'],
    components: {
      draggable,
      DatePicker,
      ValidationProvider,
      ValidationObserver,
    },
    methods: {
  
      switchSettings: function () {
        this.$emit('switchSettings');
      },
      
      // Отключение datepicker'а для прошедших дат и для дат больше 10 дней
      disabledBeforeTodayAndAfterAWeek(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
    
        return date < today || date > new Date(today.getTime() + 10 * 24 * 3600 * 1000);
      },
  
      // Добавить точку к маршруту
      addPoint: function () {
        this.orderData.points.push({
          name: '',
          coords: [],
        });
    
        (this.orderData.points.length > 2) ? this.refs.orderForm.classList.add('points-draggable') : this.refs.orderForm.classList.remove('points-draggable');
      },
  
      // Удалить точку из маршрута
      removePoint(index) {
        this.orderData.points.splice(index, 1);
      },
    },
  }
</script>


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
        <svg-icon slot="icon" name="plus-icon-accent" width="18" height="18"/>
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
        <svg-icon slot="icon" name="settings-icon-accent" width="24" height="24"/>
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


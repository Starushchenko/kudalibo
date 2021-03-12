<template>
  <modal name="restorePassModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('restorePassModal')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <h2 class="modal__title">Восстановление пароля</h2>
      <p class="modal__text">Код восстановления отправлен в смс на номер
        <nobr>+7 978 ***-**-00</nobr>
        . Введите код в поле ниже
      </p>
      
      <form action="" class="form">
        <fieldset class="form__set">
          <div class="form__group">
            <label for="restoreCode">Код</label>
            <input type="text" name="restoreCode" id="restoreCode" placeholder="_ _ _   _ _ _" v-mask="'### ###'"  v-model="userData.restoreCode">
          </div>
          
          <Btn class="btn form__btn" type="button" @click.native="">
            <span slot="text">Восстановить пароль</span>
          </Btn>
        </fieldset>
      </form>
      
      <p class="modal__text modal__text--centered">
        Код не пришёл ? <a href="javascript:void(0);" @click.prevent="$emit('restoreAgain')">Отправить повторно</a>
      </p>
    </div>
  </modal>
</template>

<script>
  export default {
    props: ['showModal', 'showNewModal', 'userData'],
  }
</script>

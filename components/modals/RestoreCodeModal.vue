<template>
  <modal name="restoreCodeModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('restoreCodeModal')">
        <svg-icon name="close-dark" width="24" height="24"/>
      </button>
      
      <h2 class="modal__title">Восстановление пароля</h2>
      <p class="modal__text">Код восстановления отправлен в смс на номер
        <nobr>{{ userData.tel }}</nobr>
        . Введите код в поле ниже
      </p>
  
      <ValidationObserver ref="restoreChecker" slim>
        <form @submit.prevent="onRestoreCodeSubmit" ref="restorePassForm" action="" class="form">
          <fieldset class="form__set">
  
            <ValidationProvider v-slot="{ errors }" rules="required|verificationCode" mode="eager" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="restoreCode">Код</label>
                <input type="text" name="restoreCode" id="restoreCode" v-model="restoreCode" placeholder="_ _ _   _ _ _" v-mask="'### ###'">
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            
            <Btn class="btn form__btn" type="submit">
              <span slot="text">Восстановить пароль</span>
            </Btn>
          </fieldset>
        </form>
      </ValidationObserver>
      
      <p class="modal__text modal__text--centered">
        Код не пришёл ? <a href="javascript:void(0);" @click.prevent="$emit('restoreAgain')">Отправить повторно</a>
      </p>
    </div>
  </modal>
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  
  export default {
    props: ['restoreAgain'],
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    computed: {
      userData () {
        return this.$store.state.user.userData
      },
      restoreCode: {
        get () {
          return this.$store.state.user.userData.restoreCode
        },
        set (value) {
          this.$store.commit('user/SET_RESTORE_CODE', value)
        }
      },
    },
    methods: {
      // Заглушка для обработчика формы восстановления пароля
      onRestoreCodeSubmit() {
        this.$refs.restoreChecker.validate().then(success => {
          if (!success) {
            return;
          }
  
          this.$modal.hide('restoreCodeModal');
          this.$modal.show('newPassModal');
        });
      },
    }
  }
</script>

<template>
  <modal name="newPassModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('newPassModal')">
        <svg-icon name="close-dark" width="24" height="24"/>
      </button>
      
      <h2 class="modal__title">Восстановление пароля</h2>
      <p class="modal__text">Введите новый пароль для аккаунта <nobr>{{ userData.tel }}</nobr></p>
  
      <ValidationObserver ref="restoreChecker" slim>
        <form @submit.prevent="onNewPassSubmit" ref="restorePassForm" action="" class="form">
          <fieldset class="form__set">
  
            <ValidationProvider v-slot="{ errors }" rules="required" vid="newPassInput" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="new-pass">Пароль</label>
                <input ref="newPassInput" type="password" name="new-pass" id="new-pass" placeholder="*****************" v-model="changePassword">
                <button type="button" class="form__pass-visibility-toggler" @click="$emit('showPassword', $refs.newPassInput)"></button>
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
  
            <ValidationProvider v-slot="{ errors }" rules="required|confirmed:newPassInput" mode="eager" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="new-pass-conf">Повторите пароль</label>
                <input ref="newPassInput2" type="password" v-model="confirmPass" name="new-pass-conf" id="new-pass-conf" placeholder="*****************">
                <button type="button" class="form__pass-visibility-toggler" @click="$emit('showPassword', $refs.newPassInput2)"></button>
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
        
            <Btn class="btn form__btn" type="submit">
              <span slot="text">Изменить пароль</span>
            </Btn>
          </fieldset>
        </form>
      </ValidationObserver>
    </div>
  </modal>
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      confirmPass: ''
    }),
    computed: {
      userData () {
        return this.$store.state.user.userData
      },
      changePassword: {
        get () {
          return this.$store.state.user.userData.password
        },
        set (value) {
          this.$store.commit('user/SET_USER_PASS', value)
        }
      },
    },
    methods: {
      // Заглушка для обработчика формы восстановления пароля
      onNewPassSubmit() {
        this.$refs.restoreChecker.validate().then(success => {
          if (!success) {
            return;
          }
        
          this.$modal.hide('newPassModal');
          this.$modal.show('passwordChangedModal');
        });
      },
    }
  }
</script>

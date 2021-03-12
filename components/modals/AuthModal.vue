<template>
  <modal name="authModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('authModal')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <h2 class="modal__title">Войти в личный кабинет</h2>
      
      <ValidationObserver ref="authChecker" slim>
        <form @submit.prevent="onAuthSubmit" action="" class="form">
          <fieldset class="form__set">
            <ValidationProvider v-slot="{ errors }" rules="required" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="auth-login">Логин</label>
                <input type="text" name="auth-login" id="auth-login" placeholder="Введите ваш телефон или email" v-model="userData.email">
                <span class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            
            <ValidationProvider v-slot="{ errors }" rules="required" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="auth-pass">Пароль</label>
                <input :type="passwordType" name="auth-pass" id="auth-pass" placeholder="*****************" v-model="userData.password">
                <button type="button" class="form__pass-visibility-toggler" :class="{'active': userData.showPassword}" @click="userData.showPassword = !userData.showPassword"></button>
                <span class="form__group-error">{{ errors[0] }}</span>
              
              </div>
            </ValidationProvider>
            
            <Btn class="btn form__btn" type="submit">
              <span slot="text">Войти</span>
            </Btn>
          </fieldset>
        </form>
      </ValidationObserver>
      
      <p class="modal__text modal__text--centered">
        Забыли пароль ? <a @click.prevent="$modal.hide('authModal'); $emit('showModal', 'restorePassModal')">Восстановить</a>
      </p>
      
      <SocialAuth/>
      
      <Btn class="btn btn--alt form__btn" type="button" @click.native="">
        <span slot="text">Зарегистрироваться</span>
      </Btn>
    </div>
  </modal>
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  import {mapMutations} from 'vuex'
  
  export default {
    props: ['hideModal', 'showModal', 'userData'],
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    computed: {
      passwordType: function () {
        return (this.userData.showPassword) ? 'text' : 'password'
      }
    },
    methods: {
      onAuthSubmit: function () {
        this.$refs.authChecker.validate().then(success => {
          if (!success) {
            return;
          }
          
          this.$notify({
            title: 'Авторизация',
            text: 'Авторизация сэмулирована успешно',
            type: 'success',
            duration: 3000,
            speed: 500,
          });
  
          this.toggleAuthorize();
          
          this.$modal.hide('authModal');
        });
      },
      ...mapMutations({
        toggleAuthorize: 'user/toggleAuthorize'
      })
    }
  }
</script>

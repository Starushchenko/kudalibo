<template>
  <modal name="authModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('authModal')">
        <svg-icon name="close-dark" width="24" height="24"/>
      </button>
      
      <h2 class="modal__title">Войти в личный кабинет</h2>
      
      <ValidationObserver ref="authChecker" slim>
        <form @submit.prevent="onAuthSubmit" action="" class="form">
          <fieldset class="form__set">
            <ValidationProvider v-slot="{ errors }" rules="required|phoneLength" mode="eager" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="auth-tel">Телефон</label>
                <input type="text" name="auth-tel" id="auth-tel" placeholder="Введите ваш телефон" v-mask="'+7 ### ### ## ##'" v-model="changeTel">
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            
            <ValidationProvider v-slot="{ errors }" rules="required" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="auth-pass">Пароль</label>
                <input ref="authPassInput" type="password" name="auth-pass" id="auth-pass" placeholder="*****************" v-model="changePassword">
                <button type="button" class="form__pass-visibility-toggler" @click="$emit('showPassword', $refs.authPassInput)"></button>
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            
            <Btn class="btn form__btn" type="submit">
              <span slot="text">Войти</span>
            </Btn>
          </fieldset>
        </form>
      </ValidationObserver>
      
      <p class="modal__text modal__text--centered">
        Забыли пароль ? <a @click.prevent="$modal.hide('authModal'); $modal.show('restorePassModal')">Восстановить</a>
      </p>
      
      <SocialAuth/>
      
      <Btn class="btn btn--alt form__btn" type="button" @click.native="$modal.hide('authModal'); $modal.show('signUpModal')">
        <span slot="text">Зарегистрироваться</span>
      </Btn>
    </div>
  </modal>
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  
  export default {
    props: ['showPassword'],
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    computed: {
      changeTel: {
        get () {
          return this.$store.state.user.userData.tel
        },
        set (value) {
          this.$store.commit('user/SET_USER_TEL', value)
        }
      },
      changePassword: {
        get () {
          return this.$store.state.user.userData.password
        },
        set (value) {
          this.$store.commit('user/SET_USER_PASS', value)
        }
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
            duration: 2000,
            speed: 500,
          });
  
          this.$store.commit('user/TOGGLE_AUTHORIZED');
          this.$modal.hide('authModal');
        });
      },
    }
  }
</script>

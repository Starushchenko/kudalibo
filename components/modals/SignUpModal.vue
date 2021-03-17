<template>
  <modal name="signUpModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('signUpModal')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <h2 class="modal__title">Регистрация</h2>
      
      <ValidationObserver ref="signUpChecker" slim>
        <form @submit.prevent="onSignUpSubmit" action="" class="form">
          <fieldset class="form__set">
            <ValidationProvider v-slot="{ errors }" rules="required|phoneLength" mode="eager" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="auth-tel">Телефон</label>
                <input type="text" name="auth-tel" id="auth-tel" placeholder="Введите ваш телефон" v-mask="'+7 ### ### ## ##'" v-model="changeTel">
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
  
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
  
            <ValidationProvider v-slot="{ errors }" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="new-pass-conf">Как к вам обращаться ? (необязательно)</label>
                <input type="text" v-model="changeName" name="user-name" id="user-name" placeholder="Иван Иванов">
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
  
            <ValidationProvider v-slot="{ errors }" rules="truthy" slim>
              <div class="form__group" :class="{'form__group--invalid form__group--check-invalid': errors.length > 0}">
                <input type="checkbox" v-model="rulesAgree" id="signUpRules" name="signUpRules">
                <label for="signUpRules">Согласен с <NuxtLink to="/confidential" target="_blank"> правилами</NuxtLink></label>
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            
            <Btn class="btn form__btn" type="submit">
              <span slot="text">Зарегистрироваться</span>
            </Btn>
          </fieldset>
        </form>
      </ValidationObserver>
      
      <p class="modal__text modal__text--centered">
        Уже зарегистрированы ? <a @click.prevent="$modal.hide('signUpModal'); $modal.show('authModal')">Войти</a>
      </p>
      
      <SocialAuth/>
    </div>
  </modal>
</template>

<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  import {mapMutations} from 'vuex'
  
  export default {
    props: ['showPassword'],
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      rulesAgree: true,
      confirmPass: ''
    }),
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
      },
      changeName: {
        get () {
          return this.$store.state.user.userData.name
        },
        set (value) {
          this.$store.commit('user/SET_USER_NAME', value)
        }
      }
    },
    methods: {
      onSignUpSubmit: function () {
        this.$refs.signUpChecker.validate().then(success => {
          if (!success) {
            return;
          }
          
          this.$notify({
            title: 'Регистрация',
            text: 'Вы успешно зарегистрировались и вошли с номером ' + this.$store.state.user.userData.tel,
            type: 'success',
            duration: 2000,
            speed: 500,
          });
  
          this.$store.commit('user/TOGGLE_AUTHORIZED');
          this.$modal.hide('signUpModal');
        });
      },
    }
  }
</script>

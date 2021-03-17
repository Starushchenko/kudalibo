<template>
  <modal name="restorePassModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('restorePassModal')">
        <svg-icon name="close-dark" width="24" height="24"/>
      </button>
      
      <h2 class="modal__title">Восстановление пароля</h2>
  
      <ValidationObserver ref="restoreChecker" slim>
        <form @submit.prevent="onRestorePassSubmit" ref="restorePassForm" action="" class="form">
          <fieldset class="form__set">
  
            <ValidationProvider v-slot="{ errors }" rules="required|phoneLength" mode="eager" slim>
              <div class="form__group" :class="{'form__group--invalid': errors.length > 0}">
                <label for="order-tel">Номер телефона</label>
                <input type="text" name="order-tel" id="order-tel" v-model="changeTel" v-mask="'+7 ### ### ## ##'" placeholder="+7 989 721 64 27">
                <span v-if="errors[0]" class="form__group-error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
  
            <Btn class="btn form__btn" type="submit">
              <span slot="text">Отправить код восстановления</span>
            </Btn>
          </fieldset>
        </form>
      </ValidationObserver>
      
      <p class="modal__text modal__text--centered">
        Вспомнили пароль ? <a href="javascript:void(0);" @click.prevent="$modal.hide('restorePassModal'); $modal.show('authModal')">Войти с паролем</a>
      </p>
      
      <SocialAuth/>
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
    computed: {
      userData () {
        return this.$store.state.user.userData
      },
      changeTel: {
        get () {
          return this.$store.state.user.userData.tel
        },
        set (value) {
          this.$store.commit('user/SET_USER_TEL', value)
        }
      },
    },
    methods: {
      // Заглушка для обработчика формы восстановления пароля
      onRestorePassSubmit() {
        this.$refs.restoreChecker.validate().then(success => {
          if (!success) {
            return;
          }
  
          this.$modal.hide('restorePassModal');
          this.$modal.show('restoreCodeModal');
        });
      },
    }
  }
</script>

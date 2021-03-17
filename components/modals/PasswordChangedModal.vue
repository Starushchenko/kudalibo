<template>
  <modal name="passwordChangedModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('passwordChangedModal')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <h2 class="modal__title">Восстановление пароля</h2>
      <p class="modal__text">Пароль для аккаунта <nobr>{{ userData.tel }}</nobr> успешно восстановлен. <a @click.prevent="$modal.hide('passwordChangedModal'); $modal.show('authModal')">Перейти в личный кабинет</a></p>
    </div>
  </modal>
</template>

<script>
  export default {
    computed: {
      userData () {
        return this.$store.state.user.userData
      },
    },
  }
</script>

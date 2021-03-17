<template>
  <modal name="passwordChangedModal" height="auto" width="450px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('passwordChangedModal')">
        <svg-icon name="close-dark" width="24" height="24"/>
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

<template>
  <modal name="driverSearchingModal" height="auto" width="620px" :scrollable="true">
    <div class="modal__content">
      <button slot="top-right" class="modal__close" @click="$modal.hide('driverSearchingModal')">
        <svg-icon name="close-dark" width="24" height="24"/>
      </button>
  
      <h2 class="modal__title">Поездка успешно оформлена</h2>
      <p class="modal__text">Поездка на&nbsp;21.05.2021 успешно создана и&nbsp;доступна водителям. Войдите в&nbsp;<a href="#">мобильное приложение</a> или не&nbsp;уходите со&nbsp;страницы, чтобы выбрать водителя.</p>
  
      <LoadingCard ltext="Идёт поиск водителя"/>
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

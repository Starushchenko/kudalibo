<template>
	<client-only>
		<div class="modal">
			<!-- Авторизация пользователя -->
			<AuthModal @hideModal="hideModal" @showModal="showModal" :userData="userData"/>
      
      <!-- Восстановление пароля -->
      <SignUpModal @hideModal="hideModal" @showModal="showModal" :userData="userData"/>
			
			<!-- Восстановление пароля -->
			<RestorePassModal @hideModal="hideModal" @showModal="showModal" @restoreAgain="restoreAgain" :userData="userData"/>
      
      <!-- Восстановление пароля -->
      <RestorePassModal @hideModal="hideModal" @showModal="showModal" @restoreAgain="restoreAgain" :userData="userData"/>
		</div>
	</client-only>
</template>

<script>
	export default {
		data: () => ({
  
		}),
    computed: {
      userData () {
        return this.$store.state.user.userData
      }
    },
    methods: {
      showModal: function(modalName) {
        this.$modal.show(modalName);
      },
      hideModal: function(modalName) {
        this.$modal.hide(modalName);
      },
      restoreAgain: function () {
        this.userData.restoreCode = '';
        this.$notify({
          title: 'Повторная отправка',
          text: 'Код будет выслан, когда программист добавит такую функцию',
          type: 'warn',
          duration: 3000,
          speed: 500,
        })
      }
    }
	}
</script>

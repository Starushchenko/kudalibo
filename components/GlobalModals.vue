<template>
	<client-only>
		<div class="modal">
			<!-- Авторизация пользователя -->
			<AuthModal @showModal="showModal" @showNewModal="showNewModal" :userData="userData"/>
      
      <!-- Восстановление пароля -->
      <SignUpModal @showModal="showModal" @showNewModal="showNewModal" :userData="userData"/>
			
			<!-- Восстановление пароля -->
			<RestorePassModal @showModal="showModal" @showNewModal="showNewModal" @restoreAgain="restoreAgain" :userData="userData"/>
		</div>
	</client-only>
</template>

<script>
	export default {
		data: () => ({
			// Тестовые данные пользователя
			userData: {
				email: 'alexeipetrov21@yandex.ru',
				password: 'T%Y-Xl0-Gu8-@3R',
        newPassword: '',
        confirmPassword: '',
        restoreCode: '',
        showPassword: false,
        showNewPassword: false,
        showConfirmPassword: false
			}
		}),
    methods: {
      showModal: function(modalName) {
        this.$modal.show(modalName);
      },
      showNewModal: function(currentModalName, neededModalName) {
        this.$modal.hide(currentModalName);
        this.$modal.show(neededModalName);
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

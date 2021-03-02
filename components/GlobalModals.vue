<template>
	<client-only>
		<div class="modal">
			<!-- Авторизация пользователя -->
			<AuthModal />
			
			<!-- Восстановление пароля -->
			<RestorePassModal />
		</div>
	</client-only>
</template>

<script>
	import RestorePassModal from "./modal/RestorePassModal";
	export default {
		components: {RestorePassModal},
		data: () => ({
			// Тестовые данные пользователя
			userData: {
				email: 'alexeipetrov21@yandex.ru',
				password: 'T%Y-Xl0-Gu8-@3R'
			}
		})
	}
</script>

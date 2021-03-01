<template>
	<client-only>
	<div class="modal">
		<!-- Авторизация пользователя -->
		<AuthModal />
	</div>
	</client-only>
</template>

<script>
	export default {
		data: () => ({
			// Тестовые данные пользователя
			userData: {
				email: 'alexeipetrov21@yandex.ru',
				password: 'T%Y-Xl0-Gu8-@3R'
			}
		})
	}
</script>

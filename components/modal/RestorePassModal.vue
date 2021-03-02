<template>
	<modal name="resorePassModal" height="auto" width="450px" :scrollable="true">
		<div class="modal__content">
			<button slot="top-right" class="modal__close" @click="$modal.hide('resorePassModal')">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
			
			<h2 class="modal__title">Восстановление пароля</h2>
			
			<form action="" class="form">
				<fieldset class="form__set">
					<div class="form__group">
						<label for="auth-login">Логин</label>
						<input type="text" name="auth-login" id="auth-login" placeholder="Введите ваш телефон или email" v-model="userData.email">
					</div>
					<div class="form__group">
						<label for="auth-pass">Пароль</label>
						<input type="password" name="auth-pass" id="auth-pass" placeholder="*****************" v-model="userData.password">
						<button type="button" class="form__pass-visibility-toggler"></button>
					</div>
					
					<Btn class="btn form__btn" type="button" @click.native="">
						<span slot="text">Войти</span>
					</Btn>
				</fieldset>
			</form>
			
			<p class="modal__text modal__text--centered">
				Забыли пароль ? <a href="javascript:void(0);" @click.prevent="$modal.show('restorePassModal')">Восстановить</a>
			</p>
		</div>
	</modal>
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

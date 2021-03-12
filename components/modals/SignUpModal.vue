<template>
	<modal name="signUpModal" height="auto" width="450px" :scrollable="true">
		<div class="modal__content">
			<button slot="top-right" class="modal__close" @click="$modal.hide('signUpModal')">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
			
			<h2 class="modal__title">Войти в личный кабинет</h2>
			
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
				Забыли пароль ? <a @click.prevent="$modal.hide('authModal'); $emit('showRestorePass')">Восстановить</a>
			</p>
      
      <SocialAuth />
      
      <Btn class="btn btn--alt form__btn" type="button" @click.native="">
        <span slot="text">Зарегистрироваться</span>
      </Btn>
		</div>
	</modal>
</template>

<script>
	export default {
    props: ['hideModal', 'showModal', 'userData'],
	}
</script>

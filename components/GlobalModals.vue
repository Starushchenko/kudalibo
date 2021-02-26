<template>
	<div class="modal">
		<modal name="example" height="auto" width="450px" scrollable="true">
			<div class="modal__content">
				<button slot="top-right" class="modal__close" @click="$modal.hide('example')">
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
							
						</div>
						
						<Btn class="btn form__btn" type="button" @click.native="">
							<svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.90837 3.72142C10.3566 1.42408 13.6434 1.42408 14.0916 3.72142C14.3644 5.11939 15.9053 5.86148 17.1683 5.20309C19.2439 4.12112 21.2933 6.69092 19.7766 8.47369C18.8536 9.55854 19.2342 11.226 20.5365 11.803C22.6765 12.7511 21.9451 15.9556 19.6056 15.8813C18.182 15.8362 17.1156 17.1734 17.4764 18.5512C18.0694 20.8155 15.108 22.2416 13.7075 20.3663C12.8552 19.2251 11.1448 19.2251 10.2926 20.3663C8.89198 22.2416 5.93059 20.8155 6.52357 18.5512C6.88441 17.1734 5.81802 15.8362 4.39442 15.8813C2.05494 15.9556 1.32354 12.7511 3.46356 11.803C4.76578 11.226 5.14637 9.55854 4.22344 8.47369C2.70674 6.69092 4.75609 4.12112 6.83166 5.20309C8.09468 5.86148 9.63564 5.11939 9.90837 3.72142Z" stroke="#F2994A" stroke-width="1.8"/>
								<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3432 15 9.00001 13.6569 9.00001 12C9.00001 10.3431 10.3432 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#F2994A" stroke-width="1.8"/>
							</svg>
							<span slot="text">Дополнительные настройки</span>
						</Btn>
					</fieldset>
				</form>
			</div>
		</modal>
	</div>
</template>

<script>
	export default {
		data: () => ({
			userData: {
				email: 'alexeipetrov21@yandex.ru',
				password: 'T%Y-Xl0-Gu8-@3R'
			}
		})
	}
</script>

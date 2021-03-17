<template>
  <client-only>
    <div class="modal">
      <!-- Авторизация пользователя -->
      <AuthModal @showPassword="showPassword"/>
      
      <!-- Регистрация -->
      <SignUpModal @showPassword="showPassword"/>
      
      <!-- Восстановление пароля -->
      <RestorePassModal/>
      <RestoreCodeModal @restoreAgain="restoreAgain"/>
      
      <!-- Установка нового пароля -->
      <NewPassModal @showPassword="showPassword"/>
      <PasswordChangedModal />
  
      <!-- Заказ оформлен, ожидание водителя -->
      <DriverSearchingModal/>
    </div>
  </client-only>
</template>

<script>
  export default {
    methods: {
      showPassword: function (ref) {
        (ref.getAttribute('type') === 'password') ? ref.setAttribute('type', 'text') : ref.setAttribute('type', 'password')
      },
      restoreAgain: function () {
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

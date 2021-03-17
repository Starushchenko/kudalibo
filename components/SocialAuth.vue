<template>
	<div class="social-auth">
    <h2 class="social-auth__title">Войти через социальную сеть:</h2>
    <div class="social-auth__list">
      <a href="#" class="social-auth__item social-auth__item--vk">
        <svg-icon class="social-auth__icon" name="social-vk" width="33" height="19"/>
      </a>
      <a href="#" class="social-auth__item social-auth__item--ok">
        <svg-icon class="social-auth__icon" name="social-ok" width="19" height="32"/>
      </a>
      <a href="#" class="social-auth__item social-auth__item--fb">
        <svg-icon class="social-auth__icon" name="social-fb" width="16" height="34"/>
      </a>
    </div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	@import '~assets/scss/mixins';
	
	.social-auth {
		display: flex;
		align-items: center;
    flex-direction: column;
    background: $gray-5;
    padding: 15px;
	}
  
  .social-auth__list {
    display: flex;
    align-items: center;
  }
  
  .social-auth__item {
    width: 50px;
    height: 50px;
    background: $main-text-color;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    &--vk {
      background: #4D76A1;
    }
  
    &--ok {
      background: #FF9800;
    }
  
    &--fb {
      background: #3B5998;
    }
    
    &:hover {
      box-shadow: $pressed-btn-shadow;
    }
  }
  
  .social-auth__title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }
</style>

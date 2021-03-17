<template>
	<div class="social">
		<a href="#" class="social__item social__item--vk">
      <svg-icon class="social__icon" name="social-vk" width="33" height="19"/>
		</a>
		<a href="#" class="social__item social__item--ok">
      <svg-icon class="social__icon" name="social-ok" width="19" height="32"/>
		</a>
		<a href="#" class="social__item social__item--fb">
      <svg-icon class="social__icon" name="social-fb" width="16" height="34"/>
		</a>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	@import '~assets/scss/mixins';
	
	.social {
		display: flex;
		align-items: center;
	}
	
	.social__item {
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
</style>

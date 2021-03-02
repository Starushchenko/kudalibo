<template>
	<client-only>
		<div class="notification__wrapper">
			<notifications width="320" position="top right" classes="notification"/>
		</div>
	</client-only>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	@import '~assets/scss/variables';
	.notification__wrapper {
		
		.vue-notification-group {
			top: 110px !important;
			overflow: visible;
			border-radius: 6px 0 0 6px;
		}
	}
	.notification {
		padding: 12px 15px;
		border-radius: 6px 0 0 6px;
		border-top: 5px solid $gray-1;
		box-shadow: $message-shadow;
		margin-bottom: 5px;
		
		&.warn {
			border-top: 5px solid $accent-color;
		}
		
		&.success {
			border-top: 5px solid $success-color;
		}
		
		&.alert {
			border-top: 5px solid $alert-color;
		}
		
		&.note {
			border-top: 5px solid $note-color;
		}
		
		.notification-title {
			font-size: 14px;
			font-weight: 600;
			margin-bottom: 3px;
		}
		
		.notification-content {
			font-size: 14px;
			font-weight: 400;
		}
	}
</style>
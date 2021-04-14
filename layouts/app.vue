<template>
	<transition name="layout" mode="out-in">
		<div>
			<Nuxt/>
      
      <div class="mobile-panel" v-if="$device.isMobileOrTablet">
        моб. меню
      </div>
			
			<!--	Глобальные модальные окна приложения	-->
			<GlobalModals/>
			
			<!-- Контейнер для нотификаций -->
			<Notification/>
		</div>
	</transition>
</template>

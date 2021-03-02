<template>
	<transition name="layout" mode="out-in">
		<div>
			<Nuxt/>
			
			<!--	Глобальные модальные окна приложения	-->
			<GlobalModals/>
			
			<!-- Контейнер для нотификаций -->
			<Notification/>
		</div>
	</transition>
</template>

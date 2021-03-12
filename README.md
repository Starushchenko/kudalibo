# Kudalibo Front

Репозиторий для фронтенда kdlb.ru на nuxt.js

## Библиотеки в проекте
- **Валидация форм** - [vee-validate](https://vee-validate.logaretm.com/v3)
- **Управление drag** - [vue.draggable](https://sortablejs.github.io/Vue.Draggable/)
- **Datetime-picker** - [vue2-datepicker](https://mengxiong10.github.io/vue2-datepicker/index.html)
- **Модуль установки / получения cookies** - [cookie-universal-nuxt](https://www.npmjs.com/package/cookie-universal-nuxt)
- **Модальные окна** - [vue-js-modal](https://euvl.github.io/vue-js-modal/)
- **Нотификации** - [vue-notification](https://github.com/euvl/vue-notification)
- **Маски полей ввода** - [v-mask](https://www.npmjs.com/package/v-mask)

##Подключена библиотека проверки устройства **[@nuxtjs/device](https://www.npmjs.com/package/@nuxtjs/device)**

### Базовые флаги
```js
  $device.isDesktop
  $device.isMobile
  $device.isTablet
  $device.isMobileOrTablet
  $device.isDesktopOrTablet
  $device.isIos
  $device.isWindows
  $device.isMacOS
  $device.isAndroid
```
### Использование
```html
  <template>
    <section>
      <div v-if="$device.isDesktop">
        Desktop
      </div>
      <div v-else-if="$device.isTablet">
        Tablet
      </div>
      <div v-else>
        Mobile
      </div>
    </section>
  </template>
```

## Нотификации
### Использование в методе
```js
  this.$notify({
    // Title (will be wrapped in div.notification-title)
    title: 'This is the <em>title</em>',
    // Content (will be wrapped in div.notification-content)
    text: 'This is some <b>content</b>',
    // Class that will be assigned to the notification
    type: 'success', // success, warn, alert, note
    // Time (in ms) to keep the notification on screen
    duration: 3000,
    // Time (in ms) to show / hide notifications
    speed: 500,
  })
```

## Добавлен кастомный скроллбар [vue2-scrollbar](https://www.npmjs.com/package/vue2-scrollbar)
Используется vue2-scrollbar, подключено на главной странице, но пока не рекомендуется использовать, так как плохо 
срабатывает перечёт высоты страницы после обновления форм.

```html
<vue-scrollbar ref="scrollbar">
  <div>Some scrolling content</div>
</vue-scrollbar>
```

## Команды

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

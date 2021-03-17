import { extend } from "vee-validate";
import { required, alpha, email, confirmed, is } from "vee-validate/dist/rules";

extend("required", {
	...required,
	message: "Это поле обязательно"
});

extend('truthy', {
  message: 'Это поле обязательно',
  validate: value => !! value
});

extend("email", {
  ...email,
  message: "Введите корректный email"
});

extend("alpha", {
	...alpha,
	message: "Это поле может содержать только буквы"
});

extend('isAfterNow', {
	validate: (value) => {
		return (value >= new Date())
	},
	message: 'Выберите время позднее текущего',
});

extend('phoneLength', {
  validate: (value) => {
    return (value.split(' ').join('').length === 12)
  },
  message: 'Введите правильный номер телефона',
});

extend('verificationCode', {
  validate: (value) => {
    return (value.split(' ').join('').length === 6)
  },
  message: 'Введите правильный код',
});

extend("confirmed", {
  ...confirmed,
  message: "Поля не совпадают"
});

extend("is", {
  ...is,
  message: "Значение не совпадает"
});

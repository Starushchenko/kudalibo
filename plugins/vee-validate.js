import { extend } from "vee-validate";
import { required, alpha } from "vee-validate/dist/rules";

extend("required", {
	...required,
	message: "Это поле обязательно"
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

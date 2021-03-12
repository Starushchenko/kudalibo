export const state = () => ({
  userData: {
    authorized: false,
    email: 'alexeipetrov21@yandex.ru',
    password: 'T%Y-Xl0-Gu8-@3R',
    newPassword: '',
    confirmPassword: '',
    restoreCode: '',
    showPassword: false,
    showNewPassword: false,
    showConfirmPassword: false
  }
});

export const mutations = {
  toggleAuthorize(state) {
    state.userData.authorized = !state.userData.authorized
  },
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
};

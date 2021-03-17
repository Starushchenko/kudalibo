export const state = () => ({
  userData: {
    authorized: false,
    email: 'alexeipetrov21@yandex.ru',
    tel: '+79782818265',
    name: 'Василий Соколов',
    password: 'T%Y-Xl0-Gu8-@3R',
    restoreCode: '',
  }
});

export const mutations = {
  TOGGLE_AUTHORIZED: (state) => {
    state.userData.authorized = !state.userData.authorized
  },
  SET_USER_EMAIL: (state, email) => {
    state.userData.email = email;
  },
  SET_USER_TEL: (state, tel) => {
    state.userData.tel = tel;
  },
  SET_USER_NAME: (state, name) => {
    state.userData.name = name;
  },
  SET_USER_PASS: (state, pass) => {
    state.userData.password = pass;
  },
  SET_RESTORE_CODE: (state, restoreCode) => {
    state.userData.restoreCode = restoreCode;
  },
};

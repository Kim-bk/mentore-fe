import AuthService from "../apis/modules/auth"

const state = {};
const getters = {};
const mutations = {};
const actions = {
    login(){
        console.login("login from store");
    }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

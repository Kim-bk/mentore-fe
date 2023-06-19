import Api from "../../apis";

export default {
  login() {
    return Api().post("api/user/login");
  },
  register() {
    return Api().post("api/user/register");
  },
};

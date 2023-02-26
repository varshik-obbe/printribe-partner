import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
import Swal from 'sweetalert2'
import md5 from 'md5-hash'

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_USER = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    // console.log(state.user);
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      console.log(credentials,"credentials");
    const payload= {saveData: {
              password: credentials.credentials.password,
              email: credentials.credentials.email,
              role: credentials.credentials.role,
            }}
            console.log(payload,"data");

//       var googleUser = googleUser.profileObj

// axios
//   .post('https://api.theprintribe.com/api/customers/customerGoogleSign', {
//     saveData:  {
//       password: googleUser.googleId,
//       email: googleUser.email,
//       role: this.form.role,
//     },
//   })
//   .then((res))
      ApiService.post("/customers/customerGoogleSign", payload)
        .then(({
          data
        }) => {
          console.log(data.savedData,'data....');
          const token =  md5(data?.savedData?._id + data?.savedData?.email )
const userdata={
  email:data.savedData.email,
  role:data.savedData.role,
  id:data.savedData._id,
  gst:data.savedData.gst,
  password:data.savedData.password,
}
          const user={
            token:token,
            customer:userdata
          }
          context.commit(SET_AUTH, user);
          resolve(data);
        })
        .catch(({
          response
        }) => {
          Swal.fire({
            title: "Error!",
            text: "Please check your credentials",
            icon: "error",
            confirmButtonText: "Close",
          })
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", {
          user: credentials
        })
        .then(({
          data
        }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({
          response
        }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [VERIFY_AUTH](context) {
    // if (JwtService.getToken()) {
    //   ApiService.setHeader();
    //   ApiService.get("verify")
    //     .then(({ data }) => {
    //       context.commit(SET_AUTH, data);
    //     })
    //     .catch(({ response }) => {
    //       context.commit(SET_ERROR, response.data.errors);
    //     });
    // } else {
    //   context.commit(PURGE_AUTH);
    // }
  },
  [UPDATE_USER](context, payload) {
    const {
      email,
      username,
      password,
      image,
      bio
    } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({
      data
    }) => {
      context.commit(SET_AUTH, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    console.log(user,"user");
    state.isAuthenticated = true;
    state.user = user.customer;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
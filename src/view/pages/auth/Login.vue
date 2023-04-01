<template>
  <div>
    <!--begin::Content header-->
    <!-- <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Don't have an account yet?
      </span>
      <router-link
        class="font-weight-bold font-size-3 ml-2"
        :to="{ name: 'register' }"
      >
        Sign Up!
      </router-link>
    </div> -->
    <!--end::Content header-->

    <!--begin::Signin-->
    <div class="login-form login-signin">
      <div class="text-center mb-10 mb-lg-20">
        <h3 class="font-size-h1">Sign In</h3>
        <p class="text-muted font-weight-semi-bold">
          Enter your email and password
        </p>
      </div>

      <!-- Google Login::begin -->
      <GoogleLogin
        :params="params"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
        class="w-100 border border-dark rounded py-3"
      >
        <img src="/media/google-logo.png" style="height: 20px" class="mr-3" />
        Sign in with Google
      </GoogleLogin>

      <!-- Google Login::end -->

      <div class="my-5 d-flex align-items-center">
        <hr class="w-100" />
        <span class="mx-3">or</span>
        <hr class="w-100" />
      </div>
      <!--begin::Form-->
      <b-form class="form" @submit.stop.prevent="onSubmit">
        <b-form-group
          id="example-input-group-1"
          label=""
          label-for="example-input-1"
        >
          <b-form-input
            class="form-control form-control-solid h-auto py-5 px-6"
            id="example-input-1"
            name="example-input-1"
            v-model="$v.form.email.$model"
            placeholder="Email"
            :state="validateState('email')"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback">
            Email is required and a valid email address.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-2"
          label=""
          label-for="example-input-2"
        >
          <b-form-input
            class="form-control form-control-solid h-auto py-5 px-6"
            type="password"
            id="example-input-2"
            name="example-input-2"
            v-model="$v.form.password.$model"
            placeholder="Password"
            :state="validateState('password')"
            aria-describedby="input-2-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-2-live-feedback">
            Password is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <!--begin::Action-->
        <div
          class="
            form-group
            d-flex
            flex-wrap
            justify-content-between
            align-items-center
          "
        >
          <a
            href="https://theprintribe.com/forgotpassword"
            class="text-dark-60 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            Forgot Password ?
          </a>
          <button
            ref="kt_login_signin_submit"
            class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3"
          >
            Sign In
          </button>
        </div>
        <div
          class="
            form-group
            d-flex
            flex-wrap
            justify-content-between
            align-items-center
          "
        >
          <a
            href="https://theprintribe.com/signup"
            target="_blank"
            rel="noreferrer noopener"
            class="text-dark-60 text-hover-primary my-3 mr-2"
            id="kt_signup_new"
          >
            new user?
          </a>
        </div>
        <!--end::Action-->
      </b-form>
      <!--end::Form-->
    </div>
    <!--end::Signin-->
  </div>
</template>

<style lang="scss" scoped>
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}
</style>

<script>
import { mapState } from "vuex";
import { LOGIN, LOGOUT } from "@/core/services/store/auth.module";
import GoogleLogin from "vue-google-login";
import { validationMixin } from "vuelidate";
import { email, minLength, required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "login",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        role: "customer",
      },
      params: {
        client_id:
          "46834513654-iea0lq8m5t6vksausg1ssh8ktk62vnlu.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      const data = {
        credentials: {
          email: this.$v.form.email.$model,
          password: this.$v.form.password.$model,
          role: this.form.role,
        },
      };

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      let query = this.$route.query;
      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, data)
          // go to which page after successfully login
          .then(() => {
            if (query?.code) {
              this.$router.push({
                path: "/integrations/wix/success",
                query: query,
              });
            } else {
              this.$router.push("/");
            }
          });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    onSuccess(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      // console.log(googleUser.getBasicProfile());
      // console.log(googleUser.getBasicProfile().getId());
      // console.log(googleUser.getBasicProfile().getEmail());
      const email = googleUser.getBasicProfile().getEmail()
      const Id = googleUser.getBasicProfile().getId()
      let user = googleUser.getBasicProfile();
      const data = {
        credentials: {
          email: email,
          password: Id,
          role: this.form.role,
        },
      };

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, data)
          // go to which page after successfully login
          .then(() => {
            this.$router.push("/");
          });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    onFailure(err) {
      console.log(err);
    },
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
  },
};
</script>

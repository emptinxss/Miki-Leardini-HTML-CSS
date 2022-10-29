<template>
  <div class="w-full flex justify-center">
    <form ref="form" class="bg-scuro rounded px-8 pt-6 pb-8 md:w-2/4 w-full">
      <div class="mb-4">
        <label class="block text-burro text-sm font-bold mb-2"> Name </label>
        <input
          v-model="state.name"
          name="name"
          class="name shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Name"
        /><span class="mt-2 text-red-500" v-if="v$.name.$error">
          {{ v$.name.$errors[0].$message }}</span
        >
      </div>
      <div class="mb-4">
        <label class="block text-burro text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="state.email"
          name="email"
          class="email shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Your email"
        />
        <span class="mt-2 text-red-500" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}</span
        >
      </div>
      <div class="mb-4">
        <label class="block text-burro text-sm font-bold mb-2"> Message </label>
        <textarea
          rows="6"
          name="message"
          v-model="state.message"
          class="message shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Message..."
        /><span class="text-red-500" v-if="v$.message.$error">
          {{ v$.message.$errors[0].$message }}</span
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          @click.prevent="submitForm"
          type="submit"
          class="submit bg-burro hover:bg-scuro text-scuro hover:text-burro border border-burro font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { computed, reactive } from "@vue/reactivity";
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
export default {
  setup() {
    const state = reactive({
      name: "",
      email: "",
      message: "",
    });

    const rules = computed(() => {
      return {
        name: {
          required: helpers.withMessage(
            "The name field cannot be empty.",
            required
          ),
        },
        email: {
          required: helpers.withMessage(
            "The email field cannot be empty.",
            required
          ),
          email: helpers.withMessage("This is not a valid email adress", email),
        },
        message: {
          required: helpers.withMessage(
            "The message field cannot be empty.",
            required
          ),
        },
      };
    });

    const v$ = useValidate(rules, state);
    return { state, v$ };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        emailjs
          .sendForm(
            "service_9y23yoe",
            "template_1sed7lk",
            this.$refs.form,
            "TZmcaz9u0aUaBtEPv"
          )
          .then(
            (result) => {
              /* alert("SUCCESS!", result.text); */
              this.$swal({
                icon: "success",
                width: 400,
                title: "Message sent!",
                text: "Thank you! ",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "/";
                }
              });
            },
            (error) => {
              /*  alert("FAILED...", error.text); */
              this.$swal({
                icon: "error",
                width: 400,
                title: "Message not sent.",
                text: "Server problem, try again later",
              });
            }
          );
      } else {
        console.log("Form failed validation.");
      }
    },
  },
};
</script>

<style scoped></style>

<!-- @format -->

<template>
  <div class="login-page">
    <div class="bg-blue-50 h-screen flex justify-center items-center">
      <div class="bg-white px-6 py-8 shadow-md rounded-md max-w-lg">
        <h1 class="mb-8 text-3xl text-center">Login</h1>
        <p></p>
        <form class="w-[400px]" @submit.prevent="loginUser">
          <AtomsInput
            v-model="formData.email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <AtomsInput
            v-model="formData.password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <AtomsButton type="secondary" class="w-full">Login</AtomsButton>
        </form>
        <p class="mt-3 text-sm">
          <span> Don't have an account? </span>
          <NuxtLink class="text-blue-500" to="/signup">Create Account</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";

definePageMeta({
  middleware: ["auth"],
});

const authStore = useAuthStore();
const router = useRouter();

const formData = reactive({
  email: "",
  password: "",
});

const loginUser = async () => {
  await authStore.login(formData);
  router.push("/me");
};
</script>

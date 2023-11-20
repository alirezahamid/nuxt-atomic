<!-- @format -->

<template>
  <div class="index-page">
    <div
      class="bg-blue-50 h-screen flex justify-center items-center text-center"
    >
      <div>
        Protected Route <br />
        {{ userStore.user.email }}

        <AtomsButton @click="logout" type="secondary" class="w-full">
          Logout
        </AtomsButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "~/stores/auth.store";
import { useUserStore } from "~/stores/user.store";
const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter();

definePageMeta({
  middleware: ["auth"],
});

const logout = async () => {
  await authStore.logout();
  router.push("/login");
};

onMounted(() => {
  userStore.getUser();
});
</script>

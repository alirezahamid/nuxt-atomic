/** @format */
import { useAuthStore } from "../stores/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if ((to.path === "/login" || to.path === "/signup") && authStore.isLoggedIn) {
    return navigateTo("/me");
  }

  if (
    !(to.path === "/login" || to.path === "/signup") &&
    !authStore.isLoggedIn
  ) {
    return navigateTo("/login");
  }
});

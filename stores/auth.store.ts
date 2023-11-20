/** @format */

import { defineStore } from "pinia";
import { useAuthService } from "~/services/auth.service";

interface Tokens {
  id: number;
  access_token: string;
  refresh_token: string;
}
interface LoginData {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  getters: {
    isLoggedIn: (state) => !!localStorage.getItem("access_token"),
  },
  actions: {
    setTokens(tokens: Tokens) {
      localStorage.setItem("id", tokens.id.toString());
      localStorage.setItem("access_token", tokens.access_token);
      localStorage.setItem("refresh_token", tokens.refresh_token);
    },
    clearTokens() {
      localStorage.removeItem("id");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
    async login(formData: LoginData) {
      const authService = useAuthService();
      try {
        const tokens = await authService.login(formData);
        this.setTokens(tokens);
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      const authService = useAuthService();
      try {
        await authService.logout();
        this.clearTokens();
      } catch (error) {
        console.error(error);
      }
    },
  },
});

/** @format */

import { defineStore } from "pinia";
import { useUserService } from "~/services/user.service";

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {},
  }),
  getters: {
    user: (state) => state.userInfo,
  },
  actions: {
    async getUser() {
      const userService = useUserService();
      try {
        const res = await userService.user();
        this.userInfo = res;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

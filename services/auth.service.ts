/** @format */

import useAxios from "~/composables/useAxios";

interface AuthType {
  email: string;
  password: string;
}

interface Tokens {
  id: number;
  access_token: string;
  refresh_token: string;
}

export const useAuthService = () => {
  const { axios } = useAxios();

  const register = async (formData: AuthType): Promise<{ message: string }> => {
    const response = await axios.post<{ message: string }>(
      "/auth/register",
      formData
    );
    return response.data;
  };

  const login = async (formData: AuthType): Promise<Tokens> => {
    const response = await axios.post<Tokens>("/auth/login", formData);
    return response.data;
  };

  const refresh = async (refreshToken: string): Promise<Tokens> => {
    const response = await axios.post<Tokens>("/auth/refresh", {
      refreshToken,
    });
    return response.data;
  };

  const logout = async (): Promise<{ message: string }> => {
    const response = await axios.post<{ message: string }>("/auth/logout");
    return response.data;
  };

  return {
    register,
    login,
    refresh,
    logout,
  };
};

/** @format */

import useAxios from "~/composables/useAxios";

interface UserData {
  id: number;
  created_at: string;
  updated_at: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  verified: boolean;
  twoFactor: boolean;
}

export const useUserService = () => {
  const { axios } = useAxios();

  const user = async (): Promise<UserData> => {
    const response = await axios.get<UserData>("/users/me");
    return response.data;
  };

  return {
    user,
  };
};

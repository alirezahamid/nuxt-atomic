/** @format */

import { ref } from "vue";
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  AxiosError,
} from "axios";
import { useAuthStore } from "../stores/auth.store";

interface RefreshTokenResponse {
  id: number;
  access_token: string;
  refresh_token: string;
}

export default function useAxios() {
  const token = ref<string>("");
  const authStore = useAuthStore();
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://localhost:8000", // Set your API base URL here
  });

  /**
   * Interceptor function that adds an Authorization header with a bearer token to the request config.
   * @param {Object} config - The request configuration object.
   * @returns The modified request configuration object with the Authorization header added.
   */
  axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  /**
   * Intercepts and handles Axios response errors, specifically handling 401 Unauthorized errors.
   * If a 401 error is encountered and the original request has not been retried, it attempts to refresh the access token using the refresh token.
   * If the refresh is successful, it updates the authentication tokens and retries the original request with the updated access token.
   * If the refresh fails, it rejects the promise with the refresh error.
   * @param {AxiosResponse} response - The Axios response object.
   * @param {AxiosError} error - The Axios error object.
   * @returns An object containing the Axios instance and the authentication token.
   */
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      if (!error.config) {
        return Promise.reject(error);
      }

      const originalRequest: AxiosRequestConfig & { _retry?: boolean } =
        error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const { userId, refreshToken } = getRefreshTokenData();
          const data = await refresh(userId, refreshToken);
          authStore.setTokens(data);

          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers["Authorization"] =
            `Bearer ${data.access_token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return {
    axios: axiosInstance,
    token,
  };
}

function getRefreshTokenData(): {
  userId: string | null;
  refreshToken: string | null;
} {
  return {
    userId: localStorage.getItem("id"),
    refreshToken: localStorage.getItem("refresh_token"),
  };
}

async function refresh(
  userId: string | null,
  refreshToken: string | null
): Promise<RefreshTokenResponse> {
  const response = await axios.post<RefreshTokenResponse>(
    "https://localhost:8000/auth/refresh",
    {
      userId,
      refreshToken,
    }
  );
  return response.data;
}

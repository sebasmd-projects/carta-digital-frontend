import { BASE_API } from "@utils/constants";

export async function LoginAPI(formData) {
  try {
    const url = `${BASE_API}/auth/login`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) {
      throw new Error("Login failed. Please check your credentials.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function usersMe(access) {
  try {
    const url = `${BASE_API}/users/me`;
    const params = {
      headers: {
        Authorization: `Bearer ${access}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, params);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

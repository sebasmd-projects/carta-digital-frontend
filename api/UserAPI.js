import { BASE_API } from "@utils/constants";

export async function LoginAPI(formData) {
  let response;
  try {
    const url = `${BASE_API}/auth/login`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      response = await fetch(url, params);
    } catch (error) {
      throw new Error("Hay problemas con el servidor");
    }

    if (response.status !== 200) {
      throw new Error("Credenciales inválidas");
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

export async function verifyToken(access) {
  try {
    const url = `${BASE_API}/auth/verify`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: access,
      }),
    };
    const response = await fetch(url, params);
    const responseBody = await response.json();

    return (
      response.ok &&
      responseBody.detail === "Token is valid" &&
      responseBody.code === "token_is_valid"
    );
  } catch (error) {
    return false;
  }
}

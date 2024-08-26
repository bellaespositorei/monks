"use server";

import { TokenResponse } from "@/lib/schemas/token";
import { clientId, clientSecret } from "@/server/config";

const getAuthorization = () => {
  const clientBase64 = Buffer.from(clientId + ":" + clientSecret).toString(
    "base64"
  );

  return "Basic " + clientBase64;
};

export const getToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: getAuthorization(),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }).toString(),
      next: {
        revalidate: 3600,
      },
    });

    return TokenResponse.parse(await response.json());
  } catch (err) {
    throw {
      message: "Failed to retrieve token.",
    };
  }
};

import { ArtistResponse, ArtistsResponse } from "@/lib/schemas/artist";

export const getArtists = async (
  token: string,
  idsString: string
): Promise<ArtistsResponse> => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists?ids=${idsString}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
    }
  );

  return ArtistsResponse.parse(await response.json());
};

export const getArtistById = async (
  id: string,
  token: string
): Promise<ArtistResponse> => {
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "force-cache",
  });

  return ArtistResponse.parse(await response.json());
};

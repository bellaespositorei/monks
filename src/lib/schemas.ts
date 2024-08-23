import zod from "zod";

export const TokenResponse = zod.object({
  access_token: zod.string(),
  token_type: zod.string(),
  expires_in: zod.number(),
});
export type TokenResponse = zod.infer<typeof TokenResponse>;

export const Followers = zod.object({
  href: zod.string().nullable(),
  total: zod.number(),
});
export type Followers = zod.infer<typeof Followers>;

export const Image = zod.object({
  height: zod.number(),
  url: zod.string(),
  width: zod.number(),
});
export type Image = zod.infer<typeof Image>;

export const Artist = zod.object({
  id: zod.string(),
  external_urls: zod.object({
    spotify: zod.string(),
  }),
  followers: Followers,
  genres: zod.array(zod.string()),
  href: zod.string(),
  images: zod.array(Image),
  name: zod.string(),
  popularity: zod.number(),
  type: zod.string(),
  uri: zod.string(),
});
export type Artist = zod.infer<typeof Artist>;

export const ArtistResponse = Artist;
export type ArtistResponse = zod.infer<typeof ArtistResponse>;

export const ArtistsResponse = zod.object({
  artists: zod.array(Artist),
});
export type ArtistsResponse = zod.infer<typeof ArtistsResponse>;

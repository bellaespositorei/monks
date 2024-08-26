import zod from "zod";

export const TokenResponse = zod.object({
  access_token: zod.string(),
  token_type: zod.string(),
  expires_in: zod.number(),
});
export type TokenResponse = zod.infer<typeof TokenResponse>;

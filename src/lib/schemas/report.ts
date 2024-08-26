import zod from "zod";

export const PopRanking = zod.object({
  artist_name: zod.string(),
  followers: zod.string(),
});
export type PopRanking = zod.infer<typeof PopRanking>;

export const SubmitReportPayload = zod.object({
  pop_ranking: zod.array(PopRanking),
  genre_ranking: zod.array(zod.string()).length(5),
});
export type SubmitReportPayload = zod.infer<typeof SubmitReportPayload>;

export const SubmitReportResponse = zod.object({
  msg: zod.string(),
});

export type SubmitReportResponse = zod.infer<typeof SubmitReportResponse>;

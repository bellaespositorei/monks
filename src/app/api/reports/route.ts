import { NextRequest, NextResponse } from "next/server";
import {
  SubmitReportPayload,
  SubmitReportResponse,
} from "@/lib/schemas/report";

export const POST = async (request: NextRequest) => {
  try {
    const { genre_ranking, pop_ranking } = SubmitReportPayload.parse(
      await request.json()
    );

    const response = await fetch(
      "https://psel-solution-automation-cf-ubqz773kaq-uc.a.run.app?access_token=bC2lWA5c7mt1rSPR",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          github_url: "",
          name: "Isabella Esposito Rei",
          pop_ranking,
          genre_ranking,
        }),
      }
    );

    const report = SubmitReportResponse.parse(await response.json());

    return NextResponse.json(report);
  } catch (err) {
    return NextResponse.json(
      { message: (err as any).message },
      { status: 500 }
    );
  }
};

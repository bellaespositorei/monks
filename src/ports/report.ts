import {
  SubmitReportPayload,
  SubmitReportResponse,
} from "@/lib/schemas/report";

export const submitReport = async (body: SubmitReportPayload) => {
  try {
    const response = await fetch("http://localhost:3000/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to submit report.");
    }

    return SubmitReportResponse.parse(await response.json());
  } catch (err) {
    throw { message: (err as any).message };
  }
};

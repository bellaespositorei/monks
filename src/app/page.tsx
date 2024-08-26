import { getArtists } from "@/ports/artists";
import { getToken } from "@/server/actions/token";
import { LogoIcon } from "@/components/icons/Logo";
import { getSubmitReportPayload, getTopGenres } from "@/lib/utils";
import { selectedArtists } from "@/server/config";
import { MobileTab } from "@/components/MobileTab";
import { DesktopTab } from "@/components/DesktopTab";
import { ReportButton } from "@/components/ReportButton";

const tabConfig = {
  list1: "TOP Artistas Pop",
  list2: "TOP 5 Generos",
};

export default async function HomePage() {
  const ids = Object.values(selectedArtists).join(",");

  const { access_token } = await getToken();
  const { artists } = await getArtists(access_token, ids);

  const topGenres = getTopGenres(artists);
  const submitReportPayload = getSubmitReportPayload(artists, topGenres);

  return (
    <div className="p-8 grid gap-4">
      <div className="flex justify-center">
        <LogoIcon width={255} height={100} />
      </div>

      <MobileTab
        artists={artists}
        topGenres={topGenres}
        tabConfig={tabConfig}
      />

      <DesktopTab
        artists={artists}
        topGenres={topGenres}
        tabConfig={tabConfig}
      />

      <ReportButton
        report={submitReportPayload}
        className="place-self-center mt-8"
      />
    </div>
  );
}

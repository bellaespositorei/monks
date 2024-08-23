import { Card } from "@/components/Card";
import { getArtists } from "@/ports/artists";
import { getToken } from "@/server/actions/token";
import { LogoIcon } from "@/components/icons/Logo";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { SpotifyListTab } from "@/components/SpotifyListTab";
import { getArtistsByGenre, getPopArtists, getTopGenres } from "@/lib/utils";
import Link from "next/link";
import { selectedArtists } from "@/server/config";

const tabConfig = {
  list1: "TOP Artistas Pop",
  list2: "TOP 5 Generos",
};

export default async function HomePage() {
  const ids = Object.values(selectedArtists).join(",");

  const { access_token } = await getToken();
  const { artists } = await getArtists(access_token, ids);

  const popArtists = getPopArtists(artists);
  const topGenres = getTopGenres(artists);

  return (
    <div className="p-8 grid gap-4">
      <div className="flex justify-center">
        <LogoIcon width={255} height={100} />
      </div>

      <SpotifyListTab defaultTab="list1" tabsTrigger={tabConfig}>
        <TabsContent value="list1">
          {popArtists.map((artist, index) => (
            <Link href={`/artista/${artist.id}`} key={artist.id}>
              <Card key={artist.id} artist={artist} position={index + 1} />
            </Link>
          ))}
        </TabsContent>

        <TabsContent value="list2">
          {topGenres.map((genre, index) => {
            const artistsByGenre = getArtistsByGenre(artists, genre);
            const artistsIds = artistsByGenre
              .map((artist) => artist.id)
              .join(",");

            return (
              <Link
                href={{ pathname: "/artistas", query: { ids: artistsIds } }}
                key={index}
              >
                <Card key={index} position={index + 1} genre={genre} />
              </Link>
            );
          })}
        </TabsContent>
      </SpotifyListTab>

      <div className="hidden md:grid md:grid-flow-col gap-8">
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="border-b-2 border-green text-purple font-bold">
              {tabConfig.list1}
            </span>
          </div>

          <div>
            {popArtists.map((artist, index) => (
              <Link href={`/artista/${artist.id}`} key={artist.id}>
                <Card key={artist.id} artist={artist} position={index + 1} />
              </Link>
            ))}
          </div>
        </div>

        <Separator
          orientation="vertical"
          className="place-self-center border-purple-light"
        />

        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="border-b-2 border-green text-purple font-bold">
              {tabConfig.list2}
            </span>
          </div>

          <div>
            {topGenres.map((genre, index) => {
              const artistsByGenre = getArtistsByGenre(artists, genre);
              const artistsIds = artistsByGenre
                .map((artist) => artist.id)
                .join(",");

              return (
                <Link
                  href={{ pathname: "/artistas", query: { ids: artistsIds } }}
                  key={index}
                >
                  <Card position={index + 1} genre={genre} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

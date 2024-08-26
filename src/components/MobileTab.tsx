import Link from "next/link";
import { SpotifyListTab } from "./SpotifyListTab";
import { TabsContent } from "./ui/tabs";
import { Card } from "./Card";
import { Artist } from "@/lib/schemas/artist";
import { getArtistsByGenre, getPopArtists } from "@/lib/utils";

type Props = {
  artists: Artist[];
  topGenres: string[];
  tabConfig: Record<string, string>;
};

export const MobileTab = ({ artists, topGenres, tabConfig }: Props) => {
  const popArtists = getPopArtists(artists);

  return (
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
  );
};

import Link from "next/link";
import { Card } from "./Card";
import { Separator } from "./ui/separator";
import { getArtistsByGenre, getPopArtists } from "@/lib/utils";
import { Artist } from "@/lib/schemas";

type Props = {
  artists: Artist[];
  topGenres: string[];
  tabConfig: Record<string, string>;
};

export const DesktopTab = ({ artists, topGenres, tabConfig }: Props) => {
  const popArtists = getPopArtists(artists);

  return (
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
  );
};

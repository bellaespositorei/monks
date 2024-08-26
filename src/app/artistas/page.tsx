import { ArtistInformation } from "@/components/ArtistInformation";
import { BackHomeButton } from "@/components/BackHomeButton";
import { CardImage } from "@/components/CardImage";
import { DetailFooter } from "@/components/DetailFooter";
import { getArtists } from "@/ports/artists";
import { getToken } from "@/server/actions/token";
import { Separator } from "@radix-ui/react-separator";

export type Props = {
  searchParams: { ids: string };
};

export default async function ArtistsPage({ searchParams }: Props) {
  const { access_token } = await getToken();
  const { artists } = await getArtists(access_token, searchParams.ids);
  const orderedArtists = artists.sort(
    (a, b) => b.followers.total - a.followers.total
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 grid gap-12 p-8">
        <BackHomeButton className="place-self-start" />

        {orderedArtists.map((artist, index) => (
          <div key={artist.id} className="space-y-8">
            <div className="text-purple font-bold text-sm flex flex-col justify-center items-center space-y-4 md:space-y-8">
              <CardImage
                src={artist.images[0].url}
                alt={artist.name}
                className="md:w-72 md:h-72 w-48 h-48"
              />

              <ArtistInformation artist={artist} />
            </div>

            {index < artists.length - 1 && (
              <Separator
                orientation="vertical"
                className="border-b-2 border-green"
              />
            )}
          </div>
        ))}
      </div>

      <DetailFooter />
    </div>
  );
}

import { ArtistInformation } from "@/components/ArtistInformation";
import { BackHomeButton } from "@/components/BackHomeButton";
import { CardImage } from "@/components/CardImage";
import { DetailFooter } from "@/components/DetailFooter";
import { getArtistById } from "@/ports/artists";
import { getToken } from "@/server/actions/token";

type DetailPageProps = {
  params: {
    id: string;
  };
};

export default async function ArtistPage({ params }: DetailPageProps) {
  const { access_token } = await getToken();
  const artist = await getArtistById(params.id, access_token);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 grid p-8 gap-12">
        <BackHomeButton className="place-self-start" />

        <div className="place-self-center">
          <CardImage
            src={artist.images[1].url}
            alt={artist.name}
            className="md:w-72 md:h-72 w-48 h-48"
          />
        </div>

        <ArtistInformation artist={artist} />
      </div>

      <DetailFooter />
    </div>
  );
}

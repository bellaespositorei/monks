import { Artist } from "@/lib/schemas";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  artist: Artist;
};

export const ArtistInformation = ({ artist, className }: Props) => (
  <div className={cn("text-sm text-purple font-bold space-y-2", className)}>
    <p>
      Artista: <span className="text-purple-light">{artist.name}</span>
    </p>

    <p>
      Seguidores:{" "}
      <span className="text-purple-light">
        {artist.followers.total.toLocaleString("pt-BR")}
      </span>
    </p>

    <p>
      Popularidade:{" "}
      <span className="text-purple-light">{artist.popularity}</span>
    </p>

    <p className="capitalize">
      Gêneros:{" "}
      <span className="text-purple-light">{artist.genres.join(", ")}</span>
    </p>
  </div>
);

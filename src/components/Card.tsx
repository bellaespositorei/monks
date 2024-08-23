import { Artist } from "@/lib/schemas";
import { CardImage } from "./CardImage";

type CardProps = {
  position: number;
  artist?: Artist;
  genre?: string;
};

export const Card = ({ artist, position, genre }: CardProps) => {
  return artist ? (
    <div className="font-bold flex space-x-9 items-center hover:bg-purple-light p-2 hover:rounded-lg">
      <p className="text-purple">Nº{position.toString().padStart(2, "0")}</p>
      <CardImage src={artist.images[0].url} alt={artist.name} />
      <p className="text-green-dark">{artist.name}</p>
    </div>
  ) : (
    <div className="font-bold flex space-x-9 items-center hover:bg-purple-light p-2 hover:rounded-lg">
      <p className="text-purple">Nº{position.toString().padStart(2, "0")}</p>
      <p className="text-green-dark capitalize">{genre}</p>
    </div>
  );
};

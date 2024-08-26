import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";
import { Artist } from "./schemas/artist";
import { SubmitReportPayload } from "./schemas/report";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPopArtists = (artists: Artist[]) =>
  artists
    .filter(({ genres }) => genres.includes("pop"))
    .sort((a, b) => b.followers.total - a.followers.total);

export const getTopGenres = (artists: Artist[]) => {
  const allGenres = artists.flatMap((artist) => artist.genres);

  const genreCount = allGenres.reduce((acc, genre) => {
    acc[genre] = (acc[genre] || 0) + 1;

    return acc;
  }, {} as Record<string, number>);

  return Object.entries(genreCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([genre]) => genre);
};

export const getArtistsByGenre = (artists: Artist[], genre: string) =>
  artists.filter(({ genres }) => genres.includes(genre));

const getPopArtist = ({ name, followers }: Artist) => ({
  artist_name: name,
  followers: followers.total.toString(),
});

export const getSubmitReportPayload = (
  artists: Artist[],
  topGenres: string[]
): SubmitReportPayload => ({
  pop_ranking: artists.map(getPopArtist),
  genre_ranking: topGenres,
});

import {MonksLogo} from "./icons/Monks";
import {SpotifyIcon} from "./icons/Spotify";

export const DetailFooter = () => (
  <footer className="p-4 text-center bg-purple text-white w-full">
    <div className="flex justify-between items-center">
      <SpotifyIcon />
      <MonksLogo />
    </div>
  </footer>
);

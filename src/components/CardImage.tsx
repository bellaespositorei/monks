import { cn } from "@/lib/utils";
import Image from "next/image";

type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
};

export const CardImage = ({
  src = "",
  alt = "",
  width = 80,
  height = 80,
  className,
}: CardImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("rounded-lg", className)}
    />
  );
};

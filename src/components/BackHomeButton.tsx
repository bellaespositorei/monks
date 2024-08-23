import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import Link from "next/link";

export const BackHomeButton = ({ className, ...props }: ButtonProps) => (
  <Link href="/">
    <Button
      variant="ghost"
      className={cn("space-x-2 font-bold text-purple hover:bg-purple-light p-2", className)}
      {...props}
    >
      <ArrowLeft width={20} height={20} />
      <span>Voltar</span>
    </Button>
  </Link>
);

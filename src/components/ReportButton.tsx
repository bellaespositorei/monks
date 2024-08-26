"use client";

import { SubmitReportPayload } from "@/lib/schemas/report";
import { cn } from "@/lib/utils";
import { submitReport } from "@/ports/report";
import { ButtonHTMLAttributes, useState } from "react";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  report: SubmitReportPayload;
};

export const ReportButton = ({ report, className }: Props) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleClick = async () => {
    setLoading(true);

    try {
      await submitReport(report);

      setLoading(false);
      toast({
        description: "Ranking enviado com sucesso!",
        variant: "success",
      });
    } catch {
      setLoading(false);
      toast({
        description: "Ocorreu um erro ao enviar o ranking",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      className={cn(
        "bg-purple-light text-white rounded-md p-4 w-1/2 flex items-center justify-center space-x-2 text-xs md:text-lg",
        className
      )}
      onClick={handleClick}
      disabled={loading}
    >
      <Loader2
        className={cn("mr-2 h-5 w-5 animate-spin", { hidden: !loading })}
      />

      {loading ? "Enviando..." : "Enviar Ranking"}
    </button>
  );
};

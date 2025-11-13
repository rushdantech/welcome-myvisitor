import { Clock } from "lucide-react";

interface PageTimeoutTimerProps {
  timeLeft: string;
  isWarning: boolean;
}

export const PageTimeoutTimer = ({ timeLeft, isWarning }: PageTimeoutTimerProps) => {
  return (
    <div className="fixed top-8 right-8 z-50">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-full shadow-lg border-2 transition-all duration-300 ${
          isWarning
            ? "bg-red-600 text-white border-red-700"
            : "bg-white text-foreground border-border"
        }`}
      >
        <Clock className={`w-6 h-6 ${isWarning ? "text-white" : "text-muted-foreground"}`} />
        <span className={`text-2xl font-bold font-mono ${isWarning ? "text-white" : "text-foreground"}`}>
          {timeLeft}
        </span>
      </div>
    </div>
  );
};


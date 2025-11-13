import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, LogOut } from "lucide-react";
import zetrixLogo from "@/assets/zetrix-logo.png";
import { getLocationLabel } from "@/lib/locations";
import { usePageTimeout } from "@/hooks/use-page-timeout";
import { PageTimeoutTimer } from "@/components/PageTimeoutTimer";

interface WelcomeMessageProps {
  visitorName: string;
  location: string;
  onComplete: () => void;
}

export const WelcomeMessage = ({ visitorName, location, onComplete }: WelcomeMessageProps) => {
  const { formattedTime, isWarning } = usePageTimeout({
    timeoutSeconds: 60,
    warningThreshold: 10,
    onTimeout: onComplete,
  });

  useEffect(() => {
    // Return to welcome screen after 5 seconds (original behavior)
    // But timeout will override this if it expires first
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-800 to-blue-900 flex flex-col p-8">
      <PageTimeoutTimer timeLeft={formattedTime} isWarning={isWarning} />
      <div className="mb-8">
        <img src={zetrixLogo} alt="Zetrix" className="h-16 object-contain brightness-0 invert" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Card className="p-16 max-w-4xl w-full shadow-2xl border-0 bg-white/95 backdrop-blur">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mx-auto animate-scale-in">
              <Check className="w-14 h-14 text-green-600" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground">
                Thank you, {visitorName}!
              </h1>
              <p className="text-3xl font-semibold text-primary">
                Welcome to Zetrix Tower
              </p>
              <p className="text-2xl text-muted-foreground">
                Please proceed to {getLocationLabel(location)}
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <Button
                onClick={onComplete}
                variant="outline"
                size="lg"
                className="text-lg font-medium px-8 py-6 h-auto bg-white hover:bg-red-600 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Exit to Main Screen
              </Button>
              
              <div>
                <div className="inline-block px-6 py-3 bg-muted rounded-full">
                  <p className="text-sm text-muted-foreground">
                    Returning to main screen...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

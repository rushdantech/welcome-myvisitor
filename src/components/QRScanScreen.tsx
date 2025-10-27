import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QRCodeSVG } from "qrcode.react";
import { Loader2, Scan } from "lucide-react";
import zetrixLogo from "@/assets/zetrix-logo.png";

interface QRScanScreenProps {
  onVerified: (visitorName: string) => void;
}

export const QRScanScreen = ({ onVerified }: QRScanScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const verificationUrl = "myid://verify?request=visitor_registration&location=zetrix_tower";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prevProgress + (100 / 600); // Increase by percentage per second
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSimulateScan = () => {
    onVerified("John Doe");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex flex-col p-8">
      <div className="mb-8">
        <img src={zetrixLogo} alt="Zetrix" className="h-16 object-contain" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Card className="p-12 max-w-2xl w-full shadow-[var(--shadow-card)] border-2">
          <div className="space-y-8 text-center">
            <div>
              <h1 className="text-4xl font-bold mb-3">Scan QR Code</h1>
              <p className="text-xl text-muted-foreground">
                Please scan this QR code with your MyID SuperApp
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-inner inline-block mx-auto">
              <QRCodeSVG
                value={verificationUrl}
                size={320}
                level="H"
                includeMargin={true}
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Loader2 className="w-6 h-6 animate-spin" />
                <p className="text-lg">Waiting for verification...</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Time remaining</span>
                  <span>{formatTime(timeLeft)}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="pt-4">
                <Button
                  onClick={handleSimulateScan}
                  variant="outline"
                  size="lg"
                  className="w-full text-lg font-medium"
                >
                  <Scan className="w-5 h-5 mr-2" />
                  Simulate Scan
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

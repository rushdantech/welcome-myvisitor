import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { Loader2, Scan, ArrowLeft } from "lucide-react";
import zetrixLogo from "@/assets/zetrix-logo.png";
import { usePageTimeout } from "@/hooks/use-page-timeout";
import { PageTimeoutTimer } from "@/components/PageTimeoutTimer";

interface QRScanScreenProps {
  onVerified: (visitorName: string) => void;
  onBack: () => void;
  onTimeout: () => void;
}

export const QRScanScreen = ({ onVerified, onBack, onTimeout }: QRScanScreenProps) => {
  const { formattedTime, isWarning } = usePageTimeout({
    timeoutSeconds: 60,
    warningThreshold: 10,
    onTimeout: onTimeout,
  });
  const verificationUrl = "myid://verify?request=visitor_registration&location=zetrix_tower";

  const handleSimulateScan = () => {
    onVerified("John Doe");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex flex-col p-8">
      <PageTimeoutTimer timeLeft={formattedTime} isWarning={isWarning} />
      <div className="mb-8">
        <img src={zetrixLogo} alt="Zetrix" className="h-16 object-contain" />
      </div>
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <Button
          onClick={onBack}
          variant="outline"
          size="lg"
          className="h-16 px-8 text-2xl font-medium bg-white hover:bg-red-600 hover:text-white transition-colors shadow-lg rounded-full border-2"
        >
          <ArrowLeft className="w-8 h-8 mr-3" strokeWidth={2.5} />
          Back to Main Screen
        </Button>
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

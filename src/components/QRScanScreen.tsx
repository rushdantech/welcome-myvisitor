import { Card } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";
import { Loader2 } from "lucide-react";
import zetrixLogo from "@/assets/zetrix-logo.png";

interface QRScanScreenProps {
  onVerified: (visitorName: string) => void;
}

export const QRScanScreen = ({ onVerified }: QRScanScreenProps) => {
  // Simulate verification after 3 seconds for demo
  setTimeout(() => {
    onVerified("John Doe");
  }, 3000);

  const verificationUrl = "myid://verify?request=visitor_registration&location=zetrix_tower";

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

            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin" />
              <p className="text-lg">Waiting for verification...</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

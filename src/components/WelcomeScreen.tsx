import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import zetrixLogo from "@/assets/zetrix-logo.png";
import appStoreBadges from "@/assets/app-store-badges.png";

interface WelcomeScreenProps {
  onNewVisitor: () => void;
}

export const WelcomeScreen = ({ onNewVisitor }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex flex-col p-8">
      <div className="mb-8 flex items-center justify-between">
        <img src={zetrixLogo} alt="Zetrix" className="h-16 object-contain" />
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold text-foreground">Welcome to Zetrix Tower</h1>
          <p className="text-lg text-muted-foreground mt-2">Please register your details</p>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
        {/* Left Side - New Visitor Button */}
        <div className="flex items-center justify-center">
          <Button
            onClick={onNewVisitor}
            size="lg"
            className="h-80 w-full max-w-md text-4xl font-bold bg-gradient-to-br from-accent to-accent/80 hover:from-accent hover:to-accent/90 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] rounded-3xl"
          >
            <div className="flex flex-col items-center gap-4">
              <QrCode className="w-20 h-20" />
              <span>New Visitor</span>
            </div>
          </Button>
        </div>

        {/* Right Side - Notice and QR Codes */}
        <div className="flex items-center justify-center">
          <Card className="p-8 max-w-md w-full shadow-[var(--shadow-card)] border-2">
            <div className="space-y-6">
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                <p className="text-lg font-semibold text-foreground leading-relaxed">
                  Notice: Please download the MyID SuperApp to register and download your MyKad Verifiable Credentials to enter the premises.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground text-center">
                  Scan to download MyID SuperApp
                </p>
                
                <div className="grid grid-cols-2 gap-6 items-center justify-items-center">
                  <div className="flex flex-col items-center gap-2">
                    <QRCodeSVG 
                      value="https://apps.apple.com/pl/app/myid-super-app/id6749565922"
                      size={120}
                      level="H"
                      includeMargin={true}
                    />
                    <p className="text-xs font-medium text-muted-foreground">Apple App Store</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2">
                    <QRCodeSVG 
                      value="https://play.google.com/store/apps"
                      size={120}
                      level="H"
                      includeMargin={true}
                    />
                    <p className="text-xs font-medium text-muted-foreground">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

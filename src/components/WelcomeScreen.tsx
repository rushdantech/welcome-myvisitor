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
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <img src={zetrixLogo} alt="Zetrix" className="h-24 object-contain mb-6" />
        <div>
          <h1 className="text-4xl font-bold text-foreground">Welcome to Zetrix Tower</h1>
          <p className="text-2xl text-muted-foreground mt-4">To enter the premises, please register your details.</p>
          <p className="text-xl text-muted-foreground/80 mt-2">{new Date().toLocaleString('en-MY', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })}</p>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
        {/* Left Side - New Visitor Button */}
        <div className="flex items-center justify-center">
          <Button
            onClick={onNewVisitor}
            size="lg"
            className="h-[600px] w-full max-w-xl text-4xl font-bold bg-gradient-to-br from-accent to-accent/80 hover:from-accent hover:to-accent/90 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] rounded-3xl"
          >
            <div className="flex flex-col items-center gap-6">
              <QrCode className="w-32 h-32" />
              <span>Register Visit</span>
            </div>
          </Button>
        </div>

        {/* Right Side - Notice and QR Codes */}
        <div className="flex items-center justify-center">
          <Card className="p-12 h-[600px] max-w-xl w-full shadow-[var(--shadow-card)] border-2 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
                <p className="text-2xl font-semibold text-foreground leading-relaxed">
                  Before you proceed, please download the MyID SuperApp to register and download your MyKad or Passport Verifiable Credentials
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg font-medium text-muted-foreground text-center">
                  Scan to download MyID SuperApp
                </p>
                
                <div className="grid grid-cols-2 gap-8 items-center justify-items-center">
                  <div className="flex flex-col items-center gap-3">
                    <QRCodeSVG 
                      value="https://apps.apple.com/pl/app/myid-super-app/id6749565922"
                      size={180}
                      level="H"
                      includeMargin={true}
                    />
                    <p className="text-sm font-medium text-muted-foreground">Apple App Store</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <QRCodeSVG 
                      value="https://play.google.com/store/apps"
                      size={180}
                      level="H"
                      includeMargin={true}
                    />
                    <p className="text-sm font-medium text-muted-foreground">Google Play</p>
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

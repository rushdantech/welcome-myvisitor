import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IdCard, ArrowLeft } from "lucide-react";
import zetrixLogo from "@/assets/zetrix-logo.png";

interface SelectIDTypeProps {
  onIDTypeSelect: (idType: "mykad" | "passport") => void;
  onBack: () => void;
}

export const SelectIDType = ({ onIDTypeSelect, onBack }: SelectIDTypeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex flex-col p-8">
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
        <Card className="p-12 max-w-4xl w-full shadow-[var(--shadow-card)] border-2">
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <IdCard className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-3">Select ID Type</h1>
              <p className="text-xl text-muted-foreground">
                Please choose your identification document type
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Button
                onClick={() => onIDTypeSelect("mykad")}
                size="lg"
                className="h-48 text-3xl font-semibold bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] rounded-xl flex flex-col items-center justify-center gap-4"
              >
                <IdCard className="w-16 h-16" />
                <span>MyKad</span>
              </Button>

              <Button
                onClick={() => onIDTypeSelect("passport")}
                size="lg"
                className="h-48 text-3xl font-semibold bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] rounded-xl flex flex-col items-center justify-center gap-4"
              >
                <IdCard className="w-16 h-16" />
                <span>Passport</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};


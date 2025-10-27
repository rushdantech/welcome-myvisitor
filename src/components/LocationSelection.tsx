import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import zetrixLogo from "@/assets/zetrix-logo.png";

interface LocationSelectionProps {
  onLocationSelect: (location: string) => void;
}

const locations = [
  { id: "customer-service", name: "Customer Service" },
  { id: "level-43a", name: "Level 43A" },
  { id: "level-46", name: "Level 46" },
];

export const LocationSelection = ({ onLocationSelect }: LocationSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex flex-col p-8">
      <div className="mb-8">
        <img src={zetrixLogo} alt="Zetrix" className="h-16 object-contain" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Card className="p-12 max-w-3xl w-full shadow-[var(--shadow-card)] border-2">
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-3">Select Your Destination</h1>
              <p className="text-xl text-muted-foreground">
                Where would you like to go?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {locations.map((location) => (
                <Button
                  key={location.id}
                  onClick={() => onLocationSelect(location.name)}
                  size="lg"
                  className="h-32 text-2xl font-semibold bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] rounded-xl"
                >
                  {location.name}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, ArrowLeft } from "lucide-react";
import zetrixLogo from "@/assets/zetrix-logo.png";
import { Numpad } from "@/components/Numpad";
import { locations } from "@/lib/locations";
import { usePageTimeout } from "@/hooks/use-page-timeout";
import { PageTimeoutTimer } from "@/components/PageTimeoutTimer";

interface LocationSelectionProps {
  onLocationSelect: (data: {
    location: string;
    purpose: string;
    contactNumber: string;
  }) => void;
  onBack: () => void;
  onTimeout: () => void;
}

const purposes = [
  { value: "meeting", label: "Meeting" },
  { value: "training", label: "Training" },
  { value: "delivery", label: "Delivery" },
  { value: "interview", label: "Interview" },
  { value: "immigration", label: "Immigration – Customer Service" },
  { value: "jpj", label: "JPJ – Customer service" },
  { value: "remittance", label: "Remittance" },
];

export const LocationSelection = ({ onLocationSelect, onBack, onTimeout }: LocationSelectionProps) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const { formattedTime, isWarning } = usePageTimeout({
    timeoutSeconds: 60,
    warningThreshold: 10,
    onTimeout: onTimeout,
  });

  const handleContinue = () => {
    if (selectedLocation && selectedPurpose && contactNumber) {
      onLocationSelect({
        location: selectedLocation,
        purpose: selectedPurpose,
        contactNumber: contactNumber,
      });
    }
  };

  const isFormValid = selectedLocation && selectedPurpose && contactNumber;

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

      <div className="flex-1 flex items-center justify-center py-8">
        <Card className="p-12 max-w-6xl w-full shadow-[var(--shadow-card)] border-2">
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-3">Visitor Information</h1>
              <p className="text-xl text-muted-foreground">
                Please provide your visit details
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form Fields */}
              <div className="space-y-6">
                {/* Location Dropdown */}
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-2xl font-semibold">
                    Select Location
                  </Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger
                      id="location"
                      className="h-16 text-xl border-2"
                    >
                      <SelectValue placeholder="Choose a location" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[400px]">
                      {locations.map((location) => (
                        <SelectItem
                          key={location.value}
                          value={location.value}
                          className="text-lg py-4 min-h-[3.5rem]"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Purpose Dropdown */}
                <div className="space-y-3">
                  <Label htmlFor="purpose" className="text-2xl font-semibold">
                    Purpose of Visit
                  </Label>
                  <Select value={selectedPurpose} onValueChange={setSelectedPurpose}>
                    <SelectTrigger
                      id="purpose"
                      className="h-16 text-xl border-2"
                    >
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[400px]">
                      {purposes.map((purpose) => (
                        <SelectItem
                          key={purpose.value}
                          value={purpose.value}
                          className="text-lg py-4 min-h-[3.5rem]"
                        >
                          {purpose.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column - Numpad */}
              <div className="space-y-3">
                <Label className="text-2xl font-semibold">
                  Contact Number
                </Label>
                <Numpad value={contactNumber} onChange={setContactNumber} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <Button
                onClick={onBack}
                variant="outline"
                size="lg"
                className="h-20 text-2xl font-semibold bg-white hover:bg-red-600 hover:text-white transition-colors shadow-lg border-2"
              >
                <ArrowLeft className="w-8 h-8 mr-3" strokeWidth={2.5} />
                Back to Main Page
              </Button>
              <Button
                onClick={handleContinue}
                disabled={!isFormValid}
                size="lg"
                className="h-20 text-2xl font-semibold bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Continue
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

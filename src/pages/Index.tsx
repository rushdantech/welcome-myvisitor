import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { SelectIDType } from "@/components/SelectIDType";
import { QRScanScreen } from "@/components/QRScanScreen";
import { LocationSelection } from "@/components/LocationSelection";
import { WelcomeMessage } from "@/components/WelcomeMessage";

type Screen = "welcome" | "select-id-type" | "qr-scan" | "location" | "thank-you";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [visitorName, setVisitorName] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedIDType, setSelectedIDType] = useState<"mykad" | "passport" | "">("");

  const handleNewVisitor = () => {
    setCurrentScreen("select-id-type");
  };

  const handleIDTypeSelect = (idType: "mykad" | "passport") => {
    setSelectedIDType(idType);
    setCurrentScreen("qr-scan");
  };

  const handleVerified = (name: string) => {
    setVisitorName(name);
    setCurrentScreen("location");
  };

  const handleLocationSelect = (data: {
    location: string;
    purpose: string;
    contactNumber: string;
  }) => {
    setSelectedLocation(data.location);
    setSelectedPurpose(data.purpose);
    setContactNumber(data.contactNumber);
    setCurrentScreen("thank-you");
  };

  const handleComplete = () => {
    setCurrentScreen("welcome");
    setVisitorName("");
    setSelectedLocation("");
    setSelectedPurpose("");
    setContactNumber("");
    setSelectedIDType("");
  };

  return (
    <>
      {currentScreen === "welcome" && (
        <WelcomeScreen onNewVisitor={handleNewVisitor} />
      )}
      {currentScreen === "select-id-type" && (
        <SelectIDType 
          onIDTypeSelect={handleIDTypeSelect}
          onBack={() => setCurrentScreen("welcome")}
        />
      )}
      {currentScreen === "qr-scan" && (
        <QRScanScreen 
          onVerified={handleVerified}
          onBack={() => setCurrentScreen("select-id-type")}
        />
      )}
      {currentScreen === "location" && (
        <LocationSelection 
          onLocationSelect={handleLocationSelect}
          onBack={() => setCurrentScreen("qr-scan")}
        />
      )}
      {currentScreen === "thank-you" && (
        <WelcomeMessage
          visitorName={visitorName}
          location={selectedLocation}
          onComplete={handleComplete}
        />
      )}
    </>
  );
};

export default Index;

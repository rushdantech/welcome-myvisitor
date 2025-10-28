import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QRScanScreen } from "@/components/QRScanScreen";
import { LocationSelection } from "@/components/LocationSelection";
import { WelcomeMessage } from "@/components/WelcomeMessage";

type Screen = "welcome" | "qr-scan" | "location" | "thank-you";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [visitorName, setVisitorName] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleNewVisitor = () => {
    setCurrentScreen("qr-scan");
  };

  const handleVerified = (name: string) => {
    setVisitorName(name);
    setCurrentScreen("location");
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setCurrentScreen("thank-you");
  };

  const handleComplete = () => {
    setCurrentScreen("welcome");
    setVisitorName("");
    setSelectedLocation("");
  };

  return (
    <>
      {currentScreen === "welcome" && (
        <WelcomeScreen onNewVisitor={handleNewVisitor} />
      )}
      {currentScreen === "qr-scan" && (
        <QRScanScreen 
          onVerified={handleVerified}
          onBack={() => setCurrentScreen("welcome")}
        />
      )}
      {currentScreen === "location" && (
        <LocationSelection onLocationSelect={handleLocationSelect} />
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

import { useState, useEffect } from "react";

interface UsePageTimeoutOptions {
  timeoutSeconds?: number;
  warningThreshold?: number;
  onTimeout: () => void;
}

export const usePageTimeout = ({
  timeoutSeconds = 60,
  warningThreshold = 10,
  onTimeout,
}: UsePageTimeoutOptions) => {
  const [timeLeft, setTimeLeft] = useState(timeoutSeconds);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        
        // Check if we're in warning zone (last 10 seconds)
        if (newTime <= warningThreshold && newTime > 0) {
          setIsWarning(true);
        }

        // Timeout reached
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeout, warningThreshold]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    isWarning,
  };
};


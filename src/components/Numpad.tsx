import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";

interface NumpadProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export const Numpad = ({ value, onChange, maxLength = 15 }: NumpadProps) => {
  const handleNumberClick = (num: string) => {
    if (value.length < maxLength) {
      onChange(value + num);
    }
  };

  const handleDelete = () => {
    onChange(value.slice(0, -1));
  };

  const handleClear = () => {
    onChange("");
  };

  const numbers = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["", "0", ""],
  ];

  return (
    <div className="space-y-4">
      {/* Display */}
      <div className="bg-muted rounded-lg p-6 text-center">
        <div className="text-4xl font-mono font-semibold text-foreground min-h-[3rem] flex items-center justify-center">
          {value || <span className="text-muted-foreground">Enter contact number</span>}
        </div>
      </div>

      {/* Numpad */}
      <div className="grid grid-cols-3 gap-3">
        {numbers.map((row, rowIndex) =>
          row.map((num, colIndex) => {
            if (num === "") {
              return <div key={`${rowIndex}-${colIndex}`} />;
            }
            return (
              <Button
                key={num}
                onClick={() => handleNumberClick(num)}
                size="lg"
                className="h-20 text-3xl font-semibold bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] rounded-xl"
              >
                {num}
              </Button>
            );
          })
        )}
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={handleClear}
          variant="outline"
          size="lg"
          className="h-16 text-xl font-semibold"
        >
          Clear
        </Button>
        <Button
          onClick={handleDelete}
          variant="outline"
          size="lg"
          className="h-16 text-xl font-semibold"
        >
          <Delete className="w-6 h-6 mr-2" />
          Delete
        </Button>
      </div>
    </div>
  );
};


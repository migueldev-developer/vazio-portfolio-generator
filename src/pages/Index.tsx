
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, X, Divide, Equal } from "lucide-react";

const Index = () => {
  const [display, setDisplay] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<string>('');
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  const clearDisplay = () => {
    setDisplay('0');
    setPreviousValue('');
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === '') {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = parseFloat(previousValue);
      let newValue = 0;
      
      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case 'x':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          if (inputValue === 0) {
            clearDisplay();
            return;
          }
          newValue = currentValue / inputValue;
          break;
      }

      setPreviousValue(String(newValue));
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperator);
  };

  const performCalculation = () => {
    if (!operation || previousValue === '') return;
    
    const inputValue = parseFloat(display);
    const currentValue = parseFloat(previousValue);
    let newValue = 0;
    
    switch (operation) {
      case '+':
        newValue = currentValue + inputValue;
        break;
      case '-':
        newValue = currentValue - inputValue;
        break;
      case 'x':
        newValue = currentValue * inputValue;
        break;
      case '÷':
        if (inputValue === 0) {
          clearDisplay();
          return;
        }
        newValue = currentValue / inputValue;
        break;
    }

    setDisplay(String(newValue));
    setPreviousValue('');
    setOperation(null);
    setWaitingForOperand(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] to-[#121212] p-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-lg bg-black/30 border border-[#8B5CF6]/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.5)] p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#8B5CF6] font-mono tracking-wider">CYBER CALCULATOR</h1>
          
          <div className="mb-4 relative">
            <Input
              className="h-16 text-right text-3xl font-mono bg-[#221F26] border-[#8B5CF6]/50 text-[#8B5CF6] focus:border-[#8B5CF6] shadow-[inset_0_0_8px_rgba(139,92,246,0.3)] pr-4"
              value={display}
              readOnly
            />
            <div className="absolute top-2 left-3 text-[#8B5CF6]/50 text-xs">
              {operation ? `${previousValue} ${operation}` : ''}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {/* Clear and backspace */}
            <Button
              variant="destructive"
              className="col-span-2 h-14 text-lg font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              onClick={clearDisplay}
            >
              AC
            </Button>
            <Button
              variant="outline"
              className="h-14 text-lg font-semibold border-[#8B5CF6]/50 text-[#8B5CF6] bg-[#221F26]/70 hover:bg-[#8B5CF6]/20"
              onClick={() => setDisplay(display.length > 1 ? display.slice(0, -1) : '0')}
            >
              DEL
            </Button>
            <Button
              variant="outline"
              className="h-14 flex items-center justify-center border-[#8B5CF6]/50 text-[#8B5CF6] bg-[#221F26]/70 hover:bg-[#8B5CF6]/20"
              onClick={() => handleOperator('÷')}
            >
              <Divide className="h-5 w-5" />
            </Button>

            {/* Numbers */}
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(number => (
              <Button
                key={number}
                className="h-14 text-xl font-semibold bg-[#2D2A3B] hover:bg-[#3D3A4B] text-white/90 shadow-[0_0_5px_rgba(139,92,246,0.3)] transition-all duration-150 hover:translate-y-[-2px]"
                onClick={() => inputDigit(String(number))}
              >
                {number}
              </Button>
            ))}

            {/* Operators */}
            <Button
              variant="outline"
              className="h-14 flex items-center justify-center border-[#8B5CF6]/50 text-[#8B5CF6] bg-[#221F26]/70 hover:bg-[#8B5CF6]/20"
              onClick={() => handleOperator('x')}
            >
              <X className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="h-14 flex items-center justify-center border-[#8B5CF6]/50 text-[#8B5CF6] bg-[#221F26]/70 hover:bg-[#8B5CF6]/20"
              onClick={() => handleOperator('-')}
            >
              <Minus className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="h-14 flex items-center justify-center border-[#8B5CF6]/50 text-[#8B5CF6] bg-[#221F26]/70 hover:bg-[#8B5CF6]/20"
              onClick={() => handleOperator('+')}
            >
              <Plus className="h-5 w-5" />
            </Button>

            {/* Zero, decimal, equals */}
            <Button
              className="h-14 text-xl font-semibold bg-[#2D2A3B] hover:bg-[#3D3A4B] text-white/90 col-span-2 shadow-[0_0_5px_rgba(139,92,246,0.3)] transition-all duration-150 hover:translate-y-[-2px]"
              onClick={() => inputDigit('0')}
            >
              0
            </Button>
            <Button
              className="h-14 text-xl font-semibold bg-[#2D2A3B] hover:bg-[#3D3A4B] text-white/90 shadow-[0_0_5px_rgba(139,92,246,0.3)] transition-all duration-150 hover:translate-y-[-2px]"
              onClick={inputDecimal}
            >
              .
            </Button>
            <Button
              className="h-14 flex items-center justify-center bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all duration-150 hover:translate-y-[-2px]"
              onClick={performCalculation}
            >
              <Equal className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-[#8B5CF6]/50">© 2025 Cyber Calculator</div>
      </div>
    </div>
  );
};

export default Index;

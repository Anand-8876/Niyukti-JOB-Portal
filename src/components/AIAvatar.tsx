import React, { useState, useEffect } from 'react';
import { Bot, Volume2 } from 'lucide-react';

interface AIAvatarProps {
  isSpeaking: boolean;
  className?: string;
}

export default function AIAvatar({ isSpeaking, className = '' }: AIAvatarProps) {
  const [pulseScale, setPulseScale] = useState(1);

  useEffect(() => {
    if (isSpeaking) {
      const interval = setInterval(() => {
        setPulseScale(prev => prev === 1 ? 1.1 : 1);
      }, 500);
      return () => clearInterval(interval);
    } else {
      setPulseScale(1);
    }
  }, [isSpeaking]);

  return (
    <div className={`relative ${className}`}>
      {/* Main avatar container */}
      <div 
        className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 transition-all duration-300 ${
          isSpeaking ? 'shadow-2xl shadow-purple-500/50' : 'shadow-lg shadow-purple-500/20'
        }`}
        style={{ transform: `scale(${pulseScale})` }}
      >
        {/* Inner circle */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 animate-pulse"></div>
          
          {/* AI Icon */}
          <Bot className="w-8 h-8 text-purple-300 z-10" />
          
          {/* Speaking indicator */}
          {isSpeaking && (
            <div className="absolute bottom-1 right-1 z-20">
              <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />
            </div>
          )}
        </div>
      </div>

      {/* Ripple effect when speaking */}
      {isSpeaking && (
        <>
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-2 border-pink-400/30 animate-ping animation-delay-200"></div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping animation-delay-500"></div>
        </>
      )}
    </div>
  );
}
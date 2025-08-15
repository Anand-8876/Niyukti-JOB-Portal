import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface SpeechControlsProps {
  onSpeechResult: (text: string) => void;
  onSpeakText: (text: string) => void;
  isListening: boolean;
  setIsListening: (listening: boolean) => void;
  isSpeaking: boolean;
  setIsSpeaking: (speaking: boolean) => void;
}

export default function SpeechControls({
  onSpeechResult,
  onSpeakText,
  isListening,
  setIsListening,
  isSpeaking,
  setIsSpeaking
}: SpeechControlsProps) {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [synthesis, setSynthesis] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          onSpeechResult(finalTranscript.trim());
          setIsListening(false);
        }
      };

      recognitionInstance.onerror = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }

    if ('speechSynthesis' in window) {
      setSynthesis(window.speechSynthesis);
    }
  }, [onSpeechResult, setIsListening]);

  const startListening = () => {
    if (recognition && !isListening) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      setIsListening(false);
      recognition.stop();
    }
  };

  const speakText = (text: string) => {
    if (synthesis && !isSpeaking) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
      };
      
      synthesis.speak(utterance);
      onSpeakText(text);
    }
  };

  const stopSpeaking = () => {
    if (synthesis && isSpeaking) {
      synthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Speech Recognition Control */}
      <button
        onClick={isListening ? stopListening : startListening}
        className={`relative p-3 rounded-full transition-all duration-300 ${
          isListening
            ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25'
            : 'bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/25'
        }`}
        title={isListening ? 'Stop listening' : 'Start voice input'}
      >
        {isListening ? (
          <MicOff className="w-5 h-5 text-white" />
        ) : (
          <Mic className="w-5 h-5 text-white" />
        )}
        
        {isListening && (
          <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></div>
        )}
      </button>

      {/* Text-to-Speech Control */}
      <button
        onClick={isSpeaking ? stopSpeaking : () => {}}
        className={`p-3 rounded-full transition-all duration-300 ${
          isSpeaking
            ? 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25'
            : 'bg-gray-600 hover:bg-gray-700 shadow-lg shadow-gray-500/25'
        }`}
        title={isSpeaking ? 'Stop speaking' : 'AI is ready to speak'}
      >
        {isSpeaking ? (
          <Volume2 className="w-5 h-5 text-white animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Status indicator */}
      <div className="text-sm text-gray-300">
        {isListening ? (
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Listening...
          </span>
        ) : isSpeaking ? (
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            AI Speaking...
          </span>
        ) : (
          <span className="text-gray-400">Ready</span>
        )}
      </div>
    </div>
  );
}
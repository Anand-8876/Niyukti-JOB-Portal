import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useInterview } from '../contexts/InterviewContext';
import AIAvatar from '../components/AIAvatar';
import SpeechControls from '../components/SpeechControls';
import { ArrowRight, Clock, Mic } from 'lucide-react';

export default function Interview() {
  const { id } = useParams();
  const { currentInterview, submitAnswer, nextQuestion, finishInterview } = useInterview();
  const navigate = useNavigate();
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (currentInterview) {
      const duration = currentInterview.duration * 60 * 1000; // Convert to milliseconds
      const elapsed = Date.now() - (currentInterview.startTime || Date.now());
      const remaining = Math.max(0, duration - elapsed);
      setTimeRemaining(remaining);

      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1000) {
            handleFinishInterview();
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentInterview]);

  useEffect(() => {
    // Auto-speak the first question when interview starts
    if (currentInterview && currentInterview.currentQuestionIndex === 0 && !isSpeaking) {
      const currentQuestion = currentInterview.questions[currentInterview.currentQuestionIndex];
      if (currentQuestion) {
        setTimeout(() => {
          handleSpeakQuestion(currentQuestion.text);
        }, 1000);
      }
    }
  }, [currentInterview]);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSpeakQuestion = (text: string) => {
    setIsSpeaking(true);
    // The actual TTS is handled by SpeechControls component
  };

  const handleSpeechResult = (text: string) => {
    setCurrentAnswer(text);
  };

  const handleSubmitAnswer = () => {
    if (!currentAnswer.trim()) return;

    submitAnswer(currentAnswer);
    setCurrentAnswer('');

    // Check if this was the last question
    if (currentInterview && currentInterview.currentQuestionIndex >= currentInterview.questions.length - 1) {
      handleFinishInterview();
    } else {
      nextQuestion();
      // Auto-speak next question
      setTimeout(() => {
        if (currentInterview) {
          const nextQuestionIndex = currentInterview.currentQuestionIndex + 1;
          const nextQ = currentInterview.questions[nextQuestionIndex];
          if (nextQ) {
            handleSpeakQuestion(nextQ.text);
          }
        }
      }, 1000);
    }
  };

  const handleFinishInterview = () => {
    finishInterview();
    if (id) {
      navigate(`/results/${id}`);
    }
  };

  if (!currentInterview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Interview not found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = currentInterview.questions[currentInterview.currentQuestionIndex];
  const progress = ((currentInterview.currentQuestionIndex) / currentInterview.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white capitalize">
              {currentInterview.type} Interview
            </h1>
            <div className="flex items-center gap-2 text-purple-400">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
            </div>
          </div>
          <button
            onClick={handleFinishInterview}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
          >
            End Interview
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">
              Question {currentInterview.currentQuestionIndex + 1} of {currentInterview.questions.length}
            </span>
            <span className="text-gray-300">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* AI Interviewer Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-8">
          <div className="flex items-start gap-6">
            <AIAvatar isSpeaking={isSpeaking} className="flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-4">AI Interviewer</h2>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="text-lg text-gray-100 leading-relaxed">
                  {currentQuestion?.text}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    currentQuestion?.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                    currentQuestion?.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {currentQuestion?.difficulty?.toUpperCase()}
                  </span>
                  <span className="text-purple-400 capitalize">{currentQuestion?.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Answer Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Your Answer</h2>
          
          {/* Speech Controls */}
          <div className="mb-6">
            <SpeechControls
              onSpeechResult={handleSpeechResult}
              onSpeakText={handleSpeakQuestion}
              isListening={isListening}
              setIsListening={setIsListening}
              isSpeaking={isSpeaking}
              setIsSpeaking={setIsSpeaking}
            />
          </div>

          {/* Text Area */}
          <textarea
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder="Type your answer here or use voice input..."
            className="w-full h-40 px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300"
          />

          {/* Submit Button */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2 text-gray-400">
              <Mic className="w-4 h-4" />
              <span className="text-sm">Use voice or type your response</span>
            </div>
            <button
              onClick={handleSubmitAnswer}
              disabled={!currentAnswer.trim()}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-50 flex items-center gap-2"
            >
              {currentInterview.currentQuestionIndex >= currentInterview.questions.length - 1 ? 'Finish Interview' : 'Next Question'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
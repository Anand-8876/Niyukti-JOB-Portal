import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInterview } from '../contexts/InterviewContext';
import { ArrowLeft, Clock, Brain, Users, Briefcase } from 'lucide-react';

export default function InterviewSetup() {
  const [selectedType, setSelectedType] = useState<'technical' | 'hr' | 'behavioral'>('technical');
  const [selectedDuration, setSelectedDuration] = useState(30);
  const navigate = useNavigate();
  const { startInterview } = useInterview();

  const interviewTypes = [
    {
      id: 'technical' as const,
      title: 'Technical Interview',
      description: 'Test your programming skills, algorithms, and technical knowledge',
      icon: Brain,
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 'hr' as const,
      title: 'HR Interview',
      description: 'Focus on soft skills, company culture fit, and career goals',
      icon: Users,
      color: 'from-green-500 to-blue-500',
    },
    {
      id: 'behavioral' as const,
      title: 'Behavioral Interview',
      description: 'Situational questions about past experiences and problem-solving',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const durations = [15, 30, 45, 60];

  const handleStartInterview = () => {
    const interviewId = startInterview(selectedType, selectedDuration);
    navigate(`/interview/${interviewId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold text-white">Interview Setup</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-8">
        {/* Interview Type Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Choose Interview Type</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {interviewTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedType === type.id
                      ? 'border-purple-400 bg-white/20 transform scale-105'
                      : 'border-white/20 bg-white/10 hover:bg-white/15'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Select Duration</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedDuration === duration
                    ? 'border-purple-400 bg-white/20'
                    : 'border-white/20 bg-white/10 hover:bg-white/15'
                }`}
              >
                <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">{duration} minutes</p>
              </button>
            ))}
          </div>
        </div>

        {/* Interview Preview */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Interview Preview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Interview Type:</span>
              <span className="text-white font-semibold">
                {interviewTypes.find(t => t.id === selectedType)?.title}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Duration:</span>
              <span className="text-white font-semibold">{selectedDuration} minutes</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Questions:</span>
              <span className="text-white font-semibold">~{Math.ceil(selectedDuration / 10)} questions</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Voice Support:</span>
              <span className="text-green-400 font-semibold">Enabled</span>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={handleStartInterview}
            className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/25"
          >
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
}
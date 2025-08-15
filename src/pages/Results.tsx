import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useInterview } from '../contexts/InterviewContext';
import { Trophy, Clock, Target, TrendingUp, Download, ArrowLeft } from 'lucide-react';

interface InterviewData {
  id: string;
  type: 'technical' | 'hr' | 'behavioral';
  duration: number;
  questions: any[];
  answers: { questionId: string; answer: string; timestamp: number }[];
  score?: number;
  feedback?: string;
  startTime?: number;
  endTime?: number;
}

export default function Results() {
  const { id } = useParams();
  const { getInterviewResults } = useInterview();
  const navigate = useNavigate();
  const [interviewData, setInterviewData] = useState<InterviewData | null>(null);

  useEffect(() => {
    if (id) {
      const data = getInterviewResults(id);
      setInterviewData(data);
    }
  }, [id, getInterviewResults]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-500';
    if (score >= 80) return 'from-blue-500 to-purple-500';
    if (score >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    return 'Needs Improvement';
  };

  const generatePDFReport = () => {
    // Mock PDF generation
    alert('PDF report would be generated here in a real implementation');
  };

  if (!interviewData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Results not found</h2>
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

  const totalDuration = interviewData.endTime && interviewData.startTime 
    ? Math.round((interviewData.endTime - interviewData.startTime) / 60000) 
    : interviewData.duration;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold text-white">Interview Results</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 pb-8">
        {/* Score Overview */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${getScoreColor(interviewData.score || 0)} mb-4`}>
              <span className="text-4xl font-bold text-white">{interviewData.score || 0}%</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {getScoreLabel(interviewData.score || 0)}
            </h2>
            <p className="text-gray-300 capitalize">
              {interviewData.type} Interview Completed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-white">{totalDuration} min</p>
              <p className="text-gray-400">Duration</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white">{interviewData.questions.length}</p>
              <p className="text-gray-400">Questions</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-2xl font-bold text-white">{interviewData.answers.length}</p>
              <p className="text-gray-400">Answered</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Feedback Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              AI Feedback
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-gray-100 leading-relaxed">
                {interviewData.feedback || 'Great job on completing the interview! Your responses showed good understanding and communication skills.'}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Communication</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-20 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-white font-semibold">85%</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Technical Knowledge</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-18 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-white font-semibold">78%</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Problem Solving</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className="w-22 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-white font-semibold">92%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Question Review */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Question Review</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {interviewData.questions.map((question, index) => {
                const answer = interviewData.answers.find(a => a.questionId === question.id);
                return (
                  <div key={question.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-100 text-sm">{question.text}</p>
                    </div>
                    {answer && (
                      <div className="ml-11">
                        <p className="text-gray-300 text-sm italic">
                          "{answer.answer.substring(0, 100)}..."
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate('/interview-setup')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Take Another Interview
          </button>
          <button
            onClick={generatePDFReport}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}
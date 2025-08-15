import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Bot, Play, Clock, Trophy, TrendingUp, LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const recentInterviews = [
    { id: '1', type: 'Technical', score: 85, date: '2025-01-09', duration: '45 min' },
    { id: '2', type: 'HR', score: 92, date: '2025-01-08', duration: '30 min' },
    { id: '3', type: 'Behavioral', score: 78, date: '2025-01-07', duration: '35 min' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">InterviewAI</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-10 h-10 rounded-full border-2 border-purple-400"
              />
              <div>
                <p className="text-white font-medium">{user?.name}</p>
                <p className="text-gray-400 text-sm capitalize">{user?.role}</p>
              </div>
            </div>
            {user?.role === 'admin' && (
              <button
                onClick={() => navigate('/admin')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
              >
                Admin Panel
              </button>
            )}
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-300 text-lg">
            Ready to practice your interview skills and get better feedback?
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">85</p>
                <p className="text-gray-400">Average Score</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-gray-400">Interviews Taken</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">+15%</p>
                <p className="text-gray-400">Improvement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Start New Interview */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Start New Interview</h2>
            <p className="text-gray-300 mb-6">
              Choose your interview type and begin practicing with our AI interviewer.
            </p>
            <button
              onClick={() => navigate('/interview-setup')}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              Begin Interview
            </button>
          </div>

          {/* Recent Interviews */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Interviews</h2>
            <div className="space-y-4">
              {recentInterviews.map((interview) => (
                <div
                  key={interview.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/results/${interview.id}`)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-semibold">{interview.type} Interview</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                        <span>{interview.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {interview.duration}
                        </span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      interview.score >= 90 ? 'bg-green-500/20 text-green-400' :
                      interview.score >= 80 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {interview.score}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
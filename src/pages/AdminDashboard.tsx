import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft, Users, FileText, BarChart3, Settings, Eye } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const mockCandidates = [
    { id: '1', name: 'John Smith', email: 'john@example.com', interviews: 3, avgScore: 85, lastActive: '2025-01-09' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', interviews: 5, avgScore: 92, lastActive: '2025-01-08' },
    { id: '3', name: 'Mike Wilson', email: 'mike@example.com', interviews: 2, avgScore: 78, lastActive: '2025-01-07' },
  ];

  const mockInterviews = [
    { id: '1', candidate: 'John Smith', type: 'Technical', score: 85, date: '2025-01-09', status: 'Completed' },
    { id: '2', candidate: 'Sarah Johnson', type: 'HR', score: 92, date: '2025-01-08', status: 'Completed' },
    { id: '3', candidate: 'Mike Wilson', type: 'Behavioral', score: 78, date: '2025-01-07', status: 'Completed' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'interviews', label: 'Interviews', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-10 h-10 rounded-full border-2 border-purple-400"
            />
            <span className="text-white font-medium">{user?.name}</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Total Candidates</h3>
                <p className="text-3xl font-bold text-purple-400">1,234</p>
                <p className="text-green-400 text-sm">+12% from last month</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Interviews Completed</h3>
                <p className="text-3xl font-bold text-blue-400">5,678</p>
                <p className="text-green-400 text-sm">+8% from last month</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Average Score</h3>
                <p className="text-3xl font-bold text-green-400">82.5%</p>
                <p className="text-yellow-400 text-sm">+2.1% from last month</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Active Today</h3>
                <p className="text-3xl font-bold text-pink-400">156</p>
                <p className="text-green-400 text-sm">+5% from yesterday</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Recent Interview Activity</h3>
              <div className="space-y-4">
                {mockInterviews.slice(0, 5).map((interview) => (
                  <div key={interview.id} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <div>
                      <p className="text-white font-semibold">{interview.candidate}</p>
                      <p className="text-gray-400 text-sm">{interview.type} Interview • {interview.date}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      interview.score >= 90 ? 'bg-green-500/20 text-green-400' :
                      interview.score >= 80 ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {interview.score}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Candidates Tab */}
        {activeTab === 'candidates' && (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Candidate Management</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-gray-300 font-semibold py-3">Name</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Email</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Interviews</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Avg Score</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Last Active</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCandidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b border-white/10">
                      <td className="py-4 text-white">{candidate.name}</td>
                      <td className="py-4 text-gray-300">{candidate.email}</td>
                      <td className="py-4 text-white">{candidate.interviews}</td>
                      <td className="py-4">
                        <span className={`font-semibold ${
                          candidate.avgScore >= 85 ? 'text-green-400' :
                          candidate.avgScore >= 75 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {candidate.avgScore}%
                        </span>
                      </td>
                      <td className="py-4 text-gray-300">{candidate.lastActive}</td>
                      <td className="py-4">
                        <button className="p-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Interviews Tab */}
        {activeTab === 'interviews' && (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Interview History</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-gray-300 font-semibold py-3">Candidate</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Type</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Score</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Date</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Status</th>
                    <th className="text-left text-gray-300 font-semibold py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockInterviews.map((interview) => (
                    <tr key={interview.id} className="border-b border-white/10">
                      <td className="py-4 text-white">{interview.candidate}</td>
                      <td className="py-4 text-gray-300">{interview.type}</td>
                      <td className="py-4">
                        <span className={`font-semibold ${
                          interview.score >= 85 ? 'text-green-400' :
                          interview.score >= 75 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {interview.score}%
                        </span>
                      </td>
                      <td className="py-4 text-gray-300">{interview.date}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                          {interview.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="p-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">System Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Interview Configuration</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Default Interview Duration</span>
                    <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white">
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Enable Voice Recognition</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Auto-generate Questions</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
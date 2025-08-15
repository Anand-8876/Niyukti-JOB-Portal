import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Brain, Mic, Trophy, Star, ArrowRight } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">InterviewAI</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Master Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Interview Skills </span>
            with AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Practice with our advanced AI interviewer that adapts to your responses, 
            provides real-time feedback, and helps you ace your next job interview.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center gap-2 justify-center"
            >
              Start Interview <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full font-semibold transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse animation-delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Our AI Interview Platform?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Questions</h3>
              <p className="text-gray-300 leading-relaxed">
                Our advanced AI generates dynamic interview questions based on your responses, 
                ensuring a personalized and challenging experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Voice Interaction</h3>
              <p className="text-gray-300 leading-relaxed">
                Practice with natural speech using our text-to-speech and speech-to-text 
                technology for a realistic interview experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Feedback</h3>
              <p className="text-gray-300 leading-relaxed">
                Get detailed performance analysis, scoring, and personalized recommendations 
                to improve your interview skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Trusted by Professionals</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                50K+
              </div>
              <p className="text-gray-300 text-lg">Interviews Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                95%
              </div>
              <p className="text-gray-300 text-lg">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text mb-2">
                4.9/5
              </div>
              <p className="text-gray-300 text-lg flex items-center justify-center gap-1">
                User Rating <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have improved their interview skills with our AI platform.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/25 text-lg"
          >
            Start Your Free Interview
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bot className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold text-white">InterviewAI</span>
          </div>
          <p className="text-gray-400">
            © 2025 InterviewAI. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
}
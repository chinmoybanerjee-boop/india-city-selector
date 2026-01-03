import React, { useState } from 'react';
import { Search, Home, Heart, Wifi, GraduationCap, Briefcase, Car, Shield, Wind, DollarSign, MapPin, Building2, Droplets, Users, AlertCircle, Star, TrendingUp, Mail, MessageSquare } from 'lucide-react';

const citiesData = [
  {
    id: 1,
    name: "Bangalore",
    state: "Karnataka",
    costOfLiving: 75,
    pollution: 65,
    healthcare: 90,
    safety: 80,
    internet: 95,
    education: 92,
    jobMarket: 95,
    traffic: 40,
    waterAvailability: 55,
    overallScore: 79,
    socialVibe: "Liberal",
    description: "IT hub with excellent job opportunities and pleasant weather"
  },
  {
    id: 2,
    name: "Pune",
    state: "Maharashtra",
    costOfLiving: 70,
    pollution: 60,
    healthcare: 85,
    safety: 85,
    internet: 90,
    education: 88,
    jobMarket: 85,
    traffic: 55,
    waterAvailability: 70,
    overallScore: 77,
    socialVibe: "Moderate",
    description: "Cultural capital with growing IT sector"
  },
  {
    id: 3,
    name: "Hyderabad",
    state: "Telangana",
    costOfLiving: 65,
    pollution: 58,
    healthcare: 88,
    safety: 82,
    internet: 92,
    education: 85,
    jobMarket: 88,
    traffic: 60,
    waterAvailability: 75,
    overallScore: 77,
    socialVibe: "Moderate",
    description: "Emerging tech hub with affordable living"
  }
];

const metrics = [
  { key: 'costOfLiving', label: 'Cost of Living', icon: DollarSign, lower: true },
  { key: 'pollution', label: 'Pollution', icon: Wind, lower: true },
  { key: 'healthcare', label: 'Healthcare', icon: Heart },
  { key: 'safety', label: 'Safety', icon: Shield },
  { key: 'internet', label: 'Internet', icon: Wifi },
  { key: 'education', label: 'Education', icon: GraduationCap },
  { key: 'jobMarket', label: 'Job Market', icon: Briefcase },
  { key: 'traffic', label: 'Traffic', icon: Car, lower: true }
];

export default function IndiaCitySelector() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredCities = citiesData.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScoreColor = (score, lower = false) => {
    const adjustedScore = lower ? 100 - score : score;
    if (adjustedScore >= 80) return 'bg-green-500';
    if (adjustedScore >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const handleSubmitFeedback = () => {
    if (userEmail && feedback) {
      console.log('Feedback:', { userEmail, feedback });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setUserEmail('');
        setFeedback('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Return to India</h1>
                <p className="text-sm text-gray-600">Find your perfect city to settle back home</p>
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-4 py-4 text-lg border-2 border-indigo-300 rounded-xl focus:outline-none focus:border-indigo-500 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCities.map(city => (
            <div key={city.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                    <p className="text-sm text-gray-600">{city.state}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">{city.overallScore}</div>
                    <div className="text-xs text-gray-500">Score</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-sm">{city.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">{city.socialVibe}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{city.waterAvailability}/100</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {metrics.slice(0, 4).map(metric => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.key} className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-indigo-600" />
                        <div className="flex-1">
                          <div className="text-xs text-gray-600">{metric.label}</div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${getScoreColor(city[metric.key], metric.lower)}`}
                              style={{ width: `${city[metric.key]}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Help Us Improve</h2>
          
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
              Thank you for your feedback!
            </div>
          )}

          <div className="max-w-2xl mx-auto space-y-4">
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Mail className="w-5 h-5 mr-2 text-indigo-600" />
                Email Address
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-indigo-600" />
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts..."
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              onClick={handleSubmitFeedback}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
              disabled={!userEmail || !feedback}
            >
              Submit Feedback
            </button>
          </div>
        </div>

        <footer className="text-center text-gray-600 py-8">
          <p className="mb-2">Making your return to India easier, one city at a time.</p>
          <p className="text-sm">MVP Version 1.0</p>
        </footer>
      </main>
    </div>
  );
}
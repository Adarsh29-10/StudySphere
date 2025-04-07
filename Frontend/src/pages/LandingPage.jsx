import React, { useState } from 'react';
import { ArrowRight, Brain, Users, BookOpen, Award, Clock, Globe, Shield, Star } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import SignUpModal from '../components/SignUpModal';

function LandingPage() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignUp = (formData) => {
    console.log('Sign up form data:', formData);
    // Here you would typically handle the signup logic
    setIsSignUpModalOpen(false);
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Study Smarter, Together
              </h1>
              <p className="text-xl text-indigo-100">
                Join StudySphere to connect with like-minded learners, share resources, and achieve your goals.
              </p>
              <div className="space-x-4">
                <button 
                  onClick={() => setIsSignUpModalOpen(true)}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
                >
                  Get Started
                </button>
                <button className="border border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              {/* Add illustration/image here */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of collaborative learning with our innovative features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Matching"
              description="Our intelligent system connects you with study groups that perfectly match your goals and learning style."
            />
            <FeatureCard
              icon={Users}
              title="Decentralized Identity"
              description="Maintain your privacy while building a verifiable academic reputation on the blockchain."
            />
            <FeatureCard
              icon={BookOpen}
              title="Collaborative Learning"
              description="Access powerful tools for real-time collaboration, document sharing, and group discussions."
            />
            <FeatureCard
              icon={Award}
              title="Earn While Learning"
              description="Get rewarded with tokens for your contributions and active participation in study groups."
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-indigo-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Create Your Profile</h3>
              <p className="text-gray-600">Set up your learning preferences and connect your wallet</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Find Your Group</h3>
              <p className="text-gray-600">Get matched with the perfect study partners</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Start Learning</h3>
              <p className="text-gray-600">Collaborate, earn rewards, and achieve your goals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16">Trusted by Students Worldwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600">SK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah K.</p>
                    <p className="text-sm text-gray-500">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-gray-600">"The AI matching is incredible. I found my perfect study group in minutes!"</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Michael R.</p>
                    <p className="text-sm text-gray-500">Medical Student</p>
                  </div>
                </div>
                <p className="text-gray-600">"Earning tokens while studying keeps me motivated and engaged."</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600">EW</span>
                  </div>
                  <div>
                    <p className="font-semibold">Emily W.</p>
                    <p className="text-sm text-gray-500">Law Student</p>
                  </div>
                </div>
                <p className="text-gray-600">"The collaborative tools are seamless. Best study experience ever!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-indigo-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">How does the AI matching work?</h3>
              <p className="text-gray-600">Our AI analyzes your learning preferences, goals, and schedule to match you with compatible study partners.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">What can I do with earned tokens?</h3>
              <p className="text-gray-600">Tokens can be used to access premium features, join exclusive groups, or exchange for learning resources.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Is my data secure?</h3>
              <p className="text-gray-600">Yes, we use blockchain technology to ensure your data remains private and secure.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8">Join thousands of students already benefiting from decentralized study groups.</p>
          <button
            onClick={() => setIsSignUpModalOpen(true)}
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">StudySphere</h3>
              <p className="text-gray-600">Revolutionizing collaborative learning through blockchain technology.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2024 StudySphere. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        onSignUp={handleSignUp}
      />
    </div>
  );
}

export default LandingPage;
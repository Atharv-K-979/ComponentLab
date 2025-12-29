import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { BsGithub, BsExclamationTriangle } from 'react-icons/bs'
import { HiOutlineCode } from 'react-icons/hi'

const ReadMore = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow px-6 lg:px-16 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <BsExclamationTriangle className="text-yellow-400" />
                <span className="text-yellow-400 text-sm font-medium">Demo Limitations</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 sp-text">
                Understanding Demo Limits
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Learn why limits exist and how to get unlimited usage
              </p>
            </div>

            {/* Why Limits Exist */}
            <div className="bg-[#141319] rounded-2xl p-8 border border-gray-800 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Why Limits Exist</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                This hosted version of ComponentLab is a <strong className="text-white">demo/portfolio application</strong> that uses a shared Gemini API key. 
                To manage costs and ensure fair usage for all visitors, we've implemented strict daily limits.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Cost Management:</strong> AI API calls have associated costs. Shared demo keys need protection from abuse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Fair Usage:</strong> Limits ensure all users can experience the demo without one user consuming all resources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Portfolio Purpose:</strong> This demo showcases the technology, not intended for production use.</span>
                </li>
              </ul>
            </div>

            {/* Current Limits */}
            <div className="bg-[#141319] rounded-2xl p-8 border border-gray-800 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Current Demo Limits</h2>
              <div className="bg-[#09090B] rounded-xl p-6 mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                    <HiOutlineCode className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">4 Generations Per Day</h3>
                    <p className="text-gray-400">Per IP address or session</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Each AI component generation counts toward your daily limit. Limits reset automatically every 24 hours.
                </p>
              </div>
            </div>

            {/* Local Setup */}
            <div className="bg-[#141319] rounded-2xl p-8 border border-gray-800 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Get Unlimited Usage</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                For unlimited AI generations, clone the repository and run it locally with your own Gemini API key. 
                This gives you full control and no usage restrictions.
              </p>

              <div className="bg-[#09090B] rounded-xl p-6 mb-4">
                <h3 className="text-xl font-bold mb-4 text-white">Quick Setup Guide</h3>
                <ol className="space-y-4 text-gray-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">1.</span>
                    <div>
                      <span className="block mb-1"><strong className="text-white">Clone the repository:</strong></span>
                      <code className="block bg-[#141319] p-2 rounded mt-1 text-sm text-purple-300">
                        git clone https://github.com/yourusername/ai-component-generator.git
                      </code>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">2.</span>
                    <div>
                      <span className="block mb-1"><strong className="text-white">Install dependencies:</strong></span>
                      <code className="block bg-[#141319] p-2 rounded mt-1 text-sm text-purple-300">
                        npm install
                      </code>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">3.</span>
                    <div>
                      <span className="block mb-1"><strong className="text-white">Create a <code className="text-purple-300">.env</code> file in the root directory:</strong></span>
                      <code className="block bg-[#141319] p-2 rounded mt-1 text-sm text-purple-300">
                        GEMINI_API_KEY=your_api_key_here
                      </code>
                      <p className="text-sm mt-2 text-gray-500">
                        Get your free API key from{' '}
                        <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                          Google AI Studio
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">4.</span>
                    <div>
                      <span className="block mb-1"><strong className="text-white">Start the development server:</strong></span>
                      <code className="block bg-[#141319] p-2 rounded mt-1 text-sm text-purple-300">
                        npm run dev:all
                      </code>
                      <p className="text-sm mt-2 text-gray-500">
                        This starts both the backend server and frontend development server
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#141319] rounded-2xl p-8 border border-gray-800 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Benefits of Local Setup</h2>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Unlimited generations</strong> - No daily limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Full control</strong> - Your API key, your usage</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Privacy</strong> - All data stays on your machine</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Customization</strong> - Modify the code to fit your needs</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/component-maker"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold text-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30"
              >
                Try the Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ReadMore


import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BsGithub, BsTwitter, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-grow px-6 lg:px-16 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 sp-text text-center">About ComponentLab</h1>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              ComponentLab is an AI-powered tool that helps developers and designers create beautiful, 
              production-ready UI components in seconds. Simply describe your component, and our AI 
              will generate clean, responsive code for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#141319] rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-white">How It Works</h3>
                <ol className="space-y-4 text-gray-400">
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">1.</span>
                    <span>Describe your component in natural language</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">2.</span>
                    <span>Choose your preferred framework</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">3.</span>
                    <span>AI generates your component code</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">4.</span>
                    <span>Preview, copy, or download your code</span>
                  </li>
                </ol>
              </div>

              <div className="bg-[#141319] rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-white">Features</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Multiple framework support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Live preview of components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Code editor with syntax highlighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Export and download functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Responsive and modern designs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About


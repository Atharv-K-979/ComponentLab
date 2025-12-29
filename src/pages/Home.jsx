import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BsStars, BsCodeSquare, BsLightningCharge } from 'react-icons/bs'
import { HiOutlineSparkles } from 'react-icons/hi'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 lg:px-16 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <HiOutlineSparkles className="text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Powered by AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="sp-text">Build Beautiful Components</span>
              <br />
              <span className="text-white">In Seconds, Not Hours</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
              Transform your ideas into stunning, production-ready UI components with the power of AI.
              <br />
              No coding expertise required—just describe what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/component-maker"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold text-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30"
              >
                <BsStars />
                Start Creating
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg transition-all hover:bg-gray-800 hover:border-purple-500/50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 lg:px-16 py-20 bg-[#141319]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 sp-text">Why Choose ComponentLab?</h2>
            <p className="text-gray-400 text-center mb-16 text-lg">Everything you need to build amazing UI components</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#09090B] rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mb-6">
                  <BsStars className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI-Powered</h3>
                <p className="text-gray-400 leading-relaxed">
                  Leverage cutting-edge AI to generate components that match your exact specifications. 
                  Just describe your vision and watch it come to life.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#09090B] rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mb-6">
                  <BsCodeSquare className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Multiple Frameworks</h3>
                <p className="text-gray-400 leading-relaxed">
                  Choose from HTML+CSS, Tailwind CSS, Bootstrap, or JavaScript. 
                  Get code that's clean, responsive, and ready to use.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#09090B] rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center mb-6">
                  <BsLightningCharge className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Lightning Fast</h3>
                <p className="text-gray-400 leading-relaxed">
                  Generate production-ready components in seconds. 
                  No more spending hours on repetitive UI coding tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-16 py-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-4xl font-bold mb-6 sp-text">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of developers creating beautiful components with ComponentLab
            </p>
            <Link
              to="/component-maker"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold text-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30"
            >
              <BsStars />
              Get Started Now
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NoPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 sp-text">404</h1>
          <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
          <p className="text-gray-400 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold text-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NoPage
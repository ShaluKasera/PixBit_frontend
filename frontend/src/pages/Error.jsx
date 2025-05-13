import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404!</h1>
      <p className="text-2xl font-semibold mb-2">Page not found</p>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="  px-6 py-2 no-underline button"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default Error

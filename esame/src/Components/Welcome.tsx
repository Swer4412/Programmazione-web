import {FC} from 'react';
import { Link } from 'react-router-dom';
import { BiNews } from "react-icons/bi"

const Welcome: FC = () => {
 return (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        <BiNews className="text-gray-800 text-6xl" />
        <h1 className="text-gray-800 text-4xl font-extrabold">MyNews</h1>
      </div>
      <p className="text-gray-600 text-lg mt-4">
        Welcome to News App, the best place to find and save your favorite news articles. You can browse the latest news from different sources and categories, and save the ones you like for later viewing. You can also customize your preferences and settings to get the most relevant and personalized news for you.
      </p>
      <div className="flex items-center space-x-4 mt-8">
        <Link to="/home" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Get Started
        </Link>
        <Link to="/saved" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          View Saved Articles
        </Link>
      </div>
    </div>
  </div>
 );
};

export default Welcome;

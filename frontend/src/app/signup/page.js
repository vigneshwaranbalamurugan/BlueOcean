"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Mail, CheckCircle, XCircle, ArrowRight , Eye, EyeOff} from 'lucide-react';
import illustration from "@images/signup/Loginillus.png";

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);



  // Password validation rules
  const validations = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isPasswordValid = Object.values(validations).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isPasswordValid && !isLogin) {
      setShowValidation(true);
      setIsLoading(false);
      return;
    }

    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    
    <div className="min-h-full w-full flex flex-col md:flex-row bg-gradient-to-br from-red-50 to-white">
     
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Left side - Form */}
      <div className="w-full  h-[90vh] md:h-auto md:w-1/2 p-4 md:p-8 flex items-center justify-center backdrop-blur-sm">
        <div className="w-full  max-w-md space-y-8 bg-white/80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
          {/* Logo and Title */}
          <div className="text-center relative">
            <div className="absolute -top-12 left-1/2 transform  -translate-x-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-red-400 rounded-full blur-md"></div>
                <Camera className="relative h-12  w-12 text-white p-2 bg-red-400 rounded-full" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? ' A one-stop solution for video content collaboration!' : 'Enhance your YouTube workflow effortlessly!'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-1 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:border-red-400 hover:shadow-lg transition-all duration-300 bg-white group"
                >
                  <svg className="h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm">Continue with Google</span>
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email"
                    required

                 />
                  <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                </div>
              </div>

              {/* Password Input */}
           <div className="group relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setShowValidation(true)}
                    onBlur={() => setShowValidation(false)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 transition-all bg-white/50"
                    placeholder="Enter your password"
                    required
                  />
                  {isPasswordVisible ? (
                    <EyeOff 
                      className="absolute right-3 top-3 h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors"
                      onClick={() => setIsPasswordVisible(false)}
                    />
                  ) : (
                    <Eye 
                     className="absolute right-3 top-3 h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors"
                      onClick={() => setIsPasswordVisible(true)}
                    />
                  )}
                </div>
                
                


                {/* Password Validation Popup */}
                {showValidation && !isLogin && (
                  <div className="absolute z-10 w-full bg-white shadow-lg rounded-lg p-3 mt-2 border border-gray-200 text-sm">
                    <p className="font-semibold text-gray-700">Password must contain:</p>
                    <ul className="mt-2 space-y-1">
                      {Object.entries(validations).map(([key, isValid], index) => (
                        <li key={index} className="flex items-center">
                          {isValid ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={isValid ? "text-green-600" : "text-red-600"}>
                            {key === "length" && "At least 8 characters"}
                            {key === "lowercase" && "One lowercase letter"}
                            {key === "uppercase" && "One uppercase letter"}
                            {key === "number" && "One number"}
                            {key === "specialChar" && "One special character (!@#$%^&*)"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full z-2 relative flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 overflow-hidden group"
            >
              <span className={`transition-all duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
              {isLoading ? 'Processing...' : isLogin ? 'Sign in' : 'Create account'}
              </span>
              <ArrowRight className={`h-5 w-5 transition-all duration-300 group-hover:translate-x-1 ${isLoading ? 'opacity-50' : 'opacity-100'}`} />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </form>

          {/* Toggle between Login and Signup */}
          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-red-400 hover:text-red-500 transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      {/* Right side - Image with Futuristic Elements */}

      <div className="hidden md:flex  md:w-1/2 w-full h-screen bg-gradient-to-br from-red-50 to-white items-center justify-center overflow-hidden">
        <div className="relative w-full h-full   bg-gradient-to-r from-red-400/20 to-pink-400/20 backdrop-blur-md flex items-center justify-center">
          <Image
            src={illustration}
            alt="Authentication illustration"
            className="absolute rounded-10  shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full h-full p-2"
          />
        </div>
      </div>



    </div>
  );
};

export default AuthPages;
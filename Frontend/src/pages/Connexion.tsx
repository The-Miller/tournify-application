/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react/react-in-jsx-scope */

"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"

interface LoginForm {
  email: string
  password: string
}

const Connexion: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()
  const navigate = useNavigate()

  const onSubmit = async (data: LoginForm) => {
    try {
      console.log("Connexion réussie :", data)
      // Redirect logic here
    } catch (error) {
      console.error("Erreur de connexion :", error)
    }
  }

  return (
    // <div className="min-h-screen bg-gradient-to-br from-[#6BA7E2] via-[#5a96d1] to-[#1b3971] flex items-center justify-center p-4 relative overflow-hidden">
    <div className="min-h-screen bg-white-to-br from-[#6BA7E2] via-[#5a96d1] to-[#1b3971] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent transform skew-y-12"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header */}
          <div className="text-center pb-8 pt-8 px-8 bg-gradient-to-br from-white to-gray-50">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent">
              Authentification
            </h2>
            <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
          </div>

          <div className="px-8 pb-8 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#6BA7E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:border-[#6BA7E2] focus:ring-2 focus:ring-[#6BA7E2]/20 outline-none transition-all bg-white/50 backdrop-blur-sm"
                  {...register("email", {
                    required: "L'email est requis",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email invalide",
                    },
                  })}
                />
                {errors.email && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.email.message}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#6BA7E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:border-[#6BA7E2] focus:ring-2 focus:ring-[#6BA7E2]/20 outline-none transition-all bg-white/50 backdrop-blur-sm"
                  {...register("password", { required: "Le mot de passe est requis" })}
                />
                {errors.password && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.password.message}
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Se connecter
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            <Link
              to="/inscription"
              className="w-full h-12 border-2 border-[#6BA7E2]/30 hover:border-[#6BA7E2] hover:bg-[#6BA7E2]/5 transition-all duration-200 bg-transparent rounded-xl flex items-center justify-center text-[#6BA7E2] font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connexion

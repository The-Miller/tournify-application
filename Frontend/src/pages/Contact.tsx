/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Contact: React.FC = () => {
  const [latitude, setLatitude] = useState<number>(52.3676)
  const [longitude, setLongitude] = useState<number>(4.9041)
  const [mapUrl, setMapUrl] = useState<string>("")

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            updateMapUrl()
          },
          (error) => {
            console.error("Erreur de géolocalisation:", error)
          },
        )
      } else {
        console.error("La géolocalisation n'est pas supportée par ce navigateur.")
      }
    }

    const updateMapUrl = () => {
      setMapUrl(
        `https://www.google.com/maps/embed/v1/view?key=AIzaSyDC2wWagFPRT6baQ78SMG69jX8ZjWSsTSE&center=${latitude},${longitude}&zoom=14`,
      )
    }

    getUserLocation()
  }, [])

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous serions ravis de vous aider ! N'hésitez pas à nous contacter si vous avez des questions !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Advice Card */}
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-[#6BA7E2] p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6BA7E2]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6BA7E2]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-[#6BA7E2]/10 text-[#6BA7E2] rounded-full mb-2">
                      Conseil
                    </span>
                    <p className="text-gray-700">
                      Regardez nos{" "}
                      <a href="#" className="text-[#6BA7E2] hover:text-[#1b3971] underline font-medium">
                        vidéos explicatives
                      </a>{" "}
                      avant de nous contacter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#6BA7E2]/10 rounded-full flex items-center justify-center group-hover:bg-[#6BA7E2]/20 transition-colors">
                      <svg className="w-6 h-6 text-[#6BA7E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                      <p className="text-gray-600">toornament@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1b3971]/10 rounded-full flex items-center justify-center group-hover:bg-[#1b3971]/20 transition-colors">
                      <svg className="w-6 h-6 text-[#1b3971]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Numéro de téléphone</h3>
                      <p className="text-gray-600">+221 77 461 64 18</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D9534F]/10 rounded-full flex items-center justify-center group-hover:bg-[#D9534F]/20 transition-colors">
                      <svg className="w-6 h-6 text-[#D9534F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adresse postale</h3>
                      <div className="text-gray-600">
                        <p>Dakar</p>
                        <p>Golf Nord</p>
                        <p>Sénégal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <svg className="w-5 h-5 text-[#6BA7E2] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Notre localisation
                </h3>
              </div>
              <div className="relative overflow-hidden">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

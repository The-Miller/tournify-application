/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, useEffect } from 'react';
// import { sendMessage } from '../services/dialogflowService';

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<any[]>([]);
//   const [userMessage, setUserMessage] = useState('');
//   const [isChatbotVisible, setIsChatbotVisible] = useState(false);

//   useEffect(() => {
//     // Charger les messages initiaux si nécessaire (optionnel)
//   }, []);

//   const toggleChatbot = () => {
//     setIsChatbotVisible(!isChatbotVisible);
//   };

//   const handleSendMessage = () => {
//     if (userMessage.trim()) {
//       const sessionId = 'chatbot-tournify-sxev';
//       setMessages((prev) => [...prev, { type: 'user', text: userMessage }]);

//       sendMessage(sessionId, userMessage)
//         .then((response) => {
//           const botReply = response.data.queryResult.fulfillmentText;
//           setMessages((prev) => [...prev, { type: 'bot', text: botReply }]);
//         })
//         .catch((error) => {
//           console.error('Erreur lors de l\'envoi du message à Dialogflow :', error);
//           setMessages((prev) => [...prev, { type: 'bot', text: 'Erreur lors de la réponse.' }]);
//         });

//       setUserMessage('');
//     }
//   };

//   return (
//     <>
//       <div className="chatbot-container" style={{ display: isChatbotVisible ? 'flex' : 'none' }}>
//         <style>
//           {`
//             .chatbot-container {
//               position: fixed;
//               bottom: 20px;
//               right: 20px;
//               width: 600px;
//               max-height: 400px; /* Hauteur maximale ajustée pour rester visible */
//               background-color: #fff;
//               border-radius: 10px;
//               box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//               z-index: 1000;
//               display: flex;
//               flex-direction: column;
//               font-family: 'Arial', sans-serif;
//             }

//             .chatbot-header {
//               background-color: #007bff;
//               color: white;
//               padding: 10px;
//               border-top-left-radius: 10px;
//               border-top-right-radius: 10px;
//               display: flex;
//               justify-content: space-between;
//               align-items: center;
//               font-weight: bold;
//             }

//             .chatbot-header button {
//               background: none;
//               border: none;
//               color: white;
//               font-size: 16px;
//               cursor: pointer;
//               font-weight: bold;
//             }

//             .chatbot-body {
//               flex-grow: 1;
//               overflow-y: auto;
//               padding: 10px;
//               background-color: #f9f9f9;
//             }

//             .message {
//               margin: 5px 0;
//               font-size: 14px;
//             }

//             .message p {
//               margin: 0;
//               padding: 5px;
//               border-radius: 5px;
//             }

//             .message p:nth-child(1) {
//               background-color: #e0e0e0;
//               text-align: right;
//               color: black;
//             }

//             .message p:nth-child(2) {
//               background-color: #007bff;
//               color: white;
//               text-align: left;
//             }

//             .chatbot-footer {
//               padding: 10px;
//               display: flex;
//               justify-content: space-between;
//               background-color: #fff;
//               border-bottom-left-radius: 10px;
//               border-bottom-right-radius: 10px;
//               border-top: 1px solid #ddd;
//             }

//             .chatbot-footer input {
//               width: 75%;
//               padding: 8px;
//               border-radius: 20px;
//               border: 1px solid #ddd;
//               outline: none;
//               transition: all 0.3s;
//             }

//             .chatbot-footer input:focus {
//               border-color: #007bff;
//               box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
//             }

//             .chatbot-footer button {
//               background-color: #007bff;
//               color: white;
//               border: none;
//               border-radius: 20px;
//               padding: 8px 12px;
//               cursor: pointer;
//               transition: background-color 0.3s;
//               margin-left: 10px;
//             }

//             .chatbot-footer button:hover {
//               background-color: #0056b3;
//             }

//             .chatbot-toggle {
//               background-color: #007bff;
//               color: white;
//               padding: 10px;
//               border-radius: 50%;
//               cursor: pointer;
//               position: fixed;
//               bottom: 20px;
//               right: 20px;
//               z-index: 1000;
//               display: block;
//               box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//               transition: transform 0.3s;
//             }

//             .chatbot-toggle:hover {
//               transform: scale(1.1);
//             }
//           `}
//         </style>
//         <div className="chatbot-header">
//           <span>Chatbot</span>
//           <button onClick={toggleChatbot}>X</button>
//         </div>
//         <div className="chatbot-body">
//           {messages.map((message, index) => (
//             <div key={index} className="message">
//               {message.type === 'user' && <p>Vous: {message.text}</p>}
//               {message.type === 'bot' && <p>Chatbot: {message.text}</p>}
//             </div>
//           ))}
//         </div>
//         <div className="chatbot-footer">
//           <input
//             value={userMessage}
//             onChange={(e) => setUserMessage(e.target.value)}
//             placeholder="Entrez votre message..."
//             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//           />
//           <button onClick={handleSendMessage}>Envoyer</button>
//         </div>
//       </div>

//       <div className="chatbot-toggle" style={{ display: !isChatbotVisible ? 'block' : 'none' }} onClick={toggleChatbot}>
//         Chat
//       </div>
//     </>
//   );
// };

// export default Chatbot;
"use client"

import type React from "react"
import { useState, useEffect } from "react"

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([])
  const [userMessage, setUserMessage] = useState("")
  const [isChatbotVisible, setIsChatbotVisible] = useState(false)

  useEffect(() => {
    // Message de bienvenue
    setMessages([{ type: "bot", text: "Bonjour ! Je suis votre assistant Toornament. Comment puis-je vous aider ?" }])
  }, [])

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible)
  }

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages((prev) => [...prev, { type: "user", text: userMessage }])

      // Simulation de réponse du bot
      setTimeout(() => {
        const botReply = getBotResponse(userMessage)
        setMessages((prev) => [...prev, { type: "bot", text: botReply }])
      }, 1000)

      setUserMessage("")
    }
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("tournoi") || lowerMessage.includes("compétition")) {
      return "Vous pouvez créer un tournoi en vous connectant à votre compte. Avez-vous besoin d'aide pour l'inscription ?"
    } else if (lowerMessage.includes("inscription") || lowerMessage.includes("compte")) {
      return 'Pour vous inscrire, cliquez sur le bouton "Inscription" en haut à droite. Vous pourrez ensuite créer et gérer vos tournois.'
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("aide")) {
      return "Vous pouvez nous contacter via la page Contact ou par email à toornament@gmail.com. Notre équipe vous répondra rapidement !"
    } else if (lowerMessage.includes("classement") || lowerMessage.includes("résultat")) {
      return 'Les classements sont disponibles dans la section "Classements". Vous y trouverez tous les résultats des tournois en cours.'
    } else {
      return "Je suis là pour vous aider avec Toornament ! Vous pouvez me poser des questions sur les tournois, l'inscription, ou toute autre fonctionnalité."
    }
  }

  return (
    <>
      {/* Chatbot Container */}
      {isChatbotVisible && (
        <div className="fixed bottom-20 right-4 w-80 max-h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-[#6BA7E2] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-semibold">Assistant Toornament</span>
            </div>
            <button onClick={toggleChatbot} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 max-h-64">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-[#6BA7E2] text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA7E2] text-sm"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#6BA7E2] text-white px-4 py-2 rounded-lg hover:bg-[#5a96d1] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isChatbotVisible && (
        <button
          onClick={toggleChatbot}
          className="fixed bottom-4 right-4 bg-[#6BA7E2] text-white p-4 rounded-full shadow-lg hover:bg-[#5a96d1] transition-all duration-200 transform hover:scale-110 z-50"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default Chatbot

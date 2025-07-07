/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { getAllPosts } from "../api/api"

interface Comment {
  user: string
  text: string
}

interface Post {
  id: number
  titre: string
  texte: string
  photo?: string
  video?: string
  likes: number
  comments: Comment[]
  newCommentUser?: string
  newCommentText?: string
  user_id?: number
}

const FilActualite: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const data = await getAllPosts()
      const formattedPosts = data.map((post: any) => ({
        id: post.id,
        titre: post.titre,
        texte: post.texte,
        photo: post.photo || undefined,
        video: post.video || undefined,
        likes: post.likes || 0,
        comments: post.comments ? post.comments.map((c: any) => ({ user: c.user, text: c.text })) : [],
        user_id: post.user_id || undefined,
      }))
      setPosts(formattedPosts)
    } catch (error) {
      console.error("Erreur lors du chargement des posts :", error)
    }
  }

  const handleLikePost = (postId: number) => {
    setPosts((prevPosts) => prevPosts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  const handleCommentPost = (post: Post) => {
    if (!post.newCommentUser || !post.newCommentText) {
      alert("Veuillez entrer un nom et un commentaire.")
      return
    }

    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id
          ? {
              ...p,
              comments: [...p.comments, { user: post.newCommentUser!, text: post.newCommentText! }],
              newCommentUser: "",
              newCommentText: "",
            }
          : p,
      ),
    )
  }

  const handleInputChange = (postId: number, field: "newCommentUser" | "newCommentText", value: string) => {
    setPosts((prevPosts) => prevPosts.map((p) => (p.id === postId ? { ...p, [field]: value } : p)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6BA7E2]/10 via-transparent to-[#1b3971]/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#6BA7E2] via-[#5a96d1] to-[#1b3971] rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#6BA7E2] via-[#5a96d1] to-[#1b3971] bg-clip-text text-transparent mb-6 tracking-tight">
              Fil d'Actualité
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Ne ratez rien de ce qui se passe dans les championnats universitaires !
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-[#6BA7E2]/30 overflow-hidden transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Post Layout Horizontal */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left Side - Content */}
                <div className="lg:col-span-2 p-6">
                  {/* Post Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-3 h-12 bg-gradient-to-b from-[#6BA7E2] to-[#1b3971] rounded-full"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.titre}</h3>
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLikePost(post.id)}
                          className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors group bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl"
                        >
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          <span className="font-bold text-lg">{post.likes}</span>
                          <span className="hidden sm:inline font-medium">J'aime</span>
                        </button>
                        <div className="flex items-center space-x-2 text-[#6BA7E2] bg-[#6BA7E2]/10 px-4 py-2 rounded-xl">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="font-semibold">{post.comments.length}</span>
                          <span className="hidden sm:inline">commentaire{post.comments.length !== 1 ? "s" : ""}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Image */}
                  {post.photo && (
                    <div className="relative overflow-hidden rounded-xl mb-6 group">
                      <img
                        src={`data:image/jpeg;base64,${post.photo}`}
                        alt="Post"
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{post.texte}</p>
                  </div>

                  {/* Add Comment Section */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h5 className="text-lg font-semibold text-gray-900 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#6BA7E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Ajouter un commentaire
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        placeholder="Votre nom"
                        value={post.newCommentUser || ""}
                        onChange={(e) => handleInputChange(post.id, "newCommentUser", e.target.value)}
                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6BA7E2] focus:ring-4 focus:ring-[#6BA7E2]/20 outline-none transition-all bg-white/70 backdrop-blur-sm"
                      />
                      <div className="flex space-x-3">
                        <input
                          placeholder="Votre commentaire..."
                          value={post.newCommentText || ""}
                          onChange={(e) => handleInputChange(post.id, "newCommentText", e.target.value)}
                          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6BA7E2] focus:ring-4 focus:ring-[#6BA7E2]/20 outline-none transition-all bg-white/70 backdrop-blur-sm"
                        />
                        <button
                          onClick={() => handleCommentPost(post)}
                          className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Publier</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Comments */}
                <div className="lg:col-span-1 bg-gradient-to-br from-gray-50/80 to-blue-50/30 backdrop-blur-sm p-6 border-l border-gray-200/50">
                  <div className="h-full flex flex-col">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <svg className="w-6 h-6 mr-3 text-[#6BA7E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Commentaires ({post.comments.length})
                    </h4>
                    
                    {post.comments.length > 0 ? (
                      <div className="space-y-4 flex-1 overflow-y-auto max-h-96 custom-scrollbar">
                        {post.comments.map((comment, idx) => (
                          <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 hover:shadow-md transition-all duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-[#6BA7E2] to-[#1b3971] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="text-sm font-bold text-white">
                                  {comment.user.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900 mb-2">{comment.user}</p>
                                <p className="text-gray-700 leading-relaxed">{comment.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <p className="text-gray-500 font-medium">Aucun commentaire</p>
                          <p className="text-sm text-gray-400 mt-1">Soyez le premier à commenter !</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-24">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-700 mb-4">Aucun post disponible</h3>
            <p className="text-xl text-gray-500 max-w-md mx-auto">
              Les actualités apparaîtront ici dès qu'elles seront publiées.
            </p>
          </div>
        )}
      </div>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6BA7E2, #1b3971);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #5a96d1, #2d4a7a);
        }
      `}</style>
    </div>
  )
}

export default FilActualite
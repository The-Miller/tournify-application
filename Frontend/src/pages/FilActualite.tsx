/* eslint-disable react/no-unescaped-entities */

// "use client"

// import type React from "react"
// import { useState } from "react"
// import Header from "../components/Header"
// import Footer from "../components/Footer"

// interface Comment {
//   user: string
//   text: string
// }

// interface Post {
//   id: number
//   titre: string
//   texte: string
//   photo?: string
//   video?: string
//   likes: number
//   comments: Comment[]
//   newCommentUser?: string
//   newCommentText?: string
// }

// const FilActualite: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([
//     {
//       id: 1,
//       titre: "Victoire éclatante de l'ESTM",
//       texte: "L'équipe de l'ESTM remporte son premier match avec un score impressionnant de 5-0 contre l'IAM.",
//       likes: 24,
//       comments: [
//         { user: "Marie Diop", text: "Félicitations à toute l'équipe !" },
//         { user: "Ahmed Fall", text: "Quel match incroyable !" },
//       ],
//     },
//     {
//       id: 2,
//       titre: "Match serré entre ENSUP et SUPDECO",
//       texte: "Un match palpitant qui s'est terminé sur le score de 4-2 en faveur de l'ENSUP.",
//       likes: 18,
//       comments: [{ user: "Fatou Sall", text: "Les deux équipes ont bien joué" }],
//     },
//   ])

//   const handleLikePost = (postId: number) => {
//     setPosts((prevPosts) => prevPosts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
//   }

//   const handleCommentPost = (post: Post) => {
//     if (!post.newCommentUser || !post.newCommentText) {
//       alert("Veuillez entrer un nom et un commentaire.")
//       return
//     }

//     setPosts((prevPosts) =>
//       prevPosts.map((p) =>
//         p.id === post.id
//           ? {
//               ...p,
//               comments: [...p.comments, { user: post.newCommentUser!, text: post.newCommentText! }],
//               newCommentUser: "",
//               newCommentText: "",
//             }
//           : p,
//       ),
//     )
//   }

//   const handleInputChange = (postId: number, field: "newCommentUser" | "newCommentText", value: string) => {
//     setPosts((prevPosts) => prevPosts.map((p) => (p.id === postId ? { ...p, [field]: value } : p)))
//   }

//   return (
//     <div>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
//         <div className="container mx-auto px-4 py-12">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-full mb-6">
//               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//               </svg>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fil d'Actualité</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Ne ratez rien de ce qui se passe dans les championnats universitaires !
//             </p>
//           </div>

//           {/* Posts Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="bg-white rounded-lg shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               >
//                 <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-4">
//                   <h3 className="text-lg font-semibold">{post.titre}</h3>
//                 </div>

//                 {post.photo && (
//                   <div className="relative overflow-hidden h-48 bg-gray-100">
//                     <img
//                       src={`data:image/jpeg;base64,${post.photo}`}
//                       alt="Post"
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>
//                 )}

//                 <div className="p-6 space-y-4">
//                   <p className="text-gray-700 leading-relaxed">{post.texte}</p>

//                   {/* Like Button */}
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <button
//                       onClick={() => handleLikePost(post.id)}
//                       className="flex items-center space-x-2 text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
//                     >
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                         <path
//                           fillRule="evenodd"
//                           d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <span>{post.likes}</span>
//                     </button>
//                     <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
//                       <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                         />
//                       </svg>
//                       {post.comments.length}
//                     </span>
//                   </div>

//                   {/* Comments */}
//                   {post.comments.length > 0 && (
//                     <div className="space-y-3 pt-4 border-t border-gray-100">
//                       <h4 className="font-semibold text-gray-900 text-sm">Commentaires</h4>
//                       <div className="space-y-2 max-h-32 overflow-y-auto">
//                         {post.comments.map((comment, index) => (
//                           <div key={index} className="bg-gray-50 rounded-lg p-3">
//                             <div className="flex items-start space-x-2">
//                               <div className="w-6 h-6 bg-[#6BA7E2] rounded-full flex items-center justify-center flex-shrink-0">
//                                 <span className="text-xs font-semibold text-white">{comment.user.charAt(0)}</span>
//                               </div>
//                               <div className="flex-1 min-w-0">
//                                 <p className="text-xs font-semibold text-gray-900">{comment.user}</p>
//                                 <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Add Comment */}
//                   <div className="space-y-3 pt-4 border-t border-gray-100">
//                     <input
//                       placeholder="Votre nom"
//                       value={post.newCommentUser || ""}
//                       onChange={(e) => handleInputChange(post.id, "newCommentUser", e.target.value)}
//                       className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:border-[#6BA7E2] focus:ring-1 focus:ring-[#6BA7E2] outline-none transition-colors"
//                     />
//                     <textarea
//                       placeholder="Votre commentaire..."
//                       value={post.newCommentText || ""}
//                       onChange={(e) => handleInputChange(post.id, "newCommentText", e.target.value)}
//                       className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-lg focus:border-[#6BA7E2] focus:ring-1 focus:ring-[#6BA7E2] outline-none transition-colors resize-none"
//                     />
//                     <button
//                       onClick={() => handleCommentPost(post)}
//                       className="w-full bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                         />
//                       </svg>
//                       <span>Commenter</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {posts.length === 0 && (
//             <div className="text-center py-12">
//               <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                   />
//                 </svg>
//               </div>
//               <p className="text-xl text-gray-500">Aucun post à afficher pour le moment.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default FilActualite

"use client"

import type React from "react"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
}

const FilActualite: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      titre: "Victoire éclatante de l'ESTM",
      texte: "L'équipe de l'ESTM remporte son premier match avec un score impressionnant de 5-0 contre l'IAM.",
      photo: "../assets/tele.png", // Ajout de l'image
      likes: 25,
      comments: [
        { user: "Marie Diop", text: "Félicitations à toute l'équipe !" },
        { user: "Ahmed Fall", text: "Quel match incroyable !" },
      ],
    },
    {
      id: 2,
      titre: "Match serré entre ENSUP et SUPDECO",
      texte: "Un match palpitant qui s'est terminé sur le score de 4-2 en faveur de l'ENSUP.",
      photo: "../assets/prog.jpg", // Ajout de l'image
      likes: 18,
      comments: [{ user: "Fatou Sall", text: "Les deux équipes ont bien joué" }],
    },
    {
      id: 3,
      titre: "Test",
      texte: "Test Ontenu",
      photo: "../assets/prog.jpg", // Image d'exemple comme dans votre screenshot
      likes: 2,
      comments: [],
    },
  ])

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
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#6BA7E2]/5 via-white to-[#1b3971]/5">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] bg-clip-text text-transparent mb-4">
              Fil d'Actualité
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ne ratez rien de ce qui se passe dans les championnats universitaires !
            </p>
          </div>

          {/* Posts Grid */}
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Post Header */}
                <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-6">
                  <h3 className="text-xl font-bold">{post.titre}</h3>
                </div>

                {/* Post Image */}
                {post.photo && (
                  <div className="relative overflow-hidden">
                    <img
                      src={post.photo || "/placeholder.svg"}
                      alt="Post"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-6 space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">{post.texte}</p>

                  {/* Like and Comment Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleLikePost(post.id)}
                      className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold">{post.likes}</span>
                    </button>
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-[#6BA7E2]/10 text-[#6BA7E2] rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      {post.comments.length} commentaire{post.comments.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Comments */}
                  {post.comments.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-[#6BA7E2]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        Commentaires
                      </h4>
                      <div className="space-y-3 max-h-40 overflow-y-auto">
                        {post.comments.map((comment, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-white">{comment.user.charAt(0)}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900">{comment.user}</p>
                                <p className="text-gray-700 mt-1">{comment.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add Comment */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h5 className="font-medium text-gray-900">Ajouter un commentaire</h5>
                    <div className="space-y-3">
                      <input
                        placeholder="Votre nom"
                        value={post.newCommentUser || ""}
                        onChange={(e) => handleInputChange(post.id, "newCommentUser", e.target.value)}
                        className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:border-[#6BA7E2] focus:ring-2 focus:ring-[#6BA7E2]/20 outline-none transition-all"
                      />
                      <textarea
                        placeholder="Votre commentaire..."
                        value={post.newCommentText || ""}
                        onChange={(e) => handleInputChange(post.id, "newCommentText", e.target.value)}
                        className="w-full min-h-[100px] px-4 py-3 border border-gray-300 rounded-xl focus:border-[#6BA7E2] focus:ring-2 focus:ring-[#6BA7E2]/20 outline-none transition-all resize-none"
                      />
                      <button
                        onClick={() => handleCommentPost(post)}
                        className="w-full bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        <span>Commenter</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-500">Aucun post à afficher pour le moment.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FilActualite

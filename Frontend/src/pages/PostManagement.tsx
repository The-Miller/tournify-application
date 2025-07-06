/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { createPost, getAllPosts, updatePost, deletePost } from "../api/api"
import { Post } from "../models/post.model"
import Sidebar from "../components/Sidebar"

const PostManagement: React.FC = () => {
  const [post, setPost] = useState({ titre: "", photo: "", texte: "" })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [selectedPost, setSelectedPost] = useState<Post>(new Post(0, "", "", 0))
  const [editMode, setEditMode] = useState(false)
  // const navigate = useNavigate()

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const data = await getAllPosts()
      setPosts(data)
    } catch (error) {
      console.error("Erreur lors du chargement des posts :", error)
    }
  }

  // const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]
  //   if (file) {
  //     setSelectedFile(file)
  //     const reader = new FileReader()
  //     reader.onload = () => {
  //       if (file.type.match(/image\/*/) != null) {
  //         setPost({ ...post, photo: reader.result as string })
  //       }
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) { // Limite à 15 Mo
        alert("Le fichier est trop volumineux. La taille maximale est de 15 Mo.");
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (file.type.match(/image\/*/) != null) {
          setPost({ ...post, photo: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!post.titre || !post.texte) {
      alert("Veuillez remplir tous les champs obligatoires.")
      return
    }

    const formData = new FormData()
    formData.append("titre", post.titre)
    formData.append("texte", post.texte)
    if (selectedFile) {
      formData.append("photo", selectedFile, selectedFile.name)
    }

    try {
      await createPost(formData)
      setPost({ titre: "", photo: "", texte: "" })
      setSelectedFile(null)
      await loadPosts()
    } catch (error) {
      console.error("Erreur lors de la création du post :", error)
    }
  }

  const onEditPost = (post: Post) => {
    setSelectedPost({ ...post })
    setEditMode(true)
  }

  const updatePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPost.titre || !selectedPost.texte) {
      alert("Veuillez remplir tous les champs obligatoires.")
      return
    }

    const formData = new FormData()
    formData.append("titre", selectedPost.titre)
    formData.append("texte", selectedPost.texte)
    if (selectedFile) {
      formData.append("photo", selectedFile, selectedFile.name)
    }

    try {
      // await updatePost(formData, selectedPost.id)
      await updatePost(selectedPost.id, formData)
      setEditMode(false)
      await loadPosts()
    } catch (error) {
      console.error("Erreur lors de la mise à jour du post :", error)
    }
  }

  const deletePostSubmit = async (postId: number) => {
    try {
      await deletePost(postId)
      await loadPosts()
    } catch (error) {
      console.error("Erreur lors de la suppression du post :", error)
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#6BA7E2]/5 via-white to-[#1b3971]/5">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-6">
            <h1 className="text-2xl font-bold">Gestion des Posts</h1>
          </div>

          <div className="p-6">
            {/* Formulaire pour créer un nouveau post */}
            <form onSubmit={onSubmit} encType="multipart/form-data" className="mb-8 bg-gray-50 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="titre" className="block text-sm font-medium text-gray-700 mb-2">
                    Titre
                  </label>
                  <input
                    type="text"
                    id="titre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
                    value={post.titre}
                    onChange={(e) => setPost({ ...post, titre: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                    Photo ou Vidéo
                  </label>
                  <input
                    type="file"
                    id="photo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#6BA7E2]/10 file:text-[#6BA7E2] hover:file:bg-[#6BA7E2]/20"
                    onChange={onFileChange}
                  />
                </div>

                <div>
                  <label htmlFor="texte" className="block text-sm font-medium text-gray-700 mb-2">
                    Texte de Commentaire
                  </label>
                  <textarea
                    id="texte"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent resize-none"
                    rows={4}
                    value={post.texte}
                    onChange={(e) => setPost({ ...post, texte: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Créer Post
                </button>
              </div>
            </form>

            {/* Liste des posts existants */}
            <h2 className="text-xl font-bold mb-4 text-gray-900">Posts Existants</h2>
            {posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.titre}</h3>
                    {post.photo && (
                      <img
                        src={`data:image/jpeg;base64,${post.photo}`}
                        alt="Post Image"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <p className="text-gray-700 mb-4">{post.texte}</p>
                    <div className="flex space-x-2">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        onClick={() => onEditPost(post)}
                      >
                        Modifier
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        onClick={() => deletePostSubmit(post.id)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">Aucun post à afficher.</p>
              </div>
            )}

            {/* Formulaire de modification */}
            {editMode && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] text-white p-6">
                    <h2 className="text-xl font-bold">Modifier le Post</h2>
                  </div>
                  <form onSubmit={updatePostSubmit} className="p-6 space-y-4">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent"
                      value={selectedPost.titre}
                      onChange={(e) => setSelectedPost({ ...selectedPost, titre: e.target.value })}
                      required
                    />
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent resize-none"
                      rows={4}
                      value={selectedPost.texte}
                      onChange={(e) => setSelectedPost({ ...selectedPost, texte: e.target.value })}
                      required
                    />
                    <input
                      type="file"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6BA7E2] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#6BA7E2]/10 file:text-[#6BA7E2] hover:file:bg-[#6BA7E2]/20"
                      onChange={onFileChange}
                    />
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-[#6BA7E2] to-[#1b3971] hover:from-[#5a96d1] hover:to-[#2d4a7a] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200"
                      >
                        Enregistrer
                      </button>
                      <button
                        type="button"
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
                        onClick={() => setEditMode(false)}
                      >
                        Annuler
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PostManagement

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost, getPosts, updatePost, deletePost } from '../services/communityService';
import { Post } from '../models/post.model';

const DashboardCommunity: React.FC = () => {
  const [post, setPost] = useState({ titre: '', photo: '', texte: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post>(new Post(0, '', '', 0));
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Erreur lors du chargement des posts :', error);
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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
    e.preventDefault();
    if (!post.titre || !post.texte) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const formData = new FormData();
    formData.append('titre', post.titre);
    formData.append('texte', post.texte);
    if (selectedFile) {
      formData.append('photo', selectedFile, selectedFile.name);
    }

    try {
      await createPost(formData);
      setPost({ titre: '', photo: '', texte: '' });
      setSelectedFile(null);
      await loadPosts();
    } catch (error) {
      console.error('Erreur lors de la création du post :', error);
    }
  };

  const onEditPost = (post: Post) => {
    setSelectedPost({ ...post });
    setEditMode(true);
  };

  const updatePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost.titre || !selectedPost.texte) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const formData = new FormData();
    formData.append('titre', selectedPost.titre);
    formData.append('texte', selectedPost.texte);
    if (selectedFile) {
      formData.append('photo', selectedFile, selectedFile.name);
    }

    try {
      await updatePost(formData, selectedPost.id);
      setEditMode(false);
      await loadPosts();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du post :', error);
    }
  };

  const deletePostSubmit = async (postId: number) => {
    try {
      await deletePost(postId);
      await loadPosts();
    } catch (error) {
      console.error('Erreur lors de la suppression du post :', error);
    }
  };

  return (
    <div className="dashboard-community container my-5 p-5 bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <h1 className="text-2xl font-bold mb-5">Gestion des Posts</h1>

      {/* Formulaire pour créer un nouveau post */}
      <form onSubmit={onSubmit} encType="multipart/form-data" className="mb-5">
        <div className="form-group mb-4">
          <label htmlFor="titre" className="block mb-2">Titre</label>
          <input
            type="text"
            id="titre"
            className="form-control w-full p-2 border border-[#ced4da] rounded-[10px]"
            value={post.titre}
            onChange={(e) => setPost({ ...post, titre: e.target.value })}
            required
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="photo" className="block mb-2">Photo ou Vidéo</label>
          <input
            type="file"
            id="photo"
            className="form-control w-full p-2 border border-[#ced4da] rounded-[10px]"
            onChange={onFileChange}
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="texte" className="block mb-2">Texte de Commentaire</label>
          <textarea
            id="texte"
            className="form-control w-full p-2 border border-[#ced4da] rounded-[10px]"
            value={post.texte}
            onChange={(e) => setPost({ ...post, texte: e.target.value })}
            required
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary bg-[#007bff] text-white px-4 py-2 rounded-[25px] hover:bg-[#0056b3]"
        >
          Créer Post
        </button>
      </form>

      {/* Liste des posts existants */}
      <h2 className="text-xl font-bold mb-4">Posts Existants</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post my-3 p-3 border border-[#ddd] rounded-[10px]">
            <h3 className="text-lg font-semibold">{post.titre}</h3>
            {post.photo && (
              <img
                src={`data:image/jpeg;base64,${post.photo}`}
                alt="Post Image"
                className="img-fluid w-full h-auto rounded-[5px] my-2"
              />
            )}
            <p className="text-gray-700">{post.texte}</p>
            <button
              className="btn btn-warning bg-yellow-500 text-white px-3 py-1 rounded-[5px] mr-2 hover:bg-yellow-600"
              onClick={() => onEditPost(post)}
            >
              Modifier
            </button>
            <button
              className="btn btn-danger bg-red-500 text-white px-3 py-1 rounded-[5px] hover:bg-red-600"
              onClick={() => deletePostSubmit(post.id)}
            >
              Supprimer
            </button>
          </div>
        ))
      ) : (
        <p>Aucun post à afficher.</p>
      )}

      {/* Formulaire de modification */}
      {editMode && (
        <div className="mt-5">
          <h2 className="text-xl font-bold mb-4">Modifier le Post</h2>
          <form onSubmit={updatePostSubmit}>
            <input
              type="text"
              className="form-control w-full p-2 border border-[#ced4da] rounded-[10px] mb-2"
              value={selectedPost.titre}
              onChange={(e) => setSelectedPost({ ...selectedPost, titre: e.target.value })}
              required
            />
            <textarea
              className="form-control w-full p-2 border border-[#ced4da] rounded-[10px] mb-2"
              value={selectedPost.texte}
              onChange={(e) => setSelectedPost({ ...selectedPost, texte: e.target.value })}
              required
            />
            <input
              type="file"
              className="form-control w-full p-2 border border-[#ced4da] rounded-[10px] mb-2"
              onChange={onFileChange}
            />
            <button
              type="submit"
              className="btn btn-primary bg-[#007bff] text-white px-4 py-2 rounded-[25px] mr-2 hover:bg-[#0056b3]"
            >
              Enregistrer
            </button>
            <button
              type="button"
              className="btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded-[25px] hover:bg-gray-600"
              onClick={() => setEditMode(false)}
            >
              Annuler
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardCommunity;
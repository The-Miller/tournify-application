export class Post {
  id: number;
  titre: string;
  texte: string;
  photo?: string;
  video?: string;
  likes: number;

  constructor(
    id: number,
    titre: string,
    texte: string,
    likes: number,
    photo?: string,
    video?: string
  ) {
    this.id = id;
    this.titre = titre;
    this.texte = texte;
    this.likes = likes;
    this.photo = photo;
    this.video = video;
  }
}

// Export explicite pour usage comme type
export type PostType = InstanceType<typeof Post>;
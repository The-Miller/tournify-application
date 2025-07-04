import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tournois: React.FC = () => {
  const [currentImage, setCurrentImage] = useState('assets/img1.png');
  const [activeSection, setActiveSection] = useState('img1.png');
  const navigate = useNavigate();

  // État pour gérer les pronostics
  const [matches, setMatches] = useState([
    { id: 1, equipeA: { nom: 'ESTM' }, equipeB: { nom: 'ENSUP' }, date: '2025-07-10', predictedTeam: '', predictedScorer: '' },
  ]);

  const changeImage = (imageName: string) => {
    setCurrentImage(`assets/${imageName}`);
    setActiveSection(imageName);
  };

  const redirectToClassifications = () => {
    navigate('/classements');
  };

  const handleTeamChange = (id: number, value: string) => {
    setMatches(matches.map((match) =>
      match.id === id ? { ...match, predictedTeam: value } : match
    ));
  };

  const handleScorerChange = (id: number, value: string) => {
    setMatches(matches.map((match) =>
      match.id === id ? { ...match, predictedScorer: value } : match
    ));
  };

  const submitPrediction = (id: number) => {
    const match = matches.find((m) => m.id === id);
    if (match && match.predictedTeam) {
      alert('Pronostic envoyé avec succès!');
      console.log('Pronostic soumis:', match);
    } else {
      alert('Veuillez sélectionner une équipe gagnante.');
    }
  };

  return (
    <>
      {/* Section Intro 1 */}
      <section className="intro-section py-12 bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1200px]">
          <div className="row flex items-center justify-between">
            <div className="col-md-6">
              <img src="assets/img.png" alt="Tournoi Image" className="img-fluid w-1/2 h-auto rounded-[10px]" />
            </div>
            <div className="col-md-6 text-content text-left">
              <h1 className="text-2.5rem font-bold mb-5">Programmez votre prochain tournoi avec Toornament</h1>
              <p className="text-1.1rem leading-7 mb-5">
                Planification simple et rapide<br />
                Superbe affichage en direct et en continu<br />
                Page d'inscription en ligne
              </p>
              <a href="/connexion" className="btn-primary inline-block px-7 py-3 bg-[#007bff] text-white rounded-[5px] text-1.2rem no-underline transition-colors duration-300 hover:bg-[#0056b3]">
                Créer gratuitement un tournoi
              </a>
              <br /><br />
              <a href="/video" className="watch-video-link text-[#007bff] text-1rem no-underline transition-colors duration-300 hover:text-[#0056b3]">
                Voir la vidéo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tournoi Container */}
      <section className="intro-section py-12 bg-[#f9f9f9]">
        <div className="tournoi-container flex justify-between px-5">
          <div className="left-section w-2/5">
            <ul className="list-none p-0">
              <li
                className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img1.png' ? 'font-bold bg-[#dedede]' : ''}`}
                onClick={() => changeImage('img1.png')}
              >
                <h3 className="text-1.5em text-[#333] mb-1">Gérer les participants</h3>
                <p className="text-1em text-[#666] m-0">Ajoutez manuellement des tournois, des équipes ou des joueurs en accèdant à votre tableau de bord.</p>
              </li>
              <li
                className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img2.png' ? 'font-bold bg-[#dedede]' : ''}`}
                onClick={() => changeImage('img2.png')}
              >
                <h3 className="text-1.5em text-[#333] mb-1">Choisir le bon plan de jeu</h3>
                <p className="text-1em text-[#666] m-0">Combinez les poules, les arbres de tournoi et les matchs individuels et définissez votre configuration idéale.</p>
              </li>
              <li
                className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img3.png' ? 'font-bold bg-[#dedede]' : ''}`}
                onClick={() => changeImage('img3.png')}
              >
                <h3 className="text-1.5em text-[#333] mb-1">Visualiser vos équipes</h3>
                <p className="text-1em text-[#666] m-0">Consulter les effectifs des équipes, vous pourrez modifier ces dernières ou les mettre à jour.</p>
              </li>
              <li
                className={`cursor-pointer py-3.5 text-1.2em transition-colors duration-300 mb-5 ${activeSection === 'img4.png' ? 'font-bold bg-[#dedede]' : ''}`}
                onClick={() => changeImage('img4.png')}
              >
                <h3 className="text-1.5em text-[#333] mb-1">Publier les résultats</h3>
                <p className="text-1em text-[#666] m-0">Traitez les résultats en un rien de temps depuis n'importe quel appareil et informez tout le monde instantanément.</p>
              </li>
            </ul>
          </div>
          <div className="right-section w-3/5 text-center">
            <img src={currentImage} alt="Tournoi Image" className="w-full rounded-[8px]" />
          </div>
        </div>
      </section>

      {/* Section Sports */}
      <section className="intro-section py-12 bg-[#f9f9f9]">
        <h1 className="titre text-2.5rem font-bold mb-5 text-center">Toornament propose ces différents sports</h1>
        <div className="sports-section flex flex-wrap justify-around px-5 gap-5">
          <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
            <img src="assets/football.webp" alt="Football" className="w-[80px] h-[80px] mb-3.5" />
            <h3 className="text-1.5em text-[#333] my-2.5">Football</h3>
            <p className="text-1em text-[#666] m-0">Gérez votre tournoi de football. Ne ratez rien avec le classement des équipes, des meilleurs buteurs et passeurs du tournoi.</p>
          </div>
          <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
            <img src="assets/basketball.jpeg" alt="Basketball" className="w-[80px] h-[80px] mb-3.5" />
            <h3 className="text-1.5em text-[#333] my-2.5">Basketball</h3>
            <p className="text-1em text-[#666] m-0">Organisez vos tournois de basket. Créez des poules et des tableaux, entrez les scores des matchs et suivez en temps réel l'évolution de votre compétition.</p>
          </div>
          <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
            <img src="assets/handball.webp" alt="Handball" className="w-[80px] h-[80px] mb-3.5" />
            <h3 className="text-1.5em text-[#333] my-2.5">Handball</h3>
            <p className="text-1em text-[#666] m-0">Gérez votre tournoi de handball. Les équipes peuvent s'inscrire et suivre en ligne l'évolution des résultats et les matchs à jour.</p>
          </div>
          <div className="sport-card w-2/5 p-5 border border-[#ddd] rounded-[10px] text-center bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
            <img src="assets/ping-pong.jpeg" alt="Ping-Pong" className="w-[80px] h-[80px] mb-3.5" />
            <h3 className="text-1.5em text-[#333] my-2.5">Ping-Pong</h3>
            <p className="text-1em text-[#666] m-0">Organisez votre compétition de ping-pong. Suivez la compétition et le classement des meilleurs joueurs.</p>
          </div>
        </div>
      </section>

      {/* Section Case Study */}
      <section className="intro-section py-12 bg-[#f9f9f9]">
        <div className="case-study-section px-12">
          <h2 className="text-center text-2.5em mb-5">Classements en direct</h2>
          <div className="case-study-container flex justify-between items-center">
            <div className="case-study-text w-1/2">
              <p className="text-center text-1.2em mb-10">
                Suivez l’évolution des compétitions en temps réel grâce à notre fonctionnalité de classements en direct ! Que ce soit pour le football, le basketball ou le handball, restez informé de la performance de vos équipes et joueurs préférés à chaque instant.
              </p>
              <p className="text-center text-1.2em mb-10">
                Nos tableaux de classements sont mis à jour automatiquement après chaque match, vous offrant une vue complète sur les résultats, les points marqués et les statistiques essentielles.
              </p>
              <button
                className="btn-classification mx-auto block px-5 py-2.5 bg-[#007bff] text-white rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-[#0056b3]"
                onClick={redirectToClassifications}
              >
                Consulter les classements
              </button>
            </div>
            <div className="case-study-image w-2/5">
              <img src="assets/ranking.png" alt="UrbanEvent" className="w-full rounded-[10px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Pronostics */}
      <section className="intro-section py-12 bg-[#f9f9f9]">
        <h2 className="text-2.5em text-center mb-5">Tentez votre chance avec nos jeux de pronostics</h2>
        <div className="predict flex gap-8 px-8 bg-[#f5f5f5] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
          <div className="left-column w-1/2 bg-white p-6 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <h2 className="text-1.8rem text-[#333] mb-4 border-b-2 border-[#007bff] pb-2 text-center">Pronostics pour les matchs en attente</h2>
            {matches.map((match) => (
              <div key={match.id} className="prediction-match mb-6 p-4 border border-[#e0e0e0] rounded-[10px] transition-all duration-300 hover:border-[#007bff] hover:bg-[#f1f9ff]">
                <p>{match.equipeA.nom} vs {match.equipeB.nom} - Date: {match.date}</p>
                <div>
                  <label className="block mb-2 font-bold">Équipe gagnante:</label>
                  <select
                    className="w-full p-2 mb-4 border border-[#ccc] rounded-[5px] text-1rem transition-border duration-300 focus:border-[#007bff] focus:outline-none"
                    value={match.predictedTeam}
                    onChange={(e) => handleTeamChange(match.id, e.target.value)}
                  >
                    <option value="">Sélectionner une équipe</option>
                    <option value={match.equipeA.nom}>{match.equipeA.nom}</option>
                    <option value={match.equipeB.nom}>{match.equipeB.nom}</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-bold">Joueur marquant:</label>
                  <input
                    className="w-full p-2 mb-4 border border-[#ccc] rounded-[5px] text-1rem transition-border duration-300 focus:border-[#007bff] focus:outline-none"
                    value={match.predictedScorer}
                    onChange={(e) => handleScorerChange(match.id, e.target.value)}
                    placeholder="Entrez le nom du joueur"
                  />
                </div>
                <button
                  className="bg-[#007bff] text-white rounded-[5px] px-4 py-2 text-1rem cursor-pointer transition-colors duration-300 hover:bg-[#0056b3]"
                  onClick={() => submitPrediction(match.id)}
                >
                  Envoyer Pronostic
                </button>
              </div>
            ))}
          </div>
          <div className="right-column w-1/2 bg-white p-6 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-l-2 border-[#007bff]">
            <h2 className="text-1.8rem text-[#333] mb-4 border-b-2 border-[#007bff] pb-2 text-center mt-0">Pronostics déjà effectués</h2>
            {[
              { matchId: 1, predictedTeam: 'ESTM', predictedScorer: 'Aliou Diaw' },
            ].map((prediction, index) => (
              <div key={index} className="prediction-item mb-6 p-4 border border-[#e0e0e0] rounded-[10px] transition-all duration-300 hover:border-[#007bff] hover:bg-[#f1f9ff]">
                <p>
                  ESTM vs ENSUP - Date: 2025-07-10 <br />
                  Équipe gagnante: {prediction.predictedTeam} <br />
                  Joueur marquant: {prediction.predictedScorer}
                </p>
              </div>
            ))}
            {[
              { matchId: 1, predictedTeam: 'ESTM', predictedScorer: 'Aliou Diaw' },
            ].length === 0 && <p className="text-1rem leading-1.5 text-[#555]">Aucun pronostic effectué pour le moment.</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tournois;
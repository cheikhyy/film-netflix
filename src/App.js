import React, { useState } from 'react';
import './App.css';


// Composant MovieCard
const MovieCard = ({ movie }) => {
  const movieStyle={
    marginTop:"3rem",
    display:"block",
  };
    const imgStyle = {
      margin:'.3rem',
      marginTop:"18rem",
      display:"block",
      width:'23rem',
      marginLeft:'1rem',
    };
    const descStyle={
      fontSize:"17px",
      display:"block",
      fontWeight:"400"
    };

    return(
  <div className="movie-card"  style={movieStyle}>
    <a href=""><img src={movie.posterURL} alt={movie.title} style={imgStyle} id="image"/></a> 
    <h3>{movie.title}</h3>
        <p style={descStyle}>{movie.description}</p>
        <p id="note"><span>Note:</span>{movie.note}</p>
  </div>
    );
}
// Composant MovieList
const MovieList = ({movies}) => {
  return ( 
      <div className="movie-list"style={{display:'flex', marginLeft:'2rem'}}>
          {movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    ))}
      </div>
   );
}

// Composant Filtre
const Filtre = ({ onFilterChange }) => {
  const [titreFilter, setTitreFilter] = useState('');
  const [noteFilter, setNoteFilter] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ titre: titreFilter, note: noteFilter });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="entrer un  titre"
        value={titreFilter}
        onChange={(e) => setTitreFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="entrer une note"
        value={noteFilter}
        onChange={(e) => setNoteFilter(e.target.value)}
      /> 
      <button onClick={handleFilterChange}>cliquez</button>
    </div>
  );
};

// Application principale
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Avengers",
      posterURL: 'https://i.pinimg.com/564x/3c/b4/28/3cb428f7b5e7246ee9c2727862e423e4.jpg',
      description: "Les Avengers, aussi connus sous le nom de Vengeurs, étaient une équipe d'individus extraordinaires, avec des super pouvoirs ou d'autres caractéristiques spéciales.",
      note: "18",

  },

  {
    title: "STAR WARS - The Last Jedi",
    posterURL: 'https://i.pinimg.com/564x/c7/d1/e6/c7d1e62f702ad701bbe4c233e3eb404f.jpg',
    description: "L'histoire de Star Wars, se déroule dans une galaxie qui est le théâtre d'affrontements entre les Chevaliers Jedi et les Seigneurs",
    note: "10", 
  },

  {
    title: "Vikings",
      posterURL: 'https://i.pinimg.com/564x/ea/01/d3/ea01d339a844c4a53589f1acfa799364.jpg',
      description: "Vikings est une série télévisée canado-irlandaise créée par Michael Hirst, diffusée simultanément entre le 3 mars 2013 et le 30 décembre 2020 1 sur les chaînes History au Canada et History aux États-Unis.",
      note: "13",
  },
  {
    title: "la casa de papel",
      posterURL: 'https://i.pinimg.com/564x/54/a0/92/54a092432390f993075a315a09f60c47.jpg',
      description: "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
      note: "7",
  },
  {
    title: "Game of thrones",
      posterURL: 'https://i.pinimg.com/564x/29/50/d3/2950d35edaf94a68825431d1335ea06d.jpg',
      description: "Game of Thrones est une série télévisée américaine de fantaisie médiévale développée par David Benioff et D. B. Weiss pour HBO. Elle est basée sur la saga Le Trône de fer (A Song of Ice and Fire), une série de romans écrits par George R.R. Martin depuis 1996.",
      note: "14",
  },
]);
   
 

  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  const handleFilterChange = ({ titre, note }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titre.toLowerCase()) &&
        (note === '' || movie.note >= parseFloat(note))
    );

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    // <div className="app">
    //   <Filtre onFilterChange={handleFilterChange} />
    //   <MovieList movies={filteredMovies} />
    //   {/* Composant pour ajouter un nouveau film */}
    //   {/* Vous pouvez ajouter un formulaire ici pour collecter les détails du nouveau film */}
    //   {/* Utilisez handleAddMovie pour ajouter le nouveau film à la liste */}
      <div className="App">
      <nav><span id='logo'><img src={'./logo-removebg-preview (1).png'}/></span></nav>
      <Filtre onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <Title />
    </div>
  );
};

// composant Title
const Title = () => {
  return ( 
      <div className="ttl">
            <h1 id="pomme">Films</h1>
            <p id="movies">Un film est une œuvre du cinéma ou de l'audiovisuel, qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. Ce terme est employé par métonymie, en référence à la pellicule chargée dans un magasin de caméra argentique, destinée aux prises de vues cinématographiques.</p>
      </div>
   );
}

export default App;

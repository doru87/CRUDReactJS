import React from 'react';
import {GlobalContext}  from './GlobalProvider';
import Movie from './Movie';

export default function Movies() {

    const {moviesList} = React.useContext(GlobalContext)
    localStorage.setItem('movieslist', JSON.stringify(moviesList));
    return (
      <div className="movies_container">
        {moviesList.map(movie => {
          return (
            <Movie data={movie}/>
          )
        })}
       </div>
    
    )
}

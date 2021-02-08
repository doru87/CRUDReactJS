import React, { useState,useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import  { GlobalContext } from '../GlobalProvider';

export default function EditMovie(props) {

    const {id} = useParams();
    const history = useHistory();

    const {moviesList,callback} = React.useContext(GlobalContext)
    const [dataMovies, setDataMovies] = useState([])

    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [year, setYear] = useState("");
    const [cast, setCast] = useState("");
    const [genres, setGenres] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setDataMovies(moviesList);
        localStorage.setItem('movieslist', JSON.stringify(dataMovies));
        const listMovies = JSON.parse(localStorage.getItem('movieslist'));
        console.log(listMovies);
           const movies = listMovies.filter(data => 
             data.id == id
        )
        const movie = Object.assign({}, ...movies);

        localStorage.setItem('currentMovie', JSON.stringify(movie));
        
        const currentMovie = JSON.parse(localStorage.getItem('currentMovie'))
            setTitle(currentMovie["title"]);
            setPicture(currentMovie["picture"]);
            setYear(currentMovie["year"]);
            setCast(currentMovie["cast"]);
            setGenres(currentMovie["genres"]);
            setDescription(currentMovie["description"]);
    
    }, [dataMovies])

    const dataSeletedMovie = JSON.parse(localStorage.getItem('currentMovie'))
    const updateDataMovie = (id) => {

        if (dataSeletedMovie.id == id) {
            dataSeletedMovie.title = title;
            dataSeletedMovie.picture = picture;
            dataSeletedMovie.year = year;
            dataSeletedMovie.cast = cast;
            dataSeletedMovie.genres = genres;
            dataSeletedMovie.description = description;
        }
            
        const liMovies = JSON.parse(localStorage.getItem('movieslist'))

        for (let index = 0; index < liMovies.length; index++) {

            if(liMovies[index].id === dataSeletedMovie.id){

                liMovies[index].title = dataSeletedMovie.title
                liMovies[index].picture = dataSeletedMovie.picture
                liMovies[index].year = dataSeletedMovie.year
                liMovies[index].cast = dataSeletedMovie.cast
                liMovies[index].genres = dataSeletedMovie.genres
                liMovies[index].description = dataSeletedMovie.description
                localStorage.setItem('updatedListMovies', JSON.stringify(liMovies));
                break;
            }
        }
            
            localStorage.setItem('currentMovie', JSON.stringify(dataSeletedMovie));
            history.push("/Movies")
    }

    return (
      
        <>
        <div className="itemCard">
            <div className="card">
                <div className="card-header">Edit Movie</div>
                    <div className="card-body">
                    <form onSubmit={(event) => updateDataMovie(id)}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="title"
                                    value={title} 
                                    onChange={(e) =>setTitle(e.target.value)}
                                />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="picture"
                                    value={picture} 
                                    onChange={(e) =>setPicture(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="year" 
                                    value={year} 
                                    onChange={(e) =>setYear(e.target.value)}
                                />
                            </div>

                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="cast"
                                    value={cast} 
                                    onChange={(e) =>setCast(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="genres"
                                    value={genres} 
                                    onChange={(e) =>setGenres(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="description"
                                    value={description} 
                                    onChange={(e) =>setDescription(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-warning" id="button" type="submit">
                                Update Movie
                            </button>
                        </form>
                    </div>
            </div>
        </div>
      </>
    )
}

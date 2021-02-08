import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddMovie() {

    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [year, setYear] = useState("");
    const [cast, setCast] = useState("");
    const [genres, setGenres] = useState("");
    const [description, setDescription] = useState("");

    const history = useHistory();
    const addDataMovie = (e,id) => {

        const dataMovie = {
            id: Math.floor(Math.random() * 100),
            title: title,
            picture:picture,
            year: year,
            cast: cast,
            genres: genres,
            description: description
        }
        const updatedListMovies = JSON.parse(localStorage.getItem('updatedListMovies'));
        updatedListMovies.push(dataMovie);
        
        localStorage.setItem('updatedListMovies', JSON.stringify(updatedListMovies));
        history.push("/Movies");
        window.location.reload(false);
    }

    return (
        <>
        <div className="itemCard">
            <div className="card">
                <div className="card-header">Add Sport</div>
                    <div className="card-body">
                    <form onSubmit={(event) => addDataMovie(event)}>
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
                                Add Movie
                            </button>
                        </form>
                    </div>
            </div>
        </div>
      </>
    )
}

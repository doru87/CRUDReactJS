
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function AddBook() {

    const history = useHistory();

    const [book, setBook] = useState({
        title: "",
        picture: "",
        author: "",
        publisher: "",
        pages: "",
        description: ""
      });

    const onInputChange = e => {
        setBook({ ...book, [e.target.name]: e.target.value });
      };

      const onSubmit = async e => {
        e.preventDefault();
        await axios.post(`http://localhost:3002/books`, book);
        history.push("/Books");
      };

      const { title,picture,author,publisher,pages,description} = book;
    return (
      
        <>
        <div className="itemCard">
            <div className="card">
                <div className="card-header">Add Book</div>
                    <div className="card-body">
                    <form onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="title"
                                    value={title} 
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="picture"
                                    value={picture} 
                                    onChange={e => onInputChange(e)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="author" 
                                    value={author} 
                                    onChange={e => onInputChange(e)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="publisher"
                                    value={publisher} 
                                    onChange={e => onInputChange(e)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="pages"
                                    value={pages} 
                                    onChange={e => onInputChange(e)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="description"
                                    value={description} 
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-warning" type="submit">
                                Add Book
                            </button>
                        </form>
                    </div>
            </div>
        </div>
      </>
    )
}


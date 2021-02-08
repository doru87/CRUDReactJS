import React, { Component } from 'react'
import { faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import ModalMovies from './ModalMovies'

export default class Movie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:this.props.data,active:false,
             isModalOpen:false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    setIsModalOpen = (bool) => {
        this.setState({isModalOpen:bool})
    }    

    openModal = () => {
        this.setIsModalOpen(true);
    }
    
    closedModal = () => {
        this.setIsModalOpen(false);
    }
    
     handleClick = (data) => {
            if(this.state.active === false){
            this.setState({...this.state,active:true})
            const panel = document.querySelector(`.panel-${data.id}`)
            panel.style.maxHeight = panel.scrollHeight + "px";
        }else{
            this.setState({...this.state,active:false})
            const panel = document.querySelector(`.panel-${data.id}`)
            panel.style.maxHeight = null;
        }
           
    }
    deleteMovie = (id) => {
        const updatedListMovies = JSON.parse(localStorage.getItem('movieslist')) !== null && JSON.parse(localStorage.getItem('updatedListMovies')) == null ? JSON.parse(localStorage.getItem('movieslist')) : JSON.parse(localStorage.getItem('updatedListMovies'));
        for(let index=0; index < updatedListMovies.length; index++ ) {
            if(updatedListMovies[index].id == id){
                updatedListMovies.splice(index,1);
                break;

            }
        }
        localStorage.setItem('updatedListMovies', JSON.stringify(updatedListMovies));
        window.location.reload();
    }

    render() {
        const data = this.state.data;
      
        return (
         
            <div class="item">
                <div className="title">{data.title}
                <div className="edit">
                    <Link to={`/Movies/edit/${data.id}`}>
                        <span> <FontAwesomeIcon icon={faEdit} size="2x"/>Edit</span>
                    </Link>
                </div>
                <div className="delete">
                    <Link to={`/Movies`}>
                        <button onClick={this.openModal}><FontAwesomeIcon icon={faTrash} size="2x"/>Delete</button>
                    </Link>
                    <ModalMovies isModalOpen={this.state.isModalOpen} closedModal={this.closedModal} deleteMovie={this.deleteMovie} id={this.state.data.id} />
                </div>
                
                </div>
                <div className="picture">
                    <img src={data.picture} alt=""/>
                </div>
                <div className="year">
                    <span>Year: {data.year}</span> 
                </div>
                <div className="genres">
                    <span>Genres: {data.genres}</span> 
                </div>
                <div className="cast">
                    <span>Cast: {data.cast}</span> 
                </div>
                <div className="movie-description">
                    <button className={`accordion ${this.state.active === true ? "active" : "inactive"}`} onClick={() => this.handleClick(data)}>Description</button>
                    <div className={`panel panel-${data.id}`}>{data.description}</div>
                </div>
            </div>

        )
     
    }
}

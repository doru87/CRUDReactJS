import React, { Component } from 'react'
import { faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import ModalBooks from './ModalBooks'

export default class Book extends Component {

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
            console.log(this.state)
            const panel = document.querySelector(`.panel-${data.id}`)
            panel.style.maxHeight = panel.scrollHeight + "px";
        }else{
            this.setState({...this.state,active:false})
            console.log(this.state)
            const panel = document.querySelector(`.panel-${data.id}`)
            panel.style.maxHeight = null;
        }
    }
    
    render() {
        const data = this.state.data;

        return (
    
        <div class="item">
            <div className="title">{data.title}
            <div className="edit">
                <Link to={`/Books/edit/${data.id}`}>
                    <span> <FontAwesomeIcon icon={faEdit} size="2x"/>Edit</span>
                </Link>
            </div>
            <div className="delete">
                <Link to={`/Books`}>
                    <button onClick={this.openModal}><FontAwesomeIcon icon={faTrash} size="2x"/>Delete</button>
                </Link>
                <ModalBooks isModalOpen={this.state.isModalOpen} closedModal={this.closedModal} id={this.state.data.id} />
            </div>
            
            </div>
            <div className="picture">
                <img src={data.picture} alt=""/>
            </div>
            <div className="author">
                <span>Author: {data.author}</span> 
            </div>
            <div className="publisher">
                <span>Publisher: {data.publisher}</span> 
            </div>
            <div className="pages">
                <span>Pages: {data.pages}</span> 
            </div>
            <div className="book-description">
                <button className={`accordion ${this.state.active === true ? "active" : "inactive"}`} onClick={() => this.handleClick(data)}>Description</button>
                <div className={`panel panel-${data.id}`}>{data.description}</div>
            </div>
    
        </div>

        )
    }
}


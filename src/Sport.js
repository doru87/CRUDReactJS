import React, { Component } from 'react'
import { faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import ModalSports from './ModalSports'
import { connect } from 'react-redux'
import {modalOpen,modalClose,deleteSport} from './actions/sportsAction'

 class Sport extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:this.props.data,active:false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    openModal = (id) => {
        this.props.dispatch(modalOpen(id))
    }
    
    closeModal = (id) => {
        this.props.dispatch(modalClose(id))
    }

    deleteSport = (id) => {
        this.props.dispatch(deleteSport(id))
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
    
    render() {
        const data = this.props.data;

        return (
         
            <div class="item-sports">
                <div className="title">{data.title}
                <div className="edit">
                    <Link to={`/Sports/edit/${data.id}`}>
                        <span> <FontAwesomeIcon icon={faEdit} size="2x"/>Edit</span>
                    </Link>
                </div>
                <div className="delete">
                    <Link to={`/Sports`}>
                        <button onClick={() => this.openModal(data.id)}><FontAwesomeIcon icon={faTrash} size="2x"/>Delete</button>
                    </Link>
                    <ModalSports isModalOpen={data.isModalOpen} closeModal={() => this.closeModal(data.id)} deleteSport = {() => this.deleteSport(data.id)}id={data.id} />
                </div>
                
                </div>
                <div className="sports-informations">
                    <div className="picture-sports">
                        <img src={data.picture} alt=""/>
                    </div>
                    <div className="sport-details">
                        <div className="rank">
                            <span>Rank: {data.rank}</span> 
                        </div>
                        <div className="popularity">
                            <span>Popularity: {data.popularity}</span> 
                        </div>
                        <div className="fans">
                            <span>Fans: {data.fans}</span> 
                        </div>
                        <div className="sports-description">
                            <button className={`sports-accordion ${this.state.active === true ? "active" : "inactive"}`} onClick={() => this.handleClick(data)}>Description</button>
                            <div className={`sports-panel panel-${data.id}`}>{data.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
     
    }
}
  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
  
  export default connect(mapDispatchToProps)(Sport)
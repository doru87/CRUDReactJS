import React, { Component } from 'react'

 class ModalMovies extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        const outterStyle = {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            zIndex: 1,
            backgroundColor: "#626262",
            backgroundColor: "rgba(98, 98, 98, 0.4)",
            
        }
        const innerStyle = {
            position: "relative",
            width: 500,
            height:300,
            padding: 10,
            boxSizing: "border-box",
            backgroundColor: "#4360b5",
            margin: "50px auto",
            borderRadius: 3,
            zIndex: 2,
            textAlign: "left",
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
            opacity:1,
            display:"grid",
            alignItems: "center",
        }
        return (
            <div style = {{ ...outterStyle,display: this.props.isModalOpen === true ? "block" : "none" }}>
            
            <div style = { innerStyle }>
                    <span>Do you want to delete this movie?</span>
                    <div className="center">
                        <button className="yesButton" onClick={() => this.props.deleteMovie(this.props.id)}>Yes</button>
                    </div>
                    <div className="center">
                        <button className="noButton" onClick={() => this.props.closedModal()}>No</button>
                    </div>
                    <div className="right-top">
                        <button className="closeButton" onClick={() => this.props.closedModal()}>×</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalMovies;
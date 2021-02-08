import React, { Component } from 'react'
import axios from 'axios';

 class ModalBooks extends Component {

    constructor(props) {
        super(props)
    }

    deleteAction = (id) => {
        axios.delete(`http://localhost:3002/books/${id}`)
        .then(response => {console.log(response.data);
        })
        window.location.reload();
    }
    
    render() {
        return (
            <div style = {{ position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "auto",
                            zIndex: 1,
                            backgroundColor: "#626262",
                            backgroundColor: "rgba(98, 98, 98, 0.4)",
                            display: this.props.isModalOpen === true ? "block" : "none",
                          }}>
                
            <div style = {{ position: "relative",
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

                          }}>
                    <span>Do you want to delete this book?</span>
                    <div className="center">
                        <button className="yesButton" onClick={() => this.deleteAction(this.props.id)}>Yes</button>
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

export default ModalBooks;
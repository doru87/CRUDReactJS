import React, { useState } from 'react';
import { useDispatch, Provider} from "react-redux";
import { useHistory } from 'react-router-dom';
import { addSport } from './actions/sportsAction';
import { createStore } from 'redux';
import { sportReducer } from './reducers/SportsReducers';

export default function AddSportWrapper() {
  
    const store = createStore(sportReducer);
  
    return (
      <Provider store={store}> 
        <AddSport /> 
      </Provider>
    )
  }
  
 function AddSport() { 

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [rank, setRank] = useState("");
    const [popularity, setPopularity] = useState("");
    const [fans, setFans] = useState("");
    const [description, setDescription] = useState("");

    const addDataSport = (e) => {
        e.preventDefault();
        const randomId= Math.floor(Math.random() * 100)
        const newSport = {
            id:"" + randomId,
            title: title,
            picture:picture,
            rank: rank,
            popularity: popularity,
            fans: fans,
            description: description
        }

        dispatch(addSport(newSport))
        history.push("/Sports");
    }
    return (
        <>
        <div className="itemCard">
            <div className="card">
                <div className="card-header">Add Sport</div>
                    <div className="card-body">
                    <form onSubmit={(event) => addDataSport(event)}>
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
                                    name="rank" 
                                    value={rank} 
                                    onChange={(e) =>setRank(e.target.value)}
                                />
                            </div>

                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="popularity"
                                    value={popularity} 
                                    onChange={(e) =>setPopularity(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="fans"
                                    value={fans} 
                                    onChange={(e) =>setFans(e.target.value)}
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
                                Add Sport
                            </button>
                        </form>
                    </div>
            </div>
        </div>
      </>
    )
}

import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector, Provider} from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getSport,updateSport } from '../actions/sportsAction';
import { createStore } from 'redux';
import { sportReducer } from '../reducers/SportsReducers';


export default function EditSportWrapper() {
  
    const store = createStore(sportReducer);
  
    return (
      <Provider store={store}> 
        <EditSport /> 
      </Provider>
    )
  }
  
  function EditSport() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state)
 
    const sportslist = state != null && JSON.parse(localStorage.getItem('sportslist')) === null ? state : JSON.parse(localStorage.getItem('sportslist')) ;

    const history = useHistory();
    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [rank, setRank] = useState("");
    const [popularity, setPopularity] = useState("");
    const [fans, setFans] = useState("");
    const [description, setDescription] = useState("");

    const updateDataSport = (e) => {
        e.preventDefault();
        
        const updatedSport = Object.assign(sportslist.selectedSport,{
            title:title,
            picture:picture,
            rank: rank,
            popularity:popularity,
            fans:fans,
            description:description
        })
        dispatch(updateSport(updatedSport))
        history.push("/Sports");
    }

    useEffect(() => {
        dispatch(getSport(id));
        
        if(sportslist.selectedSport != null) {

            if(sportslist.loaded == true) {
    
                setTitle(sportslist.selectedSport.title)  
                setPicture(sportslist.selectedSport.picture)
                setRank(sportslist.selectedSport.rank)
                setPopularity(sportslist.selectedSport.popularity)
                setFans(sportslist.selectedSport.fans)
                setDescription(sportslist.selectedSport.description)
            
            }
        }
    },[sportslist.selectedSport.title])
   
    return (
      
        <>
        <div className="itemCard">
            <div className="card">
                <div className="card-header">Edit Sport</div>
                    <div className="card-body">
                    <form onSubmit={(event) => updateDataSport(event)}>
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
                                Update Sport
                            </button>
                        </form>
                    </div>
            </div>
        </div>
      </>
    )
}

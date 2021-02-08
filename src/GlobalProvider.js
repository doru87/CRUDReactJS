import React, { Component,createContext } from 'react'

export const GlobalContext = createContext();

export default class GlobalProvider extends Component {

  constructor(props) {
      super(props)
  }

   movies = [
   {
     "id":1,
     "title":"Bandits of El Dorado",
     "year":1949,
     "cast":["Charles Starrett","Clayton Moore"],
     "genres":["Western"],
     "picture":"https://m.media-amazon.com/images/M/MV5BMzYzNmY4YjAtMTI2MS00MDdiLTllY2UtMTQ5ZjBmN2ZiNjA0XkEyXkFqcGdeQXVyNDcxNDkxMjA@._V1_SY1000_CR0,0,646,1000_AL_.jpg",
     "description":"Outlaws along the Texas-Mexican border are mysteriously disappearing without a trace, so the Durango Kid adopts a second fake outlaw identity to expose the scheme."
   },
   {
     "id":2,
     "title":"Barbary Pirate",
     "year":1949,
     "cast":["Donald Woods","Trudy Marshall"],
     "genres":["Adventure"],
     "picture":"https://www.gstatic.com/tv/thumb/v22vodart/46403/p46403_v_v8_ab.jpg",
     "description":"The U.S. government sends Major Thomas Blake on a secret mission when the Bey of Tripoli starts demanding tribute from American merchant ships in the Mediterranean in the early 1800's. "
   },
   {
     "id":3,
     "title":"The Barkleys of Broadway",
     "year":1949,
     "cast":["Fred Astaire","Ginger Rogers"],
     "genres":["Musical"],
     "picture": "https://images-na.ssl-images-amazon.com/images/I/91ctxDWvXvL._SY445_.jpg",
     "description": "A successful but constantly-feuding husband and wife musical comedy team threatens to break up when the wife entertains an offer to become a serious actress."
   },
   {
     "id":4,
     "title":"Batman and Robin",
     "year":1949,
     "cast":["Robert Lowery","Johnny Duncan","Jane Adams"],
     "genres":[],
     "picture":"https://www.gstatic.com/tv/thumb/tvbanners/337789/p337789_b_v8_ae.jpg",
     "description":"The caped crusaders versus The Wizard, black-hooded mastermind."
   },
   {
     "id":5,
     "title":"Battleground",
     "year":1949,
     "cast":["Van Johnson","Ricardo Montalbán"],
     "genres":["War"],
     "picture":"https://images-na.ssl-images-amazon.com/images/I/5109ickRi3L._SY445_.jpg",
     "description":"True tale about a squad of the 101st Airborne Division coping with being trapped by the Germans in the besieged city of Bastogne, Belgium during the Battle of the Bulge in December of 1944."
   },
   {
     "id":6,
     "title":"The Beautiful Blonde from Bashful Bend",
     "year":1949,
     "cast":["Betty Grable","Cesar Romero","Rudy Vallée"],
     "genres":["Western"],
     "picture":"https://upload.wikimedia.org/wikipedia/en/9/9e/Beautiful_Blonde_poster.jpg",
     "description":"Temperamental saloon singer Freddie Jones, jealously shoots at her cheating boyfriend Blackie but mistakenly hits Judge Alfalfa J. O'Toole's honorable behind, forcing her to skip town under the guise of a schoolteacher."
   },
   {
     "id":7,
     "title":"Beyond the Forest",
     "year":1949,
     "cast":["Bette Davis","Joseph Cotten","Ruth Roman"],
     "genres":["Drama"],
     "picture":"https://i.etsystatic.com/17130429/r/il/a5bc71/1437516172/il_794xN.1437516172_s9bx.jpg",
     "description":"Resentful of her small-town life, a married woman schemes to run off with a rich businessman."
   }
 ] 

  state = {
    dataMovies: this.movies.length > 0 && JSON.parse(localStorage.getItem('updatedListMovies')) === null ? this.movies : JSON.parse(localStorage.getItem('updatedListMovies'))
  }

    render() {
        return (
            <div>
              <GlobalContext.Provider value={{ moviesList:this.state.dataMovies}}>
                {this.props.children}
              </GlobalContext.Provider>   
            </div>
        )
    }
}



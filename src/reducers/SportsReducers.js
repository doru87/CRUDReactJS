import { createStore } from 'redux'

export const sports =  {
    list:[
     {
       "id":"1",
       "title":"Soccer",
       "rank":1,
       "popularity":["Europe", "Africa", "Asia", "America"],
       "fans":"3.5 Billion",
       "picture":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDt6V.rPqgC0/v1/1200x-1.jpg",
       "description":"Association football, commonly known as football or soccer, is a sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries, making it the world’s most popular sport. The game is played on a rectangular field with a goal at each end. The objective of the game is to score by using any part of the body besides the arms and hands to get the football into the opposing goal. The goalkeepers are the only players allowed to touch the ball with their hands or arms while it is in play and then only in their penalty area. And now, it also holds its place among the richest sports in the world in 2020.",
       isModalOpen:false
     },
     {
       "id":"2",
       "title":"Cricket",
       "rank":2,
       "popularity":["Asia", "Australia", "UK"],
       "fans":"2.5 Billion",
       "picture":"https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg",
       "description":"Cricket is a bat-and-ball game played between two teams of 11 players on a field at the center of which is a rectangular 22-yard long pitch. The two competing teams take turns to bat, attempting to score runs. While one team is batting, the other team fields. Each turn is known as an innings. Cricket has three different formats i.e. Test, ODIs, and T20. After the introduction of the T20 format, the popularity of cricket has been increasing drastically. Cricket is very popular in India, Pakistan, Australia, England, South Africa, Sri Lanka, New Zealand, West Indies, Bangladesh, and Zimbabwe.",
       isModalOpen:false
      },
     {
       "id":"3",
       "title":"Basketball",
       "rank":3,
       "popularity":["US", "Canada", "China", "Philippines"],
       "fans":"2.2 Billion",
       "picture":"https://images.thestar.com/KMmKIGEJ6jCNh4hV3sIEhq9MlEw=/1086x724/smart/filters:cb(1595884869530)/https://www.thestar.com/content/dam/thestar/sports/basketball/2020/07/27/irving-commits-15-million-for-wnba-players-skipping-season/kyrie.jpg",
       "description":"One of Most Paying Sports: Basketball is a sport played by two teams of five players on a rectangular court. The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and 10 feet (3.0 m) high mounted to a backboard at each end. A team can score a field goal by shooting the ball through the basket during regular play. A field goal scores two points for the shooting team if a player is touching or is closer to the basket than the three-point line, and three points if the player is behind the three-point line. The team with the most points at the end of the game wins. Basketball is The 3rd Most Played and Watched Sport in the World.",
       isModalOpen:false
     },
     {
       "id":"4",
       "title":"Field Hockey",
       "rank":4,
       "popularity":["Europe", "Africa", "Asia", "Australia"],
       "fans":"2 Billion",
       "picture":"https://images.nbcolympics.com/www.nbcolympics.com/field_image/12August2016/rio-olympics-hockey-m_webf-50.jpg?impolicy=960x540_rectangle",
       "description":"Hockey is a family of sports in which two teams play against each other by trying to maneuver a ball or a puck into the opponent’s goal using a hockey stick. In many areas, one sport typically field hockey or ice hockey is generally referred to as hockey. Both forms of hockey are popular in the world. Field Hockey is the National game of Pakistan as well as India. On the other hand, ICE HOCKEY is popular in Europe especially in Canada, the USA, Latvia, and Sweden. Above mentioned number of fans are for both forms of hockey.",
       isModalOpen:false
     },
     {
       "id":"5",
       "title":"Tennis",
       "rank":5,
       "popularity":["Europe", "Americas", "Asia"],
       "fans":"1 Billion",
       "picture":"https://wamu.org/wp-content/uploads/2019/07/42969962855_b78fd3491e_k-900x550.jpg",
       "description":"Tennis is a sport that people usually play individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent’s court. The object of the game is to play the ball in such a way that the opponent is not able to play a good return.",
       isModalOpen:false
     },
     {
       "id":"6",
       "title":"Volleyball",
       "rank":6,
       "popularity":["Asia", "Europe", "Americas", "Australia"],
       "fans":"900 million",
       "picture":"https://www.cev.eu/Upload/Photo/RUSICH/20190721/NormalSize/173618__DSC0299.jpg",
       "description":"Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team’s court under organized rules. It has been a part of the official program of the Summer Olympic Games since 1964.",
       isModalOpen:false
     },
   
   ],
   loaded: false,
   selectedSport:{
    "id":1,
    "title":"Soccer",
    "rank":1,
    "popularity":["Europe", "Africa", "Asia", "America"],
    "fans":"3.5 Billion",
    "picture":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDt6V.rPqgC0/v1/1200x-1.jpg",
    "description":"Association football, commonly known as football or soccer, is a sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries, making it the world’s most popular sport. The game is played on a rectangular field with a goal at each end. The objective of the game is to score by using any part of the body besides the arms and hands to get the football into the opposing goal. The goalkeepers are the only players allowed to touch the ball with their hands or arms while it is in play and then only in their penalty area. And now, it also holds its place among the richest sports in the world in 2020.",
    isModalOpen:false
  },

    }


     export const sportReducer = (state = sports,action) => {
       
        switch(action.type) {
            case "GET_SPORT":
              const state_sportslist = state != null && JSON.parse(localStorage.getItem('sportslist')) === null ? state : JSON.parse(localStorage.getItem('sportslist')) ;
               const array = state_sportslist.list.filter(sport =>
                sport.id == action.payload);
                const object = Object.assign({}, ...array);

                localStorage.setItem('sportslist', JSON.stringify({ ...state_sportslist,loaded:true, selectedSport: object}));
                const updatedsportslist = JSON.parse(localStorage.getItem('sportslist'))
                updatedsportslist.list.forEach(element => {
                  if(element.id === updatedsportslist.selectedSport.id){
                    localStorage.setItem('sportslist', JSON.stringify({ ...updatedsportslist, selectedSport: element}));
                  }
                });
                
                return {
                  ...state,
                  loaded:true,
                  selectedSport: object,
                };

            case "UPDATE_SPORT":
              const sports_list = JSON.parse(localStorage.getItem('sportslist'));
              const updated_list = sports_list.list.map(sport => 
                sport.id === action.payload.id ? action.payload : sport
              )
              localStorage.setItem('sportslist', JSON.stringify({ ...sports_list,list:updated_list}));
              
                return {
                  ...state,
                  list:updated_list
                }

            case "ADD_SPORT":
              const sports__list = state != null && JSON.parse(localStorage.getItem('sportslist')) === null ? state : JSON.parse(localStorage.getItem('sportslist')) ;
              localStorage.setItem('sportslist', JSON.stringify({ ...sports__list, list:[...sports__list.list,action.payload]}));

                return {
                  ...state,
                  list:[...state.list,action.payload]
                }

            case 'OPEN_MODAL':
              const sports____list = state != null && JSON.parse(localStorage.getItem('sportslist')) === null ? state : JSON.parse(localStorage.getItem('sportslist'));
              const array_selected = sports____list.list.map(sport => {
                const returnValue = {...sport};
                if(sport.id == action.payload){
                  returnValue.isModalOpen = true
                }
                return returnValue
              })
              
              localStorage.setItem('sportslist', JSON.stringify({ ...sports____list,list:array_selected}));
    
                return {
                  ...state,
                  list:array_selected
                }
            case "CLOSE_MODAL":
              const sports_____list = state != null && JSON.parse(localStorage.getItem('sportslist')) === null ? state : JSON.parse(localStorage.getItem('sportslist'));
              const array_close_modal = sports_____list.list.map(sport => {
                const returnValue = {...sport};
                if(sport.id == action.payload){
                  returnValue.isModalOpen = false
                }
                return returnValue
              })
              
              localStorage.setItem('sportslist', JSON.stringify({ ...sports_____list,list:array_close_modal}));

              return {
                ...state,list:array_close_modal
              }

            case 'DELETE_SPORT':
              const sports___list = state != null && JSON.parse(localStorage.getItem('sportslist')) === null ? state : JSON.parse(localStorage.getItem('sportslist')) ;
              const list = sports___list.list.filter(sport => sport.id != action.payload);

              localStorage.setItem('sportslist', JSON.stringify({ ...sports___list,list:list}));
              
                return {
                  ...state,list:list
                }
                    
            default:
                return state;
                
        }
    }

    const store = createStore(sportReducer)
    export default store
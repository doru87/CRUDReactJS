import React from 'react';
import Sport from './Sport';
import { connect } from 'react-redux';

 function Sports({sports}) {

    const sportslist = sports != null && JSON.parse(localStorage.getItem('sportslist')) === null ? sports : JSON.parse(localStorage.getItem('sportslist'));
    return (
      <div className="sports_container">
        {sportslist.list.map(sport => {
          return (
            <Sport data={sport}/>
          )
        })}
       </div>
    
    )
}

const mapStateToProps = state => {
  return { sports: state }
}

export default connect(mapStateToProps)(Sports)
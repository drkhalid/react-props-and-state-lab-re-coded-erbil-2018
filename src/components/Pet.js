import React from 'react';
 class Pet extends React.Component {
  
  handleAdoptPet = () => this.props.onAdoptPet(this.props.pet.id)
   render() {
    const { pet: { name, type, gender, age, weight }, isAdopted } = this.props;
     return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
<<<<<<< HEAD
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ?
            <button className="ui disabled button">Already adopted</button>
            :
            <button 
              className="ui primary button" 
              onClick={this.handleAdoptPet}
            >
              Adopt pet
            </button>
=======
            <span className="date">Pet type {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted 
          ?  <button className="ui disabled button">Already adopted</button>
          :<button onClick={this.props.onAdoptPet()}
          className="ui primary button">Adopt pet</button>
            
>>>>>>> 6e3d06efd1da377bb2501dadb261c0499a03a35a
          }
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD
 export default Pet; 
=======

export default Pet;
>>>>>>> 6e3d06efd1da377bb2501dadb261c0499a03a35a

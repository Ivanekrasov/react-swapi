import React, { Component } from 'react';
import './person-details.scss';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from "../error-button/error-button";


export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false
  };

  componentDidMount() {
    this.updatePerson();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.setState({ loading: true })
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.swapiService.getPerson(personId)
      .then((person) => {
        this.setState({ person, loading: false });
      }) 
  }

  render() {
    if (!this.state.person) {
      return <span>Please, select a person from the list</span>;
    }

    if (this.state.loading) {
      return <Spinner />
    }

    const { person: {
      id,
      name,
      gender,
      birthYear,
      eyeColor
    }} = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt="Here a person img should appear"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}

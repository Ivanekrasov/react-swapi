import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'

import './random-planet.scss';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  updatePlanet() {
    this.swapiService.getPlanet(7)
    .then()
  }

  render() {
    const { name, population, rotationPeriod, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
             alt="Here a planet img should appear"/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

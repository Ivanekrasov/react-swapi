import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import './people-page.scss';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(item) => `${item.name} (${item.birthYear})`}
      </ItemList>);

    const personDetails = <ItemDetails personId={this.state.selectedPerson} />

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundry>
    );
  }
}

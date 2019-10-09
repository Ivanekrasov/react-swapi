import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorButton from "../error-button/error-button";
import './item-details.scss';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: false
  };

  componentDidMount() {
    this.updatePerson();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.setState({ loading: true })
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;
    
    if (!itemId) return;
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        });
      }) 
  }

  render() {
    if (!this.state.item) {
      return <span>Detailed information should appear</span>;
    }

    if (this.state.loading) {
      return <Spinner />
    }

    const { item: { name }, image, item } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} 
          alt="Here an img should appear"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
